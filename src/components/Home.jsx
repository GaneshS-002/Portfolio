import Photo from "../assets/Ganesh_S.svg"
import { FaArrowRightLong } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { TbMail  } from "react-icons/tb";

const Home = () => {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 w-full pt-25 pb-10 flex flex-col gap-8 items-center">
      <div className="rounded-full w-35 h-35 overflow-hidden">
        <img src={Photo} alt="Profile-pic" className="w-full h-full object-cover object-top"/>
      </div>

      <h1 className="font-bold font-[Raleway] text-5xl text-slate-800 dark:text-slate-100">Ganesh S</h1>
      <h2 className="text-2xl text-slate-800 dark:text-slate-200">Software Developer</h2>

      <div className="flex flex-col md:flex-row gap-8">
        <button className="flex items-center gap-2 bg-blue-700 text-slate-800 dark:text-slate-100 font-medium px-5 py-2 rounded-lg cursor-pointer transition hover:scale-105">
          Resume <FaArrowRightLong />
        </button>
        <button className="px-5 py-2 border-2 border-blue-700 text-slate-800 dark:text-slate-100 font-medium rounded-lg cursor-pointer transition hover:scale-105">
          Contact me
        </button>
      </div>

      <div className="flex gap-10 text-sky-100 dark:text-slate-200">
        <a href="https://linkedin.com/in/ganesh-s002" target="_blank"><FaLinkedin className="text-3xl cursor-pointer transition hover:text-blue-700"/></a>
        <a href="https://github.com/ganeshs-002" target="_blank"><FaGithub className="text-3xl cursor-pointer transition hover:text-blue-700"/></a>
        <a href="mailto:ganeshmrsn002@gmail.com"><TbMail  className="text-3xl cursor-pointer transition hover:text-blue-700"/></a>
      </div>
    </section>
  )
}

export default Home