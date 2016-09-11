---
title: PDF Conversion Troubleshooting
review:
    comment: ''
    date: ''
    status: ok
labels:
    - lts2015-ok
    - convert-component
toc: true
confluence:
    ajs-parent-page-id: '28475565'
    ajs-parent-page-title: Conversion
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: PDF+Conversion+Troubleshooting
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC710/PDF+Conversion+Troubleshooting'
    page_id: '28475542'
    shortlink: loCyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/loCyAQ'
    source_link: /display/NXDOC710/PDF+Conversion+Troubleshooting
history:
    - 
        author: Solen Guitter
        date: '2015-11-23 10:23'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2015-11-23 10:22'
        message: 'Add related pages, title capitalization'
        version: '2'
    - 
        author: Thierry Martins
        date: '2015-11-19 17:28'
        message: ''
        version: '1'

---
For a reason or another, you got one of the following message:

*   `Converter office2html is not available`
*   `Converter any2pdf is not available`

{{! excerpt}}

You probably have the same issue: the `JodConverter` component cannot communicate with the `LibreOffice` process. This page will help you to make the PDF conversion work with a few simple steps.

{{! /excerpt}}

### The PDF Transformation Has Already Worked

1.  Stop your Nuxeo Platform instance. This step is needed because the communication between JodConverter and LibreOffice is initiated at startup, and only at that time.
2.  Kill all remaining LibreOffice processes.
    *   Under Unices, this can be done with the `ps` and `kill` commands:

        ```
        > ps |grep soffice
        17159 pts/0    00:00:03 soffice.bin
        > kill 17159
        > ps |grep soffice
        ```

    *   Under MS Windows, use the Task Manager to identify a `soffice.exe` process and use the **End Task** button to kill it.
3.  Remove the `$NUXEO/tmp` folder: it could contain old files like `tmp/.jodconverter_socket_host-127.0.0.1_port-2003_65`.
4.  Start Nuxeo, log in and try to get your PDF or preview.

### The PDF Transformation Has Never Worked

1.  Follow steps 1 to 3 of the previous paragraph.
2.  Open a terminal or command prompt and start Nuxeo in console mode:

    ```
    > ./nuxeoctl console
    ```

    ```
    C:\> nuxeoctl.bat --gui=false console
    ```

3.  Search in the console the lines about the&nbsp;`org.artofsolving` package.

    It should look like below if everything is fine:

    <pre>Sep 29, 2015 11:05:40 AM org.artofsolving.jodconverter.office.ProcessPoolOfficeManager <init>
    INFO: ProcessManager implementation is UnixProcessManager
    Sep 29, 2015 11:05:43 AM org.artofsolving.jodconverter.office.OfficeVersionDescriptor <init>
    INFO: soffice info: Product: LibreOffice - Version: 4.4.5.2 - useGnuStyleLongOptions: true
    Sep 29, 2015 11:05:43 AM org.artofsolving.jodconverter.office.OfficeProcess doStart
    INFO: starting process with acceptString 'socket,host=127.0.0.1,port=2003,tcpNoDelay=1' and profileDir '/home/nuxeo/nuxeo-cap-tomcat/tmp/.jodconverter_socket_host-127.0.0.1_port-2003_58'
    Sep 29, 2015 11:05:47 AM org.artofsolving.jodconverter.office.OfficeProcess doStart
    WARNING: Restarting OOo after code 81 ...
    Sep 29, 2015 11:05:48 AM org.artofsolving.jodconverter.office.OfficeProcess doStart
    INFO: started process : pid = 7725
    Sep 29, 2015 11:05:48 AM org.artofsolving.jodconverter.office.OfficeConnection connect
    INFO: connected: 'socket,host=127.0.0.1,port=2003,tcpNoDelay=1'
    11:05:52,573 INFO  [OSGiRuntimeService] Nuxeo Platform Started</pre>

    If something failed, these lines will tell you why and you'll be able to fix your configuration accordingly.

{{! Don't put anything here. }}

* * *