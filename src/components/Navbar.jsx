const Navbar = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white drop-shadow-lg z-50">
        <div className="container mx-auto flex flex-wrap justify-between items-center py-3 px-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://www.jobringer.com/images/logonew.svg"
              alt="JobRinger Logo"
              className="h-12"
            />
            <span className="text-lg uppercase">
              Bringing you
              <span className="ml-2 font-bold uppercase text-blue-600">
                the Perfect Job
              </span>
            </span>
          </div>
          <nav
            className="flex flex-wrap items-center space-x-4 font-semibold"
            aria-label="Main Navigation"
          >
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 transition"
            >
              Jobs
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 transition"
            >
              Active Employers
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 transition"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-900 bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 transition"
              type="button"
            >
              Jobseeker Login
            </a>
            <a
              href="#"
              className="bg-yellow-400 text-gray-900 px-4 py-1 rounded hover:bg-yellow-500 transition"
              type="button"
            >
              Employer Login
            </a>
          </nav>
        </div>
      </header>
      <div className="mx-4 mt-20 flex flex-wrap justify-between items-center bg-gradient-to-r from-cyan-400 to-blue-900 text-white text-center p-4 rounded">
        <span className="uppercase text-3xl font-medium">Employers</span>
        <span className="text-lg font-bold">
          WELCOME OFFER - FREE JOB Postings and Much More.
        </span>
        <div className="flex flex-wrap items-center justify-center space-x-4 mt-2 md:mt-0">
          <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition">
            Register for FREE
          </button>
          <button className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-200 transition">
            Post A Job
          </button>
          <a
            href="#"
            className="text-white underline hover:text-gray-200 transition"
          >
            Sales Enquiry
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
