---
title: How to setup a test SMTP server
review:
    comment: ''
    date: '2016-12-06'
    status: ok
details:
    howto:
        excerpt: Learn how to setup a SMTP server for testing purpose.
        level: Advanced
        tool: Code
        topics: Alerts
labels:
    - lts2016-ok
    - howto
    - alerts
tree_item_index: 300
history:
    -
        author: Vladimir Pasquier
        date: '2015-11-12 20:30'
        message: ''
        version: '5'
    -
        author: Manon Lumeau
        date: '2014-10-06 11:12'
        message: typo
        version: '4'
    -
        author: Manon Lumeau
        date: '2014-09-18 15:11'
        message: ''
        version: '3'
    -
        author: Manon Lumeau
        date: '2014-09-18 15:06'
        message: ''
        version: '2'
    -
        author: Damien Metzler
        date: '2013-03-07 11:04'
        message: ''
        version: '1'

---
For testing purpose, for instance with notifications, you often need to setup an SMTP server. There is an easy way to setup a local smtp server by using this project :&nbsp;[http://nilhcem.github.io/FakeSMTP/](http://nilhcem.github.io/FakeSMTP/). It binds a dummy SMTP server that listens on whichever port you want (that also mean that those mails won't be really sent) and on which you can setup Nuxeo to send outgoing mails : when the server sends a mail, it shows up into the list of received EMails.

To get this up and running, you only need to adjust your $NUXEO_HOME/bin/nuxeo.conf file to reflect this setup.

{{#> panel type='code' heading='$NUXEO_HOME/bin/nuxeo.conf'}}

```bash
...

# Mail settings (for notifications)
#nuxeo.notification.eMailSubjectPrefix="[Nuxeo]"
mail.transport.host=localhost
mail.transport.port=25000   # Adjust with FakeSMTP configuration. Avoid port 25 that is generally used by other applications.
#mail.transport.auth=
#mail.transport.user=
#mail.transport.password=
#mail.from=

...
```

{{/panel}}

&nbsp;

To start the software, just launch the command :</span>

```
java -jar fakeSMTP.jar
```

For Windows users, you can check this software that seems to do the same job :&nbsp;[http://smtp4dev.codeplex.com/](http://smtp4dev.codeplex.com/)

&nbsp;
