---
title: Quick Search
review:
    comment: ''
    date: ''
    status: ok
labels:
    - suggestion-search
    - quick-search
    - last-review-20141118
    - search
toc: true
confluence:
    ajs-parent-page-id: '21299500'
    ajs-parent-page-title: Searching the Nuxeo Platform
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Quick+Search
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Quick+Search'
    page_id: '21299421'
    shortlink: 3QBFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/3QBFAQ'
    source_link: /display/USERDOC60/Quick+Search
history:
    - 
        author: Solen Guitter
        date: '2015-06-03 09:14'
        message: ''
        version: '23'
    - 
        author: Solen Guitter
        date: '2014-11-20 14:41'
        message: ''
        version: '22'
    - 
        author: Solen Guitter
        date: '2014-11-09 23:03'
        message: ''
        version: '21'
    - 
        author: Solen Guitter
        date: '2014-11-09 23:03'
        message: ''
        version: '20'
    - 
        author: Solen Guitter
        date: '2014-03-20 15:18'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2014-02-19 19:34'
        message: Fixed date search description
        version: '18'
    - 
        author: Solen Guitter
        date: '2014-02-19 16:48'
        message: Added precision about keyword suggestion search
        version: '17'
    - 
        author: Solen Guitter
        date: '2014-01-27 16:20'
        message: No Search button anymore in simple search
        version: '16'
    - 
        author: Solen Guitter
        date: '2014-01-20 14:47'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2013-11-28 15:33'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2013-11-21 12:05'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2013-10-30 21:42'
        message: Updated screenshots for 5.8
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-10-17 18:12'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-09-30 16:17'
        message: Removed related topics from TOC
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-06-21 19:21'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2013-06-21 19:21'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2013-06-21 19:20'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-06-21 19:06'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2013-06-21 18:59'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2013-06-21 18:42'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2013-06-21 18:33'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2013-06-21 18:18'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2013-06-21 17:44'
        message: ''
        version: '1'

---
Quick search can be accessed from any site page. At any time, you can search a document by typing keywords in the search box located at the upper right corner of the page.

![]({{file name='search-box.png'}} ?w=314,h=42,border=true)

Typing keywords in the search field and pressing the "Enter" key triggers a full-text search:

*   Based on stemming,
*   With AND operator (all words must be in the document),
*   Searching on the title, the description and the content (text of a note, content of the main attachment of a file).

**To search a document using quick search:**

1.  Type your keywords in the quick search field.
    Five matching documents are suggested as you type. See below for&nbsp;[details on suggestion search](#suggestion-search).
    ![]({{file name='simple_search_suggestion.png'}} ?w=250,border=true,thumbnail=true)
2.  If the searched document is not suggested, press the Enter key to display all matching documents.
    Search results are displayed in the Search tab. The Quick search is selected and filled in with your keywords.
3.  Click on the document's name to open it.&nbsp;
    ![]({{file name='quick-search-results.png'}} ?w=600,border=true)

### Suggestion Search

When you start typing words in the quick search field, in the top right corner of the page, you are displayed some results as you type. This is the suggestion search. You can type words or dates in this field.&nbsp;Results include three types of items:

*   Documents (10),
*   Users (5),
*   Suggested saved searches (5).

#### Search on Keywords

Search on documents is done on the document's title only. The query mixes prefix-based search and stemming search and uses the AND operator:

1.  The word that you are typing is searched for using a mix of stemming and prefix-based search: the system analyzes the typed string, determines the stem and adds a * wildcard. For instance "sec" will return documents having this string in their stemmed title, like "second", "section").
2.  As soon as you type another word, stemming only is used on the completed word(s) and stemming and prefix mixed search is done the last word of the list, the one you are typing.

For instance:

1.  In the quick search field, type "second".
    As soon as you type "sec", the system will suggest documents with titles like "sections", "second workspace", "second news", "7 seconds news clip", i.e. documents with the string "sec" somewhere in their stemmed title.

    ![]({{file name='search-suggestion-SEC.png'}} ?w=250,border=true,thumbnail=true)

    As you type, the list of suggested document is narrowed to match the typed characters. You end up with documents like&nbsp;"second workspace",&nbsp;"second news", "7 seconds news clip", "secondary newsletter".

    ![]({{file name='search-suggestion-SECOND.png'}} ?w=250,border=true,thumbnail=true)

    {{#> accordian heading='Click to see the executed NXQL query...' closed='true'}}

    The query that is done is:

    ```
    SELECT * FROM Document WHERE ecm:fulltext_title = "second*"
    ```

    {{/accordian}}
2.  Add a second word in the search field, for instance "news".

    As you type, the system will suggest documents with title holding words whose stem is "second" and words starting with "news". From the list above, only the documents above are left:&nbsp;"second news", "7 seconds news clip".

    "second workspace" doesn't match any more because it doesn't hold a word with "news", and "secondary newsletter" is not suggested anymore because the stem for "secondary" is "secondar" and not "second".

    ![]({{file name='search-suggestion-SECOND-NEWS.png'}} ?w=250,border=true,thumbnail=true)

    {{#> accordian heading='Click to see the executed NXQL query...' closed='true'}}

    The query that is done is:

    ```
    SELECT * FROM Document WHERE ecm:fulltext_title = "second news*"
    ```

    {{/accordian}}

You can use the&nbsp;[operators](#operators)&nbsp;- and OR in the suggestion search.

#### Search on Dates

On the same principle, you can type a date in the quick search field. The system searches for documents that hold the numbers in their title.&nbsp;

It also suggests several faceted searches:

*   Documents with the date as a keyword,
*   Documents created before the date,
*   Documents created after the date,
*   Documents modified before the date,
*   Document modified after the date.

To be recognized as such in the search field, dates must be formatted with a 4-digits year. Month and days are expected to be ordered with the month before the day (MM/DD), following the ISO 8601 standard. So if you type "04/08/2013", the suggestion will display search based on the April 8th 2013\. The date being a 4-digits number, it can actually be either at the beginning or the end of the date (2013/04/08 or 04/08/2013). To search for a date, you can use space, dash, underscore, colon or slash as a separator between the year, month and day.

#### Search on Users and Groups

You can also use the quick search box to search users and groups.If you type a user's first name, last name or username, or a group's ID or label, the system searches for documents that have the typed name in their title, but also for users and groups.

When the system finds a user, it suggests to show his information.

&nbsp;

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='More in User Documentation'}}

*   [Default Search]({{page page='default-search'}})
*   [Searching the Nuxeo Platform]({{page page='searching-the-nuxeo-platform'}})
*   [Saved Searches]({{page page='saved-searches'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Configuring and Customizing Search '}}

*   [Indexing and Querying How-To Index]({{page space='nxdoc60' page='indexing-and-querying-how-to-index'}})
*   [Full-Text Queries]({{page space='nxdoc60' page='full-text-queries'}})
*   [Indexing and Query]({{page space='nxdoc60' page='indexing-and-query'}})

{{/panel}}</div></div>