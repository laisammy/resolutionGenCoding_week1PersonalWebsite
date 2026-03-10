import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "e6d53a65-480b-477d-b265-46b7599ba790");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Network error. Try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-violet-400">
      <form
        className="max-w-lg w-full bg-violet-100 p-6 rounded-lg font-semibold text-zinc-900"
        onSubmit={onSubmit}
      >
        <h2 className="text-3xl text-center">Let's Talk!</h2>

        <div className="mt-5">
          <label>Name</label>
          <input
            type="text"
            className="w-full bg-transparent mt-2 border border-violet-300 p-2 rounded"
            placeholder="Enter your name"
            name="name"
            required
          />
        </div>

        <div className="mt-5">
          <label>Email Address</label>
          <input
            type="email"
            className="w-full bg-transparent mt-2 border border-violet-300 p-2 rounded"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>

        <div className="mt-5">
          <label>Your Message</label>
          <textarea
            name="message"
            className="w-full bg-transparent mt-2 border border-violet-300 p-2 rounded"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full h-14 bg-violet-400 hover:bg-violet-500 text-white mt-6 rounded"
        >
          Send Message
        </button>

        {result && (
          <p className="text-center mt-4 text-violet-700">{result}</p>
        )}
      </form>
    </div>
  );
}