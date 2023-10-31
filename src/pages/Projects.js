import React from 'react';
import projects from '../json/projects.json';
import logos from '../json/logos.json';
import LogosList from '../components/LogosList/LogosList';
import ProjectsList from '../components/ProjectsList/ProjectsList';

const Projects = () => (
  <div className="projects-wrapper d-flex flex-column">
    <h1 className="fw-bold bg-gray px-5 py-4">Web Projects</h1>
    <div className="projects-content d-flex flex-wrap p-3">
      {Object.keys(projects).map((item) => (
        <ProjectsList
          imgUrl={projects[item].imgUrl}
          link={projects[item].link}
          name={projects[item].name}
        />
      ))}
    </div>
    <h1 className="font-weight-bold bg-gray my-5 px-5 py-4">Logo Work</h1>
    <div className="projects-content d-flex flex-wrap p-3">
      {Object.keys(logos).map((item) => (
        <LogosList
          class={logos[item].class}
          imgUrl={logos[item].imgUrl}
          name={logos[item].name}
        />
      ))}
    </div>
  </div>
);

export default Projects;
