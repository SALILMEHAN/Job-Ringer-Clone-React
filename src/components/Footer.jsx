import React from 'react'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTelegramPlane, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'

const Footer = () => {
    return (
        <div className="bg-[#e0f7fa] text-center px-4">
            <div className="flex justify-evenly
                    gap-5
                    border-b-2 
                    border-t-2 
                    border-blue-500
                     py-6
                     relative 
                     lightblue bg-[url('https://www.jobringer.com/images/rec-right.png')] 
                     bg-cover 
                     bg-opacity-10
                     h-[150px]">
                <div>
                    <h2 className="text-lg font-semibold">Jobs Posted</h2>
                    <p className="text-4xl font-bold text-blue-800">31258</p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Jobs Filled</h2>
                    <p className="text-4xl font-bold text-blue-800">15153</p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Employers</h2>
                    <p className="text-4xl font-bold text-blue-800">19967</p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Active Users</h2>
                    <p className="text-4xl font-bold text-blue-800">1295533</p>
                </div>
            </div>
            <div className="mt-4 flex justify-center items-center px-10 gap-10 text-justify">
                <span className="text-sm px-6">
                    <strong>Disclaimer:</strong>
                    All Trademarks and Logos are the property of their respective owners, depicted here purely for representation purpose. Jobringer.com has taken all reasonable steps to ensure that information on this site is genuine. Job Applicants are advised to evaluate independently. Jobringer.com shall not have any responsibility in this regard. All Jobseeker services are strictly designed & meant only for job search assistance and to maximize the chances for the jobseekers to get their dream job. All Job Seeker Credentials and Employment Opportunities are subject to individual merit & evaluation. We do not guarantee any job to any jobseeker.
                </span>
                <div className='px-6'>
                    <span className="text-sm">Recognized By</span>
                    <img src="https://www.jobringer.com/images/startuplogo.png" alt="Recognized by Startup India" />
                </div>
            </div>
            <div className="mt-4 flex justify-end items-center px-6">
                <span className="text-sm font-semibold">Follow us on</span>
                <div className="flex space-x-4 justify-end  pr-8 pl-2">
                    <a href="#" className="text-blue-800 text-white bg-indigo-900 p-1 rounded-full"><FaWhatsapp /></a>
                    <a href="#" className="text-blue-800 text-white bg-indigo-900 p-1 rounded-full"><FaFacebook /></a>
                    <a href="#" className="text-blue-800 text-white bg-indigo-900 p-1 rounded-full"><FaTwitter /></a>
                    <a href="#" className="text-blue-800 text-white bg-indigo-900 p-1 rounded-full"><FaInstagramSquare /></a>
                    <a href="#" className="text-blue-800 text-white bg-indigo-900 p-1 rounded-full"><FaLinkedin /></a>
                    <a href="#" className="text-blue-800 text-white bg-indigo-900 p-1 rounded-full"><IoLogoYoutube /></a>
                    <a href="#" className="text-blue-800 text-white bg-indigo-900 p-1 rounded-full"><FaTelegramPlane /></a>
                </div>
            </div>
            <div className="mt-4 text-center text-sm border-t-2 border-gray-300 pt-4">
                <p>Terms and conditions | Privacy Policy | Refund / Cancellation Policy | About Us | Contact Us | FAQ</p>
                <p>© All Rights Reserved @ 2024 Jobtech Ventures Private Limited.</p>
            </div>
        </div>
    )
}

export default Footer