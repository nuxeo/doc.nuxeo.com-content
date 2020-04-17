---
title: Testing a Datasource
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '950316'
    ajs-parent-page-title: Unit Testing
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Testing+a+Datasource
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Testing+a+Datasource'
    page_id: '6029796'
    shortlink: 5AFc
    shortlink_source: 'https://doc.nuxeo.com/x/5AFc'
    source_link: /display/CORG/Testing+a+Datasource
tree_item_index: 200
history:
    -
        author: Bertrand Chauvin
        date: '2015-09-29 12:28'
        message: emoved link - does not match code in do
        version: '16'
    -
        author: Bertrand Chauvin
        date: '2015-09-29 12:27'
        message: Updated link
        version: '15'
    -
        author: Solen Guitter
        date: '2015-09-29 12:21'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2015-09-29 12:20'
        message: Fix TOC
        version: '13'
    -
        author: Solen Guitter
        date: '2015-04-23 08:14'
        message: ''
        version: '12'
    -
        author: Florent Guillaume
        date: '2015-04-22 12:35'
        message: ''
        version: '11'
    -
        author: Julien Carsique
        date: '2013-02-01 18:11'
        message: ''
        version: '10'
    -
        author: Julien Carsique
        date: '2013-02-01 18:06'
        message: ''
        version: '9'
    -
        author: Julien Carsique
        date: '2013-02-01 18:04'
        message: update datasource test sample following 5.6 changes
        version: '8'
    -
        author: Julien Carsique
        date: '2013-02-01 16:08'
        message: ''
        version: '7'
    -
        author: Julien Carsique
        date: '2013-02-01 11:57'
        message: ''
        version: '6'
    -
        author: Thierry Martins
        date: '2012-01-24 16:48'
        message: Migrated to Confluence 4.0
        version: '5'
    -
        author: Thierry Martins
        date: '2012-01-24 16:48'
        message: ''
        version: '4'
    -
        author: Florent Guillaume
        date: '2011-03-08 19:37'
        message: ''
        version: '3'
    -
        author: Florent Guillaume
        date: '2011-03-07 14:37'
        message: ''
        version: '2'
    -
        author: Florent Guillaume
        date: '2011-03-07 14:35'
        message: ''
        version: '1'

---
To use a datasource from a unit test, you need to set up the datasource from the unit test itself.

The `nuxeo-runtime-datasource` bundle provides some framework for you to register datasource in JNDI through Nuxeo contributions instead of relying on a container like Tomcat to do it for you.

## Depending on Nuxeo-Runtime-Datasource and a Few Others

In your POM, add dependencies to:

*   org.nuxeo.runtime:nuxeo-runtime-datasource
*   org.nuxeo.runtime:nuxeo-runtime-test
*   org.nuxeo.runtime:nuxeo-runtime-jtajca
*   org.nuxeo.ecm.core:nuxeo-core-storage-sql-test

## Contributing a Datasource Definition

You first need to define your datasource. For instance in the file `OSGI-INF/datasource-contrib.xml` add:

```xml
<?xml version="1.0"?>
<component name="org.nuxeo.project.sample.datasource.test">
  <extension target="org.nuxeo.runtime.datasource" point="datasources">
    <datasource name="jdbc/foo" driverClassName="org.h2.Driver"
      maxActive="20" maxIdle="5">
      <property name="url">jdbc:h2:${ds.test.home}/db</property>
    </datasource>
  </extension>
</component>

```

## Deploying the Datasource from the Unit Test Setup

As our example datasource contains a variable for the storage path itself, we initialize this variable from the test code before reading the contribution. Of course you could hardcode things if you prefer.

### <span style="line-height: 1.5625;">Using JUnit4 and the Nuxeo</span> FeaturesRunner

You may want to use a Feature. See [DatasourceFeature.java](https://github.com/nuxeo/nuxeo-sample-project/blob/master/src/test/java/org/nuxeo/ecm/sample/DatasourceFeature.java).

```
import java.io.File;
import org.apache.commons.io.FileUtils;
import org.nuxeo.ecm.core.test.CoreFeature;
import org.nuxeo.ecm.core.test.TransactionalFeature;
import org.nuxeo.runtime.test.runner.Deploy;
import org.nuxeo.runtime.test.runner.Features;
import org.nuxeo.runtime.test.runner.FeaturesRunner;
import org.nuxeo.runtime.test.runner.LocalDeploy;
import org.nuxeo.runtime.test.runner.SimpleFeature;

@Features({ TransactionalFeature.class, CoreFeature.class })
@Deploy({ "org.nuxeo.runtime.datasource", "org.nuxeo.project.sample.tests" })
@LocalDeploy("org.nuxeo.project.sample.tests:OSGI-INF/datasource-contrib.xml")
public class DatasourceFeature extends SimpleFeature {

    private static final String DIRECTORY = "target/test/h2";

    private static final String PROP_NAME = "ds.test.home";

    private File dir;

    private String oldValue;

    @Override
    public void initialize(FeaturesRunner runner) throws Exception {
        dir = new File(DIRECTORY);
        FileUtils.deleteQuietly(dir);
        dir.mkdirs();
        oldValue = System.setProperty(PROP_NAME, dir.getPath());
        super.initialize(runner);
    }

    @Override
    public void stop(FeaturesRunner runner) throws Exception {
        FileUtils.deleteQuietly(dir);
        if (oldValue != null) {
            System.setProperty(PROP_NAME, oldValue);
        }
        super.stop(runner);
    }
}
```

### Using the Old SQLRepositoryTestCase

{{#> callout type='note' }}

This is not supported anymore since Nuxeo 7.3.

{{/callout}}

```
import java.io.File;
import java.sql.Connection;
import javax.sql.DataSource;
import org.apache.commons.io.FileUtils;
import org.junit.Test;
import org.nuxeo.ecm.core.storage.sql.SQLRepositoryTestCase;
import org.nuxeo.runtime.api.DataSourceHelper;
import org.nuxeo.runtime.api.Framework;
import org.nuxeo.runtime.jtajca.NuxeoContainer;

public class TestDatasourceJUnit3 extends SQLRepositoryTestCase {
    private static final String DIRECTORY = "target/test/h2";

    private static final String PROP_NAME = "ds.test.home";

    @Override
    public void setUp() throws Exception {
        super.setUp();
        // Required since 5.6
        NuxeoContainer.installNaming();
        File dir = new File(DIRECTORY);
        FileUtils.deleteQuietly(dir);
        dir.mkdirs();
        Framework.getProperties().put(PROP_NAME, dir.getPath());
        deployBundle("org.nuxeo.runtime.datasource");
        deployContrib("org.nuxeo.project.sample.tests",
                "OSGI-INF/datasource-contrib.xml");
        // Required since 5.7
        fireFrameworkStarted();
    }

    @Override
    public void tearDown() throws Exception {
        // Required since 5.6
        if (NuxeoContainer.isInstalled()) {
            NuxeoContainer.uninstallNaming();
        }
        super.tearDown();
    }
}
```

### Using the Datasource in the Test

See [TestDatasource.java](https://github.com/nuxeo/nuxeo-sample-project/blob/master/src/test/java/org/nuxeo/ecm/sample/TestDatasource.java).

```
@Test
public void test() throws Exception {
    DataSource ds = DataSourceHelper.getDataSource("foo");
    Connection conn = ds.getConnection();
    try {
        // ... use the connection ...
    } finally {
        conn.close();
    }
}

```
