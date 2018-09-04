---
title: 'Web UI Upload Providers'
review:
    comment: ''
    date: '2018-08-13'
    status: ok
toc: true
labels:
    - nuxeo-web-ui
    - nuxeo-ui-elements
    - upload provider
    - gbarata
tree_item_index: 300
---

Upload providers are objects that encapsulate custom upload logics. These can be contributed to Web UI to define how and where blobs will be uploaded to.

Blob upload through Web UI is controlled by the [UploaderBehavior](https://github.com/nuxeo/nuxeo-ui-elements/blob/2.3.2/widgets/nuxeo-uploader-behavior.html), which is part of the [Nuxeo UI Elements]({{page page='nuxeo-elements'}}) library, and must be extended by
elements that upload files to a Nuxeo instance. To achive this, a [default upload provider](https://github.com/nuxeo/nuxeo-ui-elements/blob/2.3.2/widgets/nuxeo-uploader-behavior.html#L23-L143) is provided, which relies on the [DefaultBatchHandler](http://explorer.nuxeo.com/nuxeo/site/distribution/Nuxeo%20Platform-10.2/viewComponent/org.nuxeo.ecm.automation.server.batch.handler.DefaultBatchHandler) server side. However, custom upload providers can be contributed to fit different batch handlers. This allows, for example, for blobs to be uploaded directly to an external service.

## Upload Provider API

A custom upload provider must be declared as a `Javascript` function, which will be used as a constructor to create new instance of the provider. The constructor must receive the following parameters:
- `connection`: an instance of `nuxeo-connection`
- `accept`: a string containing a comma separated list of mime types that are accepted by the provider
- `batchAppend`: a boolean specifying whether files to be uploaded should be appended to the current batch (if `true`) or a new one should always be created (if `false`).

The provider must also expose the following methods:

- `upload`: accepts an array of files and an `uploadCallback`, and is responsible for creating a batch on the server and uploading the files
- `cancelBatch`: cancels the current batch and cleans up after it
- `batchExecute`: executes an operation on the current batch
- `accepts`: determines where a given file can be uploaded by the provider or not
- `hasProgress`: indicates whether the provider is able to report upload progress or not

The `uploadCallback` should be called in the following events:
- `uploadStarted`: the upload has started
- `uploadProgress`: the upload progress has changed
- `uploadCompleted`: the upload is completed
- `uploadInterrupted`: the upload is interrupted
- `batchFinished`: batch handler was successfully notified that the upload is completed
- `batchFailed`: there was an error when notifying the the bach handler that the upload is completed

## Registration and Configuration

A custom upload provider must be registered with a unique name in order to be accessible in Web UI:

```javascript
Nuxeo.UploaderBehavior.registerProvider('my-provider', MyProvider);
```

However, this won't make any element extending the `UploaderBehavior` using it by default. If you want a specific element to use a custom provider, the `provider` attribute should be set to that provider name. For example, if we want to use a `nuxeo-file` with a custom upload provider (here named `my-provider`) instead of the default one, we could do it as follows:

```html
<nuxeo-file provider="my-provider" value="\{{value}}"></nuxeo-file>
```

On the other hand, we can also set it as the default provider to every element extending the `UploaderBehavior`:

```javascript
Nuxeo.UploaderBehavior.defaultProvider = 'my-provider';
```

{{#> callout type='tip' }}
Changing the value of the `provider` attribute on an element extending the `UploaderBehavior` will update that element provider instantly. This means that the same element can use several upload providers without reloading the page.
{{/callout}}

{{#> callout type='warning' }}
Changing the value of `Nuxeo.UploaderBehavior.defaultProvider` will change the provider used by **every** element extending the `UploaderBehavior` **that do not have the `provider` attribute set**. This means that the `provider` attribute has precedence over the default provider.
{{/callout}}

## Examples

For implementation examples of Web UI upload providers, check the [default provider](https://github.com/nuxeo/nuxeo-ui-elements/blob/2.3.2/widgets/nuxeo-uploader-behavior.html#L23-L143) and the [S3 direct upload provider](https://github.com/nuxeo/nuxeo-core-binarymanager-cloud/blob/release-10.2/nuxeo-core-binarymanager-s3-web-ui/src/main/resources/web/nuxeo.war/ui/nuxeo-s3-direct-upload/nuxeo-s3-direct-upload.html).

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Related Documentation'}}

- [Amazon S3 Direct Upload for Web UI]({{page page='amazon-s3-direct-upload'}})

{{/panel}}
</div>
</div>
