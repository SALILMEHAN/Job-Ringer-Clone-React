import Carousel1 from "./slick_sliders/Carousel1";
import Slider from "./slick_sliders/Slider";
import { FaSearch } from "react-icons/fa";

const SectionOne = () => {
  const tags = [
    "#Fresher",
    "#Work From Home",
    "#WFH",
    "#IT",
    "#HR",
    "#Back Office",
    "#BPO Jobs",
    "#ITES",
    "#Finance",
    "#Accounts",
    "#Medical",
    "#Pharma",
    "#Manager",
    "#Developer",
    "#Marketing",
    "#Engineering",
    "#Non Government Jobs",
  ];

  return (
    <main className="container mx-auto py-5 px-5">
      <div className="text-center mb-5 text-blue-900">
        <h1 className="text-lg font-extrabold">BRINGING YOU THE PERFECT JOB!</h1>
        <p className="text-lg font-medium">11,000+ JOBS to Apply</p>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly items-start gap-7">
        <div className="bg-skyBlue p-5 rounded-md w-full md:w-1/2">
          <div className="flex justify-between gap-3 mb-4">
            <input
              type="text"
              placeholder="Search Jobs Now"
              className="w-full p-2 rounded-md"
            />
            <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition">
              Search
            </button>
          </div>
          <div className="flex justify-end gap-3">
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">
              View Jobs
            </button>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition">
              Register For FREE
            </button>
          </div>
        </div>
        <div className="bg-skyBlue p-5 rounded-md w-full md:w-1/2 flex flex-col items-center">
          <h2 className="text-blue-900 text-lg font-bold mb-4 flex items-center gap-2">
            Quick Job Search <FaSearch />
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-white text-blue-900 px-2 py-1 rounded hover:bg-blue-800 hover:text-white transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center mt-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Featured Jobs</h2>
        <Carousel1 />
        <h2 className="text-2xl font-bold text-blue-800 mt-6 mb-4">Remote Jobs</h2>
        <Carousel1 />
        <Slider />
      </section>
    </main>
  );
};

export default SectionOne;
