---
title: "A Cheat Sheet of Essential Commands for Managing and Debugging Your Kubernetes Cluster's Networking"
description: "A practical DevOpsWorlwide guide to A Cheat Sheet of Essential Commands for Managing and Debugging Your Kubernetes Cluster's Networking"
date: "2023-04-28T18:30:00.000Z"
author: DevOpsWorlwide Editorial
tags: ["kubernetes","devops","k8s","cheatsheet","cluster"]
category: Kubernetes & Cloud Native
featured: false
readingTime: 6
---

# A Cheat Sheet of Essential Commands for Managing and Debugging Your Kubernetes Cluster's Networking


> **Why this matters today:** Kubernetes is now operational infrastructure. The practical advantage comes from repeatable platform defaults, clear ownership, and observable workloads—not from cluster complexity alone.



 [**Part of seriesUnderstanding Kubernetes](/series/kubernetes-masterclass)



Kubernetes is a popular container orchestration platform that allows you to manage containerized applications at scale. Kubernetes provides a powerful set of command-line tools that enable you to deploy, manage, and monitor your applications running on a Kubernetes cluster. In this blog post, we'll explore some commonly used Kubernetes and Kubernetes networking commands.


## **Kubernetes Commands**


Here are some commonly used Kubernetes commands:

 - `kubectl create`: This command is used to create a new Kubernetes resource. You can use this command to create a pod, deployment, service, or any other Kubernetes resource.
 - `kubectl apply`: This command is used to apply changes to an existing Kubernetes resource. You can use this command to update the configuration of a deployment or a service.
 - `kubectl delete`: This command is used to delete a Kubernetes resource. You can use this command to delete a pod, deployment, service, or any other Kubernetes resource.
 - `kubectl get`: This command is used to list Kubernetes resources. You can use this command to list pods, deployments, services, or any other Kubernetes resource.
 - `kubectl describe`: This command is used to show detailed information about a Kubernetes resource. You can use this command to view the configuration of a pod or a deployment.
 - `kubectl logs`: This command is used to view the logs of a Kubernetes pod. You can use this command to debug issues with your application.
 - `kubectl exec`: This command is used to run a command inside a Kubernetes container. You can use this command to execute commands inside your containers.
 - `kubectl port-forward`: This command is used to forward a local port to a port on a Kubernetes pod. You can use this command to access your application running inside a container.
 - `kubectl scale`: This command is used to scale a Kubernetes deployment up or down. You can use this command to increase or decrease the number of replicas of your application.
 - `kubectl rollout`: This command is used to roll out a new version of a Kubernetes deployment. You can use this command to update your application to a new version.

## **Kubernetes Networking Commands**


Here are some commonly used Kubernetes networking commands:

 - `kubectl cluster-info`: This command is used to view information about the Kubernetes cluster. You can use this command to view the IP address of the Kubernetes API server.
 - `kubectl get nodes`: This command is used to list the nodes in the Kubernetes cluster. You can use this command to view the IP addresses of the nodes.
 - `kubectl get pods --all-namespaces`: This command is used to list all the pods in all namespaces. You can use this command to view the IP addresses of the pods.
 - `kubectl get services`: This command is used to list all the services in the current namespace. You can use this command to view the IP addresses of the services.
 - `kubectl get endpoints`: This command is used to list all the endpoints in the current namespace. You can use this command to view the IP addresses of the endpoints.
 - `kubectl get ingress`: This command is used to list all the ingress resources in the current namespace. You can use this command to view the IP addresses of the ingress resources.
 - `kubectl get configmap`: This command is used to list all the configmaps in the current namespace. You can use this command to view the IP addresses of the configmaps.
 - `kubectl get secret`: This command is used to list all the secrets in the current namespace. You can use this command to view the IP addresses of the secrets.
 - `kubectl describe pod <pod_name>`: This command is used to show detailed information about a pod, including its IP address, which can be used to debug networking issues.
 - kubectl describe service <service_name>: This command is used to show detailed information about a service, including its IP address and port. You can use this command to verify that the service is running and accessible.
 - kubectl describe endpoint <endpoint_name>: This command is used to show detailed information about an endpoint, including the IP addresses of the pods that are part of the endpoint. You can use this command to verify that the endpoint is correctly configured.
 - kubectl exec <pod_name> -- curl <service_name>:<port>: This command is used to test connectivity between a pod and a service. You can use this command to verify that the pod can connect to the service.
 - kubectl port-forward <pod_name> <local_port>:<pod_port>: This command is used to forward a local port to a port on a Kubernetes pod. You can use this command to access a pod's web server running on port 80, for example.
 - kubectl run -i --tty busybox --image=busybox --restart=Never -- sh: This command is used to start an interactive shell session inside a Kubernetes pod. You can use this command to debug networking issues by running network diagnostic tools like ping or nslookup.

## **kubeadm Commands**


Here are some commonly used `kubeadm` commands:

 - `kubeadm init`: This command is used to initialize a new Kubernetes cluster. You can use this command to create a control plane node and join worker nodes to the cluster.
 - `kubeadm join`: This command is used to join a worker node to an existing Kubernetes cluster. You can use this command to add new nodes to your cluster.
 - `kubeadm config`: This command is used to generate a configuration file for `kubeadm`. You can use this command to customize the configuration of your cluster.
 - `kubeadm upgrade`: This command is used to upgrade the version of Kubernetes running on your cluster. You can use this command to upgrade your cluster to a new version.
 - `kubeadm token`: This command is used to manage tokens used for authenticating nodes joining the cluster.
 - `kubeadm certificate`: This command is used to manage the certificates used by the control plane components.
 - `kubeadm version`: This command is used to view the version of `kubeadm` and the Kubernetes components installed on the control plane node.

With these `kubeadm` commands, you can easily create and manage your Kubernetes cluster.


In conclusion, Kubernetes is a powerful container orchestration platform that offers a wide range of commands to help you deploy, manage, and monitor your applications running on a Kubernetes cluster. By mastering these essential Kubernetes, `kubeadm`, and networking commands, you can easily manage and debug your Kubernetes cluster, and ensure your applications are running smoothly.


The above information is up to my understanding, it is procured from the Internet. Suggestions are always welcome.


~Abhiraj kharbade


#Kubernetes #Devops

 [#kubernetes](/tag/kubernetes)[#devops](/tag/devops)[#k8s](/tag/k8s)[#cheatsheet](/tag/cheatsheet)[#cluster](/tag/cluster)
