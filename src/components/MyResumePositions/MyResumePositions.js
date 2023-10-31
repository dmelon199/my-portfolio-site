/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Fade } from 'react-awesome-reveal';

const MyResumePositions = (props) => {
  return (
    <div>
      <Fade>
        <div className={`position ${props.class}`}>
          <ul className="pr-5">
            <li className="position-info pl-3">
              <h2>{props.company}</h2>
              <div className="d-flex align-items-center">
                <h3>{props.position} | </h3>
                <h3 style={{ fontWeight: 'normal', marginLeft: '5px' }}>{props.location} ({props.time})</h3>
              </div>
              <ul className="position-experience mt-3" style={{ textAlign: 'left' }}>{props.description.map((jobInfo) => {
                return (
                  <li className="mb-1">{jobInfo}</li>
                );
              })}
              </ul>
            </li>
          </ul>
        </div>
      </Fade>
    </div>
  );
};

export default MyResumePositions;
