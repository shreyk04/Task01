import React from "react";

function Form() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 my-10">
      <div className="bg-white rounded-lg shadow-lg flex  flex-col-reverse md:flex-row w-[90%] md:w-full max-w-4xl">
        <div className="bg-pink-500 text-white p-10 rounded-l-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
          <div className="mb-4 flex gap-4">
            <i className="fas fa-map-marker-alt text-2xl"></i>
            <p>
              Beside Barshal Water Tank,
              <br />
              Manpur, Barhanti,
              <br />
              West Bengal 723156
            </p>
          </div>
          <div className="mb-4 flex gap-4">
            <i className="fas fa-envelope text-2xl"></i>
            <p>kkghosh0099@gmail.com</p>
          </div>
          <div className="mb-4 flex gap-4">
            <i className="fas fa-phone text-2xl"></i>
            <p>+91 9007062180</p>
          </div>
          <div className="flex space-x-4 mt-20 text-2xl gap-4 cursor-pointer">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
        <div className="p-10 flex-1">
          <h2 className="text-2xl font-semibold mb-4 text-pink-500">
            Send a Message
          </h2>
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 p-2 rounded outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 p-2 rounded outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 p-2 rounded outline-none"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="border border-gray-300 p-2 rounded outline-none"
              />
            </div>
            <textarea
              placeholder="Write your message here..."
              className="border border-gray-300 p-2 rounded w-full h-32 mb-4 outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
