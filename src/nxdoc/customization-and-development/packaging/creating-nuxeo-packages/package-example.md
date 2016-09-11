---
title: Package Example
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '17334494'
    ajs-parent-page-title: Creating Nuxeo Packages
    ajs-space-key: NXDOC58
    ajs-space-name: 'Nuxeo Platform Developer Documentation - 5.8 '
    canonical: Package+Example
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC58/Package+Example'
    page_id: '17334480'
    shortlink: 0IAIAQ
    shortlink_source: 'https://doc.nuxeo.com/x/0IAIAQ'
    source_link: /display/NXDOC58/Package+Example
history:
    - 
        author: Solen Guitter
        date: '2014-07-02 11:07'
        message: ''
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
The following example is imaginary - it is not a real Nuxeo update package. It's&nbsp;purpose&nbsp;is to be an example of a complex package installable on a Nuxeo distribution.

In this example we will create a package to install Nuxeo Automation feature on a 5.3.2 version of Nuxeo DM.

##### What We Want to Install

Nuxeo Automation is composed of 3 Nuxeo bundles:

*   nuxeo-automation-core-5.3.2.jar
*   nuxeo-automation-server-5.3.2.jar
*   nuxeo-automation-jsf-5.3.2.jar

and one third party library:

*   mvel2-2.0.16.jar

This library is not existing on a 5.3.2 version of Nuxeo so we want to add it (not to upgrade it).

Also, for tomcat distributions we need to deploy a mail.properties file in Nuxeo configuration directory. This file contains the SMTP configuration needed by javax.mail. On JBoss we already have this configuration as a JBoss MBean. This configuration is required by the SendMail operation. The configuration file is a Java property file and contains variables that will be substituted by the values entered by the user during the install wizard.&nbsp;

Here is the parametrized mail.properties file we want to install:

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

##### The Package Structure

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

##### The package.xml

Here is our package manifest:

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

##### The Install Form

We need to define an additional page for the install wizard to ask for the properties needed to inject in the mail.properties file.

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

Note that the field IDs in the form are the same as the variable keys we need to inject into the mail.properties file

{{/callout}}

##### The install.xml Script

Here is the content of the install.xml file

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

You can see the mail.properties is not installed if we are installing the package on a JBoss based distribution.