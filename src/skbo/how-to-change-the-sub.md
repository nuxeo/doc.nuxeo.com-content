---
title: How to change the subject of the mail notification and localize it
description: How to change the subject of the mail notification and localize it
review:
    date: '2019-06-01'
    status: ok
    comment: ''
labels:
    - runtime-administration
    - localization
    - mail
    - notification

---
# How to change the subject of the mail notification and localize it?
## Problem
You are sending a notification mail and you have a default subject, that you would like to translate to your language.
## Solution
It won't be compliant with the other notifications: this message follows the same pattern as the other ones provided for the notifications: everything is by default in English and there is no internationalization mechanism for everything around notification. The subject is currently discussed by the dev team to refactor this code but not done yet.  
To translate the other notifications, you have to write and maintain XML contributions.  
For this notification, you have to provide your translation in **messages_en.properties**
### Honestly, why can't we just use the message_fr_FR.properties ?
Because this code doesn't know that the customer is in France


2019-06-01T17:37:42.371Z
## (c) Nuxeo Support Knowledge Base Outline 2019
