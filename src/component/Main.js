import React, { useState, useEffect } from "react";
import Layout from "./Layout/Layout";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login/Login";
import LeaseList from "./LeaseList";
import Contract from "./Contract";
import ContractDetail from "./ContractDetail";

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
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="/" element={<Home />} /> */}
        <Route
          path="/"
          element={isLoggedIn ? <Contract /> : <Login onLogin={loginHandler} />}
        />
        <Route path="/LeaseList" element={<LeaseList />} />
      </Route>

      <Route path="/Contract" element={<Contract />} />
      <Route path="/ContractDetail/:contractID" element={<ContractDetail />} />
    </Routes>
  );
};

export default Main;
