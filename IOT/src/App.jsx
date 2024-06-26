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
      category: "Machine Learning models",
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
      category: "Improve security of HTTPS",
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
      category:
        "Understand Root causes of DNS failure and provide suggestions, Privacy laws",
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
      category:
        "Need for careful consideration of disparities for performance, Comprehensive measurement of DoH and Do53",
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
      category: "DNS future scope",
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
      category: "Policy recommendations",
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
      category: "Machine Learning models",
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
      description: "-----------------",
      category: "Policy recommendations",
      section1: "-----------------",
      section2: "-----------------.",
      section3: "-----------------",
    },
    {
      id: 9,
      title: "Measuring DNS-over-HTTPS Performance Around the World",
      description: "-----------------",
      category:
        "Need for careful consideration of disparities for performance, Comprehensive measurement of DoH and Do53",
      section1: "-----------------",
      section2: "-----------------.",
      section3: "-----------------",
    },
    {
      id: 10,
      title: "A Comprehensive Study of DNS-over-HTTPS Downgrade Attack",
      description: "-----------------",
      category:
        "Understand Root causes of DNS failure and provide suggestions, Privacy laws",
      section1: "-----------------",
      section2: "-----------------.",
      section3: "-----------------",
    },
    {
      id: 11,
      title: "A Comprehensive Study of DNS-over-HTTPS Downgrade Attack",
      description: "-----------------",
      category: "Security and Attack Analysis",
      section1: "-----------------",
      section2: "-----------------.",
      section3: "-----------------",
    },
    {
      id: 12,
      title:
        "DNS-BC: Fast, Reliable and Secure Domain Name System Caching System Based on a Consortium Blockchain",
      description: "-----------------",
      category: "System Design and Implementation with Experimental Evaluation",
      section1: "-----------------",
      section2: "-----------------.",
      section3: "-----------------",
    },
    {
      id: 13,
      title:
        "How DNS over HTTPS is Reshaping Privacy, Performance, and Policy in the Internet Ecosystem",
      description: "-----------------",
      category: "Performance Data Collection and Comparative Analysis",
      section1: "-----------------",
      section2: "-----------------.",
      section3: "-----------------",
    },
    {
      id: 14,
      title: "Measuring DNS-over-HTTPS Performance Around the World",
      description: "-----------------",
      category: "Performance Data Collection and Comparative Analysis",
      section1: "-----------------",
      section2: "-----------------.",
      section3: "-----------------",
    },
    {
      id: 15,
      title:
        "A Comprehensive Study of DNS Operational Issues by Mining DNS Forums",
      description: "-----------------",
      category: "Data Collection and Analysis for DNS Operational Issues",
      section1: "-----------------",
      section2: "-----------------.",
      section3: "-----------------",
    },
    {
      id: 16,
      title: "Summary of DNS over HTTPS Abuse",
      description: "-----------------",
      category: "Data Collection and Analysis for DNS Operational Issues",
      section1: "-----------------",
      section2: "-----------------.",
      section3: "-----------------",
    },
    {
      id: 17,
      title:
        "A large-scale analysis of HTTPS deployments: Challenges, solutions, and recommendations",
      description: "-----------------",
      category: "Data Gathering and Analysis",
      section1: "-----------------",
      section2: "-----------------.",
      section3: "-----------------",
    },
    {
      id: 18,
      title:
        "Empirically understanding the global impact of migration to DNS-over-HTTPS",
      description: "-----------------",
      category: "Data Gathering and Analysis",
      section1: "-----------------",
      section2: "-----------------.",
      section3: "-----------------",
    },
    {
      id: 19,
      title: "Privacy of DNS-over-HTTPS: Requiem for a Dream?",
      description: "-----------------",
      category: "Machine Learning Analysis and Data Gathering",
      section1: "-----------------",
      section2: "-----------------.",
      section3: "-----------------",
    },
    {
      id: 20,
      title: "DoH Insight: detecting DNS over HTTPS by machine learning",
      description: "-----------------",
      category: "Machine Learning Analysis and Data Gathering",
      section1: "-----------------",
      section2: "-----------------.",
      section3: "-----------------",
    },
    {
      id: 20,
      title: "Summary of DNS over HTTPS Abuse",
      description: "-----------------",
      category: "Machine Learning models",
      section1: "-----------------",
      section2: "-----------------.",
      section3: "-----------------",
    },
  ];

  const uniqueProblems = (problems) => {
    const seen = new Set();
    return problems.filter((problem) => {
      const duplicate = seen.has(problem.title);
      seen.add(problem.title);
      return !duplicate;
    });
  };
  const handleCategorySelect = (category) => {
    setAboutUsContent([]);
    if (category === "home") {
      setFilteredProblems([]);
    } else {
      const filtered = problems.filter(
        (problem) => problem.category === category
      );
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
