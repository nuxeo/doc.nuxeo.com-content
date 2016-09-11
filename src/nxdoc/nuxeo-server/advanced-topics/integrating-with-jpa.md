---
title: Integrating with JPA
review:
    comment: ''
    date: '2015-12-01'
    status: ok
confluence:
    ajs-parent-page-id: '950333'
    ajs-parent-page-title: Advanced topics
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: Integrating+with+JPA
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/Integrating+with+JPA'
    page_id: '4687326'
    shortlink: 3oVH
    shortlink_source: 'https://doc.nuxeo.com/x/3oVH'
    source_link: /display/NXDOC/Integrating+with+JPA
history:
    - 
        author: Stéphane Lacoin
        date: '2010-11-15 15:55'
        message: igrated to Confluence 4.
        version: '21'
    - 
        author: Stéphane Lacoin
        date: '2010-11-15 15:54'
        message: ''
        version: '20'
    - 
        author: Stéphane Lacoin
        date: '2010-11-15 15:54'
        message: ''
        version: '19'
    - 
        author: Stéphane Lacoin
        date: '2010-11-15 15:05'
        message: ''
        version: '18'
    - 
        author: Stéphane Lacoin
        date: '2010-11-15 15:04'
        message: ''
        version: '17'
    - 
        author: Stéphane Lacoin
        date: '2010-11-15 15:04'
        message: ''
        version: '16'
    - 
        author: Stéphane Lacoin
        date: '2010-11-15 15:02'
        message: ''
        version: '15'
    - 
        author: Stéphane Lacoin
        date: '2010-11-15 14:57'
        message: ''
        version: '14'
    - 
        author: Stéphane Lacoin
        date: '2010-11-15 14:48'
        message: ''
        version: '13'
    - 
        author: Stéphane Lacoin
        date: '2010-11-15 14:46'
        message: ''
        version: '12'
    - 
        author: Stéphane Lacoin
        date: '2010-11-15 14:44'
        message: ''
        version: '11'
    - 
        author: Stéphane Lacoin
        date: '2010-11-15 14:44'
        message: ''
        version: '10'
    - 
        author: Stéphane Lacoin
        date: '2010-11-15 13:25'
        message: ''
        version: '9'
    - 
        author: Stéphane Lacoin
        date: '2010-11-15 13:25'
        message: ''
        version: '8'
    - 
        author: Stéphane Lacoin
        date: '2010-11-15 13:23'
        message: ''
        version: '7'
    - 
        author: Stéphane Lacoin
        date: '2010-11-15 13:21'
        message: ''
        version: '6'
    - 
        author: Stéphane Lacoin
        date: '2010-11-15 13:20'
        message: ''
        version: '5'
    - 
        author: Stéphane Lacoin
        date: '2010-11-15 13:19'
        message: ''
        version: '4'
    - 
        author: Stéphane Lacoin
        date: '2010-11-15 12:47'
        message: ''
        version: '3'
    - 
        author: Stéphane Lacoin
        date: '2010-11-15 12:41'
        message: ''
        version: '2'
    - 
        author: Stéphane Lacoin
        date: '2010-11-15 11:15'
        message: ''
        version: '1'

---
The following paragraphs explain the specific part of integrating a nuxeo service with JPA.

Let say we want to put in place a document rating service that persist information using JPA.
For this, we need these three modules :

*   nuxeo-samples-persistence-api
*   nuxeo-samples-persistence-core
*   nuxeo-samples-persistence-facade

The API would be something like

```

interface DocumentRating {
DocumentRating createRating(DocumentModel doc, String name, short maxRating);
DocumentRating getRating(DocumentModel doc, String name);
DocumentRating saveRating(DocumentMOdel doc, String name, int rating);
}

```

with an entity bean

```

...
@Entity(name="DocRating"
class DocumentRating {

   @Id
   @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="DOCRATING_SEQ")
   @SequenceGenerator(name="DOCRATING_SEQ", sequenceName="DOCRATING_SEQ", allocationSize=100)
   @Column(name = "RATING_ID", nullable = false, columnDefinition = "integer")
   private long id;

   String docUUID;

   short rating;

   short maxRating;

   long created;

   long modified;
}
...

```

Nuxeo's data providers should support deployment inside or outside an EJB container. The following describe what should be
achieved for each use case.

## Outside an EJB container

In that case, the framework resolves the service as the document rating provider.
A persistence provider is lazy obtained using nuxeo persistence core services and used
for getting access to the entity manager.

```

class DocumentRatingProvider implements DocumentRating {

protected PersistenceProvider persistenceProvider;

public PersistenceProvider persistenceProvider() {
if (persistenceProvider == null) {
     persistenceProvider = Framework.getService(PersistenceProviderFactory.class).newProvider("doc-rating");
    }
return persistenceProvider;
}

...
public DocumentRating saveRating(DocumentModel doc, String name, short rating) {
persistenceProvider.run(true, new RunCallback<DocumentRating>() {
public DocumentRating runWith(EntityManager em) {
         return this.saveRating(em, doc, name, rating);
      }
});
}

public DocumentRating saveRating(EntityManager em, DocumentModel doc, String name, short rating) {
    ...
  }
...
}

```

A minimal configuration should named the persistence unit and specify the data source to be used.

```

...
  <extension target="org.nuxeo.ecm.core.persistence.PersistenceComponent"
        point="hibernate">
        <hibernateConfiguration name="doc-rating">
            <datasource>doc-rating</datasource>
            <properties>
               <property name="hibernate.hbm2ddl.auto">update</property>
            </properties>
        </hibernateConfiguration>
  </extension
...

```

## Inside an EJB container

In that case, the framework is resolving the service using the document rating bean.
The persistence unit is initialized by the container himself, and an entity manager is
automatically injected into the bean. The entity manager is transmitted by the bean to the
core provider using a call parameter (thread safe).

```

@Stateless
@Local(DocumentRatingLocal)
@Remote(DocumentRating)
class DocumentRatingBean implements DocumentRating {

@PersistenceContext(unitName = "doc-rating")
private EntityManager em;

...

public DocumentRating saveRating(DocumentModel doc, String name, short rating) {
    DocumentRatingProvider provider = Framework.getLocalService(DocumentRatingProvider)
    return provider.saveRating(em, doc, name, rating);
  }

...

```

The persistence unit should be registered in the JPA container by providing a `META-INF/persistence.xml` descriptor
in the core module.

```

<?xml version="1.0" encoding="UTF-8"?>
<persistence xmlns="http://java.sun.com/xml/ns/persistence"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://java.sun.com/xml/ns/persistence
        http://java.sun.com/xml/ns/persistence/persistence_1_0.xsd"
	version="1.0">

	<persistence-unit name="doc-rating">
		<jta-data-source>java:/doc-rating</jta-data-source>
		<class>...DocumentRating</class>
		<properties>
			<property name="hibernate.hbm2ddl.auto" value="update" />
		</properties>
	</persistence-unit>
</persistence>

```