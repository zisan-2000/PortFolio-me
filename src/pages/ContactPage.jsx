import React from "react";
import { contactData } from "../components/DummyData/DummyData"; // Adjust the path accordingly

const ContactPage = () => {
  return (
    <div className="themeChange contactPage font flex min-h-screen items-center justify-center ">
      <div className="card w-full max-w-lg p-8 md:p-16">
        <h1 className="mb-8 text-center text-4xl font-bold text-teal-300 md:text-5xl">
          Contact Us
        </h1>
        <div className="space-y-4 text-center">
          <div>
            <h2 className="textColor text-2xl font-semibold md:text-3xl">
              Email
            </h2>
            <p className="textColor text-lg md:text-xl">{contactData.email}</p>
          </div>
          <div>
            <h2 className="textColor text-2xl font-semibold md:text-3xl">
              Phone
            </h2>
            <p className="textColor text-lg md:text-xl">{contactData.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
