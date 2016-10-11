---
title: Unit Testing
review:
    comment: ''
    date: ''
    status: ok
labels:
    - check-versions
toc: true
confluence:
    ajs-parent-page-id: '9275231'
    ajs-parent-page-title: Working on Nuxeo sources
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Unit+Testing
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Unit+Testing'
    page_id: '950316'
    shortlink: LIAO
    shortlink_source: 'https://doc.nuxeo.com/x/LIAO'
    source_link: /display/CORG/Unit+Testing
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2016-07-29 07:56'
        message: ''
        version: '36'
    -
        author: Clément Chevalier
        date: '2016-07-28 14:51'
        message: ''
        version: '35'
    -
        author: Clément Chevalier
        date: '2016-07-28 14:50'
        message: part on the logcapturefilter
        version: '34'
    -
        author: Ronan Daniellou
        date: '2016-07-21 14:49'
        message: Adds "Mockito Feature" section
        version: '33'
    -
        author: Florent Guillaume
        date: '2016-04-13 14:33'
        message: ''
        version: '32'
    -
        author: Florent Guillaume
        date: '2016-04-13 14:32'
        message: Remove obsolete stuff about repo type.
        version: '31'
    -
        author: Bertrand Chauvin
        date: '2016-04-11 13:05'
        message: Update links
        version: '30'
    -
        author: Ronan Daniellou
        date: '2016-01-08 10:51'
        message: Typo
        version: '29'
    -
        author: Solen Guitter
        date: '2015-09-25 16:14'
        message: ''
        version: '28'
    -
        author: Solen Guitter
        date: '2015-09-25 16:14'
        message: Fix TOC
        version: '27'
    -
        author: Ronan Daniellou
        date: '2015-07-22 09:42'
        message: 'Typo: should extends -> extend'
        version: '26'
    -
        author: Julien Carsique
        date: '2014-10-24 13:54'
        message: ''
        version: '25'
    -
        author: Maxime Hilaire
        date: '2014-10-23 18:00'
        message: ''
        version: '24'
    -
        author: Maxime Hilaire
        date: '2014-10-23 17:29'
        message: ''
        version: '23'
    -
        author: Maxime Hilaire
        date: '2014-10-23 17:07'
        message: ''
        version: '22'
    -
        author: Stéphane Lacoin
        date: '2013-11-22 11:48'
        message: ''
        version: '21'
    -
        author: Solen Guitter
        date: '2013-10-15 11:08'
        message: 'Removed 5.3.1 reference, fixed typos, formatting'
        version: '20'
    -
        author: Stéphane Lacoin
        date: '2013-10-14 11:20'
        message: ''
        version: '19'
    -
        author: Stéphane Lacoin
        date: '2013-10-14 10:50'
        message: ''
        version: '18'
    -
        author: Solen Guitter
        date: '2013-07-29 11:42'
        message: Added TOC
        version: '17'
    -
        author: Julien Carsique
        date: '2013-07-23 16:24'
        message: ''
        version: '16'
    -
        author: Antoine Taillefer
        date: '2013-04-26 09:51'
        message: ''
        version: '15'
    -
        author: stan
        date: '2013-01-14 15:58'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2011-03-03 19:05'
        message: Migrated to Confluence 4.0
        version: '13'
    -
        author: Solen Guitter
        date: '2011-03-03 19:05'
        message: Reverted from v. 9
        version: '12'
    -
        author: Solen Guitter
        date: '2011-03-03 18:39'
        message: ''
        version: '11'
    -
        author: Solen Guitter
        date: '2011-03-03 18:38'
        message: ''
        version: '10'
    -
        author: Florent Guillaume
        date: '2010-12-24 14:50'
        message: ''
        version: '9'
    -
        author: Stéfane Fermigier
        date: '2010-12-21 16:13'
        message: ''
        version: '8'
    -
        author: Stéfane Fermigier
        date: '2010-12-21 16:03'
        message: ''
        version: '7'
    -
        author: Stéfane Fermigier
        date: '2010-12-21 15:54'
        message: ''
        version: '6'
    -
        author: Stéfane Fermigier
        date: '2010-12-21 15:51'
        message: ''
        version: '5'
    -
        author: Stéfane Fermigier
        date: '2010-12-21 15:50'
        message: ''
        version: '4'
    -
        author: Stéfane Fermigier
        date: '2010-12-21 15:46'
        message: ''
        version: '3'
    -
        author: Stéfane Fermigier
        date: '2010-12-21 15:32'
        message: ''
        version: '2'
    -
        author: Admin name placeholder
        date: '2010-03-01 17:58'
        message: ''
        version: '1'

---
## Overview

The Nuxeo Test Framework is based on JUnit4 and provides features like:

*   Test configuration through annotations,
*   Embedded Nuxeo Runtime,
*   [WebDriver](http://docs.seleniumhq.org/projects/webdriver/) support (and optional [Concordion](http://www.concordion.org/) support),
*   [Guice](http://code.google.com/p/google-guice/) injection of Nuxeo services and other configuration objects (injection is available only in test classes),
*   High extensibility and test configuration re-usability.

At the time of this writing, the test framework depends on JUnit 4.7, Guice 1.0 and WebDriver 0.9.7376.

To use the test framework you must launch your test using the Nuxeo JUnit4 runner: [`FeaturesRunner`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/runtime/test/runner/FeaturesRunner.html) .

Example:

&nbsp;

```
import org.nuxeo.runtime.test.runner.FeaturesRunner;

@RunWith(FeaturesRunner.class)
public class MyTest {
    ...
    @Test
    public void doSomeTest() { ... }
    ...
}

```

The [`org.nuxeo.runtime:nuxeo-runtime-test`](https://maven.nuxeo.org/nexus/index.html#nexus-search;gav%7Eorg.nuxeo.runtime%7Enuxeo-runtime-test%7E%7E%7E%7E) module is required.

&nbsp;

{{#> panel type='code' heading='Maven dependency to add in your POM'}}

```html/xml
<dependency>
  <groupId>org.nuxeo.runtime</groupId>
  <artifactId>nuxeo-runtime-test</artifactId>
  <scope>test</scope>
</dependency>

```

{{/panel}}

If you want to use core features, then you need to put a dependency to [`org.nuxeo.ecm.core:nuxeo-core-test`](https://maven.nuxeo.org/nexus/index.html#nexus-search;gav%7Eorg.nuxeo.ecm.core%7Enuxeo-core-test%7E%7E%7E%7E) .
If you want to use platform features, then you need [`org.nuxeo.ecm.platform:nuxeo-platform-test`](https://maven.nuxeo.org/nexus/index.html#nexus-search;gav%7Eorg.nuxeo.ecm.platform%7Enuxeo-platform-test%7E%7E%7E%7E) .
And if you want all Nuxeo features, then you need [`org.nuxeo.ecm.platform:nuxeo-features-test`](https://maven.nuxeo.org/nexus/index.html#nexus-search;gav%7Eorg.nuxeo.ecm.platform%7Enuxeo-features-test%7E%7E%7E%7E) .

### Test Features

To configure the way the tests are launched, the Nuxeo test framework is using the concept of test features. A test feature is a special class that is notified by the runner about the different life cycle events of the execution so that it may customize the way the test is setup or test methods are run. Test features are configurable through annotations. Each test feature is able to use its own defined annotations to configure the test. Also a feature may provide additional objects to be injected in tests using Guice.

Here are some commonly used features:

*   [`org.nuxeo.runtime.test.runner.web.WebDriverFeature`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/runtime/test/runner/web/WebDriverFeature.html)
*   [`org.nuxeo.runtime.test.runner.RuntimeFeature`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/runtime/test/runner/RuntimeFeature.html)
*   [`org.nuxeo.runtime.test.runner.JettyFeature`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/runtime/test/runner/JettyFeature.html)
*   [`org.nuxeo.ecm.core.test.CoreFeature`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/core/test/CoreFeature.html)
*   [`org.nuxeo.ecm.platform.test.PlatformFeature`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/platform/test/PlatformFeature.html)
*   [`org.nuxeo.ecm.webengine.test.WebEngineFeature`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/ecm/webengine/test/WebEngineFeature.html)
*   [`org.nuxeo.runtime.test.runner.distrib.DistributionFeature`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/runtime/test/runner/distrib/DistributionFeature.html)

See the [`org.nuxeo.runtime.test.runner.RunnerFeature`](http://community.nuxeo.com/api/nuxeo/latest/javadoc/org/nuxeo/runtime/test/runner/RunnerFeature.html) implementations for a full list.

To configure your test to use a specific test feature, you must add the `@Features` annotation on your test class and specify the feature (or the list of features you need). Example:

&nbsp;

```
@RunWith(FeaturesRunner.class)
@Features(RuntimeFeature.class)
public class MyTest {
	...
}

```

Example on using multiple features:

&nbsp;

```
@RunWith(FeaturesRunner.class)
@Features({RuntimeFeature.class, WebDriverFeature.class})
public class MyTest {
	...
}

```

The list of configuration annotations provided by features will be&nbsp;precised for each feature when available.

### Injection

Injection is available only in test classes. You cannot use injection in Nuxeo code since the Nuxeo Platform doesn't support injection yet. The FeaturesRunner instance is provided by default through Guice injection so in your test case you can access the runner in that way:

```
@RunWith(FeaturesRunner.class)
public class MyTest {
    @Inject
    FeaturesRunner runner;
    ...
    @Test
    public void doSomeTest() { ... }
    ...
}

```

Features may provide more injectable objects. The complete list of these objects will be precised for each feature when available.

## Features

Test features may require other test features. This means that using a feature will automatically include all the required features. So, it's redundant to specify features that are anyway included by other features specified on your test. For example the features declaration in the following code is useless since the `CoreFeature` requires the `RuntimeFeature` (and thus includes it automatically).

```
@RunWith(FeaturesRunner.class)
@Features({RuntimeFeature.class, CoreFeature.class})
public class MyTest {
	...
}

```

So, the correct usage of the `CoreFeature` is:

```
@RunWith(FeaturesRunner.class)
@Features(CoreFeature.class)
public class MyTest {
	...
}

```

As said before each feature provides its own configuration annotations and a list of services or objects available through Guice injection.

In the next sections we will describe each feature and specify how it can be used, which are the annotations provided provided for configuration and which are the injectable objects provided by the feature.

### WebDriver Feature

The main purpose of this feature is to start a WebDriver before the tests are launched and stop it at the end of the tests.

#### Requirements

The WebDriver feature is a top level feature so it is not requiring other features.

#### Configuration

*   `**@Browser**` - to configure the WebDriver instance.

    *   BrowserFamily type - the driver type. Can be one of: FIREFOX, IE, CHROME, HTML_UNIT, HTML_UNIT_JS.
    *   Class factory - optional driver factory class to create custom drivers.

*   `**@HomePage**` - to specify the home page (the entry point in the site to test)
    *   Class page - the page to use as the home page
    *   String url - the URL to be bound to the home page (the site home URL)

#### Injectable Objects

*   The **WebDriver** instance.
*   The **Configuration** instance used to configure WebDriver. Can be used to introspect WebDriverFeature configuration.
*   The **WebPage** instance of the home page. Must be used to get the entry point to the site.

#### Usage

WebDriver should be used in conjunction with Page Provider pattern. Below you can see a simple example of testing the Google search. First, we need to create a page object corresponding to the Google home:

```
public class GoogleHomePage extends WebPage {
    @FindBy(how = How.NAME, using = "q")
    private WebElement search;
    public SearchResultPage search(String text) {
        search.clear();
        search.sendKeys(text);
        search.submit();
        return getPage(SearchResultPage.class);
    }
}

```

When using the page factory pattern you should extend the abstract WebPage provided by the Nuxeo test framework which already has the driver instance inject inside. The WebPage abstraction is also providing helper methods to quickly access WebDriver find methods (you also have a "wait until element is found" mechanism to block the test until the page is loaded and the given element is found). From a WebPage object you can instantiate other page objects by calling `getPage(MyPage.class)`. Pages instantiated this way will be injected using the Guice injector of the runner. Note that pages retrieved this way are cached so you don't need to cache them in a local variable in the test method.

When using the page factory pattern you must expose your site's functionality through page objects. The page objects are not the equivalent of a real web page. They should be used to map services offered by a WebPage and not the entire web page. For example you can design your home page to allow access to other standard 'sections' (i.e. pages) of your application like the log-in/log-out functionality, the menu etc. So typically a home page will provide methods to access sub pages of your WEB application and/or global functionality existing on the home page.

In our example the home page is providing a way to do a search.

{{#> callout type='note' }}

**W**hen testing web applications you **must** put all the details of web page mapping (like accessing elements in the DOM, doing clicks, filling forms etc.) in your web page implementation. You must not directly access these details from the test itself. This technique ensures that when you refactor a functionality of your web site you should only update the corresponding web page in your tests and not all the tests classes.

{{/callout}}

Now that we defined our home page, let's define the search result page that is returned by the search method. This page give access to the search result.

```
public class SearchResultPage extends WebPage {
    @FindBy(how = How.CLASS_NAME, using = "l")
    private WebElement firstLink;
    public String getFirstResult() {
        return firstLink.getText();
    }
}

```

The search result page provides a method that returns the first link text in the search result.

Now we can write our Google search test like this:

```
@RunWith(FeaturesRunner.class)
@Features(WebDriverFeature.class)
@HomePage(type=MyHomePage.class, url="http://www.google.com")
@Browser(type=BrowserFamily.HTML_UNIT)
public class WebTest {
    @Inject
    protected MyHomePage home;

    @Test
    public void testSearch() throws Exception {
        SearchResultPage result = home.search("test");
        Assert.assertNotNull(result.getFirstResult());
    }
}

```

By using WebDriver Feature in conjunction with WebEngineFeature you can test Nuxeo WebEngine modules that are deployed by the test framework without the need to point to an external URL. We will see this later in WebEngine Feature usage.

### Runtime Feature

This is one of the most useful features when testing Nuxeo applications. The main purpose of this feature is to start a Nuxeo Test Server before the tests are launched and stop it at the end of the tests. So all the tests launched by the test unit will run inside the same instance of Nuxeo Runtime.

#### Requirements

The Runtime feature is a top level feature so it is not requiring other features. After starting the server all runtime bundles are deployed by the feature.

#### Configuration

*   **@Deploy**&nbsp;- deploys a bundle (or an XML component from the given bundle) into the running server.
    *   String[] value - the path of the bundle (or contribution). The path format is "`symbolicName:path`" where `symbolicName` is the bundle symbolic name and the optional path is a path relative to the bundle root of the XML component to deploy. If no path is specified the entire bundle will be deployed.
        Example: "`org.nuxeo.runtime`", "`org.nuxeo.runtime:OSGI-INF/my-component.xml`" etc.
*   **@LocalDeploy**&nbsp;- deploys a test XML component as part of an existing bundle into the running server. This is useful to deploy test contributions that are not part from a real bundle.
    *   String[] value - same as for the `@Deploy` annotation. The difference is that the `symbolicName` will be the one of the target bundle, and the path is required and should point to a test resource.

#### Injectable Objects

All Nuxeo services deployed using `@Deploy` and `@LocalDeploy` annotations will be available through Guice injector.

#### Usage

Here is an example on how to test for the presence of a Nuxeo service:

```
@RunWith(FeaturesRunner.class)
@Features(RuntimeFeature.class)
public class ServiceTest {
    @Inject
    EventService eventService;

    @Test
    public void testService() throws Exception {
        Assert.assertNotNull(eventService);
    }
}

```

Here is another example on how to use the `@Deploy` annotations to deploy additional bundles and components:

```
@RunWith(FeaturesRunner.class)
@Features(RuntimeFeature.class)
@Deploy("org.nuxeo.ecm.core.schema")
@LocalDeploy("org.nuxeo.rutime:OSGI-INF/my-test-contribution.xml")
public class DeployTest {
    @Inject
    SchemaManager schemas;

    @Test
    public void testService() throws Exception {
        Assert.assertNotNull(schemas);
    }
}

```

The `@Deploy` annotations will install the core schema bundle into the running server and the `@LocalDeploy` will install the test resource located at `OSGI-INF/my-test-contribution.xml` (the current class loader is used to locate the resource) into the existing `nuxeo-runtime` bundle.

{{#> callout type='note' }}

You must never deploy bundles using the RuntimeHarness API. You must always use `@Deploy` annotations to do this. However this can be useful when writing custom features but use it with care.

{{/callout}}

### Jetty Feature

The main purpose of this feature is to start a Jetty server embedded in Nuxeo Test Server before the tests are launched and stop it at the end of the tests. This feature extends the Runtime feature and adds the `nuxeo-runtime-jetty-adapter` to the deployments.

#### Requirements

The Jetty feature requires Runtime Feature

#### Configuration

*   `@Jetty` - configures the Jetty server
    *   String host default "localhost" - the host to bind to.
    *   int port default 8080 - the port to bind to.
    *   String config - optional attribute to specify a custom jetty.xml configuration file.
    *   boolean propagateNaming default false - allow runtime fixture get access to the web-app naming context

If no custom configuration is specified the default one will be used (that also contains data-source JNDI bindings for various Nuxeo services).

#### Injectable Objects

None.

#### Usage

Starts Nuxeo server + embedded Jetty on port 9090:

```
@RunWith(FeaturesRunner.class)
@Features(JettyFeature.class)
@Jetty(port=9090)
public class JettyTest {
    @Inject
    org.mortbay.jetty.Server server;

    @Test
    public void jettyComponentIsDeployed() throws Exception {
        assertNotNull(server);
    }

}

```

You may also want your request being enrolled in transaction. Then you should use the Jetty Transactional Feature instead. You should in that case instruct the JVM to use Nuxeo's naming factory by adding the following `src/test/resources/jndi.properties` file in your project.

```
java.naming.factory.initial=org.nuxeo.runtime.jtajca.NamingContextFactory
java.naming.factory.url.pkgs=org.nuxeo.runtime.jtajca
```

### Transactional Feature

If you want your tests to be ran in a transaction context, you should use the Transactional Feature.

#### Requirements

The Transactional Feature is included by the Core Feature so you should only need to use it explicitly if you don't use Core Feature.

&nbsp;

#### Configuration

*   `@TransactionalConfig`

    *   boolean autostart true - injects a new transaction before executing each test

### Core Feature

This feature deploys the required Nuxeo core bundles and resources and configures a repository to be used by tests.

#### Requirements

The feature requires Runtime Feature and Transactional Feature.

#### Configuration

*   `@RepositoryConfig` - configures a Nuxeo Repository
    *   Class init - a `RepositoryInit` class to be used to initialize the repository content.
    *   Granularity cleanup - the scope of the initialization done by the init class. Can be one of CLASS or METHOD. If METHOD is used the intialization will be done before each test method call. The default is CLASS but this may change in the future so you should always be explicit.

#### Injectable Objects

*   `StorageConfiguration` - the repository storage configuration. This describes the repository capabilities.

#### Usage

```
@RunWith(FeaturesRunner.class)
@Features(CoreFeature.class)
@RepositoryConfig(init = DefaultRepositoryInit.class, cleanup = Granularity.CLASS)
public class SimpleSession {
    @Inject
    CoreSession session;

    @Test
    public void theSessionIsUsable() throws Exception {
        assertNotNull(session);
        assertNotNull(session.getDocument(new PathRef("/default-domain")));
    }
}

```

This will start a nuxeo repository and will create a CoreSession (using the "Administrator" user) and will initialize the repository using the DefaultRepositoryInit initializer only once (CLASS level) before running the test.

<span style="font-size: 16.0px;">Platform Feature</span>

This feature extends the Core Feature and adds deployment of basic Nuxeo services like directories, user manager etc.

#### Requirements

The feature requires Core Feature.

#### Configuration

None

#### Injectable Objects

None

### WebEngine Feature

This feature extends the Platform Feature and adds deployment of WebEngine core bundles (including Administration module). Also it is adding the WebDriver and Jetty features. You should use this feature when testing WebEngine UI.

#### Requirements

The feature requires Platform Feature, WebDriver Feature and Jetty Feature

This feature may not work directly from Eclipse since it requires on its classpath the final WebEngine JARs - as they are built with Maven - to have generated type definitions in the META-INF directory. This will be fixed later in WebEngine.

#### Configuration

None

#### Injectable Objects

None

#### Usage

```
@RunWith(FeaturesRunner.class)
@Features(WebEngineFeature.class)
@Browser(type=BrowserFamily.FIREFOX)
@HomePage(type=WebEngineHomePage.class, url="http://localhost:8082")
@Jetty(port=8082)
public class WebEngineTest {
    @Inject
    private WebEngineHomePage home;

    @Test
    public void iCanRunWebEngine() throws Exception {
        LoginPage login = home.getLoginPage();
        assertTrue(home.hasModule("Admin"));
        assertFalse(login.isAuthenticated());
        login.ensureLogin("Administrator", "Administrator");
        assertTrue(login.isAuthenticated());
        AdminModulePage admin = home.getModulePage("Admin", AdminModulePage.class);        
        DocumentPage doc = admin.getDocumentPage("default-domain");
        Assert.assertEquals("Default domain", doc.getTitle());
    }
}

```

This test will start a nuxeo with Jetty enabled at port 8082 - so WebEngine root will be located at [http://localhost:8082](http://localhost:8082). The `@HomePage` used by WebDriver feature will point to the embeded WebEngine root.

You can see that this test respect the page factory pattern we discussed above: the web mapping details are done inside the web page implementations. The test is not aware about the page structure - it is only using well named methods to access different fucntionality.

If you want to have a look on all these classes you can find this test in nuxeo-features-test

### Automation Feature

A simple feature that extends Platform Feature and adds Nuxeo Automation bundles (`org.nuxeo.ecm.automation.core` and `org.nuxeo.ecm.automation.feature`).

### Dummy Client Login Feature

A feature to login any username without any check against usermanager. Useful for low levels unit tests such as in directory, wherer it's not possible to add a dependency on usermanager or for test that don't setup directories. Then each authenticated users will be available as usual in the stack&nbsp;`ClientLoginModule.getCurrentPrincipal();`

By default only the group `Everyone` is added to each users and it is not possible to add other groups.

To use it, just add the following dependency :&nbsp;

```
<dependency>
  <groupId>org.nuxeo.ecm.platform</groupId>
  <artifactId>nuxeo-platform-login</artifactId>
  <type>test-jar</type>
  <scope>test</scope>
</dependency>
```

#### Requirements

Add the following dependency to use it :&nbsp;

```
<dependency>
  <groupId>org.nuxeo.ecm.core</groupId>
  <artifactId>nuxeo-core</artifactId>
  <scope>test</scope>
</dependency>
<dependency>
  <groupId>org.nuxeo.ecm.platform</groupId>
  <artifactId>nuxeo-platform-directory-types-contrib</artifactId>
  <scope>test</scope>
</dependency>
<dependency>
  <groupId>org.nuxeo.ecm.platform</groupId>
  <artifactId>nuxeo-platform-login</artifactId>
  <scope>test</scope>
</dependency>
```

&nbsp;

#### Configuration

None

#### Injectable Objects

None

#### Usage

```java
@RunWith(FeaturesRunner.class)
@Features(ClientLoginFeature.class)
public class TestDummyLogInClientModule {
    @Inject
    ClientLoginFeature login;

    @Test
    public void canGetCurrentDummyPrincipal() throws LoginException {
        Principal dummyPrincipal = login.loginAs("dummyName");
        NuxeoPrincipal currentDummy = ClientLoginModule.getCurrentPrincipal();
        Assert.assertEquals(dummyPrincipal.getName(), currentDummy.getName());
    }
}
```

### LogCapture Feature

A feature to make assertion on Log4j output.

A Log4j appender is&nbsp;initialized&nbsp;and configured with the running Log4j instance. When any Log4j log method is called, the appender captures the logs if the logs match the configured filter. It's then possible to get the captured logs or assert if there is any captured log.

#### Requirements

None

#### Configuration

*   `@LogCaptureFeature.FilterOn` - uses and configures the default filter. There are two parameters, `logLevel`, and `loggerName`. You can use either both or only one of them.
*   `@LogCaptureFeature.FilterWith`&nbsp;- configures the filter the logs has to match to be part of the results.

**Injectable Objects**

*   `LogCaptureFeature.Result logCaptureResult` - the result containing the captured logs.

**Usage**

```java
@RunWith(FeaturesRunner.class)
@Features({ CoreFeature.class, LogCaptureFeature.class })
@Deploy({ "org.nuxeo.ecm.automation.core" })
public class TestRestoreInputFromScriptAndLogOperation {
    @Inject
    AutomationService service;
    @Inject
    CoreSession session;

    @Inject
    LogCaptureFeature.Result logCaptureResult;

    public static class MyLogFilter implements LogCaptureFeature.Filter {
        @Override
        public boolean accept(LoggingEvent event) {
            // Will add to the result, only the logs that has the ERROR level and "loggerName" category
            if (!event.getLevel().equals(Level.ERROR)) {
                return false;
            }
            if (!event.getLoggerName().equals("loggerName")) {
                return false;
            }
            return true;
        }
    }

    @Test
	@LogCaptureFeature.FilterWith(TestRestoreInputFromScriptAndLogOperation.MyLogFilter.class)
    public void testRestoreInput() throws Exception {
        DocumentModel doc = session.createDocumentModel("/", "test", "File");
        doc.setPropertyValue("dc:title", "test");
        doc = session.createDocument(doc);
        OperationContext ctx = new OperationContext(session);
        ctx.setInput(doc);
        OperationChain chain = new OperationChain("testSetObjectInput");
        chain.add(FetchContextDocument.ID);
        chain.add(SetInputAsVar.ID).set("name", "test");
        chain.add(FetchDocument.ID).set("value", "/");
        chain.add(RestoreDocumentInputFromScript.ID).set("script", "Context[\"test\"]");
        chain.add(LogOperation.ID).set("category", "loggerName").set("message",
                "expr:Input title @{This.title}. next id : @{Fn.getNextId(\"pouet\")}").set(
                "level", "error");
        DocumentModel returnedDoc = (DocumentModel) service.run(ctx, chain);
        Assert.assertEquals("/test", returnedDoc.getPathAsString());

        // making sure that the log operation is using the ERROR level and is in the "loggerName" category
        logCaptureResult.assertHasEvent();
    }

	@Test
    @LogCaptureFeature.FilterOn(logLevel = "ERROR", loggerName = "loggerName")
    public void testLogLevelAndLoggerName() throws NoLogCaptureFilterException{
      	DocumentModel doc = session.createDocumentModel("/", "test", "File");
        doc.setPropertyValue("dc:title", "test");
        doc = session.createDocument(doc);
        OperationContext ctx = new OperationContext(session);
        ctx.setInput(doc);
        OperationChain chain = new OperationChain("testSetObjectInput");
        chain.add(FetchContextDocument.ID);
        chain.add(SetInputAsVar.ID).set("name", "test");
        chain.add(FetchDocument.ID).set("value", "/");
        chain.add(RestoreDocumentInputFromScript.ID).set("script", "Context[\"test\"]");
        chain.add(LogOperation.ID).set("category", "loggerName").set("message",
                "expr:Input title @{This.title}. next id : @{Fn.getNextId(\"pouet\")}").set(
                "level", "error");
        DocumentModel returnedDoc = (DocumentModel) service.run(ctx, chain);
        Assert.assertEquals("/test", returnedDoc.getPathAsString());

        // making sure that the log operation is using the ERROR level and is in the "loggerName" category
        logCaptureResult.assertHasEvent();
    }
```

### Theme Feature

A simple feature that extends WebEngine Feature and adds Nuxeo Theme deployment.

#### Requirements

The feature requires WebEngine Feature.

#### Configuration

None

#### Injectable Objects

None

### Nuxeo Distribution Feature

This feature is still in development so it is not usable for now.
A feature that replace the RuntimeFeature to run tests on real Nuxeo distributions. This feature is using nuxeo-distribution-tools to build and launch a Nuxeo distribution.

#### Requirements

This is a top level feature.

#### Configuration

*   `@NuxeoDistribution` - the distribution configuration
    *   String profile - the profile name. Example: core-1.6.1-SNAPSHOT, core-1.6.0 etc.
    *   String config - custom profile configuration - to be used to specify custom profiles.
    *   String host - the host to listen to.
    *   String port - the HTTP port to bind to.
    *   boolean useCache - whether ot not to cache the build. The default is true.
    *   boolean offline - puts Maven offline.
    *   String updatePolicy - snapshot update policy to be used by Maven. Default is "daily"

#### Injectable Objects

All deployed Nuxeo services.

#### Usage

This can be used for example to decorate existing test and launch them in an integration environment over a real Nuxeo distribution.

```
@RunWith(FeaturesRunner.class)
@Features(DistributionFeature.class)
@NuxeoDistribution(profile=core-5.3.0)
public class NuxeoSuiteTest extends RepositoryTest {
}       

```

This test decorates an existing test (that may have different feature configuration to be run by developer). The `DistributionFeature` will remove the original features and configurations and will run the test under the integration test configuration.

### Mockito Feature

You can access services in your test by:

*   calling Framework.getService(MyService.class)
*   Use Guice @Inject annotation

This feature let you override a service, and replace it by a mock.

#### Requirements

None.

#### Configuration

*   Use the `MockitoFeature`.
*   Use `@Mock` annotation on yout test class attribute, so that the Mockito initialiser does its job.
*   Use `@RuntimeService` annotation (org.nuxeo.runtime.mockito) on the same test class attribute (injects a mock in that field and binds it to the the service manager).

#### Injectable Objects

All deployed Nuxeo services.

#### Usage

In the following example we replace the `Directory Service` by a mock.

```java
@RunWith(FeaturesRunner.class)
@Features({ MockitoFeature.class })
public class ProjectInitializerTest {
    @Mock
    @RuntimeService
    DirectoryService dirServiceMock;
```

## Creating Custom Features

When you are writing generic services that you export to other bundles you may want to provide a specific feature for you services to help others testing code depending on your service. In most cases the feature will only extend an existing feature by adding new deployments. This is the case for example of the Platform Feature (not that a feature must implement the RunnerFeature interface - in our case we extend SimpleFeature which is an empty feature):

```
@Deploy({
    "org.nuxeo.ecm.platform.api",
    "org.nuxeo.ecm.platform.content.template",
    "org.nuxeo.ecm.platform.dublincore",
    "org.nuxeo.ecm.directory",
    "org.nuxeo.ecm.directory.sql",
    "org.nuxeo.ecm.platform.usermanager.api",
    "org.nuxeo.ecm.platform.usermanager",
    "org.nuxeo.ecm.platform.test:test-usermanagerimpl/schemas-config.xml",
    "org.nuxeo.ecm.platform.test:test-usermanagerimpl/directory-config.xml"
})
@Features(CoreFeature.class)
public class PlatformFeature extends SimpleFeature {
}

```

To list the required you must use the `@Features` annotation on your own feature. You noticed that `@Deploy` annotation is supported on features too (this is not the case of other annotations - in fact it depends on how the feature that provide the annotation is scanning for them).

If you need more control you can refer to sources and/or existing feature implementations. Below you can find some typical use case you may need when implementing a feature:

### Custom Configuration Annotations and Guice Injection Providers

```
public class MyFeature extends SimpleFeature {
    protected MyConfiguration config = null;
    // create config. object from annotations
    public void initialize(FeaturesRunner runner) throws Exception {
        Class<?> clazz = runner.getTargetTestClass();
        MyAnnotation anno = FeaturesRunner.getScanner().getFirstAnnotation(clazz, MyAnnotation.class);
        if (anno == null) { // create an annotation using default values
            anno = Defaults.of(MyAnnotation.class);
        }
        config = createConfigFromAnnotation(anno);
    }
    // configure Guice bindings
    public void configure(FeaturesRunner runner, Binder binder) {
        binder.bind(MyConfiguration.class).toInstance(config);
    }
}

```

Usually annotations should be collected in the initialize method. The configure method is called after the start method and before the Guice injector is created.

### Dynamic Bundle Deployment

```
@Features(RuntimeFeature.class)
public class MyFeature extends SimpleFeature {
    protected MyConfiguration config = null;
    // create config. object from annotations
    public void initialize(FeaturesRunner runner) throws Exception {
        config = createConfigFromAnnotation();
    }

    @Override
    public void start(FeaturesRunner runner) throws Exception {
        if (config.needToDeployBundleX) {
            runner.getFeature(RuntimeFeature.class).getHarness().deployBundle("bundleX");
        } else {
            runner.getFeature(RuntimeFeature.class).getHarness().deployBundle("bundleY");
        }
    }
}

```

As you see you must add the requirement on the RuntimeFeature since you need to access to bundle deployment which is provided by this feature.

Even if it is possible - you must not access the underlying Runtime Harness directly from the test - this will make your test non portable. You will not be able to use it with Distribution Feature for example. The Runtime Harness is safe to be accessed only from features that depends on Runtime feature.

### Patch Nuxeo Server Home Directory

```
@Features(RuntimeFeature.class)
public class MyFeature extends SimpleFeature implements WorkingDirectoryConfigurator {
    // add a work directory configurator on the harness
    public void initialize(FeaturesRunner runner) throws Exception {
        runner.getFeature(RuntimeFeature.class).getHarness().addWorkingDirectoryConfigurator(this);        
    }

    public void configure(RuntimeHarness harness, File workingDir) throws IOException {
        copyMyFilesTo(workingDirectory);
    }
}

```

Again, this feature is depending on the Runtime Feature. It is adding a working directory configurator in the initialization part which will be called when the framework is started and before bundles are deployed. No need to unregister the configurator.
