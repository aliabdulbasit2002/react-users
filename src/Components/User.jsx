import { Box, Button, Flex, Text } from "@chakra-ui/react";
import EditUsersForm from "./EditUsersForm";
import { useDispatch } from "react-redux";
import { deleteUser } from "../features/usersSlice";

const User = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <Box bg="teal" p={3} color="gray.100">
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Gen: {user.gen}</Text>
      <Flex mt={3} gap={3}>
        <EditUsersForm user={user} />
        <Button onClick={() => dispatch(deleteUser(user.id))}>Delete</Button>
      </Flex>
    </Box>
  );
};

export default User;
