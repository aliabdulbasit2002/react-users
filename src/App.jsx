import { useState } from 'react';
import './App.css'
import Users from './Components/Users';
import UsersForm from './Components/UsersForm';
import { v4 as uuid } from "uuid";

function App() {

  const users = [
    {
      id: uuid(),
      name: "Ali",
      email: "Ali@email.com",
      gen: 24
    },
    {
      id: uuid(),
      name: "Yusra",
      email: "Yusra@email.com",
      gen: 22
    },
    {
      id: uuid(),
      name: "Lamin",
      email: "Lamin@email.com",
      gen: 19
    },
  ];

  const [user, setUser] = useState(users);

  const handleAddUser = (newUser) => {
    setUser(prevUsers => [...prevUsers, newUser]);
    console.log(newUser);
  }

  const handleDeleteUser = (id) => {
    setUser(user.filter((user) => user.id !== id))
  }


  return (
    <div className="App">
      <UsersForm handleAddUser={handleAddUser} />
      <Users users={user} onDelete={handleDeleteUser} />
    </div>
  )
}

export default App
