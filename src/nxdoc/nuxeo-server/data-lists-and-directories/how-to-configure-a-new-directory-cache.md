---
title: How to Configure a New Directory Cache
details:
    howto:
        excerpt: >-
            Learn how to define a new directory cache and use it in your
            directoy.
        level: Intermediate
        tool: XML Extension
        topics: 'Directory, Vocabulary'
labels:
    - howto
    - directory-component
confluence:
    ajs-parent-page-id: '4688939'
    ajs-parent-page-title: Data Lists and Directories
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Configure+a+New+Directory+Cache
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC/How+to+Configure+a+New+Directory+Cache
    page_id: '27592603'
    shortlink: mwelAQ
    shortlink_source: 'https://doc.nuxeo.com/x/mwelAQ'
    source_link: /display/NXDOC/How+to+Configure+a+New+Directory+Cache
history:
    - 
        author: Solen Guitter
        date: '2015-12-16 16:55'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2015-12-16 16:54'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2015-12-16 16:43'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2015-12-16 16:35'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2015-12-16 16:33'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2015-12-16 16:06'
        message: ''
        version: '1'

---
To set up a new cache for your directory, wether for your vocabularies, users or groups:

1.  [Contribute a new XML extension]({{page page='how-to-contribute-to-an-extension'}}) that defines your cache:
    *   For a Java memory cache:

        ```

             20
             100
             500

             100
             20
             500

        ```

    *   For a Redis cache:

        ```

             20
             100
             500

             100
             20
             500

        ```

2.  Adapt the cache parameters if needed:

    *   `name`: The name of the cache
    *   `ttl`: The directory entry life span in the cache
    *   `maxSize`: The maximum number of entries in the cache
3.  For each directory that should use the cache, declare the cache in the directory definition [using an XML extension]({{page page='how-to-contribute-to-an-extension'}}).

    ```

         ...
         MYDIRECTORY-ENTRY-CACHE
         MYDIRECTORY-ENTRY-CACHE-WITHOUT-REFERENCES

    ```

    The example above is about a SQL directory. You should adapt the&nbsp;`target` to the type of directory you're using.

&nbsp;

* * *

<div class="row" data-equalizer="" data-equalize-on="medium">

<div class="column medium-6">{{#> panel heading="Related How-Tos"}}

*   [How to Contribute to an Extension]({{page page='how-to-contribute-to-an-extension'}})
*   [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div>

<div class="column medium-6">{{#> panel heading="Related Documentation"}}

*   [Data Lists and Directories]({{page page='data-lists-and-directories'}})
*   [Directory and UI]({{page page='directory-and-ui'}})

{{/panel}}</div>

</div>