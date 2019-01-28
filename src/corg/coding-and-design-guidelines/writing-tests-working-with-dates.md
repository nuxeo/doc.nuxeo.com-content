---
title: Writing tests working with dates
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
    canonical: Writing+tests+working+with+dates
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Writing+tests+working+with+dates'
    page_id: '14256905'
    shortlink: CYvZ
    shortlink_source: 'https://doc.nuxeo.com/x/CYvZ'
    source_link: /display/CORG/Writing+tests+working+with+dates
tree_item_index: 1000
history:
    -
        author: Manon Lumeau
        date: '2015-09-29 13:58'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2013-07-29 11:31'
        message: Added TOC and fixed formatting
        version: '5'
    -
        author: Julien Carsique
        date: '2013-07-23 17:36'
        message: ''
        version: '4'
    -
        author: Julien Carsique
        date: '2013-07-23 14:47'
        message: ''
        version: '3'
    -
        author: Julien Carsique
        date: '2013-07-23 14:47'
        message: ''
        version: '2'
    -
        author: Julien Carsique
        date: '2013-07-23 14:18'
        message: ''
        version: '1'

---
## `java.util.Date` methods are almost all deprecated

Consider [`java.util.Date`](http://docs.oracle.com/javase/7/docs/api/java/util/Date.html) as a time container with only basic methods:

*   <pre>public&nbsp;Date()</pre>

*   <pre>public&nbsp;long&nbsp;getTime()</pre>

*   <pre>public&nbsp;void&nbsp;setTime(long&nbsp;time)</pre>

*   <pre>public&nbsp;boolean&nbsp;before([Date](http://docs.oracle.com/javase/7/docs/api/java/util/Date.html "class in java.util")&nbsp;when)</pre>

*   <pre>public&nbsp;boolean&nbsp;after([Date](http://docs.oracle.com/javase/7/docs/api/java/util/Date.html "class in java.util")&nbsp;when)</pre>

*   <pre>public&nbsp;boolean&nbsp;equals([Object](http://docs.oracle.com/javase/7/docs/api/java/lang/Object.html "class in java.lang")&nbsp;obj)</pre>

*   <pre>public&nbsp;int&nbsp;compareTo([Date](http://docs.oracle.com/javase/7/docs/api/java/util/Date.html "class in java.util")&nbsp;anotherDate)</pre>

*   <pre>public&nbsp;int&nbsp;hashCode()</pre>

*   <pre>public&nbsp;[String](http://docs.oracle.com/javase/7/docs/api/java/lang/String.html "class in java.lang")&nbsp;toString()</pre>

Although all other methods were very useful (especially the `parse()` one), they are deprecated as of JDK 1.1 and **must not be used**. Instead, it is recommended to use [Calendar](http://docs.oracle.com/javase/7/docs/api/java/util/Calendar.html) and [DateFormat](http://docs.oracle.com/javase/7/docs/api/java/text/DateFormat.html).

## Date parsing

There is no equivalent to the [`public static long parse(String s)`](http://docs.oracle.com/javase/7/docs/api/java/util/Date.html#parse%28java.lang.String%29) method. All other methods (either from [`DateFormat`](http://docs.oracle.com/javase/7/docs/api/java/text/DateFormat.html) or other frameworks) require to explicitly set the format before parsing.

Recommended classes are [`SimpleDateFormat`](http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html) and [`DateTimeFormatter` (from Joda Time)](http://joda-time.sourceforge.net/apidocs/org/joda/time/format/DateTimeFormatter.html).

{{#> panel type='code' heading='Sample recommended usages'}}

```java
new java.text.SimpleDateFormat("EEE MMM d HH:mm:ss zzz yyyy", Locale.ENGLISH);
org.joda.time.format.DateTimeFormat.forPattern("EEE MMM d HH:mm:ss zzz yyyy").withLocale(Locale.ENGLISH);
new java.util.GregorianCalendar(TimeZone.getTimeZone("+0100"), Locale.FRENCH);
```

{{/panel}} {{#> callout type='note' }}

The `SimpleDateFormat` class is not thread-safe.

Recommendations (from the worst to the best, in terms of performance) are:

*   use `SimpleDateFormat.getDateInstance`(),
*   externally synchronize the `DateFormat` instances usage,
*   use a `ThreadLocal<DateFormat>`.

See [http://www.javacodegeeks.com/2010/07/java-best-practices-dateformat-in.html](http://www.javacodegeeks.com/2010/07/java-best-practices-dateformat-in.html).

Here's an implementation allowing to use the `ThreadLocal` approach with various formats: [SafeSimpleDateFormat.java](http://code.google.com/p/safe-simple-date-format/source/browse/trunk/java/com/cedarsoftware/util/SafeSimpleDateFormat.java).

{{/callout}}

## Tests must not depend on the timezone

Be warned that [`Calendar`](http://docs.oracle.com/javase/7/docs/api/java/util/Calendar.html) and [`GregorianCalendar`](http://docs.oracle.com/javase/7/docs/api/java/util/GregorianCalendar.html) are locale-sensitive classes.

When writing a test, focus on effectively testing the code, not the data setup: construct **fixed locale** parsers and calendars, put asserts and comparisons on reliant values such as `**getTime()**` (the millisecond offset from the Epoch) instead of `toString()`.
