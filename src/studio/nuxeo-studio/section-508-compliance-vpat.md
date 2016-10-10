---
title: Section 508 Compliance (VPAT)
review:
    comment: ''
    date: ''
    status: ok
labels:
    - content-review-6-0
confluence:
    ajs-parent-page-id: '19793788'
    ajs-parent-page-title: Nuxeo Studio
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: viewpage.action?pageId=19235576
    canonical_source: viewpage.action?pageId=19235576
    page_id: '19235576'
    shortlink: _IIlAQ
    shortlink_source: 'https://doc.nuxeo.com/x/_IIlAQ'
    source_link: /pages/viewpage.action?pageId=19235576
history:
    - 
        author: Thibaud Arguillere
        date: '2014-04-30 22:26'
        message: ''
        version: '10'
    - 
        author: Thibaud Arguillere
        date: '2014-04-30 22:24'
        message: ''
        version: '9'
    - 
        author: Thibaud Arguillere
        date: '2014-04-30 22:23'
        message: ''
        version: '8'
    - 
        author: Thibaud Arguillere
        date: '2014-04-30 22:20'
        message: ''
        version: '7'
    - 
        author: Thibaud Arguillere
        date: '2014-04-30 22:19'
        message: ''
        version: '6'
    - 
        author: Thibaud Arguillere
        date: '2014-04-30 22:17'
        message: ''
        version: '5'
    - 
        author: Thibaud Arguillere
        date: '2014-04-30 22:15'
        message: ''
        version: '4'
    - 
        author: Thibaud Arguillere
        date: '2014-04-30 20:53'
        message: ''
        version: '3'
    - 
        author: Thibaud Arguillere
        date: '2014-04-30 20:45'
        message: ''
        version: '2'
    - 
        author: Thibaud Arguillere
        date: '2014-04-30 20:43'
        message: ''
        version: '1'

---
**Date**: <span style="color: rgb(255,0,0);">_&nbsp;_ <span style="color: rgb(0,0,0);">April 30, 2014 - (_Work in progress_)</span></span>

**Product**: Nuxeo Studio

&nbsp;

<div class="table-scroll"><table class="hover"><colgroup><col> <col> <col></colgroup> <tbody><tr><td colspan="3">Summary Table</td></tr><tr><td colspan="1">Guideline</td><td colspan="1">Applicable</td><td colspan="1">Compliance</td></tr><tr><td colspan="1">Section 1194.21 Software Applications and Operating Systems</td><td colspan="1">Applicable</td><td colspan="1">Supports with exceptions</td></tr><tr><td colspan="1">Section 1194.22 Web-based internet information and applications</td><td colspan="1">Applicable</td><td colspan="1">Supports with exceptions</td></tr><tr><td colspan="1">Section 1194.23 Telecommunications Products</td><td colspan="1">Not Applicable</td><td colspan="1">-</td></tr><tr><td colspan="1">Section 1194.24 Video and Multi-media Products</td><td colspan="1">Not Applicable</td><td colspan="1">-</td></tr><tr><td colspan="1">Section 1194.25 Self-Contained, Closed Products</td><td colspan="1">Not Applicable</td><td colspan="1">-</td></tr><tr><td colspan="1">Section 1194.26 Desktop and Portable Computers</td><td colspan="1">Not Applicable</td><td colspan="1">-</td></tr><tr><td colspan="1">Section 1194.31 Functional Performance Criteria</td><td colspan="1">Applicable</td><td colspan="1">Supports with exceptions</td></tr><tr><td colspan="1">Section 1194.41 Information, Documentation, and Support</td><td colspan="1">Applicable</td><td colspan="1">Supports with exceptions</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="3">Section 1194.21 Software Applications and Operating Systems</td></tr><tr><td colspan="1">Criteria</td><td colspan="1">Supporting Features</td><td colspan="1">Remarks</td></tr><tr><td colspan="1">(a) When software is designed to run on a system that has a keyboard, product functions shall be executable from a keyboard where the function itself or the result of performing a function can be discerned textually.</td><td colspan="1">Supports with exceptions</td><td colspan="1">Most of Nuxeo Studio's core functionality is keyboard accessible. Exceptions are: Setting hidden tabs (Document Type), "New" button</td></tr><tr><td colspan="1">(b) Applications shall not disrupt or disable activated features of other products that are identified as accessibility features, where those features are developed and documented according to industry standards. Applications also shall not disrupt or disable activated features of any operating system that are identified as accessibility features where the application programming interface for those accessibility features has been documented by the manufacturer of the operating system and is available to the product developer.</td><td colspan="1">Supports</td><td colspan="1">Nuxeo Studio does not interfere with or deactivate the accessibility features of the operating system.</td></tr><tr><td colspan="1">(c) A well-defined on-screen indication of the current focus shall be provided that movesamong interactive interface elements as the input focus changes. The focus shall be programmatically exposed so that Assistive Technology can track focus and focus changes.</td><td colspan="1">Supports with exceptions</td><td colspan="1">Nuxeo Studio provides a visual indication of focus for most interactive elements.</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">(e) When bitmap images are used to identify controls, status indicators, or other programmatic elements, the meaning assigned to those images shall be consistent throughout an application's performance.</td><td colspan="1">Supports</td><td colspan="1">Images are used consistently within Nuxeo Studio.</td></tr><tr><td colspan="1">(f) Textual information shall be provided through operating system functions for displaying text. The minimum information that shall be made available is text content, text input caret location, and text attributes.</td><td colspan="1">Supports</td><td colspan="1">Textual information is available to assistive technology in Nuxeo Studio.</td></tr><tr><td colspan="1">(g) Applications shall not override user selected contrast and color selections and other individual display attributes.</td><td colspan="1">Supports with exceptions</td><td colspan="1">Some buttons and other visual information in Nuxeo Studio is either lost or has very low contrast when used in Windows&reg; High Contrast mode.</td></tr><tr><td colspan="1">(h) When animation is displayed, the information shall be displayable in at least one non-animated presentation mode at the option of the user.</td><td colspan="1">Supports</td><td colspan="1">Nuxeo Studio has no core features that utilize animation.</td></tr><tr><td colspan="1">(i) Color coding shall not be used as the only means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.</td><td colspan="1">Supports</td><td colspan="1">In some cases Nuxeo Studio uses color to convey information, including:
1\. To display items with errors
2\. To display items with warnings</td></tr><tr><td colspan="1">(j) When a product permits a user to adjust color and contrast settings, a variety of color selections capable of producing a range of contrast levels shall be provided.</td><td colspan="1">Not applicable</td><td colspan="1">Nuxeo Studio does not implement such feature</td></tr><tr><td colspan="1">(k) Software shall not use flashing or blinking text, objects, or other elements having a flash or blink frequency greater than 2 Hz and lower than 55 Hz.</td><td colspan="1">Supports</td><td colspan="1">Nuxeo Studio has no flashing or blinking text, objects or other elements.</td></tr><tr><td colspan="1">(l) When electronic forms are used, the form shall allow people using Assistive Technology to access the information, field elements, and functionality required for completion and submission of the form, including all directions and cues.</td><td colspan="1">Supports with exceptions</td><td colspan="1">Some form controls do not have accessible names</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="3">Section 1194.22 Web-based Internet Information and Applications</td></tr><tr><td colspan="1">Criteria</td><td colspan="1">Supporting Features</td><td colspan="1">Remarks</td></tr><tr><td colspan="1">(a) A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content).</td><td colspan="1">Supports with exceptions</td><td colspan="1">Text alternatives are available for core Nuxeo Studio features using non-text elements. Some images do not have alt text, including:
Some decorative images used for layout do not include null alt attributes</td></tr><tr><td colspan="1">(b) Equivalent alternatives for any multimedia presentation shall be synchronized with the presentation.</td><td colspan="1">Supports</td><td colspan="1">Nuxeo Studio core features do not include any multimedia presentations.</td></tr><tr><td colspan="1">(c) Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup.</td><td colspan="1">Supports with exceptions</td><td colspan="1">In some cases Nuxeo Studio uses color to convey information, including:
1\. To display items with errors
2\. To display items with warnings</td></tr><tr><td colspan="1">(d) Documents shall be organized so they are readable without requiring an associated style sheet.</td><td colspan="1">Does not support</td><td colspan="1">As Nuxeo Studio is a web-based application (not a document), its UI relies heavily on the use of associated style sheets.</td></tr><tr><td colspan="1">(e) Redundant text links shall be provided for each active region of a server-side image map.</td><td colspan="1">Not applicable</td><td colspan="1">Nuxeo Studio does not use image maps.</td></tr><tr><td colspan="1">(f) Client-side image maps shall be provided instead of server-side image maps except where the regions cannot be defined with an available geometric shape.</td><td colspan="1">Not applicable</td><td colspan="1">Nuxeo Studio does not use image maps.</td></tr><tr><td colspan="1">(g) Row and column headers shall be identified for data tables.</td><td colspan="1">Supports</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">(h) Markup shall be used to associate data cells and header cells for data tables that have two or more logical levels of row or column headers.</td><td colspan="1">Not applicable</td><td colspan="1">Nuxeo Studio UI does not contain data tables that have two or more logical levels of row or column headers.</td></tr><tr><td colspan="1">(i) Frames shall be titled with text that facilitates frame identification and navigation.</td><td colspan="1">Supports</td><td colspan="1">When used for user navigation, frames have title</td></tr><tr><td colspan="1">(j) Pages shall be designed to avoid causing the screen to flicker with a frequency greater than 2 Hz and lower than 55 Hz.</td><td colspan="1">Supports</td><td colspan="1">Nuxeo Studio UI does not cause screen flicker with a frequency greater than 2 Hz and lower than 55 Hz.</td></tr><tr><td colspan="1">(k) A text-only page, with equivalent information or functionality, shall be provided to make a web site comply with the provisions of this part, when compliance cannot be accomplished in any other way. The content of the text-only page shall be updated whenever the primary page changes.</td><td colspan="1">Not applicable</td><td colspan="1">Accessibility provisions in Nuxeo Studio can be provided without requiring a separate text-only version.</td></tr><tr><td colspan="1">(l) When pages utilize scripting languages to display content, or to create interface elements, the information provided by the script shall be identified with functional text that can be read by Assistive Technology.</td><td colspan="1">Supports with exceptions</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">(m) When a web page requires that an applet, plug-in or other application be present on the client system to interpret page content, the page must provide a link to a plug-in or applet that complies with &sect;1194.21(a) through (l).</td><td colspan="1">Not applicable</td><td colspan="1">Nuxeo Studio core functionality does not require that an applet, plug-in or other application be present.</td></tr><tr><td colspan="1">(n) When electronic forms are designed to be completed on-line, the form shall allow people using Assistive Technology to access the information, field elements, and functionality required for completion and submission of the form, including all directions and cues.</td><td colspan="1">Supports with exceptions</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">(o) A method shall be provided that permits users to skip repetitive navigation links.</td><td colspan="1">Supports with exceptions</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">(p) When a timed response is required, the user shall be alerted and given sufficient time to indicate more time is required.</td><td colspan="1">Supports</td><td colspan="1">Nuxeo Studio does not require a timed response as part of its core functionality.</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="3">Section 1194.31 Functional Performance Criteria</td></tr><tr><td colspan="1">Criteria</td><td colspan="1">Supporting Features</td><td colspan="1">Remarks</td></tr><tr><td colspan="1">(a) At least one mode of operation and information retrieval that does not require user vision shall be provided, or support for Assistive Technology used by people who are blind or visually impaired shall be provided.</td><td colspan="1">Supports with exceptions</td><td colspan="1">Most of Nuxeo Studio's core functionality is keyboard accessible. Setting hidden tabs (Document Type), some buttons</td></tr><tr><td colspan="1">(b) At least one mode of operation and information retrieval that does not require visual acuity greater than 20/70 shall be provided in audio and enlarged print output working together or independently, or support for Assistive Technology used by people who are visually impaired shall be provided.</td><td colspan="1">Supports</td><td colspan="1">Nuxeo Studio supports the use of screen magnifiers.</td></tr><tr><td colspan="1">(c) At least one mode of operation and information retrieval that does not require user hearing shall be provided, or support for Assistive Technology used by people who are deaf or hard of hearing shall be provided</td><td colspan="1">Supports</td><td colspan="1">Nuxeo Studio does not require user hearing.</td></tr><tr><td colspan="1">(d) Where audio information is important for the use of a product, at least one mode of operation and information retrieval shall be provided in an enhanced auditory fashion, or support forassistive hearing devices shall be provided.</td><td colspan="1">Supports</td><td colspan="1">Nuxeo Studio does not require user hearing.</td></tr><tr><td colspan="1">(e) At least one mode of operation and information retrieval that does not require user speech shall be provided, or support for Assistive Technology used by people with disabilities shall be provided.</td><td colspan="1">Supports</td><td colspan="1">Nuxeo Studio does not require user speech.</td></tr><tr><td colspan="1">(f) At least one mode of operation and information retrieval that does not require fine motor control or simultaneous actions and that is operable with limited reach and strength shall be provided.</td><td colspan="1">Supports with exceptions</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">Most of the parts of Nuxeo Studio that cannot be operated using the keyboard alone have large target areas that would not cause problems for people with fine motor control or limited reach and strength.</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td><td colspan="1">&nbsp;</td></tr><tr><td colspan="3">Section 1194.41 Information, documentation, and support.</td></tr><tr><td colspan="1">Criteria</td><td colspan="1">Supporting Features</td><td colspan="1">Remarks</td></tr><tr><td colspan="1">(a) Product support documentation provided to end-users shall be made available in alternate formats upon request, at no additional charge.</td><td colspan="1">Supports</td><td colspan="1">Online help is available for Nuxeo Studio</td></tr><tr><td colspan="1">(b) End-users shall have access to a description of the accessibility and compatibility features of products in alternate formats or alternate methods upon request, at no additional charge.</td><td colspan="1">Supports with exceptions</td><td colspan="1">Online help is available for Nuxeo Studio</td></tr><tr><td colspan="1">(c) Support services for products shall accommodate the communication needs of end-users with disabilities.</td><td colspan="1">Supports with exceptions</td><td colspan="1">Nuxeo Studio Online Documentation is compatible with screen-reader technology. However, only electronic versions of all product support documentation are available.</td></tr></tbody></table></div>

&nbsp;

&nbsp;