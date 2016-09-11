---
title: Websites
review:
    comment: ''
    date: ''
    status: ok
labels:
    - websites
    - webengine
toc: true
confluence:
    ajs-parent-page-id: '21299473'
    ajs-parent-page-title: Nuxeo Sites and Blogs
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Websites
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Websites'
    page_id: '21299530'
    shortlink: SgFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/SgFFAQ'
    source_link: /display/USERDOC60/Websites
history:
    - 
        author: Solen Guitter
        date: '2016-08-30 15:50'
        message: ''
        version: '34'
    - 
        author: Manon Lumeau
        date: '2014-12-08 12:01'
        message: ''
        version: '33'
    - 
        author: Solen Guitter
        date: '2013-10-22 14:39'
        message: ''
        version: '32'
    - 
        author: Solen Guitter
        date: '2013-10-22 14:32'
        message: ''
        version: '31'
    - 
        author: Solen Guitter
        date: '2013-10-22 14:26'
        message: Update for 5.8
        version: '30'
    - 
        author: Solen Guitter
        date: '2013-09-30 17:23'
        message: Removed related topics from TOC
        version: '29'
    - 
        author: Solen Guitter
        date: '2013-07-02 15:36'
        message: ''
        version: '28'
    - 
        author: Solen Guitter
        date: '2012-10-01 18:29'
        message: ''
        version: '27'
    - 
        author: Solen Guitter
        date: '2012-07-24 11:42'
        message: Migrated to Confluence 4.0
        version: '26'
    - 
        author: Solen Guitter
        date: '2012-07-24 11:42'
        message: ''
        version: '25'
    - 
        author: Solen Guitter
        date: '2012-07-24 11:38'
        message: ''
        version: '24'
    - 
        author: Solen Guitter
        date: '2012-07-03 17:45'
        message: ''
        version: '23'
    - 
        author: Solen Guitter
        date: '2012-07-03 17:12'
        message: Added related pages
        version: '22'
    - 
        author: Solen Guitter
        date: '2011-11-24 10:41'
        message: Added toc
        version: '21'
    - 
        author: Solen Guitter
        date: '2011-11-08 17:09'
        message: ''
        version: '20'
    - 
        author: Julien Carsique
        date: '2011-06-23 14:35'
        message: ''
        version: '19'
    - 
        author: Solen Guitter
        date: '2011-06-06 14:54'
        message: ''
        version: '18'
    - 
        author: Solen Guitter
        date: '2010-11-03 16:47'
        message: ''
        version: '17'
    - 
        author: Stéfane Fermigier
        date: '2010-10-15 11:58'
        message: ''
        version: '16'
    - 
        author: Solen Guitter
        date: '2010-09-29 15:20'
        message: ''
        version: '15'
    - 
        author: Solen Guitter
        date: '2010-09-29 13:55'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2010-09-29 12:21'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2010-09-29 11:57'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2010-09-29 11:50'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2010-09-29 11:39'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2010-09-29 10:04'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2010-09-28 18:24'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2010-09-28 17:35'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2010-09-28 17:18'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2010-09-28 17:01'
        message: ''
        version: '5'
    - 
        author: Solen Guitter
        date: '2010-09-28 15:34'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2010-09-28 15:22'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2010-09-27 18:09'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2010-09-27 17:54'
        message: ''
        version: '1'

---
Websites are documents in which you can publish webpages and contextual links. To make it even easier to display your documents, they have a specific presentation, rendered using [Nuxeo WebEngine]({{page space='nxdoc60' page='webengine-jax-rs'}}).

![]({{file name='DM-website-view.png'}} ?w=650,border=true)

The creation of a website takes place in workspaces, in the regular Document Management interface. Content creation, edition and commenting will preferably take place in Nuxeo WebEngine interface. Website management will however take place in the Document Management interface, which is considered as the website's back-office.

Websites are accessible by a URL formed like [http://server:8080/nuxeo/site/sites/site-name](http://server:8080/nuxeo/site/sites/site-name). Click on the icon ![]({{file name='switch.png' page='icons-index'}}) to open the front office view of the website.

![]({{file name='DM-website-content-tab.png'}} ?w=650,border=true)

## Creating a Website

Websites can be created in workspaces only. You just need to have "Write" right to be able to create a new website.

**To create a website:**

1.  In the **Content** tab of the workspace, click on the **New** button.
2.  On the window **Available document types**, click Website.
    ![]({{file name='available-doctypes-website-blog.png'}} ?w=400)
3.  Fill in the document's creation form.

4.  Click on the **Create** button.

**Website parameters**

<table><tbody><tr><th colspan="1">

Field

</th><th colspan="1">

Description

</th></tr><tr><td colspan="1">

Site name

</td><td colspan="1">

Type the name of your website. This name will be displayed on top of all website's pages.

</td></tr><tr><td colspan="1">

Baseline

</td><td colspan="1">

Type a brief description or catchphrase for your website. This baseline will be displayed on all webpages below the site's name.

</td></tr><tr><td colspan="1">

Email

</td><td colspan="1">

Type the webmaster's email address. This address will be used for the contact link.

</td></tr><tr><td colspan="1">

Logo

</td><td colspan="1">

Default logo is Nuxeo's. You can upload the logo of your choice to replace Nuxeo's logo with one adapted to your website's subject.

</td></tr><tr><td colspan="1">

Welcome Text

</td><td colspan="1">

Type a text that will be displayed on the home page of your website.

</td></tr><tr><td colspan="1">

Welcome Animation/Image

</td><td colspan="1">

You can add a swf animation or a picture on your website's home page.

</td></tr><tr><td colspan="1">

Captcha

</td><td colspan="1">

Check the box your you want users to type letters or digits from a distorted image displayed on forms, to secure content creation on your website.

</td></tr><tr><td colspan="1">

Moderation Type

</td><td colspan="1">

Select if comments posted on your website should be should be approved to be visible by user (beforehand moderation) or if they are published immediately (afterwards moderation).

</td></tr></tbody></table>

## Adding Content to a Website

In a website, you can create pages and contextual links.

### Adding a Webpage

Webpages can be created at the root of a website or in another page. You can create pages from the Document Management interface (which would be considered as the back-office of the website) or from the website interface.

**To create a webpage:**

1.  In the website interface, click on the button **Create page** located in the right column.
2.  Fill in the creation form:
    *   Title: give your page a title
    *   Description: type an optional text describing what the page is about.
    *   Select the format used to present the content of the page and type the text in the editor displayed below.
    *   Display this page in the webview menu: Select if you want the page to be displayed in the website menu.
3.  Click on the button **Save**.
    The page is created and displayed.

### Adding a Contextual Link

Contextual links are links that are displayed from a webpage, in the right column of the website. Contextual links can only be created from the website's back-office, at the root of the application.

**To create a contextual link:**

1.  On the **Content** tab of the website from the back-office interface, click on the **New** button.
2.  On the modal window displayed, click on **Contextual link**.
3.  Fill in the creation form:
    *   Title: type the text on which the user will click to open the link.
    *   Description: type an optional text describing why you add this link. The description is displayed on the website's interface.
    *   Link: type the URL of the link.
4.  Click on the button **Create**.
    The link is created and its **Summary** tab is displayed.
    In the website interface, the link is displayed in the right column.

## Managing the Access to the Website

In a website, access rights can be managed on the website itself and on the webpages. The steps to grant or refuse access rights are the same as on a workspace or a folder (see [Managing Access Rights]({{page page='managing-access-rights'}})).

However, websites have specific access rights:

*   Comment
*   Moderate

In a website, users with "Read" write cannot comment on pages unless they are explicitly give the right to comment.
If beforehand moderation is applied to the website, then users with "moderate" rights will have to approve comments so that they can be viewed by other users.

{{#> callout type='tip' }}

Users with "Write" permission can comment on pages. Comments are still submitted to moderation.
Users with "Manage everything" permission are automatically moderators.

{{/callout}}<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in this documentation'}}

*   [Nuxeo Sites and Blogs]({{page page='nuxeo-sites-and-blogs'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Customization'}}

*   [WebEngine (JAX-RS)]({{page space='nxdoc60' page='webengine-jax-rs'}})

{{/panel}}</div></div>