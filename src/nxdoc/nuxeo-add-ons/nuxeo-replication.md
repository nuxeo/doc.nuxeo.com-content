---
title: DR/Replication with Nuxeo
description: ''
review:
    comment: ''
    date: '2018-09-19'
    status: ok
labels:
    - replication
toc: true
tree_item_index: 2510
---

## Introduction

This document describes the complete setup of a Nuxeo installation that supports high availability (HA) and fast disaster recovery (DR). Before going further, let's define the scope of those two terms.

### High availability

"High availability is a characteristic of a system, which aims to ensure an agreed level of operational performance, usually uptime, for a higher than normal period." (Wikipedia)

Availability is usually defined as a number of "nines" which gives the percentage of availability of a system:

 - 99% ("two nines"): allows 3.65 days of downtime per year
 - 99.9% ("three nines"): allows 8.76 hours of downtime per year
 - 99.99% ("four nines"): allows 52.56 minutes of downtime per year.

To achieve high availability, it means that the application and the deployment infrastructure has to be resilient and support failures of some part of the system. The global availability of a system is the product of the availability of all part of the system. For instance, in this document, the infrastructure is deployed on top of Openshift. If the availability of the Openshift infrastructure is 99%, then the global availability can't be more than that. The same calculus also applies to the availability of the Datacenter that hosts Openshift. For instance, in order to achieve HA, the DC must have a dual power supply.

The scope of the document is to define how to deploy Nuxeo in a clustered way to enforce HA. Even if this document defines how one can deploy the other middleware (MongoDB, Elasticsearch, Kafka, and Zookeeper), the goal is not to focus on their HA deployment.

### Disaster recovery

"Disaster recovery (DR) involves a set of policies, tools, and procedures to enable the recovery or continuation of vital technology infrastructure and systems following a natural or human-induced disaster" (Wikipedia)

To define Disaster Recovery, two metrics are involved:

 - RTO: Recovery Time Objective which defines the time to recover from the disaster
 - RPO: Recovery Point Objective which defines the maximum targeted period in which data might be lost.

This means that in a disaster recovery scenario **there will be some data loss**. That's why such scenario must be activated very carefully.

In a regular application, RTO can be the time to restore the infrastructure in another DC and restore the last backup. The RPO would then be the time that has elapsed from the last backup. In that case, RPO and RTO both can be in the magnitude of hours.

In our case, we want to have an RPO/RTO that is less than a single minute so the backup/restore strategy is definitively not adapted.


### Prerequisites

To achieve all the setup, we will use two Openshift cluster. Those clusters should be able to communicate and for instance, they must not have the same network addressing scheme. Here is how the setup can be done on AWS:

<img src="images/dr-deployment.png" width="700px"/>

This schema only shows the application nodes of the cluster, but the Openshift installation should also be HA capable, meaning having three master nodes and three `etcd` nodes.


## High availability

### HA expectations from a Nuxeo perspective

Nuxeo is a platform that relies on different middleware to persist data. Each of those middleware has to be resilient to failure:

 - Metadata and directories will be stored in MongoDB. Configuring MongoDB with two replicaSet will ensure resilience to a single instance failure.
 - Indexes will be stored in ElasticSearch. It supports HA and the shards will be replicated 2 times across data nodes.
 - Asynchronous works and Audit will be stored in Kafka which will be deployed with 3 nodes.
 - Binaries will be stored in an HA object store: on AWS we use S3


### Deployment in Openshift

In Openshift the deployment is split in three parts:

 - nuxeo-backings: takes care of the middleware deployments (MongoDB, ElasticSearch, Kafka and Zookeeper)
 - nuxeo-build: takes care of the application build
 - nuxeo: takes care of the Nuxeo deployment

<img src="images/ha-deployment.png" width="700"/>

#### Prerequisites

##### Storage classes and Security Context Constraint
The templates make use of two common cluster resources which are:

 - `es-scc`: a custom [Security Context Constraint](https://docs.openshift.org/3.9/admin_guide/manage_scc.html) policy that is needed by Elasticsearch deployment
 - `aws-fast`: a [Storage Class](https://docs.openshift.org/3.9/install_config/persistent_storage/persistent_storage_aws.html) that allows to dynamically provision EBS volumes. If not on AWS, this has to be replaced by a storage class [suitable for the deployment infrastructure](https://docs.openshift.org/3.9/install_config/persistent_storage/index.html).
 - `shared`: a [Storage Class](https://docs.openshift.org/3.9/install_config/persistent_storage/persistent_storage_aws.html) that allows to provision RWX capable volumes. In AWS it can be done by. using the `openshift.org/aws-efs` provisioner.

These resources are defined in the `prerequisite.yaml` file, so it can be deployed by launching the following command.

    oc create -f common/prerequisite.yaml

Now it is possible to create a new project that will host our pods:

    oc new-project ps-hadr

##### Ansible Service Catalog

The [Ansible Service Broker](https://docs.openshift.org/3.9/architecture/service_catalog/ansible_service_broker.html) has to be deployed and configured to use the [Nuxeo APB catalog](https://github.com/nuxeo-sandbox/nuxeo-apb-catalog/).

It also has to be run with the `cluster-admin` role as some of Nuxeo APBs needs to define some RBAC. So in the config map of the Ansible service broker, th sandbox role muste be define to `cluster-admin`.

		...
		openshift:
		  host: ""
		  ca_file: ""
		  bearer_token_file: ""
		  namespace: openshift-ansible-service-broker
		  sandbox_role: cluster-admin
		  image_pull_policy: IfNotPresent
		  keep_namespace: false
		...

The `image_pull_policy` can also be set to `Always` to be sure to pull the latest version from the docker images repositories.

The service account used for the broker must have the `cluster-admin` role too.

```
oc adm policy add-cluster-role-to-user cluster-admin system:serviceaccount:openshift-ansible-service-broker:asb

```


##### Connect secret

In order to download Hotfixes and needed Nuxeo packages, a Connect secret has to be created. Update the `prerequisites/secrets.yaml` to reflect the needed credentials and then:

```
oc create -f prerequisites/secrets.yaml
```
#### Backings deployment

First, assign the `es-scc` and some roles to some service accounts so that they can deploy.

    oc adm policy add-scc-to-user es-scc system:serviceaccount:ps-hadr:elasticsearch

After that, create the resources needed for backings that:

	svcat provision nuxeo-kafka --class nuxeo-nuxeo-kafka-apb --plan clustered
	svcat provision nuxeo-mongodb --class nuxeo-nuxeo-mongodb-apb --plan replicaset
	svcat provision nuxeo-elasticsearch --class nuxeo-nuxeo-elasticsearch-apb --plan clustered

On the Openshift console, the pods of each services are being instanciated:

<img src="images/backings-deployment.png" width="700"/>

After a few minutes, all the deployment should be finished and ready to serve.


#### Nuxeo deployment

To deploy the primary nuxeo instance, use the Nuxeo APB with the `nuxeo-primary.json` parameters and the `nuxeo-connect` secret.

```
PARAMS_JSON=$(<nuxeo-primary.json)
svcat provision nuxeo --class nuxeo-nuxeo-apb --params-json "$PARAMS_JSON" -s nuxeo-connect[parameters]
```

In order to configure Kafka to be HA capable, and until [NXP-25424](https://jira.nuxeo.com/browse/NXP-25424) is resolved, a configuration has to be deployed as part of a Nuxeo Package (usually a Studio project) that configure the topics to be replicated (the `default.replication.factor` property).

```
  <require>org.nuxeo.kafka.defaultConfig</require>
  <extension point="kafkaConfig" target="org.nuxeo.runtime.stream.kafka.service">
    <kafkaConfig name="default" topicPrefix="${kafka.topicPrefix}">
      <producer>
        <property name="bootstrap.servers">${kafka.bootstrap.servers}</property>
        <property name="default.replication.factor">3</property>
      </producer>
      <consumer>
        <property name="bootstrap.servers">${kafka.bootstrap.servers}</property>
        <property name="request.timeout.ms">${kafka.request.timeout.ms}</property>
        <property name="max.poll.interval.ms">${kafka.max.poll.interval.ms}</property>
        <property name="session.timeout.ms">${kafka.session.timeout.ms}</property>
        <property name="heartbeat.interval.ms">${kafka.heartbeat.interval.ms}</property>
        <property name="max.poll.records">${kafka.max.poll.records}</property>
      </consumer>
    </kafkaConfig>
  </extension>
```


## Disaster Recovery

### Expectations from a Nuxeo perspective

As already explained in the introduction the RTO/RPO constraints that we have for this project do not allow us to qualify a backup/restore strategy for DR. The idea to meet the requirements is to replicate the operation logs from our backends to a secondary site in near-realtime.

The idea is to store those operation logs in the primary Kafka backend and then mirror them on the secondary site Kafka to be able to replay them:

<img src="images/replication.png" width="500"/>

During a disaster recovery scenario, we just have to launch a Nuxeo instance on top of the replicated backings.

The binary manager replication has to be handled by the binary manager implementation. In this scenario, as we use S3, we will setup the S3 replication feature.

### Secondary deployment in Openshift


##### Storage classes and Security Context Constraint
The templates make use of two common cluster resources which are:

 - `es-scc`: a custom [Security Context Constraint](https://docs.openshift.org/3.9/admin_guide/manage_scc.html) policy that is needed by Elasticsearch deployment
 - `aws-fast`: a [Storage Class](https://docs.openshift.org/3.9/install_config/persistent_storage/persistent_storage_aws.html) that allows to dynamically provision EBS volumes. If not on AWS, this has to be replaced by a storage class [suitable for the deployment infrastructure](https://docs.openshift.org/3.9/install_config/persistent_storage/index.html).
 - `shared`: a [Storage Class](https://docs.openshift.org/3.9/install_config/persistent_storage/persistent_storage_aws.html) that allows to provision RWX capable volumes. In AWS it can be done by. using the `openshift.org/aws-efs` provisioner.

These resources are defined in the `prerequisite.yaml` file, so it can be deployed by launching the following command.

    oc create -f common/prerequisite.yaml

Now it is possible to create a new project that will host our pods:

    oc new-project ps-hadr

##### Ansible Service Catalog

The [Ansible Service Broker](https://docs.openshift.org/3.9/architecture/service_catalog/ansible_service_broker.html) has to be deployed and configured to use the [Nuxeo APB catalog](https://github.com/nuxeo-sandbox/nuxeo-apb-catalog/).

It also has to be run with the `cluster-admin` role as some of Nuxeo APBs needs to define some RBAC. So in the config map of the Ansible service broker, th sandbox role muste be define to `cluster-admin`.

		...
		openshift:
		  host: ""
		  ca_file: ""
		  bearer_token_file: ""
		  namespace: openshift-ansible-service-broker
		  sandbox_role: cluster-admin
		  image_pull_policy: IfNotPresent
		  keep_namespace: false
		...

The `image_pull_policy` can also be set to `Always` to be sure to pull the latest version from the docker images repositories.

The service account used for the broker must have the `cluster-admin` role too.

```
oc adm policy add-cluster-role-to-user cluster-admin system:serviceaccount:openshift-ansible-service-broker:asb

```


##### Connect secret

In order to download Hotfixes and needed Nuxeo packages, a Connect secret has to be created. Update the `prerequisites/secrets.yaml` to reflect the needed credentials and then:

```
oc create -f prerequisites/secrets.yaml
```


#### Backings deployment

First, assign the `es-scc` and some roles to some service accounts so that they can deploy.

    oc adm policy add-scc-to-user es-scc system:serviceaccount:ps-hadr:elasticsearch

After that, create the resources needed for backings that:

	svcat provision nuxeo-kafka --class nuxeo-nuxeo-kafka-apb --plan clustered
	svcat provision nuxeo-mongodb --class nuxeo-nuxeo-mongodb-apb --plan replicaset
	svcat provision nuxeo-elasticsearch --class nuxeo-nuxeo-elasticsearch-apb --plan clustered

On the Openshift console, the pods of each services are being instanciated:

<img src="images/backings-deployment.png" width="700"/>

After a few minutes, all the deployment should be finished and ready to serve.


#### Nuxeo deployment

To deploy the primary nuxeo instance, use the Nuxeo APB with the `nuxeo-primary.json` parameters and the `nuxeo-connect` secret.

```
PARAMS_JSON=$(<nuxeo-secondary.json)
svcat provision nuxeo --class nuxeo-nuxeo-apb --params-json "$PARAMS_JSON" -s nuxeo-connect[parameters]
```


#### Kafa mirror

##### Big picture

<img src="images/kafka-replication.png" width="700"/>

The Kafka instance from primary site is expose on the host's port and that's how
##### Launching Kafka mirror
These commands have to be run on the **SECONDARY SITE**

After all the backing (and mainly Kafka) have been started, we can start the Kafka Mirror deployment that will replicate all topics from primary site to the secondary one. First the MirrorMaker configuration has to be updated to reflect the values of the backings services.

In the `secondary/kafka-mirror.yaml` file update the consumer sections to point to the Kafka external URI or the primary site:

```
consumer.properties: |-
    bootstrap.servers=10.252.6.218:31090,10.252.4.216:31091,10.252.5.112:31092
```

In the producer section, update the configuration to point the to local Kafka site:

```
producer.properties: |-
    bootstrap.servers=nuxeo-kafka-44e7f-0.nuxeo-kafka-44e7f.ps-hadr.svc:9092,nuxeo-kafka-44e7f-1.nuxeo-kafka-44e7f.ps-hadr.svc:9092,nuxeo-kafka-44e7f-2.nuxeo-kafka-44e7f.ps-hadr.svc:9092
```

Once this is done, we can launch the creation of the Kafka mirror deployment:

    oc create -f secondary/kafka-mirror.yaml

A `mirrormaker` deployment should be ready:

<img src="images/kafka-mirror.png" width="700"/>

To verify that the topics have been replicated, launch the following command :

    # oc exec -ti nuxeo-zookeeper-XXXXX -- bash -c "kafka-topics --zookeeper localhost:2181 --list"

    ...    

    [2018-03-06 22:17:00,791] INFO Session establishment complete on server localhost/0:0:0:0:0:0:0:1:2181, sessionid = 0x561fd53a9450000, negotiated timeout = 30000 (org.apache.zookeeper.ClientCnxn)
    [2018-03-06 22:17:00,793] INFO zookeeper state changed (SyncConnected) (org.I0Itec.zkclient.ZkClient)
    nuxeo-audit
    nuxeo-default
    nuxeo-elasticSearchIndexing
    nuxeo-fulltextUpdater
    nuxeo-global-oplog
    hadr-updateACEStatus
    [2018-03-06 22:17:00,814] INFO Terminate ZkClient event thread. (org.I0Itec.zkclient.ZkEventThread)
    [2018-03-06 22:17:00,816] INFO Session: 0x561fd53a9450000 closed (org.apache.zookeeper.ZooKeeper)
    [2018-03-06 22:17:00,818] INFO EventThread shut down for session: 0x561fd53a9450000 (org.apache.zookeeper.ClientCnxn)

#### RedoApp

The RedoApp is a simple app that reads the `nuxeo-global-oplog` to apply the replicated commands to MongoDB, ElasticSearch and downloads the remote binaries. To deploy it, we first have to update the value in its configuration resource in `secondary/redoapp.yaml`. The parameters that have to be update are:

```
nuxeo.mongodb.server=
kafka.bootstrap.servers=
elasticsearch.host=
nuxeo.redolog.blob.baseURL=
```

The Redoapp also mounts some directory of the Nuxeo deployment. The name of the PVC have to be updated accordingly:

```
- name: binaries
  persistentVolumeClaim:
  	claimName: nuxeo-XXXXX-binaries-pvc
- name: connect-secret
  secret:
    secretName: nuxeo-XXXXX-connect
```

Once configured, the RedoApp can be launched by running:

```
oc create -f secondary/redoapp.yaml
```


To verify that the data have been recreated in MongoDB for instance, wait a bit for the redoapp to start replicating commands and launch the command:

    # oc exec -ti nuxeo-mongo-XXXXX-0 -- bash -c 'mongo nuxeo --eval "db.default.find({\"dc:title\":\"Workspaces\"})"'
    { "_id" : ObjectId("5a9f029fdf9bea014092ac3c"),     
      "ecm:fulltextJobId" : "3b5ad82a-a6d5-4bcc-8734-25fbba42284c",
      "ecm:racl" : [
          "Administrator",
          "members"
      ],
      "icon" : "/icons/workspace.gif",
      "dc:creator" : "system",
      "ecm:parentId" : "6210c4b7-ed62-43a9-8900-81216f0cb086",
      "ecm:ancestorIds" : [
          "00000000-0000-0000-0000-000000000000",
          "6210c4b7-ed62-43a9-8900-81216f0cb086"
      ],
      "dc:modified" : ISODate("2018-03-06T21:05:35.380Z"),
      "ecm:minorVersion" : NumberLong(0),
      "dc:lastContributor" : "system",
      "ecm:name" : "workspaces",
      "ecm:majorVersion" : NumberLong(0),
      "ecm:systemChangeToken" : NumberLong(2),
      "ecm:lifeCyclePolicy" : "default",
      "dc:created" : ISODate("2018-03-06T21:05:35.380Z"),
      "dc:title" : "Workspaces",
      "ecm:primaryType" : "WorkspaceRoot",
      "ecm:id" : "3b5ad82a-a6d5-4bcc-8734-25fbba42284c",
      "ecm:changeToken" : NumberLong(0),
      "ecm:lifeCycleState" : "project",
      "dc:contributors" : [ "system" ],
      "ecm:fulltextSimple" : "icons workspace gif system system workspaces workspaces system"
    }    
