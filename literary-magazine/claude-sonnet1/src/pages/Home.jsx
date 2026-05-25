import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const features = [
  {
    heading: 'Submit Your Work',
    text: '[Brief description of what kinds of creative work the magazine welcomes and why students should submit.]',
    link: '/submissions',
    linkLabel: 'View Submissions →',
  },
  {
    heading: 'Meet the Team',
    text: '[Brief description of the editorial staff, their dedication to showcasing student voices, and how to get involved.]',
    link: '/about',
    linkLabel: 'About Us →',
  },
  {
    heading: 'Past Issues',
    text: '[Brief description of the magazine\'s archive, past volumes, and what readers can expect to find.]',
    link: '/previous-issues',
    linkLabel: 'Browse Issues →',
  },
];

export default function Home() {
  useEffect(() => {
    document.title = '[Magazine Name] — Home';
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section className="home-hero">
        <h1 className="home-hero__title">[Magazine Name]</h1>
        <p className="home-hero__tagline">
          [Tagline or mission statement — e.g., "Celebrating student voices, one page at a time."]
        </p>
        <Link to="/previous-issues" className="btn">
          Read Latest Issue
        </Link>
      </section>

      {/* ── Feature Strip ── */}
      <section className="home-features">
        <div className="home-features__grid">
          {features.map(({ heading, text, link, linkLabel }) => (
            <div className="home-features__card" key={heading}>
              <h3 className="home-features__card-heading">{heading}</h3>
              <p className="home-features__card-text">{text}</p>
              <Link to={link} className="home-features__card-link">
                {linkLabel}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
