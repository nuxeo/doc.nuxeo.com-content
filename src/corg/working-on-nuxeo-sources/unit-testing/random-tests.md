---
title: Random tests
confluence:
    ajs-parent-page-id: '950316'
    ajs-parent-page-title: Unit Testing
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Random+tests
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Random+tests'
    page_id: '19794170'
    shortlink: _gguAQ
    shortlink_source: 'https://doc.nuxeo.com/x/_gguAQ'
    source_link: /display/CORG/Random+tests
history:
    - 
        author: Julien Carsique
        date: '2014-07-24 12:25'
        message: 'XP-14791: RandomBug annotatio'
        version: '2'
    - 
        author: Julien Carsique
        date: '2014-07-24 12:12'
        message: ''
        version: '1'

---
A test may have a random behavior (see [http://en.wikipedia.org/wiki/Heisenbug](http://en.wikipedia.org/wiki/Heisenbug)). Such a test is introducing build inconsistency and may be hard to reproduce and fix. If the test is ignored, it will likely be never fixed. If it's not, it will randomly produce noise and may happen at very bad time.

The&nbsp;`org.nuxeo.runtime.test.runner.RandomBug.Repeat` annotation (packaged in `org.nuxeo.runtime:nuxeo-runtime-test` helps to increase consistency on tests which have a **true** random behavior.

### Usage

{{#> panel type='code' heading='@RandomBug usage'}}

```java
public class SomeTestClass {
    public static final String NXP99999 = "NXP-99999: issue summary description blah blah";
    @Test
    @RandomBug.Repeat(issue = NXP99999, onFailure = 10, onSuccess = 30)
    public void testWithRandomBehavior() throws Exception {
        // Generates random int in range [0,10)
        Assert.assertTrue(new Random().nextInt(10)>1);
    }
}
```

{{/panel}}

The above annotation marks the test as not 100% reliable (indeed, it will fail about 1/5 times). Now, in case of failure, the test will be repeated up to 10 times until it succeeds.

The parameter&nbsp;`issue` is required. Recommendation is to define a constant, especially if it will be used in multiple places. The constant name is the bug reference in the issue tracker and its value is a bug description.
The parameter&nbsp;`onFailure` is optional and defines the maximum times to repeat the test until success in case of failure (default 10).
The parameter&nbsp;`onSuccess` is optional and defines the maximum times to repeat the test until failure in case of success (default 30).

The system property&nbsp;`nuxeo.tests.random.mode` allows to customize the RandomBug execution mode. Possibles values are `BYPASS`,&nbsp;`STRICT` or `RELAX`:

*   `RELAX`
    The default mode. Goal is to keep random tests being ran but increase chances of success. The `onFailure` value limits the number of repeat.
*   `BYPASS`
    The random tests are ignored. Goal is to provide a consistent build with no random aspect at all.
*   `STRICT`The random tests are expected to fail. Goal is to reproduce the error or confirm a fix. The&nbsp;`onSuccess` value limits the number of repeat.

When to use that annotation?

*   if you encounter a bug which appears chaotic or non-deterministic. Replaying it in off-line mode sometimes succeeds or fails.
*   if you need to reproduce a bug supposed to be random.

### Remarks, improvements and limitations

#### True random bugs only (Heisenbug or Mandelbug)

That solution does not fit with conditional bugs (Bohrbug): bugs which are not really random but depend on the environment.
Such tests must use the&nbsp;`org.nuxeo.runtime.test.runner.ConditionalIgnoreRule.Ignore` annotation to specify ignore conditions for which the test would fail <u>and that is acceptable (i.e. not a bug)</u>.

#### Improvements

The&nbsp;`STRICT` mode may not make the test fail if there was no failure. The goal of the current implementation is to warn if a test is annotated as random but is not random: either it was fixed, or it is indeed conditional and not random, or its frequency is lower than expected.

Default values for&nbsp;`onFailure` and&nbsp;`onSuccess` may be improved: current defaults expect most of unfixed random bugs have low frequency: repeating the test 10 times is enough to reproduce and 30 times is enough to succeed.

Randomness can depend on the environment: in some powerful/strong/... environments, it always pass fine, whereas in some other weak/virtual/... environments, it randomly fails. Such cases will still be considered as random but we'll need to mix the RandomBug annotation with the ConditionalIgnoreRule one in order to accept the test success in STRICT mode if the current environment highly decrease the bug reproduction chances.

#### Limitations

This is all about statistics. For instance, with a low frequency of 1%, onSuccess=30 is not enough to ensure reproduction. At the opposite, with a high frequency, onFailure=10 is not enough to ensure success.

If the random aspect lives in the runtime setup part, it may not be repeated and the test will either always fail or succeed independently of the number of tries. For such cases, we will later improve the system to also replay the involved environment setup.

It won't work for now on WebDriver tests since it relies on org.nuxeo.runtime.test.runner.FeaturesRunner to include the RandomBug rule.