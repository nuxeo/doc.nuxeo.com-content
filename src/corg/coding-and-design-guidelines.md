---
title: Coding and Design Guidelines
confluence:
    ajs-parent-page-id: '4685831'
    ajs-parent-page-title: Nuxeo Core Developer Guide
    ajs-space-key: CORG
    ajs-space-name: Core Developer Guide
    canonical: Coding+and+Design+Guidelines
    canonical_source: 'https://doc.nuxeo.com/display/CORG/Coding+and+Design+Guidelines'
    page_id: '4685848'
    shortlink: GIBH
    shortlink_source: 'https://doc.nuxeo.com/x/GIBH'
    source_link: /display/CORG/Coding+and+Design+Guidelines
history:
    - 
        author: Manon Lumeau
        date: '2016-07-20 12:13'
        message: emove children display macr
        version: '9'
    - 
        author: Julien Carsique
        date: '2015-10-12 15:04'
        message: ''
        version: '8'
    - 
        author: Julien Carsique
        date: '2015-10-12 15:02'
        message: code quality continuous improvement
        version: '7'
    - 
        author: Eric Barroca
        date: '2015-08-18 20:52'
        message: ''
        version: '6'
    - 
        author: Julien Carsique
        date: '2012-01-09 15:25'
        message: Migrated to Confluence 4.0
        version: '5'
    - 
        author: Julien Carsique
        date: '2012-01-09 15:25'
        message: ''
        version: '4'
    - 
        author: Julien Carsique
        date: '2012-01-09 14:14'
        message: ''
        version: '3'
    - 
        author: Florent Guillaume
        date: '2011-07-18 14:30'
        message: ''
        version: '2'
    - 
        author: Stéfane Fermigier
        date: '2010-10-26 16:28'
        message: ''
        version: '1'

---
<span style="color: rgb(61,60,64);">Beside all the QA and CI tools providing code analysis and safety nets, the Nuxeo strategy about code quality relies on **continuous improvement**.</span>
<span style="color: rgb(61,60,64);">It is not viable, nor wanted (for stability purpose), to update the whole code once or regularly regarding a specific subject.</span> <span style="color: rgb(61,60,64);">When editing a class, one must improve its quality in the mean time:</span>

*   first, update the header and format the code,
*   then, <span style="color: rgb(61,60,64);">cleanup the code (dead parts, unused imports, potential NPE, field overwrite, deprecated usage, synchronize POM...)</span>,
*   finally, do the work for which you opened that class.

Keep in mind that quality <span style="color: rgb(61,60,64);">development rule: **don't increase the debt, reduce the debt**.</span>

This chapter lists some rules that must be strictly followed when contributing to Nuxeo source code.

*   [Copyright and license headers]({{page space='CORG' page='Copyright and+license+headers'}})
*   [Maven Coding Rules]({{page space='CORG' page='Maven Coding+Rules'}})
*   [Java Code Style]({{page space='CORG' page='Java Code+Style'}})
*   [Catching Exceptions]({{page space='CORG' page='Catching Exceptions'}})
*   [Secure Coding]({{page space='CORG' page='Secure Coding'}})
    *   [Cross Site Scripting]({{page space='CORG' page='Cross Site+Scripting'}})
*   [GWT compilation tuning]({{page space='CORG' page='GWT compilation+tuning'}})
*   [Rules for Distributions]({{page space='CORG' page='Rules for+Distributions'}})
*   [JavaScript code style]({{page space='CORG' page='JavaScript code+style'}})
*   [XML or XML-like files code style]({{page space='CORG' page='XML or+XML-like+files+code+style'}})
*   [Writing tests working with dates]({{page space='CORG' page='Writing tests+working+with+dates'}})
*   [What is Needed to Design a REST API]({{page space='CORG' page='What is+Needed+to+Design+a+REST+API'}})
*   [README Template]({{page space='CORG' page='README Template'}})
*   [User Interface Guidelines]({{page space='CORG' page='User Interface+Guidelines'}})
*   [Field, Variable and Parameter Value Enforcement]({{page space='CORG' page='Field%2C Variable+and+Parameter+Value+Enforcement'}})
*   [Temporary Files]({{page space='CORG' page='Temporary Files'}})
*   [Data and Configuration Changes between Nuxeo Versions]({{page space='CORG' page='Data and+Configuration+Changes+between+Nuxeo+Versions'}})