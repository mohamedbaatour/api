import axios from "axios";
import React, { useEffect, useState } from "react";

const UserList = () => {
  const [user, setUser] = useState([]);
  const [err, setErr] = useState("");
  useEffect(() => {
    const Mohamed = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUser(res.data))
        .catch((err) => setErr(err));
    };
    Mohamed();
  }, []);
  return (
    <div>
      {user.map((person) => {
        return <h1>{person.name}</h1>;
      })}
    </div>
  );
};

export default UserList;
