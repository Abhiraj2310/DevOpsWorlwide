---
title: "Default Ports for Popular DevOps Tools and Technologies"
description: "A practical DevOpsWorlwide reference for commonly used DevOps service ports."
date: "2023-04-22T18:30:00.000Z"
author: DevOpsWorlwide Editorial
tags: ["devops", "networking", "ports"]
category: DevOps Delivery & Tooling
featured: false
readingTime: 4
---

# "The Default Ports That Some Popular Devops Tools and Technologies Run On "


> **Why this matters today:** Delivery tooling is a trust boundary. The useful question is not which tool is popular, but whether the workflow makes changes safer, faster, and easier to understand.

As DevOps has become an increasingly important part of software development, a variety of tools and technologies have emerged to help developers and operations teams work together more effectively. However, these tools and technologies often require specific ports to be opened on servers and other devices to function properly. In this blog, we'll take a look at some of the most popular DevOps tools and technologies and the default ports they run on.


## **Git**


![](https://cdn.hashnode.com/res/hashnode/image/upload/v1682239374535/2812b279-256e-46b6-b0c5-3bbb801a6b20.png)


Git is a version control system used by many developers to track changes to code over time. By default, Git uses port 9418 for the git:// protocol, which is used for read-only access to a repository. However, for read-write access, Git uses the SSH protocol, which typically runs on port 22.


## **Jenkins**


![](https://cdn.hashnode.com/res/hashnode/image/upload/v1682239488807/e02c666f-0617-4d7f-80ff-65c900a214fe.png)


Jenkins is a popular continuous integration and continuous delivery (CI/CD) tool. By default, Jenkins runs on port 8080, but this can be changed to any port that is not already in use on the server. Additionally, Jenkins uses port 50000 for communication between the master and agent nodes in a distributed build environment.


## **Docker**


![](https://cdn.hashnode.com/res/hashnode/image/upload/v1682239645635/40bf18cd-0fae-4406-a0c0-542669b0741a.png)


Docker is a containerization platform used to package applications and their dependencies into a single container that can be deployed anywhere. By default, the Docker daemon listens on a Unix socket at /var/run/docker.sock. However, if you want to use Docker over a network, you can configure it to listen on TCP ports 2375 or 2376.


## **Kubernetes**


![](https://cdn.hashnode.com/res/hashnode/image/upload/v1682239649587/5ee946bf-b74c-4e9e-b208-82eb12cafd96.png)


Kubernetes is an open-source container orchestration platform used to manage containerized applications. By default, the Kubernetes API server listens on port 6443 for secure communication using the HTTPS protocol. Additionally, Kubernetes uses port 2379 for etcd, a distributed key-value store used for cluster configuration.


## **Ansible**


![](https://cdn.hashnode.com/res/hashnode/image/upload/v1682239712271/dad5f2a9-be57-405f-96ea-8b2a7ea55806.png)


Ansible is an IT automation tool used to automate configuration management, application deployment, and other tasks. By default, Ansible uses SSH to communicate with remote hosts, so it typically uses port 22. However, Ansible can also be configured to use other protocols, such as WinRM for Windows hosts.


## **Terraform**
