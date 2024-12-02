import {
    FaFacebook,
    FaInstagramSquare,
    FaLinkedin,
    FaTelegramPlane,
    FaTwitter,
    FaWhatsapp,
} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="bg-[#e0f7fa] text-center px-4">
            <div className="flex flex-wrap justify-evenly gap-5 border-b-2 border-t-2 border-blue-500 py-6 bg-[url('https://www.jobringer.com/images/rec-right.png')] bg-cover bg-opacity-10 h-auto sm:h-[150px]">
                <div className="text-center">
                    <h2 className="text-lg font-semibold">Jobs Posted</h2>
                    <p className="text-4xl font-bold text-blue-800">31,258</p>
                </div>
                <div className="text-center">
                    <h2 className="text-lg font-semibold">Jobs Filled</h2>
                    <p className="text-4xl font-bold text-blue-800">15,153</p>
                </div>
                <div className="text-center">
                    <h2 className="text-lg font-semibold">Employers</h2>
                    <p className="text-4xl font-bold text-blue-800">19,967</p>
                </div>
                <div className="text-center">
                    <h2 className="text-lg font-semibold">Active Users</h2>
                    <p className="text-4xl font-bold text-blue-800">1,295,533</p>
                </div>
            </div>
            <div className="mt-6 flex flex-wrap justify-center items-center gap-6 px-6">
                <span className="text-sm flex-1 max-w-lg">
                    <strong>Disclaimer:</strong> All Trademarks and Logos are the property
                    of their respective owners, depicted here purely for representation
                    purposes. Jobringer.com has taken all reasonable steps to ensure that
                    information on this site is genuine. Job Applicants are advised to
                    evaluate independently. Jobringer.com shall not have any
                    responsibility in this regard. All Jobseeker services are strictly
                    designed & meant only for job search assistance and to maximize the
                    chances for the jobseekers to get their dream job. All Job Seeker
                    Credentials and Employment Opportunities are subject to individual
                    merit & evaluation. We do not guarantee any job to any jobseeker.
                </span>
                <div className="flex-shrink-0">
                    <span className="block text-sm mb-2">Recognized By</span>
                    <img
                        src="https://www.jobringer.com/images/startuplogo.png"
                        alt="Recognized by Startup India"
                        className="w-96"
                    />
                </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row justify-end items-center px-6 gap-4">
                <span className="text-sm font-semibold">Follow us on</span>
                <div className="flex space-x-4">
                    <a
                        href="#"
                        aria-label="WhatsApp"
                        className="text-white bg-indigo-900 p-2 rounded-full hover:bg-green-500 transition"
                    >
                        <FaWhatsapp />
                    </a>
                    <a
                        href="#"
                        aria-label="Facebook"
                        className="text-white bg-indigo-900 p-2 rounded-full hover:bg-blue-600 transition"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="#"
                        aria-label="Twitter"
                        className="text-white bg-indigo-900 p-2 rounded-full hover:bg-blue-400 transition"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="#"
                        aria-label="Instagram"
                        className="text-white bg-indigo-900 p-2 rounded-full hover:bg-pink-600 transition"
                    >
                        <FaInstagramSquare />
                    </a>
                    <a
                        href="#"
                        aria-label="LinkedIn"
                        className="text-white bg-indigo-900 p-2 rounded-full hover:bg-blue-700 transition"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="#"
                        aria-label="YouTube"
                        className="text-white bg-indigo-900 p-2 rounded-full hover:bg-red-600 transition"
                    >
                        <IoLogoYoutube />
                    </a>
                    <a
                        href="#"
                        aria-label="Telegram"
                        className="text-white bg-indigo-900 p-2 rounded-full hover:bg-blue-500 transition"
                    >
                        <FaTelegramPlane />
                    </a>
                </div>
            </div>
            <div className="mt-6 text-center text-sm border-t-2 border-gray-300 pt-4">
                <p className="mb-2 space-x-2">
                    <a href="#" className="hover:underline">
                        Terms and conditions
                    </a>
                    &nbsp; &nbsp;| &nbsp;
                    <a href="#" className="hover:underline">
                        Privacy Policy
                    </a>
                    &nbsp; &nbsp;| &nbsp;
                    <a href="#" className="hover:underline">
                        Refund / Cancellation Policy
                    </a>
                    &nbsp; &nbsp;| &nbsp;
                    <a href="#" className="hover:underline">
                        About Us
                    </a>
                    &nbsp; &nbsp;| &nbsp;
                    <a href="#" className="hover:underline">
                        Contact Us
                    </a>
                    &nbsp; &nbsp;| &nbsp;
                    <a href="#" className="hover:underline">
                        FAQ
                    </a>
                </p>
                <p>© All Rights Reserved @ 2024 Jobtech Ventures Private Limited.</p>
            </div>
        </footer>
    );
};

export default Footer;
