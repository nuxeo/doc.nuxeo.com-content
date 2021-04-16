---
title: Kubernetes Deployment in Production
review:
  date: '2021-04-16'
  status: ok
labels:
  - multiexcerpt
  - multiexcerpt-include
toc: true
description: Discover how to deploy Nuxeo on Kubernetes
tree_item_index: 275
---

## Requirements

## Best practices

- Isolate your deployment into specific namespace
- Deploy a shared storage layer shared storage services (mongodb, elasticsearch, kafka, redis ...) with a configuration closer to production
  - HA setup + persistence (PVC and StatefulSet)
  - shared configuration
- deploy monitoring and a grafana dashboard
- Configure pod autoscaling via HPA
- configure TLS encryption using letsencryt or static wildcard certificates

## Nuxeo Helm Chart

## Nuxeo Operator

