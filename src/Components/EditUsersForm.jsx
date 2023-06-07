import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveChanges } from "../features/usersSlice";

const EditUsersForm = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    gen: user.gen,
  });
  const { name, email, gen } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedUser = { id: user.id, name, email, gen };
    dispatch(saveChanges({ id: user.id, updatedUser }));
    onClose();
  };
  return (
    <>
      <Button onClick={onOpen}>Edit</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
                Save
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditUsersForm;
