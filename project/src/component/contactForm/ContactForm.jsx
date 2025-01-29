import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
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

    if (name === 'name' && !patterns.name.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: 'Name must be between 1 and 12 characters and alphanumeric.',
      }));
    } else if (name === 'email' && !patterns.email.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Please enter a valid email.',
      }));
    } else if (name === 'message' && !patterns.message.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: 'Message must be between 1 and 150 characters.',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid =
      !errors.name && !errors.email && !errors.message && formData.name && formData.email && formData.message;

    if (!isValid) {
      alert('Please fill out all fields correctly.');
    } else {
      alert('Form submitted successfully!');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[400px] flex flex-col gap-y-[20px] border border-solid border-black p-[40px] rounded-[15px] bg-slate-600"
    >
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className={`w-full h-[30px] border rounded-[10px] bg-slate-200 p-2 ${
          errors.name ? 'border-red-500' : formData.name ? 'border-green-500' : 'border-black'
        }`}
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className={`w-full h-[30px] border rounded-[10px] bg-slate-200 p-2 ${
          errors.email ? 'border-red-500' : formData.email ? 'border-green-500' : 'border-black'
        }`}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        className={`w-full h-[80px] border resize-none rounded-[10px] bg-slate-200 p-2 ${
          errors.message ? 'border-red-500' : formData.message ? 'border-green-500' : 'border-black'
        }`}
      />
      {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

      <button
        type="submit"
        className="hover:bg-red-500 px-[10px] py-[10px] rounded-2xl"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default ContactForm;
