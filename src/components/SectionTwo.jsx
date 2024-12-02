const SectionTwo = () => {
  return (
    <div className="text-center">
      <section className="flex flex-col md:flex-row justify-center items-center bg-[url('https://i.ibb.co/Y84gjn8/1mobile-bg.jpg')] bg-cover h-[325px] text-white">
        <div className="flex flex-col text-left p-6 md:ml-28">
          <h2 className="text-2xl font-semibold">APPLY TO JOBS ON-THE-GO</h2>
          <p className="text-blue-800 text-2xl font-thin">Jobringer Mobile App</p>
          <div className="flex justify-center my-4">
            <img
              src="https://www.jobringer.com/images/anroid.png"
              alt="Google Play Store"
              className="mr-2 h-12"
            />
            <img
              src="https://www.jobringer.com/images/ios.png"
              alt="Apple App Store"
              className="h-12"
            />
          </div>
          <p className="text-3xl font-bold">
            Mobile App <span className="text-blue-600">Download</span>
          </p>
        </div>
      </section>
      <section className="bg-sky-100 p-6">
        <div className="flex flex-col md:flex-row justify-around items-center gap-6">
          <article className="relative bg-[url('https://www.jobringer.com/images/city-job-bg.jpg')] bg-cover bg-opacity-10 rounded-md p-6 w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">JOBS IN INDIA</h2>
            <ul className="flex flex-wrap gap-4">
              {[
                "#Mumbai",
                "#Delhi",
                "#Ajmer",
                "#Pune",
                "#Hyderabad",
                "#Chennai",
                "#Kolkata",
                "#Indore",
                "#Gurugram",
                "#Jaipur",
                "#Ahmedabad",
              ].map((city) => (
                <li
                  key={city}
                  className="bg-white text-blue-900 px-2 py-1 rounded hover:bg-blue-800 hover:text-white transition"
                >
                  {city}
                </li>
              ))}
            </ul>
          </article>
          <article className="relative bg-[url('https://www.jobringer.com/images/city-job-bg.jpg')] bg-cover bg-opacity-30 rounded-md p-6 w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">INTERNATIONAL JOBS</h2>
            <ul className="flex flex-wrap gap-4">
              {[
                "#Africa",
                "#USA",
                "#UK",
                "#Australia",
                "#Canada",
                "#Singapore",
                "#Dubai",
                "#Saudi Arabia",
                "#New Zealand",
              ].map((country) => (
                <li
                  key={country}
                  className="bg-white text-blue-900 px-2 py-1 rounded hover:bg-blue-800 hover:text-white transition"
                >
                  {country}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
};

export default SectionTwo;
