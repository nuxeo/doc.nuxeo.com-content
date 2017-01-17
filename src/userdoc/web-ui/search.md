---
title: Search
review:
    comment: ''
    date: '2017-01-04'
    status: ok
toc: true
description: Web UI user documentation about Search
---
The Nuxeo Platform provides different to search your documents. A Search tab in the&nbsp;side menu and a quick search at the top of the page.

## Quick Search
Quick search can be accessed from any site page. At any time, you can search a document by typing keywords in the search box located at the upper right corner of the page.

SCREENSHOT

Typing keywords in the search field and pressing the "Enter" key triggers a full-text search. Full-text search follows the criteria below:
- Based on stemming
- With AND operator (all words must be in the document)
- Searching on the title, the description and the content (text of a note, content of the main attachment of a file)

</br>

**To search a document using quick search:**

1. Type your keywords in the quick search field.
    Matching documents are suggested as you type.
    SCREENSHOT
2. Click on the document's name to open it.

</br>

When you start typing words in the quick search field, in the top right corner of the page, you are displayed some results as you type. This is the suggestion search. You can type words or dates in this field. Results include three types of items:
- Documents
- User
- Group


## Search Tab

The Search tab enables you to search a document using documents metadata. You can for instance select metadata of the searched document or the date of specific events such as publication, creation.

The Search tab leverages Elasticsearch to provide a quicker and more efficient search. The search form uses Elasticsearch aggregates for most fields: aggregate fields values are filtered so as to display only relevant values and show the count of matching documents for each value.

This search offers several search criteria, that you can associate to define your search and find documents. When you associate different criteria, the query is built following this principle:
```sql
SELECT * FROM Document WHERE (criterion1 = value1 OR criterion1 = value2) AND (criterion2 = valueA OR criterion2 = valueB) AND criterion 3 = something
```
</br>

**To search documents using the Search tab**

1. Click on the **Search** tab.
2. Fill in the form with your criteria.
  The results are automatically updated depending on the selected search criteria.

SCREENSHOT

{{#> callout type='note' }}

- **Collections** and **Text search** do not rely on Elasticsearch aggregates. So they are not pre-filtered depending on already selected search criteria and do not trigger the query.
- **Size**: Folderish documents such as workspaces and folders have a 0 Kb size, whatever their content.

{{/callout}}

### Saved Search

You can save searches done using the search tab so as to be able to reuse them at anytime. You can run and manage them from the Search tab.

When you save a search, you save its criteria. This means that the results displayed when you reuse the search may be different from the results at the time you saved the search, as the content of the application may (and probably will) have changed. Saved searches also include the results columns and sort criteria selected when the search was saved.

You can save as many searches you need: Click on the **Save as** button when you are satisfied with your query and results. Then give your search a title and confirm save.

SCREENSHOT

Saved searches are available in the Search tab drop down list. To load a search, just click on it in the list, it is automatically executed.

### Manage Search

**Share a Search**
Saved searches are private by default. But you can share them by [giving permissions]({{page page='managing-permissions'}}) on them. Select the search that you want to share from the Search tab drop down list and click on the more icon (ICON) and then on **Share**. The permission pop-up will be displayed.

**Delete a Search**
You can manage and delete your saved search from the Search tab drop down list, select the search that you want to manage, click on the Delete button and confirm deletion. Select the search that you want to delete from the Search tab drop down list, click on the more icon (ICON) and then on **Delete** and confirm.

## Assets Tab

{{{multiexcerpt 'assets-search' page='userdoc/digital-asset-management-with-the-nuxeo-platform'}}}
