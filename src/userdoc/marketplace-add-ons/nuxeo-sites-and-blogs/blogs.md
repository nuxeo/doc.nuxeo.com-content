---
title: Blogs
review:
    comment: ''
    date: ''
    status: ok
labels:
    - blogs
    - webengine
toc: true
confluence:
    ajs-parent-page-id: '21299473'
    ajs-parent-page-title: Nuxeo Sites and Blogs
    ajs-space-key: USERDOC60
    ajs-space-name: Nuxeo Platform User Documentation — 6.0
    canonical: Blogs
    canonical_source: 'https://doc.nuxeo.com/display/USERDOC60/Blogs'
    page_id: '21299533'
    shortlink: TQFFAQ
    shortlink_source: 'https://doc.nuxeo.com/x/TQFFAQ'
    source_link: /display/USERDOC60/Blogs
history:
    - 
        author: Solen Guitter
        date: '2016-08-30 15:44'
        message: ''
        version: '12'
    - 
        author: Manon Lumeau
        date: '2014-12-08 12:07'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-10-22 15:35'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-09-30 17:14'
        message: Removed related topics from TOC
        version: '9'
    - 
        author: Solen Guitter
        date: '2012-10-01 18:29'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2012-07-03 17:14'
        message: Migrated to Confluence 4.0
        version: '7'
    - 
        author: Solen Guitter
        date: '2012-07-03 17:14'
        message: Added related pages
        version: '6'
    - 
        author: Solen Guitter
        date: '2011-11-24 10:38'
        message: Added toc
        version: '5'
    - 
        author: Solen Guitter
        date: '2011-06-06 14:53'
        message: ''
        version: '4'
    - 
        author: Solen Guitter
        date: '2010-09-29 16:16'
        message: ''
        version: '3'
    - 
        author: Solen Guitter
        date: '2010-09-29 15:20'
        message: ''
        version: '2'
    - 
        author: Solen Guitter
        date: '2010-09-29 14:27'
        message: ''
        version: '1'

---
Along with [websites]({{page page='websites'}}), the Document Management module of the Nuxeo Platform includes blogs. Like websites, blogs are documents that make it easy to display your comments and documents, in reverse-chronological order. And like websites, they are available via a WebEngine interface, that takes into account all the characteristics of a blog.

![]({{file name='DM-blog-view.png'}} ?w=650,border=true)

Blogs are accessible by a URL formed like [http://server:8080/nuxeo/site/blogs/blog-name](http://server:8080/nuxeo/site/blogs/blog-name). Click on the icon&nbsp;![]({{file name='switch.png' page='icons-index'}}) to open the front office view of the blog.

## Creating a Blog

Blogs can be created in workspaces only. You just need to have "Write" right to be able to create a new blog.

**To create a blog:**

1.  In the **Content** tab of the workspace, click on the **New** button.

2.  On the window **Available document types**, click **Blog**.
    ![]({{file name='available-doctypes-website-blog.png' page='websites'}} ?w=400)

3.  Fill in the blog's creation form.

4.  Click on the **Create** button.

**Blog parameters**

<table><tbody><tr><th colspan="1">

Field

</th><th colspan="1">

Description

</th></tr><tr><td colspan="1">

Blog name

</td><td colspan="1">

Type the name of your blog. This name will be displayed on top of all blog's pages.

</td></tr><tr><td colspan="1">

Baseline

</td><td colspan="1">

Type a brief description or catchphrase for your blog. This baseline will be displayed on all pages below the blog's name.

</td></tr><tr><td colspan="1">

Email

</td><td colspan="1">

Type the webmaster's email address. This address will be used for the contact link.

</td></tr><tr><td colspan="1">

Logo

</td><td colspan="1">

Default logo is Nuxeo's. You can upload the logo of your choice to replace Nuxeo's logo with one adapted to your blog's subject.

</td></tr><tr><td colspan="1">

Welcome text

</td><td colspan="1">

Type a text that will be displayed on the home page of your blog.

</td></tr><tr><td colspan="1">

Welcome Animation/Image

</td><td colspan="1">

You can add a SWF animation or a picture on your blog's home page.

</td></tr><tr><td colspan="1">

Captcha

</td><td colspan="1">

Check the box your you want users to type letters or digits from a distorted image displayed on forms, to secure content creation on your blog.

</td><td colspan="1">

&nbsp;

</td></tr><tr><td colspan="1">

Moderation Type

</td><td colspan="1">

Select if comments posted on your blog should be should be approved to become visible by users (beforehand moderation) or if they are published immediately (afterwards moderation).

</td></tr></tbody></table>

## Adding Content to Your Blog

In a blog, you can create blog posts and contextual links.

### Adding a Blog Post

Blog posts are all created at the root of the blog. They are then automatically sorted by creation date in the left menu of the blog.

You need "Write" permission to be able to create blog posts. You can create them from the blog's back-office (Document Management interface) or from the blog's interface.

**To create a blog post:**

1.  From the blog's homepage, click on the button **Create entry**.
2.  Fill in the creation form:
    *   Title: type the name of your post.
    *   Description: type a text describing what the post is about.
    *   Content: type the content of your post in the editor.
3.  Click on the button **Save**
    The post is immediately created and displayed. It is also displayed in the last blog posts.

### Adding a Contextual Link

Contextual links are links displayed on the blog's home page.
They can be added from the blog's back-office only.

**To add a contextual link:**

1.  On the **Content** tab of the blog from the back-office interface, click on the **New** button.
2.  On the modal window displayed, click on **Contextual link**.
3.  Fill in the creation form:
    *   Title: type the text on which the user will click to open the link.
    *   Description: type an optional text describing why you add this link. The description is displayed on the blog's interface.
    *   Link: type the URL of the link.
4.  Click on the button **Create**.
    The link is created and its **Summary** tab is displayed.
    In the blog's interface, the link is displayed in the right column.

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages in this documentation'}}

*   [Nuxeo Sites and Blogs]({{page page='nuxeo-sites-and-blogs'}})
*   [Managing Access Rights]({{page page='managing-access-rights'}})

{{/panel}}</div><div class="column medium-6">{{#> panel heading='Customization'}}

*   [WebEngine (JAX-RS)]({{page space='nxdoc60' page='webengine-jax-rs'}})

{{/panel}}</div></div>