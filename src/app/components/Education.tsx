const Education = () => {
  return (
    <>
      <h1 className="italic text-[1.3rem] col-span-6 text-dawn-darkText mt-2 font-heading font-semibold">
        education
      </h1>
      <div className="flex flex-col col-span-2 font-semibold -mt-3">
        <h2 className="text-[0.875rem] font-sans font-semibold">
          University of Waterloo
        </h2>
        <p className="font-sans text-[0.875rem] font-medium">
          B. Computer Science
        </p>
        <p className="font-sans text-[0.875rem] font-medium text-dawn-subtle">
          Expected Graduation: 2026
        </p>
      </div>
      <div className="flex flex-col col-span-4 font-sans text-[0.875rem] -mt-3.5">
        Data Structures and Data Management (C++), Object-Oriented Software
        Development (C++), Functional Programs (Racket), Elementary Algorithm
        Design (C), Statistics & Probability, Fine Arts Studio Fundamentals
      </div>
    </>
  );
};

export default Education;
