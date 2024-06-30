import PropTypes from 'prop-types';
import '../Styles/HorizontalNavBar.css';

const HorizontalNavBar = ({ onCategorySelect, onAboutUsSelect }) => {
  return (
    <div className="horizontal-navbar">
      <a href="#" onClick={() => onCategorySelect('home')}>Home</a>
      <div className="dropdown">
        <a href="#">Problems</a>
        <div className="dropdown-content">
          <a href="#" onClick={() => onCategorySelect('problem', 'Privacy and Security Implications of DoH')}>Privacy and Security Implications of DoH</a>
          <a href="#" onClick={() => onCategorySelect('problem', 'Traffic Analysis and Detection')}>Traffic Analysis and Detection</a>
          <a href="#" onClick={() => onCategorySelect('problem', 'Performance Impact and Migration Challenges')}>Performance Impact and Migration Challenges </a>
          <a href="#" onClick={() => onCategorySelect('problem', 'Detection and Mitigation of DNS Tunneling and Malware')}>Detection and Mitigation of DNS Tunneling and Malware</a>
          <a href="#" onClick={() => onCategorySelect('problem', 'General DNS Vulnerabilities and Attacks')}>General DNS Vulnerabilities and Attacks</a>
          <a href="#" onClick={() => onCategorySelect('problem', 'Broader Implications and Regulatory Concerns')}>Broader Implications and Regulatory Concerns</a>
        </div>
      </div>
      <div className="dropdown">
        <a href="#">Solutions</a>
        <div className="dropdown-content">
          <a href="#" onClick={() => onCategorySelect('solution', 'Machine Learning-Based Detection')}>Machine Learning-Based Detection</a>
          <a href="#" onClick={() => onCategorySelect('solution', 'Enhancing HTTPS and DNS Security')}>Enhancing HTTPS and DNS Security</a>
          <a href="#" onClick={() => onCategorySelect('solution', 'Traffic Analysis and Fingerprinting')}>Traffic Analysis and Fingerprinting</a>
          <a href="#" onClick={() => onCategorySelect('solution', 'Detection and Mitigation of DNS Tunneling')}>Detection and Mitigation of DNS Tunneling</a>
          <a href="#" onClick={() => onCategorySelect('solution', 'Performance and Operational Impact')}>Performance and Operational Impact</a>
          <a href="#" onClick={() => onCategorySelect('solution', 'Broader Implications and Regulatory Concerns')}>Broader Implications and Regulatory Concerns</a>
        </div>
      </div>
      <div className="dropdown">
        <a href="#">Methodologies</a>
        <div className="dropdown-content">
          <a href="#" onClick={() => onCategorySelect('methodology', 'Machine Learning and Data Analysis')}>Machine Learning and Data Analysis</a>
          <a href="#" onClick={() => onCategorySelect('methodology', 'Data Collection and Comparative Analysis')}>Data Collection and Comparative Analysis</a>
          <a href="#" onClick={() => onCategorySelect('methodology', 'System Design and Implementation')}>System Design and Implementation</a>
          <a href="#" onClick={() => onCategorySelect('methodology', 'Survey and Literature Review')}>Survey and Literature Review</a>
          <a href="#" onClick={() => onCategorySelect('methodology', 'Implementation and Security/Privacy Analysis')}>Implementation and Security/Privacy Analysis</a>
          <a href="#" onClick={() => onCategorySelect('methodology', 'Market and Policy Analysis')}>Market and Policy Analysis</a>
          <a href="#" onClick={() => onCategorySelect('methodology', 'Experimental Validation and Performance Analysis')}>Experimental Validation and Performance Analysis</a>
          <a href="#" onClick={() => onCategorySelect('methodology', 'Automated Data Collection and Analysis')}>Automated Data Collection and Analysis</a>
          <a href="#" onClick={() => onCategorySelect('methodology', 'Specific Techniques and Frameworks')}>Specific Techniques and Frameworks </a>

        </div>
      </div>
      <a href="#" onClick={onAboutUsSelect}>About Us</a> 
    </div>
  );
};

HorizontalNavBar.propTypes = {
  onCategorySelect: PropTypes.func.isRequired,
  onAboutUsSelect: PropTypes.func.isRequired,
};

export default HorizontalNavBar;
