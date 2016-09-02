---
title: Working with multiple versions of Nuxeo sources at the same time
confluence:
    ajs-parent-page-id: '9275205'
    ajs-parent-page-title: Developer Environment Setup
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Working+with+multiple+versions+of+Nuxeo+sources+at+the+same+time
    canonical_source: >-
        https://doc.nuxeo.com/display/CORG/Working+with+multiple+versions+of+Nuxeo+sources+at+the+same+time
    page_id: '3343484'
    shortlink: fAQz
    shortlink_source: 'https://doc.nuxeo.com/x/fAQz'
    source_link: >-
        /display/CORG/Working+with+multiple+versions+of+Nuxeo+sources+at+the+same+time
history:
    - 
        author: Julien Carsique
        date: '2015-09-04 16:42'
        message: ''
        version: '24'
    - 
        author: Julien Carsique
        date: '2012-01-09 18:22'
        message: ''
        version: '23'
    - 
        author: Julien Carsique
        date: '2012-01-09 18:22'
        message: ''
        version: '22'
    - 
        author: Julien Carsique
        date: '2012-01-09 16:43'
        message: ''
        version: '21'
    - 
        author: Julien Carsique
        date: '2011-12-16 12:42'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2011-08-30 11:03'
        message: ''
        version: '19'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 14:43'
        message: ''
        version: '18'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:27'
        message: ''
        version: '17'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:23'
        message: ''
        version: '16'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 10:13'
        message: ''
        version: '15'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 09:13'
        message: ''
        version: '14'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 09:07'
        message: ''
        version: '13'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 08:54'
        message: ''
        version: '12'
    - 
        author: Stéfane Fermigier
        date: '2010-07-22 08:50'
        message: ''
        version: '11'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 20:10'
        message: ''
        version: '10'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 20:03'
        message: ''
        version: '9'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 19:20'
        message: ''
        version: '8'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 19:00'
        message: ''
        version: '7'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:38'
        message: ''
        version: '6'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:22'
        message: ''
        version: '5'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:17'
        message: ''
        version: '4'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:11'
        message: ''
        version: '3'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:09'
        message: ''
        version: '2'
    - 
        author: Stéfane Fermigier
        date: '2010-07-21 18:00'
        message: ''
        version: '1'

---
There is some code refactoring between Nuxeo versions making it difficult to work on two branches at the same time. Especially, if you need to merge some changes from one branch to another.
Moreover, switching from a version to another on the whole code makes IDE hang or consume CPU on refresh.

Here are some solutions making it easier to work on multiple branches.

## Local Clone

Here is a simple way to work on multiple branches. We assume:

*   you are using Nuxeo shell functions (see [Getting the Nuxeo source code]({{page page='getting-the-nuxeo-source-code'}}))
*   your Eclipse's current workspace is ~/workspace/
*   you have cloned Nuxeo in ~/workspace/nuxeo/ and had checkout master

{{#> panel type='code' heading='Sample of using Nuxeo master and 5.4.2 at the same time'}}

```
# In order to be able to use multiple Eclipse workspaces, we'll clone Nuxeo 5.4.2 in another Eclipse workspace
mkdir ~/workspace-5.4/
git clone ~/workspace/nuxeo/ ~/workspace-5.4/nuxeo-5.4
cd ~/workspace-5.4/nuxeo-5.4
./clone.py 5.4.2

```

{{/panel}}

Now, you are able to commit on 5.4.2, merge on master, commit on master and push the whole:

```
cd ~/workspace-5.4/nuxeo-5.4
# do some work...
git commit -m"NXP-9999 - some work on 5.4.2" ...
# push your changeset(s) to your main ~/workspace/nuxeo/ repository
git push
cd ~/workspace/nuxeo/
# merge or cherry-pick your changes to master
git merge 5.4.2
git cherry-pick ...
# do some work...
git commit -m"some work on master" ...
# push your changesets to the public repository
git push ...

```

Updating your sources is done fetching on master, then pulling on 5.4:

```
cd ~/workspace/nuxeo/
gitf fetch
cd ~/workspace-5.4/nuxeo-5.4
gitf fetch

```

{{#> callout type='info' }}

Whereas that method had no limitation using Mercurial, that's not the case using Git because of its notion of "bare and non-bare repositories"

Usually, you have cloned non-bare repositories and Git documentation states << By default, updating the current branch in a non-bare repository is denied, because it will make the index and work tree inconsistent with what you pushed, and will require 'git reset --hard' to match the work tree to HEAD. >>

That behavior is configurable by changing the "receive.denyCurrentBranch" Git property but the best way is to push other branches than the current one which was checkout on the destination.

{{/callout}}

&nbsp;

For import into Eclipse, you have to use two different workspaces, one for each version.

Remember ~/workspace-5.4/nuxeo-5.4 is a clone of your local ~/workspace/nuxeo/ which is a clone of public repositories:

```
cd ~/workspace/nuxeo
$ git config --get remote.origin.url
git@github.com:nuxeo/nuxeo.git
cd ~/workspace-5.4/nuxeo-5.4
$ git config --get remote.origin.url
~/workspace/nuxeo

```

{{#> callout type='note' }}

If you use m2eclipse plugin, it will rename the root nuxeo directory to nuxeo-ecm (the artifact name) so you have to create symbolic links pointing to two respective nuxeo and nuxeo-5.4 in each workspaces, to avoid issues or unwanted directories renaming.

{{/callout}}

&nbsp;

## Git Worktree

As of Git 2.5, a Git repository can now support multiple working trees, allowing you to check out more than one branch at a time.
All the commits are stored in the main repository, making the workflow greatly simplified compared to the previous local-clone solution.

The worktree feature is experimental and should not be used with submodules/subtrees.

[https://git-scm.com/docs/git-worktree](https://git-scm.com/docs/git-worktree)
[https://github.com/git/git/blob/v2.5.0/Documentation/RelNotes/2.5.0.txt](https://github.com/git/git/blob/v2.5.0/Documentation/RelNotes/2.5.0.txt)

{{#> panel type='code' heading='Sample of using Nuxeo master and 6.0 at the same time'}}

```
cd ~/workspace/
git -C nuxeo worktree add ~/workspace/nuxeo-6.0 6.0
cd nuxeo/addons
for dir in */.git; do (dir=$(dirname $dir); cd $dir ; git worktree add ~/workspace/nuxeo-6.0/addons/$dir 6.0) ; done
```

{{/panel}}

You can now work indifferently from&nbsp;`~/workspace/nuxeo` or `~/workspace/nuxeo-6.0`, commit, push... They share the same Git index.

{{#> callout type='info' }}

You cannot checkout the same branch in two different work trees. The same limitation as for the non-bare repositories still applies.

{{/callout}} {{#> callout type='warning' }}

At time of writing, very few tools have been updated to work with the worktree feature.

[gitfunctions.sh](https://github.com/nuxeo/nuxeo/blob/master/scripts/gitfunctions.sh) has been updated.

[clone.py](https://github.com/nuxeo/nuxeo/blob/master/clone.py) still works fine but it has yet no dedicated option to properly initialize the worktree directories.

{{/callout}}

&nbsp;

&nbsp;