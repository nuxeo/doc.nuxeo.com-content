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
