---
title: 'HOWTO: Import documents with NEV annotations'
description: 'Step by step instructions to import into Nuxeo documents including annotations in a supported format for Nuxeo Enhanced Viewer'
review:
    comment: ''
    date: '2021-02-05'
    status: ok
labels:
    - addon
    - tutorial
    - howto
toc: true
tree_item_index: 100
---

This tutorial provides guidelines on how to import documents with annotations in a way that allow to have those annotations available in ARender.

The main use cases is for migration from a legacy system to Nuxeo.

## General process

The recommendation is to use the Nuxeo REST API to create annotation object and add it to the document.

All the annotations displayed on ARender are stored on Nuxeo as Annotations objects (cf. https://doc.nuxeo.com/nxdoc/comments/).

The Nuxeo annotation object includes several datas as the origin of the annotation. The main part is the “entity” one which includes the annotation content (annotation type, text, position in the document, color,…) in the ARender format. 

You can find an example of ARender annotation expected format below in this page.

Below an example of the Nuxeo annotations for a document with 3 ARender annotations:
```
{
  "entity-type": "annotations",
  "entries": [
    {
      "entity-type": "annotation",
      "id": "b7285100-ab01-45c0-a7a1-1d519ed9a871",
      "parentId": "fc9a17a7-8560-4b4b-b477-feff43922e4f",
      "ancestorIds": [
        "fc9a17a7-8560-4b4b-b477-feff43922e4f"
      ],
      "author": "nco-admin",
      "text": "This a sticky note",
      "creationDate": "2020-12-21T09:00:39.955Z",
      "modificationDate": "2020-12-21T09:00:40.836Z",
      "entityId": "9a3d2762-fddf-4415-991d-0894b2ff2ebc",
      "origin": "ARender",
      "entity": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><ns0:xfdf xmlns:ns0=\"http://ns.adobe.com/xfdf/\"><ns0:annots><ns0:text color=\"#DDEAFF\" flags=\"\" name=\"9a3d2762-fddf-4415-991d-0894b2ff2ebc\" last-modifier=\"NCO Admin\" page=\"0\" rect=\"239.75699,748.2474,268.06332,776.5537\" title=\"NCO Admin\" creationdate=\"D:20201221090039+00'00'\" opacity=\"1.0\"><ns0:contents-richtext><html xmlns=\"http://www.w3.org/1999/xhtml\"><head/><body>This a sticky note</body></html></ns0:contents-richtext><ns0:contents>This a sticky note</ns0:contents><ns0:popup open=\"yes\" color=\"\" flags=\"\" page=\"\" rect=\"254.75699,408.5537,537.75696,761.5537\"/></ns0:text></ns0:annots></ns0:xfdf>",
      "xpath": "file:content",
      "permissions": [
        "Write",
        "WriteVersion",
        "ReadProperties",
        "ReadCanCollect",
        "ReadSecurity",
        "Remove",
        "ReadVersion",
        "Read",
        "WriteLifeCycle",
        "Everything",
        "Moderate",
        "Version",
        "ManageLegalHold",
        "MakeRecord",
        "ReadChildren",
        "AddChildren",
        "Comment",
        "ReadLifeCycle",
        "RemoveChildren",
        "DataVisualization",
        "ReviewParticipant",
        "Unlock",
        "CanAskForPublishing",
        "RestrictedRead",
        "ReadWrite",
        "ReadRemove",
        "Browse",
        "SetRetention",
        "WriteProperties",
        "WriteSecurity",
        "ManageWorkflows"
      ]
    },
    {
      "entity-type": "annotation",
      "id": "b60d39bf-ce32-4d4c-9ec8-841e60225dd2",
      "parentId": "fc9a17a7-8560-4b4b-b477-feff43922e4f",
      "ancestorIds": [
        "fc9a17a7-8560-4b4b-b477-feff43922e4f"
      ],
      "author": "nco-admin",
      "text": "This is a freetext box",
      "creationDate": "2020-12-21T09:01:08.431Z",
      "modificationDate": "2020-12-21T09:01:09.018Z",
      "entityId": "d4a3ac45-3f36-44be-a49d-ecb41a25871f",
      "origin": "ARender",
      "entity": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><ns0:xfdf xmlns:ns0=\"http://ns.adobe.com/xfdf/\"><ns0:annots><ns0:freetext color=\"#EEEEEE\" flags=\"\" name=\"d4a3ac45-3f36-44be-a49d-ecb41a25871f\" last-modifier=\"NCO Admin\" page=\"0\" rect=\"1462.0221,870.53314,1796.0369,976.6819\" title=\"NCO Admin\" creationdate=\"D:20201221090108+00'00'\" opacity=\"0.7\" rotation=\"\" width=\"2.0\"><ns0:contents-richtext><html xmlns=\"http://www.w3.org/1999/xhtml\"><head/><body><span style=\"font-size:13px\">This is a freetext box</span></body></html></ns0:contents-richtext><ns0:contents>This is a freetext box</ns0:contents><ns0:defaultappearance>0 R 1 0 0 </ns0:defaultappearance></ns0:freetext></ns0:annots></ns0:xfdf>",
      "xpath": "file:content",
      "permissions": [
        "Write",
        "WriteVersion",
        "ReadProperties",
        "ReadCanCollect",
        "ReadSecurity",
        "Remove",
        "ReadVersion",
        "Read",
        "WriteLifeCycle",
        "Everything",
        "Moderate",
        "Version",
        "ManageLegalHold",
        "MakeRecord",
        "ReadChildren",
        "AddChildren",
        "Comment",
        "ReadLifeCycle",
        "RemoveChildren",
        "DataVisualization",
        "ReviewParticipant",
        "Unlock",
        "CanAskForPublishing",
        "RestrictedRead",
        "ReadWrite",
        "ReadRemove",
        "Browse",
        "SetRetention",
        "WriteProperties",
        "WriteSecurity",
        "ManageWorkflows"
      ]
    },
    {
      "entity-type": "annotation",
      "id": "07554c04-e277-4958-bd70-15c53eea82ca",
      "parentId": "fc9a17a7-8560-4b4b-b477-feff43922e4f",
      "ancestorIds": [
        "fc9a17a7-8560-4b4b-b477-feff43922e4f"
      ],
      "author": "nco-admin",
      "text": "This is a circle",
      "creationDate": "2020-12-21T09:01:24Z",
      "modificationDate": "2020-12-21T09:02:18.694Z",
      "entityId": "efe76373-8bae-40e3-b1fa-3dcc1226f02d",
      "origin": "ARender",
      "entity": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><ns0:xfdf xmlns:ns0=\"http://ns.adobe.com/xfdf/\"><ns0:annots><ns0:circle color=\"#EAF39C\" date=\"D:20201221090218+00'00'\" flags=\"\" name=\"efe76373-8bae-40e3-b1fa-3dcc1226f02d\" last-modifier=\"NCO Admin\" page=\"0\" rect=\"1432.3004,123.24596,1630.4447,294.49927\" title=\"NCO Admin\" creationdate=\"D:20201221090124+00'00'\" opacity=\"0.7\" fringe=\"0.0,0.0,0.0,0.0\" interior-color=\"#EAF39C\" width=\"0.0\" style=\"solid\" intensity=\"\"><ns0:contents-richtext><html xmlns=\"http://www.w3.org/1999/xhtml\"><head/><body>This is a circle</body></html></ns0:contents-richtext><ns0:contents>This is a circle</ns0:contents><ns0:popup open=\"no\" color=\"#EAF39C\" flags=\"\" page=\"0\" rect=\"1650.0,-53.991165,1890.6039,130.0\"/></ns0:circle></ns0:annots></ns0:xfdf>",
      "xpath": "file:content",
      "permissions": [
        "Write",
        "WriteVersion",
        "ReadProperties",
        "ReadCanCollect",
        "ReadSecurity",
        "Remove",
        "ReadVersion",
        "Read",
        "WriteLifeCycle",
        "Everything",
        "Moderate",
        "Version",
        "ManageLegalHold",
        "MakeRecord",
        "ReadChildren",
        "AddChildren",
        "Comment",
        "ReadLifeCycle",
        "RemoveChildren",
        "DataVisualization",
        "ReviewParticipant",
        "Unlock",
        "CanAskForPublishing",
        "RestrictedRead",
        "ReadWrite",
        "ReadRemove",
        "Browse",
        "SetRetention",
        "WriteProperties",
        "WriteSecurity",
        "ManageWorkflows"
      ]
    }
  ]
}
```

## Code sample

You can find below a simple method to use if you want to migrate former annotations with java code:
```
package com.nuxeo.arender;

import static java.nio.charset.StandardCharsets.UTF_8;
import static java.util.Collections.singletonList;

import java.io.InputStream;
import java.util.Date;
import java.util.Map;
import java.util.UUID;

import org.apache.commons.io.IOUtils;
import org.nuxeo.client.NuxeoClient;
import org.nuxeo.client.objects.comment.AnnotationAdapter;

import com.arondor.viewer.annotation.api.Annotation;
import com.arondor.viewer.annotation.api.TextualAnnotation;
import com.arondor.viewer.annotation.common.AnnotationId;
import com.arondor.viewer.client.api.document.DocumentId;
import com.arondor.viewer.client.api.document.DocumentLayout;
import com.arondor.viewer.client.api.document.DocumentPageLayout;
import com.arondor.viewer.client.api.document.PageDimensions;
import com.arondor.viewer.common.client.util.annotation.AnnotationIdAdapter;
import com.arondor.viewer.common.documentservice.DocumentServiceDelegate;
import com.arondor.viewer.common.documentservice.DocumentServiceDelegateNotAvailable;
import com.arondor.viewer.rendition.api.document.DocumentAccessor;
import com.arondor.viewer.rendition.api.document.DocumentAccessorSelector;
import com.arondor.viewer.rendition.api.document.DocumentService;
import com.arondor.viewer.xfdf.annotation.AnnotationPositionTransformer;
import com.arondor.viewer.xfdf.annotation.AnnotationTransformer;
import com.arondor.viewer.xfdf.annotation.XFDFAnnotationConverter;

public class NuxeoARenderMapper {

    // to initialize with appropriate credentials
    protected NuxeoClient client;

    public void importAnnotation(Map<String, Object> formerAnnotation) throws Exception {
        // document layout definition
        final DocumentPageLayout documentPageLayout = new DocumentPageLayout();
        documentPageLayout.addPageDimensions(0, new PageDimensions());
        documentPageLayout.addPageDimensions(1, new PageDimensions());

        // create annotation marshaller
        DocumentService documentService = new NuxeoDocumentService(documentPageLayout);
        AnnotationTransformer annotationTransformer = new AnnotationPositionTransformer(documentService);
        XFDFAnnotationConverter annotationConverter = new XFDFAnnotationConverter(annotationTransformer);

        // Nuxeo Document Id to annotate - replace it by real one
        String nuxeoDocId = UUID.randomUUID().toString();
        DocumentId arenderDocumentId = new DocumentId(nuxeoDocId);

        // extract information from former annotation
        Date creationDate = (Date) formerAnnotation.getOrDefault("creationDate", new Date());
        Date modificationDate = (Date) formerAnnotation.getOrDefault("modificationDate", new Date());
        // display name
        String creator = (String) formerAnnotation.getOrDefault("creator", "John Doe");

        // here chose the type of annotation you want
        Annotation arenderAnnotation = new Annotation();
        // id is used for parent <-> children relationship - it could be random
        AnnotationId arenderAnnotationId = new AnnotationId(UUID.randomUUID().toString());
        arenderAnnotation.setId(arenderAnnotationId);
        // arenderAnnotation.setInreplyto(new AnnotationId(...));
        arenderAnnotation.setCreator(creator);
        arenderAnnotation.setCreationDate(creationDate);
        arenderAnnotation.setDate(modificationDate);
        // then use appropriate setter depending on the annotation type you choose
        // ....

        // then serialize the annotation
        org.nuxeo.client.objects.comment.Annotation nuxeoAnnotation = new org.nuxeo.client.objects.comment.Annotation();
        nuxeoAnnotation.setEntityId(new AnnotationIdAdapter().marshal(arenderAnnotation.getId()));
        nuxeoAnnotation.setOrigin("ARender"); // has to be ARender
        try (InputStream stream = annotationConverter.serialize(arenderDocumentId, singletonList(arenderAnnotation))) {
            nuxeoAnnotation.setEntity(IOUtils.toString(stream, UTF_8));
        }
        nuxeoAnnotation.setXpath("file:content");
        nuxeoAnnotation.setAuthor("jdoe"); // user id
        nuxeoAnnotation.setCreationDate(creationDate.toInstant());
        nuxeoAnnotation.setModificationDate(modificationDate.toInstant());
        // if the annotation is a TextualAnnotation, you can set the text in order to display it into Nuxeo
        nuxeoAnnotation.setText(((TextualAnnotation) arenderAnnotation).getContents());

        // then save it to Nuxeo
        client.repository().newDocumentAdapter(nuxeoDocId, AnnotationAdapter::new).create(nuxeoAnnotation);

    }

    public static class NuxeoDocumentService extends DocumentServiceDelegate {

        private final DocumentLayout layout;

        protected NuxeoDocumentService(DocumentLayout layout) {
            super(true);
            this.layout = layout;
        }

        @Override
        public DocumentLayout getDocumentLayout(DocumentId documentId) {
            return layout;
        }

        @Override
        public void loadDocumentAccessor(DocumentAccessor documentAccessor,
                DocumentAccessorSelector documentAccessorSelector) {
            // not needed
        }

        @Override
        public DocumentService getDelegate() throws DocumentServiceDelegateNotAvailable {
            // not needed
            return null;
        }

        @Override
        protected void checkDocumentAvailability(DocumentId documentId) {
            // not needed

        }

        @Override
        public DocumentId mayProcessAnnotationRendition(DocumentId documentId) {
            // not needed
            return null;
        }

        @Override
        public boolean needsToProcessRenditionsForDocument(DocumentId documentId) {
            // not needed
            return false;
        }
    }

}
```

You will need the following maven dependencies:
```
<properties>
    <!-- properties were taken from 10.3.x -->
    <!-- see https://github.com/nuxeo/nuxeo-arender-connector/wiki/Release-Matrix -->
    <arender.version>4.0.9.NX1.0</arender.version>
    <!-- doesn't change a lot -->
    <nuxeo.java.client.version>3.8.0</nuxeo.java.client.version>
  </properties>

  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>com.arondor.arender</groupId>
        <artifactId>arender-bom-web-ui</artifactId>
        <version>${arender.version}</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
    </dependencies>
  </dependencyManagement>

  <dependencies>
    <dependency>
      <groupId>org.nuxeo.client</groupId>
      <artifactId>nuxeo-java-client</artifactId>
      <version>${nuxeo.java.client.version}</version>
    </dependency>
    <dependency>
      <groupId>com.arondor.arender</groupId>
      <artifactId>arondor-arender-annotation-api</artifactId>
    </dependency>
    <dependency>
      <groupId>com.arondor.arender</groupId>
      <artifactId>arondor-arender-common</artifactId>
      <version>${arender.version}</version>
    </dependency>
    <dependency>
      <groupId>com.arondor.arender</groupId>
      <artifactId>arondor-arender-xfdf-annotation</artifactId>
      <version>${arender.version}</version>
    </dependency>
  </dependencies>
```


## Annotations samples

Below an example of ARender annotation format for each kind of annotation.

### Arrow annotation sample

```
<?xml version="1.0" encoding="UTF-8"?>
<ns0:xfdf xmlns:ns0="http://ns.adobe.com/xfdf/">
   <ns0:annots>
      <ns0:line color="#0000D5" date="D:20200225142734+00'00'" flags="" name="9b4c724e-797d-4ba0-97fc-26a4976d5626" last-modifier="Administrator" page="0" rect="88.97648,318.74036,389.86642,322.1364" title="Administrator" creationdate="D:20200225141628+00'00'" opacity="1.0" start="88.97648,318.74036" end="389.86642,322.1364" head="OpenArrow" tail="ROpenArrow" interior-color="" width="4.0">
         <ns0:contents-richtext>
            <html xmlns="http://www.w3.org/1999/xhtml">
               <head />
               <body>Arrow annotation content</body>
            </html>
         </ns0:contents-richtext>
         <ns0:contents>Arrow annotation content</ns0:contents>
         <ns0:popup open="no" color="#EAF39C" flags="" page="0" rect="409.0,210.70273,524.46564,299.0" />
      </ns0:line>
   </ns0:annots>
</ns0:xfdf>
```


### Freetext annotation sample

```
<?xml version="1.0" encoding="UTF-8"?>
<ns0:xfdf xmlns:ns0="http://ns.adobe.com/xfdf/">
   <ns0:annots>
      <ns0:freetext color="#EEEEEE" date="D:20200225142754+00'00'" flags="" name="ec335e39-927d-42aa-ad65-b612a6667a25" last-modifier="Administrator" page="3" rect="291.381,150.97552,487.67264,264.40356" title="Administrator" creationdate="D:20200225141817+00'00'" opacity="0.7" rotation="" width="2.0">
         <ns0:contents-richtext>
            <html xmlns="http://www.w3.org/1999/xhtml">
               <head />
               <body>Freetext annotation content</body>
            </html>
         </ns0:contents-richtext>
         <ns0:contents>Freetext annotation content</ns0:contents>
         <ns0:defaultappearance>0 R 1 0 0</ns0:defaultappearance>
      </ns0:freetext>
   </ns0:annots>
</ns0:xfdf>
```

### Sticky note annotation sample

```
<?xml version="1.0" encoding="UTF-8"?>
<ns0:xfdf xmlns:ns0="http://ns.adobe.com/xfdf/">
   <ns0:annots>
      <ns0:text color="#DDEAFF" date="D:20200225142746+00'00'" flags="" name="d140e145-c7fd-4cc6-a45f-e94e2562bc3b" last-modifier="Administrator" page="2" rect="370.79117,301.8175,384.37537,315.4017" title="Administrator" creationdate="D:20200225141743+00'00'" opacity="1.0" state="None">
         <ns0:contents-richtext>
            <html xmlns="http://www.w3.org/1999/xhtml">
               <head />
               <body>sticky note annotation content</body>
            </html>
         </ns0:contents-richtext>
         <ns0:contents>sticky note annotation content</ns0:contents>
         <ns0:popup open="yes" color="" flags="" page="" rect="385.79117,170.4017,535.79114,300.4017" />
      </ns0:text>
   </ns0:annots>
</ns0:xfdf>
```

### Circle annotation sample

```
<?xml version="1.0" encoding="UTF-8"?>
<ns0:xfdf xmlns:ns0="http://ns.adobe.com/xfdf/">
   <ns0:annots>
      <ns0:circle color="#00C000" date="D:20200225142804+00'00'" flags="" name="0f7f7dd5-15c5-4343-a78f-15ca5798374b" last-modifier="Administrator" page="5" rect="271.0047,229.08469,409.56348,360.85138" title="Administrator" creationdate="D:20200225141930+00'00'" opacity="0.95" fringe="0.0,0.0,0.0,0.0" interior-color="#C000C0" width="1.0" style="solid" intensity="">
         <ns0:contents-richtext>
            <html xmlns="http://www.w3.org/1999/xhtml">
               <head />
               <body>Circle annotation content</body>
            </html>
         </ns0:contents-richtext>
         <ns0:contents>Circle annotation content</ns0:contents>
         <ns0:popup open="no" color="#EAF39C" flags="" page="5" rect="429.0,121.70273,544.46564,210.0" />
      </ns0:circle>
   </ns0:annots>
</ns0:xfdf>
```

### Freehand annotation sample

```
<?xml version="1.0" encoding="UTF-8"?>
<ns0:xfdf xmlns:ns0="http://ns.adobe.com/xfdf/">
   <ns0:annots>
      <ns0:ink color="#2A4869" date="D:20200225142740+00'00'" flags="" name="4c41abcd-ceaa-4f83-b3b0-4214ce47da6a" last-modifier="Administrator" page="1" rect="171.16086,157.76762,362.0188,296.32642" title="Administrator" creationdate="D:20200225141712+00'00'" opacity="1.0" width="2.0" style="solid">
         <ns0:contents-richtext>
            <html xmlns="http://www.w3.org/1999/xhtml">
               <head />
               <body>Freehand annotation content</body>
            </html>
         </ns0:contents-richtext>
         <ns0:contents>Freehand annotation content</ns0:contents>
         <ns0:popup open="no" color="#EAF39C" flags="" page="1" rect="382.0,49.70273,497.46567,138.0" />
         <ns0:inklist>
            <ns0:gesture>232.28975,294.28882;232.28975,294.28882;226.85606,294.28882;221.4224,294.28882;211.23424,294.28882;200.36688,292.9304;196.29163,290.21356;194.254,287.4967;189.49953,280.70462;184.06586,271.19568;179.99059,262.36597;177.27376,254.89464;174.55692,246.74413;173.1985,237.9144;171.84007,230.44308;171.16086,222.29257;171.16086,214.14204;171.16086,206.67075;171.16086,199.19943;171.84007,194.44496;174.55692,187.65286;179.31139,181.53998;184.06586,176.7855;188.82031,172.71025;192.89558,169.99341;198.32925,166.59737;203.08372,163.88052;209.19661,161.8429;213.95108,161.16368;220.06396,159.80527;227.53528,159.80527;255.38287,158.44685;263.5334,157.76764;271.0047,157.76764;275.7592,157.76764;281.19284,157.76764;287.98495,157.76764;292.0602,157.76764;296.81467,158.44685;300.88992,158.44685;307.68204,159.12605;313.11572,159.80527;321.26624,159.80527;327.37912,160.48448;332.13358,161.8429;335.52963,163.20132;338.9257,165.23895;341.64252,167.27658;346.397,174.74788;348.43463,176.7855;353.1891,183.5776;356.58514,188.33208;357.94354,191.04892;359.30197,193.76576;359.98117,197.1618;360.6604,200.55786;362.01883,206.67075;362.01883,212.10442;362.01883,216.85889;362.01883,222.29257;362.01883,226.36783;362.01883,233.15993;361.3396,236.55597;358.62277,243.34807;357.26434,246.74413;354.54752,251.4986;351.83066,255.57385;349.11383,258.9699;343.68015,267.79962;331.45438,280.70462;325.3415,284.77988;321.94543,286.8175;317.87018,288.85513;313.11572,290.21356;309.04047,292.25116;302.92755,294.28882;298.1731,295.64722;293.41864,295.64722;287.98495,296.32642;279.1552,296.32642;273.72156,296.32642;268.28787,296.32642;261.49576,296.32642;255.38287,296.32642;249.26999,295.64722;245.19473,294.28882;241.11948,294.28882;237.04422,294.28882;232.28975,294.96802</ns0:gesture>
         </ns0:inklist>
      </ns0:ink>
   </ns0:annots>
</ns0:xfdf>
```

### Strike through text annotation sample

```
<?xml version="1.0" encoding="UTF-8"?>
<ns0:xfdf xmlns:ns0="http://ns.adobe.com/xfdf/">
   <ns0:annots>
      <ns0:strikeout color="#EAF39C" date="D:20200225142818+00'00'" flags="" name="e4d910a0-ccfb-403f-8e5f-eaf03401629c" last-modifier="Administrator" page="7" rect="43.2,346.02597,227.70802,384.8708" title="Administrator" creationdate="D:20200225142114+00'00'" opacity="0.7" coords="43.2,384.8708,227.70802,384.8708,43.2,346.02597,227.70802,346.02597">
         <ns0:contents-richtext>
            <html xmlns="http://www.w3.org/1999/xhtml">
               <head />
               <body>Strike through text annotation content</body>
            </html>
         </ns0:contents-richtext>
         <ns0:contents>Strike through text annotation content</ns0:contents>
         <ns0:popup open="no" color="#EAF39C" flags="" page="7" rect="247.0,238.70273,362.46567,327.0" />
      </ns0:strikeout>
   </ns0:annots>
</ns0:xfdf>
```

### Highlight text annotation sample

```
<?xml version="1.0" encoding="UTF-8"?>
<ns0:xfdf xmlns:ns0="http://ns.adobe.com/xfdf/">
   <ns0:annots>
      <ns0:highlight color="#FF0000" date="D:20200225142809+00'00'" flags="" name="f0a2f3b6-8e37-4e50-a89a-4006432fe993" last-modifier="Administrator" page="6" rect="35.712,343.42673,234.31656,383.772" title="Administrator" creationdate="D:20200225142012+00'00'" opacity="1.0" coords="35.712,383.772,234.31656,383.772,35.712,343.42673,234.31656,343.42673">
         <ns0:contents-richtext>
            <html xmlns="http://www.w3.org/1999/xhtml">
               <head />
               <body>Highlight text annotation content</body>
            </html>
         </ns0:contents-richtext>
         <ns0:contents>Highlight text annotation content</ns0:contents>
         <ns0:popup open="no" color="#EAF39C" flags="" page="6" rect="254.0,235.70273,369.46567,324.0" />
      </ns0:highlight>
   </ns0:annots>
</ns0:xfdf>
```

### Stamp annotation sample

```
<?xml version="1.0" encoding="UTF-8"?>
<ns0:xfdf xmlns:ns0="http://ns.adobe.com/xfdf/">
   <ns0:annots>
      <ns0:stamp color="#FF0000" date="D:20200225142813+00'00'" flags="" name="0c3c78d7-0e74-48c8-a61e-94ee2b22c91a" last-modifier="Administrator" page="7" rect="132.4459,197.1618,419.75165,220.25494" title="Administrator" creationdate="D:20200225142137+00'00'" opacity="1.0" rotation="350">
         <ns0:contents-richtext>
            <html xmlns="http://www.w3.org/1999/xhtml">
               <head />
               <body>Urgent stamp annotation content</body>
            </html>
         </ns0:contents-richtext>
         <ns0:contents>Urgent stamp annotation content</ns0:contents>
         <ns0:popup open="no" color="#EAF39C" flags="" page="7" rect="212.0,89.70273,327.46567,178.0" />
         <ns0:appearance>fontSize:20;fontColor:red;borderWidth:1;borderColor:red;backgroundColor:none;</ns0:appearance>
      </ns0:stamp>
   </ns0:annots>
</ns0:xfdf>
```
