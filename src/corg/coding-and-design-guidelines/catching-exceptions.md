---
title: Catching Exceptions
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '4685848'
    ajs-parent-page-title: Coding and Design Guidelines
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Catching+Exceptions
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Catching+Exceptions'
    page_id: '10387649'
    shortlink: wYCe
    shortlink_source: 'https://doc.nuxeo.com/x/wYCe'
    source_link: /display/CORG/Catching+Exceptions
history:
    - 
        author: Manon Lumeau
        date: '2015-09-29 13:57'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2013-08-06 11:28'
        message: Added TOC
        version: '8'
    - 
        author: Julien Carsique
        date: '2013-08-03 00:38'
        message: ''
        version: '7'
    - 
        author: Florent Guillaume
        date: '2013-08-02 18:35'
        message: ''
        version: '6'
    - 
        author: Julien Carsique
        date: '2013-03-06 17:39'
        message: ''
        version: '5'
    - 
        author: Florent Guillaume
        date: '2013-02-17 22:39'
        message: ''
        version: '4'
    - 
        author: Wojciech Sulejman
        date: '2012-04-27 15:20'
        message: Migrated to Confluence 4.0
        version: '3'
    - 
        author: Wojciech Sulejman
        date: '2012-04-27 15:20'
        message: ''
        version: '2'
    - 
        author: Florent Guillaume
        date: '2012-04-27 14:26'
        message: ''
        version: '1'

---
There are many things to say about exception. This page is about what you should **not** catch, or what to do if you really must.

## Never catch `Throwable`

There are several reasons why you should never catch `Throwable`:

*   `Throwable` includes `Error`, which must never be caught (see below).

*   up to Java 6, if you catch `Throwable` and rethrow it you have to declare your method signature as `throws Throwable` which is a pain.

*   catching `Throwable` really means "I don't know what I catch" which is never a good sign. If you don't know then don't catch. Catching and rethrowing `Exception` after logging is ok but you must not rewrap the exception in a `RuntimeException` (because it hides `InterruptedException`, see below).

## Never catch `Error`

`Error`&nbsp;covers system exceptions that you can't do anything about and should let bubble up (for instance&nbsp;`OutOfMemoryError`,&nbsp;`ThreadDeath`). Rethrowing them as a rewrapped exception hides them and doesn't help (and prevents catchers that really know how to deal with them from seeing them).

## Never catch `Exception`

Catching `Exception` is nearly as bad as catching `Throwable`. `Exception` covers `InterruptedException`, which should never be caught lightly. See below for specific cases where you can't avoid catching `Exception` and what to do in each case.

## Be very careful about `InterruptedException`

`InterruptedException` is a very important mechanism in multi-threaded applications to have cooperating stopping of threads. You must never catch `InterruptedException` (directly or implicitly through catching `Exception` or `Throwable`) without doing some interrupt-specific job or rethrow it not rewrapped. Please read [http://www.ibm.com/developerworks/java/library/j-jtp05236/index.html](http://www.ibm.com/developerworks/java/library/j-jtp05236/index.html) which explains things in detail.

If you catch `InterruptedException` and do nothing about the interruption, then it's not possible to have `Thread.interrupt()` do its work correctly, which means you'll never be able to do proper timeouts on your threads. Having timeouts on transactions or background work is important for Nuxeo.

If in your method M you call a method P that has `throws InterruptedException` in its signature, then that method P has the specific semantics "this method may take some time and be blocking but can still be interrupted", therefore your own method which calls it can also take some time and be blocking and should be willing to be interrupted, and therefore your method M should also have `throws InterruptedException` in its signature. Never **never** swallow `InterruptedException` silently.

So if you catch&nbsp;`InterruptedException` (explicitly or indirectly through `Exception`) you must:

*   restore the interrupted status, using&nbsp;`Thread.currentThread().interrupt()`, so that callers may know that the thread should abort,
*   abort work by rethrowing something that cannot be confused with a legitimate exception and swallowed silently, `RuntimeException` is recommended here.

## Specific cases where you must deal with `Exception`

### Calling something declared as `throws Exception`

In the rare case where you have to call a library method that's badly written and declares that it `throws Exception` then you should find out what the actual exception is that you're ready to deal with, let's say&nbsp;`IllegalArgumentException`, and let the others go by rewrapping them in `RuntimeException` if you don't have a more specific one declared.

You must still be careful about `InterruptedException`, and never catch `Throwable` or&nbsp;`Error`.

Do something like:

```
try {
    stupidMethodDeclaredWithThrowsException();
} catch (IllegalArgumentException e) {
    // legitimate error treatment
    ...
} catch (InterruptedException e) {
    // restore the interrupted status
    Thread.currentThread().interrupt();
    // abort
    throw new RuntimeException("interrupted", e);
} catch (RuntimeException e) {
    // log.error(e); // not strictly needed, caller can deal with it
    throw e; // avoid wrapping a RuntimeException in another RuntimeException
} catch (Exception e) {
    // log.error(e); // not strictly needed, caller can deal with it
    throw new RuntimeException(e);
}

```

After catching&nbsp;`InterruptedException` it's important to rethrow something that may not be confused with a legitimate exception, and to call&nbsp;`Thread.currentThread().interrupt()` so that callers may be informed that an interrupt is in progress and that the thread should abort.

### Methods that want to keep running after an exception

Some methods want to call a list of `Runnable` or `Callable`&nbsp;or other work abstractions, but not fail immediately as soon as one of them returns an exception (for instance it may want to log the failing ones but still keep going). This is legitimate but again care must be taken to not swallow `InterruptedException` and to abort fast if there was an interruption at a lower level in the code.

```java
for (Callable<?> callable : callables) {
    try {
        callable.call();
    } catch (InterruptedException e) {
        // restore the interrupted status
        Thread.currentThread().interrupt();
        // abort
        throw new RuntimeException("interrupted", e);
    } catch (Exception e) {
        if (Thread.currentThread().isInterrupted()) {
            // abort
            throw e; // or new RuntimeException(e) if you must
        }
        log.error("Exception during " + callable, e);
        // continue the loop
    }
}
```

So after every call in the loop, the interrupted status must be checked (with `Thread.currentThread().isInterrupted()` and not&nbsp;`Thread.currentThread().interrupted()`, because the latter resets the status which we don't want), and if the thread was interrupted then all work must be aborted.

### Rollback on exception

If you do transactional work, often you'll want to rollback when there's been an error.

But you shouldn't try to catch `Exception` (or even worse `Throwable`) just so you can rollback the transaction if there's been an error. The proper way to do it is by detecting the error without catching anything, using a flag, for instance:

```
boolean transactionStarted = TransactionHelper.startTransaction();
boolean ok = false;
try {
    doSomething();
    ok = true;
} finally {
    if (transactionStarted) {
        if (!ok) {
            TransactionHelper.setTransactionRollbackOnly();
        }
        TransactionHelper.commitOrRollbackTransaction();
    }
}

```

If you really want to log why the rollback happened then you have to know the exception so you have to catch it, so it becomes more complex and you should deal with the `Exception`&nbsp;and `InterruptedException` things already mentioned.

As a final note, there are still many places in Nuxeo written before we know about these good patterns, so don't be surprised to see counterexamples in Nuxeo code... In particular we behave badly about `InterruptedException` in many places. They should be fixed :smile: