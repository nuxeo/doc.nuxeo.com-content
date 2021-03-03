---
title: JGit by Example
description: Blog posts to discover JGit
review:
    comment: ''
    date: ''
    status: ok
tree_item_index: 400
toc: true
---

![]({{file space='main' page='blog' name='jgit_logo.png'}})

Many of you must be familiar with the version control system [Git](https://git-scm.com/). At Nuxeo, we are extremely fond of it and use it for our sources and version management in [Nuxeo Studio](https://www.nuxeo.com/products/studio/). To easily use the Git commands in our Java code, we rely on a great and easy-to-use API: **JGit**.

Over the last few months while developing the new [Branch Management](https://doc.nuxeo.com/display/Studio/Branches+Management) feature of the Nuxeo Platform, I was impressed by the ease of use of this API! But I faced some problems because of lack of proper documentation. So, the goal of this blog is to show you the basics of using JGit using a few examples.

## First JGit Example: Create a Commit

Let’s start with the basics! We are going to initiate a Git repository, add a new file and create a commit. You will see, it’s as easy as working directly with the Git command-lines!
```
// Creation of a temp folder that will contain the Git repository
File workingDirectory = File.createTempFile("nuxeo-git-test", "");
workingDirectory.delete();
workingDirectory.mkdirs();

// Create a Repository object
Repository repo = FileRepositoryBuilder.create(new File(workingDirectory, ".git"));
repo.create();
Git git = new Git(repo);

// Create a new file and add it to the index
File newFile = new File(workingDirectory, "myNewFile");
newFile.createNewFile();
git.add().addFilepattern("myNewFile").call();

// Now, we do the commit with a message
RevCommit rev = git.commit().setAuthor("gildas", "gildas@example.com").setMessage("My first commit").call();
```

Let’s look at the different kinds of JGit objects used in this example.

- **Repository**: It represents a Git repository and contains all the references and objects used for the management of sources.

- **Git**: It is the API to interact with the Git repository. You can use the high-level commands of Git and define the parameters using the getters of each command.

- **AddCommand**,**CommitCommand**: These are the high-level commands used in this example. We get them from the Git object by calling `git.add()` and `git.commit()` respectively. The parameters of the command are defined using the getters (like defining the author and the message for the commit)

- **RevCommit**: It represents the reference of a commit. In the context of the call of CommitCommand it is the reference of the newly created commit. You can get the information of the commit, such as author, reference of the parents, message, etc.

## Second JGit Example: Work with Branches

We improved the versioning feature with the introduction of management of branches. Managing branches with JGit is pretty simple. The commands we need for this are CreateBranchCommand, DeleteBranchCommand, CheckoutCommand and ListBranchCommand.

```
// Create a new branch
git.branchCreate().setName("newBranch").call();
// Checkout the new branch
git.checkout().setName("newBranch").call();
// List the existing branches
List&lt;Ref&gt; listRefsBranches = git.branchList().setListMode(ListMode.ALL).call();
for (Ref refBranch : listRefsBranches) {
System.out.println("Branch : " + refBranch.getName());
}
// Go back on "master" branch and remove the created one
git.checkout().setName("master");
git.branchDelete().setBranchNames("newBranch");
```

Using these high-level commands is actually easier than managing branches with the Git command-lines! It is also more explicit for people who are not very familiar with Git.

In this example, a new kind of object has been introduced: the object **Ref**. A Ref object represents a Git object identifier. It could be a branch, a tag, a commit, etc. A Ref is needed when you want to access to a specific commit or a tag (we will get to that later). Let’s keep it simple for now!

You can get the current branch of your repository using this: `repo.getBranch()` or `repo.getFullBranch()` if you want the complete name with the `refs/heads/` prefix.

## Third JGit Example: Compare the Changes Made Between Two Branches

This last example is more complex as it requires a deeper dive into the advanced mechanisms of Git. Let’s start by comparing the changes made between the HEAD and the commit before. To achieve that, we use two iterators to walk the Git tree, each iterator will be set to the id of the tree associated to a commit (in our case, it is HEAD^ and HEAD~^).

After setting the iterators, we call the **DiffCommand** which is the JGit implementation of the command-line *git-diff*.

```
// Get the id of the tree associated to the two commits
ObjectId head = repo.resolve("HEAD^{tree}");
ObjectId previousHead = repo.resolve("HEAD~^{tree}");
// Instanciate a reader to read the data from the Git database
ObjectReader reader = repo.newObjectReader();
// Create the tree iterator for each commit
CanonicalTreeParser oldTreeIter = new CanonicalTreeParser();
oldTreeIter.reset(reader, previousHead);
CanonicalTreeParser newTreeIter = new CanonicalTreeParser();
newTreeIter.reset(reader, head);
List&lt;DiffEntry&gt; listDiffs = git.diff().setOldTree(oldTreeIter).setNewTree(newTreeIter).call();
// Simply display the diff between the two commits
for (DiffEntry diff : listDiffs) {
        System.out.println(diff);
}
```

An object **DiffEntry** contains the following information:
- the type of changes that were made
- the old and the new paths of the file

Now, we would like to have the difference of contents between these two commits. The initialisation of the iterators is the same, we will just modify the *for* loop displaying the DiffEntry to format the diff of the content using the
**DiffFormatter**.

```
// Display a formatted diff between the two commits
for (DiffEntry diff : listDiffs) {
System.out.println(diff);
DiffFormatter formatter = new DiffFormatter(System.out);
formatter.setRepository(repo);
formatter.format(diff);
}
```

I hope these few examples helped you get the basics of JGit. To go deeper into the examples of JGit, I recommend [this cookbook](https://github.com/centic9/jgit-cookbook). It’s an excellent source of documentation. If you do not find what you are looking for, main use-cases are described [here in StackOverflow](https://stackoverflow.com/questions/tagged/jgit).

* * *

**About Nuxeo**

Nuxeo, developer of the leading Content Services Platform, is reinventing [enterprise content management](https://www.nuxeo.com/products/enterprise-content-management/?utm_source&#61;2019%20Forrester%20ECM%20CP%20Wave&amp;utm_medium&#61;press%20release&amp;utm_campaign&#61;2019%20Forrester%20ECM%20CP%20Wave) (ECM) and [digital asset management](https://www.nuxeo.com/solutions/dam-digital-asset-management/?utm_source=2019%20Forrester%20ECM%20CP%20Wave&utm_medium=press%20release&utm_campaign=2019%20Forrester%20ECM%20CP%20Wave) (DAM). Nuxeo makes it easy to build smart content applications that enhance customer experiences, improve decision making, and accelerate products to market.

Its cloud-native, low-code platform has been deployed by large enterprises worldwide. Customers like Electronic Arts, TBWA, ABN AMRO, and CVS have used Nuxeo's technology to transform the way they do business. Founded in 2000, the company is based in New York with offices across the United States, Europe, and Asia. Learn more at [www.nuxeo.com](https://www.nuxeo.com/?utm_source&#61;2019%20Forrester%20ECM%20CP%20Wave&amp;utm_medium&#61;press%20release&amp;utm_campaign&#61;2019%20Forrester%20ECM%20CP%20Wave).
