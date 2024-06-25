import PropTypes from 'prop-types';
import '../Styles/HorizontalNavBar.css';

const HorizontalNavBar = ({ onCategorySelect, onAboutUsSelect }) => {
  return (
    <div className="horizontal-navbar">
      <a href="#" onClick={() => onCategorySelect('home')}>Home</a>
      <div className="dropdown">
        <a href="#">Solutions</a>
        <div className="dropdown-content">
          <a href="#" onClick={() => onCategorySelect('Machine Learning models')}>Machine Learning models</a>
          <a href="#" onClick={() => onCategorySelect('Improve security of HTTPS')}>Improve security of HTTPS</a>
          <a href="#" onClick={() => onCategorySelect('Understand Root causes of DNS failure and provide suggestions, Privacy laws')}>Understand Root causes of DNS failure and provide suggestions, Privacy laws</a>
          <a href="#" onClick={() => onCategorySelect('Need for careful consideration of disparities for performance, Comprehensive measurement of DoH and Do53')}>Need for careful consideration of disparities for performance, Comprehensive measurement of DoH and Do53</a>
          <a href="#" onClick={() => onCategorySelect('DNS future scope')}>DNS future scope</a>
          <a href="#" onClick={() => onCategorySelect('Policy recommendations')}>Policy recommendations</a>
        </div>
      </div>
      <div className="dropdown">
        <a href="#">Methodologies</a>
        <div className="dropdown-content">
          <a href="#" onClick={() => onCategorySelect('Machine Learning Analysis and Data Gathering')}>Machine Learning Analysis and Data Gathering</a>
          <a href="#" onClick={() => onCategorySelect('Data Gathering and Analysis')}>Data Gathering and Analysis</a>
          <a href="#" onClick={() => onCategorySelect('Data Collection and Analysis for DNS Operational Issues')}>Data Collection and Analysis for DNS Operational Issues</a>
          <a href="#" onClick={() => onCategorySelect('Performance Data Collection and Comparative Analysis')}>Performance Data Collection and Comparative Analysis</a>
          <a href="#" onClick={() => onCategorySelect('System Design and Implementation with Experimental Evaluation')}>System Design and Implementation with Experimental Evaluation</a>
          <a href="#" onClick={() => onCategorySelect('Security and Attack Analysis')}>Security and Attack Analysis</a>
        </div>
      </div>
      <a href="#" onClick={onAboutUsSelect}>About Us</a> {/* Link for About Us */}
    </div>
  );
};

HorizontalNavBar.propTypes = {
  onCategorySelect: PropTypes.func.isRequired,
  onAboutUsSelect: PropTypes.func.isRequired,
};

export default HorizontalNavBar;
