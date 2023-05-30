import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addUser } from "../features/usersSlice";

const UsersForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gen: "",
  });
  const dispatch = useDispatch();

  const { name, email, gen } = formData; // Destructure values from formData

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      email: email,
      gen: gen,
      id: uuid(),
    };
    dispatch(addUser(newUser));
    setFormData({ name: "", email: "", gen: "" });
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <h1>Class Form</h1>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Gen:
          <input type="text" name="gen" value={gen} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UsersForm;
