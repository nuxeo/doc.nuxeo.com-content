---
title: How to display the number of comments per document in a content view
description: I want to display the number of comments that my documents have. How to perform this?
review:
    date: '2019-06-01'
    status: ok
    comment: 'public version'
labels:
    - jsf-jsfdevelopment
    - comment
    - customization
    - jsf

---
# How to display the number of comments per document in a content view

## The problem
I want to display the number of comments that my documents have. How to perform this?

## The solution
In order to display the number of comments in a list of Documents, the following widget might be used:

    <c:if test="true"
      xmlns:nxu="http://nuxeo.org/nxweb/util"
      xmlns:f="http://java.sun.com/jsf/core"
      xmlns:h="http://java.sun.com/jsf/html"
      xmlns:c="http://java.sun.com/jstl/core">

      <c:set var="commentsCount" value="#{commentManagerActions.getCommentsAsThreadOnDoc(field_0).size}" cache="true" />
      <c:set var="baseLabel" value="#{nxu:test(commentsCount > 1, 'label.comments.moreComments', 'label.comments.oneComment')}"  cache="true" />
        <c:set var="tooltip" value="#{nxu:translate(baseLabel, commentsCount)}" />

        <div title="#{tooltip}" class="tipsyShow tipsyGravityS" >
          <h:outputText value="#{commentsCount}" />
        </div>
    </c:if>

Define it in **Studio > Resources > widget template**, and reference this as a template  with **data** as an argument. For commentable documents, the number of comments is displayed, while 0 is displayed for non-commentable documents.


2019-06-01T21:50:30.265Z
## (c) Nuxeo Support Knowledge Base Outline 2019
