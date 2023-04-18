import { useState } from 'react';
import './App.css'
import Users from './Components/Users';
import UsersForm from './Components/UsersForm';

function App() {

  const users = [
    {
      name: "Ali",
      email: "Ali@email.com",
      gen: 24
    },
    {
      name: "Yusra",
      email: "Yusra@email.com",
      gen: 22
    },
    {
      name: "Lamin",
      email: "Lamin@email.com",
      gen: 19
    },
  ];

  const [user, setUser] = useState(users);

  const handleAddUser = (newUser) => {
    setUser(prevUsers => [...prevUsers, newUser]);
  }


  return (
    <div className="App">
      <UsersForm handleAddUser={handleAddUser} />
      <Users users={user} />
    </div>
  )
}

export default App
