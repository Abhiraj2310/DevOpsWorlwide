---
title: "Getting Started with Terraform and HCL Syntax"
description: "A practical DevOpsWorlwide guide to Getting Started with Terraform and HCL Syntax"
date: "2023-06-04T18:30:00.000Z"
author: DevOpsWorlwide Editorial
tags: ["devops","terraform","terraweek","terraweekchallenge","iac"]
category: Infrastructure as Code
featured: false
readingTime: 10
---

# Getting Started with Terraform and HCL Syntax


> **Why this matters today:** Infrastructure changes deserve the same review discipline as application code. Small, versioned modules and auditable plans keep delivery fast without trading away control.
Writing Your First Terraform configuration using HCL syntax




 [**Part of seriesUnderstanding Terraform](/series/understanding-terraform)



## Introduction


Terraform, an open-source infrastructure as code (IaC) tool developed by HashiCorp, empowers developers and operators to define and manage infrastructure resources across various cloud providers and platforms. With its declarative approach, Terraform enables users to describe their desired infrastructure state using a configuration language called HashiCorp Configuration Language (HCL). HCL is designed to be human-readable, concise, and expressive, making it an excellent choice for creating Terraform configurations.


In this blog, we will delve into the world of Terraform and HCL syntax, equipping you with the knowledge and skills needed to confidently write Terraform configurations.


## What is HCL?


HCL stands for HashiCorp Configuration Language. It is a declarative configuration language developed by HashiCorp and is used primarily with tools, including Terraform, Vault, Consul, and others. HCL is designed to be human-readable, expressive, and easy to understand.


HCL serves as the configuration syntax for defining infrastructure resources, services, and settings in HashiCorp tools. It allows users to specify their desired state of infrastructure resources and how they should be provisioned, managed, and interconnected.


With HCL, users can define blocks, parameters, and arguments to represent different components and configurations. It supports various data types, such as strings, numbers, booleans, lists, and maps, allowing for flexible and dynamic configurations. HCL also incorporates interpolation and expressions to perform computations, transformations, and dynamic operations within the configurations.


The simplicity and readability of HCL make it accessible to both developers and operations teams, enabling collaboration and making it easier to manage and version control infrastructure configurations. Its adoption across HashiCorp tools provides consistency and familiarity for users working with different tools within the HashiCorp ecosystem.


In summary, HCL is a configuration language that simplifies the process of defining and managing infrastructure resources by providing human-readable syntax and expressive capabilities. It plays a significant role in enabling infrastructure as code and facilitating the automation and provisioning of resources using HashiCorp tools like Terraform.


## **HCL Blocks, Parameters, and Arguments**


In HCL, blocks are the building blocks of Terraform configurations. They define resources, data sources, or other components of your infrastructure. Here's a breakdown of blocks, parameters, and arguments:

 - ### Block Type


A block type represents a specific resource or data source. It consists of the block name and, optionally, a provider prefix. For example, `resource "aws_instance"` represents an EC2 instance resource from the AWS provider.
 - ### Parameters


Parameters are the settings or properties of a block. They define the configurable options for the resource or data source. Parameters have specific names and data types associated with them. Each parameter has a set of possible values or constraints. For instance, the `ami` parameter of an EC2 instance resource expects the ID of an Amazon Machine Image.
 - ### Arguments


Arguments are the values assigned to the parameters. They provide the actual values for the configuration. Arguments can be static values or references to variables. For example, `ami = "ami-0c94855ba95c71c99"` sets the `ami` parameter to a specific AMI ID.

Here's an example of an `aws_instance` block with parameters and arguments:


```bash
resource "aws_instance" "example" {
  ami           = "ami-0c94855ba95c71c99"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.example.id
}

```


In this example, we define an `aws_instance` resource block named `"example"`. It has three parameters: `ami`, `instance_type`, and `subnet_id`. The `ami` parameter is assigned a static value, while the `instance_type` parameter is also assigned a static value. The `subnet_id` parameter is set to the ID of a subnet resource named `example` from the `aws_subnet` resource block.


## **Types of Resources and Data Sources in Terraform**


Terraform provides a wide range of resource types that represent different infrastructure components. These resources allow you to provision and manage various aspects of your infrastructure, such as compute instances, networks, storage, and more. Different cloud providers offer their own set of resource types.


Here are some examples of commonly used resource types:

 - AWS: `aws_instance`, `aws_vpc`, `aws_s3_bucket`, `aws_security_group`, etc.
 - Azure: `azurerm_virtual_machine`, `azurerm_virtual_network`, `azurerm_storage_account`, etc.
 - Google Cloud: `google_compute_instance`, `google_compute_network`, `google_storage_bucket`, etc.

Data sources, on the other hand, allow you to fetch information from external sources and use it within your Terraform configuration. Data sources are read-only and provide information about existing infrastructure resources. They are useful for referencing existing resources, retrieving information for dynamic configuration, or performing data lookups.


Here's an example of an `aws_vpc` data source:


```bash
data "aws_vpc" "example" {
  id = "vpc-0123456789"
}

resource "aws_subnet" "example" {
  vpc_id     = data.aws_vpc.example.id
  cidr_block = "10.0.0.0/24"
}

```


In this example, the `aws_vpc` data source fetches information about an existing VPC with the ID `"vpc-0123456789"`. The `vpc_id` parameter of the `aws_subnet` resource is set to the ID of the VPC fetched by the data source.


By understanding HCL blocks, parameters, and arguments, as well as exploring different resource types and data sources, you can effectively define and manage your infrastructure using Terraform.


## **Understanding variables, data types, and expressions in HCL**


Let's explore variables, data types, and expressions in HCL. Variables allow you to parameterize your Terraform configurations and make them more flexible. Let's dive into the details and provide examples.


### **Variables in HCL**


Variables in Terraform are used to define values that can be used throughout your configuration. They provide a way to parameterize your infrastructure and make it more dynamic and reusable. Variables can have different data types, such as strings, numbers, booleans, lists, and maps.


To define variables, you can create a file called [`variables.tf`](http://variables.tf) and declare the variables within it using the `variable` block. Here's an example of defining a `file_name` variable of type `string`:


```bash
variable "file_name" {
  type        = string
  description = "Name of the file to create"
  default     = "example.txt"
}

```


In this example, we define a variable named `"file_name"`. It has a data type of `string`. The `description` field provides a description of the variable, and the `default` field specifies a default value that will be used if no value is provided when executing Terraform.


### **Using Variables in Terraform Configuration**


Once you have defined variables, you can use them in your Terraform configuration files. Let's take an example of creating a `local_file` resource that uses the `file_name` variable.


```bash
resource "local_file" "example" {
  filename = var.file_name
  content  = "This is an example file."
}

```


In this example, we create a `local_file` resource with the resource block name `"example"`. The `filename` parameter is set to `var.file_name`, which refers to the value of the `file_name` variable defined earlier. The `content` parameter is set to a static string.


By using variables, you can dynamically set values based on different scenarios or user inputs, making your Terraform configurations more adaptable and reusable.


### **Expressions and Interpolation**


Expressions and interpolation allow you to perform computations, transformations, and dynamic operations within your Terraform configurations. Expressions can be used within double quotes (`"`) to dynamically compute values or concatenate strings.


For example, let's say we want to include the current timestamp in the file content:


```bash
resource "local_file" "example" {
  filename = var.file_name
  content  = "This is an example file created at ${timestamp()}."
}

```


In this example, `${timestamp()}` is an expression that calls the `timestamp` function to dynamically generate the current timestamp. The resulting value is then interpolated within the string using `${}`.


You can also use expressions for conditional logic, arithmetic operations, referencing resource attributes, and more.


By utilizing variables, understanding data types, and leveraging expressions and interpolation, you can create dynamic and reusable Terraform configurations that adapt to different scenarios and requirements.


## **Writing Your First Terraform configurations using HCL syntax**


Now Let's focus on writing Terraform configurations using HCL syntax. We will cover adding required providers to your configuration and testing your configuration using the Terraform CLI. Let's dive into the details and provide examples.


### **Adding Required Providers**


To work with different cloud platforms or external systems, you need to specify the required providers in your Terraform configuration. Providers offer resources and data sources that allow you to interact with the corresponding services. Here's how you can add a required provider to your configuration:

 - Identify the provider you want to use, such as Docker or AWS.
 - In your [`main.tf`](http://main.tf) file, add a `required_providers` block at the top, specifying the provider name, source, and version. Here's an example for the Docker provider:

```bash
terraform {
  required_providers {
    docker = {
      source  = "hashicorp/docker"
      version = ">= 3.0.0"
    }
  }
}

```


In this example, we define a `required_providers` block with the provider name `"docker"`. We specify the source as `"hashicorp/docker"` and require a version equal to or greater than `"3.0.0"`.

 - Save the changes and run `terraform init` in the command line within the directory containing your Terraform configuration files. This command initializes the working directory and downloads the necessary provider plugins.

### **Testing and Adjusting the Configuration**


Once you have added the required providers, you can test your configuration and make any necessary adjustments. Here's a high-level overview of the steps involved:

 - Run `terraform plan` to generate an execution plan. This command analyzes your Terraform configuration and shows you the actions that will be performed when applying the configuration. It helps you validate the syntax and check for any potential errors or misconfigurations.
 - Review the output of `terraform plan` and ensure that it matches your expectations. Check for any warnings or errors and address them as needed. This step allows you to catch issues before actually applying the configuration.
 - If the plan looks correct, proceed to apply the configuration using `terraform apply`. This command executes the planned changes and provisions the resources according to your Terraform configuration.
 - During and after the `apply` process, and review the console output for any errors or unexpected behavior. If necessary, make adjustments to your configuration based on the feedback received.
 - Periodically use `terraform plan` and `terraform apply` to make updates or modifications to your infrastructure as needed. These commands ensure that your infrastructure stays in sync with your desired state.

### **Example Configuration**


Here's an example that combines the concepts we discussed to showcase a Terraform configuration:


```bash
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 3.0.0"
    }
  }
}

provider "aws" {
  region = "us-west-2"
}

variable "instance_type" {
  type    = string
  default = "t2.micro"
}

resource "aws_instance" "example" {
  ami           = "ami-0c94855ba95c71c99"
  instance_type = var.instance_type
  subnet_id     = "subnet-0123456789"
}

```


In this example, we first define the required AWS provider and version within the `required_providers` block. Then, we specify the AWS region in the provider block. Next, we define a variable named `"instance_type"` with a default value of `"t2.micro"`. Finally, we create an


EC2 instance resource using the `aws_instance` block, setting the AMI, instance type (using the variable), and subnet ID.


By following these steps and utilizing the Terraform CLI commands, you can write, test, and adjust your Terraform configurations effectively, ensuring that your infrastructure is provisioned and managed correctly.


## Conclusion


In conclusion, mastering HCL syntax for Terraform enables you to effectively provision and manage infrastructure resources. By familiarizing yourself with HCL blocks, parameters, and arguments, and exploring variables, data types, and expressions, you gain the flexibility to create dynamic and reusable configurations.


Through practice and testing using the Terraform CLI, you can confidently write Terraform configurations, add required providers, and adjust your infrastructure as needed. This empowers you to leverage Terraform's power and flexibility for scalable and automated infrastructure management.


*Please share your thoughts and opinions on this topic in the comments section below.*


*The above information is up to my understanding and learning experience. Suggestions are always welcome.*


*~Abhiraj kharbade*


#DevOps #AWS #terraweek #Terraweek-challenge #terraform #IAC


*Connect with me :*




[*LinkedIn*](https://www.linkedin.com/company/devopsworldwide/)


*This blog post is a part of the #TerraWeek Challenge initiated by

 [#devops](/tag/devops)[#terraform](/tag/terraform)[#terraweek](/tag/terraweek)[#terraweekchallenge](/tag/terraweekchallenge)[#iac](/tag/iac)
