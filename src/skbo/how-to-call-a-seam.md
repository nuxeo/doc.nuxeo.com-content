---
title: How to call a « seam bean » and wrap Nuxeo API in a NXQL query filter in a content view
description: How to call a « seam bean » and wrap Nuxeo API in a NXQL query filter in a content view
review: 
    date: '2019-06-01'
    status: ok
    comment: ''
labels:
    - jsf-jsfdevelopment
    - studio-customization
    - date
    - jsf
    - seam-bean

---
# How to call a « seam bean » and wrap Nuxeo API in a NXQL query filter in a content view?
## Problem
You want to incorporate the current date in a content view query filter.  
You have read [this blog link about Date formatting in EL](https://www.nuxeo.com/blog/nuxeo-studio-relative-date/ and https://answers.nuxeo.com/general/q/521c231b282d4ef4988a8bece77d6186/Date-formatting-in-EL-content-views-Page-Provider) and found out you can call a Seam Bean to do this, but wonder how?
## Solution
Nuxeo provides among many other things a Date wrapper object, named

    org.nuxeo.ecm.automation.core.scripting.DateWrapper

So, for the target purpose, there is no need creating a custom Java class and referencing it, as it is already provided.  
So, the solution seems simpler that what you inferred from the blog.

In Studio, in Advanced Settings > Deployment Extensions, write or add:

    <extension target="faces-config#MANAGED-BEAN">
      <managed-bean>
        <managed-bean-name>currentDateWrapper</managed-bean-name>
        <managed-bean-class>org.nuxeo.ecm.automation.core.scripting.DateWrapper</managed-bean-class>
        <managed-bean-scope>request</managed-bean-scope>
      </managed-bean>
    </extension>

then deploy the project on your instance and restart the Nuxeo instance (Hot Reloading will not be enough as the modification lies in WEB-INF/faces-config.xml which is taken into account only upon start)
Still in Studio, create your content view query filter as:

    ecm:mixinType != 'HiddenInNavigation' AND ecm:isCheckedInVersion = 0 AND ecm:currentLifeCycleState != 'deleted' and ecm:primaryType='MyDoc' and mydoc:myIntegerYear < ?

with a parameter
**\#\{currentDateWrapper.days\(0\).year\}**
Then hot-reload the project (hot-reloading there is enough, no need to restart)

==> Only document where mydoc.myIntegerYear is before the current year will be displayed

This usage note can be generalized to extend the parametrization of Nuxeo query filters to other beans than a Date.


2019-06-01T15:23:51.095Z
## (c) Nuxeo Support Knowledge Base Outline 2019
