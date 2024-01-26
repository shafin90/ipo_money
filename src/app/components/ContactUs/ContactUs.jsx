"use client"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import { useRef } from "react";
import { BsTwitterX } from "react-icons/bs";
import { CiYoutube } from "react-icons/ci";
import { FaMailBulk } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa6";
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
  
    try {
      const result = await emailjs.sendForm('service_qje8gmn', 'template_januxek', form.current, 'IgaUKfqmOcLbDsWnD');
      console.log(result.text);
      
      // Display a toast notification for successful submission
      toast.success('Your message has been successfully sent!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
  
      // Reset the form
      form.current.reset();
    } catch (error) {
      console.error(error.text);
      // Provide user feedback for error in submission
      toast.error('Error sending your message. Please try again later.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div id="contact-us" className="w-11/12 mx-auto mt-28">
      <h1 className="text-center font-extrabold text-5xl text-slate-600 mb-16">Contact US</h1>
      <div className="hero bg-gray-50 hover:bg-gray-100  text-slate-600  rounded">
        <div className="hero-content flex-col lg:flex-row-reverse gap-x-36">
          <div className="text-center lg:text-left">
            <h1 className="text-xl font-bold flex items-center gap-x-2"><FaMailBulk></FaMailBulk> <span>Info@ipomoney.in</span></h1>
            <ul className=' flex justify-between items-center w-52 transition-all mt-5'>
              <li><Link href=""><FaInstagram className=' text-2xl cursor-pointer transition-all hover:text-3xl' /></Link></li>
              <li><Link href=""><BsTwitterX className=' text-2xl cursor-pointer transition-all hover:text-3xl' /></Link></li>
              <li><Link href=""><CiYoutube className=' text-2xl cursor-pointer transition-all hover:text-3xl' /></Link></li>
              <li><Link href=""><FaFacebookF className=' text-2xl cursor-pointer transition-all hover:text-3xl' /></Link></li>
            </ul>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gray-50 hover:bg-gray-100 transition-all text-slate-600 ">
            <form ref={form} onSubmit={sendEmail} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-bold">Your Name</span>
                </label>
                <input type="text" placeholder="Your Name" name="user_name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-bold">Your Email Address</span>
                </label>
                <input type="email" placeholder="your email address" name="user_email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-bold">Write your message</span>
                </label>
                <label className="form-control">
                  <textarea className="textarea textarea-bordered h-24" name="message" placeholder="write your message"></textarea>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Send" className="btn bg-[#bfdbfe] text-gray-800 hover:text-white border-0" />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Add the ToastContainer at the end of your component */}
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
