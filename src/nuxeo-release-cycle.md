---
title: Nuxeo Release Cycle
review:
    comment: ''
    date: '2017-08-09'
    status: ok
confluence:
    ajs-parent-page-id: '3868746'
    ajs-parent-page-title: Nuxeo Documentation Center Home
    ajs-space-key: MAIN
    ajs-space-name: Main
    canonical: Nuxeo+Release+Cycle
    canonical_source: 'https://doc.nuxeo.com/display/MAIN/Nuxeo+Release+Cycle'
    page_id: '14254883'
    shortlink: I4PZ
    shortlink_source: 'https://doc.nuxeo.com/x/I4PZ'
    source_link: /display/MAIN/Nuxeo+Release+Cycle
hidden: true
private: true    
history:
    -
        author: Solen Guitter
        date: '2015-09-25 12:27'
        message: ix double negatio
        version: '7'
    -
        author: Solen Guitter
        date: '2015-09-25 11:16'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2014-11-26 17:19'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-04-10 18:16'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2013-11-06 15:14'
        message: Updated version numbers
        version: '3'
    -
        author: Florent Guillaume
        date: '2013-11-06 15:10'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2013-06-13 11:46'
        message: ''
        version: '1'
---
The release cycle consists in providing two kinds of releases: Fast Track releases and LTS releases.

LTS (for Long Term Support) releases are maintained for three years. These versions will get all the hotfixes during that time span, but new features will only be available for version releases, which will happen about once a year. LTS versions are named from the year they are released, so LTS 2015, LTS 2016, etc. LTS version number ends with .10 and the major number matches the Fast Track cycle that led to the LTS. The LTS 2016 is the results the 8.x Fast Track versions and so its number is 8.10.

Fast Track releases are for those who can't wait to see the new features the team is developing. Fast Track versions are released roughly every 3 months. This release cycle is better for customers who prefer flexibility and fast availability of new features over maintenance duration. Fast Track releases are commonly used for testing and prototyping. They won&rsquo;t have regular hotfixes unless there&rsquo;s a blocker issue: the idea is to move to the next LTS release for all the fixes. It will also be supported only for our most common environment: Linux, Tomcat, PostgreSQL/Oracle.

On the same principle, LTS 2017 documentation will be created from FT documentation when Nuxeo Platform LTS 2017 is released.

![](https://www.lucidchart.com/publicSegments/view/917d1d9e-1c2b-417f-9660-ddd0af4269f6/image.png ?w=600,h=195,border=true)
