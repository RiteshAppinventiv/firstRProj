import React, { useState } from "react";
import AddUsers from "./components/Users/addUsers";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUserList] = useState([]);
  const addUserHandeler = (uname, uage) => {
    setUserList((prev) => {
      return [
        ...prev,
        { name: uname, age: uage, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUsers onAddUser={addUserHandeler} />
      {usersList.length > 0 && <UsersList users={usersList} />}
    </div>
  );
}

export default App;
