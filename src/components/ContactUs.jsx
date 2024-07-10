import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
  };

  return (
    <div className="w-full flex justify-center my-12 absolute bottom-[36rem] md:bottom-80">
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-16 bg-gradient-to-l from-[#60BBEE] via-[#0775B4] to-[#0A72AD] p-8 min-w-[80%] shadow-lg">
        <div className="bg-white p-6 pb-8  shadow-lg max-w-xs mb-6 md:mb-0 md:mr-6 flex flex-col items-center relative mt-8">
          <div className="shadow-lg bg-white text-[#0775B4] rounded-full h-20 w-20 flex justify-center items-center mr-2 absolute top-[-2.5rem]">

            <span className="text-3xl w-6">
            <svg fill="#0775B4" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 349.078 349.078" xml:space="preserve" stroke="#0775B4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M150.299,26.634v58.25c0,7.9-6.404,14.301-14.304,14.301c-28.186,0-43.518,28.909-45.643,85.966h45.643 c7.9,0,14.304,6.407,14.304,14.304v122.992c0,7.896-6.404,14.298-14.304,14.298H14.301C6.398,336.745,0,330.338,0,322.447V199.455 c0-27.352,2.754-52.452,8.183-74.611c5.568-22.721,14.115-42.587,25.396-59.048c11.608-16.917,26.128-30.192,43.16-39.44 C93.886,17.052,113.826,12.333,136,12.333C143.895,12.333,150.299,18.734,150.299,26.634z M334.773,99.186 c7.896,0,14.305-6.407,14.305-14.301v-58.25c0-7.9-6.408-14.301-14.305-14.301c-22.165,0-42.108,4.72-59.249,14.023 c-17.035,9.248-31.563,22.523-43.173,39.44c-11.277,16.461-19.824,36.328-25.393,59.054c-5.426,22.166-8.18,47.266-8.18,74.605 v122.992c0,7.896,6.406,14.298,14.304,14.298h121.69c7.896,0,14.299-6.407,14.299-14.298V199.455 c0-7.896-6.402-14.304-14.299-14.304h-44.992C291.873,128.095,306.981,99.186,334.773,99.186z"></path> </g> </g></svg>
            </span>
          </div>
          <div className="flex items-center mb-4 mt-6">
            <h2 className="text-2xl font-semibold">Name</h2>
          </div>
          <p className="text-gray-400 text-justify">
            We like the final result this project, in extraordinary and also
            provides the best service to the client.
          </p>
        </div>
        <div className="p-6  max-w-md w-full my-8">
          <h2 className="text-4xl font-bold mb-12 text-left text-white">
            Contact Us
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                className="w-full p-2 border-b-2 border-gray-200 bg-transparent text-gray-300 mt-1 outline-none placeholder-white"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                className="w-full p-2 border-b-2 border-gray-200 bg-transparent text-gray-300  mt-1 outline-none placeholder-white "
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <textarea
                name="message"
                className="w-full p-2 border-2 rounded-lg border-gray-200 bg-transparent text-gray-300  mt-1 outline-none placeholder-white"
                placeholder="Enter your message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className=" w-full flex justify-end">
              <button
                type="submit"
                className="px-8 p-2 bg-[#0A72AD] text-white rounded mt-1 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Send →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
