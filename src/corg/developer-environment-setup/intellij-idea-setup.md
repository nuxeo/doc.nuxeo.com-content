---
title: IntelliJ IDEA Setup
review:
    comment: ''
    date: '2017-05-16'
    status: ok
labels:
    - intellij
    - idea
toc: true
tree_item_index: 700
---

## Download and Install IntelliJ IDEA

You can [download](https://www.jetbrains.com/idea/download/) the latest version of IntelliJ IDEA from Jet
Brains, the official website. It supports all the platforms including Mac OS,
Windows, and Linux. IntelliJ has two editions: Community Edition and Ultimate
Edition. Nuxeo sources code work with both of them. Once downloaded, install
IntelliJ IDEA with your own preferences.

## Import Nuxeo Source Code into IntelliJ IDEA

{{#> callout type='note' }}

We assume that you've cloned the Nuxeo source code successfully. If it's not the
case, please go back to the previous section, [Getting the Nuxeo Source Code]({{page page='getting-the-nuxeo-source-code'}}),
to see how to do it.

{{/callout}}

Before importing Nuxeo source code, you need to configure the VM options for
importer to increase the importation capacity. Open IntelliJ, a welcome menu
will be shown. On the right bottom of menu, click **Configure** > **Preferences**.
Then search _VM options for importer_ and set it to:

    -Xms1g -Xmx4g

Now import Nuxeo source code as Maven project. In the default welcome menu,
choose _Import Project_, then find the Nuxeo root folder and select the POM file
`pom.xml`. Afterwards, enable Maven import options as the following:

- Import Maven projects automatically
- Create IntelliJ IDEA modules for a aggregator projects (with 'POM' packaging)
- Create module groups for multi-module Maven projects
- Keep source and test folders on reimport
- Exclude build directory (%PROJECT_ROOT%/target)
- Use Maven output directories

Later, you will need to:

- Choose Maven profiles:
   - A Nuxeo developer will choose the profile `qa` or `qapriv`
   - Other users will likely choose `Nuxeo`
   - More advanced options are mentioned in [Configure Repositories]({{page version='' space='corg' page='maven-usage'}}#configure-repositories)
- Choose Project SDK: use JDK 8
- Edit name to create a new IntelliJ project: default

After that, the configuration is finished. IntelliJ will create a project for
you, the entire process (Maven import) will take a few minutes, please be
patient.

## Advanced Configurations

This section is optional.

### Customize VM Options

If you want to improve the performance of IntelliJ, you can customize the VM
options. Click **Help** > **Edit Custom VM Options...**. If there's no existing
configuration file, IntelliJ will help you to create one. Then edit the content
with your preferred values:

```
# custom IntelliJ IDEA VM options

-Xms1g
-Xmx4g
...
```

## Configure Nuxeo Code Style

Download and install plugin [Eclipse Code Formatter](https://plugins.jetbrains.com/plugin/6546-eclipse-code-formatter).
Then, you need to configure it using the [tools folder of the top-level repository](https://github.com/nuxeo/nuxeo/tree/master/tools/).

- Enable the plugin
- Import Eclipse Java Formatter config file from the tools folder of Nuxeo source code
  `nuxeo/tools/nuxeo-formatter.xml`.
- Optimize import order from file `nuxeo/tools/nuxeo.importorder`

Congratulations! Now everything is done. Enjoy IntelliJ IDEA, your capable and
ergonomic IDE!
