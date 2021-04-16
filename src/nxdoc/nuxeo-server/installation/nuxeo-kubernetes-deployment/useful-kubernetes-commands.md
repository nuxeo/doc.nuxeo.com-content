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

Command
Use Case
kubectl config view
Check location and credentials of the K8S cluster
export KUBECONFIG=kubeconfig.yaml
Apply connection info for the K8S cluster
kubectl config get-contexts
Get all contexts
kubectl config use-context <my_context>
Connect to a specific K8S cluster
kubectl get nodes
Get info on the worker nodes
kubectl cluster-info
Get info on the K8S cluster
kubectl run gcarlin-training --image=nuxeo/nuxeo:latest --port=80
Get info on the K8S cluster
kubectl get pods
Get info on the pods
kubectl describe pods
Get MORE info on the pods
kubectl delete pods <pod_name>
Delete a pod
kubectl apply -f <deployment_service_file>
Deploy a deployment/service file
kubectl get deployments
Get the list of all deployments
kubectl edit deployment <deployment_name>
Edit a deployment (with previous command)
kubectl get pods -o wide
See on which worker node the pod is running
kubectl get services
See the running services
kubectl describe service <service_name>
More info on the services
kubectl get namespace
Get namespace
kubectl create namespace <my_namespace>
Create namespace
kubectl config set-context --current --namespace=<namespace>
Switch to a namespace
kubectl exec -it <pod_id> bash
Access a pod in command line
kubectl get event --sort-by .lastTimestamp
Get logs