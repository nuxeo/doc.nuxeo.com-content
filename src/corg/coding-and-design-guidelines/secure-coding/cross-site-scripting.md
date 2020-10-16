---
title: Cross Site Scripting
review:
  comment: ''
  date: ''
  status: ok
labels:
  - scripting
  - xss
confluence:
  ajs-parent-page-id: '26314463'
  ajs-parent-page-title: Secure Coding
  ajs-space-key: CORG
  ajs-space-name: Core Developer Guide
  canonical: Cross+Site+Scripting
  canonical_source: 'https://doc.nuxeo.com/display/CORG/Cross+Site+Scripting'
  page_id: '18449540'
  shortlink: hIQZAQ
  shortlink_source: 'https://doc.nuxeo.com/x/hIQZAQ'
  source_link: /display/CORG/Cross+Site+Scripting
history:
  - author: Florent Guillaume
    date: '2014-01-30 15:52'
    message: SRF -> CSR
    version: '7'
  - author: Florent Guillaume
    date: '2014-01-30 15:50'
    message: explorer current -> latest
    version: '6'
  - author: Thierry Delprat
    date: '2014-01-28 19:20'
    message: ''
    version: '5'
  - author: Thierry Delprat
    date: '2014-01-28 19:04'
    message: ''
    version: '4'
  - author: Solen Guitter
    date: '2014-01-22 11:39'
    message: ''
    version: '3'
  - author: Solen Guitter
    date: '2014-01-22 11:38'
    message: Typos and formatting
    version: '2'
  - author: Thierry Delprat
    date: '2014-01-22 11:01'
    message: ''
    version: '1'
---

## About Cross Site Scripting (XSS)

The problem occurs when some data entered by the user get's injected inside the web page. If the input is not correctly escaped this can allow to inject malicious JavaScript that will be executed in the context of the page.

Typically, any server side variable initialized by a user input should be properly escaped before being written in the page.

Escaping depends on the context:

- escape tags for HTML injection,
- escape quotes and closing tags for JavaScript injection.

## Avoiding XSS inside Nuxeo

### Stored Fields

Fields stored inside the Nuxeo Platform and that may contain HTML/JS that could be integrated inside a page should be escaped.

For that, the Nuxeo Platform provide a built-in sanitizer that is plugged to a Core EventListener: it can be run to check / escape content each time a field is updated.

This is controlled by `HtmlSanitizerService`. You can use the `sanitizer`&nbsp;extension point to define what fields you want to be automatically sanitized.

See:&nbsp;[HtmlSanitizerService--sanitizer](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.htmlsanitizer.HtmlSanitizerService--sanitizer)

### Query Params

When the data directly comes from a parameter of the request (or similar), the data must be properly escaped.

#### Java Code

If you want to do the escaping on the _pure server side_, in Java, you can use `org.apache.commons.lang.StringEscapeUtils`:

- `StringEscapeUtils.escapeHtml(data);`
- `StringEscapeUtils.escapeJavaScript(data);`<span style="color: rgb(0,0,0);">JSF / XHTML</span>

By default JSF automatically does HTML escaping unless told not to. The Nuxeo Platform provides escaping functions for both HTML and JavaScript:

- `#{nxu:javaScriptEscape(data)}`
- `#{nxu:htmlEscape(data)}`

#### FreeMarker

In FreeMarker you can use the two built-in escapes:

- `${data?html}`
- `${data?js_string}`

## Cross-Site Request Forgery (<span style="line-height: 1.5;">CSRF)</span>

### JSF UI&nbsp;

{{{multiexcerpt 'JSF-UI-required' page='nxdoc/generic-multi-excerpts'}}}

Thanks to the JSF ViewState management, all active (POST) requests have to be associated with a correct (non guessable) ViewState id : this makes a built-in CSRF protection.

### Automation API

Automation API is by default exposed via JAX-RS and it does not include any specific filtering related to CSRF.

However, the&nbsp;[Binding extension point of AutomationServer](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.automation.server.AutomationServer--bindings) allows to define filtering rules on a per Operation basis.

In addition, most CSRF issues are related to users having valid authentication sessions : a simple protection can be to limit access to REST API to some specific authentication methods.
Typically, you can easily define a [custom Authentication chain](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewExtensionPoint/org.nuxeo.ecm.platform.ui.web.auth.service.PluggableAuthenticationService--specificChains) that will be dedicated to REST Calls : this is actually the case [by default](http://explorer.nuxeo.org/nuxeo/site/distribution/latest/viewContribution/org.nuxeo.ecm.automation.server.auth.config--specificChains) with a configuration like : &nbsp;

```
<specificAuthenticationChain name="Automation">
        <urlPatterns>
            <url>(.*)/automation.*</url>
        </urlPatterns>

        <replacementChain>
            <plugin>AUTOMATION_BASIC_AUTH</plugin>
            <plugin>ANONYMOUS_AUTH</plugin>
        </replacementChain>
    </specificAuthenticationChain>
```

Using a similar approach to can restrict this authenticator to "safe authenticators" like the [Nuxeo Token Authentication](https://github.com/nuxeo/nuxeo-platform-login/tree/master/nuxeo-platform-login-token).

NB : This is not done by default to avoid creating compatibility issues.

Alternatively, we are working on adding a dedicated filter that will allow to define more specific filters on API calls (see [NXP-13644](https://jira.nuxeo.com/browse/NXP-13644)).

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
