import { useEffect } from 'react';
import '../styles/Deadlines.css';

// Status: 'passed' | 'upcoming' | 'today'
const deadlineEntries = [
  {
    date: '[Month DD, YYYY]',
    title: '[Deadline / Event Name]',
    desc: '[Brief description of what this deadline marks — e.g., first submissions window closes.]',
    status: 'passed',
  },
  {
    date: '[Month DD, YYYY]',
    title: '[Deadline / Event Name]',
    desc: '[Brief description of what this deadline marks — e.g., editorial review period begins.]',
    status: 'passed',
  },
  {
    date: '[Month DD, YYYY]',
    title: '[Deadline / Event Name]',
    desc: '[Brief description of what this deadline marks — e.g., final submission deadline.]',
    status: 'today',
  },
  {
    date: '[Month DD, YYYY]',
    title: '[Deadline / Event Name]',
    desc: '[Brief description of what this deadline marks — e.g., author notifications sent out.]',
    status: 'upcoming',
  },
  {
    date: '[Month DD, YYYY]',
    title: '[Deadline / Event Name]',
    desc: '[Brief description of what this deadline marks — e.g., issue publication date.]',
    status: 'upcoming',
  },
];

const reminders = [
  '[Reminder 1 — e.g., Late submissions will not be accepted under any circumstances.]',
  '[Reminder 2 — e.g., All submitters will receive a confirmation email within 48 hours.]',
  '[Reminder 3 — e.g., Check the Submissions page for formatting requirements before submitting.]',
];

const statusConfig = {
  passed:   { icon: '●', label: 'Passed',   className: 'status--passed'   },
  upcoming: { icon: '○', label: 'Upcoming', className: 'status--upcoming' },
  today:    { icon: '★', label: 'Today / Important', className: 'status--today' },
};

export default function Deadlines() {
  useEffect(() => {
    document.title = 'Deadlines — [Magazine Name]';
  }, []);

  return (
    <div className="page-wrapper">
      <h1 className="page-heading">Deadlines &amp; Reminders</h1>

      {/* ── Intro ── */}
      <div className="deadlines-intro">
        <p>[Important dates for the current submission cycle. Check back regularly for updates.]</p>
      </div>

      {/* ── Status Legend ── */}
      <div className="deadlines-legend">
        {Object.values(statusConfig).map(({ icon, label, className }) => (
          <div className="deadlines-legend__item" key={label}>
            <span className={`deadlines-legend__icon ${className}`}>{icon}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* ── Deadline Cards ── */}
      <h2 className="section-heading">Submission Dates</h2>
      <div className="deadlines-list">
        {deadlineEntries.map((entry, i) => {
          const { icon, className } = statusConfig[entry.status];
          return (
            <div className="deadlines-card" key={i}>
              <div className="deadlines-card__date">
                <div className="deadlines-card__date-inner">
                  <span>{entry.date}</span>
                </div>
              </div>
              <div className="deadlines-card__content">
                <p className="deadlines-card__title">{entry.title}</p>
                <p className="deadlines-card__desc">{entry.desc}</p>
              </div>
              <div className={`deadlines-card__status ${className}`}>
                {icon}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── General Reminders ── */}
      <h2 className="section-heading">General Reminders</h2>
      <div className="deadlines-reminders">
        <ul>
          {reminders.map((reminder, i) => (
            <li key={i}>{reminder}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
