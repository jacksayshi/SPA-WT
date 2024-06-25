
import PropTypes from 'prop-types';
import '../Styles/TeamMembers.css';

const TeamMembers = ({ teamMembers }) => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="team-members-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member-card" key={index}>
            <h3>{member.name}</h3>
            <p><strong>Banner ID:</strong> {member.bannerId}</p>
            <p><strong>Email:</strong> {member.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

TeamMembers.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      bannerId: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TeamMembers;
