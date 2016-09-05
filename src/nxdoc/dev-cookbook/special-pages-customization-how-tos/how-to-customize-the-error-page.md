---
title: How to Customize the Error Page
labels:
    - error-page
confluence:
    ajs-parent-page-id: '18449741'
    ajs-parent-page-title: Special Pages Customization How-Tos
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: How+to+Customize+the+Error+Page
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/How+to+Customize+the+Error+Page'
    page_id: '17334522'
    shortlink: _oAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/_oAIAQ'
    source_link: /display/NXDOC58/How+to+Customize+the+Error+Page
history:
    - 
        author: Solen Guitter
        date: '2014-01-23 18:55'
        message: ''
        version: '23'
    - 
        author: Solen Guitter
        date: '2012-09-13 22:06'
        message: Migrated to Confluence 4.0
        version: '22'
    - 
        author: Solen Guitter
        date: '2012-09-13 22:06'
        message: ''
        version: '21'
    - 
        author: Anahide Tchertchian
        date: '2012-02-06 17:54'
        message: ''
        version: '20'
    - 
        author: Anahide Tchertchian
        date: '2012-02-06 17:52'
        message: ''
        version: '19'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 17:30'
        message: ''
        version: '18'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 14:43'
        message: ''
        version: '17'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:27'
        message: ''
        version: '16'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:24'
        message: ''
        version: '15'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:14'
        message: ''
        version: '14'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 09:14'
        message: ''
        version: '13'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 09:10'
        message: ''
        version: '12'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 08:55'
        message: ''
        version: '11'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 08:51'
        message: ''
        version: '10'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 20:11'
        message: ''
        version: '9'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 20:06'
        message: ''
        version: '8'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 19:21'
        message: ''
        version: '7'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 19:01'
        message: ''
        version: '6'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:39'
        message: ''
        version: '5'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:23'
        message: ''
        version: '4'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:18'
        message: ''
        version: '3'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:12'
        message: ''
        version: '2'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:00'
        message: ''
        version: '1'

---
{{#> callout type='warning' }}

Work in progress, this page needs to be updated.

{{/callout}}

&nbsp;

The Error Page when the server is deployed is located at `server/default/deploy/nuxeo.ear/nuxeo.war/nuxeo_error.jsp`.

In the source code, this page is located at `nuxeo-platform-webapp/src/main/resources/nuxeo.war/nuxeo_error.jsp`.

{{! excerpt}}

You have to override this&nbsp;`nuxeo_error.jsp`&nbsp;page in a custom project.

{{! /excerpt}}

1.  Copy this page inside your custom project in the same relative location as it is in the original Nuxeo sources, that is in a comparable `nuxeo.war` directory.
2.  And then remove the following part:

    ```

    <div class="stacktrace">
      <a href="#"
         onclick="javascript:toggleError('stackTrace'); return false;">show stacktrace</a>
    </div>

    <div id="stackTrace" style="display: none;">

    <h2><%=exception_message %></h2>
      <inputTextarea rows="20" cols="100" readonly="true">
        <%=stackTrace%>
      </inputTextarea>
    </div>

    ```

3.  The `build.xml` of your custom project should contain the following target to nicely deploy your customized version of `nuxeo_error.jsp`:

    ```
    <target name="web" description="Copy web files to a live JBoss">
      <copy todir="${deploy.dir}/${nuxeo.ear}/nuxeo.war" overwrite="true">
        <fileset dir="${basedir}/src/main/resources/nuxeo.war/" />
      </copy>
    </target>

    ```