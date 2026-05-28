---
title: "How to Use Zero Trust to Meet CMMC Access Control Practice"
seoTitle: "How to Use Zero Trust to Meet CMMC Access Control Practice"
description: "The Zero Trust Data Access architecture of FileFlex Enterprise can greatly aid in compliance with CMMC requirements and provides remote access and sharing to the entire company-owned storage infrastructure and puts it under IT control."
excerpt: "The Zero Trust Data Access architecture of FileFlex Enterprise can greatly aid in compliance with CMMC requirements and provides remote access and sharing to the entire company-owned storage infrastructure and puts it under IT control."
date: 2021-05-18
modified: 2021-05-18
author: "Jacob Williams"
featuredImage: "/images/blog/how-fileflex-enterprise-helps-dod-contractors-meet-cmmc-best-practices-for-access-control/iStock-1158791540-e1678995967398.webp"
featuredImageAlt: "How to Use Zero Trust to Meet CMMC Access Control Practice"
readingTime: "13 min read"
categories:
  - "Compliance"
  - "CMMC"
  - "Zero Trust"
tags: []
toc: true
tables:
  - id: "table1"
    headers:
      - "CMMC Practice"
      - "CMMC Best Practice Description"
      - "Support Compliance?"
      - "How FileFlex Helps With Compliance"
    rows:
      - ["AC. 1.001", "Limit information system access to authorized users, processes acting on behalf of authorized users, or devices (including other information systems).", "Yes Supports Compliance", "The FileFlex solution enforces strict access controls to protect all content, including CUI, to only be accessible to authenticated users, and file management processes acting on behalf of authorized users."]
      - ["AC. 1.002", "Limit information system access to the types of transactions and functions that authorized users are permitted to execute.", "Yes Supports Compliance", "The FileFlex solution enforces strict access control for authorized users based on permissions set by administrators or content owners. Authorized data transactions and functions set by administrators and content owners include view only, edit, print, copy, move, download, or access denied."]
      - ["AC. 1.003", "Verify and control/limit connections to and use of external information systems.", "Yes Supports Compliance", "The FileFlex platform provides the administrator the ability to control access to cloud enterprise content management systems like AWS, Azure, Google Drive, Box, Dropbox, Microsoft OneDrive & SharePoint Online. Connections are all account-based."]
      - ["AC. 1.004", "Control information posted or processed on publicly accessible information systems.", "Yes Supports Compliance", "The FileFlex platform supports similar access control over data posted in a public cloud enterprise content management system such as AWS, Azure, Google Drive, Box, Dropbox, Microsoft OneDrive & SharePoint Online as it does on internal corporate systems."]
  - id: "table2"
    headers:
      - "CMMC Practice"
      - "CMMC Best Practice Description"
      - "Support Compliance?"
      - "How FileFlex Helps With Compliance"
    rows:
      - ["AC. 2.005", "Provide privacy and security notices consistent with applicable CUI rules.", "Yes Supports Compliance", "The FileFlex platform can be customized to display privacy and security notices required by an organization."]
      - ["AC. 2.006", "Limit the use of portable storage devices on external systems.", "Out of Scope", "N/A"]
      - ["AC. 2.007", "Employ the principle of least privilege, including for specific security functions and privileged accounts.", "Yes Supports Compliance", "FileFlex supports a range of user roles and access privileges. When users are assigned to multiple groups with group privileges, the system employs and enforces the principle of least privilege to determine individual user access rights."]
      - ["AC. 2.008", "Use non-privileged accounts or roles when accessing non-security functions.", "Yes Supports Compliance", "FileFlex prevents nonprivileged users from executing administrative functions. Administrators must be in dedicated administrative groups. User accounts belonging to administrative groups are strictly limited to admin and security functions and are restricted from accessing regular data. Only non-privileged accounts can access regular data and non-security functions."]
      - ["AC. 2.009", "Limit unsuccessful logon attempts", "Not Supported", "Currently not a supported feature, but it will be in the near future."]
      - ["AC. 2.010", "Use session lock with pattern hiding displays to prevent access and viewing of data after a period of inactivity.", "Yes Supports Compliance", "FileFlex utilizes session lock security on all of its components and consoles, web, client, and server-side."]
      - ["AC. 2.013", "Monitor and control remote access sessions.", "Yes Supports Compliance", "All FileFlex remote access sessions are logged and tracked for monitoring purposes down to the user. All remote access sessions are also completely controlled through administration configuration. Local connector agents act on behalf of remote access sessions."]
      - ["AC. 2.015", "Route remote access via managed access control points.", "Yes Supports Compliance", "All remote access is routed through static routes established within the FileFlex system. Remote access is first routed to the Policy Server for account and access verification, then the Policy Server routes the traffic to the appropriate connector agent that interacts on behalf of the user to interact with the data."]
      - ["AC.2.016", "Control the flow of CUI in accordance with approved authorizations.", "Yes Supports Compliance", "Administrators and content owners can manage sharing privileges and ensure that non-authorized users do not gain access to CUI. FileFlex system allows for the routing of all content through the policy server for security and monitoring purposes, ensuring that CUI is not accidentally distributed to unauthorized users."]
  - id: "table3"
    headers:
      - "CMMC Practice"
      - "CMMC Best Practice Description"
      - "Support Compliance?"
      - "How FileFlex Helps With Compliance"
    rows:
      - ["AC.3.012", "Protect wireless access using authentication and encryption.", "Yes Supports Compliance", "The FileFlex platform uses authentication and encryption regardless of the transport mechanism, protecting both wired and wireless access."]
      - ["AC.3.014", "Employ cryptographic mechanisms to protect the confidentiality of remote access sessions.", "Yes Supports Compliance", "FileFlex encrypts every session using AES-256 encryption tunnels that are established with each and every file fetch request. File transfer and communication channels are separated in their own encrypted tunnels."]
      - ["AC.3.017", "Separate the duties of individuals to reduce the risk of malevolent activity without collusion.", "Yes Supports Compliance", "FileFlex divides the administrative roles to promote security as well as limit access by roles. There is a Server Admin function that manages the health of the server from a HW OS and overall system operation level. This function does not administer users/groups or data access. There is a separate user admin account function dedicated to the administration of users/groups/rights/privileges and data access control. The User Admin can set up further local administrators that have limited admin management capabilities over local users/groups/privileges and data. The system strictly guards against admin privilege elevation. Access is limited and restricted by function"]
      - ["AC.3.018", "Prevent non-privileged users from executing privileged functions and capture the execution of such functions in audit logs", "Yes Supports Compliance", "FileFlex enables administrators to define different types of accounts and access privileges, ensuring that nonprivileged users never access privileged content or controls. The system strictly prevents non-privileged accounts to access or execute non-privileged functions. The system also strictly regulates and prevents privilege escalation by any accounts including limited Admin accounts. All actions and activities are recorded in activity logs for audit."]
      - ["AC.3.019", "Terminate (automatically) user sessions after a defined condition.", "Yes Supports Compliance", "FileFlex automatically logs users out after a set amount of idle time. System administrators can monitor and manually terminate active sessions."]
      - ["AC.3.020", "Control connection of mobile devices.", "Yes Supports Compliance", "FileFlex administration enables and disables access from the FileFlex system by device ID. System administrators can also manage and terminate user sessions. If a mobile device is lost or stolen, system administrators can disable its ability to use FileFlex."]
      - ["AC.3.021", "Authorize remote execution of privileged commands and remote access to security-relevant information.", "Yes Supports Compliance", "FileFlex provides a separate administrative interface that requires authentication and provides its own access restrictions. This interface can be accessed remotely for Server administration as well as User administration to perform management and access security functions."]
      - ["AC.3.022", "Encrypt CUI on mobile devices and mobile computing platforms", "Out of Scope", "N/A"]
  - id: "table4"
    headers:
      - "CMMC Practice"
      - "CMMC Best Practice Description"
      - "Support Compliance?"
      - "How FileFlex Helps With Compliance"
    rows:
      - ["AC.4.023", "Control information flows between security domains on connected systems.", "Out of Scope", "N/A"]
      - ["AC.4.025", "Periodically review and update CUI program access permissions.", "Out of Scope", "N/A"]
      - ["AC.4.032", "Restrict remote network access based on organizationally defined risk factors such as time of day, location of access, physical location, network connection state, and measured properties of the current user and role.", "Supports Partial Compliance", "FileFlex can restrict access to the data within a network based on device type, current role, and set privileges."]
      - ["AC.5.024", "Identify and mitigate risk associated with unidentified wireless access points connected to the network.", "Out of Scope", "N/A"]
---

## Understanding CMMC

### What is the Cybersecurity Maturity Model of Certification?

The Cybersecurity Maturity Model Certification (CMMC) is the Department of Defense’s (DoD’s) response to compromises to defense information held or processed by their contractors.  It is a unified standard to better defend the vast attack surface of their supply chain, implement cybersecurity and better secure sensitive information located with their contractors.

### CMMC Certification Levels

It establishes five certification levels each with a set of supporting practices and processes that range from Level 1 basic cybersecurity hygiene such as using antivirus software and changing employee passwords regularly to Level 5 standardized and optimized processes in place with sophisticated capabilities to detect and respond to Advanced Persistent Threats (APTs).

### How is CMMC Structured?

The CMMC framework categorizes 173 cybersecurity best practices into 17 broad domains such as ‘Access Control” and “Systems and Communications Protection”.   These include 43 distinct capabilities such as remote system access and are mapped across the 5 cybersecurity certification levels.

This blog looks at FileFlex Enterprise and shows how it meets the published best “Access Control” practices for remote data access.

## How FileFlex Enterprise Aids CMMC Access Control Requirements for Remote Data Access

### C001 – Establish System Access Requirements.

<!-- table:table1 -->

### C002 – Control Internal System Access

<!-- table:table2 -->

### **C003** – Control Remote System Access.

<!-- table:table3 -->

### **C004** – Limit Data Access to Authorized Users and Processes.

<!-- table:table4 -->

### More

For more reading on zero trust and zero trust data access see “[How to Meet NIST Guidelines for Zero Trust for Remote Data Access](/blog/nist-guidelines-for-zero-trust-and-meeting-them-for-remote-data-access/)“, “[Why Zero Trust and Why Now?](/blog/why-zero-trust-and-why-now/)“, and “[How to Protect Your Data With Zero Trust Data Access](/blog/how-to-protect-your-data-with-zero-trust-data-access-ztda/)“.  For more information on CMMC go to [https://cmmcab.org/](https://cmmcab.org/)

[Learn More About FileFlex](/) · [Sign Up for a Free Trial](/try-fileflex/)
