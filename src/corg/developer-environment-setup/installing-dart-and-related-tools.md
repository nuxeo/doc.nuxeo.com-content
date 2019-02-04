---
title: Installing Dart and Related Tools
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
tree_item_index: 400
toc: true
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

See <https://www.dartlang.org/install>.

## Installing Dart

Modules based on Dart require the version 1.23.x. Once installed, verify the version in a terminal:

```
$ pub version
Pub 1.23.0
```

### Linux

Using APT:

```bash
sudo apt-get install apt-transport-https
sudo sh -c 'curl https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -'
sudo sh -c 'curl https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list > /etc/apt/sources.list.d/dart_stable.list'
sudo apt-get update
sudo apt-get install dart=1.23.0-1

sudo update-alternatives --install /usr/bin/dart dart /usr/lib/dart/bin/dart 0
sudo update-alternatives --install /usr/bin/pub pub /usr/lib/dart/bin/pub 0
sudo update-alternatives --install /usr/bin/dart2js dart2js /usr/lib/dart/bin/dart2js 0
```

See https://www.dartlang.org/install/linux for other Linux install options.

### OS X

Using Homebrew:

```bash
brew tap dart-lang/homebrew-dart
curl -O https://raw.githubusercontent.com/dart-lang/homebrew-dart/b55507ab62b2e724b62e58a8e5363a726e34b7e7/dart.rb
sed -i '' -e 's/-EOS.undent/~EOS/' -e 's/MacOS.prefer_64_bit\?/true/' dart.rb
brew install dart.rb --with-dartium
rm dart.rb
```

See https://www.dartlang.org/install/mac for other Mac install options.

### Windows

Using [Chocolatey](https://chocolatey.org/install):

```bash
choco install dart-sdk -version 1.23.0
choco install dartium  -version 1.23.0
```

See https://www.dartlang.org/install/windows for other Windows install options.


## Dart Tools

Dart plugins exist for many commonly used IDEs. See <https://www.dartlang.org/tools>.
