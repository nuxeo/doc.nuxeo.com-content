---
title: How to change the time zone of users in Nuxeo
description: How to change the time zone of users in Nuxeo
review:
    date: '2019-06-01'
    status: ok
    comment: ''
labels:
    - runtime-administration
    - jsf-jsfruntime
    - jsf
    - runtime
    - timezone

---
# How to change the time zone of users in Nuxeo?
## Problem
Your users are experiencing erratic time zones settings in Nuxeo, and this can have e.g. the consequence that some notification arrive one day earlier or later than planned.
## Solution
In <https://github.com/nuxeo/nuxeo/blob/8.10/nuxeo-features/nuxeo-user-center/nuxeo-user-profile/src/main/java/org/nuxeo/ecm/user/center/profile/localeProvider/UserLocaleProvider.java#L75> , you can read that

    // the timezone is not retrieved from the user profile (cookie and Seam TimezoneSelector)

In <https://github.com/nuxeo/nuxeo/blob/8.10/nuxeo-jsf/nuxeo-platform-webapp-base/src/main/java/org/nuxeo/ecm/webapp/locale/LocaleStartup.java#L87> , you can see this comment is exact.

In <https://docs.jboss.org/seam/2.1.0.GA/api/org/jboss/seam/international/TimeZoneSelector.html> , you can see the element does:

    Selects the current user's time zone, defaulting to the server time zone
    Cookie Name: org.jboss.seam.core.TimeZone

This information enables to conclude that the default time zone is the one of the server (to be verified to set the correct user time zone) or that the time zone is stored in a cookie.  

To reset the time zone in JSF, you can go in the menu ** user \> Preferences** , select the **Actions** menu on the top right and click on **Reinit the time zone** to the one of the browser.  

Another possibility is to verify the time zone setting on the server and destroy the cookie **org.jboss.seam.core.TimeZone** (or all browser cookies) on the client side.


2019-06-01T17:37:39.946Z
## (c) Nuxeo Support Knowledge Base Outline 2019
