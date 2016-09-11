---
title: How to Configure a New Directory Cache
review:
    comment: ''
    date: ''
    status: ok
details:
    howto:
        excerpt: >-
            Learn how to define a new directory cache and use it in your
            directoy.
        level: Intermediate
        tool: XML Extension
        topics: 'Directory, Vocabulary'
labels:
    - lts2015-ok
    - directory-component
    - howto
confluence:
    ajs-parent-page-id: '28475832'
    ajs-parent-page-title: Data Lists and Directories
    ajs-space-key: NXDOC710
    ajs-space-name: Nuxeo Platform Developer Documentation — LTS 2015
    canonical: How+to+Configure+a+New+Directory+Cache
    canonical_source: >-
        https://doc.nuxeo.com/display/NXDOC710/How+to+Configure+a+New+Directory+Cache
    page_id: '28475672'
    shortlink: GIGyAQ
    shortlink_source: 'https://doc.nuxeo.com/x/GIGyAQ'
    source_link: /display/NXDOC710/How+to+Configure+a+New+Directory+Cache
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

        ```xml
        <extension target="org.nuxeo.ecm.core.cache.CacheService"
           point="caches">
           <cache name="MYDIRECTORY-ENTRY-CACHE" class="org.nuxeo.ecm.core.cache.InMemoryCacheImpl">
             <ttl>20</ttl><!-- minutes -->
             <option name="maxSize">100</option>
             <option name="concurrencyLevel">500</option>
           </cache>
           <cache name="MYDIRECTORY-ENTRY-CACHE-WITHOUT-REFERENCES" class="org.nuxeo.ecm.core.cache.InMemoryCacheImpl">
             <option name="maxSize">100</option>
             <ttl>20</ttl><!-- minutes -->
             <option name="concurrencyLevel">500</option>
           </cache>
        </extension>
        ```

    *   For a Redis cache:

        ```xml
        <extension target="org.nuxeo.ecm.core.cache.CacheService"
           point="caches">
           <cache name="MYDIRECTORY-ENTRY-CACHE" class="org.nuxeo.ecm.core.redis.contribs.RedisCache">
             <ttl>20</ttl><!-- minutes -->
             <option name="maxSize">100</option>
             <option name="concurrencyLevel">500</option>
           </cache>
           <cache name="MYDIRECTORY-ENTRY-CACHE-WITHOUT-REFERENCES" class="org.nuxeo.ecm.core.redis.contribs.RedisCache">
             <option name="maxSize">100</option>
             <ttl>20</ttl><!-- minutes -->
             <option name="concurrencyLevel">500</option>
           </cache>
        </extension>
        ```

2.  Adapt the cache parameters if needed:

    *   `name`: The name of the cache
    *   `ttl`: The directory entry life span in the cache
    *   `maxSize`: The maximum number of entries in the cache
3.  For each directory that should use the cache, declare the cache in the directory definition [using an XML extension]({{page page='how-to-contribute-to-an-extension'}}).

    ```xml
    <extension target="org.nuxeo.ecm.directory.sql.SQLDirectoryFactory"
       point="directories">
       <directory name="MYDIRECTORY">
         ...
         <cacheEntryName>MYDIRECTORY-ENTRY-CACHE</cacheEntryName>
         <cacheEntryWithoutReferencesName>MYDIRECTORY-ENTRY-CACHE-WITHOUT-REFERENCES</cacheEntryWithoutReferencesName>
       </directory>
    </extension>
    ```

    The example above is about a SQL directory. You should adapt the&nbsp;`target` to the type of directory you're using.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related How-Tos'}}

*   [How to Contribute to an Extension]({{page page='how-to-contribute-to-an-extension'}})
*   [How-To Index]({{page page='how-to-index'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

*   [Data Lists and Directories]({{page page='data-lists-and-directories'}})
*   [Directory and UI]({{page page='directory-and-ui'}})

{{/panel}}</div></div>