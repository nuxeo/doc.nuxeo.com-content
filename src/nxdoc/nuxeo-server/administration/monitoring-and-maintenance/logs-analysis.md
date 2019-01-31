---
title: Logs Analysis
description: Discover how logs are handled in Nuxeo Platform.
review:
  comment: ''
  date: '2017-12-14'
  status: ok
labels:
  - content-review-lts2016
  - logs
  - bdelbosc
  - warn
  - error
  - log4j
  - lts2017-ok
toc: true
confluence:
  ajs-parent-page-id: '950318'
  ajs-parent-page-title: Monitoring and Maintenance
  ajs-space-key: NXDOC
  ajs-space-name: Nuxeo Platform Developer Documentation
  canonical: Logs+Analysis
  canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Logs+Analysis'
  page_id: '14254233'
  shortlink: mYDZ
  shortlink_source: 'https://doc.nuxeo.com/x/mYDZ'
  source_link: /display/NXDOC/Logs+Analysis
tree_item_index: 300
version_override:
  LTS 2015: 710/admindoc/logs-analysis
  '6.0': 60/admindoc/logs-analysis
  '5.8': 58/admindoc/logs-analysis
history:
  - author: Manon Lumeau
    date: '2016-03-23 13:35'
    message: ''
    version: '20'
  - author: Manon Lumeau
    date: '2016-03-23 13:33'
    message: 'Fix links '
    version: '19'
  - author: Julien Carsique
    date: '2015-12-09 16:15'
    message: ''
    version: '18'
  - author: Manon Lumeau
    date: '2015-11-18 17:15'
    message: ''
    version: '17'
  - author: Solen Guitter
    date: '2014-11-26 17:13'
    message: ''
    version: '16'
  - author: Solen Guitter
    date: '2014-11-26 17:05'
    message: Added tomcat.log and classloader.log
    version: '15'
  - author: Solen Guitter
    date: '2014-11-26 14:55'
    message: ''
    version: '14'
  - author: Solen Guitter
    date: '2014-11-26 14:51'
    message: formatting and link update
    version: '13'
  - author: Solen Guitter
    date: '2014-08-21 11:13'
    message: Formatting
    version: '12'
  - author: Solen Guitter
    date: '2013-10-15 11:56'
    message: ''
    version: '11'
  - author: Julien Carsique
    date: '2013-08-06 14:21'
    message: JIRA Issue macro params updated with additional server info
    version: '10'
  - author: Julien Carsique
    date: '2013-08-06 14:21'
    message: 'Removed download instructions for tomcat-juli: there are already installed in the server since 5.7.2'
    version: '9'
  - author: Julien Carsique
    date: '2013-07-31 16:27'
    message: ''
    version: '8'
  - author: Solen Guitter
    date: '2013-07-15 15:53'
    message: Added TOC
    version: '7'
  - author: Julien Carsique
    date: '2013-06-28 13:20'
    message: ''
    version: '6'
  - author: Julien Carsique
    date: '2013-06-28 13:19'
    message: ''
    version: '5'
  - author: Julien Carsique
    date: '2013-06-28 13:14'
    message: ''
    version: '4'
  - author: Solen Guitter
    date: '2013-05-22 15:09'
    message: Added related pages
    version: '3'
  - author: Solen Guitter
    date: '2013-05-22 15:07'
    message: Reported content from 5.6 documentation
    version: '2'
  - author: Solen Guitter
    date: '2013-05-22 11:51'
    message: ''
    version: '1'
---

## Logging Configuration

Nuxeo logging is compliant with common Java logging frameworks&nbsp;[Log4J](https://logging.apache.org/log4j/1.2/),&nbsp;[Log4j2](https://logging.apache.org/log4j/2.x/),&nbsp;[SLF4J](http://www.slf4j.org/)&nbsp;and&nbsp;[JUL](http://download.oracle.com/javase/6/docs/technotes/guides/logging/index.html).

Logging in Nuxeo is configured through a Log4J XML file: `$NUXEO_HOME/lib/log4j2.xml`

Editing that file, you can set the logging rules (log level per file and component, files rotation, ...).

Log4J log levels are: ERROR, WARN, INFO, DEBUG and TRACE.

You can increase or decrease the logs for specific services. Here are some useful loggers:

- `org.nuxeo.runtime.deployment.preprocessor.DeploymentPreprocessor` logs the pre-processing order
- `org.nuxeo.osgi.application.loader.FrameworkLoader` writes the configuration summary
- `org.nuxeo.runtime.osgi.OSGiRuntimeService` provides the final startup summary

Related pages:

- [Log4J]({{page space='glos' page='log4j'}})
- [How to change the JBoss log files rotation]({{page space='kb' page='how-to-change-the-jboss-log-files-rotation'}})
- [Where Are the Log and Configuration Files in Windows?](https://answers.nuxeo.com/general/q/8cf97d8734af40beb5b219c58e9311e4/Logs-and-Configuration-files-in-Windows)

### Log Files

The log files location depends on the `nuxeo.log.dir` parameter. By default, Nuxeo generates the following log files (also available from the platform [Admin tab]({{page page='admin-tab-overview'}}) and the Control Panel):

- Launcher logs
  - nuxeoctl.log - Logs activity from NuxeoCtl
  - console.log - Logs output written to the console (stdout)
- Server logs
  - server.log - Server logs
  - nuxeo-error.log - Gathers errors raised to the user
  - stderr.log - Gathers errors written to the console (stderr)
  - classloader.log - Gathers class loading errors from Catalina
  - tomcat.log - Gathers Tomcat logs

### Tomcat Specific

{{#> callout type='note' }}
The following information is for debug purpose, it may have impacts on performance and logging files size
{{/callout}}

`$NUXEO_HOME/conf/logging.properties` has no effect; you can safely remove it.

Because Tomcat uses `java.util.logging` of which Log4J is not aware, Tomcat logs (`org.apache.catalina.*`) have to be redirected to Apache Commons Logging (compliant with Log4J).

Nuxeo provides a bridge for that redirection (in `org.nuxeo.common.logging.JavaUtilLoggingHelper`) with a default threshold set at INFO level. You can customize it by adding into `nuxeo.conf`:

```
JAVA_OPTS=$JAVA_OPTS -Dorg.nuxeo.runtime.redirectJUL.threshold=CONFIG
```

But that redirection is only available after Nuxeo Framework initialization whereas most of the startup logs from `org.apache.catalina` happen before (when the redirection is not yet active).

Note also that FINER and FINEST logs will be ignored anyway.

## Common Logs

Here are descriptions of the most common logs coming from Nuxeo or its third-parties. The list is not exhaustive but aims at helping to understand the most common logs you may encounter while using the Nuxeo Platform. If you don't find what you need here, you can check [answers.nuxeo.com](http://answers.nuxeo.com/) if someone already asked about it. You can also search the web about third parties logs if they are not in this list.

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Level</th><th colspan="1">Source
Message</th><th colspan="1">Cause</th></tr><tr><td colspan="1">

WARN

</td><td colspan="1">

`org.hibernate.ejb.Ejb3Configuration (org.hibernate:hibernate-entitymanager)`

`Overriding hibernate.transaction.factory_class is dangerous, this might break the EJB3 specification implementation`

</td><td colspan="1">

Not a problem.

Generated by Hibernate and can be ignored. This is voluntarily done and is under control.

</td></tr><tr><td colspan="1">

WARN

</td><td colspan="1">

`org.jboss.seam.core.Init (org.jboss.seam:jboss-seam)`

`The built-in interceptor org.jboss.seam.persistence.EntityManagerProxyInterceptor is missing. This application may not function as expected`

Similar messages with: `org.jboss.seam.bpm.BusinessProcessInterceptor`, `org.jboss.seam.core.BijectionInterceptor`, `org.jboss.seam.webservice.WSSecurityInterceptor`, `org.jboss.seam.security.SecurityInterceptor`.

</td><td colspan="1">

Not a problem.

Some unneeded built-in interceptors are removed for performance reasons.

</td></tr><tr><td colspan="1">

WARN

</td><td colspan="1">

`org.jboss.seam.Component (org.jboss.seam:jboss-seam)`

`Component class should be serializable: org.jboss.seam.ui.facelet.mockHttpSession`

</td><td colspan="1">

Third-party issue.

Seam provides a non-serializable component and then warns about it. Even if we don't use it, it's still part of the default Seam JARs.

</td></tr><tr><td colspan="1">

WARN

</td><td colspan="1">

`org.nuxeo.ecm.core.search.api.client.querymodel.QueryModelService (org.nuxeo.ecm.platform:nuxeo-platform-search-api)`

`Query models are deprecated as of Nuxeo 5.4 and will be removed for Nuxeo 6.0: the query model '...' should be upgraded to use content views`

</td><td colspan="1">Use of deprecated API. See [Javadoc](http://community.nuxeo.com/api/nuxeo/release-5.4.0/javadoc/org/nuxeo/ecm/core/search/api/client/querymodel/QueryModelService.html).</td></tr><tr><td colspan="1">

WARN

</td><td colspan="1">

`org.nuxeo.ecm.webapp.pagination.ResultsProviderService (org.nuxeo.ecm.platform:nuxeo-platform-webapp-base)`

`Result providers are deprecated as of Nuxeo 5.4 and will be removed for Nuxeo 6.0: the result provider '...' should be upgraded to use content views`

</td><td colspan="1">Use of deprecated API. See [Javadoc](http://community.nuxeo.com/api/nuxeo/release-5.4.2/javadoc/org/nuxeo/ecm/webapp/pagination/ResultsProviderService.html).</td></tr><tr><td colspan="1">

WARN

</td><td colspan="1">

`org.nuxeo.theme.styling.service.ThemeStylingServiceImpl (org.nuxeo.theme:nuxeo-theme-styling)`

`Style unknown: helpers`

</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">

WARN

</td><td colspan="1">

`org.artofsolving.jodconverter.office.OfficeProcess (org.artofsolving.jodconverter:jodconverter-core)`

`Restarting OOo after code 81 ...`

</td><td colspan="1">See [jodconverter issue 84](http://code.google.com/p/jodconverter/issues/detail?id=84).</td></tr><tr><td colspan="1">

WARN

</td><td colspan="1">

`org.artofsolving.jodconverter.office.StreamGobbler (org.artofsolving.jodconverter:jodconverter-core)`

`StreamGobbler: Fontconfig warning: "/usr/lib/libreoffice/share/fonts/truetype/fc_local.conf", line 13: Having multiple <family> in <alias> isn't supported and may not works as expected`

</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">

WARN

</td><td colspan="1">

`org.jboss.seam.init.Initialization (org.jboss.seam:jboss-seam)`

`namespace declared in components.xml does not resolve to a package:`

</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">

WARN

</td><td colspan="1">

`org.jboss.seam.security.permission.PersistentPermissionResolver (org.jboss.seam:jboss-seam)`

`no permission store available - please install a PermissionStore with the name 'org.jboss.seam.security.jpaPermissionStore' if persistent permissions are required.`

</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">

WARN

</td><td colspan="1">

`org.nuxeo.ecm.core.api.TransactionalCoreSessionWrapper (org.nuxeo.ecm.core:nuxeo-core)`

`Session invoked in a container without a transaction active: turn on debug logs for more information about the faulty call.`

</td><td colspan="1">See [NXP-7170](https://jira.nuxeo.com/browse/NXP-7170) upgrade notes.</td></tr></tbody></table></div>

&nbsp;

---

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Purging Audit Logs (NXP_LOGS)]({{page page='purging-audit-logs-nxp_logs'}})
- [Setup Best Practices]({{page page='setup-best-practices'}})
- [How to Estimate Volume Usage]({{page page='how-to-estimate-volume-usage'}})
- [Where Are the Log and Configuration Files in Windows?](https://answers.nuxeo.com/general/q/8cf97d8734af40beb5b219c58e9311e4/Logs-and-Configuration-files-in-Windows)

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
