---
title: Deploying Nuxeo on Amazon AWS
review:
    comment: ''
    date: '2016-12-14'
    status: ok
labels:
    - lts2016-ok
    - amazon-aws
    - mcedica
    - cloud-deployment
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '3866685'
    ajs-parent-page-title: Installation
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Deploying+Nuxeo+on+Amazon+AWS
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Deploying+Nuxeo+on+Amazon+AWS'
    page_id: '7536937'
    shortlink: KQFz
    shortlink_source: 'https://doc.nuxeo.com/x/KQFz'
    source_link: /display/NXDOC/Deploying+Nuxeo+on+Amazon+AWS
tree_item_index: 700
version_override:
    LTS 2015: 710/admindoc/deploying-nuxeo-on-amazon-aws
    '6.0': 60/admindoc/deploying-nuxeo-on-amazon-aws
    '5.8': 58/admindoc/deploying-nuxeo-on-amazon-aws
history:
    -
        author: Manon Lumeau
        date: '2016-03-23 16:40'
        message: ''
        version: '13'
    -
        author: Mathieu Guillaume
        date: '2015-12-08 11:09'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-11-26 11:34'
        message: ''
        version: '11'
    -
        author: Julien Carsique
        date: '2014-05-07 12:20'
        message: ''
        version: '10'
    -
        author: Julien Carsique
        date: '2014-05-07 12:19'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2013-10-14 16:03'
        message: ''
        version: '8'
    -
        author: Florent Guillaume
        date: '2013-03-25 15:25'
        message: ''
        version: '7'
    -
        author: Florent Guillaume
        date: '2013-03-25 15:25'
        message: ''
        version: '6'
    -
        author: Mathieu Guillaume
        date: '2012-03-19 20:45'
        message: Migrated to Confluence 4.0
        version: '5'
    -
        author: Mathieu Guillaume
        date: '2012-03-19 20:45'
        message: ''
        version: '4'
    -
        author: Mathieu Guillaume
        date: '2011-12-13 16:29'
        message: ''
        version: '3'
    -
        author: Mathieu Guillaume
        date: '2011-06-10 16:44'
        message: ''
        version: '2'
    -
        author: Mathieu Guillaume
        date: '2011-06-10 16:42'
        message: ''
        version: '1'
---

{{! excerpt}}
Need a quick Nuxeo Platform instance for your cloud? You can deploy one in just a few minutes with our CloudFormation template, as we provide a template that will automatically install the latest Nuxeo on your Amazon AWS and all the required resources.
{{! /excerpt}}

## Prerequisites

You need an account on Amazon AWS with the CloudFormation service activated.

To sign up for AWS, just go to [http://aws.amazon.com/](http://aws.amazon.com/) and click on the &ldquo;Sign Up Now&rdquo; link.

To activate the CloudFormation service, sign in to your management console, click on the &ldquo;CloudFormation&rdquo; tab and follow the instructions.

If you don't have a keypair, you will also want to create a one so you can connect to your instance later. You can create one in the &ldquo;EC2&rdquo; tab in your management console.

You're ready to deploy our template!

## Deploying the Template

Deploying the Nuxeo template on Amazon AWS installs:

*   The latest version of the Nuxeo Platform (LTS or FastTrack), with a PostgreSQL database and an Apache2 HTTP front-end
*   All the required Amazon resources, which are: an EC2 instance, an elastic IP, an EBS volume.

**To deploy the Nuxeo template:**

1.  Sign in to your CloudFormation management console.
2.  Choose the region you want your stack to be deployed in.
    ![]({{file name='SelectRegion.png'}} ?w=150 ?border=true)
3.  Start the new stack creation by clicking the **Create New Stack** button.
    ![]({{file name='CreateNewStack.png'}} ?w=150 ?border=true)
4.  On the first page of the Wizard on **Select Template**, choose **Specify an Amazon S3 template URL**, and put:
    - `https://nuxeo.s3.amazonaws.com/templates/Nuxeo.template` (for the latest LTS)
    - `https://nuxeo.s3.amazonaws.com/templates/NuxeoFT.template` (for the latest FastTrack).
    ![]({{file name='StackScreen1.png'}} ?w=500,border=true)
    {{#> callout type='note' }}
    In some regions, AWS will tell you that is not a S3 URL, in that case just download the file locally and use the "Upload a template" option. Press "Next" button to proceed.
    {{/callout}}
5.  On next page for **Specify Details** type the stack name for your instance. For **Instance Type** put the type of amazon instance you want.
    You can find a list of instance types at [http://aws.amazon.com/ec2/instance-types/](http://aws.amazon.com/ec2/instance-types/). The default (c3.large) is suitable for small to medium size installations.
    If you choose a different instance type, check its &ldquo;Model&rdquo; on the instance types page and use that for the "InstanceType" field.
    Put also in a previously created and existing keypair name (KeyName). This key must exist or the stack creation will fail.
    Press "Next" button to proceed.
    ![]({{file name='StackScreen2.png'}} ?w=500,border=true)
6.  On "Options" page feel free to customize tags or assign an IAM Role to access other resources like S3 Buckets.
    ![]({{file name='StackScreen3.png'}} ?w=500,border=true)

7.  Review your settings and click on the **Create Stack** button to start the creation process.
    ![]({{file name='StackScreen4.png'}} ?w=500,border=true)
    After a few minutes, the instance creation is complete.
    ![]({{file name='CreateComplete.png'}} ?border=true)

    {{#> callout type='tip' }}
    Click on the **Refresh** button on the top right corner of the page now and then as it doesn't auto-refresh.
    {{/callout}}
8.  Select the line that shows your new CloudFormation stack, then the **Outputs** tab at the bottom.
    It shows the URL at which you can reach your brand new Nuxeo Platform.

    {{#> callout type='info' }}
    Note that it can take a few more minutes for the Nuxeo Platform to be active on that URL as there can still be some installation tasks running at this point.
    {{/callout}}

The template can be used for testing and production purposes. As for every production setup, you will want to check that the configuration suits your needs and tune it as needed: [HTTPS setup]({{page page='http-and-https-reverse-proxy-configuration'}}), disk size, ...
