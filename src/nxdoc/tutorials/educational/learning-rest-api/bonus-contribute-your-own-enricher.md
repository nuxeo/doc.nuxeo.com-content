---
title: Bonus - Contribute Your Own Enricher
description: In this bonus exercise learn how to extend the REST API by contributing a custom content enricher.
review:
    comment: 'Separate pages'
    date: '2017-02-20'
    status: ok
labels:
    - multiexcerpt-include
toc: true
tree_item_index: 1000
previous_link: nxdoc/launch-a-workflow
---

We've covered the basics of Nuxeo REST API. But there are some functionalities we left aside: [`Users`](https://nuxeo.github.io/nuxeo-js-client/latest/Users.html) / [`Groups`](https://nuxeo.github.io/nuxeo-js-client/latest/Groups.html) management, and [`Directories`](https://nuxeo.github.io/nuxeo-js-client/latest/Directory.html). Feel free to take a look at their corresponding classes.

For now we will extend the REST API by contributing a custom content enricher. In order to contribute a content enricher, you need to:

*   Create the content enricher
*   Declare the content enricher
*   Call the content enricher

## Creating the Content Enricher

A content enricher is a Java class that:

*   Extends the `AbstractJsonEnricher` class for a defined object (e.g.: `AbstractJsonEnricher<DocumentModel>` for a document)
*   Contains a `@Setup` annotation before the class declaration in order to define:
    *   How the class will be instantiated (usually as a singleton)
    *   Which class will have the highest priority in case of naming conflict
*   Uses the Jackson library to generate the JSON to be added in the response.

Here is a commented sample below:

{{{multiexcerpt 'enricher-class' page='Content Enrichers'}}}

Now it's your turn!

### Practice - Contribute a Content Enrichers

This exercise requires some familiarity with Java.

**Create the content enricher**

1.  Download [LastVersionEnricher.java]({{file name='LastVersionEnricher.java'}}) or open in another tab to copy and add to your project.
2.  In the Java class, retrieve the `CoreSession` from the `DocumentModel` object.
3.  Retrieve the last document version from the `CoreSession`.
4.  Use the `JsonGenerator` object to write a field with the enricher name.
5.  Use the `JsonGenerator` object to write an object with the last document version.

{{#> accordian heading='Solution' closed='true'}}

```java
package org.nuxeo.sample;
import static org.nuxeo.ecm.core.io.registry.reflect.Instantiations.SINGLETON;
import static org.nuxeo.ecm.core.io.registry.reflect.Priorities.REFERENCE;
import java.io.IOException;
import org.codehaus.jackson.JsonGenerator;
import org.nuxeo.ecm.core.api.CoreSession;
import org.nuxeo.ecm.core.api.DocumentModel;
import org.nuxeo.ecm.core.io.marshallers.json.enrichers.AbstractJsonEnricher;
import org.nuxeo.ecm.core.io.registry.reflect.Setup;
@Setup(mode = SINGLETON, priority = REFERENCE)
public class LastVersionEnricher extends AbstractJsonEnricher<DocumentModel> {
    public static final String NAME = "lastVersion";
    public SampleEnricher() {
        super(NAME);
    }
    // Method that will be called when the enricher is asked for
    @Override
    public void write(JsonGenerator jg, DocumentModel doc) throws IOException {
      // TODO: Retrieve the CoreSession from the DocumentModel object
      CoreSession session = doc.getCoreSession();
      // TODO: Retrieve the CoreSession from the DocumentModel object
      DocumentModel lastVersion = session.getLastDocumentVersion(doc.getRef());
      // TODO: Use the JsonGenerator object to write a field with the enricher name
      jg.writeFieldName(NAME);
      // TODO: Use the JsonGenerator object to write an object with the last document version
      jg.writeObject(lastVersion);
    }
}
```

{{/accordian}}

**Declare the content enricher**

1.  Declare the content enricher through Nuxeo Studio, or by adding an XML file in your Java project's `src/main/resources/OSGI-INF` folder. [Here is a sample]({{file name='sample.xml'}}).
2.  If you declare it in your Java project, make sure to reference it in the project's `manifest.mf` file in the `src/main/resources/META-INF` folder, in the `Nuxeo-Component` list:

    {{#> panel type='code' heading='Manifest.mf Extract'}}
    ```
    Nuxeo-Component:OSGI-INF/org.nuxeo.sample.enrichers.parentDocEnricher.xml,OSGI-INF/org.nuxeo.sample.another-contribution.xml, ...
    ```
    {{/panel}}

Now you can declare yours!

1.  Declare the content enricher in your Java project.
2.  Reference the component in the bundle's manifest file.

**Call the content enricher**

Now that the enricher is created, you need to [package and deploy your application](https://university.nuxeo.io/nuxeo/university/#!/course/nuxeo-platform-developer-basics/package-deploy-application), then you can [call it](#enrichers)! Your enricher name is the one you put inside the `NAME` variable.
