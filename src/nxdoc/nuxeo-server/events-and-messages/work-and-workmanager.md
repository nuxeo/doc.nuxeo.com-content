---
title: Work and WorkManager
review:
    comment: ''
    date: '2017-12-13'
    status: ok
labels:
    - lts2016-ok
    - workmanager
    - bdelbosc
    - node
    - work-manager-component
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '16089319'
    ajs-parent-page-title: Additional Services
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Work+and+WorkManager
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Work+and+WorkManager'
    page_id: '17793529'
    shortlink: _YEPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/_YEPAQ'
    source_link: /display/NXDOC/Work+and+WorkManager
tree_item_index: 1100
history:
    -
        author: Antoine Taillefer
        date: '2016-06-24 13:29'
        message: ''
        version: '10'
    -
        author: Antoine Taillefer
        date: '2016-06-24 13:28'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2016-06-09 14:25'
        message: ''
        version: '8'
    -
        author: Manon Lumeau
        date: '2016-04-20 14:31'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2015-07-22 11:56'
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

The [WorkManager](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewService/org.nuxeo.ecm.core.work.api.WorkManager) service allows you to run code later, asynchronously, in a separate thread and transaction.

{{! /excerpt}}

## Work Instance

The code to be executed asynchronously must be implemented in an [`AbstractWork`](http://community.nuxeo.com/api/nuxeo/release-8.2/javadoc/org/nuxeo/ecm/core/work/AbstractWork.html) subclass. In theory you could just implement [`Work`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/work/api/Work.html) yourself but this is strongly discouraged, for forward-compatibility reasons.

### Work Construction

Each Work instance must have a unique id describing the Work in its entirety. The id can either be random (just call the empty `AbstractWork()` constructor), or specified by the caller ( `AbstractWork(id)`).

It is important to note that 2 works with the same id are considered identical, the work manager implementation can skip successive invocation to save resources.

At construction time, the Work instance should also have its `setDocument()` method called to set the repository name and document(s) id(s) that this Work instance is going to be dealing with, and a flag specifying whether the work is actually about a whole subtree under the given document. This is important for monitoring and locking purposes.

### Work Implementation

A Work instance must be `Serializable` in order for it to be persisted between server restarts. All fields that are used only during work execution but don't hold any configuration state must be marked `transient`. Persistence is done through a Redis server, please check [Redis Configuration]({{page page='redis-configuration'}}) for more.

A Work instance must implement the following methods:

*   `getCategory()` should return the Work category, which is used to choose which Work Queue to use when queuing it for later execution.

*   `getTitle()` should return a human-readable name for the Work instance, for monitoring purposes.

*   `getRetryCount()` should return the number of retries allowed; this is used if `retryableWork()` is implemented.

*   `work()` or `retryableWork()` should be implemented to do the actual work.

*   `cleanUp()` can be overridden if there is some cleanup to do when the work is done. Make sure you call `super`.

*   `rollbackAndRetryTransaction()` can be overridden for a retryable Work if there is some cleanup to do before a Work is retried. Make sure you call `super`.

The meat of the Work instance is the `work()` method (or `retryableWork()`, but we won't repeat this each time). The following is available during method execution:

*   `setStatus()` should be called with a human-readable status at key times during the execution (for instance Starting, Extracting, Done), for monitoring purposes.
*   `setProgress()` should be called periodically during the execution, if there is any progress to measure, for monitoring purposes.
*   `initSession()` can be called to initialize the `session` field (a `CoreSession`) on the repository specified at construction time.

For long-running Work, `work()` should periodically check for `isSuspending()` and if `true` save the work state in non-transient fields of the Work instance and call `suspended()` and then return. This is how a server shutdown can interrupt a long-running Work, persist it, and relaunch it when the server restarts.

### Work Scheduling

Once a Work instance is constructed, it must be sent to the WorkManager for execution using the `schedule()` method. The recommended way to call this method is:

```java
WorkManager workManager = Framework.getService(WorkManager.class);
workManager.schedule(work, true);
```

The `schedule()` method takes a second parameter which is `afterCommit`, and should be `true` in most cases otherwise the Work may be scheduled immediately even before the current transaction has committed, which would prevent the Work from seeing the results of the current transaction.

You should avoid using the `Scheduling` argument to the `schedule()` method, as it may become deprecated in the near future.

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

The details of the configuration can be seen in the [extension point documentation](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.core.work.service--queues). Here we'll concentrate on the important points:

*   The name is a human-readable name, for monitoring purposes.
*   The categories define which Work instances go to this queue.
*   The number of threads define how many parallel executions of Work instances can be happening.

If a Work instance has a category that isn't registered with any queue, then it will be sent to the `default` queue.

### Persistent Work Queues

When using persistent queues (using Redis, see [Redis Configuration]({{page page='redis-configuration'}})), then any Nuxeo instances where the queue is configured will pick Work instances from the persistent queue according to the availability of a thread in its thread pool.

If you want a given Nuxeo instance to stop processing a given queue, you can specify in this instance's configuration to disable the queue:

```xml
<extension point="queues" target="org.nuxeo.ecm.core.work.service">
  <queue id="myqueue" processing="false"/>
</extension>
```

To disable all queues and just re-enable one you want to see active, you can use something like:

```xml
<extension point="queues" target="org.nuxeo.ecm.core.work.service">
  <queue id="*" processing="false"/>
  <queue id="myqueue" processing="true"/>
</extension>
```

## Dedicated Nodes

When deploying a Nuxeo Cluster, you may be interested in dedicating some of the nodes to some specific tasks.

There may be several motivations for that:

*   You have some heavy asynchronous processing and you don't want this slow down the interactive processing.
    A typical use case is to use the Video conversion jobs on nodes that do not handle user facing processing.
*   Some asynchronous processing requires some specific resource that is not available on all nodes:

    *   Hardware resources like GPU used for image processing
    *   Software resources like an antivirus software

### Configuring Dedicated Nodes in a Nuxeo Cluster

The Nuxeo Platform allows to achieve this for asynchronous processing using the WorkManager.

![](https://www.lucidchart.com/publicSegments/view/5492ed54-35ac-4c35-b312-45780a008e1c/image.png ?w=500,h=377,border=true)

The idea is that all the Nuxeo nodes can remain exactly identical to each other, at least in terms of Nuxeo bundles deployment (it is usually easier to keep all nodes aligned on the same packages).

Dedicating nodes to a given task is handled by two aspects:

*   The load balancer: typically interactive processing nodes are used by the load balancer to handle end users requests.
*   The WorkManager queues: some queues will be assigned to some background processing nodes so that only these dedicated nodes will consume the jobs in these queues.

In a cluster environment, the Workmanager queues are handled by Redis so that the queues can effectively be shared across the cluster. This way, an interactive node (i.e. feed by the load balancer) can schedule an asynchronous job like a video conversion. This job will be assigned to a queue, waiting for one of the Nuxeo nodes to execute it.

This is where the queue configuration comes into play.

Let's say you define a queue for managing Video conversions:

```xml
<extension point="queues" target="org.nuxeo.ecm.core.work.service">
  <queue id="HeavyProcessing">
    <name>HeavyProcessingQueue</name>
    <maxThreads>2</maxThreads>
    <category>VideoConversion</category>
    <category>PictureConversions</category>
  </queue>
</extension>
```

Typically, the "interactive nodes" are configured to not consume this type of queue.

```xml
<extension point="queues" target="org.nuxeo.ecm.core.work.service">
  <queue id="HeavyProcessing" processing="false"/>
</extension>
```

Then the "background processing nodes" are on the contrary, configured to consume these queues: so they will do the heavy processing that was scheduled by the interactive nodes.

```xml
<extension point="queues" target="org.nuxeo.ecm.core.work.service">
  <queue id="HeavyProcessing" processing="true"/>
</extension>
```

## Stream WorkManager

An alternative WorkManager has been introduced in Nuxeo 9.3 based on Nuxeo Stream.

Visit the [Nuxeo Stream]({{page page='nuxeo-stream'}}) for more information.

## WorkManager API Evolution

Since Nuxeo 10.2 we have deprecated some of WorkManager original API that cannot scale or are not reliable in distributed environments.

For instance:
- Retrieving a Work object is not safe, the Work being mutable the returned instance can be different that the scheduled or running one.
- Listing works in a specific state cannot scale properly when having millions of works and it is not reliable because a work listed as scheduled might be in another state while the list is returned.
Another problem with these methods is that they provide a way to manage manually the work execution which creates complex and untested (in distributed environments) cases.

In our code base we found usage of these methods were not needed or misuse of the WorkManager API that could be better implemented using other ways.

Common misuses are related to work unicity that's now handled using `isIdempotent` Work flag that the StreamWorkManager implementation takes in account in a reliable way.
