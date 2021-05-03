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
tree_item_index: 300
---

{{! excerpt}}
This page describes how to deploy Nuxeo with Kubernetes and provides best practices. 
{{! /excerpt}}

## Kubernetes Introduction 

[Kubernetes](https://kubernetes.io/) is an open source orchestrator for deploying and managing containerized applications at scale. Kubernetes provides all the tools necessary to build and deploy a reliable, scalable distributed Nuxeo architecture, regardless of the environment and underlying infrastructure. 

<img src="https://newrelic.com/sites/default/files/wp_blog_inline_files/kubernetes_architecture.jpg"/>

### Portability and flexibility

Kubernetes works with virtually any type of container runtime. Kubernetes can work with any type of underlying infrastructure, whether it is a public cloud, a private cloud, or an on-premises server.

In these respects, Kubernetes is highly portable, because it can be used on a variety of different infrastructure and environment configurations. Most other orchestrators lack this portability; they are tied to particular runtimes or infrastructures.

### Multi-cloud capability

Due in part to its portability, Kubernetes can host workloads running on a single cloud as well as workloads that are spread across multiple clouds. In addition, Kubernetes can easily scale its environment from one cloud to another.

These features mean that Kubernetes lends itself well to the multi-cloud strategies that many businesses are pursuing today. Other orchestrators may also work with multi-cloud infrastructures, but Kubernetes arguably goes above and beyond when it comes to multi-cloud flexibility. There are however other requirements involved when considering a multi-cloud strategy.

### Increased developer productivity

Kubernetes with its declarative constructs and its ops friendly approach has fundamentally changed deployment methodologies and it allows teams to use GitOps. Teams can scale and deploy faster than they ever could in the past. Instead of one deployment a month, teams can now deploy multiple times a day.

## Key Kubernetes Elements

### Cloud Computing Platform


The Kubernetes Engine has to be available in your preferred Cloud Computing Platform. Due to Kubernetes success and popularity, the majority offered a secured and fully managed Kubernetes service, and allow you to create a Kubernetes cluster and scale up easily to hundreds nodes and leverage a high-availability control plane including multi-zonal and regional clusters:

- [Amazon Elastic Kubernetes Service(EKS)](https://aws.amazon.com/eks/) for Amazon Web Services 
- [Google Kubernetes Engine (GKE)](https://cloud.google.com/kubernetes-engine) for Google Cloud
- [Azure Kubernetes Service (AKS)](https://azure.microsoft.com/en-us/services/kubernetes-service/) for Microsoft Azure

{{#> callout type='info' heading="recommandation"}}
Nuxeo can be deployed on **any Cloud Computing Platform using Kubernetes**. The Nuxeo team has a deeper experience with EKS, as [Nuxeo Cloud](https://doc.nuxeo.com/nuxeo-cloud/) relies on a AWS infrastructure, and on GCP to set up our preview environnements.
{{/callout}}

### Worker Nodes

A [Kubernetes node](https://kubernetes.io/docs/concepts/architecture/nodes/) is a logical collection of IT resources that supports one or more containers. Nodes contain the necessary services to run Pods (which are Kubernetes's units of containers), communicate with master components, configure networking and run assigned workloads. A Node can host one or multiple Pods. 

{{#> callout type='info' heading="recommandation"}}
You need **a precise idea of the workload, memory consumption and storage used by your application** to define the type of nodes you will create: as the worker nodes are limited by memory and CPU, and they cannot handle an infinite number of pods. Once done, you can define an affinity to deploy a component on a specific worker node, for cost reason
{{/callout}}

### Pods

[Kubernetes pods](https://kubernetes.io/docs/concepts/workloads/pods/) are the smallest, most basic deployable objects in Kubernetes. A Pod represents a single instance of a running process in your cluster. Pods contain one or more containers, such as Docker containers. When a Pod runs multiple containers, the containers are managed as a single entity and share the Pod's resources.

### Deployment and StatefulSets

There are different ways to deploy an application / pods on Kubernetes using different Kubernetes resources. Below are two different resources that Kubernetes provides for deploying pods.

#### Deployment

A [Kubernetes Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) is used to tell Kubernetes how to create or modify instances of the pods that hold a containerized application. Deployments can scale the number of replica pods, enable rollout of updated code in a controlled manner, or roll back to an earlier deployment version if necessary. 

#### StatefulSets

A [Kubernetes StatefulSet](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/) Manages the deployment and scaling of a set of Pods, and provides guarantees about the ordering and uniqueness of these Pods. StatefulSets are valuable for applications that require one or more of the following.

- Stable, unique network identifiers.
- Stable, persistent storage.
- Ordered, graceful deployment and scaling.
- Ordered, automated rolling updates

{{#> callout type='info' heading="recommandation"}}
You can **either use Deployments or StatefulSets** to deploy your Nuxeo application. 
{{/callout}}

### Service

A [Kubernetes service](https://kubernetes.io/docs/concepts/services-networking/service/) is a logical abstraction for a deployed group of pods in a cluster (which all perform the same function). Since pods are ephemeral, a service enables a group of pods, which provide specific functions (web services, image processing, etc.) to be assigned a name and unique IP address (clusterIP).

### ConfigMap and Kubernetes Secrets

[Kubernetes ConfigMaps](https://kubernetes.io/docs/concepts/configuration/configmap/) are Kubernetes objects that allow you to separate configuration data/files from image content to keep containerized applications portable. ConfigMaps bind configuration files, command-line arguments, surroundings variables, port numbers, and alternative configuration artifacts to your Pods containers and system parts at run-time. ConfigMaps are helpful for storing and sharing non-sensitive, unencrypted configuration data. 

If you need to store and manage sensitive information, such as passwords, OAuth tokens, and ssh keys, then you'll have to use [Kubernetes Secrets]() Storing confidential information in a Secret is safer and more flexible than putting it verbatim in a Pod definition or in a container image. 

ConfigMaps and Secrets can be produced from files and with yaml declaration.

{{#> callout type='info' heading="recommandation"}}
<br/>
- **Do not store sensitive data**, such as passwords, authentication tokens and SSH keys, **in plaintext on a container**.
- Use the **built-in secrets, or custom secrets** to define your own sensitive data and create a secret to store it.
- Regardless of where you store secrets, **carefully map out exactly which containers need access to each of your secrets**. Don’t share secrets anywhere they aren’t absolutely needed.
- Ensuring that the Kubernetes cluster configuration is set **to encrypt all data** at rest (within etcd) is critical to reducing the risk of broad compromise.
- If you are running in one of the major public clouds, **Cloud secret managed solutions** are a good bet ([AWS Secrets Manager](https://aws.amazon.com/secrets-manager/), [Google Cloud KMS](https://cloud.google.com/kms), [Azure Key Vault](https://azure.microsoft.com/en-us/services/key-vault/))
{{/callout}}

### Data persistance

There are currently two types of storage abstracts available with Kubernetes: [Volumes](https://kubernetes.io/docs/concepts/storage/volumes/) and [Persistent Volumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/). A Kubernetes volume exists only while the containing pod exists. Once the pod is deleted, the associated volume is also deleted. Kubernetes persistent volumes are administrator provisioned volumes. These are created with a particular filesystem, size, and identifying characteristics such as volume IDs and names. A Kubernetes persistent volume has the following attributes:

- It is provisioned either dynamically or by an administrator
- Created with a particular filesystem
- Has a particular size
- Has identifying characteristics such as volume IDs and a name

As a result, Kubernetes volumes are useful for storing temporary data that does not need to exist outside of the pod’s lifecycle.

{{#> callout type='info' heading="recommandation"}}
It makes sense to use **persistent storage for production environments**: the database content, the Kafka logs and the ElasticSearch indexes are concerned here. For the blob storage, we strongly encourage you to use a **cloud object storage**, as [Amazon S3](https://aws.amazon.com/s3/). 
{{/callout}}

### Security layers

Every Kubernetes cluster has a cluster root Certificate Authority (CA). The CA is generally used by cluster components to validate the API server's certificate, by the API server to validate kubelet client certificates, etc. To support this, the CA certificate bundle is distributed to every node in the cluster and is distributed as a secret attached to default service accounts. 

You can [secure an application running on Kubernetes](https://kubernetes.io/docs/tasks/tls/managing-tls-in-a-cluster/) by creating a secret that contains a TLS (Transport Layer Security) private key and certificate.
Currently, Ingress supports a single TLS port, 443, and assumes TLS termination. The TLS secret must contain keys named tls. crt and tls. keys that contain the certificate and private key to use for TLS.

{{#> callout type='info' heading="recommandation"}}
Configure **TLS encryption** installing a Cert-Manager in the Kubernetes cluster or static wildcard certificates
{{/callout}}

### Horizontal Auto scalers

Horizontal Pod Autoscaler (HPA) is a standard mechanism to handle AutoScaling at the K8S level. The principle is to associate a metric and a threshold to a K8S deployment and scale out/down depending on the variation of the target metric. For the K8S pod autoscaler to work, the metrics exposed need to be tagged with the correct resource type; otherwise, the HPA will complain that it can not read the metrics.

The standard Nuxeo deployment contains 2 types of nodes:

- API nodes: handling the synchronous workload
- Worker nodes: handling the asynchronous workload

In Kubernetes, these 2 types of nodes are deployed via two dedicated deployments using the same Docker image with just a few minor configuration differences. Consequently, the goal is to scale the 2 deployments up/down depending on the load.

{{#> callout type='info' heading="recommandation"}}
<br/>
- Set up **HPA on CPU on memory pressure on API nodes** to scale out when too much synchronous load is applied.
- Set up **HPA on the size of the queues and lags of stream processors on worker nodes** to scale out when the lag is too big
{{/callout}}

## General recommandations 

### Kubernetes infrastructure

Make sure you've followed the best practices when setting up a Kubernetes Cluster:
- Deploy your application in a specific namespace and avoid granting permission on components cluster-wide. If you target to deploy Nuxeo for different client, then you can use the multi-tenancy approach described [here](https://github.com/tiry/nuxeo-helm-chart) and create a namespace for each tenant.
- Deploy a deploy load balancer and an internal DNS (Like Route)
- It is a good practice to access the Kubernetes cluster using its native API to secure its access 
- Set a user policy for all the people going to access on the Kubernetes cluster
- Use user policy per user working on k8s cluster
- Avoid sharing publicly your kubeconfig file: its access must be secured
- Give only the needed permission for each pods (not all pods should access to the binary storage for exemple)
  - You can use a [ServiceAccount](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html) or a [User/Role IAM access](https://docs.aws.amazon.com/eks/latest/userguide/add-user-role.html) to the cluster API

### Nuxeo architecture

You need to follow the recommandations described in the [Quickstart with Nuxeo Platform and Docker]({{page version='' space='nxdoc' page='quickstart-docker-nuxeo'}}#going-further), [Setup Best Practices]({{page page='setup-best-practices'}}) and [Security recommendations]({{page page='security-recommendations'}}) documentation pages.

## Deployment of a Nuxeo application on Kubernetes

You can deploy Nuxeo Platform using the [Nuxeo Helm Chart](https://github.com/nuxeo/nuxeo-helm-chart). This chart bootstraps a Nuxeo deployment on a Kubernetes cluster using the Helm package manager.

{{#> callout type='note'}}
The `nuxeo` chart is not production-ready by default. It suits for a development or staging environment such as preview.
{{/callout}}

## Useful External Resources

- [Kubernetes Official Documentation Website](https://kubernetes.io/docs/home/)
- [Multi-tenant deployment on Kubernetes](https://github.com/tiry/nuxeo-helm-chart)
- [Nuxeo Operator](https://operatorhub.io/operator/nuxeo-operator)

