---
title: How To Undeclare Records
description: Discover how flexible retention rules can be leveraged to undeclare records.
review:
    comment: ''
    date: '2023-09-15'
    status: 'ok'
labels:
    - bchauvin
    - mlumeau
    - retention-management
toc: true
tree_item_index: 400
---

This page teaches how flexible retention can be leveraged to undeclare records, and goes through the principles and implementation used in this example.

## Prerequisites

- This how-to requires knowing how to launch [REST API]({{page page='rest-api'}}) calls, as this feature is not yet exposed in Nuxeo Web UI.


The Nuxeo Retention addon must be installed on your instance: 
- In standard mode. This feature is not available in strict mode.
- Using our recommended architecture that uses a dedicated bucket for records. 
You can refer to our [Nuxeo Retention installation]({{page page='nuxeo-retention-installation'}}) documentation for that purpose.

## High-Level Overview

In this how-to, we will first create a retention rule using flexible retention. We will then apply it on a document to turn the document into a record, and undeclare the record.

We will then go through the principles used in this example and provide some additional options you could use to go further.

Steps
Create a retention rule
Update property to make it use flexible retention

Create document, attach a file to it
Attach the retention rule on the document
Undeclare the record: sample call to undeclare a record

## Principles
Two options for retention rules
Breakdown of retention options
Only in standard mode
Sends to storage bucket depending on rule
Once moved to enforced record no going back, consequence 

## Going Further
Sample chain to execute business logic when a record is undeclared
- Declare event in registries
- Create event handler
- Create automation chain that logs in the audit