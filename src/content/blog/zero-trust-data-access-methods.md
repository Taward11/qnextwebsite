---
title: "Zero Trust Data Access Methods"
seoTitle: "Zero Trust Data Access Methods"
description: "Zero Trust Data Access (ZTDA) is a new model that allows enterprise teams to securely send and share unstructured data across organizational boundaries."
excerpt: "Zero Trust Data Access (ZTDA) is a new model that allows enterprise teams to securely send and share unstructured data across organizational boundaries."
date: 2022-07-18
modified: 2022-07-18
author: "Dr. Ed Amoroso"
featuredImage: "/images/blog/zero-trust-data-access-methods/GDPR-for-blog.webp"
featuredImageAlt: "Zero Trust Data Access Methods"
readingTime: "5 min read"
categories:
  - "Zero Trust"
  - "Zero Trust Data Access"
tags: []
toc: true
---

By Dr. Edward Amoroso, TAG Cyber

 A new method has emerged for protecting unstructured data in the enterprise known as zero trust data access (ZTDA). Related to adjacent zero trust network access (ZTNA), which allows for access to networks without regard for an enterprise perimeter, ZTDA also provides for secure access, but the focus is on data – and it also exists under the assumption that perimeters cannot be used to offer a protective ring around data stores such as SharePoint.

## Zero Trust Data Access Model

The ZTDA model, like its cousin model for zero trust network access, does not rely on the use of an enterprise perimeter for securing data. In fact, the existence of a corporate firewall managing policy between the inside and outside of an enterprise should have no effect on the ability of an employee to share a file, directory, or folder with other users – regardless of where they might be situated with respect to the sharing user’s network.

 What this implies is that an overlay is required to provide application-level security for file sharing. This should come as good news for security designers because application-level enforcement of policy is always more flexible and feature-rich than the underlying network counterpart. Trying, for example, to support a file access policy using traditional five-tuple TCP/IP metadata is neither easy nor effective.

 The operational goal, as depicted in Figure 3-1, is that file, directory, or folder owners would have the ability to create a means for sharing with users via a ZTDA security facility that supports access policy, identity management, and credential checking. If working properly, a ZTDA sharing arrangement should make it just as easy to share a folder with an external business partner as with a local work colleague.

 **![](/images/blog/zero-trust-data-access-methods/ZTDA-Tag-Cyber-illustration.webp)**

_**Figure 3-1.** ZTDA Architecture_

The decision of whether to manage the ZTDA functionality from the cloud or premise can be determined by the organization based on local factors. Coordination of centralized and local data owner policy support can also be arranged by the organization. The goal should be to maximize the flexibility of file and folder sharing with external entities while also maintaining security and compliance at the organizational level.

## Implications for File Sharing

The advantages of a ZTDA architecture for sharing are significant and should help to address many of the challenges that have existed for many years with organizations trying to interact with third parties, customers, and other external actors. Several of the more obvious advantages of ZTDA are listed below, with the comment that different commercial implementations will obviously include their own functionality.

-   _Secure External Sharing_ – This is the primary goal for ZTDA and solves the problem that most businesses have no idea how to securely share files or folders with external partners. Most of the time, insecure email attachments are used, or links to some public file sharing platform. This might be fine for non-critical data, but sensitive files require more secure handling and the ZTDA model provides for such.
-   _Reduced Security Burden_ – Introducing a ZTDA overlay allows for the corporate perimeter and other security tools to be simplified. VPN access or other means to support external sharing are often no longer needed. Email security overlays might also be removed in lieu of the flexibility afforded by ZTDA sharing platforms for enterprise data owners.
-   _Local Management and Control_ – The definition of management and control policy is moved closer to the data owner with ZTDA solutions. This is helpful, because the data owner will have the ability to define more fine-grained policy rules for their files, directories, and folders. Obviously, centralized ZTDA controls can also be implemented to complement local handling.

## About This Series

This article is the third in a series of 5 from TAG Cyber on Understanding Zero Trust Data Access.

The implementation of ZTDA by commercial vendors is becoming more common. In the next article of our series, we will highlight the method in the context of commercial solution provider Qnext with their FileFlex platform. The TAG Cyber analyst team has worked with Qnext to review its ZTDA design and has concluded that it compares favorably with the objectives of the model for corporate cyber risk reduction.

In Article 1, TAG Cyber CEO  Dr. Edward Amoroso examines “[How To Securely Share Data](https://fileflex.com/blog/how-to-securely-share-data/)?”.  In Article 2, TAG Cyber’s Chirs Wilder looks at the [risks associated with unstructured data](/blog/risks-to-unstructured-data/).  Article 4 from Dr. Edward Amoroso provides an overview of their [commercial platform for zero trust data access](/blog/the-fileflex-enterprise-commercial-platform-for-zero-trust-data-access/). Article 5 from TAG Cyber proposes an [action plan for enterprises](https://fileflex.com/blog/proposed-zdta-action-plan-for-enterprise/) in this area.

Copyright © 2022 TAG Cyber LLC

[Learn More About FileFlex](/) · [Sign Up for a Free Trial](https://fileflex.com/fileflex-enterprise/try-plus/)
