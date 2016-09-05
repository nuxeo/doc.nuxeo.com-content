---
title: Nuxeo Security Hotfixes
toc: true
confluence:
    ajs-parent-page-id: '16810051'
    ajs-parent-page-title: Upgrading your Nuxeo Version
    ajs-space-key: ADMINDOC58
    ajs-space-name: Nuxeo Installation and Administration - 5.8
    canonical: Nuxeo+Security+Hotfixes
    canonical_source: 'https://doc.nuxeo.com/display/ADMINDOC58/Nuxeo+Security+Hotfixes'
    page_id: '17793132'
    shortlink: bIAPAQ
    shortlink_source: 'https://doc.nuxeo.com/x/bIAPAQ'
    source_link: /display/ADMINDOC58/Nuxeo+Security+Hotfixes
history:
    - 
        author: Solen Guitter
        date: '2013-11-14 11:28'
        message: ''
        version: '12'
    - 
        author: Solen Guitter
        date: '2013-11-14 11:28'
        message: ''
        version: '11'
    - 
        author: Solen Guitter
        date: '2013-11-14 11:24'
        message: ''
        version: '10'
    - 
        author: Solen Guitter
        date: '2013-11-14 11:23'
        message: ''
        version: '9'
    - 
        author: Solen Guitter
        date: '2013-11-14 11:11'
        message: ''
        version: '8'
    - 
        author: Solen Guitter
        date: '2013-11-14 11:09'
        message: ''
        version: '7'
    - 
        author: Solen Guitter
        date: '2013-11-14 11:04'
        message: ''
        version: '6'
    - 
        author: Guillaume Renard
        date: '2013-11-13 21:23'
        message: ''
        version: '5'
    - 
        author: Thierry Delprat
        date: '2013-11-13 19:10'
        message: ''
        version: '4'
    - 
        author: Guillaume Renard
        date: '2013-11-13 18:49'
        message: ''
        version: '3'
    - 
        author: Guillaume Renard
        date: '2013-11-13 18:40'
        message: ''
        version: '2'
    - 
        author: Stéphane Lacoin
        date: '2013-11-08 15:54'
        message: ''
        version: '1'

---
<div class="row"><div class="column medium-8">

Nuxeo provides security hot fixes to correct flaws or other security issues.&nbsp;<span style="color: rgb(0,0,0);">It is highly recommended to install the following packages.</span>

{{! multiexcerpt name='nuxeo-security-HF01'}}

## Nuxeo Security Hotfix 01

<span style="color: rgb(0,0,0);">This package fixes the RichFaces CVE-2013-2165 flaw.</span>

<span style="color: rgb(0,0,0);">JBoss RichFaces has a known flaw related to deserialization:</span><span style="color: rgb(0,0,0);"> [https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-2165](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-2165)&nbsp;</span>

<span style="color: rgb(0,0,0);">Details of the patch are here:</span> [http://www.bleathem.ca/blog/2013/07/richfaces-CVE-2013-2165.html](http://www.bleathem.ca/blog/2013/07/richfaces-CVE-2013-2165.html)

Nuxeo has assigned&nbsp;[NXBT-661](https://jira.nuxeo.com/browse/NXBT-661) and&nbsp;[NXP-13112](https://jira.nuxeo.com/browse/NXP-13112) to apply the official patch.

### Affected Versions

<span style="color: rgb(0,0,0);">This security issue affects Nuxeo Platform 5.6 and 5.8\. Nuxeo provides hotfixes that <span style="color: rgb(0,0,0);">automatically include this security fix</span>: <span style="color: rgb(0,0,0);">Nuxeo 5.6.0-HF27 and 5.8.0-HF-01</span>.
</span>

<span style="color: rgb(0,0,0);">Any earlier version of these two target platforms needs this security hot fix. Any later version will include the fix.
</span>

### Installing Nuxeo Security Hotfix 1

#### Installation from the Marketplace

On a registered instance, you can install this security hot fix from the Admin Center of your Nuxeo instance.

1.  Go to&nbsp;**Update Center** > **Nuxeo software update.**
2.  Install **nuxeo-security-HF01-1.0.0** like any other hot fix.
3.  If required, restart your server.

On an instance that is not registered:

1.  Go to your `$NUXEO_HOME/bin` directory.
2.  Run `nuxeoctl mp-install nuxeo-security-HF01`.

{{#> callout type='tip' }}

Your Nuxeo server(s) need to have Internet access.

{{/callout}}

#### <span style="color: rgb(0,0,0);">Manual installation</span>

<span style="color: rgb(0,0,0);">The security hot fix provides 2 <span style="color: rgb(0,0,0);">RichFaces&nbsp;</span>patched JARs:</span>

*   <span style="color: rgb(0,0,0);">[richfaces-impl-3.3.1.GA-NX9.01.jar](https://maven-eu.nuxeo.org/nexus/content/repositories/vendor-releases/org/richfaces/framework/richfaces-impl/3.3.1.GA-NX9.01/richfaces-impl-3.3.1.GA-NX9.01.jar)
    </span>
*   <span style="color: rgb(0,0,0);">[richfaces-ui-3.3.1.GA-NX9.01.jar](https://maven-eu.nuxeo.org/nexus/content/repositories/vendor-releases/org/richfaces/ui/richfaces-ui/3.3.1.GA-NX9.01/richfaces-ui-3.3.1.GA-NX9.01.jar)
    </span>

<span style="color: rgb(0,0,0);">You can manually update these JARs with the following steps:</span>

1.  <span style="color: rgb(0,0,0);">Go to `$NUXEO_HOME/nxserver/lib`.</span>
2.  <span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);">Locate `richfaces-impl-3.3.1.GA-NXxx.jar` and&nbsp;<span style="color: rgb(0,0,0);">`richfaces-ui-3.3.1.GA-NXxx.jar`
    </span></span></span>

    {{#> callout type='tip' }}

    <span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);"><span style="color: rgb(0,0,0);">I</span></span></span><span style="color: rgb(0,0,0);">f xx is above 9.01, your JARs already include the security fix, there is nothing to do.</span>

    {{/callout}}
3.  <span style="color: rgb(0,0,0);">Remove these two JARs and replace them with the ones mentioned above.</span>

### <span style="color: rgb(0,0,0);">Credits</span>

<span style="color: rgb(0,0,0);">We'd like to thank Arun Neelicattu and David Jorm from Red Hat for reporting this issue.</span>

{{! /multiexcerpt}}</div><div class="column medium-4">{{#> panel heading='In this section'}}

{{/panel}}</div></div>