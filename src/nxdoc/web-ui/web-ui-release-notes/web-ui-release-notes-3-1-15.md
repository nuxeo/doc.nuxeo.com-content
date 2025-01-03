---
title: Version 3.1.15
description: Discover what's new in Web UI 3.1.15.
review:
  comment: ''
  date: '2024-12-30'
  status: ok
toc: true
labels:
tree_item_index: 986
hidden: true
---

{{{multiexcerpt 'matching-notes' page='web-ui-release-notes'}}}

{{! multiexcerpt name='web-ui-updates'}}

## What’s New in Web UI for LTS 2021 (Version 3.1.15)

This release for WebUI introduces several important changes to the Content Security Policy (CSP). These changes enhance security by providing more granular control over which scripts can be executed in the browser, and by reducing attack surfaces related to script execution.<br/>

Changes done for "script-src" directive -
- `Added "self" attribute` : The self keyword restricts the loading and execution of scripts to the same origin as the document. This effectively blocks scripts hosted on external domains from being executed on the page, reducing the risk of third-party script attacks.

- `Added "nonce-<value>" attribute` : This allows a cryptographically random token (nonce) to be assigned to inline <script> elements. Only scripts with a matching nonce value will be executed, ensuring that only trusted scripts can run inline, and unauthorized inline scripts are blocked.

- `Added "strict-dynamic" attribute` : When combined with a nonce (nonce-<value>) for inline scripts, strict-dynamic allows dynamically added scripts to be executed only if they are loaded from trusted sources. This prevents third-party scripts from adding untrusted scripts dynamically, enhancing security by relying on trusted sources.

- `Removed dependency on "data: *" attribute` : The data: scheme allows scripts to be loaded directly from data URIs, which can be a security risk as they are often used in XSS attacks. It can be removed to prevent scripts from being loaded from data URIs.

- `Removed dependency on "unsafe-inline" attribute` : This keyword previously allowed inline JavaScript to be executed, which posed a significant security risk as it can be exploited in XSS attacks. Removing this attribute forces websites to avoid using inline scripts or rely on safer alternatives, such as nonces.

- `Removed dependency on "unsafe-eval" attribute` : The unsafe-eval keyword allows the use of JavaScript's eval() function and other methods like setTimeout() and setInterval() with string arguments. These methods are commonly used in XSS attacks and can be exploited by attackers to execute arbitrary code. This change removes support for unsafe-eval and prevents the use of these unsafe JavaScript functions.

Changes done for "default-src" directive -
- `Removed dependency of "blob: *" ` : By removing "blob: *" and adding "self" attribute, the directive can be made more restrictive.

Changes done for "object-src" directive -
- `Added "none" attribute` :  Improves security by blocking all embedded <object>, <embed>, and <applet> elements on the page.

Customers can override the default CSP of Nuxeo platform, and remove attributes like "unsafe-inline", "unsafe-eval" and "data: *" from "script-src" directive to have a stricter CSP. Note that in order to work with PDFs that have embedded WebAssembly code, it is required to either have "wasm-unsafe-eval" (Recommended) or "unsafe-eval" (Less secure) to be added in the "script-src" directive.

Note that WebUI automatically enforces the addition of "self" , "nonce-", "strict-dynamic" for "script-src", and "none" for "object-src" whether the csp headers are default or overriden.

### Other Noteworthy Changes

- Offering the option to enable comma formatting this way can improve readability when dealing with very large numbers.

{{! /multiexcerpt}}
