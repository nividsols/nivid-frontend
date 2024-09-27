import React, { useState } from "react";
import emailjs from 'emailjs-com';
import Contact from "../assets/contact.jpg";
const serviceId = import.meta.env.VITE_API_SERVICE_ID;
const templateId = import.meta.env.VITE_API_TEMPLATE_ID;
const userId = import.meta.env.VITE_API_USER_ID;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const serviceID = serviceId;
      const templateID = templateId;
      const userID = userId;

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await emailjs.send(serviceID, templateID, templateParams, userID);
      setStatus("SUCCESS");
      setFormData({ name: "", email: "", message: "" }); 
    } catch (error) {
      console.error("Failed to send email. Error:", error);
      setStatus("FAILED");
    }
  };
  window.scrollTo(0, 0)
  return (
    <div className="w-full flex justify-center ">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center md:gap-12 p-8 min-w-[80%]">
        <div className="md:py-6 max-w-md w-full my-8">
          <h2 className="text-4xl font-extrabold text-left text-[#161D6F]">
            Contact Us
          </h2>
          <p className="text-gray text-justify font-semibold my-8">
          Have a question or feedback? <br />
          Fill out the form, and we'll get back to you soon. <br />
          We take pride in being responsive and we promise to follow up within one business days.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                className="w-full p-2 border-b-2 border-gray-200 bg-transparent text-black-300 mt-1 outline-none placeholder-gray"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                className="w-full p-2 border-b-2 border-gray-200 bg-transparent text-black-300 mt-1 outline-none placeholder-gray"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <textarea
                name="message"
                className="w-full p-2 border-2 rounded-lg border-gray-200 bg-transparent text-black-300 mt-1 outline-none placeholder-gray"
                placeholder="Enter your message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="px-8 p-2 bg-[#0A72AD] text-white rounded mt-1 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Get in touch →
              </button>
            </div>
          </form>
          {status === "SUCCESS" && <p className="text-green-500 mt-4">Message sent successfully!</p>}
          {status === "FAILED" && <p className="text-red-900 font-bold mt-4">Failed to send message. Please try again.</p>}
        </div>
        <img src={Contact} alt=""  className="w-full md:w-1/2"/>
      </div>
    </div>
  );
};

export default ContactUs;


