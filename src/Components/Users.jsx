import { useSelector } from "react-redux";
import { SimpleGrid } from "@chakra-ui/react";
import User from "./User";

const Users = () => {
  const { users } = useSelector((state) => state.users);

  return (
    <SimpleGrid minChildWidth="250px" gap={4}>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </SimpleGrid>
  );
};
export default Users;
