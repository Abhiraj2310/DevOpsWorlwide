---
title: "Step-by-Step Guide: Launching Your First Linux VM on Google Cloud Platform (GCP)"
description: "A practical DevOpsWorlwide guide to Step-by-Step Guide: Launching Your First Linux VM on Google Cloud Platform (GCP)"
date: "2023-05-29T18:30:00.000Z"
author: DevOpsWorlwide Editorial
tags: ["devops","gcp","compute-engine","cloud"]
category: AWS & Cloud Platforms
featured: false
readingTime: 5
---

# Step-by-Step Guide: Launching Your First Linux VM on Google Cloud Platform (GCP)


> **Why this matters today:** Cloud services evolve quickly, but durable foundations remain the same: least privilege, resilient architecture, cost visibility, and deliberate operational limits.
With additional step about Deleting a VM on Google Cloud Platform (GCP).




 [**Part of seriesUnderstanding Cloud](/series/aws-and-gcp)



## Introduction


Google Cloud Platform (GCP) provides a powerful infrastructure for running applications and storing data in the cloud. In this detailed step-by-step guide, I will walk you through the process of launching your first virtual machine (VM) with a Linux operating system on GCP. By following these instructions, you'll be able to set up your Linux VM and start harnessing the capabilities of GCP.


## Steps


### Step 1: Create a GCP Account:

 - Visit the GCP website ([https://cloud.google.com/](https://cloud.google.com/)) and sign up for a GCP account if you haven't already using your usual Google account/Gmail account.
 - Follow the instructions to create your account, provide the necessary information and agree to the terms of service.
 - Set up billing information to enable GCP services. You will be eligible for a free trial with initial 300 credits to explore GCP and Activate them.

### Step 2: Set Up a New Project:

 - After creating your GCP account, go to the GCP Console ([https://console.cloud.google.com/](https://console.cloud.google.com/)).
 - In the top navigation bar, click on the project drop-down and select "New Project."
 - Enter a name for your project and click "Create."
 - Select the desired billing account and associated resources for your project.


![](https://cdn.hashnode.com/res/hashnode/image/upload/v1685450664471/60d3c7e1-253a-49e2-8bfe-e0ca7bb9590b.jpeg)

### Step 3: Enable Compute Engine API:

 - In the GCP Console, click on the project drop-down and select "APIs & Services" > "Library."


![](https://cdn.hashnode.com/res/hashnode/image/upload/v1685450710146/2de77f1b-8920-4ae2-a321-15d7ebe076eb.png)
 - Use the search bar to find "Compute Engine API" and click on it.


![](https://cdn.hashnode.com/res/hashnode/image/upload/v1685450727360/ebad4669-4bca-421d-9262-50f65d3a69b7.png)
 - Click the "Enable" button to enable the Compute Engine API for your project.


![](https://cdn.hashnode.com/res/hashnode/image/upload/v1685450739684/294c7aa0-e26b-4155-bde5-dbb04ab6d7b1.png)

### Step 4: Create a VM Instance:

 - Navigate to the Compute Engine section in the GCP Console.


![](https://cdn.hashnode.com/res/hashnode/image/upload/v1685450777972/b1afe841-d44e-455e-b7f8-18b3dee92cd7.png)
 - Click on the "Create Instance" button to start configuring your VM instance.


![](https://cdn.hashnode.com/res/hashnode/image/upload/v1685450794618/be1ab689-c665-4ead-a4cb-ce09b8729d98.png)
 - Provide a name for your instance.
 - Choose the desired region and zone for your VM based on your requirements (e.g., us-central1 and us-central1-a).
 - Select the machine type that suits your needs. The default should work for most use cases.


![](https://cdn.hashnode.com/res/hashnode/image/upload/v1685450836900/2feda8eb-bd27-4660-89b0-bf541657b5b4.png)
 - Under "Boot Disk," click on "Change" to select the Linux distribution you want to use. Choose an image from the list, such as "Ubuntu" or "Debian."
 - Set the desired boot disk size, keeping in mind the storage requirements of your applications.


![](https://cdn.hashnode.com/res/hashnode/image/upload/v1685450879781/0c55906e-64d7-4a96-bdfa-0976bee58dbe.png)
 - Configure the firewall settings by selecting "Allow HTTP traffic" or any other ports you need to open.
 - Click on "Create" to create your VM instance.


![](https://cdn.hashnode.com/res/hashnode/image/upload/v1685450897134/95477d22-3bb0-4d03-b5f7-1f46dfe5eba0.png)

### Step 5: Connect to the Linux VM:

 - Once the VM is created, you can connect to it using SSH.


![](https://cdn.hashnode.com/res/hashnode/image/upload/v1685450920419/f814de42-7160-45a9-8a4c-510dcf9da456.png)
 - In the VM instances list in the GCP Console, click on the `SSH` button next to your VM instance.
 - A terminal window will open, allowing you to interact with your Linux VM.


![](https://cdn.hashnode.com/res/hashnode/image/upload/v1685450955259/722c3518-f782-43c2-9a90-bec19987f70b.png)

### Step 6: Explore and Customize Your Linux VM:

 - You are now connected to your Linux VM on GCP. You can install additional software, configure services, and perform any necessary setup based on your requirements.
 - Use the package manager of your Linux distribution (e.g., apt-get for Ubuntu) to install applications and libraries.
 - Configure your Linux VM to meet your specific needs, such as setting up user accounts, enabling security features, or installing additional software packages.

### Step 7: Deleting a VM on Google Cloud Platform (GCP):


When you no longer need a VM on GCP, Follow these steps to delete a VM on GCP:

 - In the VM instances list, locate the VM instance you want to delete.


![](https://cdn.hashnode.com/res/hashnode/image/upload/v1685451186719/c5dcd65c-5299-4005-ac1d-c06f910e501f.png)
 - Check the box `☒` next to the VM instance select it.


![](https://cdn.hashnode.com/res/hashnode/image/upload/v1685451436244/21bae066-1e51-414d-b523-bff78d04153f.png)
 - Click on the "`Delete`" button at the top of the page.
 - A confirmation dialog box will appear, providing information about the resources that will be deleted along with the VM instance. Review the information to ensure you're deleting the correct VM instance.
 - If you have any associated disks with the VM instance, you'll have the option to choose whether to keep or delete them. Make the appropriate selection based on your requirements.
 - Click on the "`Delete`" button to initiate the deletion process.
 - GCP will begin deleting the VM instance and any associated resources. The process may take a few moments to complete.
 - Once the deletion is finished, the VM instance will be removed from your GCP project, and any associated resources will be released.

## Conclusion


By following this step-by-step guide, you have successfully launched your first Linux virtual machine on the Google Cloud Platform (GCP). You can now explore the extensive capabilities of GCP, leverage the scalability and reliability of the cloud, and start building and deploying your applications with ease. Enjoy harnessing the power of GCP for your Linux-based projects!


*Please share your thoughts and opinions on this topic in the comments section below.*


*The above information is up to my understanding and learning experience. Suggestions are always welcome.*


*~Abhiraj kharbade*


#DevOps #GCP #Computeengine


*Connect with me :*


[![](https://cdn.hashnode.com/res/hashnode/image/upload/v1684148963394/cb184310-d5ce-48d1-bb8a-7081879b7a3d.png)](https://www.linkedin.com/in/abhiraj-k-7b5b56118/)


[*LinkedIn*](https://www.linkedin.com/in/abhiraj-k-7b5b56118/)

 [#devops](/tag/devops)[#gcp](/tag/gcp)[#compute-engine](/tag/compute-engine)[#cloud](/tag/cloud)
