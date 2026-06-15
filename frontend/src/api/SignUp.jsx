import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const backendurl = import.meta.env.VITE_BACKEND_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword:"",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${backendurl}/user/api/signup`,
        formData
      );

      console.log(response.data);
      alert("Signup Successful");

      setFormData({
        name: "",
        email: "",
        password: "",
        number: "",
      });
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-4 w-96 p-6 border rounded-lg shadow"
      >
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Enter Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="contact"
          placeholder="Enter Number"
          value={formData.number}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-black text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;