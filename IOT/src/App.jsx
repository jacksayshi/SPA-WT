import { useState } from "react";
import SideNavbar from "./Components/SideNavBar1";
import Problems from "./Components/Problems";
import Footer from "./Components/Footer";
import TitleAbout from "./Components/TitleAbout";
import HorizontalNavBar from "./Components/HorizontalNavBar";
import "./Components/TeamMembers";
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
		{
			name: "Ashwin Pawar",
			bannerId: "001296012",
			email: "ashwin.pawar@slu.edu",
		},
	];

	const problems = [
		{
			id: 1,
			title: "Privacy of DNS-over-HTTPS: Requiem for a Dream?",
			description: "----------------------",
			category: "Machine Learning models",
			section1: "-----------------",
			section2: "-----------------.",
			section3: "-----------------",
		},
		{
			id: 2,
			title:
				"A large-scale analysis of HTTPS deployments: Challenges, solutions, and recommendations",
			description: "-----------------",
			category: "Improve security of HTTPS",
			section1: "-----------------",
			section2: "-----------------.",
			section3: "-----------------",
		},
		{
			id: 3,
			title:
				"A Comprehensive Study of DNS Operational Issues by Mining DNS Forums",
			description: "-----------------",
			category:
				"Understand Root causes of DNS failure and provide suggestions, Privacy laws",
			section1: "-----------------",
			section2: "-----------------.",
			section3: "-----------------",
		},
		{
			id: 4,
			title:
				"Empirically understanding the global impact of migration to DNS-over-HTTPS",
			description: "-----------------",
			category:
				"Need for careful consideration of disparities for performance, Comprehensive measurement of DoH and Do53",
			section1: "-----------------",
			section2: "-----------------.",
			section3: "-----------------",
		},
		{
			id: 5,
			title:
				"DNS-BC: Fast, Reliable and Secure Domain Name System Caching System Based on a Consortium Blockchain",
			description: "-----------------",
			category: "DNS future scope",
			section1: "-----------------",
			section2: "-----------------.",
			section3: "-----------------",
		},
		{
			id: 6,
			title: "Summary of DNS over HTTPS Abuse",
			description: "-----------------",
			category: "Policy recommendations",
			section1: "-----------------",
			section2: "-----------------.",
			section3: "-----------------",
		},
		{
			id: 7,
			title: "DoH Insight: detecting DNS over HTTPS by machine learning",
			description: "-----------------",
			category: "Machine Learning models",
			section1: "-----------------",
			section2: "-----------------.",
			section3: "-----------------",
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
		if (category === "home") {
			setFilteredProblems([]);
		} else {
			const filtered = problems.filter(
				(problem) => problem.category === category
			);
			setFilteredProblems(filtered);
		}
		setSelectedProblem(null); // Reset the selected problem when category changes
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
						<div>
							<h2>About Us</h2>
							<div className="team-members-grid">
								{aboutUsContent.map((member, index) => (
									<div className="team-member-card" key={index}>
										<h3>{member.name}</h3>
										<p>
											<strong>Banner ID:</strong> {member.bannerId}
										</p>
										<p>
											<strong>Email:</strong> {member.email}
										</p>
									</div>
								))}
							</div>
						</div>
					) : (
						<div>
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
						</div>
					)}
				</main>
			</div>
			<Footer />
		</div>
	);
}

export default App;
