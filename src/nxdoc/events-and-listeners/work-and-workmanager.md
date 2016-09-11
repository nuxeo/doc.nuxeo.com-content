---
title: Work and WorkManager
review:
    comment: ''
    date: ''
    status: ok
labels:
    - workmanager
toc: true
confluence:
    ajs-parent-page-id: '22380901'
    ajs-parent-page-title: Events and Listeners
    ajs-space-key: NXDOC60
    ajs-space-name: Nuxeo Platform Developer Documentation — 6.0
    canonical: Work+and+WorkManager
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC60/Work+and+WorkManager'
    page_id: '22380863'
    shortlink: P4FVAQ
    shortlink_source: 'https://doc.nuxeo.com/x/P4FVAQ'
    source_link: /display/NXDOC60/Work+and+WorkManager
history:
    - 
        author: Manon Lumeau
        date: '2015-09-16 11:51'
        message: ''
        version: '6'
    - 
        author: Florent Guillaume
        date: '2014-02-04 14:43'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-12-04 14:08'
        message: 'Updated links, added TOC'
        version: '4'
    - 
        author: Florent Guillaume
        date: '2013-11-14 18:49'
        message: ''
        version: '3'
    - 
        author: Florent Guillaume
        date: '2013-11-14 18:42'
        message: ''
        version: '2'
    - 
        author: Florent Guillaume
        date: '2013-11-14 17:53'
        message: ''
        version: '1'

---
{{! excerpt}}

The [WorkManager](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewService/org.nuxeo.ecm.core.work.api.WorkManager) service allows you to run code later, asynchronously, in a separate thread and transaction.

{{! /excerpt}}

## Work Instance

The code to be executed asynchronously must be implemented in an&nbsp;[`AbstractWork`](http://community.nuxeo.com/api/nuxeo/release-5.8/javadoc/org/nuxeo/ecm/core/work/AbstractWork.html) subclass. In theory you could just implement&nbsp;[`Work`](http://community.nuxeo.com/api/nuxeo/release-5.8/javadoc/org/nuxeo/ecm/core/work/api/Work.html) yourself but this is strongly discouraged, for forward-compatibility reasons.

### Work Construction

Each Work instance must have a unique id describing the Work in its entirety. The id can either be random (just call the empty `AbstractWork()` constructor), or specified by the caller (`AbstractWork(id)`).

At construction time, the Work instance should also have its&nbsp;`setDocument()` method called to set the repository name and document(s) id(s) that this Work instance is going to be dealing with, and a flag specifying whether the work is actually about a whole subtree under the given document. This is important for monitoring and locking purposes.

### Work Implementation

A Work instance must be `Serializable` in order for it to be persisted between server restarts. All fields that are used only during work execution but don't hold any configuration state must be marked `transient`.&nbsp;Persistence is done through a Redis server, please check&nbsp;[Redis Configuration]({{page space='admindoc60' page='redis-configuration'}})&nbsp;for more.

A Work instance must implement the following methods:

*   `getCategory()` should return the Work category, which is used to choose which Work Queue to use when queuing it for later execution.&nbsp;

*   `getTitle()` should return a human-readable name for the Work instance,&nbsp;for monitoring purposes.

*   `getRetryCount()`&nbsp;should return the number of retries allowed; this is used if&nbsp;`retryableWork()`&nbsp;is implemented.

*   `work()` or `retryableWork()` should be implemented to do the actual work.

*   `cleanUp()` can be overridden if there is some cleanup to do when the work is done. Make sure you call `super`.

*   `rollbackAndRetryTransaction()` can be overridden for a&nbsp;retryable Work if there is some cleanup to do before a Work is retried. Make sure you call `super`.

The meat of the Work instance is the `work()`&nbsp;method (or `retryableWork()`, but we won't repeat this each time). The following is available during method execution:

*   `setStatus()` should be called with a human-readable status at key times during the execution (for instance Starting, Extracting, Done), for monitoring purposes.
*   `setProgress()` should be called periodically during the execution, if there is any progress to measure, for monitoring purposes.
*   `initSession()` can be called to initialize the `session` field (a `CoreSession`) on the repository specified at construction time.

For long-running Work, `work()` should periodically check for `isSuspending()` and if `true` save the work state in non-transient fields of the Work instance and call `suspended()` and then return. This is how a server shutdown can interrupt a long-running Work, persist it, and relaunch it when the server restarts.

### Work Scheduling

Once a Work instance is constructed, it must be sent to the WorkManager for execution using the `schedule()` method. The recommended way to call this method is:

```java
WorkManager workManager = Framework.getLocalService(WorkManager.class);
workManager.schedule(work, true);
```

The `schedule()` method takes a second parameter which is `afterCommit`, and should be `true` in most cases otherwise the Work may be scheduled immediately even after the current transaction has committed, which would prevent the Work from seeing the results of the current transaction.

You should avoid using the `Scheduling` argument to the&nbsp;`schedule()` method, as it may become deprecated in the near future.

## Work Queues

Every Work instance is queued in a Work Queue. Each queue is associated with a thread pool of one or more threads, which will execute the Work instances whenever a thread becomes available.

```xml
<extension point="queues" target="org.nuxeo.ecm.core.work.service">
  <queue id="myqueue">
    <name>My Queue</name>
    <maxThreads>2</maxThreads>
    <category>somecategory1</category>
    <category>somecategory2</category>
  </queue>
</extension>
```

The details of the configuration can be seen in the&nbsp;[extension point documentation](http://explorer.nuxeo.org/nuxeo/site/distribution/Nuxeo%20Platform-6.0/viewExtensionPoint/org.nuxeo.ecm.core.work.service--queues). Here we'll concentrate on the important points:

*   The name is a human-readable name, for monitoring purposes.
*   The categories define which Work instances go to this queue.
*   The number of threads define how many parallel executions of Work instances can be happening.

If a Work instance has a category that isn't registered with any queue, then it will be sent to the `default` queue.

### Persistent Work Queues

When using persistent queues (using Redis, see&nbsp;[Redis Configuration]({{page space='admindoc60' page='redis-configuration'}})), then any Nuxeo instances where the queue is configured will pick Work instances from the persistent queue according to the availability of a thread in its thread pool.

If you want a given Nuxeo instance to stop processing a given queue, you can specify in this instance's configuration to disable the queue:

```xml
<extension point="queues" target="org.nuxeo.ecm.core.work.service">
  <queue id="myqueue" processing="false"/>
</extension>
```

To disable all queues and juste re-enable one you want to see active, you can use something like:

```xml
<extension point="queues" target="org.nuxeo.ecm.core.work.service">
  <queue id="*" processing="false"/>
  <queue id="myqueue" processing="true"/>
</extension>
```