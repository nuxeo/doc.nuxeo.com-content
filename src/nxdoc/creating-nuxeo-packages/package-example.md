---
title: Package Example
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '22380599'
    ajs-parent-page-title: Creating Nuxeo Packages
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Package+Example
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Package+Example'
    page_id: '22380593'
    shortlink: MYBVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/MYBVAQ'
    source_link: /display/NXDOC60/Package+Example
tree_item_index: 300
history:
    -
        author: Julien Carsique
        date: '2014-09-15 14:55'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2014-09-15 12:13'
        message: ''
        version: '9'
    -
        author: Julien Carsique
        date: '2014-09-12 15:27'
        message: 'NXDOC-122: use configuration template instead of form'
        version: '8'
    -
        author: Julien Carsique
        date: '2014-09-12 15:22'
        message: 'NXDOC-122: ParametrizedCopy'
        version: '7'
    -
        author: Anahide Tchertchian
        date: '2012-06-12 18:07'
        message: Migrated to Confluence 4.0
        version: '6'
    -
        author: Anahide Tchertchian
        date: '2012-06-12 18:07'
        message: ''
        version: '5'
    -
        author: Bogdan Stefanescu
        date: '2010-07-08 11:50'
        message: ''
        version: '4'
    -
        author: Bogdan Stefanescu
        date: '2010-07-08 11:45'
        message: ''
        version: '3'
    -
        author: Bogdan Stefanescu
        date: '2010-07-08 02:10'
        message: ''
        version: '2'
    -
        author: Bogdan Stefanescu
        date: '2010-07-08 01:57'
        message: ''
        version: '1'

---
The following example is imaginary - it is not a real Nuxeo Marketplace Package. Its&nbsp;purpose&nbsp;is to be an example of a complex package install on a Nuxeo distribution.

In this example we will create a package to install Nuxeo Automation feature on a 5.3.2 version of Nuxeo DM.

##### What we want to install

Nuxeo Automation is composed of 3 Nuxeo bundles:

*   nuxeo-automation-core-5.3.2.jar
*   nuxeo-automation-server-5.3.2.jar
*   nuxeo-automation-jsf-5.3.2.jar

and one third party library:

*   mvel2-2.0.16.jar

This library is not existing on a 5.3.2 version of Nuxeo so we want to add it (not to upgrade it).

Also, for Tomcat distributions we need to deploy a&nbsp;`mail.properties` file in Nuxeo configuration directory. This file contains the SMTP configuration needed by `javax.mail`. On JBoss we already have this configuration as a JBoss MBean. This configuration is required by the&nbsp;`SendMail` operation. The configuration file is a Java property file and contains variables that will be substituted by the values entered by the user during the install wizard.&nbsp;

Here is the parameterized&nbsp;`mail.properties` file we want to install:

```
mail.smtp.host=${mail.smtp.host}
mail.smtp.port=${mail.smtp.port}
mail.smtp.auth=true
mail.smtp.socketFactory.port=465
mail.smtp.socketFactory.class=javax.net.ssl.SSLSocketFactory
mail.smtp.socketFactory.fallback=false
mail.smtp.user=${mail.smtp.user}
mail.smtp.password=${mail.smtp.password}

```

##### The package structure

Here is the structure of our package:

```
nuxeo-automation-5.3.2.zip
  package.xml
  install.xml
  bundles/
    nuxeo-automation-core-5.3.2.jar
    nuxeo-automation-server-5.3.2.jar
    nuxeo-automation-jsf-5.3.2.jar
  lib/
    mvel2-2.0.16.jar
  config/
    mail.properties
  forms/
    install.xml

```

##### The&nbsp;`package.xml` descriptor

Here is our Package Manifest:

```
<package type="addon" name="nuxeo-automation" version="5.3.2">
  <title>Nuxeo Automation</title>
  <description>A service that enable building complex business logic on top of Nuxeo services using scriptable operation chains</description>
  <vendor>Nuxeo</vendor>
  <classifier>Open Source</classifier>
  <home-page>https://doc.nuxeo.com/display/NXDOC/Content+Automation</home-page>
  <platforms>
    <platform>dm-5.3.2</platform>
    <platform>dam-5.3.2</platform>
  </platforms>
</package>

```

##### The install form

{{#> callout type='warning' }}

Forms, which are base on the&nbsp;`ParametrizedCopy` command, are more or less deprecated since they currently work only under the following conditions ([NXP-14777](https://jira.nuxeo.com/browse/NXP-14777)):

*   not under Windows,
*   MP is hot-reloadable ([NXP-8241](https://jira.nuxeo.com/browse/NXP-8241)),
*   and DEV mode is activated.

Instead, you should use [a custom configuration template]({{page space='ADMINDOC' page='Adding Custom+Templates'}}) deployed and activated by the MP, then configured by the server administrator from `nuxeo.conf`

{{/callout}}

We need to define an additional page for the install wizard to ask for the properties needed to inject in the&nbsp;`mail.properties` file.

Here is the form definition we need

```
<forms>
  <form>
    <title>SMTP configuration</title>
    <description>Fill the SMTP configuration to be used by the SendMail operation. All fields are required</description>
    <fields>
      <field name="mail.smtp.host" type="string" required="true">
        <label>Host</label>
        <value>smtp.gmail.com</value>
      </field>
      <field name="mail.smtp.port" type="integer" required="true">
        <label>Port</label>
        <value>465</value>
      </field>
      <field name="mail.smtp.user" type="string" required="true">
        <label>Username</label>
      </field>
      <field name="mail.smtp.password" type="password" required="true">
        <label>Password</label>
      </field>
    </fields>
  </form>
</forms>

```

{{#> callout type='info' }}

Note that the field IDs in the form are the same as the variable keys we need to inject into the&nbsp;`mail.properties` file

{{/callout}}

##### The&nbsp;`install.xml` script

Here is the content of the&nbsp;`install.xml` file:

```
<install>
  <!-- copy bundles -->
  <copy file="${package.root}/bundles/nuxeo-automation-core-5.3.2.jar" tofile="${env.bundles}"/>
  <copy file="${package.root}/bundles/nuxeo-automation-jsf-5.3.2.jar" tofile="${env.bundles}"/>
  <copy file="${package.root}/bundles/nuxeo-automation-server-5.3.2.jar" tofile="${env.bundles}"/>
  <!-- copy libs -->
  <copy file="${package.root}/lib/mvel2-2.0.16.jar" tofile="${env.lib}"/>
  <!-- copy the parametrized mail.properties file -->
  <pcopy file="${package.root}/config/mail.properties" tofile="${env.config}" ignore="Platform.isJBoss()" />
  <!-- now deploy copied bundle: we don't require a server restart -->
  <deploy file="${env.bundles}/nuxeo-automation-core-5.3.2.jar" />
  <deploy file="${env.bundles}/nuxeo-automation-server-5.3.2.jar" />
  <deploy file="${env.bundles}/nuxeo-automation-jsf-5.3.2.jar" />
</install>

```

You can see the&nbsp;`mail.properties` is not installed if the package install target is a JBoss-based distribution.
