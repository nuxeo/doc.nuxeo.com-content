---
title: 'HOWTO: Populate a Directory With a CSV File'
review:
    comment: ''
    date: '2020-04-14'
    status: ok
details:
    howto:
        excerpt: Learn how to populate a directory with a CSV file.
        level: Beginner
        tool: Code
        topics: 'Directory, Vocabulary'
labels:
    - vocabulary
    - howto
    - excerpt
tree_item_index: 600
history:
---

{{! excerpt}}
Nuxeo Platform allows you to upload a CSV file through Automation to populate a directory.
{{! /excerpt}}

This could be used to load directory entries while Nuxeo is running.

1. Prepare a CSV file representing the data you want to load, let's name it `data.csv`.</br>
    For example, on a vocabulary, the content should look like below:

   ```csv
   id, label, obsolete, ordering
   1,A,0,1
   2,B,0,2
   ```

1. Now you can use cURL to post this file along with the automation parameters to `Document.LoadFromCSV`:

   ```bash
   curl -XPOST -u Administrator:Administrator -F request='{"params":{"directoryName":"DIRECTORY_NAME", "dataLoadingPolicy":"skip_duplicate"}, "context":{}}' -F 'input=@data.csv' http://NUXEO_SERVER/nuxeo/site/automation/Directory.LoadFromCSV
   ```

   We used the `skip_duplicated` in order to not corrupt existing data, there're [other policies]({{page page='data-lists-and-directories'}}).

* * *

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related Howtos'}}

- [HOWTO: Add a New Vocabulary]({{page page='how-to-add-a-new-vocabulary'}})
- [HOWTO: Translate the Nuxeo Platform]({{page page='how-to-translate-the-nuxeo-platform'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Related Documentation'}}

- [Data Lists and Directories]({{page page='data-lists-and-directories'}})

{{/panel}}</div></div>
