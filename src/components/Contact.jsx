

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-50 dark:bg-slate-900 w-full p-5 md:px-25 md:py-10 md:flex justify-evenly gap-10">
        <h2 className="text-2xl font-medium text-sky-700 dark:text-sky-300 mb-5">Contact</h2>

        <div className="md:w-md lg:w-2xl font-medium">
          <ul className="flex flex-col gap-5 text-slate-800 dark:text-slate-200">
            <a href="mailto:ganeshmrsn002@gmail.com">Email: <span className="text-sky-700 dark:text-sky-300">ganeshmrsn002@gmail.com</span></a>
            <a href="tel:+917338702103">Phone: <span className="text-sky-700 dark:text-sky-300">+91 73387 02103</span></a>
          </ul>
        </div>
    </section>
  )
}

export default Contact