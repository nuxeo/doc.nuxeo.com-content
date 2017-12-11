---
title: Thumbnail
review:
    comment: ''
    date: '2018-01-16'
    status: ok
labels:
    - lts2016-ok
    - link-update
    - thumbnail
    - troger
    - community-links
    - thumbnail-service-component
    - lts2017-ok
toc: true
confluence:
    ajs-parent-page-id: '16089319'
    ajs-parent-page-title: Additional Services
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Thumbnail
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Thumbnail'
    page_id: '14255024'
    shortlink: sIPZ
    shortlink_source: 'https://doc.nuxeo.com/x/sIPZ'
    source_link: /display/NXDOC/Thumbnail
tree_item_index: 700
history:
    -
        author: Manon Lumeau
        date: '2016-08-02 15:51'
        message: ''
        version: '35'
    -
        author: Manon Lumeau
        date: '2016-06-09 14:29'
        message: ''
        version: '34'
    -
        author: Manon Lumeau
        date: '2016-04-20 14:19'
        message: 'javadoc links updated '
        version: '33'
    -
        author: Manon Lumeau
        date: '2015-10-15 14:12'
        message: ''
        version: '32'
    -
        author: Thomas Roger
        date: '2015-10-13 13:03'
        message: ''
        version: '31'
    -
        author: Solen Guitter
        date: '2014-12-05 17:58'
        message: Fix links to point to latest version
        version: '30'
    -
        author: Alain Escaffre
        date: '2014-05-02 16:04'
        message: ''
        version: '29'
    -
        author: Vladimir Pasquier
        date: '2013-11-14 17:16'
        message: ''
        version: '28'
    -
        author: Solen Guitter
        date: '2013-11-13 12:40'
        message: Updated javadoc links to 5.8 release
        version: '27'
    -
        author: Solen Guitter
        date: '2013-09-05 15:51'
        message: ''
        version: '26'
    -
        author: Solen Guitter
        date: '2013-09-04 16:43'
        message: ''
        version: '25'
    -
        author: Vladimir Pasquier
        date: '2013-07-22 14:21'
        message: ''
        version: '24'
    -
        author: Solen Guitter
        date: '2013-06-28 14:10'
        message: Fixed format
        version: '23'
    -
        author: Vladimir Pasquier
        date: '2013-06-20 15:55'
        message: ''
        version: '22'
    -
        author: Vladimir Pasquier
        date: '2013-06-20 11:08'
        message: ''
        version: '21'
    -
        author: Vladimir Pasquier
        date: '2013-06-20 11:04'
        message: ''
        version: '20'
    -
        author: Vladimir Pasquier
        date: '2013-06-20 10:58'
        message: ''
        version: '19'
    -
        author: Vladimir Pasquier
        date: '2013-06-20 10:58'
        message: ''
        version: '18'
    -
        author: Vladimir Pasquier
        date: '2013-06-20 10:34'
        message: ''
        version: '17'
    -
        author: Vladimir Pasquier
        date: '2013-06-19 15:56'
        message: ''
        version: '16'
    -
        author: Vladimir Pasquier
        date: '2013-06-18 18:37'
        message: ''
        version: '15'
    -
        author: Vladimir Pasquier
        date: '2013-06-18 18:25'
        message: ''
        version: '14'
    -
        author: Vladimir Pasquier
        date: '2013-06-18 17:56'
        message: ''
        version: '13'
    -
        author: Vladimir Pasquier
        date: '2013-06-18 17:53'
        message: ''
        version: '12'
    -
        author: Vladimir Pasquier
        date: '2013-06-18 15:50'
        message: ''
        version: '11'
    -
        author: Vladimir Pasquier
        date: '2013-06-18 15:48'
        message: ''
        version: '10'
    -
        author: Vladimir Pasquier
        date: '2013-06-18 15:48'
        message: ''
        version: '9'
    -
        author: Vladimir Pasquier
        date: '2013-06-18 15:48'
        message: ''
        version: '8'
    -
        author: Vladimir Pasquier
        date: '2013-06-18 15:46'
        message: ''
        version: '7'
    -
        author: Vladimir Pasquier
        date: '2013-06-18 15:46'
        message: ''
        version: '6'
    -
        author: Vladimir Pasquier
        date: '2013-06-18 15:23'
        message: ''
        version: '5'
    -
        author: Vladimir Pasquier
        date: '2013-06-18 15:22'
        message: ''
        version: '4'
    -
        author: Vladimir Pasquier
        date: '2013-06-18 12:38'
        message: ''
        version: '3'
    -
        author: Vladimir Pasquier
        date: '2013-06-18 11:09'
        message: ''
        version: '2'
    -
        author: Vladimir Pasquier
        date: '2013-06-18 10:24'
        message: ''
        version: '1'

---
{{! excerpt}}

Documents can have a thumbnail. A thumbnail is a reduced-size version of a picture used to help in recognizing and organizing documents. It will stand for any kind of document according to the type and/or facet.

{{! /excerpt}}

Custom thumbnail factories can be contributed to the thumbnail service, using its extension point. Thumbnails are then available through this service to define how they will be computed and fetched.

## Thumbnail Service Architecture

Here are the different components of the thumbnail feature:

* **Thumbnail service**

 The service that handles thumbnail factories contributions.
 * Interface: [`ThumbnailService`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/api/thumbnail/ThumbnailService.html)
 * Implementation: [`ThumbnailServiceImpl`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/api/thumbnail/ThumbnailServiceImpl.html)
 * Component: [`org.nuxeo.ecm.core.api.thumbnail.ThumbnailService`](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewComponent/org.nuxeo.ecm.core.api.thumbnail.ThumbnailService)
 * Extension point: [`thumbnailFactory`](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.core.api.thumbnail.ThumbnailService--thumbnailFactory)

* **Default Thumbnail factories**

 * [`ThumbnailDocumentFactory`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/thumbnail/factories/ThumbnailDocumentFactory.html): Default thumbnail factory for all non-folderish documents. Returns the main blob converted in thumbnail or get the document's big icon as a  thumbnail.
 * [`ThumbnailPictureFactory`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/picture/thumbnail/ThumbnailPictureFactory.html): Picture thumbnail factory from [DAM]({{page page='digital-asset-management-dam'}}).
 * [`ThumbnailVideoFactory`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/video/adapter/ThumbnailVideoFactory.html): Video thumbnail factory from [DAM]({{page page='digital-asset-management-dam'}}).
 * [`ThumbnailAudioFactory`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/audio/extension/ThumbnailAudioFactory.html): Audio thumbnail factory from [DAM]({{page page='digital-asset-management-dam'}}).

* **Thumbnail listeners**

 * [`UpdateThumbnailListener`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/thumbnail/listener/UpdateThumbnailListener.html): Thumbnail listener handling creation and update of document event to store document thumbnail preview (only for the File document type).
 * [`CheckBlobUpdateListener`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/thumbnail/listener/CheckBlobUpdateListener.html): Thumbnail listener handling document blob update and checking changes. Fires a [`scheduleThumbnailUpdate`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/thumbnail/ThumbnailConstants.EventNames.html#scheduleThumbnailUpdate) event if it's the case that will trigger [`UpdateThumbnailListener`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/thumbnail/listener/UpdateThumbnailListener.html).

{{#> callout type='info' heading='Thumbnail factory on GitHub'}}

Here are Nuxeo thumbnail factory implementations on GitHub:

* [`ThumbnailDocumentFactory`](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/nuxeo-thumbnail/src/main/java/org/nuxeo/ecm/platform/thumbnail/factories/ThumbnailDocumentFactory.java)
* [`ThumbnailVideoFactory`](https://github.com/nuxeo/nuxeo-platform-video/blob/master/nuxeo-platform-video-core/src/main/java/org/nuxeo/ecm/platform/video/adapter/ThumbnailVideoFactory.java)
* [`ThumbnailAudioFactory`](https://github.com/nuxeo/nuxeo-platform-audio/blob/master/nuxeo-platform-audio-core/src/main/java/org/nuxeo/ecm/platform/audio/extension/ThumbnailAudioFactory.java)
* [`ThumbnailPictureFactory`](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-features/nuxeo-platform-imaging/nuxeo-platform-imaging-core/src/main/java/org/nuxeo/ecm/platform/picture/thumbnail/ThumbnailPictureFactory.java)

{{/callout}}

## Registering a New Thumbnail Factory

A thumbnail factory can be registered using the following example extension:

```xml
<extension target="org.nuxeo.ecm.core.api.thumbnail.ThumbnailService"
  point="thumbnailFactory">

  <thumbnailFactory name="thumbnailAudioFactory" docType="Audio"
    factoryClass="org.nuxeo.ecm.platform.audio.extension.ThumbnailAudioFactory" />
</extension>

```

The above thumbnail factories will be used to compute and fetch specific thumbnails for folderish documents on one hand, and audio documents on the other hand. Here are their properties:

* `docType`: string identifying the related document type. In the example, the type is "Audio".
* `facet`: string identifying the related document facet.
* `factoryClass`: string representing the class name of the factory to use.

Each factory should implement the interface [`ThumbnailFactory`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/api/thumbnail/class-use/ThumbnailFactory.html) . This interface contract contains two methods to implement:

* `Blob getThumbnail(DocumentModel doc, CoreSession session)`: gets the document thumbnail (related to the doc type/facet).
* `Blob computeThumbnail(DocumentModel doc, CoreSession session)`: computes the thumbnail (related to the document type/facet).

The listener [`UpdateThumbnailListener`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/thumbnail/listener/UpdateThumbnailListener.html) is calling `YourFactory#computeThumbnail` that allows developers to compute the document blob when creating a document and after updating it (if the blob related to this document has been changed).

 When computing your thumbnail, [`UpdateThumbnailListener`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/thumbnail/listener/UpdateThumbnailListener.html) stores it into a specific metadata  `thumb:thumbnail` provided by the following schema:

```xml
<xs:schema xmlns:nxs="http://www.nuxeo.org/ecm/schemas/thumbnail"
  xmlns:xs="http://www.w3.org/2001/XMLSchema" targetNamespace="http://www.nuxeo.org/ecm/schemas/thumbnail">

  <xs:include schemaLocation="core-types.xsd" />

  <xs:element name="thumbnail" type="nxs:content" />

</xs:schema>

```

This process can be useful to avoid lazy loading when displaying documents list.

## Picture Thumbnail Example

Here is an example with the picture thumbnail factory, which is fetching a image existing into the picture schema.

```java
import org.nuxeo.common.utils.FileUtils;
import org.nuxeo.ecm.core.api.Blob;
import org.nuxeo.ecm.core.api.CoreSession;
import org.nuxeo.ecm.core.api.DocumentModel;
import org.nuxeo.ecm.core.api.impl.blob.FileBlob;
import org.nuxeo.ecm.platform.picture.api.PictureView;
import org.nuxeo.ecm.platform.picture.api.adapters.MultiviewPicture;
import org.nuxeo.ecm.platform.types.adapter.TypeInfo;

public class ThumbnailPictureFactory implements ThumbnailFactory {
    @Override
    public Blob getThumbnail(DocumentModel doc, CoreSession session)
            throws ClientException {
        if (!doc.hasFacet("Picture")) {
            throw new ClientException("Document is not a picture");
        }
        // Choose the nuxeo default thumbnail of the picture views if exists
        MultiviewPicture mViewPicture = doc.getAdapter(MultiviewPicture.class);
        PictureView thumbnailView = mViewPicture.getView("Small");
        if (thumbnailView == null || thumbnailView.getBlob() == null) {
            // try thumbnail view
            thumbnailView = mViewPicture.getView("Thumbnail");
            if (thumbnailView == null || thumbnailView.getBlob() == null) {
                TypeInfo docType = doc.getAdapter(TypeInfo.class);
                return new FileBlob(
                        FileUtils.getResourceFileFromContext("nuxeo.war"
                                + File.separator + docType.getBigIcon()));
            }
        }
        return thumbnailView.getBlob();
    }
    @Override
    public Blob computeThumbnail(DocumentModel doc, CoreSession session) {
        return null;
    }
}
```

And then the usage of `ThumbnailAdapter`:

```java
import org.nuxeo.common.utils.FileUtils;
import org.nuxeo.ecm.core.api.Blob;
import org.nuxeo.ecm.core.api.CoreSession;
import org.nuxeo.ecm.core.api.DocumentModel;
import org.nuxeo.ecm.core.api.blobholder.BlobHolder;
import org.nuxeo.ecm.core.api.impl.DocumentModelImpl;
import org.nuxeo.ecm.core.api.impl.blob.FileBlob;
import org.nuxeo.ecm.core.api.thumbnail.ThumbnailAdapter;
import org.nuxeo.ecm.core.api.CoreSession;
import com.google.inject.Inject;

@Inject
CoreSession session;

// Create a picture
DocumentModel root = session.getRootDocument();
DocumentModel picture = new DocumentModelImpl(root.getPathAsString(),"pic", "Picture");
picture.setPropertyValue("picture:views", (Serializable) createViews());
picture = session.createDocument(picture);
session.save();

// Using BlobHolder adapter
BlobHolder bh = picture.getAdapter(BlobHolder.class);
Blob blob = new FileBlob(getFileFromPath("test-data/big_nuxeo_logo.gif"), "image/gif",null, "big_nuxeo_logo.gif", null);
bh.setBlob(blob);
session.saveDocument(picture);
session.save();

// Using ThumbnailAdapter
ThumbnailAdapter pictureThumbnail = picture.getAdapter(ThumbnailAdapter.class);
Blob thumbnail = pictureThumbnail.getThumbnail(session);
String fileName = thumbnail.getFilename();
```

Default Nuxeo thumbnail factories fall back on **Nuxeo Document BigIcon** if no thumbnail has been found.

Here is a way to find it properly:

```java
Blob getDefaultThumbnail(DocumentModel doc) {
    if (doc == null) {
        return null;
    }
    TypeInfo docType = doc.getAdapter(TypeInfo.class);
    String iconPath = docType.getBigIcon();
    if (iconPath == null) {
        iconPath = docType.getIcon();
    }
    if (iconPath == null) {
        return null;
    }

    try {
        File iconFile = FileUtils.getResourceFileFromContext("nuxeo.war" + File.separator + iconPath);
        if (iconFile.exists()) {
            MimetypeRegistry mimetypeRegistry = Framework.getService(MimetypeRegistry.class);
            String mimeType = mimetypeRegistry.getMimetypeFromFile(iconFile);
            if (mimeType == null) {
                mimeType = mimetypeRegistry.getMimetypeFromFilename(iconPath);
            }
            return Blobs.createBlob(iconFile, mimeType);
        }
    } catch (IOException e) {
        log.warn(String.format("Could not fetch the thumbnail blob from icon path '%s'", iconPath), e);
    }

    return null;
}
```

## Thumbnail Architecture

Here, we can see the `ThumbnailAdapter` to use and factories like the default one `ThumbnailDocumentFactory` and `ThumbnailPictureFactory`:

![]({{file name='thumbnail.png'}} ?w=650,border=true)
