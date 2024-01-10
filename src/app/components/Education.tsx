const Education = () => {
  return (
    <>
      <h1 className="text-[1.1rem] col-span-6 text-dawn-darkText mt-2 -mb-1 font-heading font-[550]">
        education:
      </h1>
      <div className="flex flex-col col-span-2 font-semibold">
        <h2 className="text-[0.9rem] font-sans font-semibold">
          University of Waterloo
        </h2>
        <p className="font-sans text-[0.75rem] font-[550]">
          B. Computer Science
        </p>
        <p className="font-sans text-[0.75rem] font-[550] text-dawn-subtle">
          2021 - 2026 (expected)
        </p>
      </div>
      <div className="flex flex-col col-span-4 font-sans text-[0.75rem] font-[525] leading-[1.4]">
        Algorithms (C++), Operating Systems (C++), Data Structures and Data
        Management (C++), Object-Oriented Software Development (C++), Functional
        Programs (Racket), Art History and Visual Culture
      </div>
    </>
  );
};

export default Education;
