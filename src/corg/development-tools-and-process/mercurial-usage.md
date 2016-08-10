---
title: Mercurial usage
labels:
    - mercurial
confluence:
    ajs-parent-page-id: '3868947'
    ajs-parent-page-title: Development Tools and Process
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Mercurial+usage
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Mercurial+usage'
    page_id: '3868951'
    shortlink: Fwk7
    shortlink_source: 'https://doc.nuxeo.com/x/Fwk7'
    source_link: /display/CORG/Mercurial+usage
history:
    - 
        author: Solen Guitter
        date: '2012-12-03 16:53'
        message: ''
        version: '17'
    - 
        author: Julien Carsique
        date: '2011-11-17 11:29'
        message: Migrated to Confluence 4.0
        version: '16'
    - 
        author: Julien Carsique
        date: '2011-11-17 11:29'
        message: ''
        version: '15'
    - 
        author: Stéphane Lacoin
        date: '2011-11-09 17:52'
        message: ''
        version: '14'
    - 
        author: Mathieu Guillaume
        date: '2011-10-01 12:49'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2010-12-02 15:59'
        message: ''
        version: '12'
    - 
        author: Stéfane Fermigier
        date: '2010-11-08 19:06'
        message: ''
        version: '11'
    - 
        author: stan
        date: '2010-10-28 18:11'
        message: ''
        version: '10'
    - 
        author: Florent Guillaume
        date: '2010-10-26 13:05'
        message: ''
        version: '9'
    - 
        author: Stéfane Fermigier
        date: '2010-10-26 11:43'
        message: ''
        version: '8'
    - 
        author: Julien Carsique
        date: '2010-10-25 15:39'
        message: ''
        version: '7'
    - 
        author: Julien Carsique
        date: '2010-10-25 15:36'
        message: ''
        version: '6'
    - 
        author: Julien Carsique
        date: '2010-10-25 15:27'
        message: ''
        version: '5'
    - 
        author: Julien Carsique
        date: '2010-10-25 15:26'
        message: ''
        version: '4'
    - 
        author: Julien Carsique
        date: '2010-10-25 15:25'
        message: ''
        version: '3'
    - 
        author: Julien Carsique
        date: '2010-10-25 15:23'
        message: ''
        version: '2'
    - 
        author: Julien Carsique
        date: '2010-10-25 14:27'
        message: ''
        version: '1'

---
## Installing Mercurial

Nuxeo EP source are tracked using [Mercurial](http://mercurial.selenic.com/) from Selenic.

### Linux

To install the hg command under Ubuntu / Debian :

```
$ sudo apt-get install mercurial
```

Under Fedora Core, this should become:

```
$ yum install mercurial
```

If you need the help of a good UI, I suggest you tortoise HG

```
$ sudo apt-get install tortoisehg
```

### Windows

For MS Windows, we recommend to use the all in one [tortoise bundle](http://mercurial.selenic.com/wiki/TortoiseHg) provided to you by Selenic.
Due to path length limitations on Windows, you may also want to install the [Win32LongFileNamesExtension](http://mercurial.selenic.com/wiki/Win32LongFileNamesExtension).

### Mac OS X

For Mac OS X, our preferred method is to use the [MacPorts](http://www.macports.org/) or [Darwin Ports](http://darwinports.com/) environment.

```
$ port install mercurial
```

### Setting a username

If you plan to checkin in nuxeo's hg repositories, you should provide a valid user name. This is achieved by setting the username property in the .hgrc settings file.

```
...
[ui]
...
username = firstname lastname <you@your-domain>
...
```

### Activating pre-integrated extensions

You should activate some pre-integrated extensions for working with nuxeo repositories. This is achieved by adding the following lines to the extensions section of your .hgrc.

```
...
[extensions]
...
hgext.mq =
hgext.parentrevspec =
hgext.graphlog =
patchbomb =
transplant =
...
```

### Using Forest

{{#> callout type='warning' heading='Warning'}}

The Mercurial Forest extension was used to manage the different source trees that comprise Nuxeo EP, but it is not maintained and we have decided to stop using it.

{{/callout}}

## Overview and online documentation

See [http://mercurial.selenic.com/wiki/UnderstandingMercurial](http://mercurial.selenic.com/wiki/UnderstandingMercurial).

Mercurial is a completely decentralized system. Every cloned repositories contain a working directory and a store of complete project's history, thus allowing offline and parallel development.

The working directory contains a copy of the project's files at a given point in time, ready for editing.

The store contains a sufficient data to provide any file at any revision or tag from any branch.

Mercurial groups related changes to multiple files (commits) into single atomic changesets. Every commit generates a changeset recording the state of the working directory relative to its parents, so merging is really easier and more efficient than with other SCM.

### Mercurial home site

[http://mercurial.selenic.com/wiki/Mercurial](http://mercurial.selenic.com/wiki/Mercurial).

There are &ldquo;getting started&rdquo; and &ldquo;using Mercurial&rdquo; documentations, even some help for developers used to other SCM systems.

### Nuxeo documentation

You will find useful tips and scripts in [Nuxeo FAQ]({{page space='kb' page='nuxeo-technical-knowledge-base-faq'}}) and some workarounds or guidelines for specific cases.

### Nested repositories and Forest extension

When migrating from Subversion to Mercurial, we looked for a feature replacing "svn externals".

We have used the [Forest extension](http://mercurial.selenic.com/wiki/ForestExtension) for a while but this Mercurial extension is no more maintained.

Since the "[nested repositories](http://mercurial.selenic.com/wiki/NestedRepositories)" (since Mercurial 1.3) are still an experimental feature and do not address our needs, we don't use them.

So, there is currently no Mercurial solution for running a command on a "full" Nuxeo repository including its sub-repositories, such as cloning full Nuxeo sources.

Nuxeo provides [NXDOC:Shell scripts|#shellscripts] for managing repositories containing sub-repositories (see `hgf`, `hgx`, `clone.sh`, ...).

## Nuxeo common usage

### Centralized repositories

Although Mercurial is decentralized, Nuxeo hosts &ldquo;centralized&rdquo; Mercurial repositories which are the &ldquo;reference&rdquo; repositories, they are backed up and changesets made on local repositories must finally be pushed on those remote repositories.

The public "centralized" Mercurial repository is [https://hg.nuxeo.org/](https://hg.nuxeo.org/).

### Server-side hooks

We've set some Mercurial &ldquo;hooks&rdquo; on the central repositories filtering changesets according to whether they comply to the following rules:

*   Changesets must not be blacklisted.
    *   Even with the Mercurial's two-steps committing process (commit then push), it may happen to push erroneous changesets with really no interest or making trouble in code history. In such cases, it's a good thing to "strip" these changesets, removing them from history.
    *   We usually blacklist a changeset after having stripped it, to be sure nobody will push it again in case it has been pulled before being stripped.
    *   Error message is:

        <pre>ABORTED: changeset %s has been blacklisted,
        please strip it from your repository after making sure you don't depend on it:
        hg strip %s</pre>

*   Changesets are in an allowed branch.
    *   We make an extra use of branches: for long-time developments, prototype or spike solutions, ease parallel changes and give each developer merging responsibility of its code. Branches have "stable/main", "maintenance/release" or "development/test" purpose.
    *   Depending on the project we use white or black lists for branch names.
    *   On some projects, for instance, we blacklist the &ldquo;default&rdquo; branch to avoid confusion or lack of information about current version.
    *   Error message:

        <pre>ABORTED: changesets with branch "%s" are not allowed.
        The only allowed branches are: %s</pre>

        {{#> callout type='tip' heading='Getting branches list'}}

        Existing branches are given by this command:

        ```
        hg branches [-a]
        ```

        {{/callout}}
*   Changesets do not result in two heads for the same branch.
    *   Changesets that have a given branch tag, but have no child changesets with that tag are called branch "heads". Mercurial identifies branches depending on their history so there may be two separate branches with the same name in case of concurrent changes made on a branch which were based on different parents. Of course, such situation is abnormal and must be fixed. This hook will prevent a developer from pushing changesets resulting in homonym branch heads.
    *   Rule is: always pull before trying to push. If your local changes drive to multiple heads with same branch name, you must merge them before pushing.
    *   Error message:

        ```
        ABORTED: branch %s has several heads (%s), you must merge them before pushing.
        ```

        {{#> callout type='tip' heading='Getting heads list'}}

        Existing heads are listed with this command:

        ```
        hg heads [branchName]
        ```

        {{/callout}}
*   User for changesets must be valid.
    *   For code history readability, usernames must be formatted like &ldquo;John Doe <jdoe@nuxeo.com>&rdquo;.
    *   Error message:

        ```
        ABORTED: changesets with user "%s" are not allowed.
        You need to specify your user name in $HOME/.hgrc as follows:
        [ui]
        username = John Smith <jsmith@nuxeo.com>
        ```

*   Notifications
    This hook will generate a mail to the public mailing list <ecm-checkins@lists.nuxeo.com> for every changeset (except "merging" changesets which are filtered out).
*   Build trigger
    This hook launches a build in our continuous integration system: [http://qa.nuxeo.org/](http://qa.nuxeo.org/hudson/). Using a trigger ran at every commit is saving a lot of bandwidth compared to regularly pulling the repository to check for code changes.

Setting such hooks was not mandatory but they guarantee the developers are following a few basic rules and prevent them from simple mistakes.

It is sometimes possible to force a push in spite of the hooks, when you know the hook message is not an error but a warning and it can be securely circumvented.

### Branch layout and policy

We usually define stable, maintenance and development branches.

*   Stable, next to release branch
    Often called "main" branch, this named branch is hosting the most-recent code.
    Stable branch is of course under continuous integration. Merge and commits must be double-checked; as much as possible, changes have been firstly tested and validated on a development branch or in developer's working directory.
    Nuxeo uses stable branches named x.y (i.e. 5.4). New features, eventually breaking API, are developed on the last x.y (currently 5.4). There's almost no new feature on other branches which have both stable and maintenance purpose and are gathering fixes from x.y.z releases.
    I.e. 5.4 branch is hosting 5.4.0-SNAPSHOT code which will lead to 5.4.0 release. 5.3 branch is hosting 5.3.3-SNAPSHOT code and may lead to 5.3.3 release.
*   Maintenance, patch branch
    When releasing, a dedicated branch is created and then tagged. This branch is used for creating minor versions releases.
    Fixes done on it will be merge on stable branch(es); fixes from stable branch(es) may be backported on this maintenance branch to generate patches or minor releases.
    Maintenance branch are rarely under continuous integration as there is no more work on them except fixes and backports.
    I.e. 5.1.6 branch is hosting 5.1.6 code, tagged as release-5.1.6, and may lead to minor versions releases such as 5.1.6.x.
*   Development branches
    Developers are strongly encouraged to use as much branches as they need (one per JIRA issue or per development iteration). Those branches may or not be automatically tested, their purpose is code isolation while it is unstable: they are merged to main dev or stable branch after being fully tested.
    I.e. 5.2-NXP-9999-some_user_story will host code linked to implement some user story until the end of the iteration (or some point the code is considered mostly stable and usable).

## Best practices

Here are some recommended practices using Mercurial at Nuxeo.

*   Update and commit often. It will ease future merge tasks.
*   Always reference a Jira issue at the beginning of commit comments: i.e. &ldquo;NXP-9999 &ndash; sample task, remove code using deprecated API&rdquo;.
*   Long time work should be done in a separate branch; named with the associated Jira issue and a short description: i.e. &ldquo;NXP-9999_longtime_work&rdquo;
*   Check what you've changed before committing and what you've committed before pushing.

    ```
    hg status
    hg diff
    hg outgoing
    ```

*   Never &ldquo;force&rdquo; a push unless being sure it has to be done.

## Useful scripts, commands and tips

### The following Mercurial commands are given with useful parameters into brackets, other parameters may be available.

See `hg help [NXDOC:COMMAND]` for available commands listing or help on a specific command.

### Nuxeo shell and batch scripts

They are mainly used for Nuxeo repositories which contain sub-repositories. Those scripts provide an alternative to the Forest extension.

hgf function runs a hg command into current and nuxeo-* subdirectories:

```
hgf() {
for dir in . nuxeo-*; do
if [ -d "$dir"/.hg ]; then
echo;echo "[$dir]"
(cd "$dir";hg "$@";echo)
fi
done
}
```

hgf.bat:

```
@echo off
set PWD=%CD%
echo [.]
hg %*
for /d %%D in (nuxeo-*) do (
echo [%%D]
cd %PWD%%%D
hg %*
)
cd %PWD%
```

hgx function is a little more complex and tied to nuxeo repositories as it runs a hg command into current and nuxeo-* subdirectories managing with the two version numbers we had on nuxeo before 5.4 (i.e. 5.2/1.5). It uses inverted polish notation.

```
_hgx_dir() {
  DIR=$1
  VER=$2
  OPT=$3
  [ -d $DIR ] && (echo $PWD/$DIR ; hg -R $DIR $OPT $VER || true) || (echo ignore $DIR); echo
}

# usage: "hgx 5.3 1.6 up -C", "hgx 5.2 1.5 merge"
hgx() {
  NXP=$1
  NXC=$2
  shift 2;
  if [ -d .hg ]; then
    echo $PWD
    hg $@ $NXP; echo
    # NXC
    for dir in nuxeo-common nuxeo-runtime nuxeo-core; do
      _hgx_dir $dir $NXC "$@"
    done
    # NXP
    for dir in nuxeo-theme nuxeo-shell nuxeo-platform nuxeo-services nuxeo-jsf nuxeo-features \
      nuxeo-dm nuxeo-webengine nuxeo-gwt nuxeo-distribution; do
      _hgx_dir $dir $NXP "$@"
    done
  fi
}

```

hgx.bat:

```
@echo off
set PWD=%CD%
set NXP=%1
set NXC=%2
echo [.]
hg %3 %NXP%
for /d %%D in (nuxeo-platform nuxeo-distribution nuxeo-theme nuxeo-shell nuxeo-webengine nuxeo-gwt nuxeo-services nuxeo-jsf nuxeo-features nuxeo-dm) do (
echo [%%D]
cd %PWD%%%D
hg %3 %NXP%
)
for /d %%D in (nuxeo-core nuxeo-common nuxeo-runtime) do (
echo [%%D]
cd %PWD%%%D
hg %3 %NXC%
)
cd %PWD%
```

#### Check incoming changes

```
hg in [-p] [-r REVISION]
```

#### Check uncommitted changes

```
hg st [--rev REVISION]
```

This gives you modified (M), added (A), removed (R) and uncontrolled files (?) .

Use `hg add`, `hg rm`, `hg addremove [NXDOC:-s 100]` and/or `hg ci` to commit these changes.

#### Check current branch, working directory status

```
hg id [-inbt]
```

This gives you current revision (with a + if it has been locally modified but not yet committed), current branch name and, if your current revision is the latest modified head, the `tip` keyword.

```
hg parents [-r REVISION]
```

Show the parents of the working directory or revision.

#### Show latest changeset, existing heads, branches and tags

```
hg tip [-p]
```

This gives you the log of the latest modified head, aka `tip`.

```
hg branches [-a]
```

Branches marked as &ldquo;inactive&rdquo; are not considered as `heads`, they haven't been modified since they were merged into another branch (i.e. Nuxeo 5.1 branch is always &ldquo;inactive&rdquo; as we ask the developers to always merge &mdash; forward port &mdash; their changesets from 5.1 to 5.2 and so on.

```
hg heads [-r REVISION] [REVISION]
```

This is useful for example to identify multiple heads with same name that must be merged.

```
hg tags
```

Gives all available tags and their corresponding revision and branch.

#### Follow changesets history

```
hg log [-r REVISION] [-l LIMIT] [-p]
```

Show revision history of entire repository or files.

```
hg glog [-r REVISION] [-l LIMIT] [-p]
```

Same as log but with a graphical view (requires GraphLog extension).

```
hg ann [-r] [-f] [-u] [-d] [-n] [-l]
```

Show changeset information per file line. Useful when you need to know who changed a specific part of a file.

#### Undo commands

```
hg strip REVISION
```

Strip a revision and all later revisions on the same branch.

```
hg unbundle FILE...
```

Apply one or more changegroup files. Used to revert a strip.

```
hg backout
```

Reverse effect of earlier changeset. Contrary to strip, backout only removes one changeset, not the children revisions.

```
hg rollback
```

Roll back the last transaction.

```
hg revert [-a] [-r REVISION] FILE...
```

Restore individual files or directories to an earlier state.

#### Remarks

Don't use `hg pull -u` but prefer `hg pull && hg up`, there are sometimes issues with the first one. Also, check your current branch with `hg id` after `hg clone` as it goes by default on `tip` branch.

## Advanced usage and specific use cases

### Merging policy from stable to development branch

Merge stable branch on your development one as much as possible. It can be automated at morning and then manually done day by day each time there is some work merged on stable.

```
hg pull && hg up -C devbranch
hg merge stablebranch && hg ci -m"automated merge from stablebranch" [-u...] && hg push
```

See [http://svn.nuxeo.org/nuxeo/tools/mercurial/automerge.sh](http://svn.nuxeo.org/nuxeo/tools/mercurial/automerge.sh).

### Merging policy from development to stable branch

It happens at the end of a development iteration, when code to merge is implementing a group of User Stories/Use Cases.

Unit tests are up-to-date to valid the new code (see Test Driven Development recommendations - TDD).

Functional tests are up-to-date to cover the new functionalities.

The development branch to merge must have been fully tested:

*   developers have successfully run Unit Tests
*   developers have functionally validated last developments
*   automated builds have run on development branch
    At this moment, development branch can be merged on stable one:

    ```
    hg pull && hg up -C stablebranch
    hg merge devbranch && hg st
    hg ci -m"merge from devbranch -- NXP-9999 ..."
    hg push [-f]
    ```

    Use "-f" only if stablebranch was no more a head.

### Managing multiple heads

If two developers worked on the same branch with different parents, it may result in two simultaneous branches with the same name (see server-side hooks).

```
$ hg push
pushing to [https://hg.nuxeo.org/somerepository]
searching for changes
abort: push creates new remote heads!
(did you forget to merge? use push -f to force)
```

In such case, the developers won't be able to push their changesets until they have merged the two branches. `hg heads branchname` will show the multiple heads and their changeset identifiers.

Simplest way is to switch his working directory to the other developer's revision and merge his own code:

```
hg up -C otherRevision
hg merge ownRevision
hg st
hg ci -m"merge two heads"
hg push
```

### Checks before pushing

In case of doubts, before pushing, you can check what you've done with multiple commands:

```
hg out [-p] [-r REVISION]
hg glog [-l LIMIT] [|less]
hg heads someBranch
```

### Saving bandwidth

Thanks to Mercurial which is decentralized, even if Nuxeo's repositories are not, you can pull from Internet to a local repository and then pull from this repository. Then, you can update the .hg/hgrc file to bind it on the central repository or continue using the local one, pushing on it and then pushing changesets from it to the remote one.

```
hg clone [https://hg.nuxeo.org/somerepository/] ~/repo-remote/
hg clone ~/repo-remote/ ~/repo-local/
cd ~/repo-local/
# some work...
hg ci -m"NXP-9999 - some work" && hg push
cd ~/repo-remote/ && hg pull
# usual checks (heads, merge, ...)
hg push
```

Later, to update ~/repo-local/ for instance:

```
cd ~/repo-remote/ && hg pull
cd ~/repo-local/ && hg pull && hg up
```

### Fetch

`hg fetch` can be used to pull, merge, commit but it is for experienced users, we recommended being familiarized with unitary commands before using fetch.
Activate Fetch feature in your `~/.hgrc` file:

```
[extensions]
fetch=
```

### Mercurial Queues

Mercurial Queues are an advanced group of Mercurial functions. Whereas not very easy to apprehend, they are powerful tools.

You can for instance transform a group of changesets made on a wrong branch to patches being then re-applied on the right branch, while editing and changing anything in those changesets (user, comments, ...).

See [http://mercurial.selenic.com/wiki/MqExtension](http://mercurial.selenic.com/wiki/MqExtension) or [Mercurial: The Definitive Guide by Bryan O'Sullivan](http://hgbook.red-bean.com/read/mercurial-queues-reference.html).

#### Changing descriptions of changesets not pushed yet

You need to have mqueue extension activated in your `~/.hgrc` file:

```
[extensions]
hgext.mq =

```

Check what you want to change and haven't pushed

```
hg out

```

Initialize mqueue

```
hg qinit

```

Import your changesets you want to modify in the queue. The changesets will be moved to the queue branch. For example, to import the changesets from 692 to 695.

```
hg qimport -r 692:695

```

Extract the queue into the filesystem. At this stage, your changesets won't be visible from your log. (-a to pop all the changesets from the queue)

```
hg qpop -a

```

mqueue will then create diff files (one for each changeset) in the folder .hg/patches. You can modify these files, changing the description or even changing the patches.

Once you have made your changes, put them back to the queue.

```
hg qpush -a

```

Finish with moving your changeset back to your branch

```
hg qfinish -a

```

That's all :)