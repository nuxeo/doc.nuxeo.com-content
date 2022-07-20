---
title: 'Installation and Configuration'
description: 'Install and configure Nuxeo Enhanced Viewer'
review:
    comment: ''
    date: '2022-07-01'
    status: ok
labels:
    - addon
toc: true
tree_item_index: 50
---

## Presentation

The Nuxeo Enhanced Viewer is provided by the integration of the ARender software which is to deploy separately from Nuxeo, and the [Nuxeo Enhanced Viewer Addon](https://connect.nuxeo.com/nuxeo/site/marketplace/package/nuxeo-arender).

{{#> callout type='warning' heading='Private packages'}}
You should contact your Nuxeo Administrator or Nuxeo sales representative to get access to these packages.
{{/callout}}

The ARender software is extended by Nuxeo to integrate the addon and configurations/customizations.
The addon adds to the Previewer the capability to communicate with the Nuxeo REST API, and mostly leverages the [comment & annotation endpoints]({{page page='comments'}}#rest-api).

The ARender software is provided through 5 Docker images to pull from our Docker registry `docker-arender.packages.nuxeo.com`:

- `nuxeo/arender-document-converter`
- `nuxeo/arender-document-renderer`
- `nuxeo/arender-document-service-broker`
- `nuxeo/arender-document-text-handler`
- `nuxeo/arender-ui`

NEV Architecture and communication between services:

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/Nuxeo Enhanced Viewer/NEV - Architecture 2.x
    name: NEV - Architecture 2.x.png
    addins#diagram#up_to_date
--}}
![NEV - Architecture 2.x](nx_asset://2370d315-4a7d-4e06-a25b-1f30085f55fd)

The user is authenticated in ARender with an [OAuth2 Authorization Grant Flow]({{page page='using-oauth2#oauth-2-authorization-grant-flow'}}) against Nuxeo.

{{#> callout type='warning' heading='deployment'}}
In order to make the integration work on modern browsers, Nuxeo and NEV must be deployed under sibling domains, for instance `nuxeo.domain.org` and `nev.domain.org`. This is due to the OAuth2 challenge which occurs in an iframe, as the ARender UI is integrated in Nuxeo Web UI within an iframe.
{{/callout}}

## Nuxeo Configuration

You need to configure the ARender Previewer URL, and an OAuth2 client in `nuxeo.conf`:

```properties
arender.server.previewer.host=https://arender-previewer-url
nuxeo.arender.oauth2.client.create=true
nuxeo.arender.oauth2.client.id=arender
nuxeo.arender.oauth2.client.secret=OAUTH2_SECRET
nuxeo.arender.oauth2.client.redirectURI=/login/oauth2/code/nuxeo
```

The `OAUTH2_SECRET` has to be replaced, there's no constraint on it.

## ARender Configuration

The preferred way to run NEV services is to use Kubernetes and Helm 3 as they provide interesting features such as auto-scaling and high availability.

### Kubernetes

The Helm Chart and installation instructions are available in the [ARender Documentation](https://docs.arender.io/install/kubernetes/).

{{#> callout type='warning' heading='Private services'}}
You should contact your Nuxeo Administrator or your Nuxeo sales representative to get access to these services.
{{/callout}}

{{#> callout type='info' heading='PVC requirement'}}
The NEV stack needs a ReadWriteMany PVC to share blobs.
{{/callout}}

After getting the ARender Helm Chart, you need to customize some parts in order to deploy the Nuxeo extended Docker images.

```yaml
global:
  arenderVersion: "2.1.2"
  imagePullSecrets:
  - name: docker-arender-packages-nuxeo-pull-secret

rendition:
  broker:
    image:
      repository: docker-arender.packages.nuxeo.com/nuxeo/arender-document-service-broker
    replicaCount: 1
    autoscale:
      enabled: false
      maxReplicas: 3
      cpuLimit: 80

  converter:
    image:
      repository: docker-arender.packages.nuxeo.com/nuxeo/arender-document-converter
    replicaCount: 1
    autoscale:
      enabled: false
      maxReplicas: 3
      cpuLimit: 80
    deployment:
      readinessProbe:
        timeoutSeconds: 5

  handler:
    image:
      repository: docker-arender.packages.nuxeo.com/nuxeo/arender-document-text-handler
    replicaCount: 1
    autoscale:
      enabled: false
      maxReplicas: 3
      cpuLimit: 80

  renderer:
    image:
      repository: docker-arender.packages.nuxeo.com/nuxeo/arender-document-renderer
    replicaCount: 1
    autoscale:
      enabled: false
      maxReplicas: 3
      cpuLimit: 80

viewer:
  image:
    repository: docker-arender.packages.nuxeo.com/nuxeo/arender-ui
  # replicaCount & autoscale can be changed if high availability is configured, see next section
  replicaCount: 1
  autoscale:
    enabled: false
    maxReplicas: 3
    cpuLimit: 80
  deployment:
    livenessProbe:
      # override livenessProbe.probe because default one is behind the OAuth2 security scope
      path: /arendergwt/gwt/standard/standard.css
    readinessProbe:
      # override readinessProbe.probe because default one is behind the OAuth2 security scope
      path: /arendergwt/health/records
  environment:
    # required values
    ARENDERSRV_NUXEO_SERVER_URL: https://nuxeo-url
    ARENDERSRV_NUXEO_SERVER_ARENDER_SECRET: OAUTH2_SECRET # Same than the one in nuxeo.conf
    # optional values
    ARENDERSRV_NUXEO_SERVER_CONTEXT_PATH: /nuxeo
    ARENDERSRV_NUXEO_CLIENT_TIMEOUT: "30" # seconds
    ARENDERSRV_NUXEO_CLIENT_POOL_MAX_IDLE_CONNECTIONS: "200"
    ARENDERSRV_NUXEO_CLIENT_POOL_KEEP_ALIVE_DURATION: "900" # seconds
    # high availability settings, see next section for configuration
    ARENDERSRV_NUXEO_OAUTH2_STORAGE_BACKEND: local
    # high availability with Hazelcast
    ARENDERSRV_NUXEO_OAUTH2_STORAGE_HAZELCAST_SERVICE_DNS: name-of-hazelcast-service-in-kubernetes
    ARENDERSRV_NUXEO_OAUTH2_STORAGE_HAZELCAST_PORT: "5701"
    ARENDERSRV_NUXEO_OAUTH2_STORAGE_HAZELCAST_CLUSTER_NAME: arender-previewer
    # high availability with MongoDB
    ARENDERSRV_NUXEO_OAUTH2_STORAGE_MONGODB_SERVER: mongodb://mongodb-host:27017
    ARENDERSRV_NUXEO_OAUTH2_STORAGE_MONGODB_DBNAME: arender
    ARENDERSRV_NUXEO_OAUTH2_STORAGE_MONGODB_SSL: false
  # enable ingress, the UI must be accessible
  ingress:
    enabled: true
    hosts:
    - host: arender-previewer-url
    tls:
    - secretName: arender-previewer-tls-secret
      hosts:
      - arender-previewer-url

```

The values above have been written for the ARender Helm Chart `4.8.1` and NEV `2.1.2`.

### Kubernetes-less

It is possible to run the NEV services without Kubernetes, you will need to run the 5 Docker images and provide them configuration for the inter-services communication, and a shared volume.

#### Rendition

The shared volume has to be mounted inside each rendition containers (the `nuxeo/arender-document-converter`, `nuxeo/arender-document-renderer`, `nuxeo/arender-document-service-broker` and `nuxeo/arender-document-text-handler`) at the `/arender/tmp` location.

##### Document Converter

The document converter should be accessible on the port `19999`.

The document converter needs to communicate with the document service broker.

The environment variables below must be configured:

```yaml
DCV_APP_EUREKA_HOSTNAME: BROKER_HOSTNAME # to replace
DCV_APP_EUREKA_SERVER_PORT: 8761
DCV_EUREKA_INSTANCE_METADATA.MAP_HOST.NAME: CONVERTER_HOSTNAME # to replace
JAVA_OPTS: -Dsun.net.inetaddr.ttl=0 -XX:InitialRAMPercentage=50.0 -XX:MaxRAMPercentage=50.0 -Djdk.tls.client.protocols=TLSv1.2
```

##### Document Renderer

The document renderer should be accessible on the port `9091`.

The document renderer needs to communicate with the document service broker.

The environment variables below must be configured:

```yaml
DRN_APP_EUREKA_HOSTNAME: BROKER_HOSTNAME # to replace
DRN_APP_EUREKA_SERVER_PORT: 8761
DRN_EUREKA_INSTANCE_METADATA.MAP_HOST.NAME: RENDERER_HOSTNAME # to replace
JAVA_OPTS: -Dsun.net.inetaddr.ttl=0 -XX:InitialRAMPercentage=50.0 -XX:MaxRAMPercentage=50.0 -Djdk.tls.client.protocols=TLSv1.2
```

##### Document Service Broker

The document service broker should be accessible on the port `8761`.

The document service broker needs to communicate with the document converter, the document renderer, and the document text handler.

The environment variables below must be configured:

```yaml
DSB_KUBEPROVIDER_KUBE.HOSTS_${CONVERTER_HOSTNAME}: 19999 # the ${CONVERTER_HOSTNAME} is to replaced by the converter hostname
DSB_KUBEPROVIDER_KUBE.HOSTS_${RENDERER_HOSTNAME}: 9091 # the ${RENDERER_HOSTNAME} is to replaced by the renderer hostname
DSB_KUBEPROVIDER_KUBE.HOSTS_${TEXT_HANDLER_HOSTNAME}: 8899 # the ${TEXT_HANDLER_HOSTNAME} is to replaced by the text handler hostname
JAVA_OPTS: -Dsun.net.inetaddr.ttl=0 -XX:InitialRAMPercentage=50.0 -XX:MaxRAMPercentage=70.0 -Djdk.tls.client.protocols=TLSv1.2
```

##### Document Text Handler

The document text handler should be accessible on the port `8899`.

The document text handler needs to communicate with the document service broker.

The environment variables below must be configured:

```yaml
DTH_APP_EUREKA_HOSTNAME: BROKER_HOSTNAME # to replace
DTH_APP_EUREKA_SERVER_PORT: 8761
DTH_EUREKA_INSTANCE_METADATA.MAP_HOST.NAME: TEXT_HANDLER_HOSTNAME # to replace
JAVA_OPTS: -Dsun.net.inetaddr.ttl=0 -XX:InitialRAMPercentage=50.0 -XX:MaxRAMPercentage=70.0 -Djdk.tls.client.protocols=TLSv1.2
```

#### Viewer

The viewer is the only one which should be accessible publicly as the user will browse to it. The application is running on the port `8080`, a proxy with TLS configuration should be set up in front of it, the `Forwarded` or `X-Forwarded-*` headers must be configured on the proxy.

The viewer needs to communicate with the document service broker and Nuxeo.

The environment variables below must be configured:

```yaml
# required values
ARENDERSRV_ARENDER_SERVER_RENDITION_HOSTS: http://BROKER_HOSTNAME:8761/ # to replace
ARENDERSRV_NUXEO_SERVER_URL: https://nuxeo-url # to replace
ARENDERSRV_NUXEO_SERVER_ARENDER_SECRET: OAUTH2_SECRET # Same than the one in nuxeo.conf
# optional values
ARENDERSRV_NUXEO_SERVER_CONTEXT_PATH: /nuxeo
ARENDERSRV_NUXEO_CLIENT_TIMEOUT: "30" # seconds
ARENDERSRV_NUXEO_CLIENT_POOL_MAX_IDLE_CONNECTIONS: "200"
ARENDERSRV_NUXEO_CLIENT_POOL_KEEP_ALIVE_DURATION: "900" # seconds
```

### Previewer High Availability

The Previewer can be deployed in an High Availability way, to do so you can choose between [Hazelcast](https://hazelcast.com/) or [MongoDB](https://www.mongodb.com/) to share the HTTP sessions and OAuth2 tokens between previewer instances.

#### Hazelcast

Hazelcast is the preferred way to bring High Availability to the Previewer as it doesn't require to deploy another software.

To configure it in Kubernetes, you first need to deploy an [Headless Service](https://kubernetes.io/docs/concepts/services-networking/service/#headless-services), like below:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nev-viewer-hazelcast-headless
  labels:
    app: viewer
    release: nev # to replace by the release name when you have deployed the NEV stack
    component: viewer
spec:
  type: ClusterIP
  clusterIP: None
  ports:
    - name: tcp-hazelcast
      port: 5701
  selector:
    app: viewer
    release: nev # to replace by the release name when you have deployed the NEV stack
    component: viewer
```

In a Kubernetes-less setup, you need to configure a DNS record resolving all your previewer hostnames.

Then you need to configure on the Previewer the environment variables below:

```yaml:
ARENDERSRV_NUXEO_OAUTH2_STORAGE_BACKEND: hazelcast
ARENDERSRV_NUXEO_OAUTH2_STORAGE_HAZELCAST_SERVICE_DNS: nev-viewer-hazelcast-headless
```

#### MongoDB

To use MongoDB as High Availability backend, you need to configure on the Previewer the environment variables below:

```yaml
ARENDERSRV_NUXEO_OAUTH2_STORAGE_BACKEND: mongodb
ARENDERSRV_NUXEO_OAUTH2_STORAGE_MONGODB_SERVER: mongodb://mongodb-host:27017
```

The MongoDB server setting supports the [connection string](https://docs.mongodb.com/manual/reference/connection-string/).

The HTTP sessions and OAuth2 tokens will be stored in the `sessions` and `oauth2Authorized` collections of the `arender` database.

## ARender Customization

You can customize the ARender Previewer interface to fit specific UI and UX needs.

Examples of possible configurations:

- Add or remove buttons from the ARender interface,
- Modify ARender behaviors on specific user actions (like entering a comment when the user clicks on "Enter"),
- Reference a new theme (by creating your custom CSS file),
- etc.

{{!--     ### nx_asset ###
    path: /default-domain/workspaces/Product Management/Documentation/Documentation Screenshots/NXDOC/Master/Nuxeo Annotations with ARender/arender-customized.png
    name: arender-customized.png
    addins#screenshot#up_to_date
--}}
![arender-customized.png](nx_asset://a26f7eaf-e268-443f-be33-2c88542e2a13 ?w=600,border=true)

The UI customization is done through two files to put in the `/docker-entrypoint-init.d` directory inside the Previewer container.

- `arender.css` to customize the style
- `arender.properties` to customize the behavior

Please follow the [ARender Configuration Guide](https://docs.arender.io/configuration/web-ui/) for more information about available properties and style.

{{#> callout type='info' heading='Properties as environment variables'}}
UI properties can also be customized through environment variables. You need to capitalize all letters in the key, and to replace `.` by `_`, and prefix it with `ARENDER_`.</br>
For instance, `topPanel.widgets.beanNames` will become `ARENDER_TOPPANEL_WIDGETS_BEANNAMES`.
{{/callout}}
