import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const patterns = {
    name: /^[a-z\d]{1,12}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    message: /^[\d\w@-]{1,150}$/i,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "name" && !patterns.name.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name must be between 1 and 12 characters and alphanumeric.",
      }));
    } else if (name === "email" && !patterns.email.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email.",
      }));
    } else if (name === "message" && !patterns.message.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message must be between 1 and 150 characters.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid =
      !errors.name &&
      !errors.email &&
      !errors.message &&
      formData.name &&
      formData.email &&
      formData.message;

    if (!isValid) {
      alert("Please fill out all fields correctly.");
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[400px] flex flex-col gap-y-[15px] border border-solid border-slate-700 p-[30px] rounded-[15px] bg-slate-500 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 "
    >
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className={`h-[40px] rounded-[8px] border border-solid  px-3 focus:outline-none bg-slate-200 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300 ease-in-out ${
          errors.name
            ? "border-red-500"
            : formData.name
            ? "border-green-500"
            : "border-black"
        }`}
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className={`h-[40px] rounded-[8px] border border-solid px-3 focus:outline-none bg-slate-200 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300 ease-in-out ${
          errors.email
            ? "border-red-500"
            : formData.email
            ? "border-green-500"
            : "border-black"
        }`}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        className={`w-full h-[80px]  rounded-[8px] border border-solid px-3 focus:outline-none bg-slate-200 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300 ease-in-out resize-none ${
          errors.message
            ? "border-red-500"
            : formData.message
            ? "border-green-500"
            : "border-black"
        }`}
      />
      {errors.message && (
        <p className="text-red-500 text-sm">{errors.message}</p>
      )}

<button
  type="submit"
  className="px-[20px] py-[10px] bg-slate-700 text-white font-semibold rounded-2xl transform transition duration-300 ease-in-out hover:bg-red-500 hover:scale-105 hover:shadow-xl hover:rotate-2 active:scale-95"
>
  SUBMIT
</button>

    </form>
  );
};

export default ContactForm;
