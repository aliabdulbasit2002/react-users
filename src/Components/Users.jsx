import { useSelector } from "react-redux";
import EditUsersForm from "./EditUsersForm";
import { useState } from "react";
import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";

const Users = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(!showModal);
  };

  const handleModalClose = () => {
    setShowModal(!showModal);
  };

  const { users } = useSelector((state) => state.users);

  return (
    <SimpleGrid minChildWidth="250px" gap={4}>
      {users.map((user) => {
        return (
          <Box key={user.id} bg="teal.400" p={3} color="gray.100">
            <Text>
              <Text as="span" fontWeight="bold">
                Name:
              </Text>
              {user.name}
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                Email:
              </Text>
              {user.email}
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                Gen:
              </Text>
              {user.gen}
            </Text>
            <Flex gap={3}>
              <Button onClick={handleButtonClick}>Edit</Button>
              {/* {showModal && (
                <EditUsersForm
                  modalClose={handleModalClose}
                  editUser={editUser}
                  user={user}
                  saveChanges={saveChanges}
                />
              )} */}
              <Button onClick={() => onDelete(user.id)}>Delete</Button>
            </Flex>
          </Box>
        );
      })}
    </SimpleGrid>
  );
};
export default Users;
