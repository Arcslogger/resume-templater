import data from "@/../data.json";
import { Fragment } from "react";

const Projects = () => {
  return (
    <>
      <h1 className="italic text-[1.3rem] font-semibold col-span-6 text-dawn-darkText mt-2 font-heading">
        projects
      </h1>

      {data.projects.map((project, index) => (
        <Fragment key={index}>
          <div className="flex flex-col col-span-6 font-semibold">
            <div className="flex space-x-2 -mt-3">
              <a href={project.link} target="_blank">
                <h2 className="text-[0.875rem] font-sans font-semibold">
                  {project.name}
                </h2>
              </a>
              <p className="font-sans text-[0.875rem] font-medium">
                {project.description}
              </p>
            </div>
            <span className="text-[0.75rem] font-mono font-medium text-dawn-subtle italic mt-0.5">
              {project.technologies}
            </span>
          </div>
          <div className="flex flex-col col-span-6 font-sans text-[0.875rem] ml-4 -mt-3.5">
            <ul>
              {project.highlights.map((li) => (
                <li key={li.length}>{li}</li>
              ))}
            </ul>
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default Projects;
