---
title: User name limits
description: User name limits
review:
    date: '2019-06-01'
    status: ok
    comment: ''
labels:
    - runtime-administration
    - users

---
# User name limits
## Problem
Is there a limitation for characters in username
## Solution
2 kinds of limits exist :
+ on length: the limit is 250 characters because of the size of the columns where the user id is stored in various schemas/tables.  
Note that there is another limit set to 30 characters, which is the default size of the user workspace name. It can be changed with the configuration property **nuxeo.path.segment.maxsize**
+ on special characters : the normal characters correspond to this regex : **[a-zA-Z0-9]+** and this rule is used when you create a user from the JSF UI. Other characters can be used but they will be replaced when getting or building the user workspace name, so it is better to avoid them

If possible, try to use only alphanumerical characters and a size under 30 characters


2019-06-01T17:37:55.726Z
## (c) Nuxeo Support Knowledge Base Outline 2019
