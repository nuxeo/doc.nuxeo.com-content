---
title: Getting the Nuxeo Source Code
review:
    comment: ''
    date: ''
    status: ok
labels:
    - git
    - 5-7-1
    - source-code
toc: true
confluence:
    ajs-parent-page-id: '9275205'
    ajs-parent-page-title: Developer Environment Setup
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Getting+the+Nuxeo+Source+Code
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Getting+the+Nuxeo+Source+Code'
    page_id: '4685836'
    shortlink: DIBH
    shortlink_source: 'https://doc.nuxeo.com/x/DIBH'
    source_link: /display/CORG/Getting+the+Nuxeo+Source+Code
tree_item_index: 400
history:
    -
        author: Manon Lumeau
        date: '2016-09-06 16:07'
        message: ''
        version: '37'
    -
        author: Anahide Tchertchian
        date: '2016-07-12 11:42'
        message: remove -T 1C build option until NXP-20081 is fixed
        version: '36'
    -
        author: Julien Carsique
        date: '2016-02-24 13:40'
        message: ''
        version: '35'
    -
        author: Ronan Daniellou
        date: '2016-02-24 13:34'
        message: 'Typo: missing space'
        version: '34'
    -
        author: Ronan Daniellou
        date: '2016-02-24 13:32'
        message: Added Maven "eclipse.workspace" option.
        version: '33'
    -
        author: Solen Guitter
        date: '2015-11-30 10:17'
        message: 'NXDOC-658: Marketplace packages are now called Nuxeo Packages'
        version: '32'
    -
        author: Solen Guitter
        date: '2015-02-10 15:51'
        message: ''
        version: '31'
    -
        author: Solen Guitter
        date: '2015-01-14 10:16'
        message: ''
        version: '30'
    -
        author: Julien Carsique
        date: '2014-11-12 12:38'
        message: ''
        version: '29'
    -
        author: Julien Carsique
        date: '2014-04-29 14:16'
        message: ''
        version: '28'
    -
        author: Jean-Christophe Melaunay
        date: '2014-04-29 11:35'
        message: ''
        version: '27'
    -
        author: Michaël Vachette
        date: '2014-02-14 15:13'
        message: ''
        version: '26'
    -
        author: Michaël Vachette
        date: '2014-02-14 14:45'
        message: ''
        version: '25'
    -
        author: Solen Guitter
        date: '2013-06-18 14:24'
        message: Changed since 5.7 for 5.7.1
        version: '24'
    -
        author: Julien Carsique
        date: '2013-05-06 19:02'
        message: ''
        version: '23'
    -
        author: Julien Carsique
        date: '2013-05-06 19:02'
        message: ''
        version: '22'
    -
        author: Thibaud Arguillere
        date: '2013-05-06 18:30'
        message: ''
        version: '21'
    -
        author: Thibaud Arguillere
        date: '2013-02-21 16:44'
        message: ''
        version: '20'
    -
        author: Julien Carsique
        date: '2012-11-23 11:36'
        message: ''
        version: '19'
    -
        author: Jane Zupan
        date: '2012-10-18 23:06'
        message: ''
        version: '18'
    -
        author: Martin Pernollet
        date: '2012-09-10 17:47'
        message: Migrated to Confluence 4.0
        version: '17'
    -
        author: Martin Pernollet
        date: '2012-09-10 17:47'
        message: ''
        version: '16'
    -
        author: Martin Pernollet
        date: '2012-09-10 15:48'
        message: ''
        version: '15'
    -
        author: Olivier Grisel
        date: '2012-04-16 20:18'
        message: increase heapspace for maven and use -DskipTests
        version: '14'
    -
        author: Julien Carsique
        date: '2012-01-31 11:28'
        message: ''
        version: '13'
    -
        author: Anahide Tchertchian
        date: '2012-01-30 18:29'
        message: ''
        version: '12'
    -
        author: Anahide Tchertchian
        date: '2012-01-30 18:26'
        message: ''
        version: '11'
    -
        author: Anahide Tchertchian
        date: '2012-01-30 18:25'
        message: ''
        version: '10'
    -
        author: Anahide Tchertchian
        date: '2012-01-30 18:23'
        message: moving HG stuff to a sub page
        version: '9'
    -
        author: Julien Carsique
        date: '2012-01-09 16:40'
        message: ''
        version: '8'
    -
        author: Julien Carsique
        date: '2012-01-09 16:37'
        message: ''
        version: '7'
    -
        author: Julien Carsique
        date: '2012-01-09 16:35'
        message: ''
        version: '6'
    -
        author: Julien Carsique
        date: '2012-01-09 16:33'
        message: ''
        version: '5'
    -
        author: Julien Carsique
        date: '2012-01-09 16:30'
        message: ''
        version: '4'
    -
        author: Florent Guillaume
        date: '2011-12-01 21:22'
        message: '-> 5.5'
        version: '3'
    -
        author: Julien Carsique
        date: '2010-11-15 20:11'
        message: ''
        version: '2'
    -
        author: Stéfane Fermigier
        date: '2010-10-26 16:06'
        message: ''
        version: '1'

---
## Getting Nuxeo Platform Source Code

Nuxeo Platform sources shall be retrieved and worked with using [Git](http://git-scm.com/download). Nuxeo core developers should have a look at [Nuxeo's Git usage]({{page page='git-usage'}}).

Some (mostly deprecated) code and scripts may be retrieved and worked with using [Mercurial](http://www.selenic.com/mercurial/) (see the documentation at [SubVersion](http://subversion.apache.org/)).

{{#> callout type='note' }}

The following assumes you know how to work with Maven and sources in your IDE (Eclipse is used below). In particular this means that you have already configured the IDE to work with Maven (M2_REPO set in Eclipse).

Starting from version 5.9.2, Nuxeo requires Maven <span style="color: rgb(34,34,34);">3.1.1+</span> (3.2 recommended). Earlier releases require Maven 2.2.1.

{{/callout}}

### Getting the Development Branch

{{/panel}}{{#> panel type='code' heading='Clone in Read+Write mode'}}

```
git clone git@github.com:nuxeo/nuxeo.git
cd nuxeo
python clone.py master -a

```

{{/panel}} {{#> callout type='note' }}

*   clone.py can be run with Python 2.7.x but not 3.x versions.
*   Users of MSysGit should run clone.py with option --no_drive_mapping or -n as MSysGit is not able to access dynamically mounted drives. This option is available as of version 5.7.1.

{{/callout}} {{#> callout type='note' }}

Contributing to Nuxeo **does not** require cloning Nuxeo source code: see [Contributing to Nuxeo]({{page space='nxdoc' page='contributing-to-nuxeo'}})

{{/callout}}

### Import Nuxeo Source Code in Eclipse

Of course for the dependencies to be resolved in Eclipse they will have to be loaded first in your Maven repository, which you can do by performing at least one build first:

{{#> panel type='code' heading='Full build Nuxeo without running tests'}}

```
export MAVEN_OPTS="-Xmx4096m -Xms1024m -XX:MaxPermSize=512m"
mvn -DskipTests install -Paddons
(cd nuxeo-distribution ; mvn -DskipTests install)
```

{{/panel}}

If you want to open/edit the projects in Eclipse do the following at the very root of the Git repository:

{{#> panel type='code' heading='Generate Eclipse\'s project files'}}

```
# For details, see Maven Eclipse Plugin documentation: https://maven.apache.org/plugins/maven-eclipse-plugin/eclipse-mojo.html
mvn eclipse:clean eclipse:eclipse -Paddons,distrib [-DdownloadSources=true] [-DdownloadJavadocs=true] [-Declipse.useProjectReferences=true] [-Declipse.workspace=/path/to/eclipse/workspace] -fae -nsu -T 1C
# Linux and OS X users should then run the following script to make Eclipse use different build directories than Maven:
./fixeclipse
# A cross-platform script is also available for Windows users:
# python scripts/fixeclipse.py
```

{{/panel}}

Then in Eclipse:

{{#> panel type='code' heading='Import Nuxeo modules into Eclipse'}}

```
File -> Import -> General -> Existing Projects into Workspace

```

{{/panel}}

### Getting a Maintenance Branch or a Specific Release

All releases are tagged `release-x.y.z` and maintained on a dedicated branch `x.y.z`.
Use the same recipe as above, but specify the wanted branch (5.4.1, 5.4.2, 5.5.0, ...) or tag (release-5.4.1, release-5.4.2, release-5.5, ...):

{{#> panel type='code' heading='Get Nuxeo 5.5 release source code'}}

```
python clone.py release-5.5

```

{{/panel}}

> To see all available branches or tags, run _git branch -a_ or _git tag_.

### Updating Your Sources

Either call _git pull -u_ in each repository or run:

{{#> panel type='code' heading='Update sources'}}

```
python clone.py

```

{{/panel}}

## Useful Shell Functions

There are some scripts to ease working on Nuxeo Git repositories available in the `scripts` directory of Nuxeo.
Load them from your .profile or .bashrc, for instance from Nuxeo root:

{{#> panel type='code' heading='Use Nuxeo helper Shell scripts'}}

```
echo ". $PWD/scripts/gitfunctions.sh" >> ~/.bashrc

```

{{/panel}}

Windows users will find equivalent Batch scripts in the same directory named `gitf.bat`.

Those scripts' main purpose is to recursively run a command on multiple repositories.

Example usage:

{{#> panel type='code' heading='Git script "gitf" usage'}}

```
gitf status
gitf describe --all

# Also recurse on "standard" addons (those listed in addons/pom.xml)
gitfa [some Git command]

```

{{/panel}}

## Nuxeo Versioning Policy

### Summary Sample

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

SCM Branch

</th><th colspan="1">

SCM Tag

</th><th colspan="1">

Version

</th><th colspan="1">

Status

</th></tr><tr><td colspan="1">

master

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

x.y[.z]({{page page='z'}})-SNAPSHOT

</td><td colspan="1">

development branch where is prepared next x.y[.z]({{page page='z'}}) version

</td></tr><tr><td colspan="1">

5.5.0

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

5.5.0-HFXX-SNAPSHOT

</td><td colspan="1">

maintenance branch where bugs are fixed/backported for Nuxeo 5.5

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

release-5.5

</td><td colspan="1">

5.5

</td><td colspan="1">

release tag for 5.5 version

</td></tr><tr><td colspan="1">

5.4.2

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

5.4.2-HFXX-SNAPSHOT

</td><td colspan="1">

maintenance branch where bugs are fixed/backported for Nuxeo 5.4.2

</td></tr><tr><td colspan="1">

&nbsp;

</td><td colspan="1">

release-5.4.2

</td><td colspan="1">

5.4.2

</td><td colspan="1">

release tag for 5.4.2 version

</td></tr><tr><td colspan="1">

fix-NXP-9999-*
feature-NXP-9999-*

</td><td colspan="1">

&nbsp;

</td><td colspan="1">

usually same as on master

</td><td colspan="1">

development branch dedicated to NXP-9999 feature or bug fix

</td></tr></tbody></table></div>

Releases are built from tags set on their maintenance branch.

Bug fixes are usually done on a maintenance branch, forwarded to development branch and optionally back-ported to other maintenance branches.
Maintenance branches are only released for development purpose; the fixes are delivered through Hotfix Nuxeo Packages.

### Detailed Sample

Development is done on branch _master_ with current version _5.6-SNAPSHOT_.

Let's say we will release Nuxeo 5.6.
A branch is created from _master_, named _5.6.0_.
On branch _5.6.0_, version is updated from _5.6-SNAPSHOT_ to _5.6_ (releasing version).
On branch _5.6.0_, code is tagged as _release-5.6_.
If it is an important release (called "final release"), then a maintenance branch will be kept, else it would be deleted after tagging.
On branch _5.6.0_, version is updated to _5.6.0-HF01-SNAPSHOT_ (future fixes for 5.6 version).
On branch _master_, version is updated to _5.7-SNAPSHOT_ (next release version).
Release done.

Next development is still done on branch _master_, with version _5.7-SNAPSHOT_.

Bugs identified on 5.6 version will be fixed on maintenance branch _5.6.0_ and forward ported to the _master_ branch.
If we estimate some bug fixes are required on 5.6.x released version, we may back-port them from _master_ branch to _5.6.x_ branch.
Maintenance branch 5.6.0 is regularly released to deliver 5.6.0-HFxx corrective hot-fixes.
