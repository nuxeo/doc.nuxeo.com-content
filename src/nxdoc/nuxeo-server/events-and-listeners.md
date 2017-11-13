---
title: Events and Listeners
review:
    comment: ''
    date: '2016-12-06'
    status: ok
labels:
    - lts2016-ok
    - event
    - listener
    - core-component
    - excerpt
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '31033314'
    ajs-parent-page-title: Nuxeo Server
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Events+and+Listeners
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Events+and+Listeners'
    page_id: '950283'
    shortlink: C4AO
    shortlink_source: 'https://doc.nuxeo.com/x/C4AO'
    source_link: /display/NXDOC/Events+and+Listeners
tree_item_index: 1500
history:
    - 
        author: Arnaud Kervern
        date: '2016-08-16 09:47'
        message: ''
        version: '29'
    - 
        author: Arnaud Kervern
        date: '2016-08-16 09:36'
        message: ''
        version: '28'
    - 
        author: Solen Guitter
        date: '2016-02-05 13:44'
        message: Update related pages
        version: '27'
    - 
        author: Alain Escaffre
        date: '2016-02-02 15:42'
        message: ''
        version: '26'
    - 
        author: Ronan Daniellou
        date: '2015-11-02 14:30'
        message: Workmanager allow + s
        version: '25'
    - 
        author: Ronan Daniellou
        date: '2015-11-02 14:29'
        message: 'tried -> tied'
        version: '24'
    - 
        author: Ronan Daniellou
        date: '2015-11-02 14:27'
        message: 'code need -> needs'
        version: '23'
    - 
        author: Ronan Daniellou
        date: '2015-11-02 14:26'
        message: plural
        version: '22'
    - 
        author: Solen Guitter
        date: '2014-09-19 12:17'
        message: Merging Event Bus page with Events and Listeners page
        version: '21'
    - 
        author: Thibaud Arguillere
        date: '2014-02-17 04:52'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2013-09-09 11:42'
        message: Moved Common Events section to new dedicated page
        version: '19'
    - 
        author: Solen Guitter
        date: '2013-09-04 16:49'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2013-09-04 16:48'
        message: Removed related topics from TOC
        version: '17'
    - 
        author: Solen Guitter
        date: '2013-05-22 11:37'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2013-05-16 15:10'
        message: Added related pages
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-04-08 18:20'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-04-08 18:00'
        message: ''
        version: '13'
    - 
        author: Thierry Delprat
        date: '2013-04-04 11:58'
        message: ''
        version: '12'
    - 
        author: Florent Guillaume
        date: '2011-04-29 12:53'
        message: Migrated to Confluence 4.0
        version: '11'
    - 
        author: Florent Guillaume
        date: '2011-04-29 12:53'
        message: ''
        version: '10'
    - 
        author: Stéphane Lacoin
        date: '2011-04-28 12:37'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2011-03-04 09:52'
        message: reference lifecycle_transition_event
        version: '8'
    - 
        author: Solen Guitter
        date: '2011-03-04 09:51'
        message: reference lifecycle_transition_event
        version: '7'
    - 
        author: Alain Escaffre
        date: '2011-02-21 11:02'
        message: reference lifecycle_transition_event
        version: '6'
    - 
        author: Florent Guillaume
        date: '2010-12-24 15:46'
        message: ''
        version: '5'
    - 
        author: Florent Guillaume
        date: '2010-08-02 14:30'
        message: ''
        version: '4'
    - 
        author: Florent Guillaume
        date: '2010-08-02 13:57'
        message: ''
        version: '3'
    - 
        author: Florent Guillaume
        date: '2010-08-02 13:24'
        message: ''
        version: '2'
    - 
        author: Admin name placeholder
        date: '2010-03-01 01:25'
        message: ''
        version: '1'

---
{{! excerpt}}

When you need to integrate some features of an external application into the Nuxeo Platform, or want the Platform to push data into an external application, using the Nuxeo event system is usually a good solution.

{{! /excerpt}}

The system allows to contribute event listeners (Java classes) or event handlers ([defined in Studio]({{page space='Studio' page='Event Handlers'}})) that subscribe to Platform events such as user login/logout, document creation, document update, document move,&nbsp; workflow started, etc. Those Java classes or automation chains are then executed either synchronously in the transaction, or synchronously out of the transaction, or asynchronously.

The event bus system is a nice way to implement some triggers in the document repository, and to let the repository notify other elements of your IT system of the changes that happen in the repository.

![]({{file name='EventBus.png'}} ?w=500,border=true)

## Concepts

A core event has a source which is usually the document model currently being manipulated. It can also store the event identifier, that gives information about the kind of event that is happening, as well as the principal connected when performing the operation, an attached comment, the event category, etc.

Events sent to the event service have to follow the `org.nuxeo.ecm.core.event.Event` interface.

A core event listener has a name, an order, and may have a set of event identifiers it is supposed to react to. Its definition also contains the operations it has to execute when receiving an interesting event.

Event listeners have to follow the `org.nuxeo.ecm.core.event.EventListener` interface.

Several event listeners exist by default in the nuxeo platform, for instance:

*   `DublinCoreListener`: it listens to document creation/modification events and sets some Dublin Core metadata accordingly (date of creation, date of last modification, document contributors...)

*   `DocUIDGeneratorListener`: it listens to document creation events and adds an identifier to the document if an UID pattern has been defined for this document type.

## Registering an Event Listener

{{#> callout type='tip' }}

Check [Nuxeo CLI]({{page page='nuxeo-cli'}}) to bootstrap your Event Listener.

{{/callout}}

Event listeners can be registered using extension points. Here are example event listeners registrations from the Nuxeo Platform:

```
  <extension target="org.nuxeo.ecm.core.event.EventServiceComponent" point="listener">
    <listener name="dclistener" async="false" postCommit="false" priority="120"
        class="org.nuxeo.ecm.platform.dublincore.listener.DublinCoreListener">
      <event>documentCreated</event>
      <event>beforeDocumentModification</event>
      <event>documentPublished</event>
      <event>lifecycle_transition_event</event>
      <event>documentCreatedByCopy</event>
    </listener>
  </extension>
```

```
  <extension target="org.nuxeo.ecm.core.event.EventServiceComponent" point="listener">
    <listener name="annotationsVersionEventListener" async="true" postCommit="true"
        class="org.nuxeo.ecm.platform.annotations.repository.service.VersionEventListener">
      <event>documentCheckedIn</event>
      <event>documentRemoved</event>
      <event>versionRemoved</event>
      <event>documentRestored</event>
    </listener>
  </extension>
```

When defining an event listener, you should specify:

*   a name, useful to identify the listener and let other components disable/override it,
*   whether the listener is synchronous or asynchronous (default is synchronous),
*   whether the listener runs post-commit or not (default is false),
*   an optional priority among similar listeners,
*   the implementation class, that must implement `org.nuxeo.ecm.core.event.EventListener` for synchronous inline listeners or `org.nuxeo.ecm.core.event.PostCommitEventListener` for others (post-commit or asynchronous listeners),
*   an optional list of event ids for which this listener must be called (it is strongly recommended to explicitly list the relevant events, for performance reasons).

There are several kinds of listeners:

*   **synchronous inline listeners** are run immediately in the same transaction and same thread, this is useful for listeners that must modify the state of the application like the _beforeDocumentModification_ event.
*   **synchronous post-commit listeners** are run after the transaction has committed, in a new transaction but in the same thread, this is useful for logging.
*   **asynchronous listeners** are run after the transaction has committed, in a new transaction and a separate thread, this is useful for any long-running operations whose result doesn't have to be seen immediately in the user interface.

## Processing an Event Using an Event Listener

Here is a simple event listener:

```
import org.nuxeo.ecm.core.event.Event;
import org.nuxeo.ecm.core.event.EventContext;
import org.nuxeo.ecm.core.event.EventListener;
import org.nuxeo.ecm.core.event.impl.DocumentEventContext;

public class BookEventListener implements EventListener {

    public void handleEvent(Event event) {
        EventContext ctx = event.getContext();
        if (!(ctx instanceof DocumentEventContext)) {
            return;
        }
        DocumentModel doc = ((DocumentEventContext) ctx).getSourceDocument();
        if (doc == null) {
            return;
        }
        String type = doc.getType();
        if ("Book".equals(type)) {
            process(doc);
        }
    }

    public void process(DocumentModel doc) {
        ...
    }
}
```

Note that if a listener expects to modify the document upon save or creation, it must use events _emptyDocumentModelCreated_ or _beforeDocumentModification_, and **not** save the document, as these events are themselves fired during the document save process.

If a listener expects to observe a document after it has been saved to do things on other documents, it can use events _documentCreated_ or _documentModified_.

## Sending an Event

It is not as common as having new listeners, but sometimes it's useful to send new events. To do this you have to create an event bundle containing the event, then send it to the event producer service:

```
EventProducer eventProducer eventProducer = Framework.getService(EventProducer.class);
DocumentEventContext ctx = new DocumentEventContext(session, session.getPrincipal(), doc);
ctx.setProperty("myprop", "something");
Event event = ctx.newEvent("myeventid");
eventProducer.fireEvent(event);
```

You can also have events be sent automatically at regular intervals using the [Scheduling Periodic Events]({{page page='scheduling-periodic-events'}}), see that section for more information.

## Handling Errors

Sometimes, you may want to handle errors that occurred in an inline listener in the UI layer. This is a little bit tricky but do-able.

In the listener, you should register the needed information in a place that is shared with the UI layer.
You can use the document context map for this.

```
...
   DocumentEventContext ctx = (DocumentEventContext) event.getContext();
   DocumentModel doc = ctx.getSourceDocument();
   ScopedMap data = doc.getContextData();
   data.putScopedValue(MY_ERROR_KEY, "some info");
...

```

Another thing is to ensure that the current transaction will be rolled back. Marking the event as rollback
makes the event service throw a runtime exception when returning from the listener.

```
...
  TransactionHelper.setTransactionRollbackOnly();
  event.markRollBack();
  throw new NuxeoException("rolling back");
...

```

Then the error handling in the UI layer can be managed like this

```
...
  DocumentModel doc = ...;
  try {
      // doc related operations
  } catch (NuxeoException e) {
      Serializable info = doc.getContextData(MY_ERROR_KEY);
      if (info == null) {
          throw e;
      }
      // handle code
  }
...

```

## Asynchronous vs Synchronous Listeners

Asynchronous listeners will run as Work instances in a separated WorkManager thread. This means the main transaction, the one that raised the event, won't be blocked by the listener processing.

Therefore if the processing done by the listener may be long, this is a good candidate for asynchronous processing.

However, there are some impacts in moving a synchronous listener to an asynchronous one:

*   the listener signature needs to change
    *   rather than receiving a single event, it will receive an EventBundle that contains all events inside the transaction
*   because the listener runs in a separated transaction it can not rollback the source transaction (it is too late anyway)
*   the listener code needs to be aware that it may have to deal with new cases
    *   typically, the listener may receive an event about a document that has since then been deleted

## Forwarding Events to an External Event Bus

The beginning of an integration with [RabbitMQ](https://www.rabbitmq.com/) is available [in the nuxeo-sandbox GitHub repository](https://github.com/nuxeo-sandbox/nuxeo-rabbitmq). While it would require more implementation work for being used in a production environment, it provides a good sample of how to integrate with an external event bus.

## Performances and Monitoring

Using listeners, especially synchronous ones, may impact the global performance. Typically, having synchronous listeners that do long processing will reduce the scalability of the system.

In that kind of situation, using an asynchronous listener is the recommended approach:

*   The interactive transaction is no longer tied to listener execution.
*   The `WorkManager` allows to configure how many asynchronous listeners can run in concurrency.

To monitor execution of the listeners, you can use the Admin Center / Monitoring / Nuxeo Event Bus to

*   activate the tracking of listeners execution,
*   see how much time is spent in each listener.

![]({{file name='AdminCenter-Nuxeo-Event-Bus.png'}} ?w=600,border=true)

For diagnostic and testing purpose, you can use the [EventAdminService](http://explorer.nuxeo.org/nuxeo/site/distribution/current/viewService/org.nuxeo.ecm.core.event.EventServiceAdmin) to activate / deactivate listeners one by one.

The `EventServiceAdmin` is accessible:

*   via Java API
*   [via JMX]({{page space='admindoc' page='supervision'}})

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-tos'}}

- [How to Set a Default Date on a Field at Document Creation]({{page page='how-to-set-a-default-date-on-a-field-at-document-creation'}})
- [Event and Listener How To Index]({{page page='event-and-listener-how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Other Related Documentation'}}

- [Common Events]({{page page='common-events'}})
- [Scheduling Periodic Events]({{page page='scheduling-periodic-events'}})

{{/panel}}</div></div>
