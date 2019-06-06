---
title: How to retrieve the current date in a content view in JSF
description: How to retrieve the current date in a content view in JSF
review:
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - jsf-jsfdevelopment
    - date
    - jsf
    - studio

---
# How to retrieve the current date in a content view in JSF?
## Problem
Let’s assume you have a document having as a data a year as an integer.  
Let’s assume you want to display all documents for which this date is more than 5 years old.

The problem you will encounter in the content view is how to express the current date. There is no tool in JSF to express the current date: cf. [this blog](https://www.nuxeo.com/blog/nuxeo-studio-relative-date/ to expose the problem) you will face.
## Solution
As stated in the blog, if you want to have a specific parameter, you'll have to create a seam bean with the appropriate method or factory and use it as a query parameter for your content view.

In this case, the seam bean already exists in the Nuxeo source code, in the class

    org.nuxeo.ecm.automation.core.scripting.DateWrapper

But how to refer to this class as a seam bean?

In Studio, within “Modeler > Advanced Settings > Deployment Extensions”, enter

    <extension target="faces-config#MANAGED-BEAN">
      <managed-bean>
        <managed-bean-name>currentDateWrapper</managed-bean-name>
        <managed-bean-class>org.nuxeo.ecm.automation.core.scripting.DateWrapper</managed-bean-class>
        <managed-bean-scope>request</managed-bean-scope>
      </managed-bean>
    </extension>

Then deploy the project and restart Nuxeo (do not only hot reload as the above change within WEB-INF/faces-config.xml is only considered upon reload)

Then in Studio, in the definition of your content view, enter your query as;

    ecm:mixinType != 'HiddenInNavigation' AND ecm:isCheckedInVersion = 0 AND ecm:currentLifeCycleState != 'deleted' and ecm:primaryType='MyDoc' and mydoc:myIntegerYear < ?

and with the parameter

    #{currentDateWrapper.days(0).year - 5}

Hot reload your project, then display the content view: The documents displayed are the one for which myIntegerYear are more than 5 years old.


2019-06-01T17:37:52.053Z
## (c) Nuxeo Support Knowledge Base Outline 2019
