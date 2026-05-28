---
title: "ZTNA, ZTAA and ZTDA: A Deep Dive"
seoTitle: "ZTNA, ZTAA and ZTDA: A Deep Dive"
description: "ZTNA provides secure access to a network segment. ZTAA provides secure access to applications and ZTDA provides secure access to data. Combined it is a three-legged stool with ZTNA and ZTAA taking care of any suspicious activity at the network and application level. ZTDA complements by protecting remote access to unstructured data, reducing the risk of ransomware."
excerpt: "ZTNA provides secure access to a network segment. ZTAA provides secure access to applications and ZTDA provides secure access to data. Combined it is a three-legged stool with ZTNA and ZTAA taking care of any suspicious activity at the network and application level. ZTDA complements by protecting remote access to unstructured data, reducing the risk of ransomware."
date: 2022-03-21
modified: 2022-03-21
author: "Anthony DeCristofaro"
featuredImage: "/images/blog/ztna-ztaa-and-ztda-a-deep-dive/iStock-1280171152-web-e1678993162181.webp"
featuredImageAlt: "ZTNA, ZTAA and ZTDA: A Deep Dive"
readingTime: "6 min read"
categories:
  - "Zero Trust Data Access"
tags: []
toc: true
---

## Introduction

Much has happened since 2010 when Forrester analyst John Kindervag, according to a [post](https://whatis.techtarget.com/feature/History-and-evolution-of-zero-trust-security) that appears on WhatIs.com, coined the term “Zero Trust.” The security framework, it states, revolved “around the idea that security professionals must do away with concepts of a trusted network (generally an internal network) and an untrusted network (external networks). In the Zero Trust model, all network traffic is untrusted no matter its origin.”

If one goes back in time a dozen years, it’s astounding to see how much has changed when it comes to everything from the sophistication of data breaches to the insurmountable amount of unstructured data now being produced by organizations of every size and scope.

## Zero Trust Security Report

The framework has also evolved as witnessed by a recent Markets & Markets report, which can be accessed via our [Learning Centre page](/virtual-learning-centre/) that lists its core principles:

-   Zero Trust networks use micro-segmentation to enhance security and fasten incident response and remediation. Micro-segmentation is the practice of breaking up security perimeters into smaller separate and secure zones in the network.
-   Zero Trust security is based on user/device access. It also ensures how many devices are accessing the network and that every device is authorized.
-   Zero Trust verifies each access request with rich intelligence and analytics capabilities to detect and respond to anomalies.

The architecture, authors of the report wrote, “presents a necessary architectural model for all organizations with the slightest iota of digital footprint.

“In recent years, inspiring developments in the Zero Trust technology have transpired, including the unveiling of the industry’s first [Zero Trust Data Access](/challenge/) (ZTDA) platform – Qnext’s [FileFlex Enterprise](/platform/) – that facilitates remote access and data sharing (of unstructured data) across the IT infrastructure.”

## ZTNA, ZTAA and ZTAA – A Layered Approach
![ZTNA, ZTAA and ZTDA](/images/blog/ztna-ztaa-and-ztda-a-deep-dive/Complete_Protection-tw-edits.webp)

**ZTNA, ZTAA and ZTDA**

This is a key development for in order to protect a hybrid-IT infrastructure, zero trust needs to be applied to network access, application access, and data access. As a result, organizations should consider deploying a layered zero trust architecture encompassing Zero Trust Network Access (ZTNA),  Zero Trust Application Access (ZTAA) and Zero Trust Data Access (ZTDA).

### ZTNA

ZTNA provides secure access to a network segment or device based on the identity of the user—not IP address—regardless of location and device.  The drawback however is that that user also has access to every application and all the files on that network segment.

### ZTAA

Likewise, Zero Trust Application Access provides a secure connection between a user and an application. With ZTAA, however, that user also has access to every file that that application can access.

### ZTDA

  
ZTDA meanwhile creates a secure and controlled connection between a user and the organization’s crown jewel — its data. Security is focused on granting and restricting access to data where all attempts to access data are untrusted. Access is permitted on a least privileged basis via a broker after verification and authorization of every user according to corporate policies for every remote access request.

## ZTDA Compliments ZTNA and ZTAA

Combined it is a three-legged stool with ZTNA and ZTAA taking care of any suspicious activity at the network and application level. ZTDA compliments by protecting remote access to unstructured data, reducing the risk of ransomware.

As I wrote in a previous [blog](/blog/ransomware-unstructured-data-double-trouble/), FileFlex Enterprise uses a zero trust data architecture to lay what I like to call a “blanket of security” in the sense that all unstructured data repositories can be securely accessed and shared, no matter who is accessing it. That includes a remote worker in HR downloading a spreadsheet or an outside contractor that has received a file share.  
  
In addition, aside from being able to scale to thousands of employees in less than a day across a global hybrid IT infrastructure, all unstructured data remains in source locations. It is not moved, synchronized, or copied to a secondary location or third party and when remotely accessed, it is end-to-end encrypted.   For unstructured data, it is an application of zero trust architecture at its best for unlike a VPN, it provides a user IT controlled access to data, not uncontrolled access to the infrastructure.

### ZTDA to Protect Data

As the first company to bring ZTDA to market, the intent and goal is to protect data in a way that is both seamless and secure.

### Colonial Pipeline

Secure in a way that will allow a large organization to reduce the risk of the type of breach Colonial Pipeline experienced last year when a hacked VPN led to a ransomware attack that caused Colonial to shut down their pipelines and stop the transport of roughly 2.5 million barrels of fuel daily from the Gulf Coast to the Eastern Seaboard.

According to an [article](https://www.cnn.com/2021/08/16/tech/colonial-pipeline-ransomware/index.html) that appeared on the CNN website, hackers were also able to gain access to over 6,000 records that contained everything from military ID numbers to health insurance information. Colonial ended up paying upwards of US$4.4 million to the hacking group DarkSide, although some of the money was later recovered.

Still, it was an attack that no company, regardless of how large or small, would want to experience.

For further reading see W[hy Your Zero Trust Security Model Must Include Zero Trust Data Access (ZTDA)](/blog/zero-trust-security-model-must-include-zero-trust-data-access-ztda/) and [What is Zero Trust Data Access (ZTDA)?](/blog/what-is-zero-trust-data-access-ztda/).

[Learn More About FileFlex](/) · [Sign Up for a Free Trial](/try-fileflex/)


---

<!-- AUTO-RELATED-READING -->
## Related Reading

- [How to Protect Your Data with Zero Trust Data Access (ZTDA)](/blog/how-to-protect-your-data-with-zero-trust-data-access-ztda/)
- [Implement Zero Trust Security, Avoid This Nightmare](/blog/implement-zero-trust-security-avoid-this-nightmare-a-true-account/)
- [Proposed ZTDA Action Plan for Enterprise](/blog/proposed-ztda-action-plan-for-enterprise/)
- [Ransomware + Unstructured Data = Double Trouble](/blog/ransomware-unstructured-data-double-trouble/)
