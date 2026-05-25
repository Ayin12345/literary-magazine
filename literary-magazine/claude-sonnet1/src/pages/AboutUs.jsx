import { useEffect } from 'react';
import '../styles/AboutUs.css';

const teamMembers = [
  { name: '[Member Name]', role: '[Role / Grade]' },
  { name: '[Member Name]', role: '[Role / Grade]' },
  { name: '[Member Name]', role: '[Role / Grade]' },
  { name: '[Member Name]', role: '[Role / Grade]' },
  { name: '[Member Name]', role: '[Role / Grade]' },
  { name: '[Member Name]', role: '[Role / Grade]' },
];

function MemberCard({ name, role }) {
  return (
    <div className="about-member-card">
      <div className="about-member-photo">Photo</div>
      <p className="about-member-name">{name}</p>
      <p className="about-member-role">{role}</p>
    </div>
  );
}

export default function AboutUs() {
  useEffect(() => {
    document.title = 'About Us — [Magazine Name]';
  }, []);

  return (
    <div className="page-wrapper">
      <h1 className="page-heading">About Us</h1>

      {/* ── Mission Statement ── */}
      <div className="about-mission">
        <p>
          [Mission statement placeholder — describe the magazine's purpose, values, and commitment
          to amplifying student creative voices. This section should convey the spirit and editorial
          philosophy of the publication in two to four sentences.]
        </p>
      </div>

      {/* ── Our Team ── */}
      <h2 className="section-heading">Our Team</h2>
      <div className="about-team-grid">
        {teamMembers.map((member, i) => (
          <MemberCard key={i} name={member.name} role={member.role} />
        ))}
      </div>

      {/* ── Faculty Advisor ── */}
      <h2 className="section-heading">Faculty Advisor</h2>
      <div className="about-advisor-grid">
        <MemberCard name="[Advisor Name]" role="[Title / Department]" />
      </div>
    </div>
  );
}
