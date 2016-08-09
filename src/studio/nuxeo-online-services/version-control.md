---
title: Version Control
labels:
    - anchor
    - versioning
    - content-review-6-0
confluence:
    ajs-parent-page-id: ''
    ajs-parent-page-title: ''
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Version+Control
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Version+Control'
    page_id: '3342395'
    shortlink: OwAz
    shortlink_source: 'https://doc.nuxeo.com/x/OwAz'
    source_link: /display/Studio/Version+Control
history:
    - 
        author: Alain Escaffre
        date: '2016-03-21 22:30'
        message: ''
        version: '26'
    - 
        author: Bertrand Chauvin
        date: '2014-11-21 12:40'
        message: Added on save commit style
        version: '25'
    - 
        author: Alain Escaffre
        date: '2012-09-23 09:49'
        message: Migrated to Confluence 4.0
        version: '24'
    - 
        author: Alain Escaffre
        date: '2012-09-23 09:48'
        message: ''
        version: '23'
    - 
        author: Alain Escaffre
        date: '2012-09-23 09:48'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2011-04-26 10:35'
        message: ''
        version: '21'
    - 
        author: Alain Escaffre
        date: '2011-02-24 20:17'
        message: ''
        version: '20'
    - 
        author: Alain Escaffre
        date: '2011-02-24 20:13'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2011-01-19 16:54'
        message: fixed typoes
        version: '18'
    - 
        author: Solen Guitter
        date: '2011-01-19 15:58'
        message: ''
        version: '17'
    - 
        author: Rob Day
        date: '2011-01-12 11:33'
        message: Some grammatical fixes.
        version: '16'
    - 
        author: Solen Guitter
        date: '2010-09-16 11:02'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2010-09-16 10:49'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2010-09-16 10:48'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2010-09-16 10:45'
        message: ''
        version: '12'
    - 
        author: Bogdan Stefanescu
        date: '2010-06-21 19:14'
        message: ''
        version: '11'
    - 
        author: Bogdan Stefanescu
        date: '2010-06-21 18:59'
        message: ''
        version: '10'
    - 
        author: Bogdan Stefanescu
        date: '2010-06-21 18:27'
        message: ''
        version: '9'
    - 
        author: Bogdan Stefanescu
        date: '2010-06-21 18:26'
        message: ''
        version: '8'
    - 
        author: Bogdan Stefanescu
        date: '2010-06-21 17:58'
        message: ''
        version: '7'
    - 
        author: Bogdan Stefanescu
        date: '2010-06-21 17:57'
        message: ''
        version: '6'
    - 
        author: Bogdan Stefanescu
        date: '2010-06-21 17:52'
        message: ''
        version: '5'
    - 
        author: Bogdan Stefanescu
        date: '2010-06-21 17:20'
        message: ''
        version: '4'
    - 
        author: Bogdan Stefanescu
        date: '2010-06-21 17:08'
        message: ''
        version: '3'
    - 
        author: Bogdan Stefanescu
        date: '2010-06-21 16:45'
        message: ''
        version: '2'
    - 
        author: Bogdan Stefanescu
        date: '2010-06-21 15:14'
        message: ''
        version: '1'

---
Nuxeo Studio provides project versioning capabilities by using [GIT](http://git-scm.com/) as the versioning control system.&nbsp;Each **Studio** project is providing a&nbsp;_Project Versioning_ view where you can track your changes history, tag or revert commits. Thus versioning is provided at the project level - each project has its own GIT repository so that it is isolated from other projects.

The versioning repository is initialized when you create the project and will contain an initial commit with all the initial files required by a Studio project.

![]({{file name='STUDIO-versioning-1.png'}} ?w=600,border=true)

Here are the main functionalities provided by project versioning:

*   Manage changes history: you can view the last 100 commits you've made and you can tag or revert any commit you want.
*   Manage Tags (or project versions): you can manage project versions - create new tags, remove or rename existing tags.
*   Commit style: manual commit changes or use commit on build features.

## <span style="color: rgb(0,0,0);">**Managing Tags**</span>

Project Tags are read only snapshots (or versions) of the project. In the **Project Versioning > Tags** view you can:

1.  create new tags from a commit or from the current working version.&nbsp;
2.  delete existing tags
3.  rename (release) a tag.
4.  commit pending changes
5.  download tag JAR

### Creating new tags

There are two ways to create a new tag:

1.  From the _Tags_ view by clicking on _Tag_ button.
    In that case the tag will be created from the working directory and will do an automatic commit if needed. (the tag will contain all recent changes you've made and not yet committed)
2.  From the _Changes History_ view by clicking on a commit and then on the _Tag_ button in the commit information panel.&nbsp;
    In that case the tag will be created from the commit you selected. That means the tag will include all the modifications made until that revision (the commit revision included). You can use this to make snapshots of known (or stable) states to be able to use them later.

When creating a tag you will be asked to enter a tag name and a tag description. As for the commit the tag description should be short and meaningful. The tag name must be a short alphanumeric string with no spaces (you can use underscore, dot or dash characters). You are encouraged to use version strings since tag names will be used as the maven artifact version for your project (see [Maven Integration]({{page page='maven-integration'}})).

Example of good tag names: 1.0, 1.0.2, 1.0-beta, 20100624, 1.0-snapshot etc.

When a tag is created the project is build and the resulting JAR will be stored inside the TAG. This way you can download the JAR corresponding to the tag by clicking the Download button. (the jar is never rebuild - it is build only once at tag creation)

## <span style="color: rgb(0,0,0);">**Releasing tags**</span>

When you create a tag, test the tag JAR and find that this version is good enough to be put in production you can **rename**&nbsp;the TAG to have a suitable name for a release. This operation is available by clicking on the _Release_ button.&nbsp;

Let say for example that you created a tag named "1.0-rc1" and you decide that this version can be released as "1.0" version. In that case you simply rename 1.0-rc1 as 1.0 using the Release button.

## <span style="color: rgb(0,0,0);">**Reverting changes**</span>

Reverting changes means to replace your current working directory with the revision you want to revert from. A revision can be a tag or a commit. So reverting can be done from both _Tags_ and _Changes_ views by clicking on the Revert _button._

{{#> callout type='note' }}

Be **aware**&nbsp;that a revert operation is **not** reversible. Any changes you've done between the reverted revision and your current working version will be lost! It is recommended&nbsp;to first tag your working version before doing a revert. This way you can still restore later your latest working version from the tag (by doing another revert).

{{/callout}}{{#> callout type='info' }}

**Quick Summary**

*   User saves: config is persisted server-side.
*   User commits with an optional comment: this works only if something has been changed (otherwise it says : nothing to commit). Every commits are visibles in the commit history. It is possible to revert the state of the repository to a previous commit. If the user does so, all the commits executed after the one to he is reverting will be lost, including work that was not committed
*   User tags, with a tag name. The tag is displayed and can be reverted to the "trunk". Contrary to reverting to a previous commit, reverting to a tag doesn't delete any history. It simply replaces the "trunk" configuration by the one that was tagged and commits. (Tagging is visible in the commit history).
*   User releases snapshot, with a revision/minor/major flag and an optional (useless and that we should remove) suffix. It does a version of the current trunk (and commits it). Contrary to tags, version are available from the Update Center, to be installed.
*   User releases a tag. Does the same as the version, but instead of putting the "trunk" in the release, it puts the tag. It would be the same as reverting the tag then releasing the snapshot.

The Tags view enables to see all the tags and releases that were done, the changes view enables to see the commits history. Clicking on one line enables to see all the files/features that were modified on a commit, clicking again enables to see the text diff.

{{/callout}}