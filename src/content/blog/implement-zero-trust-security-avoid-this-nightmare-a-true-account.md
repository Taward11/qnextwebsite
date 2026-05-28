---
title: "Implement Zero Trust Security, Avoid This Nightmare"
seoTitle: "Implement Zero Trust Security, Avoid This Nightmare"
description: "Implementing Zero Trust security could save your company literally millions of dollars. A case study follows. In brief, though, a targeted ransomware attack has the potential to earn a spear-phishing criminal millions of dollars in a single hit. While a reliable VPN might make it difficult for such a criminal to gain entry to your system, the effort is well worth the payoff, which is why you need to do more than protect the perimeter of your network. You need to protect your entire system, including your data. Only Zero Trust security platforms offer this level of security."
excerpt: "Implementing Zero Trust security could save your company literally millions of dollars. A case study follows. In brief, though, a targeted ransomware attack has the potential to earn a spear-phishing criminal millions of dollars in a single hit. While a reliable VPN might make it difficult for such a criminal to gain entry to your system, the effort is well worth the payoff, which is why you need to do more than protect the perimeter of your network. You need to protect your entire system, including your data. Only Zero Trust security platforms offer this level of security."
date: 2021-09-29
modified: 2021-09-29
author: "Ed Dubrovsky"
featuredImage: "/images/blog/implement-zero-trust-security-avoid-this-nightmare-a-true-account/SpearPhishing-e1678993749590.webp"
featuredImageAlt: "Implement Zero Trust Security, Avoid This Nightmare"
readingTime: "5 min read"
categories:
  - "Zero Trust"
  - "Zero Trust Data Access"
tags: []
toc: true
---

With a VPN, once users have made it through your perimeter, they typically have access to your whole infrastructure. Zero Trust Network Access (ZTNA) and Zero Trust Application Access (ZTAA) platforms, meanwhile, strengthen authentication and access controls to smaller segments of the enterprise network and applications.

That said, ZTNA and ZTAA platforms provide limited tools to control access to the data – particularly file-based unstructured data in the form of documents, PDF files, images, videos, and spreadsheets. A Zero Trust Data Access (ZTDA) platform like FileFlex Enterprise, however, provides the policy decision point for unstructured data access not found in ZTNA and ZTAA platforms. Subsequently, using a ZTDA platform for sharing files greatly reduces the threat profile of your organization.

Embedding malware in a file and sending it as an email attachment from a trusted source is the most common attack vector.  Although anti-virus software attempts to scan and quarantine for this, it is not 100% effective. One of my clients knows this all too well. In fact, had they taken Zero Trust security measures by implementing a ZTDA platform like FileFlex Enterprise, the following would not have unfolded.

## The Need for Zero Trust Security – A Case Study
### How a successful multi-million dollar spear-phishing attack occurred
Alice worked in the purchasing department of an auto accessory manufacturer with 4000+ employees. Towards the end of a regular workday, she received an email from her colleague Jane asking her to pre-approve the purchase of a new laptop.

Jane’s boss Michelle, who was cc’d on the email, responded to the chain, approving Jane’s request. She included wire transfer details, as well as a cost estimate in the form of a PDF file. She also thanked Alice, in advance, for responding quickly to the request as the laptop Jane was after was in short supply.

As mentioned in a recent [spear-phishing article](/blog/how-zero-trust-security-promises-to-cast-a-wide-net-on-spear-phishers/), these threat actors do their homework so that they can target their victims without raising suspicion. Such was the case with the imposter that sent Alice the two emails.

Sensing nothing out of the ordinary and understanding the urgency, Alice promptly opened the PDF file Michelle had attached. Following the transfer instructions provided, she made the $3,250 payment to the imposter’s delight. Unfortunately, the story doesn’t end here.

While Alice and her fellow employees slept that night, cybercriminals accessed Alice’s computer and escalated privileges to the administrator level. They then accessed the company’s 500+ servers and, in just six hours, stole 64GB of data before installing malware.

At the start of the next business day, employees arrived to discover all of the company servers completely encrypted and unusable, as well as ransom notes demanding 17 million USD for their safe retrieval.

### How the attack impacted its victim.
Business came to a standstill. All manufacturing stopped. Given the size of the organization and the large number of systems that had to be restored, the resolution process took close to two months, which is not unusual. According to [Ponemon’s 2020 report](https://cdw-prod.adobecqms.net/content/dam/cdw/on-domain-cdw/brands/proofpoint/ponemon-global-cost-of-insider-threats-2020-report.pdf): “It takes an average of 77 days to contain each insider threat incident. Only 13 percent of incidents were contained in less than 30 days.”

After engaging a digital forensics and incident response team, the company negotiated a final ransom of $7 million. Upon payment, it obtained the decryption keys and reclaimed its stolen data. Still, the total cost of business interruption and loss of revenues came to roughly $28 million – $11 million more than the original ransom.

### How the incident could have been avoided
During the investigation, it was discovered that the spoofed email accounts belonging to the _real_ Michelle and Jane were the initial attack vectors. These accounts were used to send the malicious payload embedded in the PDF file and not quarantined by the anti-virus software.

 While security awareness training can certainly help minimize spear-phishing incidents and other security threats, it’s not enough. Alice received not one but _two_ emails from what appeared to be trusted colleagues and innocently clicked on a PDF file that kicked off the attack. Any employee might have done the same (even you, perhaps).

That’s why using a Zero Trust security platform like FileFlex Enterprise is so essential. As the world’s only Zero Trust platform that provides secure remote access to files and folders, FileFlex Enterprise reduces your company’s risk by forcing user authentication, allowing access via a policy engine, using micro-segmentation, employing least privilege access, and tracking all activity with an audit log.

Essentially, these secure Zero Trust data access processes kick in each time a request for data is received. Had FileFlex Enterprise been employed as standard practice for sending files, user authentication would have mitigated malicious impersonation.

### Zero Trust security is especially important to large enterprises
Alice’s story isn’t uncommon. Keep in mind that your business is only ever one vector attack away from a similar event. Contact us to learn more about how the FileFlex Enterprise Zero-Trust Platform can minimize the likelihood of your enterprise falling victim.

For more reading on how Zero Trust security protects you against spear phishing, read [Why Zero Trust, Why Now](/blog/why-zero-trust-and-why-now/) and [Zero Trust Security Promises to Cast a Wide Net on Spear-Phishers](/blog/how-zero-trust-security-promises-to-cast-a-wide-net-on-spear-phishers/).

[Learn More About FileFlex](/) · [Sign Up for a Free Trial](/try-fileflex/)
