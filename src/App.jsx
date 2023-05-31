import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import Users from "./Components/Users";
import UsersForm from "./Components/UsersForm";
import { useSelector } from "react-redux";

function App() {
  // const users = [
  //   {
  //     id: uuid(),
  //     name: "Ali",
  //     email: "Ali@email.com",
  //     gen: 24,
  //   },
  //   {
  //     id: uuid(),
  //     name: "Yusra",
  //     email: "Yusra@email.com",
  //     gen: 22,
  //   },
  //   {
  //     id: uuid(),
  //     name: "Lamin",
  //     email: "Lamin@email.com",
  //     gen: 19,
  //   },
  // ];

  // const [user, setUser] = useState(users);

  // const handleAddUser = (newUser) => {
  //   setUser(prevUsers => [...prevUsers, newUser]);
  // }

  // const handleDeleteUser = (id) => {
  //   setUser(user.filter((user) => user.id !== id));
  // };

  // const saveChanges = (id, update) => {
  //   setUser(
  //     user.map((item) => {
  //       if (item.id === id) {
  //         return update;
  //       }
  //       return item;
  //     })
  //   );
  // };

  return (
    <Grid templateColumns="repeat(12,1fr)">
      <GridItem colSpan={{ base: 12, md: 6 }}>
        <UsersForm />
      </GridItem>
      <GridItem colSpan={{ base: 12, md: 6 }} mt={{ base: 10, md: 0 }}>
        <Users
        // saveChanges={saveChanges}
        // users={user}
        // onDelete={handleDeleteUser}
        // editUser={saveChanges}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
