---
title: Ticket Follow Up
review:
    comment: ''
    date: ''
    status: ok
labels:
    - jira
confluence:
    ajs-parent-page-id: '4687694'
    ajs-parent-page-title: Support / JIRA
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Ticket+Follow+Up
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Ticket+Follow+Up'
    page_id: '18448655'
    shortlink: D4EZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/D4EZAQ'
    source_link: /display/Studio/Ticket+Follow+Up
tree_item_index: 300
history:
    -
        author: Solen Guitter
        date: '2014-12-30 16:49'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-01-03 15:34'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2014-01-02 16:50'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-01-02 16:49'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2014-01-02 16:49'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2014-01-02 16:08'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2014-01-02 16:07'
        message: ''
        version: '1'

---
In order to make it easy to know which tickets the customer must address, Nuxeo provides two dashboards.

- The first one is on the Nuxeo Connect homepage, accessible from the URL [https://connect.nuxeo.com/nuxeo/site/connect/dashboard](https://connect.nuxeo.com/nuxeo/site/connect/dashboard). This dashboard displays a "My Tasks" widget that lists all the tickets waiting for the customer's input. More information on what is expected from the customer is displayed on mouseover.

    {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Ticket       follow-up/Connect Dashboard
    name: connect_dashboard.png
    studio_modeler#screenshot#up_to_date
    --}}
    ![Connect Dashboard](nx_asset://98eaf1bf-3afd-4c2f-9a8c-d9fae3e07a96 ?w=650,border=true)

    This widget is only displayed if the customer has pending tickets.

- The second dashboard is in JIRA at the URL [https://jira.nuxeo.com/secure/Dashboard.jspa](https://jira.nuxeo.com/secure/Dashboard.jspa). Nuxeo offers a customized dashboard, designed to make information related to created tickets more visible, especially regarding tickets that required some input from the customer which are displayed in the "My Support Tasks" gadget (red box).

**To set this customized dashboard as the default one:**

1.  Click on **Tools**&nbsp;> **Find Dashboard.**
2.  In the "Search" field, type "Support" and click on **Search**.
    The results is displayed below the search form.
3.  Click on the star to make this dashboard the default one and click on the dashboard's name to display the customized dashboard.
    {{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Studio/Ticket       follow-up/JIRA Dashboard
    name: jira_dashboard.png
    studio_modeler#screenshot#up_to_date
    --}}
    ![JIRA Dashboard](nx_asset://e707b480-baee-4460-a120-dac079179df5 ?w=650,border=true)
    Ideally, the "My Support Tasks" gadget must be empty.


<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Related pages'}}

- [How to Fill a JIRA Ticket]({{page space='connect' page='how-to-fill-a-jira-ticket'}})
- [JIRA Tickets Workflow]({{page space='connect' page='jira-tickets-workflow'}})
- [Support / JIRA]({{page space='connect' page='support-jira'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
