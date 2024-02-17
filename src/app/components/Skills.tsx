import data from "@/../data.json";

const Skills = () => {
  return (
    <>
      <h2 className="text-[1.1rem] font-[550] col-span-6 text-dawn-darkText font-heading -my-1">
        tools & languages:
      </h2>
      <div className="col-span-6 font-[525] text-[0.75rem]">
        {data.skills.Languages}, {data.skills.Tools}
      </div>
    </>
  );
};

// const Skills = () => {
//   return (
//     <>
//       <h2 className="text-[1.1rem] font-[550] col-span-2 text-dawn-darkText font-heading">
//         tools:{" "}
//       </h2>
//       <div className="col-span-4">
//         {data.skills.Tools.map((tool) => (
//           <span className={"font-[525] text-[0.75rem]"}>{tool}, </span>
//         ))}
//       </div>

//       <h2 className="text-[1.1rem] font-[550] col-span-2 text-dawn-darkText font-heading">
//         languages:{" "}
//       </h2>
//       <div className="col-span-4">
//         {data.skills.Languages.map((language) => (
//           <span className={"font-[525] text-[0.75rem]"}>{language}, </span>
//         ))}
//       </div>
//     </>
//   );
// };

export default Skills;
