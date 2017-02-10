---
title: Installing Dart and related tools
review:
    comment: ''
    date: ''
    status: ok
labels:
    - nodejs
    - npm
    - yo
    - grunt
    - grunt-cli
    - gulp
    - bower
    - compile
confluence:
    ajs-parent-page-id: '9275205'
    ajs-parent-page-title: Developer Environment Setup
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Installing+Dart+and+related+tools
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Installing+Dart+and+related+tools'
    page_id: '20519972'
    shortlink: JBw5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/JBw5AQ'
    source_link: /display/CORG/Installing+Dart+and+related+tools
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2016-09-01 15:39'
        message: ''
        version: '2'
    -
        author: Julien Carsique
        date: '2014-12-01 11:49'
        message: ''
        version: '1'

---

See [https://www.dartlang.org/tools/download.html](https://www.dartlang.org/tools/download.html)

## Installing Dart

### Linux

{{#> panel type='code' heading='Manual install of NodeJS'}}

```bash
sudo apt-get install apt-transport-https
sudo sh -c 'curl https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -'
sudo sh -c 'curl https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list > /etc/apt/sources.list.d/dart_stable.list'
sudo apt-get update
sudo apt-get install dart

sudo update-alternatives --install /usr/bin/dart dart /usr/lib/dart/bin/dart 0
sudo update-alternatives --install /usr/bin/pub pub /usr/lib/dart/bin/pub 0
sudo update-alternatives --install /usr/bin/dart2js dart2js /usr/lib/dart/bin/dart2js 0

```

{{/panel}}

### OS X

Using Homebrew

```bash
brew tap dart-lang/dart
brew install dart --with-dartium
```

### Eclipse

Install from [http://www.dartlang.org/eclipse/update/channels/stable/](http://www.dartlang.org/eclipse/update/channels/stable/)
