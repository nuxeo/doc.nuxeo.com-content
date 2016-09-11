---
title: Java Code Style
review:
    comment: ''
    date: ''
    status: ok
confluence:
    ajs-parent-page-id: '4685848'
    ajs-parent-page-title: Coding and Design Guidelines
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Java+Code+Style
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Java+Code+Style'
    page_id: '12913699'
    shortlink: IwzF
    shortlink_source: 'https://doc.nuxeo.com/x/IwzF'
    source_link: /display/CORG/Java+Code+Style
history:
    - 
        author: Solen Guitter
        date: '2015-11-23 09:13'
        message: ''
        version: '10'
    - 
        author: Julien Carsique
        date: '2015-11-18 15:53'
        message: ''
        version: '9'
    - 
        author: Julien Carsique
        date: '2015-11-18 14:32'
        message: ''
        version: '8'
    - 
        author: Julien Carsique
        date: '2015-11-18 14:25'
        message: ''
        version: '7'
    - 
        author: Julien Carsique
        date: '2015-11-18 14:19'
        message: Javadoc
        version: '6'
    - 
        author: Ronan Daniellou
        date: '2015-08-03 08:20'
        message: i -> I
        version: '5'
    - 
        author: Anahide Tchertchian
        date: '2014-08-19 11:31'
        message: add "remove trailing white spaces" configuration info
        version: '4'
    - 
        author: Julien Carsique
        date: '2013-02-08 14:29'
        message: ''
        version: '3'
    - 
        author: Julien Carsique
        date: '2013-02-08 14:29'
        message: ''
        version: '2'
    - 
        author: Julien Carsique
        date: '2013-02-07 12:26'
        message: ''
        version: '1'

---
Nuxeo platform exposes a huge and diversified API which must be kept stable, documented and properly maintained. So there are some required coding style rules about annotations and Javadoc.

## `@since`

New API (public classes and methods) must have an&nbsp;`@since` Javadoc annotation.

### Eclipse configuration

Go to "Window > Preferences > Java > Code Styles > Code Templates".
In "Comments > Types" and "Comments > Methods", edit and set:

{{#> panel type='code' heading='Types and methods comments code templates'}}

```java
/**
 * ${tags}
 *
 * @since TODO
 */
```

{{/panel}}

The following setting can also be useful: go to "Window > Preferences > Java > Editor > Save Actions". Check "Perform the selected actions on save", and only check "additional actions", that should list "Remove trailing white spaces on all lines" ("Configure > Code Organizing"). Other save actions should not be performed automatically: imports or deprecation warning cleanups should ideally be explicit formatting actions from the developer.

### FAQ

Q: I'm backporting a new API from 5.7 to 5.6 branch, should I put&nbsp;`@since 5.7` or `@since 5.6-HF09`?
A: Use `@since 5.7`, otherwise backports are a pain when cherry-picking. JIRA is the reference to understand why an&nbsp;`@since 5.7` is visible on a 5.6.0 branch.

Q: When should I add&nbsp;`@since` on other places than new classes and methods?
A: Wherever it helps. Marking fields or static constants is sometimes useful, especially XMap descriptor fields or event names for instance. And please think of your fellow Studio developers who will need to easily know what is accepted for a given target version.

Q: Do I need to add&nbsp;`@since` on new test methods?
A: It's not mandatory, but if your editor does it on its own, it won't hurt.

## Deprecation

On API changes, forward and backward compliance must be maintained over multiple versions. Help API users and code reviewers to manage the deprecated code using both Java and Javadoc annotations:

{{#> panel type='code' heading='Method deprecation'}}

```java
/**
 * (...)
 * @deprecated Since 5.6\. Use {@link (...)} instead.
 */
@Deprecated
public void oldMethod() {
```

{{/panel}}

Indicate the version of deprecation. That will be used for later removal and help deprecated API users to guess the refactoring priority.
Points to the new API and usage.

## Javadoc

Reference: [http://www.oracle.com/technetwork/articles/java/index-137868.html](http://www.oracle.com/technetwork/articles/java/index-137868.html)

### IDE Configuration

The [Code Templates and Formatter configurations]({{page page='eclipse-setup'}}) include some Javadoc rules.

You should configure your IDE to raise warnings on malformed Javadoc comments and to validate tag arguments but to ignore missing Javadoc tags and comments.

### First Sentence

Write the first sentence as a concise but complete description of the API item <span style="color: rgb(44,45,48);">that can stand on its own</span>.
<span style="color: rgb(44,45,48);">The sentence ends at the first period that is followed by a blank, a tab or a line terminator, or at the first tag</span>. So, it <span style="color: rgb(44,45,48);">should be a full sentence with a terminating period.
The sentence should not be written in the imperative mode ("Get the foobar") but as declarative/descriptive ("Gets the foobar.").</span>

### <span style="color: rgb(44,45,48);">`@author`</span>

<span style="color: rgb(44,45,48);">Do not use the `@author` tag. It is not included when generating the API specification. There's very rarely a single author for a file and the version history (`git blame`) can be used for determining the contributors.</span>

<span style="color: rgb(44,45,48);">Additionally, the Copyright header (not Javadoc but simple comment) includes a dedicated field that you can use to highlight your contribution and knowledge on a class.
</span>