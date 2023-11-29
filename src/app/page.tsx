import Header from "./components/Header";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Extras from "./components/Extras";

export default function Home() {
  return (
    <body className="bg-dawn-base text-dawn-text leading-tight">
      <Header />
      <div className="flex flex-row">
        <div className="grid grid-cols-6 gap-4">
          <Experience />
          <Projects />
          <Education />
          <Extras />
        </div>
      </div>
    </body>
  );
}
