import React from 'react';
import proficiencies from '../../json/proficiencies.json';
import ProficienciesList from '../ProficienciesList/ProficienciesList';

import './Proficiencies.css';

const Proficiencies = () => (
  <div className="skills-wrapper d-flex flex-column bg-gray p-5">
    <h1 className="widget-heading">Commonly Used Languages and Apps</h1>
    <div className="skills-content d-flex flex-wrap">
      {Object.keys(proficiencies).map((item) => (
        <ProficienciesList
          class={proficiencies[item].class}
          imgUrl={proficiencies[item].imgUrl}
          name={proficiencies[item].name}
        />
      ))}
    </div>
  </div>
);

export default Proficiencies;
