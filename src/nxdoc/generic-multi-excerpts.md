---
title: Generic Multi-Excerpts
review:
    comment: ''
    date: '2019-02-13'
    status: ok
labels:
    - lts2016-ok
    - multiexcerpt
    - content-review-lts2017
confluence:
    ajs-parent-page-id: ''
    ajs-parent-page-title: ''
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Generic+Multi-Excerpts
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Generic+Multi-Excerpts'
    page_id: '20520186'
    shortlink: _hw5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/_hw5AQ'
    source_link: /display/NXDOC/Generic+Multi-Excerpts
hidden: true
history:
    -
        author: Manon Lumeau
        date: '2016-08-03 08:32'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2016-08-03 08:16'
        message: ''
        version: '11'
    -
        author: Alain Escaffre
        date: '2016-08-02 12:11'
        message: ''
        version: '10'
    -
        author: Alain Escaffre
        date: '2016-08-02 12:10'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2015-12-16 14:43'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2015-11-27 15:56'
        message: ''
        version: '7'
    -
        author: Manon Lumeau
        date: '2015-10-20 15:21'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2015-10-13 07:54'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2015-07-08 10:02'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2015-04-08 09:25'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2014-12-11 10:44'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2014-12-02 14:32'
        message: ''
        version: '1'

---
{{! multiexcerpt name='DeprecatedAddon'}}
{{#> callout type='note' }}
This addon is deprecated since Nuxeo Platform LTS 2016.
{{/callout}}
{{! /multiexcerpt}}

{{! multiexcerpt name='DeprecatedAddon_8.10'}}
This addon is deprecated since Nuxeo Platform LTS 2016.
{{! /multiexcerpt}}

{{! multiexcerpt name='DeprecatedAddon_10.10'}}
{{#> callout type='note' }}
This addon is deprecated since Nuxeo Platform LTS 2019.
{{/callout}}
{{! /multiexcerpt}}

{{! multiexcerpt name='JSF-UI-required'}}
{{#> callout type='note' heading='JSF UI Deprecation' }}
This requires to have the JSF UI addon installed on your server that is deprecated since Nuxeo Platform LTS 2019.</br>
Please refer to the [Web UI documentation](https://doc.nuxeo.com/nxdoc/web-ui/).
{{/callout}}
{{! /multiexcerpt}}

{{! multiexcerpt name='MP-installation-easy'}}
This addon requires no specific installation steps. It can be installed like any other package with [nuxeoctl command line]({{page page='installing-a-new-package-on-your-instance'}}#installing-a-package-using-the-nuxeoctl-script) or [from the Marketplace](https://connect.nuxeo.com/nuxeo/site/marketplace).
{{! /multiexcerpt}}

{{! multiexcerpt name='ProdpadFeedback'}}
You can also give us your feedback and suggestions through our [feedback portal](https://portal.prodpad.com/b1506780-8c96-11e7-b106-0abbec7104a5).
{{! /multiexcerpt}}

{{! multiexcerpt name='Designer-restricted-access-note'}}
{{#> callout type='note' }}
Studio Designer is available as a public Beta version.
{{/callout}}
{{! /multiexcerpt}}

{{! multiexcerpt name='quick-switcher'}}
{{#> callout type='tip' }}
Jump between any Studio feature or menu in a snap by typing its name. This action can be triggered by clicking the **Jump To** option on the bottom left of your Studio project, or using the Ctrl + K / ⌘ + K shortcut.
{{/callout}}
{{! /multiexcerpt}}

&nbsp;

&nbsp;

{{! multiexcerpt name='what-is-nuxeo-platform'}}

The Nuxeo Platform provides a content repository for [document management](https://www.nuxeo.com/solutions/document-management/), [digital asset management](https://www.nuxeo.com/solutions/dam-digital-asset-management/) and [case management](https://www.nuxeo.com/solutions/case-management/) business applications.

{{! /multiexcerpt}}

{{! multiexcerpt name='JSF-UI-required'}}
{{#> callout type='note' heading='JSF UI Deprecation' }}
This requires to have the JSF UI addon installed on your server that is deprecated since Nuxeo Platform LTS 2019.</br>
Please refer to the [Web UI documentation](https://doc.nuxeo.com/nxdoc/web-ui/).
{{/callout}}
{{! /multiexcerpt}}

{{! multiexcerpt name='lts2021-general-prerequisites'}}

You need to check the following items in order to install Nuxeo Platform LTS 2021:
- Get a Nuxeo Online Services account. If not, please check the [Nuxeo Download page](https://www.nuxeo.com/downloads/) and create a trial account.
- Make sure you have a valid Nuxeo Connect token to register your instance. Please check the [Token Management]({{page version='' space='studio' page='token-management'}}) documentation page.

{{#> callout type='info' }}
These steps are not required if you **only** pull the default Nuxeo Docker image.
{{/callout}}

{{! /multiexcerpt}}

{{! multiexcerpt name='lts2021-docker-prerequisites'}}

In terms of software, the only requirement to run the Nuxeo Docker image is [Docker](https://docs.docker.com/get-docker/) itself: Java, as well as all the external software, are integrated in the Docker image.

{{#> callout type='warning' heading='PRIVATE IMAGE'}}
You should have access to our private [Docker registry](https://packages.nuxeo.com/#browse/search/docker=attributes.docker.imageName%3Dnuxeo%2Fnuxeo%20AND%20attributes.docker.imageTag%3D2021*%20AND%20repository_name%3Ddocker-private). Contact your Nuxeo Administrator or Nuxeo sales representative to get access to this image.
{{/callout}}

{{! /multiexcerpt}}

{{! multiexcerpt name='addon-default-distribution'}}
{{#> callout type='warning' }}
Starting from Nuxeo Platform LTS 2021, this addon is integrated by default in the distribution.
{{/callout}}
{{! /multiexcerpt}}
