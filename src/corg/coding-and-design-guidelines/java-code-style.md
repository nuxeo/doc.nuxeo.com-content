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
tree_item_index: 300
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
The Nuxeo Platform exposes a huge and diversified API which must be kept stable, properly maintained and bug-free, including documentation. The following are some required coding style rules about code and Javadoc.

## Formatting

### No Tabs, No Trailing Spaces

This avoids changes in diffs when invisible characters change. In Eclipse, you can install the Marketplace package _AnyEdit Tools_ which has tab-related options.

### Indent and Format According to Our Formal Rules

The format rules are the [Eclipse formatting configuration](https://github.com/nuxeo/nuxeo/blob/master/tools/nuxeo_formatter.xml).
See [Code Templates and Formatter configurations](https://github.com/nuxeo/nuxeo/tree/master/tools) for more.

This also applies to organizing imports.

It allows the same automatic formatting for everyone, to avoid gratuitous reformattings every time someone commits.

### No Automatic Formatting on Save

This avoids mixing cleanups with other code changes.

The only allowed exception is for trailing whitespaces, which _may_ be automatically removed at save time. In Eclipse, go to _Preferences_ > _Java_ > _Editor_ > _Save Actions_. Check _Perform the selected actions on save_, and only check _Additional actions_, that should only list _Remove trailing white spaces on all lines_ (configure it in _Configure > Code Organizing_).

## Readability

### The Code Must Be Clear, and Commented to Explain _why_ It Does Things

_What_ the code does should be self-explanatory through proper code organization, method/field/variable naming, etc. A comment with a summary of _what_ some code does can still be useful before a code block.

### No Wildcard Imports

They make searches more difficult, make actual packages difficult to discover for readers outside an IDE, and can cause a problem when imported packages have new classes added that are also in another wildcard import.

### Use Static Imports for Common, Well-Known Things

Some common constants or static methods have names that are unique enough so that it's worth having a shorter code when they're used:
- `Boolean.TRUE`, `Boolean.FALSE`
- `StandardCharsets.UTF_8`
- `Collections` static methods (`emptyList`, `singletonList`, etc.)
- `Collectors` static methods (`toList`, `toMap`, `groupingBy`, etc.)

### No `final` Method Parameters or Local Variables

They are eyesores for readers, don't bring much safety if the code is already clear enough, and IDEs often provide enough warnings.

### You Can Reassign Method Parameters

It's ok to reassign a method parameter (to "normalize" it on method entry for instance) if it makes the code more readable. Some style guides disallow updating parameters, but that's overly strict.

### Use `i++`

Our standard is `i++` (not `++i`) for simple increments. This does not apply when the increment is inside another expression, because the semantics are then different.

### Use All-Caps for `static final` Fields

These fields are constants, and their use should be immediately identifiable as such.

## Maintainability

### Always Use Braces

Always use `{` `}` and a separate line for `if`/`else` blocks. This avoids hard-to-find bugs and is our formatting style.

### Use `Objects.requireNonNull` For `null` Checks

It's better to use this standard method than having custom code. Use a message specific to the checked code.

### No Final Methods or Classes

This hinders reusability. Nuxeo is a platform and we never know when it'll be useful to subclass something.

This rule, and the one below about `private`, does not apply to private projects that are not part of the Nuxeo Platform (like Nuxeo Studio and Nuxeo Connect) where `private` helps with cleanups and there is no third-party compatibility or subclassing issue.

### No `private` or Package-Private Methods or Fields.

This hinders reusability, for the same reason as above.

Two exceptions are `log` and `serialVersionUID` which must be `private` because we _want_ subclasses to redefine them.

## Testability

### Always Write Unit Tests

Tests help for development (TDD), and for non-regression.

### Structure Code for Testing

Don't hesitate to layer your code between different levels of complexity and have internal SPIs to ease testing and mocking.

Your code may have internal hooks to facilitate testing on mock objects if needed and if this doesn't have a significant impact on efficiency. However callings things like `Framework.isTestModeSet()` and having different code paths in test mode is not acceptable.

## Debuggability

### Logging

Use logging at critical points in your code.
- `ERROR` logs for incorrect configuration stuff, or unexpected exceptions.
- `INFO` logs for rare diagnostics, like startup and initial configuration information.
- `DEBUG` logs for additional light diagnostics during execution.
- `TRACE` logs for heavy diagnostics when the expected output is more than a few lines per request.

In particular, `DEBUG` logs are essential when interacting with external systems.

Use `if (log.isDebugEnabled())` except if the logged value is a constant string
(we hope to improve this in the future by switching to `slf4j` for the logging facade).

### Monitoring

Maintain counters about important allocated resources and expose them through the standard monitoring facilities.

## Javadoc

Follow the Oracle Javadoc best practices: http://www.oracle.com/technetwork/articles/java/index-137868.html#styleguide

In particular the first sentence of the Javadoc should be a short verb phrase, using 3rd person (_Gets the foobar_) and not 2nd person (_Get the foobar_), and end with a period.

Also the `@param` and `@return` tags are followed by a sentence fragment which is not capitalized and not ending with a period.

Add `@since` annotations on new public classes, methods or constants.

Do not use the `@author` tag. It is not included when generating the API specification. There's very rarely a single author for a file and the version history (`git blame`) can be used to determine the contributors.

Additionally, the copyright header (not Javadoc but a simple comment) includes a dedicated zone that you can use to highlight your contribution and knowledge on a class.

You should configure your IDE to raise warnings on malformed Javadoc comments and to validate tag arguments but to ignore missing Javadoc tags and comments.

### FAQ About `@since` in Javadoc

**Q**: I'm backporting a new API from 10.2 to the 9.10 maintenance branch, should I put ` @since 10.2` or ` @since 9.10-HF08`?

**A**: Use ` @since 10.2`, otherwise backports are a pain when cherry-picking. JIRA _fix version_ is the reference to understand why a ` @since 10.2` is visible on a 9.10 maintenance branch.

**Q**: When should I add `@since` in other places besides new classes and methods?

**A**: Wherever it helps. Marking fields or static constants is sometimes useful, especially XMap descriptor fields, event names, or other well-known public values (configuration parameters, options, etc.). And please think of your fellow Studio developers who will need to easily know what is acceptable for a given target platform version.

## General Java Best Practices

### No `finalize()` Method

They have a huge impact on GC times.

### Avoid Using an Array `[]` If a `List` Can Be Used

Lists have many more methods, and the JIT will optimize things anyway.

### Use Streams If It Makes the Code More Readable or Less Error-Prone

Intermediate loop variables or tests add complexity.

### Always Use Explicit Charsets

Always use an explicit `Charset` in `byte[]` to `String` and `String` to `byte[]` conversions. This applies to code like `new String(byte[], Charset)`, `String.getBytes(Charset)`, `IOUtils.toString(InputStream, Charset)`, etc.

The default charset depends on the platform, so code that uses it is not predictable.

## Deprecation

When changing an API, forward and backward compatibility must be maintained over multiple versions. Javadoc `@deprecated` and Java `@Deprecated` annotations must both be used.

{{#> panel type='code' heading='Method deprecation'}}
```java
/**
 * ...
 * @since 8.1
 * @deprecated since 9.10. Use {@link #newMethod()} instead.
 */
@Deprecated
public void oldMethod() { }
```
{{/panel}}

Always indicate the version since when deprecation happens. This will be used for later removal and help deprecated API users to guess the refactoring priorities.
Point to the new API and usage.
