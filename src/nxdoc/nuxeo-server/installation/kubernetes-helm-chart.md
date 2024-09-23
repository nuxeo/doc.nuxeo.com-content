---
title: Install in Kubernetes With Nuxeo Helm Chart
review:
  date: '2024-09-10'
  status: ok
labels:
  - multiexcerpt
  - multiexcerpt-include
toc: true
description: Discover how to install Nuxeo Platform in Kubernetes with the Nuxeo Helm Chart.
tree_item_index: 280
---

## Introduction

The [Nuxeo Helm Chart](https://github.com/nuxeo/nuxeo-helm-chart/) allows to install Nuxeo Platform on a [Kubernetes](https://kubernetes.io/) cluster using the [Helm](https://helm.sh/) package manager.

Currently, there is a single version of this chart for all maintained versions of Nuxeo, e.g.: 2023, 2021.

## TL;DR

```shell
helm repo add nuxeo https://packages.nuxeo.com/repository/helm-releases-public/
helm install my-release nuxeo/nuxeo
```

{{#> callout type='warning' heading='PRIVATE IMAGE'}}
The default Docker image referenced by this chart is hosted in our private [Docker registry](https://packages.nuxeo.com/#browse/search/docker=attributes.docker.imageName%3Dnuxeo%2Fnuxeo%20AND%20attributes.docker.imageTag%3D2023%20AND%20repository_name%3Ddocker-private). If you are a Nuxeo client, please ask access to the registry through a support ticket. If not, contact your Nuxeo administrator or Nuxeo sales representative to get access to this image.
{{/callout}}

## Scope

By default, this chart deploys the strict minimum to have Nuxeo running with:

- A single Nuxeo node.
- [emptyDir](https://kubernetes.io/docs/concepts/storage/volumes/#emptydir) volume for binaries.
- H2 database.
- Opensearch embedded.
- Memory-only WorkManager and Nuxeo Streams.

To make a production-ready deployment of Nuxeo in Kubernetes, please read the sections below:

- [Architecture](#architecture)
- [Full Deployment](#full-deployment)
- [Parameters](#parameters)

## Architecture

Nuxeo can be deployed as a _single node_ or _API-Worker_ architecture, depending on the `architecture` parameter value.

### Single Node

When setting `architecture=singleNode`, which is the default, the Nuxeo pod(s) handle the whole workload without any differentiation: HTTP requests and asynchronous processing (Nuxeo workers and stream processing). This is implemented by setting these `nuxeo.conf` properties in the chart's ConfigMap:

```properties
nuxeo.stream.processing.enabled=true
nuxeo.work.processing.enabled=true
```

Note that [Clustering](#clustering) can be enabled by setting a number of replicas greater than 1, using the `replicaCount` parameter (default: `1`). Enabling clustering in a _single node_ architecture only allows to have mulitple Nuxeo pods, yet they are all "versatile", handling both the HTTP requests and asynchronous processing. To differentiate the Nuxeo pods according to the type of workload, please us the [_API-Worker_](#api-worker) architecture.

### API-Worker

When setting `architecture=api-worker`, the Nuxeo pod(s) are differentiated according to the type of workload: the _API_ pods exclusively handle HTTP requests, whereas the _Worker_ pods exclusively handle asynchronous processing. This is implemented by setting different `nuxeo.conf` properties for each type of pod in the chart's ConfigMap:

_API_ pods:

```properties
nuxeo.stream.processing.enabled=false
nuxeo.work.processing.enabled=false
```

_Worker_ pods:

```properties
nuxeo.stream.processing.enabled=true
nuxeo.work.processing.enabled=true
```

The number of pods is set by the following parameters:

- Number of _API_ pods: `replicaCount` (default `1`)
- Number of _Worker_ pods: `workerCount` (unset by default)

In an _API-Worker_ architecture, [Clustering](#clustering) is necessarily enabled.

## Clustering

Clustering is enabled for an [_API-Worker_](#api-worker) architecture or a [_Single Node_](#single-node) architecture with multiple replicas (`replicaCount` > `1`).

When clustering is enabled, the following `nuxeo.conf` properties are set in the chart's ConfigMap:

```properties
nuxeo.cluster.enabled=true
nuxeo.cluster.nodeid=POD_UID
```

When installing the chart, an error occurs if all three conditions below are **not** met:

1. A cloud provider is enabled for binary storage, by setting either `googleCloudStorage.enabled=true` or `amazonS3.enabled=true`.
2. A database is enabled for metadata storage, by setting either `mongodb.enabled=true` or `postgresql.enabled=true`.
3. Kafka is enabled for the WorkManager, PubSub Service and Nuxeo Streams, by setting `kafka.enabled=true`.

Also, if Ingress is enabled with `ingress.enabled=true`, the following warning will guide you:

```shell
Nuxeo needs sticky session for cookie to work correctly. Unfortunately, this can not be achieved by the Nuxeo Helm Chart as it depends on your Ingress controller. See below some examples:
* NGINX - add the annotation below to the ingress:
    ingress:
      annotations:
        nginx.ingress.kubernetes.io/affinity: "cookie"
* Traefik - add the annotation below to the service:
    service:
      annotations:
        traefik.ingress.kubernetes.io/service.sticky.cookie: "true"
```

## Installing the Chart

The `nuxeo` chart can be installed either:

- Remotely, from the [Nuxeo Helm chart](https://packages.nuxeo.com/#browse/browse:helm-releases-public) repository.
- Locally, from a checkout of the [nuxeo-helm-chart](https://github.com/nuxeo/nuxeo-helm-chart/) GitHub repository.

### Remote Installation

To install the chart from the Nuxeo Helm chart respository, add this repository to the Helm configuration:

```shell
helm repo add nuxeo https://packages.nuxeo.com/repository/helm-releases-public/
```

Then, use `nuxeo/nuxeo` as a replacement of `NUXEO_CHART` in the commands below.

### Local Installation

To install the chart from a checkout of the `nuxeo-helm-chart` GitHub repository, use `nuxeo` as a replacement of `NUXEO_CHART` in the commands below.

### Installation Command Samples

To install the chart:

```shell
helm install RELEASE_NAME NUXEO_CHART
```

You can override any value of the base [values.yaml](https://github.com/nuxeo/nuxeo-helm-chart/blob/master/nuxeo/values.yaml) file by creating your own `myvalues.yaml` file and pass it to the `helm install` command:

```shell
helm install RELEASE_NAME NUXEO_CHART --values=myvalues.yaml
```

You can also pass values directly to the `helm install` command:

```shell
helm install RELEASE_NAME NUXEO_CHART --set nuxeo.image.tag=x.y.z
```

For example, to install some packages using a Nuxeo CLID:

```shell
helm install RELEASE_NAME NUXEO_CHART --set nuxeo.packages=nuxeo-web-ui,nuxeo-drive --set nuxeo.clid=NUXEO_CLID
```

To see the templates of the installed release:

```shell
helm get manifest RELEASE_NAME
```

## Installation Errors

Besides possible errors when [Clustering](#clustering) is enabled, the following errors might occur when installing the chart:

- Database mutual exclusion:

  If `mongodb.enabled=true` and `postgresql.enabled=true`, an error indicates that MongoDB and PostgreSQL databases cannot be enabled at the same time.

- Binary storage mutual exclusion:

  If two parameters are set to `true` out of these three: `googleCloudStorage.enabled`, `amazonS3.enabled`, `persistentVolumeStorage.enabled`, an error indicates that only one type of binary storage can be enabled among Google Cloud Storage, Amazon S3 and PersistentVolume.

## Installation Warnings

Besides possible warnings when [Clustering](#clustering) is enabled, the following warnings might occur when installing the chart:

- Binary storage recommendations:

  If no cloud provider is enabled for binary storage, by setting either `googleCloudStorage.enabled=true` or `amazonS3.enabled=true`, a warning indicates that using a cloud provider for binary storage is preferred for production.
  In this case, if `persistentVolumeStorage.enabled=false`, an extra warning indicates that by not enabling a persistent volume for binary storage, binaries will be stored in an `emptyDir` volume, thus not surviving a pod restart.

- Binary storage persistent volume access mode:

  If `persistentVolumeStorage.enabled=true` and `persistentVolumeStorage.accessModes=["ReadWriteMany"]`, a warning indicates that enabling a persistent volume for binary storage with the `ReadWriteMany` access mode is not supported by the Nuxeo Helm Chart, and additional configuration might need to be added, looking at the [File Storage](https://doc.nuxeo.com/nxdoc/file-storage-architecture/) documentation.

  If `persistentVolumeStorage.enabled=true` and `persistentVolumeStorage.accessModes=["ReadWriteOnce"]`, a warning indicates that by enabling a persistent volume for binary storage mounted with the `ReadWriteOnce` access mode, the deployment won't be able to scale up in Kubernetes.

- Log storage persistent volume access mode:

  If `logs.persistence.enabled=true`, a warning indicates that this setup is not recommended for production, a log collector being preferred.

  If `logs.persistence.enabled=true` and `logs.persistence.accessModes=["ReadWriteMany"]`, an extra warning indicates that enabling a persistent volume for log storage with the `ReadWriteMany` access mode is not supported by the Nuxeo Helm chart, and additional configuration might need to be added, otherwise every Nuxeo pod will write to the same `server.log` file.

  If `logs.persistence.enabled=true` and `logs.persistence.accessModes=["ReadWriteOnce"]`, an extra warning indicates that by enabling a persistent volume for log storage mounted with the `ReadWriteOnce` access mode, the deployment won't be able to scale up in Kubernetes.

## Upgrading an Existing Deployment

For example, to pull another Nuxeo image:

```shell
helm upgrade RELEASE_NAME NUXEO_CHART --set image.tag=2023.x
```

## Uninstalling the Chart

```shell
helm uninstall RELEASE_NAME
```

## Full Deployment

To deploy Nuxeo along with MinIO, MongoDB, Opensearch and Kafka, one way is to use [Helmfile](https://github.com/helmfile/helmfile) to deploy multiple charts. You can have a look at the [helmfile](https://github.com/nuxeo/nuxeo-helm-chart/blob/master/ci/helm/helmfile.yaml) used to test and validate a Nuxeo cluster deployment with the `cluster` environment.

To run it, you need to:

- Install the [helmfile](https://github.com/helmfile/helmfile#installation) command line.
- Clone the [nuxeo-helm-chart](https://github.com/nuxeo/nuxeo-helm-chart/) GitHub repository or download the [helm](https://github.com/nuxeo/nuxeo-helm-chart/tree/master/ci/helm) directory.
- In the `ci/helm` directory, run:

```shell
NAMESPACE=NAMESPACE helmfile --namespace=NAMESPACE --environment=cluster sync
```

`NAMESPACE` is the target Kubernetes namespace for the various Helm releases of the Helmfile.

The parameters of the `nuxeo` chart, such as the Nuxeo image, can be configured in the [values-nuxeo.yaml.gotmpl](https://github.com/nuxeo/nuxeo-helm-chart/blob/master/ci/helm/values/values-nuxeo.yaml.gotmpl) and [cluster.yaml.gotmpl](https://github.com/nuxeo/nuxeo-helm-chart/blob/master/ci/helm/environments/cluster.yaml.gotmpl) files.

The parameters of the `minio`, `mongodb`, `opensearch` and `kafka` charts can be configured in the [values-CHART.yaml](https://github.com/nuxeo/nuxeo-helm-chart/tree/master/ci/helm/values) files.

**Note:** These values are just sample values. The related charts need a fine-grained configuration to be suitable for production. See the available values for each one of them:

- [nuxeo](https://github.com/nuxeo/nuxeo-helm-chart/blob/master/nuxeo/values.yaml)
- [minio](https://github.com/bitnami/charts/blob/main/bitnami/minio/values.yaml)
- [mongodb](https://github.com/bitnami/charts/blob/main/bitnami/mongodb/values.yaml)
- [opensearch](https://github.com/opensearch-project/helm-charts/blob/main/charts/opensearch/values.yaml)
- [kafka](https://github.com/bitnami/charts/blob/main/bitnami/kafka/values.yaml)

## Parameters

The following tables lists the configurable parameters of this chart and their default values. Also see the [values.yaml](https://github.com/nuxeo/nuxeo-helm-chart/blob/master/nuxeo/values.yaml) file.

| Parameter | Description | Default |
| --------- | ----------- | --------|
| `image.repository`| Nuxeo image name | `docker-private.packages.nuxeo.com/nuxeo/nuxeo` |
| `image.tag` | Nuxeo image tag | `2023` |
| `image.pullSecrets` | Nuxeo image registry secret names | `[]` |
| `image.pullPolicy` | Nuxeo image pull policy | `IfNotPresent` |
| `architecture` | Nuxeo architecture (`singleNode` or `api-worker`) | `singleNode` |
| `strategy.type` | Nuxeo deployment strategy | `RollingUpdate` |
| `replicaCount` | Number of Nuxeo pods | 1 |
| `workerCount` | Number of Nuxeo worker pods if `architecture=api-worker` | `nil` |
| `clusterDomain` | Domain name within the cluster | `cluster.local` |
| `podLabels` | Nuxeo pod labels | `{}` |
| `podAnnotations` | Nuxeo pod annotations | `{}` |
| `nodeSelector` | Nuxeo node labels for pod assignment | `{}` |
| `affinity` | Nuxeo affinity for pod assignment | `{}` |
| `tolerations` | Nuxeo tolerations for pod assignment | `[]` |
| `resources` | Set Nuxeo container requests and limits for different resources like CPU or memory | `{"requests": {"cpu": "0.5", "memory": "2Gi"}, "limits": {"memory": "2Gi"}}` |
| `service.labels` | Nuxeo service labels | `{}` |
| `service.annotations` | Nuxeo service annotations | `{}` |
| `service.type` | Nuxeo service type | `ClusterIP` |
| `service.externalPort` | Nuxeo service port | `80` |
| `service.internalPort` | Nuxeo service target port | `8080` |
| `service.protocol` | Nuxeo service protocol | `TCP` |
| `service.extraPorts` | Nuxeo service extra ports | `[]` |
| `extraContainerPorts` | Nuxeo container extra ports | `[]` |
| `probePath` | Liveness, readiness and startup probe path | `/nuxeo/runningstatus` |
| `livenessProbe.periodSeconds` | Period seconds for livenessProbe | `5` |
| `livenessProbe.successThreshold` | Success threshold for livenessProbe | `1` |
| `livenessProbe.timeoutSeconds` | Timeout seconds for livenessProbe | `10` |
| `livenessProbe.failureThreshold` | Failure threshold for livenessProbe | `12` |
| `readinessProbe.periodSeconds` | Period seconds for readinessProbe | `5` |
| `readinessProbe.successThreshold` | Success threshold for readinessProbe | `1` |
| `readinessProbe.timeoutSeconds` | Timeout seconds for readinessProbe | `10` |
| `readinessProbe.failureThreshold` | Failure threshold for readinessProbe | `3` |
| `startupProbe.initialDelaySeconds` | Initial delay seconds for startupProbe | `30` |
| `startupProbe.periodSeconds` | Period seconds for startupProbe | `5` |
| `startupProbe.successThreshold` | Success threshold for startupProbe | `1` |
| `startupProbe.timeoutSeconds` | Timeout seconds for startupProbe | `10` |
| `startupProbe.failureThreshold` | Failure threshold for startupProbe | `20` |
| `packages` | Nuxeo packages to install at startup, separated by a space | `""` |
| `clid` | Nuxeo CLID, required for package installation | `""` |
| `mongodb.enabled` | Enable MongoDB backend for Nuxeo | `false` |
| `mongodb.protocol` | Protocol for MongoDB connection | `mongodb` |
| `mongodb.host` | Host for MongoDB connection | `""` |
| `mongodb.port` | Post for MongoDB connection | `27017` |
| `mongodb.url` | URL for MongoDB connection, overrides `host` and `port` | `""` |
| `mongodb.auth.enabled` | Enable MongoDB authentication | `false` |
| `mongodb.auth.username` | MongoDB authentication username | `""` |
| `mongodb.auth.password` | MongoDB authentication password | `""` |
| `mongodb.auth.existingSecret` | Existing secret with MongoDB credentials (keys: `mongodb-username`, `mongodb-password`), overrides `username` and `password` | `""` |
| `mongodb.initContainer.repository` | Image name for MongoDB connection init container | `busybox` |
| `mongodb.initContainer.tag` | Image tag for MongoDB connection init container | `latest` |
| `mongodb.initContainer.imagePullPolicy` | Image pull policy for MongoDB connection init container | `IfNotPresent` |
| `postgresql.enabled` | Enable PostgreSQL backend for Nuxeo | `false` |
| `postgresql.host` | Host for PostgreSQL connection | `""` |
| `postgresql.port` | Post for PostgreSQL connection | `5432` |
| `postgresql.auth.username` | PostgreSQL authentication username | `""` |
| `postgresql.auth.password` | PostgreSQL authentication password | `""` |
| `postgresql.auth.existingSecret` | Existing secret with PostgreSQL credentials (keys: `postgresql-username`, `postgresql-password`), overrides `username` and `password` | `""` |
| `postgresql.initContainer.repository` | Image name for PostgreSQL connection init container | `busybox` |
| `postgresql.initContainer.tag` | Image tag for PostgreSQL connection init container | `latest` |
| `postgresql.initContainer.imagePullPolicy` | Image pull policy for PostgreSQL connection init container | `IfNotPresent` |
| `elasticsearch.enabled` | Enable Elasticsearch for Nuxeo | `false` |
| `elasticsearch.protocol` | Protocol for Elasticsearch connection | `http` |
| `elasticsearch.host` | Host for Elasticsearch connection | `""` |
| `elasticsearch.port` | Post for Elasticsearch connection | `9200` |
| `elasticsearch.clusterName` | Elasticsearch cluster name | `elasticsearch` |
| `elasticsearch.indexNumberOfReplicas` | Elasticsearch number of replicas | `0` |
| `elasticsearch.restClient.socketTimeoutMs` | Elasticsearch REST client socket timeout in ms | `300000` |
| `elasticsearch.restClient.connectionTimeoutMs` | Elasticsearch REST client connection timeout in ms | `300000` |
| `elasticsearch.auth.enabled` | Enable Elasticsearch authentication | `false` |
| `elasticsearch.auth.username` | Elasticsearch authentication username | `""` |
| `elasticsearch.auth.password` | Elasticsearch authentication password | `""` |
| `elasticsearch.auth.existingSecret` | Existing secret with Elasticsearch credentials (keys: `elasticsearch-username`, `elasticsearch-password`), overrides `username` and `password` | `""` |
| `elasticsearch.httpReadOnly.enabled` | Enable Elasticsearch passthrough | `false` |
| `elasticsearch.initContainer.repository` | Image name for Elasticsearch connection init container | `busybox` |
| `elasticsearch.initContainer.tag` | Image tag for Elasticsearch connection init container | `latest` |
| `elasticsearch.initContainer.imagePullPolicy` | Image pull policy for Elasticsearch connection init container | `IfNotPresent` |
| `kafka.enabled` | Enable Kafka for Nuxeo | `false` |
| `kafka.host` | Host for Kafka connection | `""` |
| `kafka.port` | Post for Kafka connection | `9092` |
| `kafka.auth.enabled` | Enable SASL Kafka authentication | `false` |
| `kafka.auth.username` | Kafka SASL authentication username | `""` |
| `kafka.auth.password` | Kafka SASL authentication password | `""` |
| `kafka.auth.existingSecret` | Existing secret with Kafka credentials (keys: `kafka-username`, `kafka-password`), overrides `username` and `password` | `""` |
| `kafka.initContainer.repository` | Image name for Kafka connection init container | `busybox` |
| `kafka.initContainer.tag` | Image tag for Kafka connection init container | `latest` |
| `kafka.initContainer.imagePullPolicy` | Image pull policy for Kafka connection init container | `IfNotPresent` |
| `redis.enabled` | Enable redis for Nuxeo | `false` |
| `initContainers` | Extra init containers for Nuxeo deployment | `[]` |
| `googleCloudStorage.enabled` | Enable Google Cloud Storage for Nuxeo | `false` |
| `googleCloudStorage.auth.projectId` | Google Cloud Storage project ID | `""` |
| `googleCloudStorage.auth.credentials` | Google Cloud Storage credentials | `""` |
| `googleCloudStorage.auth.existingSecret` | Existing secret with Google Cloud Storage credentials (keys: `gcs-project-id`, `gcs-credentials`), overrides `projectId` and `credentials` | `""` |
| `googleCloudStorage.bucket` | Google Cloud Storage bucket name | `""` |
| `googleCloudStorage.bucketPrefix` | Google Cloud Storage bucket prefix, needs to end with `/` | `""` |
| `amazonS3.enabled` | Enable Amazon S3 for Nuxeo | `false` |
| `amazonS3.auth.accessKeyId` | Amazon S3 access key ID | `""` |
| `amazonS3.auth.secretKey` | Amazon S3  secret key | `""` |
| `amazonS3.auth.existingSecret` | Existing secret with Amazon S3 credentials (keys: `amazon-s3-access-key-id`, `amazon-s3-secret-key`), overrides `accessKeyId` and `secretKey` | `""` |
| `amazonS3.region` | Amazon S3 region | `""` |
| `amazonS3.bucket` | Amazon S3 bucket name | `""` |
| `amazonS3.bucketPrefix` | Amazon S3  bucket prefix, needs to end with `/` | `""` |
| `serviceAccount.create` | Enable creation of a service account for Nuxeo deployment | `true` |
| `serviceAccount.annotations` | Nuxeo service account annotations | `{}` |
| `serviceAccount.name` | Default Nuxeo service account name | `""` |
| `persistentVolumeStorage.enabled` | Enable persistent volume storage for Nuxeo binaries | `false` |
| `persistentVolumeStorage.storageClass` | Nuxeo binaries persistent volume storage class | `""` |
| `persistentVolumeStorage.accessModes` | Nuxeo binaries persistent volume access modes | `["ReadWriteOnce"]` |
| `persistentVolumeStorage.size` | Nuxeo binaries persistent volume size | `2Gi` |
| `persistentVolumeStorage.annotations` | Nuxeo binaries persistent volume annotations | `{}` |
| `persistentVolumeStorage.labels` | Nuxeo binaries persistent volume labels | `{}` |
| `ingress.enabled` | Enable Ingress for Nuxeo | `false` |
| `ingress.className` | Nuxeo Ingress class name | `""` |
| `ingress.annotations` | Nuxeo Ingress annotations | `{}` |
| `ingress.labels` | Nuxeo Ingress labels | `{}` |
| `ingress.hostname` | Nuxeo Ingress host | `""` |
| `ingress.path` | Nuxeo Ingress path | `""` |
| `ingress.tls` | Nuxeo Ingress TLS configuration | `[]` |
| `logs.persistence.enabled` | Enable persistent volume storage for Nuxeo logs | `false` |
| `logs.persistence.storageClass` | Nuxeo logs persistent volume storage class | `""` |
| `logs.persistence.accessModes` | Nuxeo logs persistent volume access modes | `["ReadWriteOnce"]` |
| `logs.persistence.size` | Nuxeo logs persistent volume size | `2Gi` |
| `logs.persistence.annotations` | Nuxeo logs persistent volume annotations | `{}` |
| `logs.persistence.labels` | Nuxeo logs persistent volume labels | `{}` |
| `customProperties` | Custom properties to be appended to `nuxeo.conf`` | `{}` |
| `customEnvs` | Custom environment variables for Nuxeo container(s) | `[]` |
| `customEnvsFrom` | Custom environment variables for Nuxeo container(s), loaded from a ConfigMap or Secret | `[]` |
| `metrics.enabled` | Enable Nuxeo global metrics | `true` |
| `metrics.streams.enabled` | Enable stream metrics reporter for Nuxeo Stream introspection | `true` |
| `metrics.stackDriver.enabled` | Enable Google Stackdriver metrics reporter | `false` |
| `metrics.stackDriver.gcpProjectId` | Google Stackdriver metrics project ID | `""` |
| `metrics.stackDriver.tracing.enabled` | Enable Google Stackdriver tracing system | `false` |
| `metrics.stackDriver.tracing.timeout` | Google Stackdriver tracing timeout | `""` |
| `extraContainers` | Extra containers for Nuxeo deployment | `[]` |
| `extraVolumeMounts` | Extra volume mounts for Nuxeo pod(s) | `[]` |
| `extraVolumes` | Extra volumes for Nuxeo deployment | `[]` |
| `extraStringSecrets` | Extra Opaque secrets to deploy, using non base64-encoded strings (`stringData` field) | `{}` |
| `extraSecrets` | Extra Opaque secrets to deploy, using base64-encoded strings (`data` field) | `{}` |
| `podSecurityContext.fsGroup` | Group ID for the volumes of the Nuxeo pod(s) | `1000` |
| `containerSecurityContext` | Security context for Nuxeo container(s) | `{}` |
| `podDisruptionBudget.minAvailable` | Minimum number of Nuxeo pods that must be available during a disruption | `nil` |
| `podDisruptionBudget.maxUnavailable` | Maximum number of pods that can be unavailable during a disruption | `nil` |
