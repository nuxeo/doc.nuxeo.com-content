---
title: Secure Coding
review:
    comment: ''
    date: ''
    status: ok
toc: true
confluence:
    ajs-parent-page-id: '4685848'
    ajs-parent-page-title: Coding and Design Guidelines
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Secure+Coding
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Secure+Coding'
    page_id: '26314463'
    shortlink: 34aRAQ
    shortlink_source: 'https://doc.nuxeo.com/x/34aRAQ'
    source_link: /display/CORG/Secure+Coding
tree_item_index: 500
history:
    -
        author: Florent Guillaume
        date: '2015-08-24 09:24'
        message: ''
        version: '12'
    -
        author: Manon Lumeau
        date: '2015-08-18 09:55'
        message: ''
        version: '11'
    -
        author: Julien Carsique
        date: '2015-08-17 17:28'
        message: ''
        version: '10'
    -
        author: Julien Carsique
        date: '2015-08-17 17:26'
        message: ''
        version: '9'
    -
        author: Julien Carsique
        date: '2015-08-17 16:25'
        message: ''
        version: '8'
    -
        author: Julien Carsique
        date: '2015-08-17 16:20'
        message: ''
        version: '7'
    -
        author: Julien Carsique
        date: '2015-08-17 16:17'
        message: ''
        version: '6'
    -
        author: Julien Carsique
        date: '2015-08-17 16:16'
        message: ''
        version: '5'
    -
        author: Florent Guillaume
        date: '2015-08-17 14:38'
        message: ''
        version: '4'
    -
        author: Florent Guillaume
        date: '2015-08-17 14:35'
        message: ''
        version: '3'
    -
        author: Florent Guillaume
        date: '2015-08-17 14:21'
        message: ''
        version: '2'
    -
        author: Florent Guillaume
        date: '2015-08-17 13:32'
        message: ''
        version: '1'

---
The following process and rules help to ensure that no security problem is introduced on code change. Moreover, the goal is to continuously improve the quality, including the security.

## Preamble

The coding workflow itself provides a Security Code Review post hoc:

*   Code is open-source and so it is reviewed by the community. Especially, Nuxeo source code is often used by security companies and university teams to run against their security analysis tools who then submit us the potential vulnerabilities they may find.
*   Security Hotfixes: there is no absolutely secured code but known vulnerabilities and weaknesses: when a new one is discovered, it is immediately fixed as an emergency, customers are warned about it, then the fix is made available for all users through a public Security Hotfix.
*   LTS/FT release cycle + code freeze durations: code lives for a long time in the Fast Track cycle (and for a short while in "code freeze" within Fast Track) so the Nuxeo and community developers should have enough spare time to properly review it and raise issues.

Automatic Code Review:

- [https://sonarcloud.io/organizations/nuxeo/projects](https://sonarcloud.io/organizations/nuxeo/projects): The SonarQube Nuxeo projects are configured with Nuxeo and FindBugs rules, including security checks (see [sonar-to-identify-security-vulnerabilities](http://www.sonarqube.org/sonar-to-identify-security-vulnerabilities/) and [SONAR/Security related rules](http://docs.sonarqube.org/display/SONAR/Security-related+rules)).
- [https://www.codacy.com/](https://www.codacy.com/app/juliencarsique_548/nuxeo/dashboard): That tool especially looks at JavaScript and CSS code (but also Python and PHP). Since the current "security level" is at 100%: no regression is allowed.

Since the security also depends on the underlying third-party libraries, they must be kept consistent and up-to-date:

*   All Nuxeo code shares the same &ldquo;dependency management&rdquo; to ensure that we use the same library versions everywhere.
*   Third-party libraries available updates are watched with [http://versioneye.com](http://versioneye.com) and [http://www.mojohaus.org/versions-maven-plugin/](http://www.mojohaus.org/versions-maven-plugin/), reported by [nuxeo-master-versions QA job](https://qa.nuxeo.org/jenkins/job/nuxeo-master-versions/lastSuccessfulBuild/console).
*   Third-party release notes are regularly reviewed to point at security updates and apply them.
*   Nuxeo subscribes to its third-party libraries notifications (usually user-mailing-lists) and receive dedicated alerts

The current documentation provides a Security Code Review beforehand:

*   The developers are encouraged to use FindBugs.
*   The following best practices are not only recommended but **required** and the expected overall quality is high: you must strictly abide by those Coding Rules.

## Java Code

### No Arbitrary File Read / Write

All calls to `new File` must be audited to make sure that there is no possibility of pointing to a random or user-controlled file. Actually there is rarely a reason to use `new File`; if needed for temporary files then see the next section.

#### Temporary Files

Temporary files should be created using `File.createTempFile` or `Files.createTempFile` with the default temporary directory and a prefix that is not controlled by user input.&nbsp;

#### ZIP Files

When unzipping a file hierarchy from a user-supplied ZIP file to a temporary filesystem location, the `ZipEntry`'s name must not be trusted to contain valid characters as an attacker is able to rewrite it. In particular the name must be checked for path-traversal components like `..` or `/`:

{{#> panel type='code' heading='Sanitizing ZIP Files'}}

```java
public void extract(ZipInputStream in, ZipEntry entry, File base) {
    String name = entry.getName();
    if (name.contains("..") || name.contains("/") || name.contains("\\")) {
        log.error("SECURITY: ZIP entry contains invalid name: " + name);
        return;
    }
    if (!entry.isDirectory()) {
        File file = new File(base, entry.getName());
        ...
    }
}

```

{{/panel}}

### No XML External Entity Processing

[XML External Entity Processing](https://www.owasp.org/index.php/XML_External_Entity_%28XXE%29_Processing) (XXE) is a class of security issues due to invalid processing of external entities in user-supplied XML files, where the entities may access invalid external resources.

The recommendations for Java code detailed in the [above page](https://www.owasp.org/index.php/XML_External_Entity_%28XXE%29_Processing) must be followed. In particular:

{{#> panel type='code' heading='DocumentBuilder Protection'}}

```java
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;

DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance()
documentBuilderFactory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
DocumentBuilder documentBuilder = documentBuilderFactory.newDocumentBuilder();
Document document = documentBuilder.newDocument();
```

{{/panel}}{{#> panel type='code' heading='SAXParser Protection'}}

```java
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import org.xml.sax.XMLReader;

SAXParserFactory saxParserFactory = SAXParserFactory.newInstance();
saxParserFactory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
SAXParser saxParser = saxParserFactory.newSAXParser();
XMLReader xmlReader = saxParser.getXMLReader();
```

{{/panel}}

Note that, unrelated to security, the feature `http://xml.org/sax/features/validation` can also often be passed to improved the speed of the parsing.

The following is not mentioned in the above OWASP page but must also be followed:

{{#> panel type='code' heading='XSLT Transformer Protection'}}

```java
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.XMLConstants;

TransformerFactory transformerFactory = TransformerFactory.newInstance();
transformerFactory.setFeature(XMLConstants.FEATURE_SECURE_PROCESSING);
Transformer transformer = transformerFactory.newTransformer();
```

{{/panel}}

### No SQL Injection

SQL must never be generated "by hand". Always use JDBC PreparedStatement where all user-controlled input is passed as statement parameters. Or, better, use an additional abstraction layer like Nuxeo's NXQL or Hibernate's HQL.

### No Breaking of Layering

Nuxeo security relies on code using the proper layers. In Nuxeo, security happens at different levels, which must not be bypassed:

*   Authentication is done at the Servlet layer through a pluggable authentication system. Any custom servlet must be configured to use the same servlet filters as the standard Nuxeo servlets.
*   Authorization is done at the CoreSession layer through built-in checks of the security on the document for the currently authenticated user. This CoreSession layer must not be bypassed:
    *   The lower-level Session must not be accessed, or all access must be aware that security checks have to be done at a higher layer.
    *   The UnrestrictedSessionRunner or changing to a system user through CoreInstance.openCoreSession must be used only when there is no security risk on the document(s) being accessed.

## HTML Code

The [Cross Site Scripting]({{page page='cross-site-scripting'}}) page describes rules that must be followed when generating HTML to avoid XSS and CSRF security issues.
