---
title: "Project: Setting up a CI/CD Pipeline using Java, Maven, JUnit, Jenkins, GitHub, AWS EC2, Docker, and AWS S3"
description: "A project for practicing ci/cd."
date: "2023-05-06T18:30:00.000Z"
author: DevOpsWorlwide Editorial
tags: ["Hashnode","jenkins","devops","maven","java","projects"]
category: Hashnode Archive
featured: false
readingTime: 8
---

# Project: Setting up a CI/CD Pipeline using Java, Maven, JUnit, Jenkins, GitHub, AWS EC2, Docker, and AWS S3

A project for practicing ci/cd.

UpdatedMay 8, 2023•7 min read•[**View as Markdown](/project-setting-up-a-cicd-pipeline-using-java-maven-junit-jenkins-github-aws-ec2-docker-and-aws-s3.md)

![Project: Setting up a CI/CD Pipeline using Java, Maven, JUnit, Jenkins, GitHub, AWS EC2, Docker, and AWS S3](/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1683452167179%2Fd7fedc25-78f9-43d5-b643-985431e233c2.png&w=3840&q=75)

[![Abhiraj Kharbade](https://cdn.hashnode.com/res/hashnode/image/upload/v1684963336122/aDpQCVjjQ.png?auto=compress,format&format=webp)](https://hashnode.com/@ABHIRAJK)[Abhiraj Kharbade](https://hashnode.com/@ABHIRAJK)[**](https://www.linkedin.com/in/a-k-7b5b56118/)

I am an electrical engineer with a passion for DevOps and Cloud Engineering, I bring a unique perspective to the world of technology. My expertise includes a wide range of skills including DevOps methodologies, AWS Cloud, Jenkins, CI/CD, MAVEN, Linux, Shell Scripting, Python, YAML scripts, Groovy Scripts, Assembly language, Ansible, Docker, Kubernetes, Grafana, Tomcat, GitHub, Git, Docker Swarm, Terraform IaC, Cloud Engineering, and Networking. With a deep understanding of these technologies, I am able to design and implement complex systems that are both efficient and scalable. Whether working with large-scale enterprise systems or small startups, I am dedicated to delivering innovative solutions that drive success.

 [**Part of seriesProjects For Devops / CloudOpd / GITOps](/series/projects)

On this page

[Introduction](#heading-introduction)[Project Steps:](#heading-project-steps)[Step 1: Create an AWS EC2 Instance](#heading-step-1-create-an-aws-ec2-instance)[Step 2: Create a s3 bucket](#heading-step-2-create-a-s3-bucket)[Step 3: Install Jenkins on the EC2 Instance](#heading-step-3-install-jenkins-on-the-ec2-instance)[Step 4: Install Docker on the EC2 Instance](#heading-step-4-install-docker-on-the-ec2-instance)[Step 4: Install Maven on the EC2 Instance](#heading-step-4-install-maven-on-the-ec2-instance)[Step 5: Jenkinsfile](#heading-step-5-jenkinsfile)[Step 6: Running the Pipeline](#heading-step-6-running-the-pipeline)[Output :](#heading-output)[Output 1: Artifact stored in a given bucket](#heading-output-1-artifact-stored-in-a-given-bucket)[Output 2: Hello world! is shown when accessing the localhost:8081](#heading-output-2-hello-world-is-shown-when-accessing-the-localhost8081)[Conclusion:](#heading-conclusion)

## **Introduction**

 

Continuous Integration and Continuous Deployment (CI/CD) is a widely adopted approach that allows developers to automate their software delivery pipeline, enabling faster and more efficient development cycles, and reducing errors. CI/CD is an essential practice for any software development team looking to streamline their processes and deliver high-quality software to end-users.

 

In this blog post, we will discuss how to set up a CI/CD pipeline using Java, Maven, JUnit, Jenkins, GitHub, AWS EC2, Docker, and AWS S3. We will walk through the entire process, from setting up the environment to deploying the application to a Docker container and storing the artifact file in an S3 bucket.

 

## Project Steps:

 

### **Step 1: Create an AWS EC2 Instance**

 

We will create an AWS EC2 instance that will host Jenkins and Docker. We will use t2.medium Ubuntu instance with a 10GB root volume.

 

you can follow the following steps to launch a new instance:

 
 - Log in to your AWS Management Console.

 

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683364296887/1f0d158b-b2c9-4ea0-b68e-e065a76a999f.jpeg)
 - Navigate to the EC2 Dashboard.

 

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683364312061/8eded18c-67f9-4b69-90ee-64b09502e8f0.jpeg)
 - Click on the "Launch Instance" button.

 

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683364402786/616a7e7f-e9a2-42dc-8d33-9d2d321027ad.jpeg)
 - Choose the Amazon Machine Image (AMI) for Ubuntu 22.04 LTS. You can find it by typing "Ubuntu" in the search box and selecting the version from the list.
 - Choose the instance type as "t2.medium".
 - Click on the "Next: Configure Instance Details" button.
 - On the "Configure Instance Details" page, you can leave the default settings or adjust them as needed. You can choose the VPC, subnet, IAM role, and other settings.
 - Click on the "Next: Add Storage" button.
 - On the "Add Storage" page, you can leave the default settings or adjust them as needed. You can add additional EBS volumes if necessary.
 - Click on the "Next: Add Tags" button.
 - On the "Add Tags" page, you can add tags to your instance for easy identification and management.
 - Click on the "Next: Configure Security Group" button.
 - On the "Configure Security Group" page, you can create a new security group or use an existing one. Make sure to open Port 22 for SSH access, Port 8080 for Jenkins, Port 8081 for Docker container.

 

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683366325605/12971bad-ab74-4385-a3e8-6c136c47ac49.jpeg)
 - Click on the "Review and Launch" button.
 - On the "Review Instance Launch" page, review your settings and make any necessary changes.
 - Click on the "Launch" button.
 - Choose an existing key pair or create a new one to use for SSH access.
 - Click on the "Launch Instances" button.
 
 

Your EC2 instance of t2.medium and Ubuntu 22.04 LTS is now being launched.

 

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683366342392/a1aa9ffa-7384-4bd7-bf85-824bd05b6e26.jpeg)

 

Once it's up and running, you can connect to it using SSH and start using it as needed.

 

*Note: Also Modify the IAM Role for the instance so that it can access S3 Bucket.*

 

Here is a link to the official AWS documentation on how to modify an IAM role to grant access to an S3 bucket:

 

[https://docs.aws.amazon.com/en_us/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html#modify-iam-role-s3-bucket-permissions](https://docs.aws.amazon.com/en_us/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html#modify-iam-role-s3-bucket-permissions)

 

You can also follow the AWS documentation to create an EC2 instance: [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html)

 

### **Step 2: Create a s3 bucket**

 

We will use AWS S3 to store our artifact file. Create an S3 bucket named "abhirajcicdjava" in your AWS account.

 

Steps to create an S3 bucket with the name "abhirajcicdjava" and make it public:

 
 - Navigate to the S3 service.

 

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683366553564/4be6750f-73ce-4ff5-99ff-248d569b08ac.jpeg)
 - Click on the "Create bucket" button.
 - In the "Bucket name" field, enter "abhirajcicdjava".

 

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683366567647/c47b82bd-579b-44c6-b7a3-ff492cf42be6.jpeg)
 - Leave the other settings at their default values and click on the "Create bucket" button.
 - Once your bucket is created, select it from the list of buckets.
 - Click on the "Permissions" tab.
 - Click on the "Bucket Policy" button.
 - In the "Bucket policy editor" window, paste the following policy:
 
 

```bash
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::abhirajcicdjava/*"
            ]
        }
    ]
}

        
        
      
```

 
 - Click on the "Save" button to save the policy.
 - Your S3 bucket is now public, and anyone can access its objects by using the URL [`https://s3.amazonaws.com/abhirajcicdjava/`](https://s3.amazonaws.com/abhirajcicdjava/%3Cobject-key%3E).
 
 

Note: Making your S3 bucket public can have security implications. Make sure you understand the risks before doing this.

 

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683366619345/b6dd96a5-4ba1-4012-a389-d18e5f9a76b0.jpeg)

 

You can follow the AWS documentation to create an S3 bucket: [https://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html](https://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html)

 

### **Step 3: Install Jenkins on the EC2 Instance**

 

We will install Jenkins on our EC2 instance. You can follow the official documentation to install Jenkins: [https://www.jenkins.io/doc/book/installing/](https://www.jenkins.io/doc/book/installing/)

 

*Note: Install the "AWS SDK" plugin in Jenkins*

 

### **Step 4: Install Docker on the EC2 Instance**

 

To install the [Docker.io](http://Docker.io) , you can follow these steps:

 
 - Update the package list:
 
 

```bash
sudo apt-get update

        
        
      
```

 
 - Install [Docker.io](http://Docker.io):
 
 

```bash
sudo apt-get install docker.io

        
        
      
```

 
 - Start and enable the Docker service:
 
 

```bash
sudo systemctl start docker
sudo systemctl enable docker

        
        
      
```

 
 - Verify that Docker is installed correctly by running the "hello-world" image:
 
 

```bash
sudo docker run hello-world

        
        
      
```

 

This should download the "hello-world" image and run it in a container. If everything is working correctly, you should see a message indicating that Docker is running and configured correctly.

 

### Step 4: Install Maven on the EC2 Instance

 

The steps to install Maven :

 
 - Update the package list by running the following command:

 

```bash
 sudo apt update

        
        
      
```
 - Install Maven by running the following command:

 

```bash
 sudo apt install maven

        
        
      
```
 - After the installation is complete, verify the Maven version by running the following command:

 

```bash
 mvn -version

        
        
      
```
 - This command should display the Maven version and other details.
 - That's it! You have now installed Maven on your system.
 - We will now write a Jenkinsfile that will checkout the code from GitHub, build the code using Maven, test it using JUnit, and deploy it in a Docker container.
 
 

### Step 5: Jenkinsfile

 

Here's the Jenkinsfile that we will use:

 

```bash
pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
             sh 'git clone https://github.com/Abhiraj2310/java-junit-haelloworld.git'  
            }      
        }
        stage('Build') {
            steps {
                sh 'mvn package'
            }
        }
        stage('Unit Test') {
            steps {
                sh 'mvn test'
            }
        }
         stage('Integration  Test') {
        steps {
                sh 'mvn verify'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker build -t helloworld .'
                sh 'docker run -d -p 8081:8080 helloworld'
            }
        }

        stage('Upload Artifact') {
            steps {
                sh 'aws s3 cp target/*.jar s3://abhirajcicdjava/'
}
}
}
}

        
        
      
```

 

Let's go through each stage in detail.

 
 - Clone: This stage clones the code from the GitHub repository. It uses the GitSCM plugin to retrieve the code from the main branch of the repository.
 - Build: This stage builds the code using Maven. It runs the "mvn package" command to compile the code, run tests, and package the application into a .jar file.
 - Test: This stage runs the JUnit tests using Maven. It runs the "mvn test" command to execute the JUnit tests and verify that the code is working correctly.
 - Deploy: This stage deploys the application in a Docker container. It uses the Docker build command to build the Docker image and the Docker run command to start the container. The application will be accessible at http://<EC2 Public IP Address>:8081
 - Upload Artifact: This stage uploads the artifact file to the S3 bucket. It uses the AWS CLI to upload the .jar file to the S3 bucket named "abhirajcicdjava".
 
 

### Step 6: Running the Pipeline

 
 - Creating a Jenkins Pipeline Now that we have installed Jenkins, we can create a pipeline that will automate the CI/CD process.
 - Go to your Jenkins dashboard and click `+ New Item`
 
 

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683407621225/ada4cb9b-dee7-47fa-aab3-153233f57d1c.jpeg)

 
 - Now select the Pipeline option from the menu and give a suitable name for the pipeline. In our case lets name it java-junit-helloworld.
 
 

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683407631112/86f05b36-f551-4f89-addd-a60e35fc2c22.jpeg)

 
 - Scroll down in the configuration menu, Under the "Pipeline" section, select "Pipeline script from SCM" as the definition.
 - Select "Git" as the SCM and enter the GitHub repository URL.

 

[https://github.com/Abhiraj2310/java-junit-haelloworld.git](https://github.com/Abhiraj2310/java-junit-haelloworld.git)
 - Edit the branch name as per the repository.
 
 

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683407646803/a3ad2d5e-757a-44db-9dbd-328e9dfd48ad.jpeg)

 
 - In the script path write Jenkinsfile, it will fetch the Jenkinsfile that we have stored in the repository earlier and select Lightweight checkout.
 
 

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683407648146/4d404935-9aff-42be-825b-18422aabee6b.jpeg)

 
 - In the additional behavior section select the clean before checkout option this instructs Jenkins to delete all existing files and directories in the workspace before checking out the code
 
 

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683407655975/f04b294c-4585-4370-869c-fadc6fb83ef1.jpeg)

 
 - after finishing the configuration click `Apply` and then `Save`
 - Our pipeline is now created.
 - Now click the build now option this will run the pipeline in Jenkinsfile.
 
 

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683407665784/90569757-d922-4c5c-b3bd-88c05d41c524.jpeg)

 

## Output :

 

### Output 1: Artifact stored in a given bucket

 

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683407672003/73659abf-a6d4-4299-8c58-6eaa2d5d07de.jpeg)

 

### Output 2: Hello world! is shown when accessing the localhost:8081

 

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1683448773614/49383651-aced-47cb-aa29-7fafdaa453fd.jpeg)

 

## Conclusion:

 

We have successfully set up a CI/CD Pipeline using Java, Maven, JUnit, Jenkins, GitHub, AWS EC2, Docker, and AWS S3.

 

*The above information is up to my understanding and learning experience. Suggestions are always welcome.*

 

*~Abhiraj kharbade*

 

#DevOps #Jenkins #java #maven #junit #docker

 

Connect with me :

 

[LinkedIn](https://www.linkedin.com/in/abhiraj-k-7b5b56118/)

 [#jenkins](/tag/jenkins)[#devops](/tag/devops)[#maven](/tag/maven)[#java](/tag/java)[#projects](/tag/projects)
