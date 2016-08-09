---
title: How to Tag or Release Your Nuxeo Studio Project
details:
    howto:
        excerpt: Learn how to use the tags and releases features of Nuxeo Studio.
        level: Intermediate
        tool: Studio
        topics: 'Branch Management, Studio Tags'
labels:
    - howto
toc: true
confluence:
    ajs-parent-page-id: '12912677'
    ajs-parent-page-title: Tutorials
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: How+to+Tag+or+Release+Your+Nuxeo+Studio+Project
    canonical_source: >-
        https://doc.nuxeo.com/display/Studio/How+to+Tag+or+Release+Your+Nuxeo+Studio+Project
    page_id: '31034389'
    shortlink: FYzZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/FYzZAQ'
    source_link: /display/Studio/How+to+Tag+or+Release+Your+Nuxeo+Studio+Project
history:
    - 
        author: Manon Lumeau
        date: '2016-05-11 12:43'
        message: ''
        version: '2'
    - 
        author: Manon Lumeau
        date: '2016-05-11 12:34'
        message: ''
        version: '1'

---
## How to Tag Your Studio Project&nbsp;

{{! multiexcerpt name='tag'}}

In order to identify specific state of your work, you may want to tag any given commit. Once created, you will find your tag in the tags list on the&nbsp; [Releases &]({{page page='releases-and-tags'}})[Releases & Tags page]({{file name='tag-release-button.png'}})[ Tags page]({{page page='releases-and-tags'}}), which will allow you to download, revert your working state to that specific tagged state, etc.

{{! /multiexcerpt}}

From the Branch Management page:

1.  Click on the **Tag** button&nbsp;next to the commit that you want to tag.&nbsp;
    ![]({{file name='tag-release-button.png'}} ?w=350,border=true)
2.  Fill in the pop-up window with a tag name and a description.
    ![]({{file name='create-tag.png' page='branch-management'}} ?w=350,border=true)&nbsp;
    The On Commit field is in read-only and&nbsp;automatically filled, it will display the name of the tag where the release is done.
3.  Click on **Ok**.
    Your project is tagged.&nbsp;

Once you have created a new tag, it will be available from the tags tab on the [Releases & Tags page]({{page page='releases-and-tags'}}), where you will be available to manage your tags.&nbsp;

&nbsp;

## How to Release Your Studio Project&nbsp;

{{! multiexcerpt name='release'}}

A release is considered as a tested and validated version of your project. Once created, you will be able to use this stable version in production.

{{! /multiexcerpt}}

From the Branch Management page:

1.  Click on the **Release** button next to the commit that you want to release.&nbsp;
    ![]({{file name='tag-release-button.png'}} ?w=350,border=true)
2.  Fill in the pop-up window:&nbsp;
    ![]({{file name='create-release.png' page='branch-management'}} ?w=350,border=true)
    All the fields will be pre-filled but you can modify the released version and prepare your next version by checking the Next version box. You will be able to choose the type of your release or to create a custom one with a qualifier.&nbsp;

Once your release is created, it will be available in your instance, in **Update Center**&nbsp;>&nbsp; **Nuxeo Studio.** The released set of corrections is displayed in the&nbsp; **Production mode**&nbsp;section. You can now install like you would&nbsp;[install a nuxeo package]({{page space='nxdoc' page='installing-a-new-package-on-your-instance'}}).&nbsp;

![]({{file name='production_mode_1.0.1.png' page='how-to-implement-features-using-branches'}} ?w=650,border=true)