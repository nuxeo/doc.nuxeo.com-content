---
title: Nuxeo Deployment on Kubernetes
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

## Intro 

Kubernetes is an open source orchestrator for deploying and managing containerized applications at scale. Kubernetes was originally developed by Google, based on their learnings from Borg and Omega Projects, which Google uses to deploy and scale their internal applications (e.g: GMail, YouTube etc).


With Kubernetes, enterprises deploy and operate cloud-native applications, regardless of the environment and underlying infrastructure. It is the ideal solution for all stages of the integrated software industry: developments, tests and production. Kubernetes gives users the ability to tailor application resources to a much lighter and more powerful system than virtual machines.

**It provides tools necessary to build and deploy reliable, scalable distributed applications**

Portability and flexibility
Kubernetes works with virtually any type of container runtime. (A runtime is the program that actually runs containers. There are a few different options on the market today.) In addition, Kubernetes can work with virtually any type of underlying infrastructure -- whether it is a public cloud, a private cloud, or an on-premises server -- so long as the host operating system is some version of Linux or Windows (2016 or newer).

In these respects, Kubernetes is highly portable, because it can be used on a variety of different infrastructure and environment configurations. Most other orchestrators lack this portability; they are tied to particular runtimes or infrastructures.

Multi-cloud capability
Due in part to its portability, Kubernetes can host workloads running on a single cloud as well as workloads that are spread across multiple clouds. In addition, Kubernetes can easily scale its environment from one cloud to another.

These features mean that Kubernetes lends itself well to the multi-cloud strategies that many businesses are pursuing today. Other orchestrators may also work with multi-cloud infrastructures, but Kubernetes arguably goes above and beyond when it comes to multi-cloud flexibility. There are however other requirements involved when considering a multi-cloud strategy.

Increased developer productivity
Kubernetes with its declarative constructs and its ops friendly approach has fundamentally changed deployment methodologies and it allows teams to use GitOps. Teams can scale and deploy faster than they ever could in the past. Instead of one deployment a month, teams can now deploy multiple times a day.

## Main components

cloud provider

K8S Cluster / nodes

pods

deployment - service - secret config map

secrets

persistance - pv and PVC

tls

hpa

deployments : helm chart, helm file, bash script

 

