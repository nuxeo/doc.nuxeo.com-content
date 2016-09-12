---
title: Test Page
review:
    comment: 'This page is not ok'
    date: '2016-09-12'
    status: not-ok
labels:
    - test
---


{{! excerpt}}
This is my excerpt
{{! /excerpt}}

{{! multiexcerpt name='my-multiexcerpt'}}
This is my multi-excerpt
{{! /multiexcerpt}}

{{> wistia_video id='258cvm9i4j'}}

{{{multiexcerpt 'my-multiexcerpt' page='Test Page'}}}

{{{excerpt}}}
