---
title: Nuxeo Drive FAQ
review:
    comment: ''
    date: '2017-10-12'
    status: ok
labels:
    - nuxeo-drive
    - yachour
    - multiexcerpt
    - excerpt
    - lts2017-ok
toc: true
tree_item_index: 900
version_override:
    LTS 2015: 710/userdoc/nuxeo-drive-faq
    '6.0': 60/userdoc/nuxeo-drive-faq
confluence:
    ajs-parent-page-id: '13664723'
    ajs-parent-page-title: Nuxeo Drive
    ajs-space-key: USERDOC
    ajs-space-name: Nuxeo Platform User Documentation
    canonical: Nuxeo+Drive+FAQ
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC/Nuxeo+Drive+FAQ'
    page_id: '23364863'
    shortlink: '-4RkAQ'
    shortlink_source: 'https://doc.nuxeo.com/x/-4RkAQ'
    source_link: /display/USERDOC/Nuxeo+Drive+FAQ
history:
    -
        author: Antoine Taillefer
        date: '2016-05-30 17:25'
        message: ''
        version: '16'
    -
        author: Antoine Taillefer
        date: '2016-01-07 10:51'
        message: ''
        version: '15'
    -
        author: Antoine Taillefer
        date: '2016-01-07 10:49'
        message: ''
        version: '14'
    -
        author: Antoine Taillefer
        date: '2016-01-07 10:45'
        message: ''
        version: '13'
    -
        author: Antoine Taillefer
        date: '2016-01-06 16:43'
        message: ''
        version: '12'
    -
        author: Antoine Taillefer
        date: '2015-10-27 13:50'
        message: ''
        version: '11'
    -
        author: Thierry Delprat
        date: '2015-10-27 13:42'
        message: ''
        version: '10'
    -
        author: Thierry Delprat
        date: '2015-10-27 13:41'
        message: ''
        version: '9'
    -
        author: Antoine Taillefer
        date: '2015-10-27 11:37'
        message: ''
        version: '8'
    -
        author: Antoine Taillefer
        date: '2015-10-27 11:33'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2015-06-09 09:25'
        message: ''
        version: '6'
    -
        author: Antoine Taillefer
        date: '2015-06-08 14:33'
        message: ''
        version: '5'
    -
        author: Antoine Taillefer
        date: '2015-06-08 14:31'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2015-01-20 15:31'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2015-01-20 15:26'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2015-01-20 15:26'
        message: ''
        version: '1'

---
{{! multiexcerpt name='drive_faq_page_content'}}{{! excerpt}}

This page non exhaustively lists frequently asked questions about Nuxeo Drive

{{! /excerpt}}

## What are the required Nuxeo versions/hotfixes when using a Drive client version?

In order to be fully compatible with Nuxeo Drive, the  minimum required version of the `nuxeo-drive` server addon is:

  - **7.10**: 1.5.7
  - **8.10**: 1.6.6
  - **9.10**: 1.7.3
  - **10.10**: 1.8.1

And the minimum required installed Hotfix (HF) is:

 Client | 7.10 | 8.10 | 9.10 | 10.10
 --- | --- | --- | --- | ---
3.x | HF43 | HF33 | HF12 | HF0
4.0.x | HF47 | HF39 | HF22 | HF0

## How to Configure the Synchronization Delay

Since the version `1.3.1216` of Nuxeo Drive client, the synchronization delay is 30 seconds (5 seconds in the previous releases). There are three ways to change this value:

1. For test purpose, run Nuxeo Drive in console mode with the `--delay` parameter:

```bash
ndrive --delay=120
```

2. Add a `config.ini` file in the folder `C:\Users\<username>\.nuxeo-drive` with the following lines:

```text
[DEFAULT]
env=longDelay

[longDelay]
delay=120
```
This example sets the delay to 120 seconds by activating the `longDelay` setting environment.

3. Finally, if you want to change the delay for all the Nuxeo Drive clients, you can update the `delay` setting of the [Nuxeo Drive global configuration]({{page page='how-to-configure-nuxeo-drive-globally'}}).

## How to Change the Log Verbosity

1. The simplest way is through the Advanced tab of the Settings panel.

2. This can also done as for the previous paragraph by adding the following lines in the `config.ini` file:

    * Increase log verbosity:

    ```
    log-level-file=TRACE
    ```

    *   Decrease log verbosity:

    ```
    log-level-file=ERROR
    ```

3. Finally, if you want to change the log verbosity for all the Nuxeo Drive clients, you can update the `log_level_file` setting of the [Nuxeo Drive global configuration]({{page page='how-to-configure-nuxeo-drive-globally'}}).

## How to Change the Synchronization Folder

The configuration of the synchronization folder needs to be done at the first setup of Drive.

In the Settings screen, you can switch to another folder by clicking on the `...` button, as you can see on this picture.

![]({{file name='drive_Accounts_tab.png' page='nuxeo-drive'}} ?w=400)

## How to Make Nuxeo Drive Work with a Nuxeo Cluster

### Nuxeo LTS 2015 and higher

You only need to make sure that:

*   [Redis]({{page space='nxdoc' page='redis-configuration'}}) is enabled.
*   The `$DATA_DIR/transientstores/default` directory is shared by all the Nuxeo instances, see the [related documentation]({{page space='nxdoc' page='nuxeo-clustering-configuration'}}#transient-store) for details.

### Nuxeo 7.4 and lower

You can:

*   Configure Apache with `mod_proxy_balancer` to use [load balancing with stickyness](https://httpd.apache.org/docs/2.4/en/mod/mod_proxy_balancer.html).

    {{#> panel type='code' heading='Apache-side sticky session'}}

    ```
    Header add Set-Cookie "ROUTEID=.%{BALANCER_WORKER_ROUTE}e; path=/" env=BALANCER_ROUTE_CHANGED
    <Proxy balancer://nuxeocluster>
        BalancerMember http://nuxeo1:8080 route=1
        BalancerMember http://nuxeo2:8080 route=2
    ProxySet stickysession=ROUTEID
    </Proxy>
    ProxyPass        "/" "balancer://nuxeocluster/"
    ProxyPassReverse "/" "balancer://nuxeocluster/"
    ProxyPreserveHost On
    ```

    {{/panel}}

    Also see [https://wiki.apache.org/httpd/LoadBalanceWithoutStickyCookie](https://wiki.apache.org/httpd/LoadBalanceWithoutStickyCookie).

*   Use AWS [Elastic Load Balancing with sticky sessions](http://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/elb-sticky-sessions.html).

## How to Report Bugs or Problems about Nuxeo Drive Usage

If you want to report any issue regarding Nuxeo Drive, you need to provide these informations:

- Drive client version, for example `2.0.0911`: this information can be found in the **Settings** > **About** menu when doing a right-click on Nuxeo Drive icon in the systray
- Drive package version, for example `1.4.4`: this information can be found in **Admin** > **Update Center** > **Local packages** (administrator rights are needed to access this section)
- Nuxeo Platform version, for example `6.0`, and the level of hotfixes installed
- Bug report generated by Nuxeo Drive, see **Settings > Advanced > Click to generate a bug report**.
- Drive client logs, located in `C:\Users\<username>\.nuxeo-drive\logs\nxdrive.log`
- Nuxeo Platform logs, located in `$NUXEO/log/server.log` by default

## Limitations

Currently Nuxeo Drive has some limitations:

- Synchronizing very big files may be an issue if your network connection is slow or unstable. This will be improved by uploading files by chunks and allowing to resume uploads, see [NXDRIVE-457](https://jira.nuxeo.com/browse/NXDRIVE-457).
- The target use case is not to synchronize a huge tree on a lot of desktops: Nuxeo Drive is not optimized to replicate the Document Repository on each desktop.
- Complex synchronization cases where you delete files that are being synchronized.
- Drive will generates errors and will ignore files that are duplicates on the server. Thus, it is not recommended to have an extensive usage of Nuxeo Drive with plateform use cases implying file duplicates.

{{! /multiexcerpt}}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Nuxeo Drive Related Documentation'}}

- [Nuxeo Drive developer documentation]({{page space='nxdoc' page='nuxeo-drive'}})
- [How to Configure Nuxeo Drive Globally]({{page space='nxdoc' page='how-to-configure-nuxeo-drive-globally'}})
- [How to Manually Initialize or Deploy a Nuxeo Drive Instance]({{page space='nxdoc' page='how-to-manually-initialize-or-deploy-a-nuxeo-drive-instance'}})
- [Nuxeo Drive Update Site]({{page space='nxdoc' page='nuxeo-drive-update-site'}})

{{/panel}}

</div><div class="column medium-6">{{#> panel heading='Other Related Documentation '}}

- [Nuxeo Support Documentation]({{page space='studio' page='how-to-fill-a-jira-ticket'}})

{{/panel}}</div></div>
