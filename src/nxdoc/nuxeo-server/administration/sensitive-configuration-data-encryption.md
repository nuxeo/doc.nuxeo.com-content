---
title: Sensitive Configuration Data Encryption
review:
    comment: ''
    date: '2015-12-01'
    status: ok
labels:
    - content-review-lts2016
    - encryption
    - jcarsique
    - link-update
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '31032113'
    ajs-parent-page-title: Administration
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Sensitive+Configuration+Data+Encryption
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Sensitive+Configuration+Data+Encryption'
    page_id: '26314721'
    shortlink: 4YeRAQ
    shortlink_source: 'https://doc.nuxeo.com/x/4YeRAQ'
    source_link: /display/NXDOC/Sensitive+Configuration+Data+Encryption
tree_item_index: 300
version_override:
    LTS 2015: 710/admindoc/sensitive-configuration-data-encryption
    '6.0': 60/admindoc/sensitive-configuration-data-encryption
history:
    -
        author: Manon Lumeau
        date: '2016-06-09 13:59'
        message: ''
        version: '19'
    -
        author: Manon Lumeau
        date: '2016-03-25 11:17'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2016-03-03 10:35'
        message: ''
        version: '17'
    -
        author: Julien Carsique
        date: '2016-03-01 18:23'
        message: NXP-19071 --set option
        version: '16'
    -
        author: Julien Carsique
        date: '2016-03-01 17:32'
        message: NXP-19071 --set option
        version: '15'
    -
        author: Julien Carsique
        date: '2015-10-22 11:17'
        message: ''
        version: '14'
    -
        author: Julien Carsique
        date: '2015-10-22 10:44'
        message: Reverted from v. 11
        version: '13'
    -
        author: Bertrand Chauvin
        date: '2015-10-22 10:30'
        message: Explain values can be encrypted from prompt
        version: '12'
    -
        author: Julien Carsique
        date: '2015-08-31 10:34'
        message: ''
        version: '11'
    -
        author: Julien Carsique
        date: '2015-08-31 10:04'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2015-08-25 07:51'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2015-08-25 07:49'
        message: Add related doc
        version: '8'
    -
        author: Julien Carsique
        date: '2015-08-24 14:27'
        message: ''
        version: '7'
    -
        author: Julien Carsique
        date: '2015-08-24 14:04'
        message: ''
        version: '6'
    -
        author: Julien Carsique
        date: '2015-08-24 13:29'
        message: ''
        version: '5'
    -
        author: Julien Carsique
        date: '2015-08-24 12:58'
        message: ''
        version: '4'
    -
        author: Julien Carsique
        date: '2015-08-24 12:57'
        message: ''
        version: '3'
    -
        author: Julien Carsique
        date: '2015-08-24 12:57'
        message: ''
        version: '2'
    -
        author: Julien Carsique
        date: '2015-08-24 12:18'
        message: ''
        version: '1'

---
{{! excerpt}}

Sensitive configuration data can be encrypted in `nuxeo.conf`.

{{! /excerpt}}

## Usage

Sensitive configuration data can be encrypted to avoid clear data in the configuration files, especially `nuxeo.conf`.

For that purpose,&nbsp;`nuxeoctl` offers three dedicated commands:&nbsp;`encrypt`,&nbsp;`decrypt` and&nbsp;`config` (with the `--encrypt` option).

When configuring a property with an encrypted value, the variables used in the configuration templates will be replaced with:

*   the encrypted value in text templates and properties files
*   the original variable in the FreeMarker templates

If you need an encrypted property to be replaced with its decrypted value (for instance for files directly read by the server), then you can use that pattern in the configuration templates:&nbsp;`${#some.encrypted.property}`.

{{#> callout type='info' heading='Security recommendations'}}

Absolute security does not exist. It is only a question of inventiveness, complexity and time for the attacker, against our ability to guess, prevent, detect, mitigate and respond to the threats and vulnerabilities.
Open Source brings a better security provided that you **apply the security hotfixes** as soon as they are made available. See [Computer_security](https://en.wikipedia.org/wiki/Computer_security), [Open-source_software_security](https://en.wikipedia.org/wiki/Open-source_software_security).

For best security on the sensitive configuration data, it is recommended to:

*   Do not enter the passwords in clear in the command line (they could be stored in Shell history). The commands asking for a password will properly read it from stdin in a masked mode:

    ```
    $ bin/nuxeoctl config some.sensitive.property --encrypt --set -q
    Please enter the value for some.sensitive.property: ****
    ```

*   Do not store the secret key directly in&nbsp;`nuxeo.conf` but use the URL redirection to point at another local or remote file which will contain the secret value. That way, if the`nuxeo.conf` is leaked, the sensitive data is not compromised.

*   Make use of system file permissions to restrict sensitive files read access only to the system user running the JVM.

*   Secure the network and the access to the running JVM.

*   Use disposable "strong" passwords; see [Password_strength](https://en.wikipedia.org/wiki/Password_strength).

{{/callout}}

&nbsp;

## Easy Encryption

You can easily encrypt with the automatically generated server key&nbsp;`server.status.key`.

{{#> panel type='code' heading='Encrypt with the server.status.key'}}
```bash
# Generate a random server.status.key if unset; it will be used as the secret key
$ bin/nuxeoctl configure -q

# Get the generated secret key
$ bin/nuxeoctl config server.status.key -q
704856a7

# Encrypt the key "some.sensitive.property" with value "someValue"; here, the "--set" option is implicit
$ bin/nuxeoctl config some.sensitive.property someValue --encrypt -q
```
{{/panel}}

{{#> panel type='code' heading='Decrypt with server.status.key'}}
```bash
# Key is stored encrypted in nuxeo.conf
$ grep ^some.sensitive.property bin/nuxeo.conf
some.sensitive.property={$$t4Dgkiwa/LjK0Pd9cTlPkg==}

# With a wrong key or without any key, the raw value is returned (ie: encrypted); here, the "--get" option is implicit
$ bin/nuxeoctl config some.sensitive.property -q </dev/null
{$$t4Dgkiwa/LjK0Pd9cTlPkg==}

$ bin/nuxeoctl config some.sensitive.property -q
Please enter the secret key:
someValue

$ bin/nuxeoctl decrypt '{$$CiuHEqqac75rGdPszYr6Pw==}' -q
Please enter the secret key:
someValue
```
{{/panel}}

&nbsp;

*   The secret key asked above will be the server key `server.status.key`.

## Encrypting with Custom Secret Key

Instead of using the server key, you can provide a custom secret key.

{{#> panel type='code' heading='Encrypt with a custom secret key'}}
```bash
# Set a custom secret key (either a raw value or an URL)
$ bin/nuxeoctl config server.crypt.secretkey --set -q
Please enter the value for server.crypt.secretkey:

# Encrypt the key "some.sensitive.property" with value "someValue"; here, the "--set" option is implicit
$ bin/nuxeoctl config some.sensitive.property someValue --encrypt -q

```
{{/panel}}

&nbsp;

*   That custom secret key `server.crypt.secretkey` is stored encoded.
*   The&nbsp;`server.crypt.secretkey` takes either a raw value or a URL (e.g. <span class="nolink">file:///path/to/secretkey</span> or <span class="nolink">http://some.online.file.com</span>).&nbsp;

## Encrypting with Key from KeyStore

You can configure Nuxeo to retrieve the secret key from a keystore.

{{#> panel type='code' heading='Encrypt with a key from a keystore'}}
```bash
# Generate a random server.status.key if unset; it will be used as the key password within the key store
$ bin/nuxeoctl configure

# Generate a random AES secret key stored in the keystore "/path/to/keystore.jceks", with the keystore password "changeit", the key password "$SERVER_STATUS_KEY" and the key alias "NuxeoSecretKeyAES" (by convention, the key alias must be suffixed with the keyalg: "AES")
$ SERVER_STATUS_KEY=$(bin/nuxeoctl config server.status.key -q)
$ keytool -genseckey -keystore /path/to/keystore.jceks -storetype jceks -storepass changeit -keyalg AES -keysize 128 -alias NuxeoSecretKeyAES -keypass $SERVER_STATUS_KEY

# Configure Nuxeo to use that keystore and the key alias prefix "NuxeoSecretKey"
$ bin/nuxeoctl config server.crypt.keystore.path /path/to/keystore.jceks -q
$ bin/nuxeoctl config server.crypt.keyalias NuxeoSecretKey -q
# Provide the keystore password ("changeit" in the current sample)
$ bin/nuxeoctl config server.crypt.keystore.pass --set -q
Please enter the value for server.crypt.keystore.pass:
```
{{/panel}}

{{#> panel type='code' heading='Decrypt with a key from a keystore'}}
```bash
## Check configuration and test encryption, decryption
$ bin/nuxeoctl config --get-regexp 'server.crypt' -q
server.crypt.keyalias=NuxeoSecretKey
server.crypt.keystore.pass=Y2hhbmdlaXQ=
server.crypt.keystore.path=/path/to/keystore.jceks

$ bin/nuxeoctl encrypt clearValue otherValue -q
{$$CZjbsiX748UF583qkbinsQ==}
{$$P3u9HHXmcq0l5s5HvZJy0A==}

$ bin/nuxeoctl decrypt '{$$CZjbsiX748UF583qkbinsQ==}' '{$$P3u9HHXmcq0l5s5HvZJy0A==}' -q
Please enter the secret key:
clearValue
otherValue

# Encrypt the key "some.sensitive.property" with value "someValue"; here, the "--set" option is implicit
$ bin/nuxeoctl config some.sensitive.property someValue --encrypt -q

# Key is stored encrypted in nuxeo.conf
$ grep ^some.sensitive.property bin/nuxeo.conf
some.sensitive.property={$$pXRNM4JG2cAdn8senJf07w==}

$ bin/nuxeoctl config some.sensitive.property -q
Please enter the secret key:
someValue
```
{{/panel}}

&nbsp;

*   The secret key asked above will be the keystore pass&nbsp;`server.crypt.keystore.pass`. Note that this is actually not the key finally used for encryption.
*   The `server.crypt.keystore.pass` is stored encoded.
*   The server key `server.status.key` is used as the password under which the actual secret key is protected.
*   The alias `server.crypt.keyalias` is the alias prefix where to retrieve the secret key from the keystore. It is automatically suffixed with the algorithm ("AES") in the above example.

## Using Different Ciphering Algorithms

The following algorithms can be used to cipher the sensitive data:

*   `AES`,&nbsp;`AES/ECB/PKCS5Padding`
    Advanced Encryption Standard, Electronic Cookbook Mode, PKCS5-style padding.
    This is the default algorithm.
*   `DES`,&nbsp;`DES/ECB/PKCS5Padding`
    Data Encryption Standard, Electronic Cookbook Mode, PKCS5-style padding.

The custom algorithm is provided on the command line with the&nbsp;`--encrypt` option.

## Implemented Entropy

In order to enforce the system security:

*   Password are preferably manipulated as array of bits, not strings. Utility methods are thus provided for the developers to help them convert between&nbsp;`char[]` and&nbsp;`byte[]`, not storing passwords in strings: see [`org.nuxeo.common.codec.Crypto.getBytes(char[])`](http://community.nuxeo.com/api/nuxeo/8.1/javadoc/org/nuxeo/common/codec/Crypto.html#getBytes-char:A-) and&nbsp; [`org.nuxeo.common.codec.Crypto.getChars(byte[])`](http://community.nuxeo.com/api/nuxeo/8.1/javadoc/org/nuxeo/common/codec/Crypto.html#getChars-byte:A-) .
*   Clear values are evaluated at runtime by a volatile container.
*   Secret keys are themselves encoded to safer them against leak at glance and other human first level hacks.
*   To avoid brute-force search (or exhaustive search), that crypto container is self-destroyed on first decryption attempt with a wrong password. The secret data is destroyed and the object is made unusable, so the server will immediately loose all sensitive data (and likely become unusable) if some hosted code (server side) tries to crack an encrypted key.

{{! Don't put anything here. }}

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [nuxeoctl and Control Panel Usage]({{page page='nuxeoctl-and-control-panel-usage'}})
- [Configuration Parameters Index (nuxeo.conf)]({{page page='configuration-parameters-index-nuxeoconf'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
