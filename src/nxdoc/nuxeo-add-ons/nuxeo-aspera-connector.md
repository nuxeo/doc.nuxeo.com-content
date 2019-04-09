---
title: Nuxeo Aspera Connector
description: 'Nuxeo Aspera Connector enables users to download/upload binaries with Aspera.'
review:
    comment: ''
    date: '2019-02-05'
    status: ok
labels:
    - lts2019-ok
    - vpasquier
toc: true
hidden: true
tree_item_index: 1100
---

{{! excerpt}}
The [Nuxeo Aspera Connector addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-aspera-connector) enables users to download/upload binaries with Aspera.
{{! /excerpt}}

## Requirements

Aspera Desktop Client - [latest version](https://downloads.asperasoft.com/en/downloads/2).

## Installation

Installation is made of two steps:

1.  Install the [Nuxeo Package](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-aspera-connector) available from the marketplace.
1.  Install the [Aspera desktop client](http://d3gcli72yxqn2z.cloudfront.net/connect/v4/bin/IBMAsperaConnectInstaller-3.8.1.161274.dmg).

## Configuration

### Aspera Configuration

We need to configure 2 nodes, one for upload and one for download, each one will bet attached to one S3 bucket in Nuxeo:
- The main Nuxeo S3 bucket in Nuxeo is going to be used for download purpose
- While the S3 transient store bucket is used for upload purpose

Follow this [documentation](https://aspera.ibmaspera.com/help/transfer_service/managing_transfer_service_with_aspera_apis/adding_a_transfer_service_node_to_the_organization-1) to attach these S3 buckets to Aspera.

While following the documentation above, pay attention to the fact that for `Download` the IAM role used by Aspera only needs `READ` permissions on the bucket, so the policy attached to this role can be added like this:

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetObject",
        "s3:GetBucketLocation"
      ],
      "Resource": [
        "arn:aws:s3:::bucket-name",
        "arn:aws:s3:::bucket-name/\*"
      ]
    }
  ]
}
```

Then the policy for `Upload` must be able to put and get objects from the S3 bucket:

```
{
  "Version": "2012-10-17",
  "Statement": [
  {
    "Sid": "VisualEditor0",
    "Effect": "Allow",
    "Action": [
    "s3:PutObject",
    "s3:GetObject",
        "s3:AbortMultipartUpload",
        "s3:DeleteObject",
        "s3:ListMultipartUploadParts"
      ],
      "Resource": "arn:aws:s3:::bucket-name/*"
    },
    {
      "Sid": "VisualEditor1",
      "Effect": "Allow",
      "Action": [
        "s3:ListBucketMultipartUploads",
        "s3:ListBucket",
        "s3:GetBucketLocation"
      ],
      "Resource": "arn:aws:s3:::bucket-name"
    }
  ]
}
```

### Nuxeo Configuration

#### Transient Store on AWS

To be able to use S3 direct upload with Nuxeo, you will need to add another policy to a new role:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListAllMyBuckets"
            ],
            "Resource": "arn:aws:s3:::*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket",
                "s3:GetBucketLocation",
                "s3:AbortMultipartUpload",
                "s3:ListMultipartUploadParts",
                "s3:ListBucketMultipartUploads"
            ],
            "Resource": "arn:aws:s3:::yourbucketname"
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:DeleteObject",
                "s3:AbortMultipartUpload",
                "s3:ListMultipartUploadParts",
                "s3:ListBucketMultipartUploads"
            ],
            "Resource": "arn:aws:s3:::yourbucketname/*"
        }
    ]
}
```

Make sure to set all configuration values in `nuxeo.conf`:

```
nuxeo.s3storage.useDirectUpload=false
nuxeo.s3storage.transient.bucket=YOUR_TRANSIENT_BUCKET
nuxeo.s3storage.transient.roleArn=ROLE_THAT_CAN_WRITE_ON_IT
nuxeo.s3storage.transient.awsid=
nuxeo.s3storage.transient.awssecret=
nuxeo.s3storage.transient.awstoken=
nuxeo.s3storage.transient.region=
```

#### Aspera Nuxeo Configuration

Add the aspera access keys in `nuxeo.conf`:

Example:

```
## is the same for the 2 nodes
aspera.node.url=https://ats-aws-us-east-1.aspera.io
aspera.node.port=443

### ACCESS KEY ON UPLOAD NODE LINKED TO TS S3 BUCKET
aspera.acess.key.id=
### SECRET KEY ON UPLOAD NODE LINKED TO TS S3 BUCKET
aspera.acess.key.secret=

### ACCESS KEY ON DOWNLOAD NODE LINKED TO TMAIN S3 BUCKET
aspera.download.acess.key.id=
### SECRET KEY ON DOWNLOAD NODE LINKED TO MAIN S3 BUCKET
aspera.download.acess.key.secret=
```

#### Nuxeo Lambda Configuration

- A lambda function is configured on the same region as the S3 bucket:

    - Triggered on PUT Object.
    - Filter objects with prefix `batchId`.
    - Returning the url `$NUXEO/site/lambda/success/$batchId` to your Nuxeo.
    - The lambda function must be configured to filter on prefix `batchId`.

Set up those two scripts on your AWS Lambda account:

`api_caller.js`:

```
const request = require('request');

class Caller {

    constructor(host, cbId) {
        this.host = host;
        this.cbId = cbId;
    }

    call(meta, startTime, success=true, error=null) {
        var json = {};
        json.time = new Date() - startTime;
        json.images = meta;
        json.error = error;

        console.log('JSON:', json);
        const path = this.buildPath(success);
        console.log("request:", path);
        return new Promise(function (resolve, reject) {
            request.post(path, {
                json: json,
                headers: {
                    'Content-Type': 'application/json'
                }
            }, function (err, response, _) {
                if (err) {
                    console.log('Error on callREST', err);
                    return;
                }
                if (success) {
                    resolve(response);
                } else {
                    resolve(error);
                }
            });
        });
    }

    buildPath(success) {
        const domain = this.host + '/site/lambda/';
        if (success) {
            return domain + 'success/' + this.cbId;
        } else {
            return domain + 'error/' + this.cbId;
        }
    }

}

module.exports = Caller;
```

`lambda_function.js`:

```
'use strict';

const Caller = require('api_caller');
const aws = require('aws-sdk');
const s3 = new aws.S3({ apiVersion: '2006-03-01' });

exports.handler = async (event, context) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    const bucket = event.Records[0].s3.bucket.name;
    const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    const params = {
        Bucket: bucket,
        Key: key,
    };
    let caller = new Caller('NUXEO_URL/nuxeo', key);
    let result = {};
    try {
        return caller.call(result, new Date());
    } catch (err) {
        console.log(err);
        const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
        console.log(message);
        throw new Error(message);
    }
};
```

- Setup S3 event in the lambda console to trigger the function with event `ObjectCreatedByPut`.

## Nuxeo UI Implementation

When running Nuxeo with the addon installed, you can go to `NUXEO_URL/nuxeo/app/` to get a simple UI example on how to use the Aspera connector:

- To upload a file in a given location via the connector
- To upload and add a file to a given document via the connector
- To list all documents with binaries and download them via the connector

Here is [the complete example of implementation](https://github.com/nuxeo-sandbox/nuxeo-aspera-web-sample/src).
- `my-app` is the main page containing all `pages` folder pages.
- In each page, `aspera-connector` is called to set Aspera authentication in place.
- `aspera-connector.html` is wrapping the Aspera API to be used for upload/download via the connector.
