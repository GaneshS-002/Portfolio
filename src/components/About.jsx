

const About = () => {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 w-full p-5 md:px-25 md:py-10 md:flex justify-evenly gap-10">
        <h2 className="text-2xl font-medium text-sky-700 dark:text-sky-300 mb-5">About</h2>
        <div className="md:w-md lg:w-2xl font-medium">
            <p className="text-justify text-slate-800 dark:text-slate-300">
                As a Computer Science graduate, I build scalable web applications with a strong focus on the React ecosystem and modern frontend architecture. I enjoy transforming complex backend logic into seamless, high-performance user experiences.<br /><br />

                My background in computer science allows me to think beyond components and interfaces. I consider data flow, system design, performance optimization, and clean code structure as core parts of development.<br /><br />

                I am comfortable working across the stack and value building products that are robust, maintainable, and engineered for growth.
            </p>
        </div>
    </section>
  )
}

export default About