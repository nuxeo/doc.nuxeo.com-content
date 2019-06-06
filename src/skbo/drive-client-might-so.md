---
title: Drive client might sometimes target WebUI instead of JSF
description: Drive client might sometimes target WebUI instead of JSF
review:
    date: '2019-06-01'
    status: ok
    comment: ''
labels:
    - subsystem-nuxeo-drive
    - runtime-administration
    - configuration
    - drive

---
# Drive client 3.0.6 might sometimes target WebUI instead of JSF
## Problem
When using concurrently Drive with JSF-enabled and WebUI-enabled applications, Nuxeo Drive client uses a WebUI URL instead of JSF: e.g. <http://server/nuxeo/ui?token=xxx#!/doc/xxx>
## Solution
On the server-side, the file **templates/drive/nxserver/config/nuxeo-drive-config.json** has as section:

    {
      "delay": 30,
      "ignored_prefixes": [".", "icon\r", "thumbs.db", "desktop.ini", "~$"],
      "ignored_suffixes": [".bak", ".crdownload", ".dwl", ".dwl2", ".lnk", ".lock", ".nxpart", ".part", ".partial", ".swp", ".tmp", "~"],
      "ignored_files": ["^atmp\\d+$"],
      "log_level_file": "DEBUG",
      "timeout": 30,
      "handshake_timeout": 60,
      "beta_channel": false,
      "update_check_delay": 3600,
      "ui": "web"
    }

Changing in there **“ui”: “web”** in **“ui”: “jsf”** for the application for which we want the JSF behavior solves the issue


2019-06-01T17:37:56.955Z
## (c) Nuxeo Support Knowledge Base Outline 2019
