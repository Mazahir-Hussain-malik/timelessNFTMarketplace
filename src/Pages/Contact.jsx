import React from "react";
import Header from "../components/Header";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className=" fixed top-0 w-full ">
        <Header />
      </div>
      <div className="min-h-screen gradient-bg-hero   text-white py-[3rem]">
        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-gray-400 mb-8">
            Get in touch with the TIMELESS team
          </p>
        </section>

        {/* Contact Info Section */}
        <section className="px-4 py-16 md:w-4/5  mx-auto   ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: FaPhone,
                title: "Phone",
                description: "Reach out to our support team",
                info: "+1 (555) 123-4567",
              },
              {
                icon: MdEmail,
                title: "Email",
                description: "Send us an email anytime",
                info: "contact@timelessnft.com",
              },
              {
                icon: "FaLocationDot",
                title: "Location",
                description: "123 Crypto Street, NFT City, 12345",
                info: "View on map",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-gray-800 bg-opacity-50 rounded-lg p-6"
              >
                <div className="bg-pink-600 p-4 rounded-full mb-4">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-2">{item.description}</p>
                <a href="#" className="text-pink-500 hover:text-pink-400">
                  {item.info}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Drop a Message
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
            Have a question or want to collaborate? Send us a message and we'll
            get back to you as soon as possible.
          </p>
          <form className="max-w-2xl mx-auto space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-gray-800 bg-opacity-50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-800 bg-opacity-50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Enter your subject"
              className="w-full bg-gray-800 bg-opacity-50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              placeholder="Write Message"
              rows={6}
              className="w-full bg-gray-800 bg-opacity-50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Contact;
