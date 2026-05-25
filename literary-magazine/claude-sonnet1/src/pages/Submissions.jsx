import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Submissions.css';

const requirements = [
  '[Requirement 1 — e.g., All submissions must be original, unpublished work.]',
  '[Requirement 2 — e.g., Poetry: no more than 3 poems per submission, max 60 lines each.]',
  '[Requirement 3 — e.g., Prose: maximum 2,500 words per piece.]',
  '[Requirement 4 — e.g., Visual art and photography: high-resolution JPEG or PNG files only.]',
  '[Requirement 5 — e.g., Include your name, grade, and piece title in your submission form.]',
];

export default function Submissions() {
  useEffect(() => {
    document.title = 'Submissions — [Magazine Name]';
  }, []);

  return (
    <div className="page-wrapper">
      <h1 className="page-heading">Submissions</h1>

      {/* ── Intro ── */}
      <div className="submissions-intro">
        <p>
          [Brief description of what the magazine accepts and its submission philosophy —
          e.g., the genres welcomed, the spirit of the call for work, and what makes a strong
          submission. This should feel inviting and accessible to all student contributors.]
        </p>
      </div>

      {/* ── Submit CTA Card ── */}
      <div className="submissions-cta-card">
        <h3>Ready to submit your work?</h3>
        <a href="#google-form-link" className="btn">
          Submit via Google Form
        </a>
        <span className="submissions-cta-note">[Google Form link goes here]</span>
      </div>

      {/* ── Submission Requirements ── */}
      <h2 className="section-heading">Submission Requirements</h2>
      <div className="submissions-requirements">
        <ul>
          {requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </div>

      {/* ── Deadlines Link ── */}
      <h2 className="section-heading">Deadlines</h2>
      <Link to="/deadlines" className="submissions-deadlines-link">
        <span>See the Deadlines page for all important dates and upcoming submission windows</span>
        <span className="submissions-deadlines-arrow">→</span>
      </Link>
    </div>
  );
}
