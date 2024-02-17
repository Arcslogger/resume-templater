import { Fragment } from "react";
import data from "@/../data.json";
import Markdown from "react-markdown";

const Experience = () => {
  return (
    <>
      <h1 className="text-[1.1rem] font-[550] text-dawn-darkText font-heading -my-1">
        experience:
      </h1>

      {data.experience
        .filter((experience) => experience.include)
        .map((experience, index) => (
          <div
            className={`col-span-6 ${index === 0 ? "-mt-3" : "-mt-0.5"}`}
            key={index}
          >
            <div key={index} className="flex flex-col font-medium">
              <div className="flex space-x-2">
                <a
                  href={experience.href || ""}
                  target="_blank"
                  className="text-[0.9rem] font-sans font-semibold"
                >
                  {experience.organization}
                </a>
                <p className="ml-2 font-sans text-[0.9rem] font-[550]">
                  {experience.position}
                </p>
                <span className="grow"></span>
                <p className="font-sans text-[0.9rem] font-medium text-dawn-subtle">
                  {experience.duration}
                </p>
              </div>
              <span className="text-[0.75rem] font-mono font-semibold text-dawn-subtle mt-1">
                {experience.technologies}
              </span>
            </div>
            <div className="flex flex-col font-[525] font-sans text-[0.75rem] ml-4 mt-1">
              <ul className="leading-[1.4]">
                {experience.responsibilities.map((li, index) => (
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

export default Experience;
