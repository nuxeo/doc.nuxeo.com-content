---
title: 'Unable to reach connect.nuxeo.com from Nuxeo software'
description: 'Unable to reach connect.nuxeo.com from Nuxeo software: what are the different use case?'
review:
    date: '2019-06-01'
    status: ok
    comment: ''
labels:
    - runtime-administration
    - studio-designer
    - studio-modeler
    - connect
    - runtime
    - studio

---
# Unable to reach connect.nuxeo.com from Nuxeo software
## Problem
I am unable to reach connect.nuxeo.com from Nuxeo software, while I have no connectivity issue using a browser on the same platform.
## Solution
To resolve this incident, please check:  
Are you able to reach <https://connect.nuxeo.com> and does it display an outage?  
Is the server <https://connect.nuxeo.com> reachable from the machine (e.g. a firewall configuration might have changed since the last contact)  
An incorrect date/time on the platform might lead to an authentication error with the server: Is your Nuxeo server having a correct date/time configuration?  
In the nuxeo.conf file, does the line **org.nuxeo.connect.server.reachable=false** exist? If yes, remove it.  
If this fails altogether, open a Jira ticket.


2019-06-01T17:37:38.738Z
## (c) Nuxeo Support Knowledge Base Outline 2019
