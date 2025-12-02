import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submissionData = {
        ...formData,
        time: new Date().toLocaleString(),
        title: "Portfolio Contact",
        year: new Date().getFullYear()
    };

    emailjs
      .send(
        "service_w1pwfbg",
        "template_udu6jlv",
        submissionData,
        "YGqQuukOtUmRH2rrU"
      )
      .then(
        () => {
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error(err);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-12">
      <h2 className="text-4xl font-semibold mb-8">Contact Me</h2>
      {submitted ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-xl text-green-500 animate-fadeIn">
            Thanks! Your message has been sent.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="p-3 rounded border border-gray-400 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="p-3 rounded border border-gray-400 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="p-3 rounded border border-gray-400 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" required />
          <button type="submit" className="px-6 py-3 bg-indigo-500 rounded-lg text-white hover:bg-indigo-600 transform hover:scale-105 transition-all duration-200">
            Send
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;
