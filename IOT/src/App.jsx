import { useState } from "react";
import SideNavbar from "./Components/SideNavBar1";
import Problems from "./Components/Problems";
import Footer from "./Components/Footer";
import TitleAbout from "./Components/TitleAbout";
import HorizontalNavBar from "./Components/HorizontalNavBar";
import TeamMembers from "./Components/TeamMembers";
import "./App.css";

function App() {
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [filteredProblems, setFilteredProblems] = useState([]);
  const [aboutUsContent, setAboutUsContent] = useState([]);

  const teamMembersData = [
    // Team members data
    {
      name: "Sowmya Mutya",
      bannerId: "001303248",
      email: "sowmya.mutya@slu.edu",
    },
    {
      name: "Ashwin Pawar",
      bannerId: "001296012",
      email: "ashwin.pawar@slu.edu",
    },
    {
      name: "Sri Tammiraja Karthikeya Santosh Iragavarapu",
      bannerId: "001289759",
      email: "sritammiraja.iragavarapu@slu.edu",
    },
    {
      name: "Puneeth Anantha",
      bannerId: "001289752",
      email: "puneethchowdary.anantha@slu.edu",
    },
    {
      name: "Bandlamudi Bharath",
      bannerId: "001268278",
      email: "bandlamudi.bharath@slu.edu",
    },
    {
      name: "Sai Joshika Gummireddy",
      bannerId: "001252206",
      email: "saijoshika.gummireddy@slu.edu",
    },
  ];

  const problems = [
    {
      id: 1,
      title: "Privacy of DNS-over-HTTPS: Requiem for a Dream?",
      description: "https://ieeexplore.ieee.org/abstract/document/9581227",
      solutionCategory: "Machine Learning-Based Detection",
problemCategory: "Privacy and Security Implications of DoH",
methodologyCategory:"Machine Learning and Data Analysis",
      section1:
        "The primary problem addressed in the paper is the potential privacy implications of DNS-over-HTTPS (DoH) traffic. The concern is that network adversaries, such as authoritarian ISPs, may attempt to differentiate DoH packets from regular encrypted Web traffic to monitor or censor users' online activities. The goal is to investigate whether DoH traffic can be accurately identified and propose countermeasures to protect user privacy.",
      section2:
        "The researchers develop a machine learning-based identification model that can differentiate DoH packets from encrypted Web packets with high accuracy. To counter this identification model, they propose padding techniques that manipulate packet size and inter-arrival time to make DoH traffic indistinguishable from Web traffic. By implementing these privacy-enhancing measures, the researchers aim to mitigate the risk of DoH traffic being targeted by network adversaries for censorship or monitoring purposes.",
      section3: [
        "1. Data Gathering: The researchers collect traffic traces by visiting the top 20,000 websites from Alexa's list using a Docker container with automated scripts. They configure a browser to use popular DoH resolvers like Cloudflare, Google, Quad9, and Clean Browsing, and capture traffic from additional less popular resolvers.",
        "2. Machine Learning Model: The researchers use machine learning algorithms to build a model that classifies HTTPS traffic into DoH and Web classes based on observable features like packet length. They analyze the effectiveness of the model on diverse traffic traces to assess its accuracy in identifying DoH traffic.",
        "3. Padding Techniques: To counter the identification model, the researchers evaluate multiple padding techniques that manipulate packet size and time lag between packets. They aim to decrease the detection capability of the model by making DoH traffic appear similar to regular Web traffic.",
        "4. Evaluation: The researchers rigorously test the identification model and padding techniques on different datasets to measure their effectiveness in protecting the privacy of DoH traffic. They analyze the impact of padding on the model's classification accuracy and assess the feasibility of evading identification by network adversaries. By combining machine learning analysis, data gathering, and privacy-enhancing techniques, the researchers aim to enhance the privacy of DNS-over-HTTPS and mitigate the risks associated with potential identification and censorship by network adversaries.",
      ],
    },
    {
      id: 2,
      title:
        "A large-scale analysis of HTTPS deployments: Challenges, solutions, and recommendations",
      description:
        "https://content.iospress.com/articles/journal-of-computer-security/jcs200070",
        solutionCategory: "Enhancing HTTPS and DNS Security",
problemCategory: "Privacy and Security Implications of DoH",
methodologyCategory:"Data Collection and Comparative Analysis",
      section1:
        "The primary problem addressed in this study is the presence of security vulnerabilities in HTTPS deployments among the top 1 million domains, as ranked by Alexa. Despite the critical importance of HTTPS for secure online communication, many domains are still susceptible to well-known attacks due to improper implementation and outdated protocols. The study aims to identify the extent of these vulnerabilities and assess the security levels of digital certificates used by these domains.",
      section2:
        "To tackle this issue, the study proposes comprehensive solutions including conducting a large-scale analysis of HTTPS implementations to pinpoint domains affected by vulnerabilities and assess certificate security. It advocates raising awareness among domain administrators about the criticality of employing secure protocols and configurations. Additionally, it emphasizes the importance of regular updates to TLS protocols and ongoing monitoring of HTTPS deployments to swiftly address vulnerabilities. Furthermore, the study recommends adopting best practices for HTTPS configurations, such as avoiding self-signed certificates and ensuring correct hostname matching for certificates.",
      section3: [
        "The study employs a multi-phase methodology to evaluate HTTPS security:",
        "1. 	Data Collection: Gather data on the top 1 million domains from Alexa. Collect HTTPS deployment information, including supported protocols and certificate details.",
        "2. 	Vulnerability Assessment:	Analyze the collected data to identify domains vulnerable to known attacks, such as RC4, CRIME, POODLE, FREAK, Logjam, and DROWN.	Assess the use of outdated protocols like SSL 2.0, SSL 3.0, TLS 1.0, and TLS 1.1.",
        "3. 	Certificate Analysis: Evaluate the security level of digital certificates used by each domain. Check for issues such as expired certificates, hostname mismatches, and self-signed certificates.",
        "4. 	Categorization and Regional Analysis: Categorize domains based on their purpose (e.g., online shopping, banking, educational, government). Analyze the distribution of vulnerabilities and certificate issues across different regions (ARIN, RIPE NCC, APNIC, LACNIC, and AFRINIC).",
        "5. 	Trend Analysis: Perform a longitudinal study over three years to observe changes in HTTPS deployment and security practices. Identify trends in protocol updates and the reduction of vulnerabilities over time.",
        "6. 	Reporting and Recommendations: Compile and report findings to highlight the current state of HTTPS security. Provide recommendations for domain administrators to enhance their HTTPS configurations and mitigate identified vulnerabilities.",
      ],
    },
    {
      id: 3,
      title:
        "A Comprehensive Study of DNS Operational Issues by Mining DNS Forums",
      description: "https://ieeexplore.ieee.org/abstract/document/9923919",
      solutionCategory:
        "Detection and Mitigation of DNS Tunneling",
problemCategory:"General DNS Vulnerabilities and Attacks", 
methodologyCategory:"Data Collection and Comparative Analysis",
      section1:
        "The paper addresses the challenge of understanding DNS operational failures, which can lead to severe consequences like Internet outages. Traditional approaches analyzing DNS logs may not provide a comprehensive view of these failures. The key problem is to gain insights into DNS operational issues at a finer granularity, beyond just DNS queries and responses, by exploring data from DNS forums.",
      section2:
        "The solution proposed in the paper involves mining DNS forums to extract valuable information about DNS operational failures. By analyzing forum posts and replies from users, the researchers aim to categorize and tag the data to identify different types of DNS issues, such as general concerns, issue locations, and record types. This approach offers a unique perspective on understanding the root causes of DNS failures and provides suggestions to mitigate these issues.",
      section3: [
        "1. Data Collection: The researchers crawled 4 DNS forums and collected over 10,000 posts and 50,000 replies related to DNS operational issues.",
        "2. Content Analysis: A new analysis framework was developed to tag forum posts by different categories, such as issue locations and record types, using keyword-based filters.",
        "3. Unsupervised Learning: The posts were clustered using unsupervised learning techniques like k-means to identify patterns and common themes.",
        "4. Insights Generation: Through manual analysis of representative posts, the researchers derived insights into the causes and resolutions of DNS operational failures.",
        "5. Conclusions and Suggestions: The study offers recommendations to DNS service providers and users based on the findings from the forum analysis, aiming to improve the reliability of DNS infrastructure.",
      ],
    },
    {
      id: 4,
      title:
        "Empirically understanding the global impact of migration to DNS-over-HTTPS",
      description: "https://www.ideals.illinois.edu/items/118562",
      solutionCategory:
        "Performance and Operational Impact",
problemCategory:"Performance Impact and Migration Challenges", 
methodologyCategory:"Data Collection and Comparative Analysis",
      section1:
        "The primary problem addressed in this study is the lack of a comprehensive global understanding of the performance impact of migrating from legacy DNS (DNS-over-UDP) to DNS-over-HTTPS (DoH). While previous studies have measured the performance of DoH, they have typically been conducted in developed countries with robust internet infrastructure, leaving a significant gap in understanding the global impact, especially in less developed regions. The study aims to fill this gap by comparing the performance of DoH with legacy DNS across various countries and understanding the factors influencing performance variations.",
      section2: ["To address this problem, the study proposes the following solutions:",
"1.Global Measurement: Conduct a comprehensive global analysis to measure and compare the performance of DoH and legacy DNS across different countries, including those with less developed internet infrastructure.",
"2.Performance Factors Analysis: Identify and analyze factors beyond packet size that affect the performance of DoH, such as geographical location and economic status of countries.",
"3.Recommendations for Adoption: Provide insights and recommendations for the future development and adoption of DoH, considering the varied impact on different regions and economic statuses."
      ],
      section3: ["The study employs a multi-phase methodology to evaluate the global impact of migrating to DoH:",
"1.Data Collection: Utilize a global proxy network to gather performance data for DoH and legacy DNS from various countries. Collect performance metrics from 4 different DoH servers, including Cloudflare, across diverse geographical locations.",
"2.Comparative Analysis: Measure the time taken for DNS resolution using both DoH and legacy DNS. Compare the performance of DoH with legacy DNS in each country to identify performance changes and variations.",
"3.Identification of Missing Data: Recognize the absence of legacy DNS measurements for certain developed countries (Australia, Canada, France, Germany, India, Japan, Netherlands, Singapore, South Korea, United Kingdom, United States) due to the data collection method used by BrightData. Note that for these countries, DNS resolution is done at the SuperProxy, and thus legacy DNS times are unavailable. Only DoH performance is measured for these countries.",
"4.Single Name Server Limitation: Use a single authoritative name server located in Champaign, Illinois, USA for DNS resolution throughout the study. Acknowledge that the distance from the name server affects absolute DoH performance values and plan to investigate the impact of distributed authoritative name servers in future work.",
"5.Performance Analysis by Region: Analyze performance data to understand regional differences, highlighting that countries with lower economic status (e.g., Central Africa, West Africa, South Asia) suffer more in performance when adopting DoH. Compare these findings with countries having higher economic status (e.g., North America, Western Europe, Northern Europe), which show better performance with DoH compared to legacy DNS."
      ],
    },
    {
      id: 5,
      title:
        "DNS-BC: Fast, Reliable and Secure Domain Name System Caching System Based on a Consortium Blockchain",
      description: "https://www.mdpi.com/1424-8220/23/14/6366",
problemCategory: "Privacy and Security Implications of DoH",
solutionCategory: "Enhancing HTTPS and DNS Security",
      methodologyCategory:"System Design and Implementation",
      section1:
        "The primary problem addressed in this study is the inefficiency, inaccuracy, and security vulnerabilities of traditional DNS caching systems. Recursive resolvers in DNS rely on caching to speed up response times, but these systems suffer from issues such as low real-time performance, poor accuracy due to expired caches, and numerous security and privacy concerns. The study aims to enhance the DNS caching system by leveraging consortium blockchain technology and developing a new encrypted DNS protocol to address these challenges.",
      section2: ["To address the identified problems, the study proposes the following solutions:",
"1.Consortium Blockchain-based Caching System (DNS-BC): Implement a DNS caching system using consortium blockchain to improve accuracy, real-time performance, and security. The immutable nature of the blockchain ensures cache accuracy, and the synchronization mechanism ensures up-to-date information.",
"2.Credibility Management System: Design a system to manage the credibility of nodes, ensuring trustworthy and reliable caching.",
"3.New Encrypted DNS Protocol (DoK): Develop DNS over KCP (DoK), a fast, reliable, and secure DNS protocol that significantly reduces transmission latency and enhances data transmission speed compared to existing protocols like DNS over TLS (DoT) and DNS over HTTPS (DoH)."],
      section3: ["The study employs a multi-phase methodology to develop and evaluate the proposed DNS-BC system and the DoK protocol:",
"1.System Design and Implementation: Consortium Blockchain Integration: Design and implement a DNS caching system based on consortium blockchain technology. The blockchain stores cached DNS records and credibility scores of nodes, maintained by authoritative nodes. Credibility Management System: Develop a system to calculate and manage the credibility scores of nodes. This system ensures the accuracy and reliability of cached data and optimizes the use of trustworthy nodes for cache hits.",
"2.Development of DoK Protocol: Protocol Design: Design the DoK protocol based on the KCP protocol, which is known for its fast and reliable transmission capabilities. Ensure the protocol is compatible with existing DNS systems and can replace DoT and DoH. Encryption Mechanism: Implement an efficient encryption mechanism to secure DNS transmissions while minimizing latency and connection establishment overhead.",
"3.Experimental Evaluation:",
"Performance Metrics: Measure the transmission time, accuracy, and real-time performance of the DNS-BC system and DoK protocol.",
"Comparison with Existing Protocols: Compare the performance of DoK with widely used encrypted DNS protocols (DoT and DoH) to validate the improvements in transmission speed and latency.",
"4.Results Analysis:",
"Accuracy and Real-Time Performance: Analyze the accuracy and real-time performance improvements achieved by the consortium blockchain-based caching system.",
"Transmission Speed: Evaluate the transmission speed of the DoK protocol, demonstrating its superiority over DoT and DoH."],
    },
    {
      id: 6,
      title: "Summary of DNS over HTTPS Abuse",
      description: "https://www.researchgate.net/publication/360645275_Summary_of_DNS_over_HTTPS_Abuse",
      solutionCategory: "Machine Learning-Based Detection",
problemCategory:"Traffic Analysis and Detection",
methodologyCategory:"Survey and Literature Review",
      section1: "The primary problem addressed in this paper is the abuse of the DNS over HTTPS (DoH) protocol. While DoH was developed to enhance user privacy by encrypting DNS queries, this encryption also introduces significant security threats. Malicious actors exploit DoH to conceal their activities, making it challenging for network security tools to detect and analyze the traffic. The paper examines various real-world scenarios where DoH is used for malicious purposes, highlighting the need for better detection and mitigation strategies.",
      section2: ["Detection Mechanisms: The paper emphasizes the need for advanced detection mechanisms to identify DoH traffic and distinguish between legitimate and malicious use.",
        "Policy Enforcement: Recommends the implementation of policies that can selectively allow or block DoH traffic based on its origin and nature.",
        "Machine Learning Models: Suggests using machine learning models to detect anomalies in DoH traffic that may indicate abuse."
        ],
      section3: ["Survey of Existing Research: The authors conducted a comprehensive survey of existing research on DoH, covering performance, adoption, privacy, and security perspectives.",
        "Analysis of Public Sources: They analyzed public sources such as GitHub, malware analysis blogs, and VirusTotal to understand the current state of DoH abuse.",
        "Real-World Scenarios: The paper describes three real-world abuse scenarios observed through threat monitoring, providing detailed case studies of how DoH is exploited in practice.",
        "Taxonomy of DoH Abuse: A taxonomy categorizing DoH abuse into three categories: Command and Control (C2) Communication, Covert Channels, and Unaware Usage.",
        "Future Research Challenges: The authors outline several research challenges, including the need for improved DoH blocking/filtering techniques, detection of legitimate versus illegal use, and detection of malicious use of DoH."
        ],
    },
    {
      id: 7,
      title: "DoH Insight: detecting DNS over HTTPS by machine learning",
      description: "https://dl.acm.org/doi/abs/10.1145/3407023.3409192",
      solutionCategory: "Machine Learning-Based Detection",
problemCategory:"Traffic Analysis and Detection",
methodologyCategory:"Machine Learning and Data Analysis",
      section1: "The paper titled DoH Insight: Detecting DNS over HTTPS by Machine Learning addresses the challenge of detecting DNS over HTTPS (DoH) traffic to enhance network security. DoH encrypts DNS queries to improve user privacy, but this encryption can also obscure malicious activities from security tools. The problem is to accurately recognize DoH traffic amidst regular HTTPS traffic and identify the applications generating DoH communication, using machine learning techniques.",
      section2: ["Machine Learning-Based Detection: Implement machine learning models to distinguish DoH traffic from regular HTTPS traffic.",
        "Client Identification: Develop classifiers to identify specific DoH clients (e.g., Firefox, Chrome, cloudflare) based on behavioral patterns in network traffic."
        ],
      section3: ["Traffic Analysis: Capture and analyze DoH traffic generated by different clients. Filter and decrypt some DoH packets to understand packet contents and identify patterns distinguishing DoH from regular HTTPS.",
        "Feature Selection: Select significant features for machine learning models, including packet sizes, durations, inter-packet delays, and traffic symmetry.",
        "Dataset Creation: Create a dataset by capturing DoH traffic from web browsers and a DoH proxy in real-world environments. Ensure a balanced dataset for training and testing machine learning models.",
        "Machine Learning Models: Evaluate various machine learning algorithms (e.g., 5-NN, C4.5 Decision Tree, Random Forest, Naive Bayes, Ada-boosted Decision Tree) for accuracy in DoH detection and client classification.",
        "Performance Evaluation: Use 5-Fold cross-validation to assess the models' precision, recall, and overall accuracy. Implement oversampling and undersampling techniques to handle class imbalance in the dataset."],
    },
    {
      id: 8,
      title:
        "How DNS over HTTPS is Reshaping Privacy, Performance, and Policy in the Internet Ecosystem",
      description: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3427563",
      solutionCategory: "Performance and Operational Impact",
problemCategory:"Performance Impact and Migration Challenges", 
methodologyCategory:"Market and Policy Analysis",
      section1: "The paper titled 'How DNS over HTTPS is Reshaping Privacy, Performance, and Policy in the Internet Ecosystem explores the implications of DNS over HTTPS (DoH) on privacy, performance, and policy. The problem addressed is the significant change in the DNS resolution process due to DoH, which shifts the responsibility from ISPs to third-party content providers and CDNs. This shift has various consequences for performance, competition, and regulatory policies. The paper investigates these impacts systematically, measuring performance differences, examining market dynamics, and discussing policy implications.",
      section2: "Privacy and Security Enhancements: Encrypting DNS queries to improve user privacy and prevent eavesdropping.Performance Analysis: Evaluating the performance impact of DoH compared to traditional DNS.Market Analysis: Analyzing how the shift to DoH affects the competitive landscape among ISPs, CDNs, and other stakeholders.Policy Recommendations: Investigating regulatory and policy implications and providing recommendations to address these changes.",
      section3: ["Market Structure Analysis: Analyzing the interdependencies and relationships between different agents involved in DNS resolution, including ISPs, CDNs, web browsers, and third-party resolvers.",
"Performance Measurements: Conducting client-based measurements to compare page load times and DNS resolution times using different DoH providers under various network conditions. Emulating different network performance profiles, including high-speed university networks and mobile networks, to assess the impact on performance.",
"Regulatory and Policy Analysis: Examining the regulatory implications of shifting DNS resolution from ISPs to third-party providers, including the effects on net neutrality, privacy, and content filtering."],
    },
    {
      id: 9,
      title: "Measuring DNS-over-HTTPS Performance Around the World",
      description: "https://dl.acm.org/doi/abs/10.1145/3487552.3487849",
      solutionCategory:
        "Performance and Operational Impact",
problemCategory:"Performance Impact and Migration Challenges", 
methodologyCategory:"Data Collection and Comparative Analysis",
      section1: "The paper 'Measuring DNS-over-HTTPS Performance Around the World' investigates the performance implications of adopting DNS-over-HTTPS (DoH) globally. While DoH enhances privacy by encrypting DNS queries, it also impacts DNS resolution times, which can affect overall internet performance. The study aims to understand the performance differences between traditional DNS (Do53) and DoH across different regions and under varying network conditions, providing insights into the potential consequences of a global shift to DoH.",
      section2: "Performance Measurement and Comparison: Conducting a comprehensive measurement of DoH performance compared to Do53.Geographic Analysis: Analyzing performance variations across different countries and regions.Infrastructure Improvement Recommendations: Suggesting enhancements to DoH infrastructure and deployment strategies to mitigate performance degradation.",
      section3: ["Data Collection: Using the BrightData proxy network to gather performance data from 22,052 unique clients across 224 countries and territories.",
"Performance Metrics: Measuring DNS resolution times for DoH and Do53, including the initial resolution time and times for subsequent queries using the same TLS session.",
"Public DoH Providers: Comparing performance among four public DoH providers: Cloudflare, Google, NextDNS, and Quad9.",
"Regression Analysis: Modeling DNS performance as an outcome of several explanatory variables, such as internet infrastructure investment, economic development, and resolver properties."],
    },
    {
      id: 10,
      title: "A Comprehensive Study of DNS-over-HTTPS Downgrade Attack",
      description: "https://www.usenix.org/conference/foci20/presentation/huang",
      solutionCategory:
        "Enhancing HTTPS and DNS Security",
problemCategory:"General DNS Vulnerabilities and Attacks", 
methodologyCategory:"Experimental Validation and Performance Analysis",
      section1: "The paper titled 'A Comprehensive Study of DNS-over-HTTPS Downgrade Attack' investigates the vulnerability of DNS-over-HTTPS (DoH) to downgrade attacks. DoH is designed to enhance DNS confidentiality and integrity by encrypting DNS queries and responses, but this paper reveals that these protections can be compromised. Specifically, it examines how browsers' implementation of DoH, particularly the use of Opportunistic Privacy profiles, allows DoH to fall back to unencrypted DNS (plaintext DNS) when DoH is not available, making it susceptible to downgrade attacks.",
      section2: "Strict Privacy Profiles: Advocating for the use of Strict Privacy profiles in browsers to prevent fallback to plaintext DNS.User Notifications: Implementing user notifications to alert users when a downgrade from DoH to plaintext DNS occurs.Revised Browser Implementations: Proposing revisions to browser implementations to better handle DoH disconnections and downgrades.Protocol Revisions: Suggesting changes to the DoH protocol to mitigate downgrade vulnerabilities, such as securing the URI resolution phase or embedding IP addresses in URIs.",
      section3: ["Attack Surface Analysis: Systematically analyzing the process of DoH communication to identify potential attack vectors for downgrades.",
"Lab Experiments: Conducting lab-based experiments to test the effectiveness of various attack vectors (DNS traffic interception, DNS cache poisoning, TCP traffic interception, and TCP reset injection) on different browsers.",
"Browser Testing: Evaluating six popular browsers (Chrome, Firefox, Edge, Brave, Opera, and Vivaldi) to observe their reactions to downgrade attacks.",
"Feedback Collection: Reporting findings to browser vendors and collecting their feedback on the proposed countermeasures."],
    },
    {
      id: 11,
      title: "ENCRYPTED DNS =⇒ PRIVACY?  ANALYSIS TRAFFIC PERSPECTIVE",
      description: "https://arxiv.org/abs/1906.09682",
      solutionCategory: "Traffic Analysis and Fingerprinting",
problemCategory:"Traffic Analysis and Detection",
methodologyCategory:"Machine Learning and Data Analysis",
      section1: "The paper examines whether encrypting DNS traffic using protocols like DNS-over-TLS (DoT) and DNS-over-HTTPS (DoH) can effectively protect users from traffic analysis-based monitoring and censorship. Traditional DNS queries are unencrypted, making them vulnerable to surveillance and censorship. The study evaluates if encryption alone is sufficient to prevent such threats.",
      section2: "Feature Engineering for Traffic Analysis: The study introduces a novel set of features tailored to the unique characteristics of DNS traffic, such as its bursty and chatty nature, to perform traffic analysis attacks.Traffic Analysis Attacks: Demonstrates that traffic analysis can still identify domains with high accuracy, even when DNS traffic is encrypted, using significantly less data compared to attacks on HTTPS flows.Evaluating Defenses: The study assesses the effectiveness of various defenses, such as standardized padding schemes and routing encrypted DNS over Tor, in mitigating traffic analysis attacks.",
      section3: ["Data Collection: The authors collected encrypted DNS traffic data by setting up virtual machines and using automated browsing to generate DNS queries. The data included traces from multiple environments and configurations to ensure comprehensive analysis.",
"Traffic Analysis Techniques: Implemented machine learning classifiers, specifically Random Forests, to analyze the engineered features and perform domain identification attacks on the collected encrypted DNS traffic.",
"Experimental Validation: Conducted experiments to measure the impact of factors such as location, resolver, platform, and client application on the performance of traffic analysis attacks. Additionally, evaluated the effectiveness of existing defenses and alternative strategies like routing DNS over Tor."],
    },
    {
      id: 12,
      title:
        "ON THE IMPACT OF DNS OVER HTTPS PARADIGM ON CYBER SYSTEMS",
      description: "https://ieeexplore.ieee.org/abstract/document/9092077",
      solutionCategory: "Enhancing HTTPS and DNS Security",
problemCategory:"Detection and Mitigation of DNS Tunneling and Malware", 
methodologyCategory:"Survey and Literature Review",
      section1: "The paper examines the implications of adopting DNS over HTTPS (DoH) for DNS operations and security. DoH aims to enhance privacy and integrity by encrypting DNS queries within HTTPS traffic, making them indistinguishable from regular web traffic. However, this encryption poses challenges for detecting and mitigating DNS-based cyber threats.",
      section2: "DoH Adoption: DoH enhances confidentiality and integrity by using HTTPS to encrypt DNS traffic.Security Enhancements: The study explores how DoH, alongside other security enhancements like DNSSEC, mitigates DNS vulnerabilities.Malware Detection: Examines methods for detecting malicious use of DNS, including botnet activities and data exfiltration.",
      section3: ["Literature Review: Surveys DNS weaknesses, security enhancements, and malware usage of DNS.",
"Experimental Analysis: Tests detection methods in an environment with DoH traffic.",
"Feature Visibility: Assesses the observability of various features in encrypted DNS traffic."],
    },
    {
      id: 13,
      title:
        "EXPLORING SIMPLE DETECTION TECHNIQUES FOR DNS-OVER-HTTPS TUNNELS",
      description: "https://dl.acm.org/doi/abs/10.1145/3473604.3474563",
      solutionCategory: "Detection and Mitigation of DNS Tunneling",
problemCategory:"Detection and Mitigation of DNS Tunneling and Malware", 
methodologyCategory:"Machine Learning and Data Analysis",
      section1: "The paper explores the detection of DNS-over-HTTPS (DoH) tunnels, which are used for circumventing censorship by encrypting DNS traffic within HTTPS. This encryption makes traditional DNS traffic analysis ineffective, posing a challenge for detecting and mitigating DoH-based circumvention.",
      section2: "Threshold-Based Detection: The authors propose simple detection techniques using traffic characteristics like packet size, packet rate, and throughput to distinguish between normal DoH traffic and DoH tunneling traffic.Traffic Shaping: The study evaluates traffic shaping techniques to make DoH tunneling traffic resemble normal DoH traffic and evade detection.",
      section3: ["Traffic Generation: Generated datasets of normal and circumventor DoH traffic using automated browsing and packet capture.",
"Feature Analysis: Analyzed traffic characteristics (average payload length, packet rate, and throughput) and developed threshold-based attacks.",
"Experimental Validation: Conducted experiments to evaluate detection accuracy and the impact of traffic shaping on usability."],
    },
    {
      id: 14,
      title: "DNS PRIVACY NOT SO PRIVATE: THE TRAFFIC ANALYSIS PERSPECTIVE ",
      description: "https://dspace.networks.imdea.org/bitstream/handle/20.500.12761/581/hotpets18_dns_privacy.pdf?sequence=1",
      solutionCategory: "Traffic Analysis and Fingerprinting",
problemCategory:"Traffic Analysis and Detection",
methodologyCategory:"Machine Learning and Data Analysis",
      section1: "The ubiquity of the Domain Name Service (DNS) in Internet infrastructure poses a significant privacy risk as DNS queries are typically sent in plaintext, revealing information about the destination of connections. This compromises user privacy even when subsequent connections are encrypted (e.g., via HTTPS). The primary problem addressed in this research is evaluating whether the encryption of DNS queries using DNS-over-HTTPS (DoH) effectively prevents the fingerprinting and identification of specific webpages from the encrypted traffic. This is crucial because recent deployments by major providers like Google and Cloudflare aim to mitigate these privacy risks, yet the effectiveness of these measures against traffic analysis attacks remains uncertain.",
      section2: "The solution proposed in this research involves analyzing network traces containing DoH traffic to identify patterns that can be used to fingerprint specific webpages despite the presence of encryption. The research focuses on extracting traffic features such as size, timing, and order of packets to distinguish between different webpages. The goal is to determine if simple traffic analysis techniques can significantly reduce the anonymity of DNS queries, thus highlighting the need for additional privacy measures beyond encryption alone​​.",
      section3: ["Data Collection:A Raspberry Pi is set up as a DoH client sending DNS queries to Google and Cloudflare's DoH services.Network traffic is captured using tcpdump during single-query and multi-query experiments.Single-query experiments involve DNS queries for Alexa’s top one million websites, capturing 1,500 traces per day over 30 days for a subset of top, middle, and bottom-ranked websites.Multi-query experiments involve DNS traffic associated with loading a webpage and its resources (e.g., images, scripts) using Selenium with a headless Chrome driver for the top 100,000 Alexa websites, with a detailed analysis for the top 500 websites over 30 days​​.",
"Feature Extraction:Features are categorized into size, timing, and order.Size features include DNS query and response sizes, represented as tuples for single-query and sequences for multi-query experiments.Timing features involve inter-arrival times between queries and responses, considering the mean and variance of these times in multi-query scenarios.Order features refer to the pattern in which queries and responses occur, relevant in multi-query experiments​​.",
"Classification Problem:The classification task is to determine if a given network trace corresponds to a webpage in the dataset and, if so, identify the specific webpage.Initial results indicate that size features alone can significantly reduce the anonymity set of DNS queries. Variations over time are minimal, suggesting stability in these features for classification​​.",
"Evaluation and Analysis:The researchers plan to use recurrent neural networks (RNN) for richer classification, accounting for temporal variance in features.Future steps include assessing the impact of client operating system, location, and caching mechanisms on classification accuracy.The study aims to compare the results for DoH with those obtained from DNS-over-TLS to evaluate the relative effectiveness of these encryption methods​​."],
    },
    {
      id: 15,
      title:
        " AN ENSEMBLE FRAMEWORK FOR DETECTION OF DNS-OVER-HTTPS (DOH) TRAFFIC",
      description: "https://link.springer.com/article/10.1007/s11042-023-16956-9",
      solutionCategory: "Machine Learning-Based Detection",
problemCategory: "Privacy and Security Implications of DoH",
methodologyCategory:"Machine Learning and Data Analysis",
      section1: "The Domain Name System (DNS) is crucial for translating domain names to IP addresses. While originally intended for this mapping, DNS now transfers data in plain text, making it susceptible to cyberattacks such as DNS spoofing, DNS amplification, and cache poisoning. Despite existing security measures like DNS load balancers and services like OpenDNS and DNSFilters, attackers can still modify data packets over the network, leading to significant security and privacy concerns. Recently, DNS-Over-HTTPS (DoH) has been introduced to encrypt DNS traffic and protect against eavesdropping and other security issues. However, DoH presents its own set of challenges that need to be addressed for effective implementation and functioning.",
      section2: "The proposed solution is an automated approach to detect DoH traffic using an ensemble-based machine learning framework. This approach leverages the CIRA-CIC-DoHBrw-2020 dataset to train and evaluate the model on various classification metrics, including precision, recall, F-score, and confusion matrix. By conducting a detailed analysis of false positives and false negatives, the researchers aim to develop a reliable model that can efficiently detect anomalies in DoH traffic. The proposed ensembling techniques, EL1 and EL2, are shown to outperform existing methods, achieving an overall accuracy of 99.5% and 99.7% respectively, and F-scores of 99.8% and 99.7% respectively.",
      section3: ["Data Collection:The study uses the CIRA-CIC-DoHBrw-2020 dataset, which contains labeled traffic data for both DoH and non-DoH traffic.",
"Feature Extraction:Relevant features are extracted from the dataset to train the machine learning models. These features include packet sizes, timing information, and traffic patterns associated with DoH and non-DoH traffic.",
"Machine Learning Framework:An ensemble-based machine learning framework is developed, consisting of multiple classifiers that work together to improve detection accuracy.The framework includes two ensembling techniques, EL1 and EL2, designed to enhance the performance of the detection system.",
"Model Training and Evaluation:The models are trained using the extracted features and evaluated on classification metrics such as precision, recall, F-score, and the confusion matrix.A detailed analysis of false positives and false negatives is conducted to improve the model's reliability and reduce errors.",
"Performance Metrics:The effectiveness of the proposed techniques is measured using accuracy, precision, recall, and F-score.The results demonstrate that the ensembling techniques EL1 and EL2 significantly outperform existing approaches, with high accuracy and F-scores."],
    },
    {
      id: 16,
      title: "Detecting DNS over HTTPS based data exfiltration",
      description: "https://www.sciencedirect.com/science/article/pii/S1389128622001104",
      solutionCategory: "Traffic Analysis and Fingerprinting",
problemCategory:"Detection and Mitigation of DNS Tunneling and Malware",
methodologyCategory:"Machine Learning and Data Analysis", 
      section1: "The paper addresses the problem of detecting data exfiltration via DNS over HTTPS (DoH). Attackers use DNS tunneling to covertly transfer stolen information, but existing detection methods for plaintext DNS are ineffective for DoH tunneling due to the encryption of DNS traffic within HTTPS. This encryption, intended to enhance privacy, complicates the detection of malicious activities.",
      section2: "The authors propose a novel method to detect DoH-based data exfiltration. The approach leverages:TLS Fingerprinting: Analyzing the TLS fingerprints of DoH clients to provide preliminary warnings.Flow-based Features: Extracting features from encrypted DoH traffic to build classifiers capable of detecting DoH tunneling.",
      section3: ["The methodology involves several steps",
"TLS Fingerprinting:Measurement of TLS fingerprints from various DoH clients (browsers, DoH proxies, and proof-of-concept DoH tunneling implementations).Use of a whitelist mechanism based on these fingerprints to identify potential DoH tunneling activities.",
"Flow-based Detection:Extraction of flow-based features from DoH traffic, such as packet size and timestamps, to build classifiers.Extensive data collection of both benign and malicious DoH traffic under various environmental conditions (different locations, recursive resolvers, and packet lengths).Training and testing of classifiers (Boosted Decision Tree, Random Forest, and Logistic Regression) using these features.",
"Experimental Validation:Verification of the proposed method's effectiveness through a series of experiments.Examination of the impact of various factors (e.g., geographic location, recursive resolvers) on detection performance.Evaluation of adversarial considerations to understand how attackers might evade detection."],
    },
    {
      id: 17,
      title:
        "Fingerprinting DNS over HTTPS (DoH) ",
      description: "https://core.ac.uk/download/pdf/478868643.pdf",
      solutionCategory: "Traffic Analysis and Fingerprinting",
problemCategory:"Detection and Mitigation of DNS Tunneling and Malware", 
methodologyCategory:"Experimental Validation and Performance Analysis",
      section1: "The paper investigates the potential for fingerprinting to decrypt DNS over HTTPS (DoH) queries. DoH is designed to protect DNS queries by encrypting them and sending them over HTTPS, preventing them from being read in plaintext. The main concern is whether fingerprinting methods, such as ja3 and ja3s, can be used to differentiate and identify specific web pages within the encrypted DoH traffic, thereby compromising the confidentiality that DoH is intended to provide.",
      section2: "The study focuses on testing the effectiveness of fingerprinting methods ja3 and ja3s to:Determine if they can differentiate web pages hosted on the same server.Assess if these methods can identify specific content within DoH queries despite encryption.",
      section3: ["The methodology includes",
"Data Collection:Using tcpdump to capture traffic logs on a client machine running Ubuntu 20.04.Capturing logs of interactions with various Google services (Google Search, Google Photos, and Google Drive) and saving these logs as pcap files.",
"Fingerprinting Analysis:Running ja3 and ja3s scripts on the pcap files to generate MD5 hashes of the TLS handshakes.Comparing the generated hashes to see if they can differentiate between different Google services.",
"Analysis and Discussion:Evaluating the effectiveness of the MD5 hashes generated by ja3 and ja3s in identifying different web pages.Analyzing the number of requests and the size of the data transferred to find any distinguishing patterns."],
    },
    {
      id: 18,
      title:
        "Detection of Tunneling in DNS over HTTPS",
      description: "https://ieeexplore.ieee.org/abstract/document/9673380",
      solutionCategory: "Machine Learning-Based Detection",
problemCategory:"Detection and Mitigation of DNS Tunneling and Malware", 
methodologyCategory:"Machine Learning and Data Analysis",
      section1: "The paper addresses the challenge of detecting DNS tunneling in the encrypted environment of DNS over HTTPS (DoH). DNS tunneling allows malicious actors to transmit sensitive data covertly, bypassing firewalls and security mechanisms. Traditional methods for detecting DNS tunneling rely on analyzing unencrypted DNS queries, which are ineffective when dealing with encrypted DoH traffic. This research aims to develop a method to detect DoH tunneling using machine learning techniques, focusing on packet sizes and durations as key features.",
      section2: "The authors propose a solution that leverages machine learning models to detect DoH tunneling by analyzing features such as packet sizes and request durations. The models used in the study include:K-Nearest Neighbors (KNN),Support Vector Machines (SVM),Random Forests,Deep Factorization Machines (DeepFM)",
      section3: ["The methodology involves several key steps",
"Data Collection:Emulating a DNS tunneling environment by setting up a local server and using a Python script to encode mock sensitive data in DNS queries.Using Wireshark and tcpdump to capture packet data during DoH tunneling and standard web browsing sessions.Preprocessing the captured data to extract relevant features, such as packet sizes and response times.",
"Feature Analysis:Analyzing the collected data to identify features that correlate with DoH tunneling activity.Creating a correlation matrix to determine the most influential features for detecting tunneling.",
"Model Implementation:Implementing and training machine learning models (KNN, SVM, Random Forests, DeepFM) using the preprocessed dataset.Evaluating the models based on their accuracy in classifying DoH tunneling and non-tunneling requests.",
"Experimental Validation:Conducting experiments to validate the effectiveness of the proposed detection method.Comparing the performance of different models using metrics such as F1 scores."],
    },
    {
      id: 19,
      title: "A survey of domain name system vulnerabilities and attacks",
      description: "https://www.oaepublish.com/articles/jsss.2020.14",
      solutionCategory: "Detection and Mitigation of DNS Tunneling",
problemCategory:"General DNS Vulnerabilities and Attacks",
methodologyCategory:"Survey and Literature Review", 
      section1: "The paper explores the vulnerabilities and attacks associated with the Domain Name System (DNS). Despite DNS's critical role in internet functionality, it was initially developed without security considerations, making it susceptible to various cyberattacks. Although DNS Security Extensions (DNSSEC) were introduced to enhance security, they have not been widely deployed, leaving DNS exposed to multiple threats.",
      section2: "The paper categorizes DNS attacks and discusses mitigation strategies:Attacks:DNS Data Tampering: Includes DNS cache poisoning, Kaminsky attacks, and DNS hijacking.DNS Data Flooding: Encompasses DNS flooding attacks, DNS reflection and amplification DDoS attacks, and random subdomain attacks.Abuse of DNS: Covers DNS tunneling, domain generation algorithms, and fast flux techniques.DNS Server Structure Attacks: Includes non-existent domain attacks and phantom domain attacks.Mitigation Systems:DNSSEC: Enhances DNS security by adding digital signatures to DNS data.Monitoring and Detection Systems: Such as Kopis, Domain Watcher, Anax, and Notos, which monitor DNS traffic and detect malicious activities.Security Extensions: Include Transaction SIGnature (TSIG), DNS-Based Authentication of Named Entities (DANE), and DNS-over-HTTPS (DoH).Advanced DNS Functions: Methods like DNS Proxy Server, T-DNS, S-DNS, and Response Rate Limiting to provide additional security.",
      section3: ["The methodology involves",
"Background Overview:Describing DNS and DNSSEC, their functionalities, and inherent vulnerabilities.Discussing the history, philosophy, and structural aspects of DNS.",
"Vulnerability Analysis:Identifying conceptual, structural, and communication vulnerabilities in DNS and DNSSEC.Assessing the overhead, complexity, and deployment issues associated with DNSSEC.",
"Attack Classification:Categorizing DNS attacks into data tampering, data flooding, abuse of DNS, and server structure attacks.Assessing the attacks based on criteria such as method, effect, mode, source/target, and location of the attack target.",
"Mitigation Systems:Evaluating existing mitigation systems and their effectiveness against DNS attacks.Analyzing DNSSEC and redundant DNS, monitoring and detection systems, security extensions, and advanced DNS functions.Reviewing secure/enterprise DNS providers and their support for security enhancements like DoH and TLS."],
    },
    {
      id: 20,
      title: "A Survey on DNS Encryption: Current Development, Malware Misuse, and Inference Techniques",
      description: "https://dl.acm.org/doi/full/10.1145/3547331",
      solutionCategory: "Performance and Operational Impact",
problemCategory: "Privacy and Security Implications of DoH",
methodologyCategory:"Specific Techniques and Frameworks",   
      section1: "The paper surveys the development and implications of DNS encryption technologies like DNS over TLS (DoT), DNS over HTTPS (DoH), and DNS over QUIC (DoQ). It aims to understand how these encryption methods enhance user privacy and security, how they can be misused by malware for activities such as command-and-control (C&C) communications and data exfiltration, and how current techniques can infer and detect encrypted DNS traffic.",
      section2: "The paper discusses several solutions and methodologies to address the challenges posed by DNS encryption:Encryption Standards and Adoption: Reviews the standardized methods (DoT, DoH, DoQ) and their adoption by various public DNS resolvers and user applications.Malware Misuse: Explores how malware leverages encrypted DNS for C&C and data exfiltration, and the limitations of existing detection mechanisms.Inference Techniques: Surveys methods to detect and classify encrypted DNS traffic and to profile user activities by analyzing encrypted DNS traffic.",
      section3: ["The paper employs a comprehensive survey approach, reviewing literature from 2016 to 2021. The methodology involves",
"Overview of DNS Encryption:Describes standard DNS encryption methods, their adoption status, performance, benefits, and security issues.",
"Analysis of Malware Misuse:Details how malware exploits encrypted DNS for C&C communications and data exfiltration.Highlights the ineffectiveness of traditional detection methods on encrypted DNS traffic.",
"Inference Techniques:Reviews current methods for detecting encrypted DNS packets within HTTPS traffic.Discusses techniques for classifying benign and malicious encrypted DNS traffic.Explores methods for profiling user activities through encrypted DNS traffic analysis."],
    },
    {
      id: 21,
      title: "DNS over HTTPS (DoH): Definition, Implementation, Benefits and Risks",
      description: "https://heimdalsecurity.com/blog/dns-over-https-doh/",
      solutionCategory: "Traffic Analysis and Fingerprinting",
problemCategory:"Traffic Analysis and Detection",
methodologyCategory:"Implementation and Security/Privacy Analysis",
      section1: "DNS over HTTPS (DoH) encrypts DNS queries to prevent eavesdropping and tampering, enhancing privacy and security. However, it poses challenges in network security monitoring and filtering, as traditional DNS traffic analysis tools become ineffective with DoH.",
      section2: "DNS Encryption: Implements DoH using port 443 to blend DNS requests with regular HTTPS traffic.Adoption by Browsers: Google Chrome and Mozilla Firefox have integrated DoH to secure DNS queries.",
      section3: ["Implementation: Users can enable DoH in browser settings or operating systems like Windows 11.",
"Impact Analysis: Evaluates how DoH affects DNS traffic filtering and network security."],
    },
    {
      id: 22,
      title: " DNS-over-HTTPS (DoH) Operational and Privacy Issues",
      description: "https://www.ietf.org/blog/doh-operational-and-privacy-issues/",
      solutionCategory: "Traffic Analysis and Fingerprinting",
problemCategory:"Traffic Analysis and Detection",
methodologyCategory:"Implementation and Security/Privacy Analysis",
      section1: "The blog discusses the operational and privacy challenges posed by DNS over HTTPS (DoH). While DoH enhances user privacy by encrypting DNS traffic, it complicates traditional DNS management strategies and centralizes DNS traffic, potentially enabling extensive user tracking by a few large providers.",
      section2: "DNS Encryption: Implements DoH using HTTPS to encrypt DNS queries.Centralization: Major providers like Google and Cloudflare offer DoH services, improving privacy but raising concerns about data monopolization.",
      section3: ["Implementation: Analyzes DoH adoption and its impact on DNS management and privacy.",
"Privacy Issues: Evaluates how DoH prevents eavesdropping but enables tracking by centralized providers."],
    },
    {
      id: 23,
      title: " DNS Over HTTPS: 3 Strategies for Enterprise Security Monitoring",
      description: "https://insights.sei.cmu.edu/blog/dns-over-https-3-strategies-for-enterprise-security-monitoring//",
      solutionCategory: "Detection and Mitigation of DNS Tunneling",
problemCategory:"Traffic Analysis and Detection",
methodologyCategory:"Implementation and Security/Privacy Analysis",
      section1: "The blog discusses the security monitoring challenges posed by DNS over HTTPS (DoH). DoH encrypts DNS traffic to enhance privacy but complicates traditional DNS-based network monitoring and threat detection.",
      section2: "The blog proposes three strategies for enterprise security monitoring:Disable DoH: Manage and enforce policies to disable DoH on managed endpoints.Block Known DoH Providers: Block connections to known DoH providers for both managed and unmanaged endpoints.Assume Breach and Focus on Detection: Implement robust detection mechanisms to identify and respond to unauthorized DoH usage.",
      section3: ["Implementation: Focuses on disabling DoH, blocking providers, and enhancing detection capabilities.",
"Privacy and Security Analysis: Assesses how DoH impacts visibility and the effectiveness of traditional monitoring tools."],
      },
    {
      id: 24,
      title: "Impact of DNS over HTTPS (DoH) on DNS Rebinding Attacks",
      description: "https://research.nccgroup.com/2020/03/30/impact-of-dns-over-https-doh-on-dns-rebinding-attacks/",
      solutionCategory: "Performance and Operational Impact",
problemCategory:"Detection and Mitigation of DNS Tunneling and Malware", 
methodologyCategory:"Implementation and Security/Privacy Analysis",
      section1: "The blog explores the impact of DNS over HTTPS (DoH) on DNS rebinding attacks. DNS rebinding attacks exploit the delay in DNS resolution to bypass network security measures, allowing attackers to communicate with private networks.",
      section2: "The analysis focuses on:Security Implications: How DoH affects traditional DNS rebinding attack vectors.Mitigation Techniques: Strategies to protect against DNS rebinding in a DoH-enabled environment, including network configuration and security policies.",
      section3: ["Implementation: Investigates DoH's role in enhancing DNS security while potentially facilitating new attack vectors.",
"Privacy and Security Analysis: Evaluates how DoH complicates DNS rebinding detection and mitigation."],
    },
    {
      id: 25,
      title: "DNS Over HTTPS: What is it? Does it protect users?",
      description: "https://www.privacyaffairs.com/dns-over-https/",
      solutionCategory: "Performance and Operational Impact",
problemCategory:"Traffic Analysis and Detection",
methodologyCategory:"Implementation and Security/Privacy Analysis",
      section1: "The blog discusses DNS over HTTPS (DoH), which encrypts DNS queries to prevent eavesdropping and tampering. While enhancing user privacy, it poses challenges for enterprise security monitoring and DNS-based threat detection.",
      section2: "DoH Implementation: Encrypts DNS traffic within HTTPS.Enterprise Strategies: Proposes solutions such as disabling DoH, blocking known DoH providers, and focusing on detecting unauthorized DoH usage to maintain security monitoring.",
      section3: ["Implementation: Analyzes DoH's role in improving privacy.",
"Security Analysis: Evaluates the impact of DoH on network security and monitoring."],
    },
    {
      id: 26,
      title: "The DNS over HTTPS (DoH) Mess",
      description: "https://www.blackhillsinfosec.com/the-dns-over-https-doh-mess/",
      solutionCategory: "Enhancing HTTPS and DNS Security",
problemCategory: "Privacy and Security Implications of DoH",
methodologyCategory:"System Design and Implementation",
      section1: "The advent of DNS over HTTPS (DoH) presents a significant challenge and controversy in network privacy and security landscapes. Traditionally, DNS traffic has been unencrypted, exposing users to potential surveillance and data mining. The introduction of DoH, while aiming to enhance privacy by encrypting DNS queries over HTTPS, has sparked concerns about centralized control, data privacy violations, and the subversion of open internet principles. This poses a dilemma, particularly for security-conscious individuals and enterprises that prefer to manage their DNS infrastructure locally to maintain control and visibility over network activities. The conflict arises from balancing the benefits of encryption with the potential risks of consolidating DNS resolution into the hands of a few powerful entities, thereby compromising the decentralized and resilient nature of DNS.",
      section2: "Addressing the challenges posed by DNS over HTTPS requires a multifaceted approach that respects both privacy concerns and the operational needs of secure network management. One effective solution involves deploying DNS over Transport Layer Security (DoT), which similarly encrypts DNS queries but operates over a dedicated TCP port (853). Unlike DoH, DoT aligns with established protocol standards and provides a decentralized method for encrypting DNS traffic without introducing potential issues of protocol stack convergence or centralized control. By leveraging DoT, organizations and privacy-conscious individuals can maintain the integrity of DNS while ensuring data privacy and security in network communications.",
      section3: ["To implement a robust solution mitigating the challenges of DNS over HTTPS, the following methodology can be adopted:",
"Research and Analysis:Conduct a thorough analysis of DoH and DoT protocols, understanding their implications for privacy, security, and network performance.Evaluate existing DNS configurations and infrastructure to assess readiness and compatibility for implementing DoT.",
"Infrastructure Preparation:Configure and deploy a local DNS resolver capable of supporting DoT, such as using the Stubby DNS privacy daemon, which facilitates encrypted DNS queries to preferred servers like Quad9.Set up and secure the infrastructure to ensure only authorized DNS traffic is processed, blocking unauthorized access to external DNS providers.",
"Configuration and Integration:Modify DNS resolver configurations (e.g., Bind) to forward queries to the local DoT resolver, ensuring all DNS traffic remains encrypted and secure.Implement firewall rules using iptables to enforce strict controls on DNS traffic, allowing only encrypted DNS traffic via DoT while blocking DoH traffic to external providers.",
"Testing and Optimization:Conduct testing to validate the functionality and performance of the DoT implementation, ensuring seamless integration with existing network services.Optimize configurations to enhance DNS query response times and mitigate any performance impacts from encryption overhead.",
"Monitoring and Maintenance:Implement monitoring tools to track DNS query volumes, performance metrics, and security incidents related to DNS traffic.Establish a maintenance schedule to update DNS configurations, firewall rules, and encryption protocols in response to emerging threats or operational requirements."],
    },
    {
      id: 27,
      title: "Collection of datasets with DNS over HTTPS traffic",
      description: "https://www.sciencedirect.com/science/article/pii/S2352340922005121",
      solutionCategory: "Broader Implications and Regulatory Concerns",
problemCategory:"Traffic Analysis and Detection",
methodologyCategory:"Automated Data Collection and Analysis",
      section1: "The challenge lies in effectively collecting and utilizing datasets that encompass both DNS over HTTPS (DoH) traffic and conventional HTTPS traffic, sourced from controlled environments as well as a real-world ISP backbone network serving a large user base. These datasets include captures from various DoH implementations and configurations across 16 selected servers, alongside traffic generated through web accesses. The aim is to provide a comprehensive view of DoH behavior in diverse network settings, facilitating research in traffic recognition, pattern analysis, and broader network analysis tasks such as malware identification using real-world benign traffic samples.",
      section2: "The solution involves compiling and curating labeled datasets that encompass a wide range of DoH and non-DoH HTTPS traffic scenarios. These datasets are valuable for training network classifiers, evaluating performance, and experimenting with novel traffic features. By capturing traffic from multiple DoH servers and environments, including controlled experiments with popular web browsers like Chrome and Firefox, researchers gain access to a robust dataset for in-depth analysis and experimentation. Additionally, the datasets support IP flow-based analysis, providing insights into DoH behavior and its interaction with existing network infrastructure components like proxies and firewalls.",
      section3: ["Data Acquisition and Generation:Controlled Environment (Generated Data): Utilize automated processes with browsers like Firefox and Chrome to access a curated list of websites, capturing DoH traffic variations under controlled conditions.",
"Real-World Data: Capture traffic from the CESNET2 backbone network, spanning multiple monitoring points across the Czech Republic. Implement capturing filters to isolate DoH traffic and manage data volumes effectively, ensuring minimal packet loss and accurate data representation despite network asymmetries.",
"Data Processing and Enrichment:Generated Data: Employ packet capture tools like tcpdump within Docker containers to gather browser-generated traffic samples. Use Selenium for browser automation, ensuring realistic traffic patterns.Real-World Data: Perform full-packet captures at monitoring points using custom scripts and parallel SSH for concurrent data collection. Merge and deduplicate captured packets to ensure data integrity and remove transit traffic noise.",
"Anonymization and Dataset Preparation:Real-World Data: Anonymize captured traffic to protect user privacy, utilizing SHA256 hashing for IP addresses and substituting payload with placeholder characters ('X'). Export anonymized flows enriched with TLS information using ipfixprobe for further analysis compatibility.",
"Dataset Utilization:Provide labeled datasets that include both DoH and non-DoH HTTPS traffic, suitable for training machine learning models, evaluating detection algorithms, and studying DoH behavior in various network contexts.Support research in improving DoH specifications, enhancing network performance, and addressing security challenges associated with encrypted DNS traffic."],
    },
    {
      id: 28,
      title: "DNS-over-HTTPS: why the web’s latest privacy tech is causing an outcry",
      description: "https://theconversation.com/dns-over-https-why-the-webs-latest-privacy-tech-is-causing-an-outcry-125188",
      solutionCategory: "Broader Implications and Regulatory Concerns",
problemCategory:"Broader Implications and Regulatory Concerns", 
methodologyCategory:"Market and Policy Analysis",
      section1: "DNS-over-HTTPS (DoH) promises enhanced privacy by encrypting DNS queries, preventing third parties from intercepting and deciphering user browsing activities. However, this technology has sparked significant controversy. Critics argue that while DoH hides DNS queries from unauthorized access, it also poses risks: it could hinder law enforcement efforts to combat criminal activities online, including child exploitation, by potentially evading content blocking measures traditionally based on DNS inspection. Moreover, the concentration of DoH service providers, predominantly in the US, raises concerns about global governance and surveillance implications, as these providers may not be subject to regulations that protect privacy and data sovereignty in other countries.",
      section2: "To address the concerns surrounding DNS-over-HTTPS, several approaches are being considered. Firstly, efforts are underway to diversify the pool of DoH service providers beyond US-based entities. This could mitigate fears of geopolitical dominance and enhance trust through localization of service and compliance with regional regulations. Secondly, there is a push for better collaboration between DoH providers and governmental bodies to establish frameworks that balance privacy with law enforcement needs, potentially through mechanisms that allow legitimate content blocking requests while safeguarding user privacy. Lastly, ongoing dialogues within regulatory bodies and internet governance forums aim to establish guidelines that clarify responsibilities and oversight regarding the use of DoH, ensuring it aligns with broader societal interests in privacy and security.",
      section3: ["1. Research and Stakeholder Engagement- **Objective**: Understand the technical and regulatory landscape of DNS-over-HTTPS.- **Activities**: Conduct surveys and interviews with stakeholders, including privacy advocates, law enforcement agencies, and DNS service providers.Analyze existing research on the impact of DNS-over-HTTPS on privacy and law enforcement practices.Identify concerns and potential solutions through literature review and expert consultations.",
"2. Policy and Regulatory Analysis: **Objective**: Assess existing and proposed regulatory frameworks related to internet privacy and data governance.**Activities**:Review international laws and policies concerning data protection and surveillance.Evaluate the feasibility and implications of adapting current frameworks to accommodate DNS-over-HTTPS.Propose regulatory adjustments or new guidelines to address emerging challenges.",
"3. Technical Implementation and Testing:**Objective**: Develop technical solutions to enhance the functionality and security of DNS-over-HTTPS.**Activities**:Collaborate with software developers to improve interoperability and performance of DoH implementations.Conduct simulations and testing to evaluate the impact of DNS-over-HTTPS on network performance and user experience.Implement encryption standards and protocols to ensure robust security measures are in place.",
"4. Public Awareness and Education:**Objective**: Inform and educate the public about the benefits and risks associated with DNS-over-HTTPS.**Activities**:Develop educational materials and workshops for internet users, policymakers, and industry stakeholders.Foster discussions through public forums and media engagements to raise awareness about privacy implications and regulatory challenges.Encourage transparency and accountability among DoH service providers through public disclosures and compliance reports.",
 "5. Monitoring and Evaluation:**Objective**: Monitor the deployment and adoption of DNS-over-HTTPS solutions.**Activities**:Establish metrics to track the usage and performance of DoH services.Evaluate the effectiveness of policy interventions and technical enhancements in addressing privacy concerns and regulatory challenges.Adjust strategies based on feedback from stakeholders and emerging trends in internet governance and cybersecurity."],
    },
    {
      id: 29,
      title: "A_Survey_on_DNS_Encryption_Current_Development_Malware_Misuse_and_Inference_Techniques",
      description: "https://www.researchgate.net/publication/357587121",
      solutionCategory: "Enhancing HTTPS and DNS Security",
problemCategory: "Privacy and Security Implications of DoH",
methodologyCategory:"Survey and Literature Review",
      section1: "The Domain Name System (DNS) serves as a critical component of internet infrastructure, translating domain names into IP addresses. Traditionally, DNS queries and responses are transmitted in plaintext, exposing them to interception and manipulation by third parties. To mitigate these risks and enhance user privacy, encryption standards such as DNS over TLS (DoT), DNS over HTTPS (DoH), and DNS over QUIC (DoQ) have been proposed. Despite their benefits, encrypted DNS also presents challenges, including misuse by malware for covert communications and the difficulty in monitoring and analyzing encrypted traffic for security purposes.",
      section2: "To address the challenges posed by unencrypted DNS traffic, the deployment of DNS encryption standards like DoT, DoH, and DoQ is crucial for securing communications between clients and resolvers, thereby safeguarding user privacy and data integrity. Concurrently, developing effective detection techniques is essential to identify and mitigate malware that exploits encrypted DNS for malicious activities such as C&C communication and data exfiltration. This involves leveraging advanced analytics and machine learning to distinguish normal from anomalous encrypted DNS traffic. Additionally, enhancing privacy and security measures through rigorous configuration management and decentralized DNS resolution strategies will mitigate risks associated with compromised resolvers and centralization, fostering a more resilient and secure internet infrastructure overall.",
      section3: ["1. Literature Review and Analysis:**Objective**: Survey existing research published since 2016 on DNS encryption technologies, focusing on adoption, performance, security issues, and benefits.**Activities**: Identify and categorize research on DNS encryption standards (DoT, DoH, DoQ).Review studies on the impact of DNS encryption on network performance across different regions and infrastructural conditions.Analyze case studies and reports on how malware utilizes encrypted DNS for malicious activities.",
    "2. Development of Detection Techniques:**Objective**: Create methodologies to detect and classify encrypted DNS traffic generated by malware versus legitimate user activity.**Activities**: Investigate machine learning and statistical approaches to distinguish normal from anomalous encrypted DNS traffic.Implement algorithms for real-time monitoring and detection of suspicious DNS queries and responses.Validate detection techniques through simulations and empirical studies using real-world datasets.",
"3. Privacy and Security Enhancement:**Objective**: Address privacy concerns and vulnerabilities associated with encrypted DNS deployments.**Activities**: Evaluate privacy leakage risks from compromised resolvers and misconfigured encryption settings.Propose strategies for managing encryption configurations securely on both client and resolver sides.Explore decentralized approaches to DNS resolution to mitigate centralization risks and enhance user privacy.",
"4. Future Directions and Recommendations**Objective**: Identify areas for future research and development in DNS encryption.**Activities**: Define research directions for improving performance and scalability of DNS encryption protocols.Recommend measures for enhancing security and privacy in encrypted DNS environments.Advocate for collaborative efforts to standardize and optimize encrypted DNS implementations across different platforms and networks."],
    },
    {
      id: 30,
      title: "DNS-over-HTTPS in Unbound",
      description: "https://medium.com/nlnetlabs/dns-over-https-in-unbound-c7a407e8480",
      solutionCategory: "Enhancing HTTPS and DNS Security",
problemCategory: "Privacy and Security Implications of DoH",
methodologyCategory:"System Design and Implementation",
      section1: "NLnet Labs' Unbound DNS resolver prioritizes user privacy by encrypting DNS messages, but currently supports only DNS-over-TLS (DoT). With a rising demand for DNS-over-HTTPS (DoH), which offers additional resilience against blocking by utilizing the standard HTTPS port (443), there's a need to integrate DoH into Unbound. This integration must cater to DNS clients that support DoH but not DoT, maintain high performance, and efficiently manage resources to ensure stability.",
      section2: "To address these needs, NLnet Labs has implemented DNS-over-HTTPS (DoH) in Unbound, leveraging the HTTP/2 protocol via the nghttp2 library for efficient query handling and encryption through TLS. This integration ensures compatibility with clients that prefer DoH, maintains performance on par with DoT through HTTP/2's query pipelining and out-of-order processing, and provides flexible configuration options for optimizing resource management. Comprehensive documentation and metrics tracking support the deployment and ongoing maintenance of this new functionality, enhancing DNS privacy and security across various network environments.",
      section3: ["1. Research and Requirements Gathering:**Objective**: Understand the need for DoH and gather requirements.**Activities**:  Analyze existing Unbound functionalities.Study DoH specifications and privacy concerns.Collect feedback from users and stakeholders about the need for DoH support.",
"2. Design and Planning:**Objective**: Design a scalable and efficient DoH implementation.**Activities**:Design the integration of HTTP/2 with Unbound’s existing TCP handling.Plan the use of the nghttp2 library for HTTP/2 support.Define configuration options for flexibility and performance tuning.",
"3. Implementation:**Objective**: Develop the DoH functionality within Unbound.**Activities**:Integrate the nghttp2 library for HTTP/2 framing.Implement TLS encryption and configure certificate handling.Develop mechanisms to handle various HTTP status codes and error scenarios.Implement configuration options for HTTP endpoints, stream limits, and buffer sizes.",
"4. Testing and Optimization:**Objective**: Ensure functionality and performance of the DoH implementation.**Activities**:Conduct unit tests to verify individual components.Perform integration testing to ensure seamless operation with existing Unbound features.Optimize performance by tuning HTTP/2 stream handling and memory management.",
"5. Documentation and Deployment:**Objective**: Provide comprehensive documentation and facilitate deployment.**Activities**:Document the configuration and usage of DoH in Unbound.Prepare deployment guidelines and assist users in transitioning to the new version.Collect and analyze metrics to monitor DoH usage and performance.",
"6. Monitoring and Maintenance:**Objective**: Maintain the DoH functionality and address any issues.**Activities**:Monitor the use of DoH and gather feedback.Release updates and patches as needed.Continuously explore new features and improvements, such as new media types."],
        },
      {
        id: 31,
        title:"Summary of DNS Over HTTPS Abuse",
        description: "Summary of DNS Over HTTPS Abuse | IEEE Journals & Magazine | IEEE Xplore",
        solutionCategory:"Enhancing HTTPS and DNS Security",
        problemCategory:"Privacy and Security Implications of DoH",
        methodologyCategory:"Data Collection and Comparative Analysis",
        section1: "The adoption of DNS over HTTPS (DoH) protocol by the Internet Engineering Task Force aims to enhance privacy by encrypting DNS queries that are typically transmitted in plain text. However, while DoH improves user privacy, it also introduces significant security threats. Malicious actors can leverage DoH to hide their activities, making it difficult for traditional security measures to detect and mitigate these threats. The problem is twofold: 1) understanding how DoH is being abused by threat actors in real-world scenarios and 2) identifying the challenges that need to be addressed to improve security measures against DoH-related threats.",
      section2: "The solution proposed involves a comprehensive survey and analysis of DoH-related research and real-world abuse scenarios. This includes monitoring DoH traffic in a malware laboratory, analyzing code samples, and summarizing known DoH abuse from public sources. The study aims to categorize DoH abuse into three main types: Command and Control, Covert Multipurpose Channel, and Unaware Usage. By identifying and documenting these abuse cases, the paper calls for more in-depth research on DoH abuse to develop effective security measures.",
      section3:[
        "Survey of Existing Research: The study begins with a survey of existing research works related to DNS over HTTPS, highlighting the privacy benefits and potential security threats.",

"2. Real-World Analysis: The research includes observing and analyzing real-world scenarios where DoH is abused. Three specific abuse cases are detailed:",
   "- Circumventing copyright infringement blocks by resolving domains via DoH.",
   "- Using DoH for transparent redirections to new locations, bypassing traditional detection.",
   "- Leveraging DoH in malvertising and spam campaigns to execute arbitrary JavaScript code.",
"3. Threat Monitoring and Manual Analysis: Extensive threat monitoring in a malware laboratory is conducted, including the manual analysis of code samples to identify and document DoH abuse instances.",

"4. Public Source Analysis: Multiple public sources such as GitHub, VirusTotal, and malware analysis blogs are analyzed to summarize known DoH abuse by malware and proof-of-concept codes.",

"5. Taxonomy of DoH Abuse: The study categorizes known DoH abuse into three categories: Command and Control, Covert Multipurpose Channel, and Unaware Usage, providing a structured understanding of the different ways DoH can be exploited.",

"6. Identification of Research Challenges: Based on the findings, the paper identifies several research challenges that are important for future security research. These challenges aim to guide the network security research community towards addressing the security risks associated with DoH."

      ]
      },
      {
        id: 32,
        title:"DNS over HTTPS Detection Using Standard Flow Telemetry",
        description: "https://www.researchgate.net/publication/370740786_DNS_over_HTTPS_Detection_Using_Standard_Flow_Telemetry",
        solutionCategory:"Machine Learning-Based Detection",
        problemCategory:"Traffic Analysis and Detection",
        methodologyCategory:"System Design and Implementation",
        section1:"The paper addresses the detection of DNS over HTTPS (DoH) traffic using standard flow telemetry. DoH is a protocol that improves user privacy and security by encrypting DNS queries, making it challenging for network administrators to monitor and control DNS traffic. The problem lies in accurately identifying DoH traffic amidst regular HTTPS traffic to maintain network security and management.",
        section2:[
          "The paper proposes a heterogeneous detection system combining three different types of detection methods:",
"IP-based Detection: Utilizes pre-existing knowledge of IP addresses associated with DoH resolvers.",
"Machine Learning (ML)-based Detection: Employs ML classifiers to identify DoH traffic based on flow characteristics.",
"Active Probing: Conducts active DNS queries to suspected DoH resolvers to verify their functionality.",
"These methods are integrated into a feed-forward loop to enhance detection accuracy while minimizing resource consumption and false positives."
        ],
        section3: [
          "The methodology of the proposed DoH detection system includes the following steps:",
"Flow Stitching: Reconstructs bidirectional flow records from unidirectional records to ensure accurate flow analysis.",
"IP-based Detection: Uses previously acquired knowledge to identify known DoH resolvers.",
"Filtration: Prefilters short flows, labeling them as non-DoH if they are too brief for reliable detection.",
"Classification: Utilizes machine learning to extract features and classify DoH traffic. Detailed descriptions of this step are provided in Section V-C of the paper.",
"Verification: Conducts active DoH queries to suspected resolvers, confirming their status and updating the blocklist accordingly.",
"IP Rule Extraction: Processes detection results to maintain and update blocklists and allowlists for IP-based detection."
        ]
      },
      {
        id: 33,
        title:"Defragmenting DNS",
        description: "os3-2020-rp2-defragmenting-dns.pdf (nlnetlabs.nl)",
        solutionCategory:"Machine Learning-Based Detection",
        problemCategory:"Performance Impact and Migration Challenges",
        methodologyCategory:"Implementation and Security/Privacy Analysis",
        section1:"The primary issue addressed in this paper is the fragmentation of DNS packets caused by discrepancies in Maximum Transmission Unit (MTU) sizes across different networks. DNS relies on the User Datagram Protocol (UDP), which is stateless and does not handle fragmentation effectively. Fragmentation can lead to various problems, including connectivity issues and security vulnerabilities. The goal is to find an optimal maximum EDNS(0) UDP message size to minimize or prevent fragmentation, thus improving DNS performance and reliability.",
        section2:[
          "The proposed solution is to determine and recommend optimal EDNS(0) UDP message sizes for both IPv4 and IPv6 environments. This involves measuring the Path MTU (PMTU) that DNS resolvers and stub resolvers encounter on the Internet and using this data to suggest suitable EDNS(0) message sizes that prevent fragmentation. The recommended sizes are:",
"For internal networks:",
"IPv4 stub resolvers: 1372 bytes",
"IPv6 stub resolvers: 1332 bytes",
"For stub resolvers communicating to resolvers using IPv6:",
"1232 bytes",
"For resolvers:",
"IPv4: 1232 bytes",
"IPv6: 1332 bytes",

        ],
        section3:[
          "The research methodology includes the following steps:",
"Environment Setup:",
"Create an environment to serve DNS responses of varying sizes.",
"Set up infrastructure to measure the PMTU for different DNS queries.",
"Data Collection:",
"Query the environment from various points on the Internet to gather data on the PMTU experienced by different resolvers and stub resolvers.",
"Measure the response sizes that can be successfully transmitted without fragmentation.",

        ]

      },
      {
        id: 34,
        title:"Mitigating DNS Amplification Attacks at the DNS Server: Using BGP AS Paths and Ingress Filtering",
        description: "(PDF) Mitigating DNS Amplification Attacks at the DNS Server: Using BGP AS Paths and Ingress Filtering (researchgate.net)",
        solutionCategory:"Detection and Mitigation of DNS Tunneling",
        problemCategory:"General DNS Vulnerabilities and Attacks",
        methodologyCategory:"Implementation and Security/Privacy Analysis",
        section1:"The primary issue addressed in this paper is the vulnerability of DNS servers to distributed denial of service (DDoS) amplification attacks. These attacks exploit the open nature of DNS servers to send large volumes of traffic to a victim's IP address, which is spoofed by the attacker. The amplification effect occurs because DNS responses are much larger than the initial queries, overwhelming the victim's network infrastructure. Traditional mitigation techniques, like rate limiting, are ineffective against these attacks because they involve multiple DNS servers and spoofed source addresses. This paper aims to explore the use of Border Gateway Protocol (BGP) Autonomous System (AS) paths and ingress filtering to mitigate these amplification attacks.",
        section2:[
          "The proposed solution involves using BGP AS paths and ingress filtering to detect and mitigate DNS amplification attacks. The key components of the solution are:",
"Unicast Reverse Path Forwarding (uRPF):",
"Implementing uRPF to verify that incoming packets have a valid return path.",
"Using strict uRPF mode for rejecting spoofed packets, although this requires rebooting border routers.",
"BGP AS Path Information:",
"Identifying anomalies in BGP AS path information to detect malicious traffic closer to the source.",
"Ingress filtering based on BGP AS paths to filter out spoofed packets before they reach the DNS server.",
"The solution is demonstrated using Snort as an Intrusion Detection System (IDS) to capture and analyze DNS request patterns, and MikroTik router configurations for implementing strict uRPF and ingress filtering."
        ],
        section3:[
          "The research methodology includes the following steps:",
"Environment Setup:",
"Configuring a research network with Snort IDS for capturing DNS traffic.",
"Setting up MikroTik routers for implementing uRPF and ingress filtering.",
"Data Collection:",
"Capturing DNS request patterns using Snort IDS to identify characteristics of amplification attacks.",
"Collecting BGP AS path information for analyzing anomalies.",
"Implementation:",
"Configuring MikroTik routers for strict uRPF mode and ingress filtering based on BGP AS path information.",
"Testing the effectiveness of the proposed solution in a controlled network environment.",
"Analysis:",
"Evaluating the performance of the proposed solution in detecting and mitigating DNS amplification attacks.",
"Comparing the effectiveness of uRPF strict mode and ingress filtering."
        ]
      },
      {
        id: 35,
        title:"Measurement and Characterization of DNS over HTTPS Traffic",
        description: "(PDF) Measurement and characterization of DNS over HTTPS traffic (researchgate.net)",
        solutionCategory:"Performance and Operational Impact",
        problemCategory:"Performance Impact and Migration Challenges",
        methodologyCategory:"System Design and Implementation",
        section1:"The paper addresses the issue of user privacy and security in the context of the Domain Name System (DNS). Traditional DNS queries are transmitted in plain text, exposing user activity to intermediaries like Internet Service Providers (ISPs) and network administrators. DNS-over-HTTPS (DoH) aims to enhance privacy by encrypting DNS queries and responses. However, this encryption introduces overhead, affecting performance. The paper investigates the deployment and performance of DoH implementations to understand the trade-offs between privacy and performance.",
        section2:[
          "The paper examines the current state of DoH deployment and its performance impact through several experiments:",
"Feature Overview: Comparison of DNS, DNS over TLS (DoT), and DoH in terms of privacy, performance, and overhead.",
"Protocol Implementations Analysis: Evaluation of DoH clients in web browsers and DoH server deployments.",
"Traffic Measurement: Creation of a dataset of DoH communication to analyze performance and distinguish DoH traffic from regular HTTPS traffic."

        ],
        section3:[
          "System Implementation:",
"DoH Server and Client Testing Tool: A tool developed to detect and test deployed DoH servers on the Internet, providing statistics on their features and availability.",
"Data Generation: Queries generated using the top one million domains from the Cisco Umbrella dataset, capturing and analyzing the network traffic.",
"Theoretical Analysis:",
"Overview of DNS, HTTP(S), and DoH protocols to provide a foundational understanding of their operations and potential performance impacts.",
"Analysis of the overhead introduced by encrypted transport channels in DoH compared to traditional DNS.",
"Measurement Study:",
"Single Query Analysis: Measuring single, isolated DoH requests to estimate the expected overhead compared to traditional DNS.",
"Performance Parameters: Evaluation of payload size, number of packets, and overall flow duration for different DNS query methods.",
"Browser Implementation Study: Analysis of DoH implementation in web browsers, including Firefox and Chrome, to measure practical impact on web page load times.",
"Simulations vs. Real Prototype:",
"Real-world deployment and testing of DoH servers and clients to gather empirical data on their performance and characteristics.",
"Comparison of DoH traffic with regular HTTPS traffic to identify distinguishing features and potential classification methods."

        ]

      },
      {
        id:36,
        title:"Using Machine Learning for DNS over HTTPS Detection",
        description: "Using Machine Learning for DNS over HTTPS Detection - ProQuest",
        solutionCategory:"Machine Learning-Based Detection",
        problemCategory:"Traffic Analysis and Detection",
        methodologyCategory:"Machine Learning and Data Analysis",
        section1:"The paper addresses the challenge of detecting DNS over HTTPS (DoH) traffic within a network. Traditional DNS transmits queries in plain text, making it easier for network administrators to monitor traffic. However, DoH encrypts DNS queries using HTTPS, complicating traffic logging and monitoring. The paper proposes using machine learning techniques to detect DoH traffic accurately, aiding network management and security.",
        section2:"The researchers developed a machine learning-based system for automated detection of DoH traffic. This approach leverages advanced firewall capabilities to monitor and classify network traffic efficiently.",
        section3:[
          "System Implementation:",
"Machine Learning Approach: The paper introduces a machine learning framework that utilizes features from network traffic data to detect DoH. This involves collecting data, preprocessing it, extracting relevant features, and training a machine learning model.",
"Feature Extraction: The features used for detection include various characteristics of the traffic flow, such as packet sizes, inter-arrival times, and other statistical properties of the traffic.",
"Theoretical Analysis:",
"DNS Overview: The paper provides an overview of the DNS system and its vulnerabilities due to unencrypted transmission of queries.",
"DoH Advantages and Disadvantages: Discussion on the benefits of DoH in terms of privacy and the challenges it poses for network monitoring.",
"Measurement Study:",
"Dataset Creation: A dataset of DoH and non-DoH traffic is created to train and evaluate the machine learning model. This dataset includes traffic from different sources to ensure diversity and robustness.",
"Model Training and Evaluation: The machine learning model is trained on the dataset and evaluated using various performance metrics to assess its accuracy and reliability in detecting DoH traffic.",
"Simulations vs. Real Prototype:",
"Experimental Setup: Experiments are conducted in a controlled environment to test the performance of the machine learning model in detecting DoH traffic. This includes simulating different network conditions and traffic patterns.",
"Validation: The model's performance is validated using real-world traffic data to ensure its practical applicability."
        ]
      },
      {
        id:37,
        title:"An Explainable AI-based Intrusion Detection System for DNS over HTTPS (DoH) Attacks",
        description: "(PDF) An Explainable AI-based Intrusion Detection System for DNS over HTTPS (DoH) Attacks (researchgate.net)",
        solutionCategory:"Performance and Operational Impact",
        problemCategory:"Detection and Mitigation of DNS Tunneling and Malware",
        methodologyCategory:"Implementation and Security/Privacy Analysis",
        section1:"The paper addresses the challenge of detecting and classifying Domain Name System over HTTPS (DoH) attacks. While DoH enhances user privacy and security by encrypting DNS queries, it also poses a significant challenge for network administrators. The encryption prevents the detection of suspicious network traffic, which is exploited by malware and malicious tools. Consequently, this creates a security gap, as traditional DNS-based security measures become ineffective. The goal is to develop an intrusion detection system (IDS) that can accurately identify and classify DoH attacks while providing transparency and explainability in the detection process.",
        section2:[
          "The proposed solution is an Explainable AI-based Intrusion Detection System (IDS) specifically designed for detecting and classifying DoH attacks. The key components of the solution are:",
"Machine Learning Framework:",
"A novel machine learning model, specifically a balanced and stacked Random Forest, is used for the classification task.",
"The model is trained and evaluated using the CIRA-CIC-DoHBrw-2020 dataset.",
"Explainable AI:",
"Explainable AI methods are integrated to highlight the underlying feature contributions, making the model’s decisions transparent and interpretable.",
"A model dashboard is implemented to visualize and explain the classification results to human users."
        ],
        section3:[
          "The research methodology includes the following steps:",
"Data Collection and Preprocessing:",
"Using the publicly available CIRA-CIC-DoHBrw-2020 dataset.",
"Preprocessing the dataset to ensure it is suitable for training the machine learning model.",
"Model Development:",
"Implementing a balanced and stacked Random Forest model.",
"Setting up the model architecture and tuning the parameters for optimal performance.",
"Model Training and Evaluation:",
"Training the model on the processed dataset.",
"Evaluating the model’s performance using metrics such as precision, recall, F1 score, and AUC.",
"Comparing the model’s performance with state-of-the-art ensemble models like gradient boosting and generic random forest.",
"Explainability:",
"Applying SHAP (SHapley Additive exPlanations) values to provide explanations for the model’s classification decisions.",
"Developing a model dashboard to present the explanations and feature contributions in a user-friendly manner.",
"Performance Analysis:",
"Analyzing the classification accuracy and the conditions under which high accuracy can be achieved.",
"Reporting the class-wise accuracy for Benign, Malicious, and Non-DoH traffic.",
"Future Work:",
"Exploring the application of explainable DoH detection methods to deep neural network-based solutions.",
"Investigating the detection of other types of malicious DoH traffic, such as those generated by botnets using Domain Generating Algorithms (DGAs)."
        ]
      },
      {
        id:38,
        title:"On the Impact of DNS over HTTPS Paradigm on Cyber Systems",
        description: "On the Impact of DNS Over HTTPS Paradigm on Cyber Systems | IEEE Conference Publication | IEEE Xplore",
        solutionCategory:"Enhancing HTTPS and DNS Security",
        problemCategory:"Privacy and Security Implications of DoH",
        methodologyCategory:"Survey and Literature Review",
        section1:"The paper addresses the security challenges posed by the traditional Domain Name System (DNS) protocol, which lacks built-in security mechanisms. This deficiency makes DNS vulnerable to various cyber threats, including data exfiltration and command-and-control (C2) communications by malware. The introduction of DNS over HTTPS (DoH) aims to mitigate some of these security issues by encrypting DNS traffic. However, the new paradigm also presents challenges for network defenders, particularly in detecting and mitigating malware that leverages DoH for malicious purposes.",
        section2:[
          "The paper proposes and discusses several enhancements to the traditional DNS protocol to address its security weaknesses:",
"DNSSEC (DNS Security Extensions): Adds cryptographic verification to DNS records, enhancing the integrity of DNS responses.",
"Query Name Minimization: Limits the amount of information sent in DNS queries to protect user privacy.",
"DNS over TLS (DoT): Encrypts DNS traffic using TLS, improving confidentiality and integrity.",
"DNS over HTTPS (DoH): Encrypts DNS traffic within HTTPS, providing additional confidentiality and blending DNS traffic with regular web traffic to make it less detectable."
        ],
        section3:[
          "The methodology involves a comprehensive literature review and experimental analysis:",
"Literature Review: The paper reviews the weaknesses of the DNS protocol, the enhancements developed to address these weaknesses, and the methods used by malware to exploit DNS. It also reviews existing malware detection techniques and their applicability to encrypted DNS traffic.",
"Experimental Setup: The authors created a test environment to analyze DoH traffic. They used a CentOS 8 virtual machine with a DoH proxy to generate and capture DoH queries. The experiment involved sending DoH queries using HTTP GET and POST methods and analyzing the packet captures to evaluate the visibility of various features used in traditional DNS traffic analysis.",
"Detection Methods Analysis: The study compares the effectiveness of traditional DNS-based malware detection methods when applied to DoH traffic. It highlights the challenges posed by encryption, which obscures many of the features used in existing detection techniques."
        ]
      },
      {
        id:39,
        title:" Oblivious DNS over HTTPS (ODoH): A Practical Privacy Enhancement to DNS",
        description: "(PDF) Oblivious DNS over HTTPS (ODoH): A Practical Privacy Enhancement to DNS (researchgate.net)",
        solutionCategory:"Enhancing HTTPS and DNS Security",
        problemCategory:"Privacy and Security Implications of DoH",
        methodologyCategory:"System Design and Implementation",
        section1:"The primary issue addressed in this paper is the privacy vulnerability of traditional DNS, which transmits queries in cleartext over UDP, making it susceptible to eavesdropping, modification, and other privacy risks. While secure DNS variants like DNS over TLS (DoT) and DNS over HTTPS (DoH) encrypt DNS messages, they do not prevent DNS operators from linking query contents with client IP addresses. This paper focuses on enhancing DNS privacy by decoupling queries from client IP addresses, making it impossible for DNS resolvers to link activities with identities.",
        section2:[
          "The proposed solution is Oblivious DNS over HTTPS (ODoH), which extends DoH by encrypting DNS queries and responses in a way that separates the client’s identity from the query content. The ODoH protocol works by:",
"Encrypting queries at the stub resolver into HTTP messages.",
"Forwarding these encrypted queries through an Oblivious HTTPS Proxy.",
"Having an Oblivious Target decrypt and resolve the queries, then encrypt the responses.",
"Sending the encrypted responses back to the client through the proxy. This ensures that the DNS resolver cannot see both the query content and the client’s IP address, significantly enhancing privacy."

        ],
        section3:[
          "The research methodology includes the following steps:",
"Implementation:",
"Developed public, open-source, and interoperable implementations of the ODoH components.",
"Formal Modeling and Analysis:",
"Modeled ODoH using the Tamarin prover to provide a formal analysis of its security properties.",
"Identified and addressed a latent replay attack during this analysis.",
"Performance Evaluation:",
"Deployed ODoH at a large DNS resolver.",
"Conducted wide-area measurements to evaluate ODoH’s performance compared to other privacy-preserving DNS variants (e.g., DNSCrypt and DoH over Tor).",
"Analyzed the impact on page-load times and overall performance."
        ]
      },
      {
        id:40,
        title:"Performance of DNS Over HTTPS Implementation on Low-Power Devices",
        description: "Performance of DNS Over HTTPS Implementation on Low-Power Devices (researchgate.net)",
        solutionCategory:"Enhancing HTTPS and DNS Security",
        problemCategory:"Detection and Mitigation of DNS Tunneling and Malware",
        methodologyCategory:"Data Collection and Comparative Analysis",
        section1:"The main problem addressed in this paper is the vulnerability of traditional DNS communication to monitoring, interception, and manipulation, given its unencrypted nature. This issue is particularly relevant in contexts where privacy and security are paramount, such as preventing website blocking or DNS redirection by ISPs, system administrators, or attackers. The focus is on implementing DNS over HTTPS (DoH) on low-power devices to enhance the security of DNS communications, and evaluating the performance of this implementation in comparison to traditional unencrypted DNS and other DoH implementations.",
        section2:"The proposed solution involves implementing DNS over HTTPS (DoH) on low-power devices, specifically using a Raspberry Pi, to secure DNS communications. The solution also includes a performance evaluation of this implementation by measuring the speed of responses to uncached DNS requests. This performance is compared to other open-source and commercial DoH implementations as well as traditional unencrypted DNS communication.",
        section3:[
          "Implementation:",
"Set up DNS over HTTPS (DoH) on a low-power device (e.g., Raspberry Pi).",
"Configure the device to handle DNS queries over HTTPS, ensuring secure and encrypted communication.",
"Performance Evaluation:",
"Design experiments to measure the response time for uncached DNS requests.",
"Conduct these experiments using the Raspberry Pi implementation of DoH.",
"Gather data on response times for uncached DNS requests using other open-source and commercial DoH implementations.",
"Also, collect data on response times using traditional unencrypted DNS communication for comparison.",
"Comparison and Analysis:",
"Analyze the collected data to compare the performance of the Raspberry Pi DoH implementation against other DoH solutions and traditional DNS.",
"Evaluate the feasibility and efficiency of using low-power devices for secure DNS communication.",
"Results and Recommendations:",
"Present the performance results, highlighting the speed and efficiency of the Raspberry Pi DoH implementation.",
"Discuss the implications of using low-power devices for DNS security in real-world scenarios.",
"Provide recommendations for deploying DoH on low-power devices based on the findings."

        ]
      }
    
  ];




  const uniqueProblems = (problems) => {
    const seen = new Set();
    return problems.filter((problem) => {
      const duplicate = seen.has(problem.title);
      seen.add(problem.title);
      return !duplicate;
    });
  };
  const handleCategorySelect = (type, category) => {
    setAboutUsContent([]);
    if (category === "home") {
      setFilteredProblems([]);
    } else {
      let filtered;
      switch(type) {
        case 'problem':
          filtered = problems.filter(problem => problem.problemCategory === category);
          break;
        case 'methodology':
          filtered = problems.filter(problem => problem.methodologyCategory === category);
          break;
        case 'solution':
          filtered = problems.filter(problem => problem.solutionCategory === category);
          break;
        default:
          filtered = [];
      }
      setFilteredProblems(filtered);
    }
    setSelectedProblem(null);
  };

  const handleAboutUsSelect = () => {
    setAboutUsContent(teamMembersData); // Set team members data as About Us content
    setSelectedProblem(null); // Reset selected problem
    setFilteredProblems([]); // Clear filtered problems
  };

  return (
    <div className="app">
      <HorizontalNavBar
        onCategorySelect={handleCategorySelect}
        onAboutUsSelect={handleAboutUsSelect}
      />
      <div className="content-wrapper">
        <SideNavbar
          problems={uniqueProblems(problems)}
          onSelectProblem={setSelectedProblem}
        />
        <main className="main-content">
          {aboutUsContent.length > 0 ? (
            <TeamMembers teamMembers={aboutUsContent} />
          ) : (
            <>
              <TitleAbout />
              <Problems
                problems={
                  filteredProblems.length
                    ? filteredProblems
                    : uniqueProblems(problems)
                }
                selectedProblem={selectedProblem}
                onSelectProblem={setSelectedProblem}
              />
            </>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );     
         }

export default App;
