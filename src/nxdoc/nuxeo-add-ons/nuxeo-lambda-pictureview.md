---
title: Nuxeo Lambda PictureView Conversion
review:
    comment: ''
    date: '2019-11-29'
    status: ok
labels:
    - gcarlin
    - lambda
    - lts2017-ok
    - university
toc: true
tree_item_index: 2060
---

{{#> callout type='info'}}
Watch the related courses on Nuxeo University:
- [DAM Architecture course](https://university.nuxeo.com/learn/public/course/view/elearning/98/dam-architecture).
- [LTS 2017 new feature with Nuxeo Stream and the Lambda integration](https://university.nuxeo.com/learn/public/course/view/elearning/126/lts-2017-new-features) *(min 3'00)*
![]({{file name='nx_lambda_university.png'}} ?w=600,border=true)
{{/callout}}

## {{> anchor 'functional-overview'}}Functional Overview

The [Nuxeo Lambda PictureView Conversion addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-lambda-marketplace-package) enables users to dramatically improve the Nuxeo picture conversions speed by offloading this heavy processing from Nuxeo/WorkManager to AWS Lambda. As a result, the Nuxeo instance performance are highest when uploading thousands of pictures. Behind the scene, AWS Lambda has access to ImageMagick and generate externally picture conversions from assets stored in S3.

## {{> anchor 'prerequisites'}}Prerequisites

- An AWS account with a running Nuxeo instance on Amazon EC2
- The [Amazon S3 Online Storage]({{page version='' space='nxdoc' page='amazon-s3-online-storage'}}) addon configured on your instance
- The [Nuxeo DAM]({{page version='' space='nxdoc' page='digital-asset-management-dam'}}) installed on your instance

## {{> anchor 'installation'}}Installation

{{{multiexcerpt 'MP-installation-easy' page='Generic Multi-Excerpts'}}}

## {{> anchor 'configuration'}}Configuration

The configuration is made of two steps:
- [Creation of the Lambda function](#lambda-configuration)
- [Configuration of Nuxeo to call the Lambda function](#nuxeo-server-configuration)

### Lambda Configuration

#### Lambda Function Initialization

- Connect to AWS and search for the **Lambda** service
- Create a new function with the following properties
  - Name: A unique name (`test_nuxeoPictureConversion` for example)
  - Runtime: `Node.js 6.10`
  - Role: You can leave the default value
  - Existing role: `service-role/lambda-role`

Your Lambda function should be initialized:
![]({{file name='nx_lambda_initialized.png'}} ?w=650,border=true)

#### Lambda Function Import

- Open your command line editor
- Clone the nuxeo-lambda-pictureview-conversion GitHub project by executing:
  ```
  git clone https://github.com/nuxeo/nuxeo-lambda-pictureview-conversion.git
  ```
- Go to `nuxeo-lambda-pictureview-conversion/aws_lambda_impl` folder and generate the package using `npm i`
- Go to the `nuxeo_lambda_impl` folder and create a .zip file containing all its content
- In the AWS Lambda function screen, go to the **Function code** section. At this point you need to generate a .zip file which stores the lambda function
![]({{file name='nx_lambda_function_code.png'}} ?w=450,border=true)
- Upload the .zip file in the **Section package** field and update the handler name to `lambda_function.handler`

#### Lambda Function Tuning

- Ensure you have enough memory and your timeout is big enough (in the **Basic settings** section)
- Check also that the timeout duration is reasonable (set to 1 or 3 seconds by default, which doesn't let enough time for picture conversions)
![]({{file name='nx_lambda_memory.png'}} ?w=650,border=true)


### Nuxeo Server Configuration

Nuxeo Server needs to identify which lambda function to call for the picture conversion. This is done by adding the parameter `nuxeo.lambda.image.conversion` in the Nuxeo server configuration file [nuxeo.conf]({{page page='configuration-parameters-index-nuxeoconf'}}) and giving it a value to your function (`test_nuxeoPictureConversion` in our example).

## Monitor the Lambda Function Activity

In order to see how the lambda function is running, click on the **Monitoring** tab of your AWS Lambda function.

On your Nuxeo server, when you import or create any picture, Nuxeo should convert successfully the different renditions and you should observe a pick of activity on the **Invocation count** and the **Invocation duration** diagram:

![]({{file name='nx_lambda_invocation.png'}} ?w=350,border=true)
