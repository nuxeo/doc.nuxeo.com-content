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

#### Deployment

{{#> callout type='warning' heading='Private services'}}
You should contact your Nuxeo Administrator or your Nuxeo sales representative to get access to these services.
{{/callout}}

{{#> callout type='info' heading='PVC requirement'}}
The NEV stack needs a ReadWriteMany PVC to share blobs.
{{/callout}}

Nuxeo provides the Nuxeo Enhanced Viewer Helm Chart to ease the deployment.
The NEV Helm Chart leverages, as a dependency, the ARender Helm Chart whose documentation can be found [here](https://docs.arender.io/install/kubernetes/).

You first need to add the Nuxeo ARender Helm Chart repository:

```bash
helm repo add nuxeo-arender https://packages.nuxeo.com/repository/helm-arender --username <PACKAGES_USERNAME> --password <PACKAGES_PASSWORD>
helm repo update
```

You need to have several Kubernetes Secrets present in the namespace where the NEV stack will be deployed.
You can find below the list of these required Kubernetes Secrets with a name example:
- `docker-arender-packages-nuxeo-pull-secret`: a _kubernetes.io/dockerconfigjson_ secret holding the credentials 
to pull NEV Docker images from packages.nuxeo.com
- `kubernetes-cluster-tls`: a _kubernetes.io/tls_ secret holding the TLS private key and certificate to secure 
NEV viewer public access
- `nuxeo-enhanced-viewer-oauth2`: an _Opaque_ secret holding the OAuth2 secret configured on Nuxeo side to
allow users to authenticate against NEV viewer

You can create the `nuxeo-enhanced-viewer-oauth2` with the command below:

```bash
kubectl create secret generic nuxeo-enhanced-viewer-oauth2 \
  --from-literal=ARENDERSRV_NUXEO_SERVER_ARENDER_SECRET=OAUTH2_SECRET
```

You can now prepare a `values.yaml` file containing the parameter to deploy the NEV stack, you can find an example below:

```yaml
global:
  arenderVersion: "2.1.4"
  imagePullSecrets:
  - name: docker-arender-packages-nuxeo-pull-secret

arender:
  viewer:
    nuxeo:
      server:
        url: https://nuxeo.somedomain.com
      oauth2:
        secretKey: nuxeo-enhanced-viewer-oauth2
    ingress:
      enabled: true
      hosts:
      - host: nev.somedomain.com
      tls:
      - secretName: kubernetes-cluster-tls
        hosts:
        - nev.somedomain.com
```

Finally, you can deploy the NEV stack:

```bash
helm install <RELEASE_NAME> nuxeo-arender/nuxeo-enhanced-viewer -f values.yaml
```

After a few minutes you should see running Pods in your namespace.

#### High Availability & Autoscale

The whole stack can be deployed in an High Availability way, the NEV software uses [Hazelcast](https://hazelcast.com/) to bring this feature.
This allows to share states between services such as HTTP sessions, OAuth2 tokens, convertion statuses...

The Helm Chart also allows to enable Autoscaling for each services.

To enable these features you just need to add the parameters below to your `values.yaml`:

```yaml
arender:
  rendition:
    broker:
      replicaCount: 2
      autoscale:
        enabled: true
        maxReplicas: 5

    converter:
      replicaCount: 2
      autoscale:
        enabled: true
        maxReplicas: 5

    handler:
      replicaCount: 2
      autoscale:
        enabled: true
        maxReplicas: 5

    renderer:
      replicaCount: 2
      autoscale:
        enabled: true
        maxReplicas: 5

  viewer:
    replicaCount: 2
    autoscale:
      enabled: true
      maxReplicas: 5
```

#### Helm Chart Values

The NEV Helm Chart supports the same values than the ARender Helm Chart, you just need to prefix them with `arender.`.

The following table lists some of the configurable parameters for the NEV Helm Chart:

| Key                                                 | Type                         | Default                          | Description                                                                                                                                                           |
| --------------------------------------------------- | ---------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| global.arenderVersion                               | string                       | 2.1.3                            | The NEV version to deploy                                                                                                                                             |
| global.imagePullSecrets                             | list of object with name key | []                               | The pull secrets used to pull NEV Docker images                                                                                                                       |
| arender.rendition.sharedTmpFolder.storage.className | string                       | ""                               | The className to use for the shared PVC, it must supports RWX                                                                                                         |
| arender.rendition.sharedTmpFolder.storage.size      | string                       | "50Gi"                           | The size of the shared PVC                                                                                                                                            |
| arender.rendition.broker.replicaCount               | int                          | 1                                | Specify the number of broker replicas, if > 1 it allow the broker to work in HA mode.                                                                                 |
| arender.rendition.broker.autoscale.enabled          | boolean                      | false                            | Enable the autoscale Kubernetes feature on the broker                                                                                                                 |
| arender.rendition.broker.autoscale.maxReplicas      | int                          | 3                                | Specify the maximum number of broker replicas                                                                                                                         |
| arender.rendition.broker.autoscale.cpuLimit         | int                          | 80                               | Specify the cpu limit which will trigger a replica deployment                                                                                                         |
| arender.rendition.converter.replicaCount            | int                          | 1                                | Specify the number of converter replicas, if > 1 it allow the converter to work in HA mode.                                                                           |
| arender.rendition.converter.autoscale.enabled       | boolean                      | false                            | Enable the autoscale Kubernetes feature on the converter                                                                                                              |
| arender.rendition.converter.autoscale.maxReplicas   | int                          | 3                                | Specify the maximum number of converter replicas                                                                                                                      |
| arender.rendition.converter.autoscale.cpuLimit      | int                          | 80                               | Specify the cpu limit which will trigger a replica deployment                                                                                                         |
| arender.rendition.handler.replicaCount              | int                          | 1                                | Specify the number of handler replicas, if > 1 it allow the handler to work in HA mode.                                                                               |
| arender.rendition.handler.autoscale.enabled         | boolean                      | false                            | Enable the autoscale Kubernetes feature on the handler                                                                                                                |
| arender.rendition.handler.autoscale.maxReplicas     | int                          | 3                                | Specify the maximum number of handler replicas                                                                                                                        |
| arender.rendition.handler.autoscale.cpuLimit        | int                          | 80                               | Specify the cpu limit which will trigger a replica deployment                                                                                                         |
| arender.rendition.renderer.replicaCount             | int                          | 1                                | Specify the number of renderer replicas, if > 1 it allow the renderer to work in HA mode.                                                                             |
| arender.rendition.renderer.autoscale.enabled        | boolean                      | false                            | Enable the autoscale Kubernetes feature on the renderer                                                                                                               |
| arender.rendition.renderer.autoscale.maxReplicas    | int                          | 3                                | Specify the maximum number of renderer replicas                                                                                                                       |
| arender.rendition.renderer.autoscale.cpuLimit       | int                          | 80                               | Specify the cpu limit which will trigger a replica deployment                                                                                                         |
| arender.viewer.replicaCount                         | int                          | 1                                | Specify the number of viewer replicas, if > 1 it allow the viewer to work in HA mode.                                                                                 |
| arender.viewer.autoscale.enabled                    | boolean                      | false                            | Enable the autoscale Kubernetes feature on the viewer                                                                                                                 |
| arender.viewer.autoscale.maxReplicas                | int                          | 1                                | Specify the maximum number of viewer replicas                                                                                                                         |
| arender.viewer.autoscale.cpuLimit                   | int                          | 100                              | Specify the cpu limit which will trigger a replica deployment                                                                                                         |
| arender.viewer.nuxeo.server.url                     | string                       | ""                               | Specify the Nuxeo server URL                                                                                                                                          |
| arender.viewer.nuxeo.oauth2.secretValue             | string                       | ""                               | Specify the Nuxeo OAuth2 secret value, this will create a Kubernetes Secret                                                                                           |
| arender.viewer.nuxeo.oauth2.secretKey               | string                       | "<viewer.fullname>-nuxeo-oauth2" | Specify an existing Kubernetes secret containing the Nuxeo OAuth2 secret, the value should be set with the `ARENDERSRV_NUXEO_SERVER_ARENDER_SECRET` key in the secret |
| arender.viewer.ingress.enabled                      | boolean                      | false                            | Enable Ingress on the viewer                                                                                                                                          |
| arender.viewer.ingress.hosts                        | list                         | []                               | Specify the host to route trafic to viewer, the list should contain object with a `host` key and an optional `paths` key                                              |
| arender.viewer.ingress.tls                          | list                         | []                               | Specify the Ingress tls configuration, the list should contain object with a `secretName` key and a `hosts` key                                                       |

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

To setup High Availability on the previewer, you need to configure a DNS record resolving all your previewer hostnames.

Then you need to configure the environment variables below:

```yaml:
ARENDERSRV_NUXEO_OAUTH2_STORAGE_BACKEND: hazelcast
ARENDERSRV_NUXEO_OAUTH2_STORAGE_HAZELCAST_SERVICE_DNS: dns-resolving-previewers
```

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
