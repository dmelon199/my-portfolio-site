import React from 'react';

// eslint-disable-next-line react/prop-types
const ProficienciesList = ({ imgUrl, name }) => (
  <div className="skill-column p-0 flex-column">
    <img style={{ width: '70%' }} alt="Skill" src={`${imgUrl}`} />
    <h3 style={{ marginTop: '10px', color: 'gray' }}>{name}</h3>
  </div>
);

export default ProficienciesList;
