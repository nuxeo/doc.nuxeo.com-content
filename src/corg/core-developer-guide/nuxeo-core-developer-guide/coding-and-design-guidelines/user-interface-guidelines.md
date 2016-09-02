---
title: User Interface Guidelines
toc: true
confluence:
    ajs-parent-page-id: '4685848'
    ajs-parent-page-title: Coding and Design Guidelines
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: User+Interface+Guidelines
    canonical_source: 'https://doc.nuxeo.com/display/CORG/User+Interface+Guidelines'
    page_id: '26314540'
    shortlink: LIeRAQ
    shortlink_source: 'https://doc.nuxeo.com/x/LIeRAQ'
    source_link: /display/CORG/User+Interface+Guidelines
history:
    - 
        author: Manon Lumeau
        date: '2016-01-19 14:35'
        message: eplace "access rights" by "permissions"
        version: '15'
    - 
        author: Solen Guitter
        date: '2015-09-14 09:20'
        message: ''
        version: '14'
    - 
        author: Solen Guitter
        date: '2015-09-11 12:56'
        message: ''
        version: '13'
    - 
        author: Solen Guitter
        date: '2015-09-11 12:54'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2015-09-10 16:03'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2015-09-09 15:19'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2015-09-09 15:18'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2015-09-09 14:57'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2015-09-09 14:57'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2015-09-09 14:03'
        message: ''
        version: '6'
    - 
        author: Solen Guitter
        date: '2015-09-09 13:43'
        message: ''
        version: '5'
    - 
        author: Ronan Daniellou
        date: '2015-08-19 11:59'
        message: Fixed capitalization
        version: '4'
    - 
        author: Lise Kemen
        date: '2015-08-19 10:24'
        message: ''
        version: '3'
    - 
        author: Ronan Daniellou
        date: '2015-08-19 10:08'
        message: ''
        version: '2'
    - 
        author: Ronan Daniellou
        date: '2015-08-19 09:56'
        message: ''
        version: '1'

---
You will find here the guidelines regarding the design of user interface (aspect, text, position, etc.).

## Dialog Windows

### Buttons

There are 3 kinds of buttons:

*   **primary or positive buttons**, for logical actions depending of the context, e. g. Save, Create, Add, Continue, or Accept.
*   **neutral buttons**, for options or alternatives to the primary action, e.g. Do it later, Save & do another thing in addition, &hellip;
*   **back buttons or negative buttons**, e.g. Back, Cancel, Discard.&nbsp;

#### Position

The primary buttons should be located on the right side of the dialog window, following the reading direction Left to Right. The last thing the user read should be the logical action to do. Often, the primary button has a specific class to be highlighted in comparison to the other actions.

The neutral buttons should be located just before the primary button, as an alternative before the suggested action to do.

The back buttons should be located on the left, separated from the other actions.

## <span class="ph">Labels</span>

### <span class="ph">Capitalization</span>

<span class="ph">We consider there are two capitalization styles:</span>

*   <span class="ph">Title capitalization</span>
    <span class="ph">Example: Labels Capitalization and Punctuation
    </span><span class="ph">See [http://titlecapitalization.com/](http://titlecapitalization.com/) (Chicago Manual of Style option) when in doubt.</span>
*   <span class="ph">Sentence capitalization</span>
    <span class="ph">Example: To start the search, please type at least 0 character(s).</span>

<table><tbody><tr><th colspan="1">Element</th><th colspan="1">Capitalization Style</th><th colspan="1">Example</th></tr><tr><td colspan="1">Button & Actions</td><td colspan="1">Title</td><td colspan="1">Add to Collection
Edit Status
Save
Clear List</td></tr><tr><td colspan="1">Browser window title</td><td colspan="1">Title</td><td colspan="1">Nuxeo Platform - Home</td></tr><tr><td colspan="1">Popup titles</td><td colspan="1">Title</td><td colspan="1">Add a Permission
Add 1 Item to Collection</td></tr><tr><td colspan="1">Gadget titles</td><td colspan="1">Title</td><td colspan="1">Last Modified Documents</td></tr><tr><td colspan="1">Tab labels</td><td colspan="1">Title</td><td colspan="1">Permissions
Summary
Comments</td></tr><tr><td colspan="1">Field names (forms, layouts)</td><td colspan="1">Title</td><td colspan="1">Last Contributor
Title
Last Modified at</td></tr><tr><td colspan="1">Titles in layout</td><td colspan="1">Title</td><td colspan="1">Common Metadata</td></tr><tr><td colspan="1">Column headers</td><td colspan="1">Title</td><td colspan="1">Last Contributor
Due Date
First Name</td></tr><tr><td colspan="1">Feedback messages</td><td colspan="1">Sentence</td><td colspan="1">1 document copied.
No user or group selected.</td></tr><tr><td colspan="1">Options (radio, checkbox, dropdown)</td><td colspan="1">Sentence (no final dot)</td><td colspan="1">Anonymous proxy
Less than 100KB</td></tr><tr><td colspan="1">Placeholders</td><td colspan="1">Sentence (no final dot)</td><td colspan="1">Select a value</td></tr><tr><td colspan="1">Help messages</td><td colspan="1">Sentence</td><td colspan="1">This folder contains no document.
The table below shows all the tasks for which you have been requested to perform an operation.</td></tr><tr><td colspan="1">Tooltips</td><td colspan="1">Sentence</td><td colspan="1">This field is used by virtual navigation.
Current version of the document</td></tr><tr><td colspan="1">Popup messages</td><td colspan="1">Sentence</td><td colspan="1">Delete selected document(s)?</td></tr></tbody></table>

### Punctuation

*   Don't put spaces before double punctuation signs (`: ; ?`) in English. However, note that in French these signs require a non-breaking space before.
*   Don't use&nbsp;`!` in feedback messages.
*   Don't forget the final dot at the end of sentences.
*   Don't put a&nbsp;`:` after the field label in forms.
*   Use a non-breaking space between value and unit to avoid them being split by word wrapping. For example, write `2&nbsp;GB` for 2 GB.

### Terminology and Spelling

<table><tbody><tr><th colspan="1">OK</th><th colspan="1">Not OK</th></tr><tr><td colspan="1">addon</td><td colspan="1">add-on</td></tr><tr><td colspan="1">hotfix</td><td colspan="1">hot-fix, HotFix</td></tr><tr><td colspan="1">life cycle</td><td colspan="1">life-cycle
lifecycle</td></tr><tr><td colspan="1">plugin</td><td colspan="1">plug-in</td></tr><tr><td colspan="1">username</td><td colspan="1">user name</td></tr></tbody></table>