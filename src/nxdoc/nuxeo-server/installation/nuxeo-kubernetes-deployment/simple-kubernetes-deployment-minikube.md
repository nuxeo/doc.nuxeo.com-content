---
title: Simple Kubernetes Deployment on Minikube
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

minikub Commands
Guide: link
Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default

Command
Use Case
minikube delete && minikube start --vm=true
Reboot


- install ingress
minikube delete && minikube start --vm=true minikube addons enable ingress

- create a namespace university to isolate the config
kubectl create namespace university
kubectl config set-context --current --namespace=university

- deployment of the standard nuxeo app
apiVersion: apps/v1
kind: Deployment
metadata:
  name: gcarlin-training-deployment
  labels:
    app: gcarlin-training-nuxeo
spec:
  replicas: 1
  selector:
    matchLabels:
      app: gcarlin-training-nuxeo
  template:
    metadata:
      labels:
        app: gcarlin-training-nuxeo
    spec:
      containers:
      - name: gcarlin-training-nuxeo
        image: nuxeo/nuxeo:latest
        ports:
        - containerPort: 8080
          name: tomcat
        env:
        - name: NUXEO_PACKAGES
          value: nuxeo-web-ui

- explose the deployment as a service
apiVersion: v1
kind: Service
metadata:
  name: gcarlin-training-service
  namespace: university
  labels:
    app: gcarlin-training-nuxeo
spec:
  type: NodePort
  ports:
  - name: http
    port: 8080
    protocol: TCP
    targetPort: 8080
  selector:
    app: gcarlin-training-nuxeo
  sessionAffinity: None

- deploy a server
minikube service --url gcarlin-training-service -n university
So it works with a weird IP! 🎉
kubectl apply -f gcarlin-training-nuxeo-ingress.yaml with
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: gcarlin-training-ingress
  namespace: university
spec:
  rules:
    - host: nuxeo-training-kubernetes.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: gcarlin-training-service
                port:
                  number: 8080

kubectl get ingress -n university ==>
NAME                       CLASS    HOSTS                           ADDRESS        PORTS   AGE
gcarlin-training-ingress   <none>   nuxeo-training-kubernetes.com   192.168.64.2   80      47s

echo '192.168.64.2 nuxeo-training-kubernetes.com' | sudo tee -a /etc/hosts

So it works with http://nuxeo-training-kubernetes.com/nuxeo 🎉

2. Helm
- Install helm
- Follow GitHub - nuxeo/nuxeo-helm-chart: Nuxeo Helm chart
- helm repo add nuxeo https://chartmuseum.platform.dev.nuxeo.com/
- helm install university-training nuxeo/nuxeo
- helm list to see the deployed helm charts

helm install university nuxeo

NAME: university
LAST DEPLOYED: Fri Apr  2 12:01:07 2021
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
** Please be patient while the nuxeo chart is being deployed **

Nuxeo architecture: singleNode.
Roll deployment: true.

-------------------------------------------------------------------------------
WARNING

  By not enabling any cloud provider for binary storage, binaries will be
  stored in an emptyDir volume, thus not surviving a pod restart.

  Moreover, the application won't work if the deployment is scaled up in
  Kubernetes.

  Please enable a cloud provider for binary storage by setting either
  googleCloudStorage.enabled=true or amazonS3.enabled=true.

-------------------------------------------------------------------------------

Nuxeo can be accessed via port 80 on the following DNS name from within your cluster:

  university-nuxeo.default.svc.cluster.local

To print the application logs:

  kubectl logs -n default -f $(kubectl get pods -n default --selector=app=university-nuxeo --output=jsonpath='{.items[*].metadata.name}')

- helm get manifest university-training to see the generated YAML files
- Now we need to foward the 8080 port locally as university-nuxeo.default.svc.cluster.local is a cluster IP
- kubectl get pods and get the name of the nuxeo pod
- kubectl --namespace default port-forward POD_NAME 8080:8080

==> Now it works on http://localhost:8080/nuxeo 🎉 but we don’t have any addon deployed 🙀

- Create a custom values that overrides the default one:

MyValues.yaml
packages: nuxeo-web-ui
clid: 13d51dcb-d031-4611-99c6-b01b52c13d06.1794756263.Cy6FJX0I+ZO5fu1350eo/jccxAFc9CKHffQiv+P1nzm2Pnx8r+EtzA/u3qh/zd9/2/jab/L3LF1QXrJdBJbeF+0WJH6p2dfTwlVDnWu2ckdsx9K4v8xwjjSyqnLxpZK6jigogavW+3rEhpBdpAj2B7/a5pqXBlsi8KFLI1Jqa+QJyzTllFRfXSH4XyDi0YTOrla8jE1f2xMEzyKBtm4jEEBCTbyCyOIK6bHiqs3LX0ntcQLAoZF2+j/QrC4el9erT6cmGbfjghDuD7MTtgTbRCSEGyXBPtOeUqP42Xl3IHTydv+gTwyyseh3kI2eAYtE9xL9XJn78PxQ1STDWG0kHw==--27dfa2fb-e623-4b17-b781-e0fb890185a1

- helm uninstall university-training
- helm install university-training nuxeo/nuxeo --values=MyValues.yaml
- kubectl get pods and get the name of the nuxeo pod
- kubectl --namespace default port-forward POD_NAME 8080:8080

==> Now Web UI is deployed on http://localhost:8080/nuxeo 🎉