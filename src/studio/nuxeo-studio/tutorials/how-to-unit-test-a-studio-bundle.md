---
title: 'HOWTO: Unit Test a Studio Bundle'
review:
    comment: ''
    date: '2017-03-28'
    status: ok
details:
    howto:
        excerpt: Learn how to unit test a Studio Bundle
        level: Advanced
        tool: Code, Nuxeo Studio
        topics: Nuxeo Studio, Unit test
labels:
    - howto
    - alerts
tree_item_index: 50
toc: true
---

{{! excerpt}}
In this how to, you will learn how to unit test a Studio Bundle from a Java Project.
{{! /excerpt}}

## Optional - Creating a Bare Project

If you already have a project you can go to the next section.

1. Install [Nuxeo CLI]({{page version='' space='nxdoc' page='nuxeo-cli'}}).
1. Create a new bare project:

   ```shell
   mkdir my-project && cd $_
   nuxeo bootstrap
   ```

   Do not hesitate to read the [dedicated page]({{page version='' space='nxdoc' page='nuxeo-cli'}}) to fill in the inputs.
1. Check that everything is working

   ```shell
   mvn install
   ```

   And the process must be exited without any errors.

## Add Your Connect Credentials to Maven

Adding your credentials allows Maven to be authenticated in Studio while trying to grab your project.

1. Open `~/.m2/settings.xml` file with your preferred text editor
1. Add the following `server` node:
   ```xml
   <settings>
   ...
     <servers>
     ...
       <server>
         <id>nuxeo-studio</id>
         <username>CONNECT_USERNAME</username>
         <password>CONNECT_PASSWORD</password>
       </server>
     </servers>
   </settings>
   ```

   {{#> callout type='warning' }}
   It is recommended that you don't leave your password directly in the XML file. You can encrypt it by following the official [password encryption guide](https://maven.apache.org/guides/mini/guide-encryption.html).
   {{/callout}}

## Adding Nuxeo Studio as Maven Repository

1. Open `./pom.xml` file with your preferred editor.
1. Check if the following `repository` is present. If not, add it:

   ```xml
   <project>
   ...
     <repositories>
     ...
       <repository>
         <id>nuxeo-studio</id>
         <url>https://connect.nuxeo.com/nuxeo/site/studio/maven</url>;
         <releases>
           <enabled>true</enabled>
         </releases>
         <snapshots>
           <updatePolicy>always</updatePolicy>
           <enabled>true</enabled>
         </snapshots>
       </repository>
     </repositories>
   </project>
   ```

## Adding Studio Bundle Dependency

1. Open Nuxeo Studio and the project that you want to unit test.
1. Pick your Maven GAV information in Studio. Go to `Settings` > `Application Information`.

   - `groupId`: is the `Maven Group` field
   - `artifactId`: is the `Maven Artifact Id` field
   - `version`: follows this convention `X.Y.W--branch-SNAPSHOT`.

   For example, if you are working on version `0.0.2-SNAPSHOT` (open `Source Control` > `Branch Management`) and on branch `master`, the Maven version will be: `0.0.2--master-SNAPSHOT`.
   If you want a released version, the version pattern is much easier: `0.0.2`.

1. Then edit the `./pom.xml` file to add the dependency management. It's recommended to set the dependency's version in the parent `pom` of your project. For more information, you can read [Dependency Management](https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html#Dependency_Management) in the official Maven guide.

   ```xml
   <project>
   ...
     <dependencyManagement>
     ...
       <dependencies>
         <dependency>
           <groupId>STUDIO_GROUPID</groupId>
           <artifactId>STUDIO_ARTIFACTID</artifactId>
           <version>STUDIO_VERISON</version>
         </dependency>
       </dependencies>
     </dependencyManagement>
   </project>
   ```

1. Add a direct dependency in the `./myproject-core/pom.xml` file, or the `pom.xml` of your module in which you'll want to write the unit tests.

   ```xml
   <project>
   ...
     <dependencies>
       <!-- Note that we do not need the version here, it's inherited from the parent pom.xml file. -->
       <dependency>
         <groupId>STUDIO_GROUPID</groupId>
         <artifactId>STUDIO_ARTIFACTID</artifactId>
       </dependency>
     </dependencies>
   </project>
   ```

## Understanding @PartialDeploy Annotation

Once you've understood the [@Deploy]({{page space='corg' page='unit-testing'}}) annotation, you will have noticed that deploying a Studio Bundle is not as straightforward as it sounds because of the way the Studio bundle contributions are packed. The idea behind this annotation is to allow you to select which contributions you want to deploy in your unit test.

For example, you may want to deploy only [Schema]({{page page='schema-fields'}}), [Document Type]({{page page='how-to-define-a-document-type'}}) and custom [event listeners]({{page page='events-and-listeners'}}) to make sure that your business rules are correctly applied.
Or, you may simply want to verify that your [Automation Scripting]({{page page='automation-scripting'}}) is doing what you'd expect.

## Testing Content Model

1. Assuming you have already created a DocType, "MyCustomDoc", in your Studio Project...
1. Add the following dependency to `./myproject/pom.xml` file:

   ```xml
   <dependencies>
   ...
     <dependency>
         <groupId>org.nuxeo.runtime</groupId>
         <artifactId>nuxeo-runtime-test</artifactId>
         <scope>test</scope>
     </dependency>
     <dependency>
         <groupId>org.nuxeo.ecm.platform</groupId>
         <artifactId>nuxeo-platform-test</artifactId>
         <scope>test</scope>
     </dependency>
   <dependencies>
   ```

1. Create a new test case class `./myproject-core/src/test/java/com/bigcorp/MyDocType.java`
1. Add the following content:

   ```java
   package com.bigcorp;

   import static org.junit.Assert.assertNotNull;

   import javax.inject.Inject;

   import org.junit.Test;
   import org.junit.runner.RunWith;
   import org.nuxeo.ecm.core.api.CoreSession;
   import org.nuxeo.ecm.core.api.DocumentModel;
   import org.nuxeo.ecm.core.test.DefaultRepositoryInit;
   import org.nuxeo.ecm.core.test.annotations.RepositoryConfig;
   import org.nuxeo.ecm.platform.test.PlatformFeature;
   import org.nuxeo.runtime.test.runner.Features;
   import org.nuxeo.runtime.test.runner.FeaturesRunner;
   import org.nuxeo.runtime.test.runner.PartialDeploy;
   import org.nuxeo.runtime.test.runner.TargetExtensions;

   @RunWith(FeaturesRunner.class)
   @Features(PlatformFeature.class)
   @RepositoryConfig(init = DefaultRepositoryInit.class)
   // Note that the dedicated Annotation takes the bundle name and the whitelisted target extensions list
   @PartialDeploy(bundle = "studio.extensions.YOUR_PROJECT_NAME", extensions = { TargetExtensions.ContentModel.class })
   public class MyDocTypeTest {

     @Inject
     CoreSession session;

     @Test
     public void testMyDocumentType() {
        DocumentModel contract = session.createDocumentModel("/default-domain/Workspaces",
                                                             "firstContract", "Contract");
        contract.setPropertyValue("contract:amount", 200L);
        DocumentModel document = session.createDocument(contract);

        assertNotNull(document.getId());
     }
   }
   ```
1. Make sure that you change the [`YOUR_PROJECT_NAME`](#your-project-name) to the correct one.
1. And voila! The test should pass and you have only deployed what is necessary to test the `Content Model` category in Studio.

{{> anchor 'your-project-name'}}
{{#> callout type='note' }}
You can find your *YOUR_PROJECT_NAME* opening your studio project:
```
/META-INF
  MANIFEST.MF
    Bundle-SymbolicName:studio.extensions.XXXX
```
{{/callout}}

## Testing Automation

1. Assuming that you have already created an Automation Chain, `UpdateTaxes`, that calculates `contract:taxes` from `contract:amount`...
1. Add the following dependency to `./myproject/pom.xml` file:
   ```xml
   <dependencies>
   ...
     <dependency>
       <groupId>org.nuxeo.ecm.automation</groupId>
       <artifactId>nuxeo-automation-test</artifactId>
       <scope>test</scope>
     </dependency>
   <dependencies>
   ```
1. Create a new test case class `./myproject-core/src/test/java/com/bigcorp/UpdateTaxesTest.java`
1. Add the following content:

      ```java
      package com.bigcorp;

      import static org.junit.Assert.assertEquals;

      import javax.inject.Inject;

      import org.junit.Test;
      import org.junit.runner.RunWith;
      import org.nuxeo.ecm.automation.AutomationService;
      import org.nuxeo.ecm.automation.OperationContext;
      import org.nuxeo.ecm.automation.OperationException;
      import org.nuxeo.ecm.automation.test.AutomationFeature;
      import org.nuxeo.ecm.core.api.CoreSession;
      import org.nuxeo.ecm.core.api.DocumentModel;
      import org.nuxeo.runtime.test.runner.Features;
      import org.nuxeo.runtime.test.runner.FeaturesRunner;
      import org.nuxeo.runtime.test.runner.PartialDeploy;
      import org.nuxeo.runtime.test.runner.TargetExtensions;

      @RunWith(FeaturesRunner.class)
      @Features({ AutomationFeature.class })
      // In the case of Automation, we whitelisted all the Automation extensions (which also contains Content Model)
      @PartialDeploy(bundle = "studio.extensions.YOUR_PROJECT_NAME", extensions = { TargetExtensions.Automation.class })
      public class UpdateTaxesTest {

          @Inject
          AutomationService automationService;

          @Inject
          CoreSession session;

          @Test
          public void taxesCalculationTest() throws OperationException {
              DocumentModel doc = session.createDocumentModel("/", "test-file", "Contrat");
              doc.setPropertyValue("contract:amount", 200);
              doc = session.createDocument(doc);

              OperationContext ctx = new OperationContext(session);
              ctx.setInput(doc);

              doc = (DocumentModel) automationService.run(ctx, "UpdateTaxes");
              assertEquals(11, doc.getPropertyValue("contract:taxes"));
          }
      }
      ```
1. Verify that you've changed [`YOUR_PROJECT_NAME`](#your-project-name) to the correct one.

## Testing Automation Scripting

1. Assuming that you have already created an Automation Script, `SumTaxes`, that returns the sum of all taxes...
1. Create a new test case class `./myproject-core/src/test/java/com/bigcorp/SumTaxes.java`
1. Add the following content:

      ```java
      package com.bigcorp;

      import static org.junit.Assert.assertEquals;

      import java.util.stream.IntStream;

      import javax.inject.Inject;

      import org.junit.Test;
      import org.junit.runner.RunWith;
      import org.nuxeo.ecm.automation.AutomationService;
      import org.nuxeo.ecm.automation.OperationContext;
      import org.nuxeo.ecm.automation.OperationException;
      import org.nuxeo.ecm.automation.test.AutomationFeature;
      import org.nuxeo.ecm.core.api.CoreSession;
      import org.nuxeo.ecm.core.api.DocumentModel;
      import org.nuxeo.runtime.test.runner.Features;
      import org.nuxeo.runtime.test.runner.FeaturesRunner;
      import org.nuxeo.runtime.test.runner.PartialDeploy;
      import org.nuxeo.runtime.test.runner.TargetExtensions;

      @RunWith(FeaturesRunner.class)
      @Features({ AutomationFeature.class })
      @PartialDeploy(bundle = "studio.extensions.YOUR_PROJECT_NAME", extensions = { TargetExtensions.Automation.class })
      public class SumTaxes {

          @Inject
          AutomationService automationService;

          @Inject
          CoreSession session;

          private final int TAXES = 10;

          @Test
          public void sumTaxesTest() throws OperationException {
              final int NB_DOCS = 10;
              IntStream.range(0, NB_DOCS).forEach(this::createDocument);
              OperationContext ctx = new OperationContext(session);

              // Note that the Scripting name is prefixed by "javascript.".
              int taxes = (int) automationService.run(ctx, "javascript.SumTaxes");
              assertEquals(NB_DOCS * TAXES, taxes);
          }

          protected void createDocument(int index) {
              DocumentModel doc = session.createDocumentModel("/", "test-file-" + index, "Contrat");
              doc.setPropertyValue("contract:taxes", TAXES);
              session.createDocument(doc);
          }
      }
      ```
1. Verify that you've changed [`YOUR_PROJECT_NAME`](#your-project-name) to the correct one.

## Writing Your Own TargetExtensions Class

If you need to partially deploy other contributions to a specific target, it's possible to create your own `TargetExtension` class.

1. Create a new class `./myproject-core/src/test/java/com/bigcorp/BigCorpExtension.java`
1. Add the following content:

      ```java
      package com.bigcorp;

      import org.nuxeo.runtime.test.runner.TargetExtensions;

      public class BigCorpExtension extends TargetExtensions {
          @Override
          protected void initialize() {
              // Add whitelisted targets
              addTargetExtension("com.bigcorp.component", "target");
              addTargetExtension("com.bigcorp.component", "target-2");
          }
      }
      ```
1. Add it to the list of extensions in the expected @PartialDeploy annotation like:
      ```java
      @PartialDeploy(bundle = "studio.extensions.YOUR_PROJECT_NAME", extensions = { BigCorpExtension.class, TargetExtensions.Automation.class })
      ```
1. And that's it!
