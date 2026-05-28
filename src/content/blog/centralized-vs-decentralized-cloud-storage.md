---
title: "What is Centralized Cloud vs Decentralized Hybrid-IT?"
seoTitle: "What is Centralized Cloud vs Decentralized Hybrid-IT?"
description: "The FileFlex decentralized hybrid-IT zero-trust computing architecture differentiates it from the centralized model used by all other file remote access and sharing platforms. It improves the organization’s security posture, allows access to all storage, ensures privacy, keeps the management of organizational files under organizational control, accelerates compliance to privacy regulations such as GDPR and HIPAA, and leverages the organization’s existing storage infrastructure to produce a disruptive low-cost model that can be applied to all storage"
excerpt: "The FileFlex decentralized hybrid-IT zero-trust computing architecture differentiates it from the centralized model used by all other file remote access and sharing platforms. It improves the organization’s security posture, allows access to all storage, ensures privacy, keeps the management of organizational files under organizational control, accelerates compliance to privacy regulations such as GDPR and HIPAA, and leverages the organization’s existing storage infrastructure to produce a disruptive low-cost model that can be applied to all storage"
date: 2019-06-03
modified: 2019-06-03
author: "Tom Ward"
featuredImage: "/images/blog/centralized-vs-decentralized-cloud-storage/main-banner-different-e1666213497419.webp"
featuredImageAlt: "What is Centralized Cloud vs Decentralized Hybrid-IT?"
readingTime: "6 min read"
categories:
  - "Hybrid IT"
  - "Cloud Storage"
tags: []
toc: true
---

## What is Centralized Cloud vs Decentralized Hybrid-IT?

The most common question we get is how FileFlex Enterprise compares to various cloud storage services. Maybe you have this same question.

### Which cloud storage options use the centralized cloud model

All cloud storage options, no matter who they are, use the same basic architecture.  They all sync or copy to a centralized cloud server cluster.  FileFlex, on the other hand, uses a decentralized hybrid-IT architecture.  No files are stored on our servers.  Instead, we use the storage and CPU power of existing client devices. Our server acts like a switchboard to connect users to their own storage.

### FileFlex Enterprise uses the decentralized hybrid-IT model

The FileFlex decentralized hybrid-IT architecture differentiates it from other file remote access and sharing platforms. Their dependence to duplicate and sync data to a central server cluster has resulted in compromises and issues such as an increased risk posture, privacy compromise, fragmented data, the need to manage limited subsets, technical complexity, and high cost. Because of the tremendous productivity benefits the centralized structure offers, the market has accepted these compromises. However, the decentralized hybrid-IT architecture of FileFlex allows it to address the compromises and issues inherent to traditional cloud storage solutions at a lower cost. FileFlex improves the organization’s security posture, allows access to all storage, on-premises, cloud-hosted, and SharePoint – not just subsets – ensures privacy, keeps the management of organizational files under organizational control, accelerates compliance to privacy regulations such as GDPR and HIPAA, and leverages the organization’s existing storage infrastructure to produce a disruptive low-cost model that can be applied to all storage.

## Understanding the Centralized Cloud Architecture Used by All Cloud Storage Providers
_![](/images/blog/centralized-vs-decentralized-cloud-storage/Centralized-Cloud-Architecture.webp)_

_Centralized Cloud Architecture_

The diagram above shows the basic architecture of traditional centralized cloud storage. It is the architecture of today’s connected world used by all cloud providers whether public, private, EFSS, CCP, or hybrid clouds including Amazon, Google, Microsoft, Dropbox, Box, and Dropbox.  In this model, hundreds, thousands or even millions of devices sync or duplicate a subset of their local storage to a central server cluster. Hundreds, thousands, or even millions of users then connect to that server and access their files over the internet. Each user would have their own account on that server and files that they store or sync from their devices are then associated to their account.

## What Are the Issues Inherent to the Centralized Cloud Architecture
Since cloud storage services all use the centralized server architecture, they all have the following issues and compromises that are inherent to the architecture itself.

### Duplication, Increased Threat Surface, More Complicated Storage Structure
With all cloud types – public, EFSS, private and virtual private clouds – users duplicate a subset of their files to the centralized server cluster so that those files can be accessed over the internet. This creates duplication and version control issues. Since each server will typically have both a near-line and off-line backup and may be replicated in other geographies to provide better global access there will be multiple copies of each file stored. Each copy made increases the threat surface of the organization and creates a more complex storage structure. This inherently increases the risk posture of the organization.

### Subsets
Since many users and devices sync or store information on the centralized server cluster and because that server has limited storage, only a subset of an organization’s overall data can be stored. That means that users will have to manage their allotment and often critical data will not be on that server and is unavailable. For example, an organization may have 1000 terabytes of overall data storage across all devices, users, and locations. If they have 100 terabytes of cloud storage, then 900 terabytes of data are inaccessible at any given time due to the fact that not all storage has cloud functionality.

### Resource Intensive
The constant syncing from all users and all their devices ties up multiple CPU cycles and bandwidth. It is very resource intensive requiring multiple servers, load balancers, and facilities that all must be managed and secured.

### Expensive
The centralized server model – depending on the scale – requires an expensive data center – multiple servers, storage arrays, and supporting equipment such as UPS, backup generators, cooling, etc.   The data center must be maintained by trained technical staff and it must be secured against malware, hackers, fire, theft, natural disaster, outages, and human error. This is all to support the accessibility of data that is essentially a duplication making it expensive.

## What Are Some Additional Issues Inherent to the Centralized Cloud Architecture Used by EFSS and Public Clouds
### Privacy
Not all EFSS products are created the same when it comes to security and that is the real problem. Some public cloud vendors like Microsoft and Google adopt very strong security practices that are equivalent or better than those found in corporate IT departments; some do not. However, even though some may be very secure and some not, none of them can protect the privacy and confidentiality of the information stored on their servers. From a privacy perspective, it is never a good idea to give your confidential files to someone else. That information can legally be secretly accessed and exfiltrated by the cloud provider, by law enforcement, and in some cases by foreign powers.

**Secret Exfiltration from Third Parties** – The cloud provider is required by law to make sure that you are not using their platform for illegal activity. They must and do inspect your files for copyright infringement, child pornography, terrorism, and money laundering for example. In any case, they have the right to secretly inspect your files at their discretion for any reason they determine.

**Secret Exfiltration from Law Enforcement** – What about law enforcement trying to access your data? With EFSS and public cloud storage, you may not know that the provider was served a subpoena, warrant, or security order. In fact, the provider may be prohibited by law from telling you. Although nearly every provider’s terms read differently, one thing remains the same. They all tell you explicitly they must and will comply with legal requirements from governments, security agencies, and law enforcement (to secretly access your files) and are not responsible for any loss you experience.

**Secret Exfiltration from Foreign Powers** – With the passing of the Cloud Act, U.S. law enforcement can serve an SCA “warrant” to cloud providers where recipients such as Google, Amazon, or Microsoft are obligated to turn over evidence wherever located – even if it is stored on a server located in another country. Since SCA warrants are served in secret directly to the cloud provider and your cloud provider is prohibited from informing you that they have received a warrant to hand over your data, you are depending on them to defend your privacy. If for whatever reason they fail to do so, your data will be exfiltrated without your knowledge. The sole remedy is for the cloud provider to ask a court to quash or modify the warrant. To quash or modify the warrant all 3 of the following conditions must be met. (a) the target is not a U.S. person; AND (b) compliance would conflict with the law of the country where the data is stored; AND (c) the court conducts a “comity” analysis and concludes that, on balance, disclosure isn’t warranted. If the data requested in your cloud storage is for a U.S. person or if the target of the request is a non-U.S. person but your own country does not have any specific privacy law to protect that data, then you have no protection. Finally, even if the request is for data on a non-U.S. person and it violates the privacy laws of your local government but the U.S.-based court determines that U.S. law enforcement really needs it, then your data will be exfiltrated.

Second, the bill is reciprocal in nature as it would allow the Executive Branch to enter into “executive agreements” to allow qualified foreign governments with restrictions, to acquire data of their own citizens wherever located including if stored on servers located in the U.S., without regard to U.S. law or the U.S. constitution.

In short, under certain circumstances, foreign governments can access data stored in public cloud services regardless of where the data is physically located around the globe, potentially circumventing local regulations. And the European Commission isn’t sitting idly by. It is readying its own legislation called the E-Evidence Directive to enable EU member countries the same jurisdictional reach as the U.S.

### Governance, Risk Management and Compliance (GRC)
With growing pressure to empower employees, associates, and customers with the latest mobile technologies and BYOD, governance, risk management, and compliance (GRC) and who operates and controls the centralized server cluster is vital for an organization’s security strategy. The problem with using the cloud and EFSS means your ‘latest technologies’ can quickly become a compliance headache because the actual compliance and management are outside of your control.

## **What is** **The Decentralized Hybrid-IT Architecture of FileFlex Enterprise** 

 _![](/images/blog/centralized-vs-decentralized-cloud-storage/Decentralized-Cloud-Architecture.webp) The Decentralized Hybrid-IT Architecture of FileFlex_

FileFlex is differentiated from traditional cloud storage options in that it uses a decentralized hybrid-IT architecture instead of the centralized cloud model. It addresses all of the compromises and issues of the centralized cloud model listed above. Instead of transferring and storing data in a central data center located miles away from connected devices, it uses a revolutionary technology that provides remote access and sharing to all storage locations, whether on-premises, cloud-hosted or SharePoint.

FileFlex leverages the CPU power and storage of the end-point devices where the FileFlex server acts like a switchboard to facilitate a hybrid point-to-point connection and as a policeman to enforce policies. When files are accessed or shared FileFlex encrypts the file from source to destination and it never rests or is stored by the server en route. FileFlex is built upon a Zero-Trust data access (ZTDA) platform that always verifies and always authenticates every request.

Data is stored in source locations which all now have cloud functionality of remote access, sharing, streaming, remote editing, and file management. Privacy and confidentiality can be protected by keeping data in source locations, on-premises, behind the corporate firewall, on corporate storage assets, in specific geographic regions, and access controlled. Also, with this technology users can access all storage of the hybrid-IT infrastructure, not just a subset that is duplicated to a central server. FileFlex supports remote access and sharing of on-premises storage such as servers, server-attached storage, network-attached storage, private clouds, data centers, PCs, remote offices, and on-premises implementation of SharePoint as well as cloud-hosted storage on Azure, Amazon S3 Google Cloud, and EFSS cloud storage such as Box, public cloud storage on OneDrive, Google Drive and Dropbox as well as the cloud-hosted implementation of SharePoint.  And because it leverages the existing storage and servers the organization already owns, organizations do not have to build a private cloud or subscribe to an expensive EFSS service making it is the lowest cost model.

### What Are the Advantages of a Decentralized Hybrid-IT Model (FileFlex)
-   All files from the entire organizational storage infrastructure can be remotely accessed and shared from the hybrid-IT structure of on-premises storage such as servers, server-attached, network-attached, remote offices, corporate data centers, PCs and on-premises implementation of SharePoint, cloud-hosted IaaS storage such as Amazon S4, MS Azure and Google Cloud and public clouds such as Box, Dropbox, Google Drive, and OneDrive – not limited to subsets
-   No duplication to third-party servers or secondary locations is necessary – reduces the threat surface and simplifies the storage structure for a reduced risk posture
-   Governance, Risk Management and Compliance (GRC) under organizational control
-   Files can be kept on-premises, behind the corporate firewall, on corporate assets, in specific geographic locations, and access controlled to protect the privacy and prevent secret exfiltration from third parties, law enforcement, and foreign powers
    -   This also accelerates compliance with GDPR, HIPAA, and all other privacy regulations
-   Leverages existing storage infrastructure and servers for the lowest-cost model

### What Are Some Other Advantages of FileFlex
-   Build on a zero trust data access platform (ZTDA) that always verifies and always authenticates every transaction
-   Can be platform hardened via Intel CPU for silicon-to-silicon level security
-   Supports device authentication, SSO, U2F universal two-factor authentication, and YubiKey to protect against phishing
-   Is a software-only solution that runs from a VM applied to existing storage?
-   Very easy and quick to install, configure and maintain – in most cases no additional manpower or infrastructure resources are required

\[1\] [https://www.salesforce.com/content/dam/web/en\_us/www/documents/legal/Agreements/policies/ExternalFacing\_Services\_Policy.pdf](https://www.salesforce.com/content/dam/web/en_us/www/documents/legal/Agreements/policies/ExternalFacing_Services_Policy.pdf)

[Learn More About FileFlex](/) · [Sign Up for a Free Trial](/try-fileflex/)
