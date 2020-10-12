---
title: Content Upload Test Cases
review:
    comment: ''
    date: '2020-10-06'
    status: ok
labels:
    - content-upload
    - webui
    - nuxeo-drive
toc: true
tree_item_index: 100
---

## Overview



## Impacting Factors of an Upload Test Case and Test Cases Variations

We list here the factors that have an impact on the upload behavior.

### Network Conditions

Beside the obvious time impact, we have observed that bandwidth has an impact on error cases. We will test and document the following conditions:
- 10MB/s (~Fiber / Wifi)
- 1MB/s (~DSL)
- 500KB/s (~bad 3G)

### Server-side Architecture

There are more than 15 parameters of the Server side architecture that can impact the upload experience. We will only consider only two variations, the other parameters are to be optimized for those two variations:
- Upload via Nuxeo Servlet
- Direct upload to S3

## Upload Features Matrix

We list here all features that can be expected for a content upload experience.

| Upload one file at a time                                                      | Web UI | Direct Transfer | Aspera | Salesforce | Adobe CC | Outlook |
| ------------------------------------------------------------------------------ | ------ | --------------- | ------ | ---------- | -------- | ------- |
| Upload a set of files                                                          |        |                 |        |            |          |         |
| Upload a flat folder                                                           |        |                 |        |            |          |         |
| Upload a hierarchy of folders                                                  |        |                 |        |            |          |         |
| See global upload progress                                                     |        |                 |        |            |          |         |
| See upload progress per file                                                   |        |                 |        |            |          |         |
| Upload in background                                                           |        |                 |        |            |          |         |
| Cancel the upload of a specific file                                           |        |                 |        |            |          |         |
| Pause/resume the upload of a file                                              |        |                 |        |            |          |         |
| Cancel the upload of all files                                                 |        |                 |        |            |          |         |
| Edit metadata for all files                                                    |        |                 |        |            |          |         |
| Edit metadata per files                                                        |        |                 |        |            |          |         |
| Choose document type for all files                                             |        |                 |        |            |          |         |
| Choose document type per file                                                  |        |                 |        |            |          |         |
| Choose duplicates strategy for one file                                        |        |                 |        |            |          |         |
| Choose duplicates strategy for all files                                       |        |                 |        |            |          |         |
| Start new uploads while some are in progress already                           |        |                 |        |            |          |         |
| See estimated remaining time                                                   |        |                 |        |            |          |         |
| Resume after unwanted interruption (powering off, closing app, computer crash) |        |                 |        |            |          |         |
|                                                                                |        |                 |        |            |          |         |


### Limit Cases Benchmark

Nature of the file



Size of one file

|       | Bad 3G | DSL | Fiber |
| ----- | ------ | --- | ----- |
| 1MB   |        |     |       |
| 10MB  |        |     |       |
| 100MB |        |     |       |
| 500MB |        |     |       |
| 1GB   |        |     |       |
| 6GB   |        |     |       |
| 30GB  |        |     |       |
| 70GB  |        |     |       |
| 150GB |        |     |       |
| 500GB |        |     |       |
| 1.2TB |        |     |       |

Number of files

|         | Bad 3G | DSL | Fiber |
| ------- | ------ | --- | ----- |
| 10      |        |     |       |
| 20      |        |     |       |
| 50      |        |     |       |
| 100     |        |     |       |
| 250     |        |     |       |
| 500     |        |     |       |
| 1000    |        |     |       |
| 5000    |        |     |       |
| 10 000  |        |     |       |
| 15 000  |        |     |       |
| 50 000  |        |     |       |
| 100 000 |        |     |       |
| 200 000 |        |     |       |

Total size of files

|       | Bad 3G | DSL | Fiber |
| ----- | ------ | --- | ----- |
| 1MB   |        |     |       |
| 5MB   |        |     |       |
| 10MB  |        |     |       |
| 50MB  |        |     |       |
| 100MB |        |     |       |
| 250MB |        |     |       |
| 500MB |        |     |       |
| 1GB   |        |     |       |
| 2GB   |        |     |       |
| 10GB  |        |     |       |
| 20GB  |        |     |       |
| 50GB  |        |     |       |

## Tooling

### Chrome Network Throttling

If you are testing Web UI, you can use Chrome to throttle the bandwidth
You can do this opening the dev console in your browser:

SCREENSHOT


### macOS Network Throttling

## Testing Session October 2020

### Web UI

**Direct Upload**

_Size of one file_

|       | Bad 3G | DSL | Fiber |
| ----- | ------ | --- | ----- |
| 1MB   |        |     |       |
| 5MB   |        |     |       |
| 10MB  |        |     |       |
| 50MB  |        |     |       |
| 100MB |        |     |       |
| 250MB |        |     |       |
| 500MB |        |     |       |
| 1GB   |        |     |       |
| 2GB   |        |     |       |
| 10GB  |        |     |       |
| 20GB  |        |     |       |
| 50GB  |        |     |       |

_Number of files_

|         | Bad 3G | DSL | Fiber |
| ------- | ------ | --- | ----- |
| 10      |        |     |       |
| 20      |        |     |       |
| 50      |        |     |       |
| 100     |        |     |       |
| 250     |        |     |       |
| 500     |        |     |       |
| 1000    |        |     |       |
| 5000    |        |     |       |
| 10 000  |        |     |       |
| 15 000  |        |     |       |
| 50 000  |        |     |       |
| 100 000 |        |     |       |
| 200 000 |        |     |       |

### Direct Transfer
