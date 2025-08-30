import React, { useState } from "react";
import emailjs from "emailjs-com";
import { assets } from "../assets/assets";
import Title from "./Title";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // Make sure the key matches your EmailJS template variables (like "user_email")
    emailjs
      .send(
        "service_x6wiz8r", // Your Service ID
        "template_pck2lkf", // Your Template ID
        { user_email: email }, // This must match the variable name in EmailJS template
        "_5ZNz78sQF-bv_uJQ" // Your Public Key
      )
      .then(
        (result) => {
          alert("✅ Thank you for subscribing! Check your inbox.");
          setEmail("");
        },
        (error) => {
          alert("❌ Failed to send email. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="flex flex-col items-center max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30 bg-gray-900 text-white">
      <Title
        title="Stay Inspired to TRAVEL"
        subTitle="Unwind in thoughtfully designed rooms, craveable dining, and warm service—steps from home."
      />

      <form
        onSubmit={sendEmail}
        className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none max-w-66 w-full"
          placeholder="Enter your email"
          name="user_email" // 👉 Must match the EmailJS template variable
          required
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all"
        >
          Subscribe
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="w-3.5 invert group-hover:translate-x-1 transition-all"
          />
        </button>
      </form>

      <p className="text-gray-500 mt-6 text-xs text-center">
        By subscribing, you agree to our Privacy Policy and consent to receive
        updates.
      </p>
    </div>
  );
};

export default NewsLetter;
