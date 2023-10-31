import React from 'react';
import MyResumePositions from '../MyResumePositions/MyResumePositions';
import jobInfo from '../../json/jobInfo.json';

import './MyResume.css';

const MyResume = () => (
  <div className="experience-wrapper d-flex flex-column p-5">
    <h1 className="widget-heading">My Real World Experience</h1>
    <div className="experience-container d-flex flex-column container-xl">
      <div className="experience-content">
        {Object.keys(jobInfo).map((item) => (
          <MyResumePositions
            class={jobInfo[item].class}
            company={jobInfo[item].company}
            position={jobInfo[item].position}
            time={jobInfo[item].time}
            location={jobInfo[item].location}
            description={jobInfo[item].description}
          />
        ))}
      </div>
      <div className="resume-button d-flex justify-content-center">
        <a className="btn-primary btn-med" target="_blank" rel="noreferrer" href="/images/resume.pdf">Download Resume</a>
      </div>
    </div>
  </div>
);

export default MyResume;
