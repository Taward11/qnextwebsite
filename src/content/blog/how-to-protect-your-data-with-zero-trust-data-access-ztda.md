---
title: "How to Protect Your Data with Zero Trust Data Access (ZTDA)"
seoTitle: "How to Protect Your Data with Zero Trust Data Access (ZTDA)"
description: "Implementing a Zero Trust Network Access platform and/or a Zero Trust Application Access platform is a good start, but ultimately is not enough. Zero Trust Data Access fills the missing piece to protect the organization’s most valuable asset – its data."
excerpt: "Implementing a Zero Trust Network Access platform and/or a Zero Trust Application Access platform is a good start, but ultimately is not enough. Zero Trust Data Access fills the missing piece to protect the organization’s most valuable asset – its data."
date: 2020-07-31
modified: 2020-07-31
author: "Tom Ward"
featuredImage: "/images/blog/how-to-protect-your-data-with-zero-trust-data-access-ztda/Zero-Trust-Data-Access-title.jpg-e1666208546759.webp"
featuredImageAlt: "How to Protect Your Data with Zero Trust Data Access (ZTDA)"
readingTime: "7 min read"
categories:
  - "Zero Trust"
  - "Zero Trust Data Access"
tags: []
toc: true
---

With the rise of the remote workforce, the use of cloud storage, utilization of cloud-hosted and hybrid-IT infrastructure, defending the network perimeter, and focusing security on the prevention of malware is inadequate against today’s malicious attacks. Once an adversary gets behind your firewall through a spear-phishing attack or by a VPN exploit, they can and do put ransomware on your servers or they exfiltrate confidential and personal data of your business and customer base. Focusing security on preventing threats is not 100% because there is always someone who will find a new exploit or hole in your defenses. Today, this threat-centric approach is being rapidly replaced by a trust-centric paradigm or zero-trust.

## What is Zero Trust
Zero trust is an approach that always authenticates and always verifies all transactions all the time with a “never trust, always verify” model. In this model, no one is trusted – even people who are behind the firewall on your network.

Zero trust is based on 3 pillars – it is trust centric, transaction-based, and dynamic.

### Zero Trust is trust centric
Traditionally, defenses are focusing on securing the perimeter against threats. It depends on the use of firewalls, anti-virus software, and the update and maintenance of VPNs and operating systems. The problem is that organizations now have data that is outside of that perimeter on the cloud-hosted platforms of third parties, and adversaries are both constantly finding exploits to the VPN and the OS and tricking users to give up credentials in order to get behind the firewall. Zero trust, as opposed to granting or restricting access to the network, is focused on granting or restricting access to data. It is a trust-centric approach vs a threat-centric one.

### Zero Trust is transaction-based
Once authorized, traditional defenses then essentially allow access to the network and are not bound by time constraints. Zero trust on the other hand verifies every user, every device, and every app for every transaction. Again, simply because you are on the network behind the firewall does not mean you are not an adversary. Instead, zero trust is transaction centric.

### Zero Trust is dynamic and granular
Today our defenses are pretty broad-based and static. Large groups of people essentially have the same rights and access which remains essentially unchanged.   Zero trust, on the other hand, uses granular-based policies constructed on who the user is, what device they are using, and the content they are accessing that change and adapt on a transaction-by-transaction basis.  Zero trust is not static – it is dynamic and granular – even to the user, file, and device level.

## How is Zero Trust Applied
Ok – if you have read this far, then you have a good high-level background on what zero trust is and why you need it. But how do you apply that to your organization? In order to protect your entire organization’s hybrid-IT infrastructure, zero trust needs to be applied to network access, application access, and data access. You will need to deploy a Zero Trust Network Access (ZTNA) solution, a Zero Trust Application Access (ZTAA) solution, and a Zero Trust Data Access (ZTDA) solution.

**![](/images/blog/how-to-protect-your-data-with-zero-trust-data-access-ztda/ZTDA-Chart.webp)**

### What is Zero Trust Network Access (ZTNA)
Zero Trust Network Access or ZTNA products secure the user-to-network connection. It is an evolution of the software-defined perimeter (SDP) which denies access by default and works to open access incrementally. The ZTNA delivers security based on the user—not IP address—regardless of location and device. All access is contextual making the internet the new corporate network.

### What is Zero Trust Application Access (ZTAA)
Zero Trust Application Access is essentially a micro-segmentation of ZTNA where end-to-end encrypted micro-tunnels create a secure connection between a user and an application. With ZTAA, all users are untrusted and access to applications is only permitted via a broker (bank teller) after verification and authorization.

### What is Zero Trust Data Access (ZTDA)
Zero Trust Data Access is essentially a micro-segmentation of ZTAA where end-to-end encrypted micro-tunnels create a secure connection between a user and their data. Security is focused on granting and restricting access to data. All attempts to access data are untrusted and access is permitted only via a broker after verification and authorization of every user and every access.

### Protecting the Entire Organization
The crown jewel of any organization is its data. This could be data about its customers like names and passwords, data about its intellectual property, or data around operations. This data is the true value to most organizations. It thus stands to reason that the prime target of a malicious attacker is either to exfiltrate that data or to deny an organization access to its own data. Implementing a Zero Trust Network Access platform and/or a Zero Trust Application Access platform is a good start, but ultimately is not enough. Zero Trust Data Access fills the missing piece to protect the organization’s most valuable asset – its data.

## FileFlex Enterprise Zero Trust Data Access (ZTDA) Platform
FileFlex Enterprise is a Zero Trust Data Access (ZTDA) platform for remote access and sharing of on-premises, cloud-hosted and SharePoint storage. It provides secure hybrid-IT data access and sharing. FileFlex augments traditional perimeter-based security by always authenticating and always verifying all transactions all the time with a “never trust, always verify” model where access to data is secured and controlled through a zero-trust platform. FileFlex Enterprise abstracts the infrastructure from shared information providing secure data access as granular as a single file and protecting against unauthorized access to the organization’s infrastructure.

### The Secure Zero Trust Data Access (ZTDA) Processes of FileFlex Enterprise
The architecture of FileFlex functions using a set of secure zero trust processes to protect how it accesses secures and transmits data. These include processes for user authentication, secure data transmission, accessing data, protecting credentials, use of anonymous tokens, request management, and permission management.

### Examples of FileFlex Zero Trust Data Access Processes
For example, because users are authenticated, FileFlex Enterprise provides organizations control over shared files. Sharing can be revoked at any time on an individual contact, user, or file-by-file basis. Double encryption ensures that the transmitted data is encrypted all the way through from sender to receiver and is never at rest or can be intercepted at the server level. Neither users nor the FileFlex Enterprise server can access the storage infrastructure because like a bank teller, a connector agent fulfills each request. To protect user and device credentials, FileFlex Enterprise uses an exchange of anonymous secure tokens instead. When the secure data channel is established, it can only be established outbound from the connector agent and then only to the FileFlex Enterprise server that the connector knows the address to. FileFlex Enterprise is integrated into AD/LDAP and it supports universal two-factor authentication (U2F), single sign-on (SSO), device authentication, enforced password policies, and session timeout policies. Even administrators cannot use FileFlex to access any restricted information beyond what their own permission levels permit.

### Examples of FileFlex Zero Trust Data Access Granular Control
FileFlex Enterprise layers its zero trust security with a set of management tools for IT putting them in ultimate control over the security of information in the organization via the FileFlex Enterprise Server Management Console. The toolkit includes strong IT control over file access and sharing with the ability to monitor and enforce security controls and policies.

For example, the control panel works together with existing tools such as Single Sign-On (SSO), U2F, Active Directory, and LDAP. It is used to specify and enforce encryption policies which can be customized on a case-by-case basis. It can customize security levels for users on a user-by-user basis. It includes activity logging and includes tools to allow export or integration with 3rd party monitoring and incident management tools and uses the organization’s existing AV solution. The admin panel can also be used to prohibit sharing of select files, folders, or devices on an organizational basis, group basis, or a user-by-user basis. This is an ultimate IT control mechanism that allows remote access to PHI, PII, and sensitive data, but ensures that it stays in its source location and copies are not shared with anyone.

## Summary – How to Protect Your Data with Zero Trust Data Access
FileFlex Enterprise is the world’s first Zero Trust Data Access (ZTDA) solution. Because the platform was designed from the ground up to be zero trust compliant it applies zero trust security to all features – both present and future. It provides zero trust unified access to all locations of the hybrid IT infrastructure whether on-premises, cloud-hosted or SharePoint – no VPN required. It is the perfect tool for organizations that are moving their cyber-security paradigm from the traditional perimeter approach to the zero-trust model.

Watch the webinar

<div class="blog-prose__video"><iframe src="https://www.youtube-nocookie.com/embed/clBaM6iv4k8?rel=0&modestbranding=1" title="the Webinar" loading="lazy" allow="encrypted-media" allowfullscreen></iframe></div>

<p class="blog-prose__caption--center"><em>Watch — the Webinar</em></p>

[Learn More About FileFlex](/) · [Sign Up for a Free Trial](https://fileflex.com/fileflex-enterprise/try-plus/)
