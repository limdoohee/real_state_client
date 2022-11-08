import { useEffect, useState } from "react";
import axios from "axios";

const MemberList = () => {
  const [users, setUsers] = useState([""]);

  useEffect(() => {
    axios
      .get("/api/userList", {
        params: {
          id: "sys",
        },
      })
      .then((res) => {
        setUsers(res.data);
      });
  }, []);

  return (
    <>
      <h1>member List page</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.Name}</li>
        ))}
      </ul>
    </>
  );
};

export default MemberList;
