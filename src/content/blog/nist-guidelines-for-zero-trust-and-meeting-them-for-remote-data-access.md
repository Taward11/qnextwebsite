---
title: "How to Meet NIST Guidelines for Zero Trust for Remote Data Access"
seoTitle: "How to Meet NIST Guidelines for Zero Trust for Remote Data Access"
description: "The National Institute of Standards and Technology (NIST) has produced NIST Special Publication 800-207 outlining Zero Trust principles and guidelines that can be used to reduce cyber risk. This blog summarizes these guidelines for you and then shows how FileFlex Enterprise adheres to NIST standards to enable easy and secure zero trust remote access and sharing of files and folders from your organization’s multi-domain hybrid-IT storage infrastructure."
excerpt: "The National Institute of Standards and Technology (NIST) has produced NIST Special Publication 800-207 outlining Zero Trust principles and guidelines that can be used to reduce cyber risk. This blog summarizes these guidelines for you and then shows how FileFlex Enterprise adheres to NIST standards to enable easy and secure zero trust remote access and sharing of files and folders from your organization’s multi-domain hybrid-IT storage infrastructure."
date: 2021-02-18
modified: 2021-02-18
author: "Tom Ward"
featuredImage: "/images/blog/nist-guidelines-for-zero-trust-and-meeting-them-for-remote-data-access/NIST-full-transparent.webp"
featuredImageAlt: "How to Meet NIST Guidelines for Zero Trust for Remote Data Access"
readingTime: "8 min read"
categories:
  - "Compliance"
  - "NIST"
  - "Zero Trust Data Access"
tags: []
toc: true
---

## What is NIST
NIST or the National Institute of Standards and Technology, part of the U.S. Department of Commerce, was established as a physical science laboratory to set standards for a wide range of technologies ranging from the smart electric power grid and electronic health records to atomic clocks, advanced nanomaterials, earthquake-resistant skyscrapers, global communication networks, computer chips, and cybersecurity.

### NIST and Cybersecurity
Their cybersecurity standards and best practices address interoperability, usability, and privacy and include the Computer Security Resource Center, the National Cybersecurity Center of Excellence, the National Initiative for Cybersecurity Education (NICE), and the Small Business Cybersecurity Center.  They have established standards and guidelines for cybersecurity, privacy, risk management, and information security including Zero Trust.

### How NIST Defines Zero Trust
NIST defines zero trust (ZT) as a term for an evolving set of tenants that move an organization’s cybersecurity from the existing paradigm based on a static, network-based perimeter to a new paradigm that focuses an organization’s cybersecurity on users, assets, and resources.

### How NIST Defines a Zero Trust Architecture
NIST defines a zero trust architecture (ZTA) as one that applies zero trust principles to infrastructure and workflows. First, it assumes that there is no implicit trust granted to users simply because they are on the network or VPN.  This is a response to today’s work environment where remote users need to access company assets over the Internet and their need to access cloud-based assets that are not located on the enterprise-owned network.   Second, it assumes that there is no implicit trust granted to computers, tablets, or smartphones based on company ownership.  This is in response to today’s bring-your-own-device (BYOD) workforce that often uses their own smartphones, tablets, and computers.

A zero trust architecture is not focused on protecting network segments (using firewalls, OS patches, and AV software, etc.) as the network location is no longer seen as the prime component of the security posture of the organization.  Instead, ZTA uses the user identity authorized and verified for every transaction against policy to protect resources such as assets, services, workflows, and network accounts.

### How NIST Defines the Goal of a Zero Trust Architecture
The goal, as defined by NIST, is to generate a zero trust architecture that prevents unauthorized access to data and makes access control enforcement as granular as possible.

## What are the NIST Guidelines for Zero Trust Architecture?
Instead of defining zero trust in terms of perimeters in some way, [NIST SP 800-207](https://www.nist.gov/publications/zero-trust-architecture) outlines the NIST standards for zero trust and defines Zero Trust Architecture (ZTA) in terms of the following basic tenets that should be adhered to and implemented:

### 1\. NIST guidelines for zero trust stipulate that all data sources and computing devices are considered resources.
-   This is to address any wrong assumption that an organization only needs to consider protecting company-owned devices. Organizations today need to be able to protect company information even when accessed via today’s bring-your-own-device (BYOD) use of smartphones, tablets, and computers privately owned by users.

### 2\. NIST guidelines for zero trust stipulate that all communication is secured regardless of network location.
-   Network location alone does not imply trust. Organizations need to protect information even if it is accessed over the Internet, or if it is located on cloud-based assets that are not located on the enterprise-owned network.

### 3\. Access to individual enterprise resources is granted on a per-session basis.
-   Every request and every requester need to be evaluated before the request is granted. The request needs to be granted with the least privileges needed to complete the task and once authorized the authorization does not automatically grant access to other resources.

### 4\. Access to resources is to be determined by dynamic policy.
-   This means that access policies can be assigned to a user, data asset, or application on a user-by-user, asset-by-asset, or application-by-application basis or mixture thereof. Least privilege principles are applied to restrict both visibility and accessibility.

### 5\. The enterprise monitors and measures the integrity and security posture of all owned and associated assets.
-   No asset is inherently trusted. The enterprise evaluates the security posture of the asset when evaluating a resource request and should apply patches/fixes as needed or deny service if the asset is subverted

### 6\. All resource authentication and authorization are dynamic and strictly enforced before access is allowed.
-   This is a constant cycle of authentication and authorization of the user identity for all user transactions and includes the use of multifactor authentication (MFA).

### 7\. The enterprise collects as much information as possible about the current state of assets, network infrastructure, and communications and uses it to improve its security posture.
-   Since ZTA authorizes and verifies all transactions, organizations should use that data to improve policy creation and enforcement.

**How [FileFlex Enterprise](/platform/) Meets NIST Guidelines for Zero Trust**

### 1\. FileFlex Enterprise Considers All Data Sources and Computing Devices as Resources.
-   FileFlex Enterprise protects access and sharing of all data sources on on-premises storage such as a server, server-attached and network-attached storage, cloud-hosted storage such as private clouds, public clouds, enterprise-grade clouds, and Infrastructure-as-a-Service providers such as Microsoft Azure, Google Cloud, and Amazon S3 as well as both self-hosted and Microsoft hosted implementations of SharePoint.
-   For organizations pursuing a zero trust infrastructure deployment, FileFlex Enterprise isolates and protects remote access to the crown jewel of any organization – its data. Remote data access is the missing piece of zero trust solutions today.
-   FileFlex Enterprise protects company information when accessed both from company-owned devices and even when accessed via today’s bring-your-own-device (BYOD) use of smartphones, tablets, and computers privately owned by users.

### 2\. FileFlex Enterprise Secures All Communications Regardless of Network Location
-   FileFlex Enterprise protects information when accessed over the Internet using a gated AES-encrypted hybrid point-to-point system regardless of whether it is located on-premises or on cloud-based assets that are not located on the enterprise-owned network.
-   No files are stored on the FileFlex Enterprise server thereby reducing the organization’s threat surface.
-   Encryption keys are not generated in system memory. They can either be generated in the included PKI server or they can be generated in the secure SGX enclaves of an Intel processor. This protects data transmission even on a system compromised by malware.
-   Optional double encryption ensures that the transmitted data is encrypted from sender to receiver (P2P) addressing threats such as man-in-the-middle; snooping and intercept.

### 3\. FileFlex Enterprise Grants Access to Enterprise Resources on a Per Session Basis
-   FileFlex Enterprise continually authenticates, verifies, and then grants access to information on a per-session basis via an exchange of anonymous secure tokens.
-   New encryption keys are generated for every session and tokens are available only per session. The use of tokens protects user and device credentials since they are not stored on the FileFlex Enterprise server, the service provider, or with Qnext.
-   Access to resources is granted only with the least privileges needed to complete the task. To prevent malicious lateral movement, once authorized the authorization does not automatically grant access to other resources.  Neither users nor the FileFlex Enterprise server can access the storage infrastructure. A connector agent fulfills the request, encrypts it, and sends it back to the user abstracted from the infrastructure.
-   Direct access to resources is not permitted. All access is via the connector agent which acts as a proxy for the user.

### 4\. FileFlex Enterprise Grants Access to Resources According to Dynamic Policy
-   IT administrators use the FileFlex Enterprise Management Console to set access and sharing policies that can be determined on a user-by-user or group-by-group basis with storage location, folder, or even file-level granularity.
-   FileFlex Enterprise minimizes the implicit trust zone to the smallest granular level of files and folders.
-   Administrators can make selected devices, folders, or files ‘view-only’ with downloading of shared content prohibited, or they can allow access only and prohibit sharing altogether.
-   Users can also set their sharing options so that downloading of shared content is not permitted.
-   Unauthorized copying of shared files can be prohibited by both users and administrators to maintain control over the privacy of files shared.

### 5\. FileFlex Enterprise Provides Detailed Activity Logging
-   FileFlex Enterprise monitors data access and sharing across all storage locations and logs all user and administrator activities – even for in-app activities via public clouds – for audit and regulatory compliance issues.
-   The activity log can be imported to the most popular risk management and SIEM systems using common import protocols.

### 6\. All resource authentication and authorization are dynamic and strictly enforced before access is allowed.
-   FileFlex Enterprise authenticates and verifies all users for all sessions and transactions.
-   Supports device authentication that when combined with login credentials can be used as an unobtrusive type of two-factor authentication. This helps protect against phishing as credentials are only accepted when sent in conjunction with the device fingerprint
-   Supports multi-factor and two-factor authentication and easy-to-use U2F device support using public key crypto that protects against phishing, session hijacking, man-in-the-middle, and malware attacks.
-   Supports Single Sign-On and SAML (Security Assertion Markup Language) open standard as well as the following custom versions from the following providers: OneLogin; Google; Microsoft Azure; HelloID; MiniOrange; Okta; TraitWare and SmartLogin.
-   Prohibits sharing to unauthenticated users. Sharing is done and consumed in the app using patented technology to authenticate users and does not permit open links that can be forwarded or shared on social media providing organizations control over shared files.
-   Restricts administrator access where even administrators cannot use FileFlex Enterprise to access any restricted information beyond what their permission levels permit. Also, all administrator activities are logged.
-   Supports integration with Lightweight Directory Access Protocol (LDAP) and Active Directory (AD) and Azure AD.
-   When a new user is added, they can automatically only access storage as allowed by Active Directory.
-   When a user is deleted from AD, they instantly lose access to any storage through FileFlex Enterprise, and all their file sharing is turned off reducing risks associated with timing delays or human error caused by having to manage the deletion as two separate actions in two separate systems.

### 7\. FileFlex Enterprise Supports Branch Offices, Satellite Locations, Datacenters, and Multiple Domains.
-   From a single-pane-of-glass, FileFlex Enterprise can access and share files and folders stored anywhere on a multi-domain infrastructure as permitted by IT from branch offices, satellite locations, and data centers.

### 8. FileFlex Enterprise Supports Secure Remote Access and Sharing of Contractors and Gig-Based Workers Controlled by IT.
-   FileFlex Enterprise provides secure access and sharing for the modern distributed workforce over the Internet that not only includes remote employees who work from home, but also contractors and gig-based workers. IT controls access and sharing permissions and storage access.

### 9\. FileFlex Enterprise Supports Collaboration with External Parties Controlled by IT.
-   FileFlex Enterprise provides collaborators to remotely edit and replace files including external parties. IT controls remote editing permissions and storage access.

For more reading on zero trust security, see our other blogs – [‘Why Zero Trust. Why Now?’](/blog/why-zero-trust-and-why-now/), ‘[How to Protect Your Data with Zero Trust Data Access](/blog/how-to-protect-your-data-with-zero-trust-data-access-ztda/)‘, and ‘[How to Enable Your Remote Workforce with Zero Trust by Design](/blog/enabling-your-remote-workforce-with-zero-trust-by-design-no-vpn/)‘.

### Watch the webinar

[![](/images/blog/nist-guidelines-for-zero-trust-and-meeting-them-for-remote-data-access/BrightTALK-Webinar-cover-for-NIST-webinar-640x360-2.webp)](https://youtu.be/_CAG_BcRxP8)

[Learn More About FileFlex](/) · [Sign Up for a Free Trial](/try-fileflex/)


---

<!-- AUTO-RELATED-READING -->
## Related Reading

- [How to Meet NIST SP-800-171v2 Access Control Practices](/blog/nist-sp-800-171v2-access-control-practices-for-remote-data-access-2/)
- [How to Use Zero Trust to Meet CMMC Access Control Practice](/blog/how-fileflex-enterprise-helps-dod-contractors-meet-cmmc-best-practices-for-access-control/)
- [Why Zero Trust and Why Now?](/blog/why-zero-trust-and-why-now/)
- [How to Enable Your Remote Workforce with Zero Trust-By-Design](/blog/enabling-your-remote-workforce-with-zero-trust-by-design-no-vpn/)
