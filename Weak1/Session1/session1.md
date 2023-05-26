# How web works...

`Q`. What is a protocol stack, and how is it used in web development?

`A.` A protocol stack is a combination of layers through which communication between client and host is established and data's are being transfered.

This comprise of mainly 4 layers:
- ***Application Layer*** - This is the top layer and this is responsible for providing security and encryption using https, TLS etc. protocol

- ***Transport Layer*** - As the data can be very huge in size, it is not possible to transmit whole in a single go, rather than this whole data is divided into small chunks of packets and again reassembled at the client.
Thsi task is done by transport layer. There are two types of protocols to send the data i.e. TCP and UDP most widely used one is TCP as it is more reliable that all the packets are reached at its destination.

- ***Network Layer*** - This layer is responsible for conversion of logical addresses to physical addresses

- ***Link Layer*** - The data link layer receives the information in the form of packets from the Network layer, it divides packets into frames[Add headers containing destination and source addresses] and sends those frames bit-by-bit to the underlying physical layer. 
---
`Q.` What are the different types of web servers, and how do they differ in terms of functionality and performance?

`A.` The different types os server are:-
- **Proxy Server** - A proxy server sits between a client program (typically a Web browser) and an external server (typically another server on the Web) to filter requests, improve performance, and share connections.

- **Mail Server** - Almost as ubiquitous and crucial as Web servers, mail servers move and store mail over corporate networks (via LANs and WANs) and across the Internet.

- **Server Platforms** - A term often used synonymously with operating system, a platform is the underlying hardware or software for a system and is thus the engine that drives the server.

- **Web Server** - At its core, a Web server serves static content to a Web browser by loading a file from a disk and serving it across the network to a user’s Web browser. This entire exchange is mediated by the browser and server talking to each other using HTTP.

- **Application Server** - Sometimes referred to as a type of middleware, application servers occupy a large chunk of computing territory between database servers and the end user, and they often connect the two.

- **Real-Time Communication Server** - Real-time communication servers, formerly known as chat servers or IRC Servers, and still sometimes referred to as instant messaging (IM) servers, enable large numbers users to exchange information near instantaneously.

- **FTP Server** - One of the oldest of the Internet services, File Transfer Protocol makes it possible to move one or more files securely between computers while providing file security and organization as well as transfer control.

- **Collaboration Server** - In many ways, collaboration software, once called ‘groupware,’ demonstrates the original power of the Web. Collaboration software designed to enable users to collaborate, regardless of location, via the Internet or a corporate intranet and to work together in a virtual atmosphere.

- **List Server** - List servers offer a way to better manage mailing lists, whether they be interactive discussions open to the public or one-way lists that deliver announcements, newsletters or advertising.

- **Telnet Server** - A Telnet server enables users to log on to a host computer and perform tasks as if they’re working on the remote computer itself.

- **Open Source Server** - From your underlying open source server operating system to the server software that help you get your job done, open source software is a critical part of many IT infrastructures.

- **Virtual Server** - In 2009, the number of virtual servers deployed exceeded the number of physical servers. Today, server virtualization has become near ubiquitous in the data center.
---
`Q.` What is web hosting, and what are the different types of hosting services available for websites?

`A.` Web Hosting is a service that helps web browser clients to easily access electronic information on the Internet by hosting/posting web-server programs (websites or web pages) on a computer system. A web server, often known as a web host, is a computer system that hosts websites.
- Shared Hosting
- VPS hosting 
- Dedicated Hosting 
- Cloud Hosting
- Managed Hosting.
---
`Q.` What is scaling, and why is it important for web applications? How does scaling differ for vertical and horizontal scaling?

`A.` The scalability of an application can be measured by the number of requests it can effectively support simultaneously. 

The point at which an application can no longer handle additional requests effectively is the limit of its scalability. This limit is reached when a critical hardware resource runs out, requiring different or more machines. Scaling these resources can include any combination of adjustments to CPU and physical memory (different or more machines), hard disk (bigger hard drives, less “live” data, solid state drives), and/or the network bandwidth (multiple network interface controllers, bigger NICs, fiber, etc.).

Horizontal scaling means scaling by adding more machines to your pool of resources (also described as “scaling out”), whereas vertical scaling refers to scaling by adding more power (e.g. CPU, RAM) to an existing machine (also described as “scaling up”).

![Horizontal vs vertical illustration](https://www.section.io/assets/images/blog/featured-images/horizontal-vs-vertical-scaling-diagram.png)
&emsp;&emsp; _(Image copyright belongs to https://www.section.io/)_
 
 ---
`Q.` What is SEO (Search Engine Optimization), and how can web developers optimize their websites for better search engine rankings?

`A.` Search engine optimization is the science of improving a website to increase its visibility when people search for products or services. The more visibility a website has on search engines, the more likely it is that brand captures business.

- Heading Structure and giving appropriate keywords in meta tags
- Put Web Analytics in Place
- Use Keywords in Anchor Text for Hyperlinks
- Increase Page Loading Speed
- Give alt text and decription appropriately whereever applicable
- Use most searched keyword relevant to your content inside the text fields