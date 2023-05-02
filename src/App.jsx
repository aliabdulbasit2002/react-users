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
  }

  const handleDeleteUser = (id) => {
    setUser(user.filter((user) => user.id !== id))
  }

  const saveChanges = (id, update) => {
    setUser(user.map((item) => {
      if (item.id === id) {
        return update
      }
      return item
    }))

  }


  return (
    <div className="App">
      <UsersForm handleAddUser={handleAddUser} />
      <Users saveChanges={saveChanges} users={user} onDelete={handleDeleteUser} editUser={saveChanges} />
    </div>
  )
}

export default App
