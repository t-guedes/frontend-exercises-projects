import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Tamires", "Maitê", "Lorenah"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Tamires", age: 23 },
    { id: 2, name: "Maitê", age: 1 },
    { id: 3, name: "Lorenah", age: 9 },
  ]);

  const deleteRandom = () => {
    const radomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => radomNumber !== user.id);
    });
  };

  return (
    <div>
      {/* 4- render sem key */}
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {/* 5- render com key */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
      {/* 6- previus state */}
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
