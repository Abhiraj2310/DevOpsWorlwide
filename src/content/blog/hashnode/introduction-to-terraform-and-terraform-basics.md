---
title: "Introduction to Terraform and Terraform Basics"
description: "A practical DevOpsWorlwide guide to Introduction to Terraform and Terraform Basics"
date: "2023-06-04T18:30:00.000Z"
author: DevOpsWorlwide Editorial
tags: ["terraform","devops","iac","terraweek-challenge"]
category: Infrastructure as Code
featured: false
readingTime: 15
---

# Introduction to Terraform and Terraform Basics


> **Why this matters today:** Infrastructure changes deserve the same review discipline as application code. Small, versioned modules and auditable plans keep delivery fast without trading away control.
Simplifying Infrastructure as Code




 [**Part of seriesUnderstanding Terraform](/series/understanding-terraform)



## Introduction


In today's rapidly evolving technology landscape, managing infrastructure has become increasingly complex. Traditional methods of manually provisioning and configuring infrastructure can be time-consuming, error-prone, and difficult to scale. This is where Terraform comes in as a powerful tool that allows you to manage infrastructure as code, providing a more efficient and reliable way to provision and manage resources across various cloud providers. In this blog post, we will explore the fundamentals of Terraform, its benefits, and how to set up the environment for popular cloud platforms like AWS, Azure, or GCP.


## What is IAC?


IAC stands for Infrastructure as Code. It is an approach to managing and provisioning infrastructure resources using code-based definitions. With IAC, instead of manually configuring infrastructure components, such as servers, networks, and storage, the entire infrastructure is defined and managed through code.


Traditionally, infrastructure provisioning involved manual and often error-prone processes. System administrators would manually configure servers, install software, and make changes by logging into individual machines. This approach was time-consuming, difficult to reproduce, and prone to human error.


IAC revolutionizes infrastructure management by treating infrastructure as software. It leverages the principles and practices of software development, such as version control, testing, and automation, to manage infrastructure resources.


**The benefits of IAC include:**

 - Version Control: Infrastructure code can be stored in version control systems like Git, allowing teams to track changes, collaborate, and rollback to previous versions if needed.
 - Reproducibility: Infrastructure can be consistently reproduced in different environments, such as development, testing, and production, by using the same codebase.
 - Scalability: Infrastructure can be easily scaled up or down by modifying the code, enabling efficient resource allocation based on demand.
 - Automation: Infrastructure provisioning and configuration can be automated, reducing manual effort, human errors, and the time required for deployment.
 - Auditing and Compliance: Infrastructure configurations defined as code can be audited, reviewed, and validated for compliance with security and regulatory standards.

## What is Terraform?


Terraform is an open-source infrastructure as code (IaC) tool developed by HashiCorp. It enables you to define and manage your infrastructure resources in a declarative manner, using a simple and consistent configuration language. With Terraform, you describe your desired infrastructure state in a configuration file, and it takes care of creating, updating, and destroying resources to match that state.


![](https://cdn.hashnode.com/res/hashnode/image/upload/v1685952779123/b61b891b-2317-4539-b438-3b4ac474e5f4.png)


## How does Terraform simplify infrastructure provisioning?

 - **Declarative Configuration:** Terraform uses a declarative approach, allowing you to specify the desired state of your infrastructure rather than writing procedural code. This makes it easier to understand, version, and maintain your infrastructure code.
 - **Resource Abstraction**: Terraform provides a consistent abstraction layer for different cloud providers, including AWS, Azure, and GCP. It abstracts away the provider-specific details, allowing you to write infrastructure code that is portable across different platforms.
 - **Dependency Management**: Terraform automatically manages dependencies between resources. It understands the relationships between resources and ensures they are provisioned in the correct order, reducing the risk of provisioning failures due to missing dependencies.
 - **Idempotent Operations**: Terraform is idempotent, meaning that it can determine whether changes need to be made to achieve the desired state. It only applies necessary changes, minimizing the chances of accidental resource modifications and reducing the risk of human error.

## Installing Terraform

 - **Windows**:

 - Visit the Terraform downloads page: [https://www.terraform.io/downloads.html](https://www.terraform.io/downloads.html)
 - Download the latest Windows 64-bit ZIP archive (.zip) file.
 - Right-click on the ZIP archive file and select "Extract All" from the context menu. This will open the "Extract Compressed (Zipped) Folders" wizard.
 - In the wizard, choose the destination folder where you want to extract the Terraform files. It's recommended to extract them to a directory listed in the system's PATH environment variable, such as "C:\Windows\System32" or "C:\Program Files".
 - Click on the "Extract" button to begin the extraction process. The wizard will extract the contents of the ZIP archive to the specified folder.
 - After the extraction is complete, navigate to the extracted folder. You should see the Terraform executable file named "terraform.exe".
 - To add the Terraform folder to the system's PATH environment variable, follow these steps:

 - Open the Start menu and search for "Environment Variables".
 - Select "Edit the system environment variables" to open the System Properties dialog box.
 - Click on the "Environment Variables" button at the bottom of the dialog box.
 - In the "System Variables" section, scroll down and select the "Path" variable.
 - Click on the "Edit" button to modify the variable.
 - In the "Edit Environment Variable" window, click on the "New" button to add a new entry.
 - Enter the path to the Terraform folder that you extracted earlier. For example, if you extracted the files to "C:\Program Files\Terraform", add that path.
 - Click "OK" to save the changes and close all the windows.
 - Now that you have added the Terraform folder to the system's PATH environment variable
 - Open a Command Prompt or PowerShell window and verify the installation by running the following command:


```bash
  terraform version

```
 - If Terraform is installed correctly, it will display the version information.
 - **Linux**:

 - Open a terminal.
 - Visit the Terraform downloads page: [https://www.terraform.io/downloads.html](https://www.terraform.io/downloads.html)
 - Download the latest Linux 64-bit ZIP archive (.zip) file.
 - Extract the contents of the ZIP archive to a directory of your choice. It's recommended to extract it to a directory listed in the system's PATH environment variable.
 - Rename the extracted terraform executable file to "terraform".
 - Give execute permissions to the Terraform binary:


```bash
  chmod +x terraform

```
 - Move the Terraform binary to a directory listed in the system's PATH environment variable (optional).
 - Verify the installation by running the following command:


```bash
  terraform version

```
 - If Terraform is installed correctly, it will display the version information.
 - **macOS**:

 - Open a terminal.
 - Visit the Terraform downloads page: [https://www.terraform.io/downloads.html](https://www.terraform.io/downloads.html)
 - Download the latest macOS 64-bit ZIP archive (.zip) file.
 - Extract the contents of the ZIP archive to a directory of your choice. It's recommended to extract it to a directory listed in the system's PATH environment variable.
 - Rename the extracted terraform executable file to "terraform".
 - Give execute permissions to the Terraform binary:


```bash
  chmod +x terraform

```
 - Move the Terraform binary to a directory listed in the system's PATH environment variable (optional).
 - Verify the installation by running the following command:


```bash
  terraform version

```
 - If Terraform is installed correctly, it will display the version information.

*Note: Once Terraform is successfully installed, you can start using it to manage your infrastructure as code. Remember to periodically check for updates and upgrade to the latest version of Terraform to access new features and bug fixes.*


## Important Terminologies in Terraform


### **Provider**


A provider in Terraform is a plugin that enables interaction with a specific cloud or infrastructure platform. It abstracts away the underlying implementation details and provides a consistent interface for managing resources. Terraform supports a wide range of providers, including AWS, Azure, GCP, and more. Providers are declared in the Terraform configuration to specify the target platform. Here's an example of configuring the AWS provider:


```bash
provider "aws" {
  region = "us-west-2"
}

```


In the above example, we are specifying the AWS provider and setting the desired region as "us-west-2". This allows Terraform to interact with the AWS API and provision resources in the specified region.


### Resource


A resource represents a specific infrastructure object that you want to manage with Terraform. It can be anything from a virtual machine instance to a network resource or a database. Resources are defined within a provider block and have a specific type corresponding to the cloud provider's resource. Here's an example of creating an AWS EC2 instance resource:


```bash
resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}

```


In this example, we define an EC2 instance resource using the "aws_instance" resource type. We specify the Amazon Machine Image (AMI) ID and the desired instance type. When Terraform applies this configuration, it will create an EC2 instance based on the provided specifications.


### Variables


Variables in Terraform allow you to parameterize your configuration and make it more flexible and reusable. They enable you to pass values into the Terraform configuration from external sources like command-line arguments, environment variables, or separate variable files. You can define variables in your Terraform files and assign default values or mark them as required. Here's an example of defining a variable for an AWS region:


```bash
variable "region" {
  description = "AWS region"
  default     = "us-west-2"
}

```


In the above example, we define a variable called "region" with a default value of "us-west-2". This variable can be overridden by passing a different value through command-line flags or environment variables when executing Terraform commands. Variables make your configurations more dynamic and allow for greater reusability across different environments.


### Modules


Modules in Terraform enable code reuse and abstraction by encapsulating a set of resources and configurations into a self-contained package. A module can be seen as a Terraform configuration that can be called multiple times with different input variables. It provides a way to create reusable components and promotes modular and scalable infrastructure provisioning. Here's an example of using an AWS VPC module:


```bash
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "2.0.0"

  vpc_cidr = "10.0.0.0/16"
  subnets   = ["10.0.1.0/24", "10.0.2.0/24"]
}

```


In this example, we use the AWS VPC module provided by the "terraform-aws-modules" organization. We specify the version of the module and provide input variables like the VPC CIDR block and subnet CIDR blocks. Modules allow you to abstract complex infrastructure configurations into reusable building blocks, making it easier to manage and maintain your Terraform codebase.


### State


State in Terraform refers to the recorded state of the infrastructure managed by Terraform. It keeps track of the resources that Terraform provisions and their current configuration. The state file is important because it allows Terraform to perform actions like create, update, or delete resources in a consistent and idempotent manner. The state can be stored locally on the disk or remotely in a backend system like Amazon S3 or HashiCorp Consul. By default, Terraform stores the state locally in a file named "terraform.tfstate". Here's an example of a simple state file:


```json
{
  "version": 4,
  "terraform_version": "1.0.0",
  "serial": 1,
  "lineage": "a6d08df4-7454-4e85-86d6-ffcbf35e032d",
  "outputs": {},
  "resources": [
    // Resources managed by Terraform
  ]
}

```


The state file contains information about the version of Terraform, the resources managed by Terraform, and other metadata. It is crucial for tracking and managing the lifecycle of your infrastructure. Terraform uses the state file to determine the current state of the infrastructure and plan and apply changes accordingly.


## Setting up the Environment for AWS, Azure, or GCP:


### AWS

 - a. Obtain AWS Access Key and Secret Access Key:

 - Log in to the AWS Management Console.
 - Go to the IAM (Identity and Access Management) service.
 - Create a new IAM user or select an existing one.
 - Under the "Security credentials" tab, click on "Create access key".
 - Save the access key ID and secret access key in a secure location.

b. Set AWS Access Key and Secret Access Key as Environment Variables:

 - On your local machine, open a terminal or command prompt.
 - Set the environment variables using the following commands (replace `ACCESS_KEY` and `SECRET_KEY` with your actual values):

 - Linux/macOS:


```bash
  export AWS_ACCESS_KEY_ID=ACCESS_KEY
  export AWS_SECRET_ACCESS_KEY=SECRET_KEY

```
 - Windows:


```bash
  set AWS_ACCESS_KEY_ID=ACCESS_KEY
  set AWS_SECRET_ACCESS_KEY=SECRET_KEY

```

### Azure


a. Generate Azure Active Directory (AAD) Application:

 - Go to the Azure Portal ([portal.azure.com](http://portal.azure.com)).
 - Navigate to the Azure Active Directory service.
 - Select "App registrations" and create a new application.
 - Note down the application's client ID, client secret, tenant ID, and subscription ID.

b. Set Azure Credentials as Environment Variables:

 - On your local machine, open a terminal or command prompt.
 - Set the environment variables using the following commands (replace `CLIENT_ID`, `CLIENT_SECRET`, `TENANT_ID`, and `SUBSCRIPTION_ID` with your actual values):

 - Linux/macOS:


```bash
  export ARM_CLIENT_ID=CLIENT_ID
  export ARM_CLIENT_SECRET=CLIENT_SECRET
  export ARM_TENANT_ID=TENANT_ID
  export ARM_SUBSCRIPTION_ID=SUBSCRIPTION_ID

```
 - Windows:


```bash
  set ARM_CLIENT_ID=CLIENT_ID
  set ARM_CLIENT_SECRET=CLIENT_SECRET
  set ARM_TENANT_ID=TENANT_ID
  set ARM_SUBSCRIPTION_ID=SUBSCRIPTION_ID

```

### GCP


a. Generate a Service Account Key File:

 - Go to the Google Cloud Console ([console.cloud.google.com](http://console.cloud.google.com)).
 - Navigate to the "IAM & Admin" section.
 - Select "Service accounts" and create a new service account.
 - Download the JSON key file for the service account.

b. Set the Google Application Credentials Environment Variable:

 - On your local machine, open a terminal or command prompt.
 - Set the environment variable using the following command (replace `PATH_TO_JSON_KEY` with the actual path to the JSON key file):

 - Linux/macOS:


```bash
  export GOOGLE_APPLICATION_CREDENTIALS=PATH_TO_JSON_KEY

```
 - Windows:


```bash
  set GOOGLE_APPLICATION_CREDENTIALS=PATH_TO_JSON_KEY

```

## Using Environmental Variables for Secret Access Key


When working with Terraform, it's a good practice to use environment variables to store sensitive information like secret access keys. By using environmental variables, you can keep your credentials separate from your code and prevent accidentally committing them to version control. Here's an example of how to use environmental variables for AWS secret access key in Terraform:

 - Create a new file named `terraform.tfvars` in your Terraform project directory.
 - Inside the `terraform.tfvars` file, define a variable and assign it to the environmental variable:


```bash
 aws_secret_access_key = var.AWS_SECRET_ACCESS_KEY

```
 - In your main Terraform configuration file (e.g., [`main.tf`](http://main.tf)), reference the variable:


```bash
 provider "aws" {
   access_key = var.AWS_ACCESS_KEY_ID
   secret_key = var.aws_secret_access_key
   region     = "us-west-2"
 }

```

### Using HashiCorp Terraform Vault:


HashiCorp Vault is a popular tool for securely managing secrets and sensitive data in your infrastructure. Terraform can integrate with Vault to retrieve secrets during provisioning. Here's an example of how to use Terraform Vault with environmental variables:

 - Install and configure HashiCorp Vault by the following process:

 - **Download Vault:**

 - Visit the HashiCorp Vault downloads page: [**https://www.vaultproject.io/downloads.html**](https://www.vaultproject.io/downloads.html)
 - Download the appropriate package for your operating system.
 - **Install Vault:**

 - Once the package is downloaded, follow the installation instructions specific to your operating system. For example:

 - On Linux or macOS, extract the downloaded package and move the `vault` binary to a directory listed in your system's PATH.
 - On Windows, extract the downloaded package and move the `vault.exe` binary to a directory listed in your system's PATH.
 - **Set Up Vault Environment:**

 - Create a directory to store Vault's configuration files and data. For example:


```bash
  bashCopy codemkdir -p /path/to/vault

```
 - Set an environment variable to point Vault to the configuration directory. For Linux/macOS:


```bash
  javascriptCopy codeexport VAULT_ADDR=http://127.0.0.1:8200
  export VAULT_CONFIG_PATH=/path/to/vault

```


For Windows (PowerShell):


```bash
  rubyCopy code$env:VAULT_ADDR = "http://127.0.0.1:8200"
  $env:VAULT_CONFIG_PATH = "C:\path\to\vault"

```
 - **Start the Vault Server:**

 - Open a new terminal or command prompt window.
 - Run the following command to start the Vault server:


```bash
  Copy codevault server -dev

```
 - The `-dev` flag starts a single-node development server with an in-memory storage backend. This is useful for learning and development purposes.
 - Vault will generate an unseal key and a root token. Take note of these, as you will need them to interact with Vault.
 - **Initialize Vault:**

 - In a new terminal or command prompt window, run the following command to initialize Vault:


```bash
  csharpCopy codevault operator init

```
 - The vault will generate a set of recovery keys. Safely store these keys in multiple locations, as they are required for Vault's recovery process.
 - **Unseal Vault:**

 - Run the following command to unseal Vault using the provided unseal key (replace `<unseal_key>` with the actual key):


```bash
  arduinoCopy codevault operator unseal <unseal_key>

```
 - Repeat this command for the remaining unseal keys until Vault is successfully unsealed.
 - **Log in to Vault:**

 - Run the following command to log in to Vault using the root token generated during initialization:


```bash
  phpCopy codevault login <root_token>

```
 - **Enable Authentication Methods:**

 - Vault supports various authentication methods like tokens, userpass, GitHub, etc. Enable the desired authentication method based on your requirements. For example, to enable the userpass authentication method:


```bash
  bashCopy codevault auth enable userpass

```
 - **Configure Policies and Secrets:**

 - Define policies to grant access permissions to users or applications. Policies are written in HashiCorp Configuration Language (HCL) and define what actions can be performed on which paths within Vault.
 - Store secrets in Vault using the appropriate secret engine. For example, you can use the key-value secret engine to store key-value pairs.
 - **Access Vault:**

 - Now that Vault is installed and configured, you can interact with it using the Vault CLI or the API endpoints.
 - Create a new secret in Vault, for example, an AWS secret access key:


```bash
 $ vault kv put secret/aws-keys access_key=YOUR_ACCESS_KEY secret_key=YOUR_SECRET_KEY

```
 - In your Terraform configuration file, use the `vault` data source to retrieve the secret:


```bash
 data "vault_generic_secret" "aws_keys" {
   path = "secret/data/aws-keys"
 }

 provider "aws" {
   access_key = data.vault_generic_secret.aws_keys.data.access_key
   secret_key = data.vault_generic_secret.aws_keys.data.secret_key
   region     = "us-west-2"
 }

```
 - Set the environmental variable `VAULT_ADDR` to point to your Vault server:


```bash
 export VAULT_ADDR=https://your-vault-server-address

```
 - Run `terraform init` to initialize your Terraform project and fetch the secrets from Vault.
 - When executing Terraform commands, ensure that you have appropriate permissions to access the Vault and retrieve the secrets.

By leveraging environmental variables and HashiCorp Vault, you can securely manage and retrieve secrets for your infrastructure provisioning with Terraform.


## Conclusion


Terraform is a powerful tool that simplifies infrastructure provisioning by enabling you to manage your infrastructure as code. With Terraform's declarative approach, resource abstraction, dependency management, and idempotent operations, you can provision and manage infrastructure resources more efficiently and reliably. By installing Terraform and understanding the core concepts, such as providers, resources, variables, modules, and state, you can leverage the full potential of Terraform to build and manage your infrastructure in a scalable and automated manner.


Remember, this blog post only scratches the surface of Terraform's capabilities, and there is much more to explore. So, start experimenting, leverage the vast Terraform community, and unlock the power of infrastructure as code with Terraform!


*Please share your thoughts and opinions on this topic in the comments section below.*


*The above information is up to my understanding and learning experience. Suggestions are always welcome.*


*~Abhiraj kharbade*


#DevOps #AWS #terraweek #Terraweek-challenge #terraform #IAC


*Connect with me :*


[![](https://cdn.hashnode.com/res/hashnode/image/upload/v1684148963394/cb184310-d5ce-48d1-bb8a-7081879b7a3d.png)](https://www.linkedin.com/in/abhiraj-k-7b5b56118/)


[*LinkedIn*](https://www.linkedin.com/in/abhiraj-k-7b5b56118/)


*This blog post is a part of the #TerraWeek Challenge initiated by
[Shubham Londhe](https://hashnode.com/@TrainWithShubham)*

 [#terraform](/tag/terraform)[#devops](/tag/devops)[#iac](/tag/iac)[#terraweek-challenge](/tag/terraweek-challenge)
