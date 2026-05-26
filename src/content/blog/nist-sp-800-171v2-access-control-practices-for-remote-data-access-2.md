---
title: "How to Meet NIST SP-800-171v2 Access Control Practices"
seoTitle: "How to Meet NIST SP-800-171v2 Access Control Practices"
description: "The Zero Trust Data Access architecture of FileFlex Enterprise can greatly aid in compliance with NIST access control requirements as outlined in SP-800-171v2 for remote access and sharing."
excerpt: "The Zero Trust Data Access architecture of FileFlex Enterprise can greatly aid in compliance with NIST access control requirements as outlined in SP-800-171v2 for remote access and sharing."
date: 2021-07-19
modified: 2021-07-19
author: "Jacob Williams"
featuredImage: "/images/blog/nist-sp-800-171v2-access-control-practices-for-remote-data-access-2/iStock-502806184-e1678994380758.webp"
featuredImageAlt: "How to Meet NIST SP-800-171v2 Access Control Practices"
readingTime: "12 min read"
categories:
  - "Compliance"
  - "NIST"
  - "Zero Trust"
tags: []
toc: true
tables:
  - id: "table1"
    headers:
      - "NIST SP  800-172v2"
      - "Section Summary"
      - "Support Compliance?"
      - "How FileFlex Helps With Compliance"
    rows:
      - ["3.1.1", "Limit system access to authorized users, processes acting on behalf of authorized users, and devices (including other systems).", "Yes Supports Compliance", "FileFlex delivers this requirement within its secure ZTDA platform down to the file & folder level micro-segmentation. Users are bound to accounts, accounts are authorized and managed by administration for all data access controls. Connector Agents installed within any secure, firewalled environment act on behalf of its authorized users."]
      - ["3.1.2", "Limit system access to the types of transactions and functions that authorized users are permitted to execute.", "Yes Supports Compliance", "FileFlex administration can manage the data access privileges for every user or user group they assign content repositories to. This includes all File Management privileges and functions."]
      - ["3.1.3", "Control the flow of CUI in accordance with approved authorizations.", "Yes Supports Compliance", "Flow control restrictions include: / / Keeping export-controlled information from being transmitted in the clear to the Internet: / / FileFlex provides encryption of data in motion in 3 ways: / 1. Encrypted Micro-tunnels (per transfer) / 2. Data Encryption (before entering micro-tunnel) / 3. Intel SGX Hardening (chip to chip encryption), / / Blocking outside traffic that claims to be from within the organization: / FileFlex provides a secure, controlled environment for users to facilitate their data access requirements. Every user interaction flows through the Fileflex Policy Server for authentication, access and permissions. / / Restricting requests to the Internet that are not from the internal web proxy server: / FileFlex can be configured to work with internal web proxy servers and function as such. / / Limiting information transfers between organizations based on data structures and content. - Out of scope / / Organizations commonly use flow control policies and enforcement mechanisms to control the flow of information between designated sources and destinations (e.g., networks, individuals, and devices) within systems and between interconnected systems. / Varying deployment models of Fileflex allow for flow control requirements to be met in dynamic landscapes."]
      - ["3.1.4", "Separate the duties of individuals to reduce the risk of malevolent activity without collusion.", "Yes Supports Compliance", "From within Fileflex, both the duties of end-users and administrators are separated based on the role assigned and user type."]
      - ["3.1.5", "Employ the principle of least privilege, including for specific security functions and privileged accounts.", "Yes Supports Compliance", "FileFlex uses least privilege access on all accounts. Privileges can be managed on all accounts individually or by group."]
      - ["3.1.6", "Use non-privileged accounts or roles when accessing nonsecurity functions.", "Yes Supports Compliance", "Regarding data access functions, role-based access control governs privileged vs. non-privileged access. / / Otherwise out of scope."]
      - ["3.1.7", "Prevent non-privileged users from executing privileged functions and capture the execution of such functions in audit logs.", "Yes Supports Compliance", "Non-privileged accounts cannot execute privileged functions within the FileFlex system. / All individual user functions are logged within FileFlex."]
      - ["3.1.8", "Limit unsuccessful login attempts.", "Not Supported", "Available in a future update coming soon."]
      - ["3.1.9", "Provide privacy and security notices consistent with applicable CUI rules.", "Yes Supports Compliance", "Privacy and security notices can be displayed as the user logs into their account. Two-factor authentication can also be implemented for additional security notification functions."]
      - ["3.1.10", "Use session lock with pattern-hiding displays to prevent access and viewing of data after a period of inactivity.", "Yes Supports Compliance", "The FileFlex interface utilizes session lock security that is enabled after a period of inactivity."]
      - ["3.1.11", "Terminate (automatically) a user session after a defined condition.", "Yes Supports Compliance", "Device access and Bandwidth controls, once set will automatically terminate the session and, or data access."]
      - ["3.1.12", "Monitor and control remote access sessions.", "Yes Supports Compliance", "All FileFlex remote access sessions are logged and tracked for monitoring purposes down to the user. / / All remote access sessions are controlled through administration. / / Local connector agents act on behalf of remote access sessions, keeping remote connectivity at bay."]
      - ["3.1.13", "Employ cryptographic mechanisms to protect the confidentiality of remote access sessions.", "Yes Supports Compliance", "All sessions are double encrypted from end to end using encrypted micro tunnels for communication and transfer. / / Intel SGX integration utilizes secure enclaves within the chipset itself, for encryption key generation providing even further levels of cryptography at the deepest level – within the silicon itself."]
      - ["3.1.14", "Route remote access via managed access control points.", "Yes Supports Compliance", "All FileFlex transmissions flow through the FileFlex Policy server for authentication, permission, monitoring and Zero Trust operational purposes, for every single transaction."]
      - ["3.1.15", "Authorize remote execution of privileged commands and remote access to security-relevant information.", "Yes Supports Compliance", "Fileflex authorizes users to be able to execute privileged commands and facilitates remote access to data of any type or classification."]
      - ["3.1.16", "Authorize wireless access prior to allowing such connections.", "N/A", "Not Applicable"]
      - ["3.1.17", "Protect wireless access using authentication and encryption.", "N/A", "Not Applicable"]
      - ["3.1.18", "Control connection of mobile devices.", "Yes Supports Compliance", "FileFlex supports mobile device connection control. / / Permit-by-exception device whitelisting, controlling and validating all device connections. / / Any device not implicitly allowed in the device control access list will not be granted access."]
      - ["3.1.19", "Encrypt CUI on mobile devices and mobile computing platforms.", "Yes Supports Compliance", "FileFlex encrypts all CUI during transit and enables access to CUI without having to move it from its source location. If data is downloaded using FileFlex enterprise to a user’s device, that data is will remain with whatever encryption it pre-existed with. / / Otherwise: Out of scope."]
      - ["3.1.20", "Verify and control/limit connections to and use of external systems.", "Yes Supports Compliance", "Every connection whether internal or external is always verified through the user's account login, prior to the access of the FileFlex system. Connections are account-based and limited to one connection per account at any given moment in time."]
      - ["3.1.21", "Limit the use of portable storage devices on external systems.", "Out of Scope", "Portable storage devices are not accessible through a FileFlex enterprise system."]
      - ["3.1.22", "Control CUI posted or processed on publicly accessible systems.", "Partial Compliance", "FileFlex provides ultra-secure, zero trust access to any data it is set up to interact with, from within the FileFlex system itself. It can be set to never allow download or upload of data if required. / / Otherwise: Out of scope."]
---

## What is NIST SP-800-171?

The National Institute of Standards and Technology (NIST) has put together a unified standard (NIST SP 800-171) to better defend the vast attack surface of the federal government supply chain.  It provides federal agencies recommended security requirements to be applied to their contractors for the protection of confidential information (Controlled Unclassified Information or CUI) located and transmitted by those contractors. The security guidelines outlined in NIST SP-800-171 are intended for use by federal agencies in their agreements with contractors and other non-federal organizations.

## How FileFlex Enterprise Meets NIST Access Control Requirements for Remote Data Access

This blog looks at FileFlex Enterprise and shows how it meets the published best “Access Control” practices for remote data access outlined in NIST SP-800-171v2.

<!-- table:table1 -->

### More

For more reading on zero trust and zero trust data access see “[How FileFlex Enterprise Helps DoD Contractors Meet CMMC Best Practices for Access Control](/blog/how-fileflex-enterprise-helps-dod-contractors-meet-cmmc-best-practices-for-access-control/)” “[How to Meet NIST Guidelines for Zero Trust for Remote Data Access](/blog/nist-guidelines-for-zero-trust-and-meeting-them-for-remote-data-access/)“, “[Why Zero Trust and Why Now?](/blog/why-zero-trust-and-why-now/)“, and “[How to Protect Your Data With Zero Trust Data Access](/blog/how-to-protect-your-data-with-zero-trust-data-access-ztda/)“.  For more information on CMMC go to [https://cmmcab.org/](https://cmmcab.org/)

[Learn More About FileFlex](/) · [Sign Up for a Free Trial](https://fileflex.com/fileflex-enterprise/try-plus/)
