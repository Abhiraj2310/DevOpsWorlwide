---
title: "Prometheus: A open-source monitoring and alerting toolkit."
description: "With Practical steps to monitor a Tomcat server running in a Docker container"
date: "2024-04-10T18:30:00.000Z"
author: DevOpsWorlwide Editorial
tags: ["Hashnode","datasourcing","devops","monitoring","alerting","monitoring-tool"]
category: Hashnode Archive
featured: false
readingTime: 6
---

# Prometheus: A open-source monitoring and alerting toolkit.

With Practical steps to monitor a Tomcat server running in a Docker container

PublishedApril 11, 2024•5 min read•[**View as Markdown](/prometheus-a-open-source-monitoring-and-alerting-toolkit.md)

![Prometheus: A open-source monitoring and alerting toolkit.](/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1712840829184%2F7744d30b-e7c7-4f9d-a702-658410990d75.jpeg&w=3840&q=75)

[A](https://hashnode.com/@ABHIRAJK)[Abhiraj Kharbade](https://hashnode.com/@ABHIRAJK)[**](https://www.linkedin.com/in/a-k-7b5b56118/)

I am an electrical engineer with a passion for DevOps and Cloud Engineering, I bring a unique perspective to the world of technology. My expertise includes a wide range of skills including DevOps methodologies, AWS Cloud, Jenkins, CI/CD, MAVEN, Linux, Shell Scripting, Python, YAML scripts, Groovy Scripts, Assembly language, Ansible, Docker, Kubernetes, Grafana, Tomcat, GitHub, Git, Docker Swarm, Terraform IaC, Cloud Engineering, and Networking. With a deep understanding of these technologies, I am able to design and implement complex systems that are both efficient and scalable. Whether working with large-scale enterprise systems or small startups, I am dedicated to delivering innovative solutions that drive success.

 

On this page

[Understanding Prometheus](#heading-understanding-prometheus)[Key Features:](#heading-key-features)[Prometheus Architecture](#heading-prometheus-architecture)[Setting up Prometheus to monitor a Tomcat server running in a Docker container](#heading-setting-up-prometheus-to-monitor-a-tomcat-server-running-in-a-docker-container)[Step 1: Install Docker on Ubuntu EC2 Server](#heading-step-1-install-docker-on-ubuntu-ec2-server)[Step 2: Set Up Dockerized Tomcat Server](#heading-step-2-set-up-dockerized-tomcat-server)[Step 3: Install Prometheus](#heading-step-3-install-prometheus)[Step 4: Configure Prometheus to Monitor Tomcat](#heading-step-4-configure-prometheus-to-monitor-tomcat)[Step 5: Start Prometheus Server](#heading-step-5-start-prometheus-server)[Step 6: Access Prometheus Web UI](#heading-step-6-access-prometheus-web-ui)[Step 7: Configure Prometheus Alerting](#heading-step-7-configure-prometheus-alerting)

In the realm of DevOps, the need for robust monitoring and alerting solutions is paramount. With the rise of containerization and microservices architecture, traditional monitoring approaches often fall short in providing the visibility and agility required to manage dynamic environments effectively. Enter Prometheus – an open-source monitoring and alerting toolkit designed specifically to address the challenges of monitoring modern cloud-native applications.

 

## **Understanding Prometheus**

 

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1712840985256/969be898-c990-42a4-85ec-c13b71a53907.png)

 

Prometheus, initially developed by SoundCloud, has gained significant traction within the DevOps community for its scalability, reliability, and flexibility. At its core, Prometheus employs a pull-based model, where it regularly scrapes metrics data from designated endpoints, typically referred to as exporters, exposed by the services under observation. These metrics are then stored in a time-series database, facilitating real-time analysis and querying.

 

### **Key Features:**

 
 - **Multi-dimensional data model:** Prometheus embraces a flexible data model, allowing for efficient querying and analysis of time-series data with multiple dimensions such as labels and key-value pairs.
 - **PromQL:** Prometheus Query Language enables users to perform sophisticated queries and aggregations on collected metrics, empowering advanced monitoring and alerting scenarios.
 - **Alerting:** Prometheus incorporates a powerful alerting mechanism, enabling users to define custom alerting rules based on specific thresholds or conditions, ensuring timely detection and response to potential issues.
 - **Scalability:** Prometheus is designed to scale horizontally, allowing for the deployment of multiple instances to handle increased workloads and ensure high availability.
 - **Integration:** Prometheus seamlessly integrates with a plethora of third-party tools and frameworks, enabling enhanced visualization, data storage, and collaboration.
 
 

## **Prometheus Architecture**

 

![](https://prometheus.io/assets/architecture.png)

 

Prometheus architecture comprises several core components, each fulfilling a distinct role in the monitoring pipeline:

 
 - **Prometheus Server:** Responsible for collecting, storing, and processing metrics data. It periodically scrapes metrics from configured targets and stores them in a time-series database.
 - **Exporter:** Exporters are specialized agents or libraries responsible for exposing metrics from various systems and services in a format compatible with Prometheus. Common exporters include Node Exporter for host metrics, Blackbox Exporter for probing endpoints, and exporters for popular databases and cloud platforms.
 - **Alertmanager:** Manages alerts generated by Prometheus based on predefined alerting rules. It provides functionalities such as deduplication, grouping, inhibition, and notification routing to ensure timely and efficient alert handling.
 - **Pushgateway:** Allows ephemeral or batch jobs to push metrics to Prometheus, facilitating monitoring of short-lived tasks or jobs without requiring long-term storage.
 
 

## **S**etting up Prometheus to monitor a Tomcat server running in a Docker container

 

### **Step 1: Install Docker on Ubuntu EC2 Server**

 
 - Connect to your Ubuntu EC2 server via SSH.
 - Update the package index:

 

```
 sudo apt-get update
```
 - Install necessary packages to allow apt to use a repository over HTTPS:

 

```
 sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
```
 - Add the Docker GPG key:

 

```
 curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```
 - Add the Docker repository:

 

```
 sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```
 - Update the package index again:

 

```
 sudo apt-get update
```
 - Install Docker:

 

```
 sudo apt-get install docker-ce
```
 - Verify that Docker is installed correctly by running:

 

```
 sudo docker --version
```
 
 

### **Step 2: Set Up Dockerized Tomcat Server**

 
 - Pull the official Tomcat Docker image from Docker Hub:

 

```
 sudo docker pull tomcat
```
 - Run a Tomcat container:

 

```
 sudo docker run -d --name my-tomcat -p 8080:8080 tomcat
```

 

This command starts a Tomcat container named `my-tomcat` and maps port 8080 of the container to port 8080 of the host.
 
 

### **Step 3: Install Prometheus**

 
 - Create a directory for Prometheus configuration files:

 

```
 mkdir ~/prometheus
 cd ~/prometheus
```
 - Download the latest Prometheus release tarball:

 

```
 wget https://github.com/prometheus/prometheus/releases/download/v2.30.0/prometheus-2.30.0.linux-amd64.tar.gz
```
 - Extract the tarball:

 

```
 tar -xzf prometheus-2.30.0.linux-amd64.tar.gz
```
 - Navigate into the Prometheus directory:

 

```
 cd prometheus-2.30.0.linux-amd64
```
 
 

### **Step 4: Configure Prometheus to Monitor Tomcat**

 
 - Create a configuration file named `prometheus.yml`:

 

```
 nano prometheus.yml
```
 - Add the following configuration to scrape metrics from the Tomcat server:

 

```
 global:
   scrape_interval: 15s

 scrape_configs:
   - job_name: 'tomcat'
     static_configs:
       - targets: ['localhost:8080']
```

 

This configuration instructs Prometheus to scrape metrics from the Tomcat server running on [`localhost:8080`](http://localhost:8080).
 
 

### **Step 5: Start Prometheus Server**

 
 - Start the Prometheus server:

 

```
 ./prometheus --config.file=prometheus.yml
```

 

This command starts the Prometheus server with the provided configuration file.
 
 

### **Step 6: Access Prometheus Web UI**

 
 - Open a web browser and navigate to [`http://your_server_ip:9090`](http://your_server_ip:9090).
 - You should see the Prometheus web UI, where you can explore metrics and query data.
 
 

To set up alerts in Prometheus, you need to define alerting rules in the `prometheus.yml` configuration file. Here's how you can do it:

 

### Step 7: Configure Prometheus Alerting

 
 - Edit the `prometheus.yml` configuration file:

 

```
 nano prometheus.yml
```
 - Define alerting rules under the `rule_files` section. If this section doesn't exist, create it. Add a path to a file containing your alerting rules. For example:

 

```
 rule_files:
   - alert.rules.yml
```
 - Save and exit the editor.
 - Create a new file named `alert.rules.yml` or any name you prefer:

 

```
 nano alert.rules.yml
```
 - Define your alerting rules in this file. Each rule consists of the `alert` keyword followed by a unique name, the `expr` keyword specifying the condition for triggering the alert, and optionally the `for` keyword indicating how long the condition must be true before the alert is fired. For example:

 

```
 groups:
   - name: example
     rules:
       - alert: HighCPUTomcat
         expr: tomcat_cpu_usage > 0.8
         for: 1m
         labels:
           severity: critical
         annotations:
           summary: "High CPU usage on Tomcat server"
           description: "CPU usage on Tomcat server is above 80% for more than 1 minute."
```

 

This rule will trigger an alert named `HighCPUTomcat` when the CPU usage (`tomcat_cpu_usage` metric) on the Tomcat server exceeds 80% for more than 1 minute. Adjust the metric name and threshold according to your requirements.
 - Save and exit the editor.
 - Restart Prometheus to apply the new configuration:

 

```
 sudo systemctl restart prometheus
```
 - Prometheus will now evaluate the alerting rules defined in the `alert.rules.yml` file and fire alerts when the conditions are met.
 - To manage and handle alerts, configure Prometheus Alertmanager. You can specify notification integrations and routing rules in the Alertmanager configuration file.
 
 

With these steps, you've configured alerting in Prometheus to monitor the Tomcat server and trigger alerts based on predefined conditions. Adjust the rules and thresholds as needed to suit your specific monitoring requirements.

  

*Please share your thoughts and opinions on this topic in the comments section below.*

 

*The information provided above is based on the author's understanding and learning experience. Suggestions and corrections are always welcome.*

 

**~Abhiraj Kharbade**

 

#DevOps #monitoring #Cloud-Computing #Alerting #datasourcing

 

*Connect with me :*

 

[![](https://cdn.hashnode.com/res/hashnode/image/upload/v1684148963394/cb184310-d5ce-48d1-bb8a-7081879b7a3d.png?auto=compress,format&format=webp&auto=compress,format&format=webp)](https://www.linkedin.com/in/abhiraj-k-7b5b56118/)

 

[***LinkedIn***](https://www.linkedin.com/in/abhiraj-k-7b5b56118/)

 [#datasourcing](/tag/datasourcing)[#devops](/tag/devops)[#monitoring](/tag/monitoring)[#alerting](/tag/alerting)[#monitoring-tool](/tag/monitoring-tool)
