---
title: "Network Access Secure and Controlled via Zero Trust Data Access"
seoTitle: "Network Access Secure and Controlled via Zero Trust Data Access"
description: "Network access to unstructured data using Zero Trust Data Access (ZTDA) brings an organization control and protection over who can access, view, edit, collaborate and share confidential documents. In addition to FileFlex being used for remote data access, it is also an excellent solution for businesses that require secure internal network access to unstructured data."
excerpt: "Network access to unstructured data using Zero Trust Data Access (ZTDA) brings an organization control and protection over who can access, view, edit, collaborate and share confidential documents. In addition to FileFlex being used for remote data access, it is also an excellent solution for businesses that require secure internal network access to unstructured data."
date: 2023-05-12
modified: 2023-05-12
author: "Tom Ward"
featuredImage: "/images/blog/network-access-secure-and-controlled-via-zero-trust-data-access/FF-network-access-blog-cover-pic.webp"
featuredImageAlt: "Network Access Secure and Controlled via Zero Trust Data Access"
readingTime: "6 min read"
categories:
  - "Critical Infrastructure Protection"
  - "Network Access"
  - "Zero Trust Data Access"
tags: []
toc: true
---

![More than half of organizations have experienced an insider threat in the last year, and 8% have experienced more than 20](/images/blog/network-access-secure-and-controlled-via-zero-trust-data-access/Insider-threat-infographic-small.webp) In today’s digital world, businesses generate and store vast amounts of data. As the volume of data grows, so does the need for secure, controlled network access to unstructured data. One way to achieve this is through the use of zero-trust data access (ZTDA) architecture. ZTDA is a security model that verifies every user before granting access to unstructured data.

FileFlex is a ZTDA system that can be used internally to facilitate network access to unstructured data while keeping users and data separate from one another. FileFlex provides network access only through the ZTDA architecture, which means that only authorized users can access specific data. This article discusses how FileFlex can be used internally to connect users with network data while maintaining security and control.

## Requirements for Using FileFlex for Network Access to Unstructured Data
To use FileFlex for network access to data, the following requirements must be met:

1.  A FileFlex VM server must be deployed within a network or designated VLAN.
2.  Users, FileFlex connector agents and the data must all be within the same network.
3.  Proper internal LAN routing is in place and set up to keep all user and connector agent traffic within the network.

Once these requirements are met, FileFlex can act as an intermediary to provide local users access to data that exists within different VLANs, domains or segments of the same LAN.

## Using FileFlex for Internal Network Access to Files and Folders
![Network Access architecture](/images/blog/network-access-secure-and-controlled-via-zero-trust-data-access/Network-access-architecture-1.webp)

Diagram 1 Using FileFlex for Network Access

If an organization’s network has one or more designated user VLANs to isolate traffic, increase security, segregate users, and control access to internal resources, and that same network has dedicated VLANs in place to secure valuable internal resources such as data, servers, equipment/machinery, phones, security systems, etc., then FileFlex can be used as an internal ZTDA system to connect users to their data (files & folders) over a network without enabling the routing or inter-VLAN communication otherwise required to access the data VLANs themselves, and without exposing the IP and hostname information of the equipment (servers, NAS or SAN appliance) where the data resides.

Today, networks may be using access control lists (ACLs) to achieve this if they are separating their LAN into VLANs. These ACLs commonly allow specific devices or ranges from one VLAN (by IP) to access specific devices on another VLAN (by IP). Using FileFlex, you can refine the level of access, providing micros-segmented access to subfolders of servers or storage appliances, without exposing them, abstracting the servers or appliances from the user. This approach keeps users off the data VLANs altogether, while tracking and controlling every individual’s level of access.

### FileFlex offers several benefits for internal network access:
### 1\. Granular Access Control:
![74% of organizations say they are at least moderately vulnerable or worse to insider threats](/images/blog/network-access-secure-and-controlled-via-zero-trust-data-access/Insider-threat-infographic-grey.webp)

-   FileFlex offers granular access control, allowing businesses to refine the level of access that users have to data. This level of control is known as micro-segmentation and ensures that users only access the data they need.

### 2\. Subfolder Access:
-   FileFlex allows access to subfolders of servers or storage appliances, not the entire device. This reduces the risk of unauthorized access to other data on the same device.

### 3\. Hidden Servers and Appliances:
-   FileFlex keeps the servers or appliances hidden from the user, preventing access to IP addresses and hostnames. This adds an extra layer of security to the data.

### **4\. No Access to Data VLANs**:

-   FileFlex keeps the users off the data VLANs, preventing unauthorized access to the data.

### **5\. Activity Tracking and Control**:

-   Since all file access actions must now be verified and authorized by the FileFlex server, FileFlex tracks and controls user access, providing detailed activity logs to monitor and control access to data. This activity log can be exported to SIEM software to help detect internal malicious behavior, and ransomware and aid in forensic investigation.

It is important to note here that you also need to restrict access to internal data via other means, such as network segmentation, access control lists (ACLs), file system permissions, SharePoint permissions, Cloud storage access control and Privileged Access Management (PAM). Remember, implementing these methods of restricting internal access should be done per your organization’s security policies and industry best practices. It’s advisable to consult with IT security professionals to ensure proper configuration and adherence to applicable regulations.

## Conclusion
In addition to FileFlex being used for remote data access, FileFlex is an excellent solution for businesses that want to secure internal network access to unstructured data. By installing FileFlex and restricting users’ access to internal data by other means, IT can provide secure and controlled internal access to corporate data and by using FileFlex as an internal network ZTDA system, users continue with the Windows operating system or any Windows app with no changes in workflow and organizations control internal user access to unstructured data over the network, while keeping track of activities, all with the highest levels of security.

To learn more, check out our other blogs – [Why Your Zero Trust Security Model Must Include Zero Trust Data Access (ZTDA)](/blog/zero-trust-security-model-must-include-zero-trust-data-access-ztda/), [What is Zero Trust Data Access (ZTDA)?](/blog/what-is-zero-trust-data-access-ztda/), and [Critical Infrastructure Management Over Remote Access and Sharing Using Zero Trust Architecture.](/blog/critical-infrastructure-it-control-use-over-remote-access-and-sharing-using-zero-trust-architecture/)

Infographic Reference: [Cybersecurity Insiders 2023 INSIDER THREAT REPORT](https://www.cybersecurity-insiders.com/portfolio/2023-insider-threat-report-gurucul/)

[Learn More About FileFlex](/) · [Sign Up for a Free Trial](https://fileflex.com/fileflex-enterprise/try-plus/)
