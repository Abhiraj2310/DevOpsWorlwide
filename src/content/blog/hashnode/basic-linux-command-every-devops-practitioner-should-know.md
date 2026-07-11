---
title: "Basic linux command every devops practitioner should know."
description: "PublishedApril 5, 2023•3 min read•[**View as Markdown](/basic-linux-command-every-devops-practitioner-should-know.md)"
date: "2023-04-04T18:30:00.000Z"
author: DevOpsWorlwide Editorial
tags: ["Hashnode","devops","linux","linux-commands","trainwithshubham","devops-trends"]
category: Hashnode Archive
featured: false
readingTime: 4
---

# Basic linux command every devops practitioner should know.

PublishedApril 5, 2023•3 min read•[**View as Markdown](/basic-linux-command-every-devops-practitioner-should-know.md)

![Basic linux command every devops practitioner should know.](/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1681285751319%2Faedb24ad-8c7a-4db3-ac44-aaa01ae06ac2.webp&w=3840&q=75)

[A](https://hashnode.com/@ABHIRAJK)[Abhiraj Kharbade](https://hashnode.com/@ABHIRAJK)[**](https://www.linkedin.com/in/a-k-7b5b56118/)

I am an electrical engineer with a passion for DevOps and Cloud Engineering, I bring a unique perspective to the world of technology. My expertise includes a wide range of skills including DevOps methodologies, AWS Cloud, Jenkins, CI/CD, MAVEN, Linux, Shell Scripting, Python, YAML scripts, Groovy Scripts, Assembly language, Ansible, Docker, Kubernetes, Grafana, Tomcat, GitHub, Git, Docker Swarm, Terraform IaC, Cloud Engineering, and Networking. With a deep understanding of these technologies, I am able to design and implement complex systems that are both efficient and scalable. Whether working with large-scale enterprise systems or small startups, I am dedicated to delivering innovative solutions that drive success.

 

Linux is a popular operating system that offers a range of powerful commands for managing files, directories, and other system resources. In this blog, we'll explore some of the most commonly used Linux commands and how they can be used to perform various tasks.

 

To view what's written in a file:

 

The 'cat' command is used to view the contents of a file. The syntax is as follows:

 

`cat filename`

 

For example, to view the contents of a file named 'example.txt', you would type:

 

`cat example.txt`

 

To change the access permissions of files:

 

The 'chmod' command is used to change the access permissions of files. The syntax is as follows:

 

`chmod [options] mode filename`

 

For example, to give read, write, and execute permissions to the owner of a file named 'example.txt', you would type:

 

`chmod u+rwx example.txt`

 

OR

 

`chmod 777 example.txt`

 

To check which commands you have run till now:

 

The 'history' command is used to view a list of previously executed commands. The syntax is as follows:

 

`history`

 

This will display a list of commands that have been executed, along with their corresponding line numbers.

 

To remove a directory/ Folder:

 

The 'rmdir' command is used to remove an empty directory. The syntax is as follows:

 

`rmdir directoryname`

 

For example, to remove a directory named 'example', you would type:

 

`rmdir example`

 

If the directory is not empty, you can use the 'rm' command to remove it along with all its contents:

 

`rm -r directoryname`

 

To create a fruits.txt file and to view the content:

 

The 'touch' command is used to create a new file, and the 'cat' command is used to view its contents. The syntax is as follows:

 

`touch filename`

 

`cat filename`

 

For example, to create a file named 'fruits.txt' and view its contents, you would type:

 

`touch fruits.txt`

 

`cat fruits.txt`

 

Add content in devops.txt (One in each line) - Apple, Mango, Banana, Cherry, Kiwi, Orange, Guava:

 

The 'echo' command is used to add content to a file. The syntax is as follows:

 

`echo "content" >> filename`

 

For example, to add the fruits to a file named 'devops.txt', you would type:

 

`echo "Apple" >> devops.txt`

 

`echo "Mango" >> devops.txt`

 

`echo "Banana" >> devops.txt`

 

`echo "Cherry" >> devops.txt`

 

`echo "Kiwi" >> devops.txt`

 

`echo "Orange" >> devops.txt`

 

`echo "Guava" >> devops.txt`

 

To show only top three fruits from the file:

 

The 'head' command is used to display the first few lines of a file. The syntax is as follows:

 

`head -n numlines filename`

 

For example, to display the top three fruits from the file 'devops.txt'

 

`head -n 3 filename`

 

To create a new file named 'Colors.txt' and view its contents, you can use the following commands:

 

`touch Colors.txt`

 

`cat Colors.txt`

 

The 'touch' command creates an empty file with the specified name, and the 'cat' command displays its contents. If the file already exists, the 'touch' command updates its modification time without changing its contents.

 

*The above information is up to my understanding. Suggestions are always welcome.*

 

~Abhiraj kharbade

 

#DevOps, #Day3_Blog, #Linux

 

[Shubham Londhe](https://hashnode.com/@TrainWithShubham)

 [#devops](/tag/devops)[#linux](/tag/linux)[#linux-commands](/tag/linux-commands)[#trainwithshubham](/tag/trainwithshubham)[#devops-trends](/tag/devops-trends)
