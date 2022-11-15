import React, { useState, useEffect } from "react";
import Layout from "./Layout/Layout";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login/Login";
import LeaseList from "./LeaseList";
import MemberList from "./MemberList";
import Contract from "./Contract";
import ContractDetail from "./ContractDetail";
import axios from "axios";

const Main = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("token");

    if (storedUserLoggedInInformation) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    axios
      .post("/api/login", {
        id: email,
        pw: password,
      })
      // .then((res) => {
      //   if (res.data[0].ID === email && res.data[0].Password === password) {
      //     setIsLoggedIn(true);
      //     navigate("/");
      //   }
      // });
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Login onLogin={loginHandler} />}
        />
        <Route path="/Lease" element={<LeaseList />} />
        <Route path="/Member" element={<MemberList />} />
      </Route>

      <Route path="/Contract" element={<Contract />} />
      <Route path="/ContractDetail/:contractID" element={<ContractDetail />} />
    </Routes>
  );
};

export default Main;
