import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addUser } from "../features/usersSlice";
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

const UsersForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gen: "",
  });
  const dispatch = useDispatch();

  // Destructure values from formData
  const { name, email, gen } = formData;

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
    <form onSubmit={handleSubmit}>
      <Heading>User Form</Heading>
      <FormControl>
        <FormLabel>Name </FormLabel>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          borderColor="teal"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email :</FormLabel>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          borderColor="teal"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Gen :</FormLabel>
        <Input
          type="text"
          name="gen"
          value={gen}
          onChange={handleChange}
          borderColor="teal"
        />
      </FormControl>
      <Button type="submit" me="auto" mt={4} colorScheme="teal">
        Submit
      </Button>
    </form>
  );
};

export default UsersForm;
