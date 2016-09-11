---
title: Deploying Nuxeo on Amazon AWS
review:
    comment: ''
    date: ''
    status: ok
labels:
    - amazon-aws
    - cloud-deployment
confluence:
    ajs-parent-page-id: '16810055'
    ajs-parent-page-title: Installation
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Deploying+Nuxeo+on+Amazon+AWS
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Deploying+Nuxeo+on+Amazon+AWS'
    page_id: '16810021'
    shortlink: JYAAAQ
    shortlink_source: 'https://doc.nuxeo.com/x/JYAAAQ'
    source_link: /display/ADMINDOC58/Deploying+Nuxeo+on+Amazon+AWS
history:
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
Need a quick Nuxeo instance for your cloud? You can deploy one in just a few minutes with our CloudFormation template, as we provide a template that will automatically install the latest Nuxeo on your Amazon AWS and all the required resources.

## Prerequisites

You need an account on Amazon AWS with the CloudFormation service activated.
To sign up for AWS, just go to [http://aws.amazon.com/](http://aws.amazon.com/) and click on the &ldquo;Sign Up Now&rdquo; link.

To activate the CloudFormation service, sign in to your management console, click on the &ldquo;CloudFormation&rdquo; tab and follow the instructions.

If you don't have a keypair, you will also want to create a one so you can connect to your instance later. You can create one in the &ldquo;EC2&rdquo; tab in your management console.

You're ready to deploy our template!

## Deploying the Template

Deploying the Nuxeo template on Amazon AWS installs:

*   The latest version of Nuxeo, with a PostgreSQL database and an Apache2 HTTP front-end;
*   All the required Amazon resources, which are: an EC2 instance, an elastic IP, an EBS volume.

**To deploy the Nuxeo template:**

1.  Sign in to your CloudFormation management console.
2.  Choose the region you want your stack to be deployed in.
    ![]({{file name='SelectRegion.png'}} ?border=true)
3.  Start the new stack creation by clicking the "Create New Stack" button.
    ![]({{file name='CreateNewStack.png'}} ?border=true)
4.  Choose a stack name and fill in the template URL with: [https://nuxeo.s3.amazonaws.com/templates/Nuxeo.template](https://nuxeo.s3.amazonaws.com/templates/Nuxeo.template).
    ![]({{file name='StackScreen1.png'}} ?w=500,border=true)
    Note: in some regions, AWS will tell you that is not a S3 URL, in that case just download the file locally and use the "Upload a template" option.
5.  Fill in your previously created keypair name (KeyName) and the type of amazon instance you want.
    You can find a list of instance types at [http://aws.amazon.com/ec2/instance-types/](http://aws.amazon.com/ec2/instance-types/). The default (c1.medium) is suitable for small to medium size installations.
    If you choose a different instance type, check its &ldquo;API name&rdquo; on the instance types page and use that for the "InstanceType" field.
    ![]({{file name='StackScreen2.png'}} ?w=500,border=true)
6.  Review your settings and click on the "Create Stack" button to start the creation process.
    ![]({{file name='StackScreen3.png'}} ?w=500,border=true)
    After a few minutes, the instance creation is complete.
    ![]({{file name='CreateComplete.png'}} ?border=true)

    {{#> callout type='tip' }}

    Hit the &ldquo;Refresh&rdquo; button on the top right corner of the page now and then as it doesn't auto-refresh.

    {{/callout}}
7.  Select the line that shows your new CloudFormation stack, then the &ldquo;Outputs&rdquo; tab at the bottom.
    It shows the URL at which you can reach your brand new Nuxeo.

    {{#> callout type='info' }}

    Note that it can take a few more minutes for Nuxeo to be active on that URL as there can still be some installation tasks running at this point.

    {{/callout}}

The template can be used for testing and production purposes. As for every production setup, you will want to check that the configuration suits your needs and tune it as needed: [HTTPS setup]({{page page='http-and-https-reverse-proxy-configuration'}}), disk size, ...