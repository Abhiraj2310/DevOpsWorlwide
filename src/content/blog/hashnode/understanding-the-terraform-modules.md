---
title: "Understanding The Terraform Modules"
description: "A practical DevOpsWorlwide guide to Understanding The Terraform Modules"
date: "2023-06-08T18:30:00.000Z"
author: DevOpsWorlwide Editorial
tags: ["devops","terraform","terraweekchallenge","terraweek","iac"]
category: Infrastructure as Code
featured: false
readingTime: 10
---

# Understanding The Terraform Modules


> **Why this matters today:** Infrastructure changes deserve the same review discipline as application code. Small, versioned modules and auditable plans keep delivery fast without trading away control.
Creation, Composition, Versioning and Locking Terraform Module Versions




 [**Part of seriesUnderstanding Terraform](/series/understanding-terraform)



## Introduction


Terraform, an infrastructure-as-code tool, empowers organizations to define and provision infrastructure resources efficiently. As infrastructure deployments grow in complexity, maintaining a clean and scalable configuration becomes crucial. This blog post explores the significance of modules in Terraform, their benefits, and how to create and version them. Additionally, we will delve into the locking mechanisms available for managing Terraform module versions.


## Understanding Terraform Modules


Modules in Terraform allow you to encapsulate reusable infrastructure configurations into a modular and scalable format. They enable you to organize your codebase, promote code reuse, and abstract away complexities. Modules act as self-contained components that represent a set of resources and their associated configurations.


### Why do we need modules in Terraform?

 - **Reusability**:
 Modules allow you to define and configure infrastructure resources once and reuse them across different projects or environments. This eliminates the need to rewrite or duplicate code, saving time and effort.
 - **Abstraction**:
 Modules abstract away the implementation details, enabling you to focus on the higher-level aspects of your infrastructure. They provide a simplified interface for consuming the module, hiding the underlying complexity.
 - **Scalability**:
 By encapsulating infrastructure configurations into modules, you can easily scale your deployments without sacrificing maintainability. Modules can be reused and composed to create complex infrastructures.
 - **Standardization**:
 Modules promote consistency by enforcing best practices, naming conventions, and configuration standards across deployments. They provide a standardized way to provision resources, ensuring uniformity and reducing the chance of errors.
 - **Collaboration**:
 Modules facilitate collaboration by providing a clear separation of concerns, allowing multiple teams to work concurrently on different modules. Teams can develop and maintain modules independently, promoting modular development and reducing dependencies.

**Example:**


Let's consider an example where we want to create a module for provisioning an AWS S3 bucket. This module will encapsulate the configuration required to create the S3 bucket and provide a simple interface for consuming it.

 - Create a new directory for the module and create the following files:

```plaintext
s3_bucket/
  └── main.tf
  └── variables.tf
  └── outputs.tf

```

 - Define the module's [main.tf](http://main.tf) file. This file contains the actual resource configuration for the S3 bucket:

```bash
# s3_bucket/main.tf

resource "aws_s3_bucket" "my_bucket" {
  bucket = var.bucket_name
  acl    = var.bucket_acl

  tags = var.tags
}

```

 - Define the module's [variables.tf](http://variables.tf) file. This file specifies the input variables for the module:

```bash
# s3_bucket/variables.tf

variable "bucket_name" {
  description = "The name of the S3 bucket."
  type        = string
}

variable "bucket_acl" {
  description = "The access control list (ACL) for the S3 bucket."
  type        = string
  default     = "private"
}

variable "tags" {
  description = "Tags to assign to the S3 bucket."
  type        = map(string)
  default     = {}
}

```

 - Define the module's [outputs.tf](http://outputs.tf) file. This file specifies the output values of the module:

```bash
# s3_bucket/outputs.tf

output "bucket_id" {
  description = "The ID of the created S3 bucket."
  value       = aws_s3_bucket.my_bucket.id
}

```

 - Now, the module is ready to be consumed. Create a new Terraform configuration file that uses the module:

```bash
# main.tf

module "my_s3_bucket" {
  source      = "./s3_bucket"
  bucket_name = "my-bucket"
  bucket_acl  = "private"
  tags = {
    Name        = "My S3 Bucket"
    Environment = "Production"
  }
}

```


In the above example, we defined a module for provisioning an S3 bucket. The module accepts input variables such as `bucket_name`, `bucket_acl`, and `tags`. These variables allow customization of the S3 bucket's configuration when consuming the module.


The module encapsulates the S3 bucket resource configuration, making it reusable across different projects or environments. The module's output value, `bucket_id`, can be used in other parts of the configuration.


By using modules, you can easily create, reuse, and maintain infrastructure configurations, promoting code reusability, abstraction, and scalability.


## Creating a Terraform Module


Creating a Terraform module involves encapsulating infrastructure configurations into a reusable and self-contained component. This promotes modularity and scalability in your infrastructure-as-code projects. Let's explore the process of creating a Terraform module with an example.


**Example:**


**AWS VPC Module**


Let's create a sample Terraform module for provisioning an AWS VPC (Virtual Private Cloud). The module will allow customization of the VPC CIDR block.

 - Create a new directory for the module and create the following files:

```plaintext
vpc_module/
  └── main.tf
  └── variables.tf

```

 - Define the module's [main.tf](http://main.tf) file. This file contains the configuration for the AWS VPC resource:

```bash
# vpc_module/main.tf

resource "aws_vpc" "main" {
  cidr_block = var.vpc_cidr
}

```

 - Define the module's [variables.tf](http://variables.tf) file. This file specifies the input variables for the module:

```bash
# vpc_module/variables.tf

variable "vpc_cidr" {
  description = "The CIDR block for the VPC."
  type        = string
  default     = "10.0.0.0/16"
}

```


In the example above, we created a module called "vpc_module" that provisions an AWS VPC. The `vpc_cidr` variable allows customization of the CIDR block for the VPC. The default value is set to "10.0.0.0/16" if no value is provided when consuming the module.


To consume this module, create a new Terraform configuration file in a separate directory:


```bash
# main.tf

module "my_vpc" {
  source    = "./vpc_module"
  vpc_cidr  = "172.16.0.0/16"
}

```


In the above example, we use the `module` block to instantiate the `vpc_module` module. The `source` parameter specifies the path to the module directory (in this case, it is the local directory "./vpc_module"). The `vpc_cidr` variable is provided with a specific CIDR block value of "172.16.0.0/16".


By consuming the module in this way, we can easily create multiple instances of AWS VPCs with different CIDR blocks by changing the `vpc_cidr` value when using the module.


Using modules in this manner allows for the encapsulation of infrastructure configurations, promoting code reuse, abstraction, and maintainability. Modules can be shared and consumed across projects, enabling the creation of scalable and consistent infrastructure deployments.


## Modular Composition and Module Versioning


Modular Composition: Modular composition in Terraform refers to the ability to nest modules within one another, allowing you to build complex infrastructure deployments by combining smaller, reusable modules. This approach promotes code reuse, modularity, and maintainability. Let's explore an example to understand modular composition better.


**Example:**


**AWS Application Stack**


Suppose you have two modules: `vpc_module` for provisioning an AWS VPC and `ec2_instance_module` for provisioning an EC2 instance. You can compose these modules to create an application stack with an EC2 instance inside the VPC.

 - Create a new directory for the main configuration and create the following files:

```plaintext
app_stack/
  └── main.tf

```

 - Define the main configuration file ([`main.tf`](http://main.tf)) that uses both the `vpc_module` and `ec2_instance_module`:

```bash
# app_stack/main.tf

module "my_vpc" {
  source    = "../vpc_module"
  vpc_cidr  = "10.0.0.0/16"
}

module "my_ec2_instance" {
  source      = "../ec2_instance_module"
  instance_type = "t2.micro"
  subnet_id   = module.my_vpc.subnet_id
}

```


In the example above, we use the `module` block to instantiate both the `vpc_module` and `ec2_instance_module`. The `source` parameter specifies the path to the module directories. The `vpc_cidr` variable is set to "10.0.0.0/16" for the VPC module, and the `instance_type` variable is set to "t2.micro" for the EC2 instance module.


The `subnet_id` parameter of the `ec2_instance_module` is set to [`module.my`](http://module.my)`_vpc.subnet_id`, which refers to the `subnet_id` output of the `my_vpc` module. This demonstrates how modules can be composed and how outputs from one module can be used as inputs in another module.


By composing modules in this manner, you can create more complex infrastructure deployments by reusing and combining smaller, self-contained modules. This approach promotes modular development, reduces duplication, and enhances maintainability.


**Module Versioning:**
Module versioning in Terraform allows you to manage and control the versions of modules used in your infrastructure deployments. Versioning is crucial for maintaining stability and consistency across projects, ensuring that infrastructure configurations remain intact even as modules evolve. Let's explore how to version modules.

 - Create a [`versions.tf`](http://versions.tf) file in the module directory and specify the version constraints:

```bash
# vpc_module/versions.tf

terraform {
  required_version = ">= 1.0"
}

module "vpc_module" {
  source  = "git::https://github.com/example/vpc_module.git"
  version = "1.2.0"
}

```


In the example above, the [`versions.tf`](http://versions.tf) file specifies the required Terraform version and the version constraint for the `vpc_module`. The `version` parameter in the `module` block ensures that the module is locked to version 1.2.0.


By explicitly specifying module versions, you can control when to adopt new versions and avoid unexpected changes in your infrastructure deployments.


Module versioning allows for repeatable and reliable deployments, enabling teams to manage and track changes to infrastructure configurations over time. It also provides a mechanism for collaboration and coordination between different teams working on the same infrastructure project.


Remember to regularly review and update module versions to incorporate bug fixes, new features, and security patches while ensuring compatibility with your infrastructure deployments.


## Locking Terraform Module Versions


Locking Terraform module versions is essential to ensure consistency and stability in your infrastructure deployments. It helps maintain the integrity of your infrastructure by fixing the module versions used across different environments and preventing unintended changes. Let's explore the ways to lock Terraform module versions with code snippets.

 - **Using the Terraform CLI:**

The Terraform CLI provides a mechanism to lock module versions automatically. When you run `terraform init`, it generates a `terraform.lock.hcl` file that captures the versions of all the modules and providers used in your configuration. This file can be committed to version control to enforce consistent module versions across environments.


Here's an example of a `terraform.lock.hcl` file:


```plaintext
# terraform.lock.hcl

terraform {
  required_version = ">= 1.0"
}

provider "aws" {
  version     = "3.42.0"
  constraints = "~> 3.0"
}

module "my_vpc" {
  source  = "git::https://github.com/example/vpc_module.git"
  version = "1.2.0"
}

```


By including the `terraform.lock.hcl` file in your version control system and reusing it across deployments, you ensure that the same versions of modules and providers are used consistently.

 - **Using a Version Constraint File:**

Another way to lock Terraform module versions is by using a version constraint file, typically named [`versions.tf`](http://versions.tf). This file allows you to define version constraints for modules and providers explicitly.


Here's an example [`versions.tf`](http://versions.tf) file:


```bash
# versions.tf

terraform {
  required_version = ">= 1.0"
}

provider "aws" {
  version = "~> 3.0"
}

module "my_vpc" {
  source  = "git::https://github.com/example/vpc_module.git"
  version = "1.2.0"
}

```


In the above example, the [`versions.tf`](http://versions.tf) file specifies version constraints for the required Terraform version, AWS provider, and the `my_vpc` module. The `~> 3.0` constraint for the AWS provider ensures that any version within the 3.x range is accepted.


By using a version constraint file, you can explicitly define the acceptable module versions and ensure that specific versions are used in your infrastructure deployments.


Both approaches provide mechanisms for version locking, and you can choose the one that suits your workflow and requirements. It's crucial to regularly review and update the locked versions to incorporate bug fixes, security patches, and new features while maintaining the stability and consistency of your infrastructure deployments.


## Conclusion


Terraform modules provide a powerful mechanism for achieving modularity, reusability, and scalability in infrastructure-as-code projects. They promote best practices, enable code sharing, and facilitate collaboration across teams. By utilizing modules effectively and versioning them appropriately, organizations can build robust and maintainable infrastructure deployments with Terraform.


Remember to regularly update and review module versions to ensure stability and incorporate new features and improvements.


*Please share your thoughts and opinions on this topic in the comments section below.*


*The above information is up to my understanding and learning experience. Suggestions are always welcome.*


*~Abhiraj kharbade*


#DevOps #AWS #terraweek #Terraweek-challenge #terraform #IAC


*Connect with me :*




[*LinkedIn*](https://www.linkedin.com/company/devopsworldwide/)


*This blog post is a part of the #TerraWeek Challenge initiated by

 [#devops](/tag/devops)[#terraform](/tag/terraform)[#terraweekchallenge](/tag/terraweekchallenge)[#terraweek](/tag/terraweek)[#iac](/tag/iac)
