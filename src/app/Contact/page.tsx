// export default function Contact (){
//     return (
//          <div className="flex min-h-screen  flex-col p-10">
//         <h1 className="text-3xl font-bold mb-4 text-center">Contact Page</h1>
//         <div className="container flex flex-col gap-2 shadow-md p-6 mt-5">
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. </p>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. </p>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  nisi ut aliquip ex ea commodo consequat. </p>
           
//         </div>
//     </div>
//     )
// }
"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("Message sent successfully ✅");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Error sending message ❌");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center px-3 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-[500px] border-2 border-black bg-white p-6 rounded-md shadow-md flex flex-col gap-4"
      >
        <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>

        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="border border-black rounded px-3 py-2"
        />

        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="border border-black rounded px-3 py-2"
        />

        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          className="border border-black rounded px-3 py-2 h-32 resize-none"
        />

        <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Send
        </button>

        {status && <p className="text-center mt-2">{status}</p>}
      </form>
    </div>
  );
}
