---
title: "Basic linux command every devops practitioner should know."
description: "A practical DevOpsWorlwide guide to Basic linux command every devops practitioner should know."
date: "2023-04-04T18:30:00.000Z"
author: DevOpsWorlwide Editorial
category: Linux & Automation
featured: false
readingTime: 4
---

# Basic linux command every devops practitioner should know.


> **Why this matters today:** Linux fluency still compounds. Clear command-line habits and safe automation make incident response, troubleshooting, and platform work materially faster.



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



