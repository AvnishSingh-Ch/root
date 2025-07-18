---
title: "Cybersecurity Home Lab: Part 1 - Introduction of Homelab"
description: "Starting my own cybersecurity home lab to learn, practice, and experiment with various tools and techniques. Join me as I explore the basics, set up virtual machines, and work on real-world cybersecurity scenarios without fear of messing up my personal data!"
pubDate: "Nov 12 2024"

categories:
  - Cybersecurity Home Lab
tags:
  - Cybersecurity
  - Home Lab
badge: Pin
---



# **Building My Cybersecurity Home Lab: The Intro You Didn't Know You Needed**

## **What's a Cybersecurity Home Lab, and Why Bother?**


Alright, so picture this: You want to dive into the world of cybersecurity, but you can't exactly go poking around in live networks unless you fancy a visit from law enforcement. This is where a  **cybersecurity home lab**  comes in—a safe, controlled playground where you can learn, experiment, and (let’s be honest) break things without causing a digital apocalypse.

A home lab is like your personal hacking dojo. It's a place where you can practice skills, test tools, and simulate attacks without having to worry about accidentally nuking your neighbor’s Wi-Fi. And let’s face it, who doesn’t love the freedom of messing around with something just to see what happens?

### **Why Build One?**
-  **Hands-On Learning**: Reading about hacking is fun, but doing it is where the real magic happens. It’s like watching a cooking show versus actually making (and burning) the food yourself.

-  **Skill Practice**: You get to play around with tools like Wireshark, Nmap, and Burp Suite. It’s like having a toolkit for the internet but without any manuals—just how we like it.

-  **Safe Sandbox**: You can make and break stuff here without worrying about deleting your family vacation photos or accidentally sending your resume to a hacker group.

-  **Geek Cred**: Let’s be honest—having your own lab sounds cool. It’s like having a secret lab in your basement, minus the creepy Frankenstein vibe.

## **My Goals for This Home Lab**

So why am I building this lab? Well, here’s what I’m aiming for:

1.  **Learn Cybersecurity**: I want to go beyond just reading about it—I want to get my hands dirty and see how these attacks and defenses work in the real world.

2.  **Practice Skills**: From sniffing network traffic to scanning for vulnerabilities, I want to hone my skills using a bunch of different tools.

3.  **Make and Break Things**: There’s a certain joy in breaking things (ethically, of course). Here, I can mess up as much as I want without worrying about crashing my main system or losing important data.

4.  **Master the Tools**: I want to get comfy with essential tools like **Wireshark**, **Nmap**, **Burp Suite**, and **Splunk** because you can't call yourself a hacker if you can’t spell them right.

5.  **Network Analysis and SIEM Setup**: I want to understand what’s going on in the network and set up a Security Information and Event Management (SIEM) system because the buzzword game is strong.

## **Hardware Specs (No, It's Not a NASA Supercomputer)**

I'm using a **Dell Latitude E5470**—not a beast by any means, but it's a solid entry-level setup. Here’s the rundown:

| Component       | Specification                    |
|-----------------|----------------------------------|
| **RAM**         | 8 GB                             |
| **Storage**     | 256 GB SSD                       |
| **Processor**   | Intel Core i5-6300HQ @ 2.30GHz   |
| **GPU**         | Integrated Graphics              |

### **Why This Hardware?**  
Honestly, it’s what I have lying around, and it’s a decent entry-level setup. It won’t run a hundred VMs or let me host a LAN party, but it’ll handle a few virtual machines and some light tool use.
Also, fun fact: If I try running Windows alongside a few VMs and Splunk, I’m pretty sure my laptop would just give up and burst into flames. That’s why I’m sticking to something lightweight.

## **The Big Question: Why Kali Linux as My Base OS?**


I know, I know—most people use Windows as their main OS and then fire up Linux VMs when they need to. But I like to do things a little differently (because why be normal, right?). Here’s why I’m using  **Kali Linux**  as my base system:

1.  **Pre-installed Goodies**: Kali Linux comes with a ton of tools already installed. It’s like buying a car with all the mods done for you.
2.  **Designed for Hackers**: It’s built specifically for penetration testing, which is what I’m here for.
3.  **Less Resource Hogging**: Compared to Windows, Kali Linux doesn’t eat up as much RAM and CPU. With my 8 GB RAM setup, every byte counts.
4.  **Total Control**: Linux gives me more control over the system. And who doesn’t like control?

**Why Not Windows?**  
Simply put: my laptop would have a meltdown if I tried running Windows with heavy tools like Splunk and a bunch of VMs. So to save my laptop from becoming an expensive paperweight, I’m sticking with Linux.


## **Tools and Virtual Machines Am I Using?**

For this home lab, I’m setting up a few key virtual machines to simulate different environments and practice various cybersecurity techniques:

1. **Kali Linux**: The go-to for penetration testing. This will be my main attack machine.
2. **Metasploitable**: A vulnerable VM to practice exploitation and test attacks.
3. **pfSense**: A firewall and router VM to play with network configurations and practice defense.
4. **Windows 7**: Yep, you heard it right. I’m bringing out the old-school Windows 7. It might not have the fancy features of Windows 10, but hey, it's still a target and a good practice playground for basic exploits. Plus, Windows 10 or 11 would probably feel a bit too heavy for my system—Windows 7 is the lightweight champ!
5. **Splunk (on a separate VM)**: To practice SIEM and log management for monitoring network traffic.

Each VM will have a specific role, allowing me to simulate real-world networks and attacks in a safe and controlled environment. 

### **Other VMs and Tools**
As my lab evolves, I might add more virtual machines or tools depending on what I’m learning or experimenting with. So, if I decide to use anything new in the future, you’ll see it pop up in this journey.


## **Enter VirtualBox: The VM Manager**


Now, to run all my VMs, I’m using  **VirtualBox**  because it’s free, open-source, and doesn’t judge me for my poor laptop specs.

### **Why VirtualBox?**

-   **It’s Free**: My wallet is happier this way.
-   **Cross-Platform**: It works on Linux, Windows, and even macOS. (Not that I’d ever afford a Mac with my setup.)
-   **Snapshots**: I can take a snapshot, mess things up, and then roll back without a care in the world. It’s like a save point in a video game.

### **How to Install VirtualBox on Kali Linux**

Here’s a quick setup guide to get you started:

```bash
sudo apt update
sudo apt install virtualbox
```


### **Pre-Configuring VirtualBox: Key Settings**

Before diving into the world of VMs, make sure to adjust a few settings:

1. **Enable Host I/O Cache**:
   - Navigate to **Preferences > Disk I/O** and turn on **Enable Host I/O Cache**.
2. **Network Setup**:
   - Opt for **Bridged Networking** to give your VMs internet access.
3. **Memory Allocation**:
   - Allocate around **2 GB of RAM** per VM for optimal performance.

### **Guest Additions Setup**  
1. Load the VM, then go to **Devices > Insert Guest Additions CD Image**.
2. Run the following command:

```bash
sudo sh /media/cdrom/VBoxLinuxAdditions.run
```

This step enhances the VM experience by providing better performance and seamless integration.

## **Wrapping It Up**

And that's it for the intro! With the basics set up, we’re ready to roll into the **fun stuff**—installing our first VMs and diving into tools like **Metasploitable**, **pfSense**, and **Splunk**.

> Stay tuned for the next chapter where we’ll set up our first vulnerable VM and start exploring the dark (ethical) arts of penetration testing!

