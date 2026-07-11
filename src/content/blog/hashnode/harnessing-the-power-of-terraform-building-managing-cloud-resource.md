---
title: "Harnessing the Power of Terraform: Building & Managing Cloud Resource"
description: "A practical DevOpsWorlwide guide to Harnessing the Power of Terraform: Building & Managing Cloud Resource"
date: "2023-06-06T18:30:00.000Z"
author: DevOpsWorlwide Editorial
tags: ["devops","terraform","terraweek","terraweekchallenge","iac"]
category: Infrastructure as Code
featured: false
readingTime: 13
---

# Harnessing the Power of Terraform: Building & Managing Cloud Resource


> **Why this matters today:** Infrastructure changes deserve the same review discipline as application code. Small, versioned modules and auditable plans keep delivery fast without trading away control.
Using Resource Configuration & Unleashing the Full Potential of Terraform for Various Cloud Infrastructure




 [**Part of seriesUnderstanding Terraform](/series/understanding-terraform)



## Introduction


Terraform is an open-source infrastructure-as-code tool developed by HashiCorp. It allows you to define and manage your infrastructure as code, enabling you to provision and manage resources across multiple cloud providers. In this technical blog, we will explore how to use Terraform to manage infrastructure resources on AWS, Azure, and Google Cloud Platform (GCP).


## Prerequisites


Before we begin, ensure you have the following installed:


**Terraform**: Visit the official Terraform website to download and install the latest version.


**AWS CLI**: If you plan to use AWS, install the AWS Command Line Interface.


**Azure CLI**: If you plan to use Azure, install the Azure CLI.


**Google Cloud SDK**: If you plan to use GCP, install the Google Cloud SDK


## Creating the first Terraform configuration file to define cloud resource


Let's see how to create your first Terraform configuration file to define various cloud resources.


### AWS Configuration ([aws.tf](http://aws.tf)):

 - Create a file named [`aws.tf`](http://aws.tf) and open it in a text editor.
 - Define the AWS provider block at the beginning of the file:


In the [aws.tf](http://aws.tf) file, you start by defining the AWS provider block. The provider block specifies the configuration for connecting to the AWS platform. In this example, the region attribute is set to "us-west-2", indicating that the resources will be provisioned in the US West (Oregon) region. You can modify the region value according to your desired AWS region.

```bash
provider "aws" {
  region = "us-west-2"
}

```

 - Define an EC2 instance resource block:


After the provider block, you define an EC2 instance resource block using the aws_instance resource type. This block specifies the desired properties of the EC2 instance that you want to provision. In the example, the ami attribute is set to the ID of the Amazon Machine Image (AMI) to be used for the instance. The instance_type attribute defines the instance type as t2.micro. Additionally, the tags block is used to assign a Name tag to the instance.

```bash
resource "aws_instance" "example" {
  ami           = "ami-0c94855ba95c71c99"
  instance_type = "t2.micro"
  tags = {
    Name = "example-instance"
  }
}

```

 - Save the file.

The provided configuration demonstrates how to define an AWS provider and provision an EC2 instance using Terraform. You can further customize the resource block or add additional resource blocks to create more AWS resources in your configuration file.


### Azure Configuration ([azure.tf](http://azure.tf)):

 - Create a file named [`azure.tf`](http://azure.tf) and open it in a text editor.
 - Define the Azure provider block at the beginning of the file:
 In the [azure.tf](http://azure.tf) file, define the Azure provider block. The provider block specifies the configuration for connecting to the Azure platform. In this example, the provider is "azurerm" and the features {} block is empty. The features block can be used to enable specific provider features, but in this case, it is left empty.

```bash
provider "azurerm" {
  features {}
}

```

 - Define a virtual machine resource block:
 After the provider block, define a virtual machine resource block using the azurerm_virtual_machine resource type. This block specifies the desired properties of the virtual machine to be provisioned. In the example, attributes such as name, location, resource_group_name, network_interface_ids, and vm_size are defined to configure the virtual machine.

```bash
resource "azurerm_virtual_machine" "example" {
  name                  = "example-vm"
  location              = "West US"
  resource_group_name   = "example-resource-group"
  network_interface_ids = [azurerm_network_interface.example.id]
  vm_size               = "Standard_DS1_v2"
}

resource "azurerm_network_interface" "example" {
  name                = "example-nic"
  location            = "West US"
  resource_group_name = "example-resource-group"
}

```

 - Save the file.

The provided configuration demonstrates how to define an Azure provider and provision a virtual machine along with its associated network interface using Terraform. You can further customize the resource blocks or add additional resource blocks to create more Azure resources in your configuration file.


### GCP Configuration ([gcp.tf](http://gcp.tf)):

 - Create a file named [`gcp.tf`](http://gcp.tf) and open it in a text editor.
 - Define the GCP provider block at the beginning of the file:
 In the [gcp.tf](http://gcp.tf) file, define the GCP provider block. The provider block specifies the configuration for connecting to the GCP platform. In this example, the provider is "google", and the project and region attributes are defined. The project attribute specifies the GCP project ID, and the region attribute sets the desired region to us-west1.

```bash
provider "google" {
  project = "example-project"
  region  = "us-west1"
}

```

 - Define a Google Compute Engine instance resource block:
 After the provider block, define a Google Compute Engine (GCE) instance resource block using the google_compute_instance resource type. This block specifies the desired properties of the GCE instance to be provisioned. In the example, attributes such as name, machine_type, zone, tags, boot_disk, and network_interface are defined to configure the GCE instance.

```bash
resource "google_compute_instance" "example" {
  name         = "example-instance"
  machine_type = "f1-micro"
  zone         = "us-west1-a"
  tags         = ["example"]
  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-10"
    }
  }
  network_interface {
    network = "default"
    access_config {
    }
  }
}

```

 - Save the file.

The provided configuration demonstrates how to define a GCP provider and provision a Google Compute Engine instance using Terraform. You can further customize the resource block or add additional resource blocks to create more GCP resources in your configuration file.


*Note: Make sure you have the necessary credentials and permissions to access the GCP project specified in the provider block.*


## State Management and Validation:


State Management and Validation are crucial aspects of using Terraform to manage infrastructure resources. Let's delve deeper into these concepts:


### State Management


When Terraform provisions resources, it creates a state file that records the state of the infrastructure. This state file serves as the source of truth for Terraform. It keeps track of the resources created, their properties, and their dependencies. The state file allows Terraform to perform intelligent operations such as planning and applying changes to the infrastructure.


By default, Terraform stores the state file locally. However, as infrastructure management becomes a team effort or when multiple instances of Terraform are running, it is recommended to use a remote backend for state storage. This allows for better collaboration and eliminates the risk of losing the state file.


### Validation


Before applying changes to the infrastructure, it is essential to validate the Terraform configuration files to catch any errors or inconsistencies. The `terraform validate` command is used to validate the syntax and configuration of the files.


When you run `terraform validate`, Terraform checks the syntax of the configuration files and verifies the correctness of the resource types, attributes, and dependencies defined in the files. If there are any errors, Terraform will display the specific errors and their locations within the files, helping you identify and rectify them.


Executing the validation step before applying changes helps catch issues early in the process, reducing the risk of errors and preventing potentially destructive changes to the infrastructure.


**Execution Flow:**

 - **Initialize**:
 Run `terraform init` to initialize the working directory, download providers, and set up the backend configuration.


```bash
 terraform init

```
 - **Validate:**
 Validation ensures that your Terraform configurations are syntactically correct and free from any errors or inconsistencies. The `terraform validate` command allows you to validate your configuration files.


**Example**: To validate your Terraform configuration files, simply run the following command:


```bash
 terraform validate

```


Terraform will perform a syntax check and validate the resource types, attributes, and dependencies defined in your configuration files. If any errors or inconsistencies are found, Terraform will display the specific error messages along with the location of the error within the files.


Validating your configuration files before applying changes is essential to catch potential errors early in the process, minimizing the risk of creating or modifying resources with incorrect configurations.


Example with Error: Let's consider an example where we introduce an error in the configuration file. Suppose we misspell the `instance_type` attribute as `instace_type` in an AWS EC2 resource block:


```bash
 hclCopy coderesource "aws_instance" "example" {
   ami           = "ami-0c94855ba95c71c99"
   instace_type  = "t2.micro"  # Error: Misspelled attribute
   tags = {
     Name = "example-instance"
   }
 }

```


When we run `terraform validate` in this case, Terraform will identify the error and provide an error message indicating the exact location of the mistake. This allows us to quickly correct the error before proceeding with the provisioning process.
 - **Plan:**
 Run `terraform plan` to generate an execution plan. Terraform compares the current state with the desired state defined in the configuration files and determines the actions required to reach the desired state.


```bash
 terraform plan

```
 - **Apply**:
 Run `terraform apply` to apply the changes defined in the configuration files. Terraform creates, modifies, or destroys resources as necessary to achieve the desired state. The state file is updated to reflect the new state of the infrastructure.


```bash
 terraform apply

```
 - **Destroy**:
 If desired, run `terraform destroy` to destroy all resources created by Terraform. This command removes the resources defined in the configuration files and updates the state file accordingly.


```bash
 terraform destroy

```

By following this flow and incorporating state management and validation steps, you can ensure that your infrastructure is managed accurately and efficiently using Terraform.


## Provisioning and Lifecycle Management:


Provisioning and Lifecycle Management are crucial aspects of using Terraform to manage infrastructure resources. Let's explore these concepts in more depth with examples and code snippets:


### Provisioning


Provisioning refers to the process of configuring and setting up resources after they have been created by Terraform. It allows you to perform additional tasks such as software installations, configuration changes, or any other customizations required for your infrastructure.


Terraform provides provisioners that can be added to resource blocks to execute scripts or commands on the newly created resources. There are different types of provisioners available, including local-exec, remote-exec, and file.


Here's an example of adding a provisioner block to an EC2 instance resource in the AWS configuration ([aws.tf](http://aws.tf)):


```bash
resource "aws_instance" "example" {
  ami           = "ami-0c94855ba95c71c99"
  instance_type = "t2.micro"
  tags = {
    Name = "example-instance"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo apt update",
      "sudo apt install -y nginx",
      "sudo systemctl start nginx"
    ]
  }
}

```


In this example, the provisioner is of type "remote-exec," which runs commands on the newly created EC2 instance over SSH. The `inline` block contains the commands to update the package manager, install Nginx, and start the Nginx service on the EC2 instance.


When Terraform creates the EC2 instance, it will automatically execute the provisioner commands to configure the instance with Nginx.


### Lifecycle Management


Lifecycle management allows you to control the creation, modification, and deletion of resources managed by Terraform. You can define lifecycle configuration blocks to specify behavior such as resource creation timeouts, ignoring changes to certain attributes, and preventing the destruction of specific resources.


Here's example no. 1 of adding a lifecycle management block to an Azure virtual machine resource in the Azure configuration ([azure.tf](http://azure.tf)):


```bash
resource "azurerm_virtual_machine" "example" {
  name                  = "example-vm"
  location              = "West US"
  resource_group_name   = "example-resource-group"
  network_interface_ids = [azurerm_network_interface.example.id]
  vm_size               = "Standard_DS1_v2"

  lifecycle {
    create_before_destroy = true
    ignore_changes        = [
      network_interface_ids
    ]
  }
}

resource "azurerm_network_interface" "example" {
  name                = "example-nic"
  location            = "West US"
  resource_group_name = "example-resource-group"
}

```


In this example, the `lifecycle` block is added to the Azure virtual machine resource. The `create_before_destroy` attribute ensures that a new virtual machine is created before the old one is destroyed during updates, preventing any downtime.


The `ignore_changes` attribute specifies that changes to the `network_interface_ids` attribute should be ignored during updates. This is useful when you want to prevent Terraform from replacing the network interface when it is modified.


Here's example no.2 of adding a lifecycle management block to an AWS EC2 instance resource in the AWS configuration ([aws.tf](http://aws.tf)):


```bash
resource "aws_instance" "example" {
  ami           = "ami-0c94855ba95c71c99"
  instance_type = "t2.micro"
  tags = {
    Name = "example-instance"
  }

  lifecycle {
    create_before_destroy = true
    prevent_destroy       = true
  }
}

```


In this example, we've added a `lifecycle` block to the EC2 instance resource. Let's understand the two attributes specified:

 - `create_before_destroy`: This attribute ensures that a new EC2 instance is created before the old one is destroyed during updates. By setting it to `true`, Terraform creates a new instance first, waits for it to be running and passing health checks, and then proceeds with destroying the old instance. This ensures high availability and minimal downtime during updates.
 - `prevent_destroy`: This attribute prevents the EC2 instance from being destroyed by Terraform. When set to `true`, Terraform will refuse to destroy the instance, even if you explicitly run the `Terraform destroy` command. This can be useful in scenarios where you want to protect critical or sensitive resources from accidental destruction.

By adding the `lifecycle` block with these attributes, you can control the creation, modification, and destructive behavior of your EC2 instances within your Terraform configuration.


*Note: It's important to use lifecycle management cautiously and ensure that the behavior aligns with your infrastructure requirements.*


## What are resource dependencies?


Resource dependency in Terraform refers to the relationships between different resources defined in your configuration. It represents the order in which resources should be created, updated, or destroyed based on their dependencies.


When you define resources in Terraform, you may have scenarios where one resource depends on another resource. For example, if you are provisioning an AWS EC2 instance and an associated security group, the EC2 instance resource depends on the security group resource because the instance needs the security group to be created before it can be properly configured.


By specifying resource dependencies, Terraform ensures that resources are provisioned or modified in the correct order, avoiding any potential issues related to missing dependencies or conflicting configurations.


Terraform automatically determines the dependency graph based on the resource references in your configuration. When it creates or modifies resources, it follows this dependency graph to ensure that resources are created or updated in the correct order.


You can specify dependencies between resources using Terraform's implicit and explicit dependency mechanisms:

 - ### Implicit Dependencies:


Implicit dependencies are determined by Terraform based on the resource references in your configuration. When you reference a resource within another resource's configuration, Terraform automatically establishes an implicit dependency between them.


For example, consider the following configuration:


```bash
 resource "aws_security_group" "example" {
   # ...
 }

 resource "aws_instance" "example" {
   # ...
   security_group_ids = [aws_security_group.example.id]
 }

```


In this case, the `aws_instance` resource has an implicit dependency on the `aws_security_group` resource because the `security_group_ids` attribute references `aws_security_group.example.id`.
 - ### Explicit Dependencies


In some cases, you may need to define explicit dependencies between resources, especially when there is no direct reference between them in the configuration. You can use the `depends_on` attribute to specify explicit dependencies.


For example:


```bash
 resource "aws_security_group" "example" {
   # ...
 }

 resource "aws_instance" "example" {
   # ...
   depends_on = [aws_security_group.example]
 }

```


In this case, the `aws_instance` resource has an explicit dependency on the `aws_security_group` resource using the `depends_on` attribute.

By specifying these resource dependencies, Terraform ensures that resources are provisioned or modified in the correct order, avoiding any conflicts or errors related to dependencies.


## 


Conclusion


In this blog post, we explored how to use Terraform to manage infrastructure resources on AWS, Azure, and GCP. We learned how to create configuration files for each cloud provider, validate the configuration, apply changes, and manage the lifecycle of the resources. With Terraform, you can effectively manage your infrastructure as code and streamline your infrastructure provisioning process across multiple cloud platforms.


*Please share your thoughts and opinions on this topic in the comments section below.*


*The above information is up to my understanding and learning experience. Suggestions are always welcome.*


*~Abhiraj kharbade*


#DevOps #AWS #terraweek #Terraweek-challenge #terraform #IAC


*Connect with me :*


[![](https://cdn.hashnode.com/res/hashnode/image/upload/v1684148963394/cb184310-d5ce-48d1-bb8a-7081879b7a3d.png)](https://www.linkedin.com/in/abhiraj-k-7b5b56118/)


[*LinkedIn*](https://www.linkedin.com/in/abhiraj-k-7b5b56118/)


*This blog post is a part of the #TerraWeek Challenge initiated by

 [#devops](/tag/devops)[#terraform](/tag/terraform)[#terraweek](/tag/terraweek)[#terraweekchallenge](/tag/terraweekchallenge)[#iac](/tag/iac)
