---
title: "Linux: What it is? What are flavors of Linux? Which are some beginner level commands?"
description: "A practical introduction to Linux, its architecture, distributions, and essential commands."
date: "2023-03-20T18:30:00.000Z"
author: DevOpsWorlwide Editorial
tags: ["Hashnode","linux","linux-for-beginners","devops","90daysofdevops","linux-basics"]
category: Hashnode Archive
featured: false
readingTime: 4
---

# Linux: What it is? What are flavors of Linux? Which are some beginner level commands?
`n`nWhat is Linux?`n
Just like Windows, iOS, and Mac OS, Linux is an operating system. In fact, one of the most popular platforms on the planet, Android, is powered by the Linux operating system. An operating system is a software that manages all of the hardware resources associated with your desktop or laptop. To put it simply, the operating system manages the communication between your software and your hardware. Without the operating system (OS), the software wouldn’t function. Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. It is the most secure and reliable operating system as compared to the other operating systems in the market hence in software development Linux is prioritized.

Architecture of Linux:

The Linux operating system comprises several different pieces between the user and the hardware such as Bootloader, Kernel, Shell and Application.

• Bootloader: The software that manages the boot process of your computer. For most users, this will simply be a splash screen that pops up and eventually goes away to boot into the operating system.

• Kernel: The kernel is a computer program at the core of a computer's operating system and has complete control over everything in the system.

• Shell: A Shell provides you with an interface to the Unix system. It gathers input from you and executes programs based on that input. When a program finishes executing, it displays that program's output. There are various types of shell based on their usage and application i.e. C shell (csh), Bourne Shell (sh), Korn Shell (ksh), and Bourne Again Shell (bash). out of which Bash or Bourne Again Shell is mostly used in shell scripting.

• Application: Desktop environments do not offer the full array of apps. Just like Windows and macOS, Linux offers thousands upon thousands of high-quality software titles that can be easily found and installed. Most modern Linux distributions (more on this below) include App Store-like tools that centralize and simplify application installation. For example, Ubuntu Linux has the Ubuntu Software Center (a rebrand of GNOME Software) which allows you to quickly search among the thousands of apps and install them from one centralized location.

What are the flavors of Linux?

Flavors are a mix of saltiness, sourness, sweetness and bitterness. Now thinking about that let's imagine a recipe that combines those flavors with one or more prevalent. A flavor in the Linux context is a way to represent this. Mixing DEs (GNOME, KDE, Xfce) bases, objectives (performance, usability, end use).

Around 600 + Linux flavors are available and some of the popular Linux distributions are CentOS, MX Linux, Kali, Manjaro, Linux Mint, elementary, Ubuntu, Debian, Solus, Fedora, openSUSE, Deepin, etc.

Which are some beginner-level commands?

Listing commands:

ls option_flag arguments --> list the subdirectories and files available in the present directory

Examples:

ls -l--> list the files and directories in long list format with extra information

ls -a --> list all including hidden files and directory

ls *.sh --> list all the files having .sh extension.

ls -i --> list the files and directories with index numbers in inodes

ls -d */ --> list only directories.(we can also specify a pattern)

Directoy commands:

pwd --> print work directory. Gives the present working directory.

cd path_to_directory --> change the directory to the provided path

cd ~ or just cd --> change directory to the home directory

cd - --> Go to the last working directory.

cd .. --> change directory to one step back.

cd ../.. --> Change directory to 2 levels back.

mkdir directoryName --> to make a directory in a specific location

Examples:

mkdir newFolder              # make a new folder 'newFolder'

mkdir .NewFolder              # make a hidden directory (also . before a file to make it hidden)

mkdir A B C D                  #make multiple directories at the same time

mkdir /home/user/Mydirectory   # make a new folder in a specific location

mkdir -p  A/B/C/D              # make a nested directory


The above information is up to my understanding. Suggestions are always welcome.

~Abhiraj

#DevOps, #Day2_Blog, #Linux

Shubham Londhe

#linux
#linux-for-beginners
#devops
#90daysofdevops
#linux-basics
