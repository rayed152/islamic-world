import React from "react";

function ContactInfo() {
  return (
    <div className="flex w-full h-full bg-[#CBE4DE] justify-center">
      <div className="bg-[#2E4F4F] w-[35%] rounded-r-[100px] flex-grow p-4">
        <h1 className="text-center text-white font-heading font-[500] text-[28px]">
          Contact Us
        </h1>
        <div className="flex items-center justify-center mb-3 gap-6 mt-4 ">
          <input
            placeholder="Full Name"
            type="text"
            className="border border-gray-400 p-2 rounded-lg focus:outline-none"
          />
          <input
            placeholder="Email"
            type="email"
            className="border border-gray-400 p-2 rounded-lg focus:outline-none"
          />
        </div>
        <div className="flex flex-col mb-3">
          <textarea
            placeholder="Your Message"
            className="border border-gray-400 p-2 rounded-lg focus:outline-none"
          />
        </div>
        <button className="bg-[#0E8388] hover:bg-gray-600 text-white py-2 px-4 rounded-lg">
          Send
        </button>
      </div>

      <div className=" w-[45%] p-6 text-[#2E4F4F] text-center">
        <div className="mb-4">
          <h1 className="font-heading font-[500] text-[28px]">Contact Info</h1>
        </div>
        <div className="mb-4 pt-3">
          <p>Email: rayed152@gmail.com</p>
          <p>Address: House 90, Road 23, Block A, Banani R/A</p>
          <p>Phone: 01711663848</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
