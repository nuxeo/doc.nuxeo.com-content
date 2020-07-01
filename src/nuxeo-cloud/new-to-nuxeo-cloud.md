---
title: New to Nuxeo Cloud
review:
    comment: ''
    date: '05-04-2020'
    status: ok
labels:
    - nuxeo-cloud
tree_item_index: 200
toc: true
---

## How do I get started?

Nuxeo will provision the prod and pre-prod before the team is ready to begin using them.

We typically ask for at least 1-2 weeks notice before provisioning both environments. If required, expedited requests can be addressed.

In order to set up both environments we need the following:
- LTS Version: including any HF's that may be required
- Database: MongoDB or PostgreSQL
- Prod and Pre-Prod URL: typically we use `*.nuxeocloud.com` (prod) and `*.preprod.nuxeocloud.com` (pre-prod)
- AWS Region: if this is not known or a specific one is not required, we can determine the right region by knowing where the primary users are located
- Email Setup:
    - application emails will be sent from an @nuxeocloud.com email addresses
    - no dummy email addresses are allowed - not allowed by AWS
- Technical Contact: person who can answer any follow up questions the team has on the environment deployment

After an environment has been provisioned, the technical/business contact will be provided with the appropriate login credentials
