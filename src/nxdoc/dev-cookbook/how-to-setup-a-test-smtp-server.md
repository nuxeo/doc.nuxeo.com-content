---
title: How to setup a test SMTP server
confluence:
    ajs-parent-page-id: '17334435'
    ajs-parent-page-title: Dev Cookbook
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: How+to+setup+a+test+SMTP+server
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/How+to+setup+a+test+SMTP+server'
    page_id: '17334288'
    shortlink: EIAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/EIAIAQ'
    source_link: /display/NXDOC58/How+to+setup+a+test+SMTP+server
history:
    - 
        author: Vladimir Pasquier
        date: '2015-11-12 20:31'
        message: ''
        version: '2'
    - 
        author: Damien Metzler
        date: '2013-03-07 11:04'
        message: ''
        version: '1'

---
For testing purpose, for instance with notifications, you often need to setup an SMTP server. There is an easy way to setup a local smtp server by using this project :&nbsp;[http://nilhcem.github.com/FakeSMTP/](http://nilhcem.github.com/FakeSMTP/). It binds a dummy SMTP server that listens on whichever port you want (that also mean that those mails won't be really sent) and on which you can setup Nuxeo so send outgoing mails : w<span style="font-size: 10.0pt;line-height: 13.0pt;">hen the server sends a mail, it shows up into the list of received EMails.</span>

To get this up and running, you only need to adjust your $NUXEO_HOME/bin/nuxeo.conf file to reflect this setup.

{{#> panel type='code' heading='$NUXEO_HOME/bin/nuxeo.conf'}}

```bash
...

# Mail settings (for notifications)
#nuxeo.notification.eMailSubjectPrefix="[Nuxeo]"
mail.transport.host=localhost
mail.transport.port=25000   # Adjust with FakeSMTP configuration
#mail.transport.auth=
#mail.transport.user=
#mail.transport.password=
#mail.from=

...
```

{{/panel}}

&nbsp;

You can download a precompile version of FakeSMTP here :&nbsp;[]({{file name='fakeSMTP.jar'}})<span style="font-size: 10.0pt;line-height: 13.0pt;">. To launch the software, just launch the command :</span>

```
java -jar fakeSMTP.jar
```

For Windows users, you can check this software that seems to do the same job :&nbsp;[http://smtp4dev.codeplex.com/](http://smtp4dev.codeplex.com/)

&nbsp;