---
title: Release Notes
description: Release notes for Nuxeo Drive.
tree_item_index: 700
review:
  comment: 'release'
  date: '2026-05-12'
  status: ok
toc: true
---

Welcome to the Release Notes for **Nuxeo Drive 7.0.0**

**Status**: <font color="##ff0000">**Beta**</font> </br>
<i class="fa fa-long-arrow-right" aria-hidden="true"></i> [Changelog](https://github.com/nuxeo/nuxeo-drive/blob/master/docs/changes/7.0.0.md)

## New Features 

### New direct download feature

You can now download large files directly, supported by new backend services and an updated interface. Large file downloads are now easier, and more reliable.

## Improvements

### Updated platforms and runtimes

We updated the app to use PyQt6 and Node.js 24 so that it matches modern platforms and tools. The app now works better with current systems and is easier to maintain and improve over time.

## Security Vulnerability Fixes

### Safer dependencies and libraries

We fixed security issues in several core libraries, including Authlib, pip, Pygments, cryptography, Requests, and the way pytest handles temporary folders. These changes make the app more secure overall.

## Fixes

### Stability and user experience

Fixed Windows app startup issues and improved the Microsoft Windows installer so that the existing Drive instance is stopped before installing. Also, resolved a Direct Transfer Web UI icon problem that occurred when target names contain spaces.

## Download Links

- [GNU/Linux binary](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-7.0.0-x86_64.AppImage)
- [macOS](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-7.0.0.dmg)
- [Windows](https://community.nuxeo.com/static/drive-updates/beta/nuxeo-drive-7.0.0.exe)
