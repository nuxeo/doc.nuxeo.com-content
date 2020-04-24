---
title: 'HOWTO: Bubble Errors from the Core Layer in the JSF UI'
review:
    comment: ''
    date: '2015-12-01'
    status: ok
details:
    howto:
        excerpt: 'Learn how to bubble errors from the core layer in the&nbsp; UI.'
        level: Advanced
        tool: Code editor
        topics: JSF UI
labels:
    - content-review-lts2016
    - automation
    - howto
    - seam-jsf-component
    - atchertchian
    - content-review-lts2017
confluence:
    ajs-parent-page-id: '20517820'
    ajs-parent-page-title: JSF UI How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Bubble+Errors+from+the+Core+Layer+in+the+JSF+UI
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Bubble+Errors+from+the+Core+Layer+in+the+JSF+UI'
    page_id: '19235489'
    shortlink: oYIlAQ
    shortlink_source: 'https://doc.nuxeo.com/x/oYIlAQ'
    source_link: /display/NXDOC/How+to+Bubble+Errors+from+the+Core+Layer+in+the+JSF+UI
tree_item_index: 100
version_override:
    '6.0': 60/nxdoc/how-to-bubble-errors-from-the-core-layer-in-the-web-ui
history:
    -
        author: Solen Guitter
        date: '2016-09-05 09:41'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2016-08-31 13:26'
        message: ''
        version: '15'
    -
        author: Manon Lumeau
        date: '2015-01-13 10:03'
        message: ''
        version: '14'
    -
        author: Alain Escaffre
        date: '2014-11-24 16:55'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-08-28 10:39'
        message: ''
        version: '12'
    -
        author: Florent Guillaume
        date: '2014-08-27 17:48'
        message: ''
        version: '11'
    -
        author: Vladimir Pasquier
        date: '2014-08-27 17:44'
        message: ''
        version: '10'
    -
        author: Solen Guitter
        date: '2014-04-29 13:48'
        message: ''
        version: '9'
    -
        author: Manon Lumeau
        date: '2014-04-29 10:01'
        message: ''
        version: '8'
    -
        author: Vladimir Pasquier
        date: '2014-04-28 16:18'
        message: ''
        version: '7'
    -
        author: Vladimir Pasquier
        date: '2014-04-28 16:17'
        message: ''
        version: '6'
    -
        author: Vladimir Pasquier
        date: '2014-04-28 15:47'
        message: ''
        version: '5'
    -
        author: Vladimir Pasquier
        date: '2014-04-28 15:44'
        message: ''
        version: '4'
    -
        author: Vladimir Pasquier
        date: '2014-04-28 15:35'
        message: ''
        version: '3'
    -
        author: Vladimir Pasquier
        date: '2014-04-28 15:29'
        message: ''
        version: '2'
    -
        author: Alain Escaffre
        date: '2014-04-28 15:23'
        message: ''
        version: '1'
---

The Nuxeo Platform proposes an easy model for implementing custom logic through the [Event Listener system]({{page page='events-and-messages'}}). Sometimes, you want to "bubble" in the UI up to the user errors that happens in that lower layer. This page explains how this can be done by using the RecoverableClientException mechanism, throughout an example that executes a chain in the listener which can easily be configured using Studio. In the end, this provides a nice pattern for implementing integrity checks based on automation.

{{#> callout type='note' }}
Make sure that none of the listeners running before your custom listener modify the current document, otherwise your pending changes will be lost when coming back on the form (a rollback would have been done).
{{/callout}}

#### Example

1.  Create a custom listener (e.g. listening to About To Create event). This listener is going to trigger your Automation chain.

    ```java
    package org.nuxeo.sample;
    import org.apache.commons.logging.Log;
    import org.apache.commons.logging.LogFactory;
    import org.nuxeo.ecm.automation.AutomationService;
    import org.nuxeo.ecm.automation.OperationContext;
    import org.nuxeo.ecm.core.api.NuxeoException;
    import org.nuxeo.ecm.core.api.DocumentModel;
    import org.nuxeo.ecm.core.api.RecoverableClientException;
    import org.nuxeo.ecm.core.api.event.DocumentEventTypes;
    import org.nuxeo.ecm.core.event.DeletedDocumentModel;
    import org.nuxeo.ecm.core.event.Event;
    import org.nuxeo.ecm.core.event.EventListener;
    import org.nuxeo.ecm.core.event.impl.DocumentEventContext;
    import org.nuxeo.ecm.platform.web.common.exceptionhandling.ExceptionHelper;
    import org.nuxeo.runtime.api.Framework;

    public class ListenerIntegrityCheck implements EventListener {

    	private static final Log log = LogFactory.getLog(ListenerTest.class);

      @Override
	public void handleEvent(Event event) {
    		String eventName = event.getName();
    		if (!DocumentEventTypes.ABOUT_TO_CREATE.equals(eventName)) {
    			return;
    		}
    		if (!(event.getContext() instanceof DocumentEventContext)) {
    			return;
    		}
    		DocumentEventContext ctx = (DocumentEventContext) event.getContext();
    		DocumentModel doc = ctx.getSourceDocument();
    		// Skip shallow document
    		if (doc instanceof DeletedDocumentModel) {
    			return;
    		}
    		if (doc.isProxy() || doc.isVersion()) {
    			return;
    		}
                AutomationService service = Framework.getService(AutomationService.class);
    		OperationContext automationCtx = new OperationContext();
    		automationCtx.setInput(doc);
    		try {
    			service.run(automationCtx, "testValidation");
    		} catch (Exception e) {
    			// The last validation operation throw an exception if there is at
    			// least one invalidation
    			Throwable unwrappedException = ExceptionHelper.unwrapException(e);
    			if (unwrappedException instanceof RecoverableClientException) {
    				event.markBubbleException();
    				event.markRollBack();
				throw new NuxeoException(unwrappedException);
    			} else {
    				log.error("Error");
    			}
    		}
    	}
    }
    ```

2.  Create your custom operation, which is going to be deployed in your Studio Automation chain.

    ```java
    package org.nuxeo.sample;
    import org.nuxeo.ecm.automation.OperationContext;
    import org.nuxeo.ecm.automation.core.Constants;
    import org.nuxeo.ecm.automation.core.annotations.Context;
    import org.nuxeo.ecm.automation.core.annotations.Operation;
    import org.nuxeo.ecm.automation.core.annotations.OperationMethod;
    import org.nuxeo.ecm.core.api.NuxeoException;
    import org.nuxeo.ecm.core.api.DocumentModel;
    @Operation(id = OperationValidation1.ID, category = Constants.CAT_DOCUMENT, label = "OperationValidation1", description = "")
    public class OperationValidation1 {
    	public static final String ID = "OperationValidation1";
    	@Context
    	OperationContext ctx;
    	@OperationMethod
	public DocumentModel run(DocumentModel input) {
    		if (!input.getTitle().equals("title")) {
    			String value = "- the document title is invalid - <br/>";
    // Collecting different invalidation message in one context variable
    			ctx.put("messageError", value);
    		}
    		return input;
    	}
    }

    ```

3.  Check one last validation rule and throw a CustomBubbleException in case of one validation at least has failed.

    ```java
    package org.nuxeo.sample;
    import org.nuxeo.ecm.automation.OperationContext;
    import org.nuxeo.ecm.automation.core.Constants;
    import org.nuxeo.ecm.automation.core.annotations.Context;
    import org.nuxeo.ecm.automation.core.annotations.Operation;
    import org.nuxeo.ecm.automation.core.annotations.OperationMethod;
    import org.nuxeo.ecm.core.api.NuxeoException;
    import org.nuxeo.ecm.core.api.DocumentModel;
    @Operation(id = OperationValidation2.ID, category = Constants.CAT_DOCUMENT, label = "OperationValidation2", description = "")
    public class OperationValidation2 {
    	public static final String ID = "OperationValidation2";
    	@Context
    	OperationContext ctx;
    	@OperationMethod
	public void run(DocumentModel input) {
    		if (input.getId() == null) {
    // Collecting different invalidation message in one context variable
    			Object messageError = ctx.get("messageError");
    			String error = "- the document ID is not compliant -";
    			ctx.put("messageError",
    					(messageError != null ? messageError.toString() : "")
    							+ error);
    		}
    // Retrieving all invalidation messages to throw in RecoverableException
    		Object message = ctx.get("messageError");
    		if (message != null) {
    			throw new CustomBubbleException("Process Invalidation",
    					"Invalidations:<br/>" + message.toString(), null);
    		}
    	}
    }
    ```

4.  Check also the custom exception.

    ```java
    package org.nuxeo.sample;
    import org.nuxeo.ecm.core.api.RecoverableClientException;
    public class CustomBubbleException extends RecoverableClientException {
    	private static final long serialVersionUID = 1L;
    	public CustomBubbleException(String message, String localizedMessage,
    			String[] params) {
    		super(message, localizedMessage, params);
    	}

    	public CustomBubbleException(String message, String localizedMessage,
    			String[] params, Throwable cause) {
    		super(message, localizedMessage, params, cause);
    	}
    }
    ```

5.  Finally, you can create in Studio your chain after exporting your custom operations.
    ![]({{file name='operation.png'}} ?w=650,border=true)

    Here is the result after trying to create a document: The end user sees error message displaying all collected invalidations:
    ![]({{file name='Screenshot 2014-04-28 15.42.55.png'}} ?w=300,h=127,border=true)

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related pages in current documentation'}}

*   [JSF UI How-To Index]({{page page='jsf-ui-how-to-index'}})
*   [Uploading Custom Operations in Nuxeo Studio]({{page space='idedoc' page='uploading-custom-operations-in-nuxeo-studio'}})
*   [Contributing an Operation]({{page page='contributing-an-operation'}})

{{/panel}}
</div>
<div class="column medium-6">


&nbsp;

</div>
</div>
