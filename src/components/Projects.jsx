import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "Arrow Homes",
      techStack: ["React", "JavaScript", "Tailwind CSS"],
      description: 
        "Engineered a responsive real-estate platform using React and Tailwind CSS with a modular architecture, optimized UX navigation, and high-performance rendering for all device breakpoints.",
      live: "https://www.arrowhomes.org/",
    },

    {
      title: "Global News Around",
      techStack: ["React", "JavaScript", "Tailwind CSS", "REST API"],
      description: 
        "Global News Around: Architected a real-time news application using React and Tailwind CSS, integrating REST APIs with React hooks for dynamic filtering and a mobile-first deployment on Netlify.",
      live: "https://globalnewsaround.netlify.app",
    },
  ];

  return (
    <section className="bg-slate-50 dark:bg-slate-900 w-full p-5 md:px-25 md:py-10 md:flex justify-evenly gap-10">
      <h2 className="text-2xl font-medium text-sky-700 dark:text-sky-300 mb-5">Projects</h2>

      <div className="font-medium md:w-md lg:w-2xl gap-5 flex flex-wrap">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-5 rounded-xl flex flex-col justify-between gap-4 md:max-w-md lg:max-w-xs shadow-md text-slate-500 dark:text-slate-400 hover:bg-sky-100 hover:dark:bg-slate-900 hover:text-sky-700 transition-all">

            <h2 className="text-xl text-slate-900 dark:text-slate-100 font-bold">{project.title}</h2>
            
            <ul className="flex flex-wrap gap-x-3 gap-y-3">
              {project.techStack.map((tech, index) => (
                <li key={index} className="font-mono text-xs bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 px-2 py-1 rounded">{tech}</li>
              ))}
            </ul>

            <h3 className="text-justify text-slate-800 dark:text-slate-300">{project.description}</h3>

            <a href={project.live} target="_blank" className="flex justify-center items-center gap-2 font-bold border-t border-slate-400 dark:border-slate-700 text-blue-600 pt-2 cursor-pointer hover:text-blue-700">
              Live <FiExternalLink className="font-extrabold"/>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
