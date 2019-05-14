---
title: How to Debug a Test Run with Maven
description: Discover how to debug a test run with Maven using Eclipse. 
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '950316'
    ajs-parent-page-title: Unit Testing
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: How+to+Debug+a+Test+Run+with+Maven
    canonical_source: 'https://doc.nuxeo.com/display/CORG/How+to+Debug+a+Test+Run+with+Maven'
    page_id: '3343477'
    shortlink: dQQz
    shortlink_source: 'https://doc.nuxeo.com/x/dQQz'
    source_link: /display/CORG/How+to+Debug+a+Test+Run+with+Maven
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2015-04-08 09:30'
        message: ''
        version: '25'
    -
        author: Julien Carsique
        date: '2013-07-23 13:56'
        message: ''
        version: '24'
    -
        author: Julien Carsique
        date: '2013-07-23 13:52'
        message: ''
        version: '23'
    -
        author: Stéfane Fermigier
        date: '2010-08-04 11:55'
        message: Migrated to Confluence 4.0
        version: '22'
    -
        author: Stéfane Fermigier
        date: '2010-08-04 11:55'
        message: ''
        version: '21'
    -
        author: Stéfane Fermigier
        date: '2010-08-04 11:54'
        message: ''
        version: '20'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 17:12'
        message: ''
        version: '19'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 14:43'
        message: ''
        version: '18'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:27'
        message: ''
        version: '17'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:23'
        message: ''
        version: '16'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 10:12'
        message: ''
        version: '15'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 09:13'
        message: ''
        version: '14'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 09:07'
        message: ''
        version: '13'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 08:54'
        message: ''
        version: '12'
    -
        author: Stéfane Fermigier
        date: '2010-07-22 08:50'
        message: ''
        version: '11'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 20:10'
        message: ''
        version: '10'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 20:03'
        message: ''
        version: '9'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 19:20'
        message: ''
        version: '8'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 19:00'
        message: ''
        version: '7'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:38'
        message: ''
        version: '6'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:22'
        message: ''
        version: '5'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:17'
        message: ''
        version: '4'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:11'
        message: ''
        version: '3'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:09'
        message: ''
        version: '2'
    -
        author: Stéfane Fermigier
        date: '2010-07-21 18:00'
        message: ''
        version: '1'
---

Due to different class loading rules and test order, test results might change if you run them inside Eclipse or with Maven. Note however that such cases raise an issue in the way the tests are written.

### Using Eclipse to debug tests run with Maven

To debug the `MySuperClassTest` class:

1.  Start the Maven test for this class only, in debug mode:

    ```
    mvn -Dtest=MySuperClassTest -Dmaven.surefire.debug test

    ```

    The test will wait for Eclipse to connect.

2.  Open the **Debug Configuration** in Eclipse and set up a remote application on port 5005\. Run the configuration. The test will resume. You can use break points and all the usual features of Eclipse debugging.

More information is available on the [maven-surefire-plugin page](http://maven.apache.org/plugins/maven-surefire-plugin/index.html).

&nbsp;
