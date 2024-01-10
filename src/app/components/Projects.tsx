import data from "@/../data.json";
import { Fragment } from "react";
import Markdown from "react-markdown";

const Projects = () => {
  return (
    <>
      <h1 className="text-[1.1rem] font-[550] text-dawn-darkText mt-2 font-heading">
        projects:
      </h1>

      {data.projects
        .filter((project) => project.include)
        .map((project, index) => (
          <div
            className={`col-span-6 ${index === 0 ? "-mt-1" : "mt-2.5"}`}
            key={index}
          >
            <div className=" flex flex-col font-semibold">
              <div className="flex space-x-2">
                <a href={project.link} target="_blank">
                  <h2 className="text-[0.9rem] font-sans font-semibold">
                    {project.name}
                  </h2>
                </a>
                <p className="font-sans text-[0.9rem] font-[550]">
                  {project.description}
                </p>
                <span className="flex-grow" />
                <p className="font-sans text-[0.9rem] font-medium text-dawn-subtle">
                  {project.duration}
                </p>
              </div>
              <span className="text-[0.8rem] font-mono font-semibold text-dawn-subtle mt-1">
                {project.technologies}
              </span>
            </div>
            <div className="flex flex-col font-[525] font-sans text-[0.75rem] ml-4 mt-1">
              <ul className="leading-[1.4]">
                {project.highlights.map((li, index) => (
                  <li key={index}>
                    <Markdown>{li}</Markdown>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
    </>
  );
};

export default Projects;
