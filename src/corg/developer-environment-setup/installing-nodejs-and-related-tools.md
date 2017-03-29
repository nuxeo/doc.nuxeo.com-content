---
title: Installing NodeJS and related tools
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
    canonical: Installing+NodeJS+and+related+tools
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Installing+NodeJS+and+related+tools'
    page_id: '20518622'
    shortlink: 3hY5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/3hY5AQ'
    source_link: /display/CORG/Installing+NodeJS+and+related+tools
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2016-09-01 16:17'
        message: ''
        version: '15'
    -
        author: Frantz Fischer
        date: '2016-04-06 14:12'
        message: ''
        version: '14'
    -
        author: Julien Carsique
        date: '2014-11-13 15:10'
        message: ''
        version: '13'
    -
        author: Julien Carsique
        date: '2014-11-13 15:07'
        message: npm global option requires root access to write to /usr/local
        version: '12'
    -
        author: Arnaud Kervern
        date: '2014-11-13 14:01'
        message: ''
        version: '11'
    -
        author: Florent Guillaume
        date: '2014-11-13 13:56'
        message: simpler install commands
        version: '10'
    -
        author: Thomas Roger
        date: '2014-11-13 10:58'
        message: ''
        version: '9'
    -
        author: Arnaud Kervern
        date: '2014-11-13 01:50'
        message: ''
        version: '8'
    -
        author: Florent Guillaume
        date: '2014-11-12 15:48'
        message: ''
        version: '7'
    -
        author: Julien Carsique
        date: '2014-11-12 15:38'
        message: ''
        version: '6'
    -
        author: Julien Carsique
        date: '2014-11-12 15:35'
        message: ''
        version: '5'
    -
        author: Julien Carsique
        date: '2014-11-12 15:21'
        message: ''
        version: '4'
    -
        author: Julien Carsique
        date: '2014-11-12 15:20'
        message: ''
        version: '3'
    -
        author: Julien Carsique
        date: '2014-11-12 15:08'
        message: ''
        version: '2'
    -
        author: Julien Carsique
        date: '2014-11-12 15:07'
        message: ''
        version: '1'

---

## Installing NodeJS

### Linux

{{#> callout type='warning' }}

NodeJS available in Debian repositories is deprecated, you must manually install v4.4.2

{{/callout}}{{#> panel type='code' heading='Manual install of NodeJS'}}

```bash
cd /tmp
wget http://nodejs.org/dist/v4.4.2/node-v4.4.2.tar.gz
tar -xzf node-v4.4.2.tar.gz
cd node-v4.4.2
./configure
make
sudo make install

```

{{/panel}}

### OS X

Using Homebrew

```bash
brew install node
```

Using MacPorts

```bash
sudo port install npm
```

## Installing related tools

We need a few tools to be installed:

```bash
sudo npm -g install yo grunt-cli gulp bower
```
