---
title: Language settings change dynamically
description: Language settings change dynamically
review:
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - jsf-jsfruntime
    - jsf
    - locale

---
# Language settings change dynamically
## Problem
I observe that my interface language is often in English although my preferences are set as fr_FR.  
In this case, my login is displayed instead of my name/surname.
## Solution
The cookie **org.jboss.seam.core.Locale** contains the latest locale negotiated between the browser and a Nuxeo server.  
With a SSO configuration and several Nuxeo instances reachable via a common frontend, or several Nuxeo with the same IP address and listening on different ports, it is possible that the cookie get mixed between instances configured differently.  
A cookie depends essentially on the IP address to which it pertains, and not the port, and possibly not the path in the URL. As such, it is possible to mix a cookie between different instances reached through the same IP address.


2019-06-01T17:37:33.978Z
## (c) Nuxeo Support Knowledge Base Outline 2019
