import { useEffect } from 'react';
import '../styles/Artworks.css';

const submissionTypes = [
  '[Poetry]',
  '[Short Fiction]',
  '[Photography]',
  '[Visual Art]',
  '[Essay]',
];

const artworkCards = [
  { title: '[Artwork Title]', author: '[Author Name]' },
  { title: '[Artwork Title]', author: '[Author Name]' },
  { title: '[Artwork Title]', author: '[Author Name]' },
  { title: '[Artwork Title]', author: '[Author Name]' },
  { title: '[Artwork Title]', author: '[Author Name]' },
  { title: '[Artwork Title]', author: '[Author Name]' },
];

const formatRequirements = [
  {
    type: '[Poetry]',
    requirements: '[Max length, line limit, formatting preferences, font/spacing guidelines.]',
  },
  {
    type: '[Short Fiction]',
    requirements: '[Word count range, paragraph formatting, dialogue conventions, file type.]',
  },
  {
    type: '[Photography]',
    requirements: '[Minimum resolution, accepted file formats (JPEG/PNG), color vs. B&W policy.]',
  },
  {
    type: '[Visual Art]',
    requirements: '[Accepted file formats, minimum resolution, original work requirement.]',
  },
  {
    type: '[Essay]',
    requirements: '[Word count limit, citation style, topic guidelines, formatting standards.]',
  },
];

export default function Artworks() {
  useEffect(() => {
    document.title = 'Example Artworks — [Magazine Name]';
  }, []);

  return (
    <div className="page-wrapper">
      <h1 className="page-heading">Example Artworks &amp; Submission Requirements</h1>

      {/* ── Accepted Submission Types ── */}
      <h2 className="section-heading">Accepted Submission Types</h2>
      <div className="artworks-badges">
        {submissionTypes.map((type, i) => (
          <span className="artworks-badge" key={i}>{type}</span>
        ))}
      </div>

      {/* ── Example Artworks Grid ── */}
      <h2 className="section-heading">Example Artworks</h2>
      <div className="artworks-grid">
        {artworkCards.map((card, i) => (
          <div className="artworks-card" key={i}>
            <div className="artworks-card__image">Artwork Placeholder</div>
            <div className="artworks-card__body">
              <p className="artworks-card__title">{card.title}</p>
              <p className="artworks-card__author">{card.author}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Formatting Requirements Table ── */}
      <h2 className="section-heading">Formatting Requirements</h2>
      <div className="artworks-table-wrapper">
        <table className="artworks-table">
          <thead>
            <tr>
              <th>Submission Type</th>
              <th>Requirements</th>
            </tr>
          </thead>
          <tbody>
            {formatRequirements.map((row, i) => (
              <tr key={i}>
                <td>{row.type}</td>
                <td>{row.requirements}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
