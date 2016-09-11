---
title: Nuxeo Datadog Reporter
review:
    comment: ''
    date: ''
    status: ok
labels:
    - content-review-lts2015
    - last-review-20150708
confluence:
    ajs-parent-page-id: '28475782'
    ajs-parent-page-title: Marketplace Add-Ons
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: Nuxeo+Datadog+Reporter
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/Nuxeo+Datadog+Reporter'
    page_id: '27604623'
    shortlink: jzalAQ
    shortlink_source: 'https://doc.nuxeo.com/x/jzalAQ'
    source_link: /display/NXDOC710/Nuxeo+Datadog+Reporter
history:
    - 
        author: Manon Lumeau
        date: '2016-08-12 12:39'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2016-08-05 07:50'
        message: ''
        version: '8'
    - 
        author: Damien Metzler
        date: '2016-08-04 08:42'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2015-09-28 08:32'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2015-09-28 08:32'
        message: ''
        version: '5'
    - 
        author: Arnaud Kervern
        date: '2015-09-25 09:51'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2015-07-08 10:04'
        message: 'Add links, format'
        version: '3'
    - 
        author: Antoine Taillefer
        date: '2015-07-08 07:06'
        message: ''
        version: '2'
    - 
        author: Damien Metzler
        date: '2015-07-07 15:10'
        message: ''
        version: '1'

---
{{! excerpt}}

The [Nuxeo Datadog Reporter addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-datadog-reporter) allows to report all the Nuxeo metrics to [Datadog](https://www.datadoghq.com/), a SaaS platform to collect your metrics.

{{! /excerpt}}

## Installation / Configuration

1.  {{{multiexcerpt 'MP-installation-easy' page='NXDOC:Generic Multi-Excerpts'}}}
2.  Then add your Datadog API key in [nuxeo.conf]({{page space='admindoc710' page='configuration-parameters-index-nuxeoconf'}}):

    {{#> panel type='code' heading='Configuration'}}

    ```text
    # Datadog API_KEY
    datadog.apikey=YOUR_OWN_API_KEY

    # HOSTNAME for the machine used in Datadog
    datadog.host=myspecialhost.com

    # Optional: interval in seconds for reports to be sent to Datadog
    # datadog.pollinterval=10
    ```

    {{/panel}}

## Exploring Metrics in Datadog

After starting Nuxeo, you should be able to explore your host's metrics :

![]({{file name='datadog_metrics_explorer.png'}} ?w=500,h=478,border=true)