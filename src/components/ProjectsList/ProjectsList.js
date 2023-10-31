import React from 'react';
import { Link } from 'react-router-dom';

import './ProjectsList.css';
// eslint-disable-next-line react/prop-types
const ProjectsList = ({ link, imgUrl, name }) => (
  // eslint-disable-next-line react/destructuring-assignment, react/prop-types
  <div className="project-column col-sm-4 p-0 flex-column">
    <Link
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
      to={link}
      onClick={(e) => {
        // eslint-disable-next-line react/destructuring-assignment, react/prop-types
        if (link.includes('www.')) {
          e.preventDefault();
          // eslint-disable-next-line react/destructuring-assignment, react/prop-types
          window.open(link, '_blank');
        }
      }}
    >
      <div className="project-image" style={{ backgroundImage: `url(${imgUrl})`, backgroundPosition: 'center top' }} />
      <h3 style={{ background: '#f5f6f7', color: '#333', fontSize: '1.5vw' }}>{name}</h3>
    </Link>
  </div>
);

export default ProjectsList;
