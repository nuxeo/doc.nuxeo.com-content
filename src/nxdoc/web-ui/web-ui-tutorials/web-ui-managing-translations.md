---
title: 'HOWTO: Manage Translations'
description: Learn how to manage translations in Nuxeo Web UI.
review:
    comment: 'Links to GitHub need to be updated after the release of nuxeo-ui-elements 2.2.0.'
    date: '2017-12-14'
    status: requiresUpdates
toc: true
details:
    howto:
        excerpt: Learn how to manage translations in Nuxeo Web UI.
        level: Advanced
        tool: code
        topics: Web UI
labels:
    - lts2016-ok
    - nuxeo-web-ui
    - gbarata
    - customization
    - i18n
    - labels
    - localization
    - content-review-lts2017
tree_item_index: 1500
---

Nuxeo Web UI supports element internationalization. Every element that displays text to the user must extend the [I18nBehavior](https://github.com/nuxeo/nuxeo-ui-elements/blob/maintenance-2.2.x/nuxeo-i18n-behavior.html), which provides the `i18n` method to dynamically load labels according to the current locale.

```xml
<span>[[i18n('label.app.usersAndGroups')]]</span>
```

The `I18nBehavior` relies on a locale resolver, which is an object responsible for fetching translation resources (i.e., files), and a global translation function, which takes a key and translates it according to the currently selected language, based on the loaded internationalization resources. Both can be overridden.

The [default locale resolver](https://github.com/nuxeo/nuxeo-ui-elements/blob/maintenance-2.2.x/nuxeo-i18n.js#L47) (`XHRLocaleResolver`) loads translation files stored in the `i18n` folder, which has one English reference file, named `messages.json`, and several other files, one for each of the translations, following the pattern `messages-{language}.json`. Here, `language` is a code from Crowdin's list of [supported language codes](https://support.crowdin.com/api/language-codes/). Language is currently retrieved from the browser with the expression `navigator.language || navigator.userLanguage` and stored in the `window.nuxeo.I18n.language` global variable. The default translation function converts label IDs into messages, and it defaults to English if no language is specified. Labels are managed with [Crowdin](https://crowdin.com/project/nuxeo-web-ui).

{{#> callout type='note' }}
Web UI uses the same language as the web browser.
{{/callout}}

## Contributing Labels

Labels can be contributed to the Web UI by adding or overriding the JSON messages files in the `i18n` folder. The JSON objects therein possess key-value pairs, where each key is a unique id for the label and the value is the translated message itself. Keys usually begin with the name of the element where the label is used in (excluding the "nuxeo-" prefix), followed by a **dot** (.). This measure makes it easier to identify where a given key is used and prevents duplicates. As an example, take the following three labels which are used in the `nuxeo-activity` element:

{{#> callout type='tip' }}
Adding translation can easily be done using [Nuxeo Studio Designer]({{page space='studio' page='ui-designer'}}#translations). When doing so, you can just update/create the `.json` file, there is no need to add a deployment fragment or to build the hierarchy that will hold the .json translation.
{{/callout}}

{{#> callout type='note' }}
After adding a translation and having hot-reloaded your project, you may need to force refresh the page to force the translation files to be reloaded.
{{/callout}}

{{#> panel type='code' heading='nuxeo-web-ui/i18n/messages.json'}}
```json
{
  "activity.addedToCollection": "added to collection",
  "activity.auditLogRoute":"requested audit",
  "activity.documentCheckedIn": "created a version",
  ...
}
```
{{/panel}}

In order to make your bundle append additional label translations, you need to create the proper `messages` files as follow:

```.
├── pom.xml
├── src
│   └── main
│       └── resources
│           ├── META-INF
│           │   └── MANIFEST.MF
│           ├── OSGI-INF
│           │   ├── deployment-fragment.xml
│           │   ...
│           └── web
│               └── nuxeo.war
│                   └── ui
│                       ├── i18n
│                       │   ├── messages-fr.json
│                       │   └── messages.json
```
where the `deployment-fragment.xml` has to call the append directive:

```xml
<?xml version="1.0"?>
<fragment version="1">

  <require>org.nuxeo.web.ui</require>

  <install>
    <!-- unzip the war template -->
    <unzip from="${bundle.fileName}" to="/" prefix="web">
      <include>web/nuxeo.war/**</include>
      <exclude>web/nuxeo.war/ui/i18n/**</exclude>
    </unzip>

    <!-- create a temporary folder -->
    <delete path="${bundle.fileName}.tmp" />
    <mkdir path="${bundle.fileName}.tmp" />
    <unzip from="${bundle.fileName}" to="${bundle.fileName}.tmp" />

    <!-- append the translations -->
    <append from="${bundle.fileName}.tmp/web/nuxeo.war/ui/i18n/messages.json"
      to="nuxeo.war/ui/i18n/messages.json" />
    <append from="${bundle.fileName}.tmp/web/nuxeo.war/ui/i18n/messages-fr.json"
      to="nuxeo.war/ui/i18n/messages-fr.json" />

    <delete path="${bundle.fileName}.tmp" />

  </install>

</fragment>
```

{{#> callout type='tip' }}
The `<require>org.nuxeo.web.ui</require>` is needed to make sure the default Web UI messages files are deployed first.
{{/callout}}

{{#> callout type='note' }}
Nuxeo Web UI relies on Nuxeo UI Elements, which has its own localization. However, labels from Nuxeo UI Elements can be overridden in Nuxeo Web UI's message files.
{{/callout}}

## Contributing Locale Resolvers

A locale resolver is an object that knows how to load internationalization resources. This provides a modular and configurable approach to loading translations, allowing custom resolvers to be specified for different types of configurations. For an example of how to contribute a resolver, here's the default resolver used by the Web UI, which loads JSON objects via asynchronous XHR from a given folder (i.e. `msgFolder`):

```JavaScript
function XHRLocaleResolver(msgFolder) {
  return function() {
    return new Promise(function(resolve,reject) {
      var language = window.nuxeo.I18n.language || 'en';
      var url = msgFolder +  '/messages.' + language + '.json';
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          window.nuxeo.I18n[language] = JSON.parse(this.response); // cache this locale.
          resolve(this.response);
        }
      };
      xhr.onerror = function() {
        console.error("Failed to load " + url);
        reject(this.statusText);
      };
      xhr.send();
    });
  }
}
```

After setting up the resolver, you must reload to current locale for your changes to take effect. This can be done as follows:

```JavaScript
window.nuxeo.I18n.localeResolver = new XHRLocaleResolver(msgFolder);
window.nuxeo.I18n.loadLocale();
```

## Overriding the Translation Function

The translation function can also be overridden to fit different needs, by redefining `window.nuxeo.I18n.translate`. Here's an example:

```JavaScript
window.nuxeo.I18n.translate = function (key) {
  var language = window.nuxeo.I18n.language || 'en';
  var value = (window.nuxeo.I18n[language] && window.nuxeo.I18n[language][key]) || key;
  var params = Array.prototype.slice.call(arguments, 1);
  for (var i = 0; i < params.length; i++) {
    value = value.replace('{' + i + '}', params[i]);
  }
  return value;
};
```

{{#> callout type='note'}}
Customizations on locale resolvers and the translation function can be made from within a custom element or a standalone script.
{{/callout}}

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Blog Posts'}}
- [Decoupled Global Localization with Polymer](https://www.nuxeo.com/blog/decoupled-global-localization-with-polymer/)
{{/panel}}</div></div>
