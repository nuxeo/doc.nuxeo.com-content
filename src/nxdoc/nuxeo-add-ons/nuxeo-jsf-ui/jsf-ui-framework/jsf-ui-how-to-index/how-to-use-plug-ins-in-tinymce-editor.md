---
title: 'HOWTO: Use Plug-Ins in TinyMCE Editor'
review:
    comment: ''
    date: '2015-12-01'
    status: ok
details:
    howto:
        excerpt: Learn how to customize TinyMCE by adding new plug-ins. We will use the textcolor plug-in as an example.
        level: Intermediate
        tool: Code
        topics: 'Plug-ins, TinyMCE, JSF UI'
labels:
    - content-review-lts2016
    - howto
    - tinymce
    - atchertchian
    - tinymce-component
    - content-review-lts2017
toc: true
confluence:
    ajs-parent-page-id: '20517820'
    ajs-parent-page-title: JSF UI How-To Index
    ajs-space-key: NXDOC
    ajs-space-name: Nuxeo Platform Developer Documentation
    canonical: How+to+Use+Plug-Ins+in+TinyMCE+Editor
    canonical_source: 'https://doc.nuxeo.com/display/NXDOC/How+to+Use+Plug-Ins+in+TinyMCE+Editor'
    page_id: '20519593'
    shortlink: qRo5AQ
    shortlink_source: 'https://doc.nuxeo.com/x/qRo5AQ'
    source_link: /display/NXDOC/How+to+Use+Plug-Ins+in+TinyMCE+Editor
tree_item_index: 1000
history:
    -
        author: Solen Guitter
        date: '2016-09-05 09:49'
        message: pdate how-to topic
        version: '14'
    -
        author: Manon Lumeau
        date: '2016-06-09 13:56'
        message: ''
        version: '13'
    -
        author: Arnaud Kervern
        date: '2016-04-06 14:32'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2015-01-30 13:55'
        message: ''
        version: '11'
    -
        author: Manon Lumeau
        date: '2015-01-13 10:31'
        message: ''
        version: '10'
    -
        author: Manon Lumeau
        date: '2015-01-13 10:11'
        message: ''
        version: '9'
    -
        author: Solen Guitter
        date: '2014-12-01 11:40'
        message: Add link to nuxeo.conf page
        version: '8'
    -
        author: Solen Guitter
        date: '2014-12-01 11:29'
        message: ''
        version: '7'
    -
        author: Thierry Martins
        date: '2014-11-29 22:06'
        message: ''
        version: '6'
    -
        author: Thierry Martins
        date: '2014-11-28 19:45'
        message: ''
        version: '5'
    -
        author: Thierry Martins
        date: '2014-11-28 19:37'
        message: wip
        version: '4'
    -
        author: Thierry Martins
        date: '2014-11-27 14:14'
        message: ''
        version: '3'
    -
        author: Thierry Martins
        date: '2014-11-26 19:02'
        message: ''
        version: '2'
    -
        author: Thierry Martins
        date: '2014-11-26 16:33'
        message: ''
        version: '1'

---
In this how-to, we consider you already [developed with Nuxeo Platform]({{page page='develop-with-nuxeo-platform'}}) with the necessary commands in the `deployment-fragment.xml` to copy the `web` resources to `$NUXEO/nxserver/nuxeo.war`. As an example, we will explain how to install the [textcolor plug-in](http://www.tinymce.com/wiki.php/Plugin:textcolor).

# Adding the TinyMCE textcolor Plug-In

The general procedure to make a new plug-in available is to apply the initialization code, provided in the plug-in documentation, to the `tinyMCE#init` method in `tinymce_init.js`.

1.  Go to the [textcolor page](http://www.tinymce.com/wiki.php/Plugin:textcolor), that provides the initialization code.

    ```js
    tinymce.init({
        plugins: "textcolor",
        toolbar: "forecolor backcolor"
    });
    ```

2.  Copy the pristine version of [tinymce_init.js](https://github.com/nuxeo/nuxeo/blob/master/nuxeo-jsf/nuxeo-platform-ui-web/src/main/resources/tinymce/tinymce_init.js)&nbsp;under your project's `src/main/resources/web/nuxeo.war/tinymce`.

    {{#> callout type='info' }}

    In the sources of the `nuxeo-platform-ui-web` plug-in, TinyMCE files are under `src/main/resources` but it requires an extra command in the `deployment-fragment.xml`:

    `<copy from= "nxwebplatform.tmp/tinymce/" to= "nuxeo.war/tinymce/" />`

    Also, ensure you are requiring `<require>org.nuxeo.ecm.platform.ui</require>` to override the default file.

    {{/callout}}
3.  Open your `tinymce_init.js` file.

4.  Copy the `plugins` argument of the textcolor definition and insert it in the `plugins` argument of your file.

    ```js
    plugins : ["textcolor link image code searchreplace paste visualchars charmap table fullscreen preview nuxeoimageupload nuxeolink"],
    ```

5.  Copy the `toolbar` argument of the textcolor definition and insert it in the `toolbar3` argument of your file. This will add the buttons on the third line of the TinyMCE toolbar.

    ```js
    toolbar3 : "forecolor backcolor | table | hr removeformat visualchars | subscript superscript | charmap preview | fullscreen nuxeoimageupload nuxeolink",
    ```

    The resulting code is:

    ```js
      tinyMCE
          .init({
            width : width,
            height : height,
            mode : "exact",
            theme : "modern",
            elements : eltId,
            plugins : ["textcolor link image code searchreplace paste visualchars charmap table fullscreen preview nuxeoimageupload nuxeolink"],
            language : lang,
            // Img insertion fixes
            relative_urls : false,
            remove_script_host : false,
            toolbar1 : "bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | formatselect fontselect fontsizeselect",
            toolbar2 : "paste pastetext searchreplace | bullist numlist | outdent indent | undo redo | link unlink anchor image code",
            toolbar3 : "forecolor backcolor | table | hr removeformat visualchars | subscript superscript | charmap preview | fullscreen nuxeoimageupload nuxeolink",
            menubar: false,

            // TODO : upgrade the skin "o2k7" with the new version
            /*skin : "o2k7",
            skin_variant : "silver",
            theme_advanced_disable : "styleselect",
            theme_advanced_buttons3 : "hr,removeformat,visualaid,|,sub,sup,|,charmap,|",
            theme_advanced_buttons3_add : toolbar, */

            setup : function(ed) {
              ed.on('init', function(ed) {
                loaded = true;
              });
            }
          });
    }
    ```

    And that's how the new icons will be displayed:

    ![]({{file name='tinymce-textcolor.png'}} ?w=600,border=true)

# Using Hot-Reload

While the development mode is activated, you can use the hot-reload of the files located in `$NUXEO/nxserver/nuxeo.war` to test the customization of TinyMCE in live, without spending time in server restarts.

1.  In [`nuxeo.conf`]({{page page='configuration-parameters-index-nuxeoconf'}}), set the property `org.nuxeo.dev` to `true`.
2.  Start the Nuxeo Platform and in a browser, go to the creation form of a Note document.
3.  Open the file `$NUXEO/nxserver/nuxeo.war/tinymce/tinymce_init.js` in your favorite JavaScript editor.
4.  Apply the needed modifications and save the file.
5.  In your browser, reload (F5) the page and observe the changes in the rich text editor.

# Useful Links

*   [http://www.tinymce.com/wiki.php/Configuration](http://www.tinymce.com/wiki.php/Configuration)

*   [http://www.tinymce.com/wiki.php/Plugins](http://www.tinymce.com/wiki.php/Plugins)

&nbsp;

* * *
