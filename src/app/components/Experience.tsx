import { Fragment } from "react";
import data from "@/../data.json";
import Markdown from "react-markdown";

const Experience = () => {
  return (
    <>
      <h1 className="italic text-[1.3rem] font-semibold col-span-6 mt-1 text-dawn-darkText font-heading">
        experience
      </h1>

      {data.experience
        .filter((experience) => experience.include)
        .map((experience, index) => (
          <Fragment key={index}>
            <div
              key={index}
              className="flex flex-col col-span-6 font-medium -mt-3"
            >
              <div className="flex space-x-2">
                <h2 className="text-[0.875rem] font-sans font-semibold">
                  {experience.organization}
                </h2>
                <p className="ml-2 font-sans text-[0.875rem] font-medium">
                  {experience.position}
                </p>
                <span className="grow"></span>
                <p className="font-sans text-[0.875rem] font-medium text-dawn-subtle">
                  {experience.duration}
                </p>
              </div>
              <span className="text-[0.75rem] font-mono font-medium text-dawn-subtle italic mt-0.5">
                {experience.technologies}
              </span>
            </div>
            <div className="flex flex-col col-span-6 font-sans text-[0.875rem] ml-4 -mt-3.5">
              <ul>
                {experience.responsibilities.map((li, index) => (
                  <li key={index}>
                    <Markdown>{li}</Markdown>
                  </li>
                ))}
              </ul>
            </div>
          </Fragment>
        ))}
    </>
  );
};

export default Experience;
