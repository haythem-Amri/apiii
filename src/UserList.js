import React, { useState, useEffect } from "react";
import axios from "axios";

function UserLists() {
  const [users, setUsers] = useState({ listOfUSer: [] });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers({ listOfUSer: data });
    };
    fetchData();
  }, [setUsers]);

  return (
    <div>
      <ul>
        {users.listOfUSer &&
          users.listOfUSer.map(item => (
            <li key={item.id}>
              <span>{item.name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}


export default UserLists;