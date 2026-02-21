const Skills = () => {
  const tools = ["MSSQL", "MYSQL", "Figma", "GitHub", "Netlify", "MS Excel", "Tableau"];
  const techs = ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React JS", "SQL", "GIT", "Java"];

  return (
    <section className="bg-slate-50 dark:bg-slate-900 w-full p-5 md:px-25 md:py-10 md:flex justify-evenly gap-10">
      <h2 className="text-2xl font-medium text-sky-700 dark:text-sky-300 mb-5">Tools & Techs</h2>

      <div className="md:w-md lg:w-2xl font-medium">
        <ul className="flex flex-wrap gap-x-3 gap-y-3">
          {tools.map((tool, index) => (
            <li key={index} className="font-mono bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 border border-blue-200 dark:border-blue-800 px-5 py-2 rounded-full transition hover:scale-95">
              {tool}
            </li>
          ))}
          {techs.map((tech, index) => (
            <li key={index} className="font-mono bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 px-5 py-2 rounded-full transition hover:scale-95">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
