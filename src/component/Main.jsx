import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import LeaseList from "./LeaseList";
import Contract from "./Contract";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/LeaseList" element={<LeaseList />} />
      </Route>
      <Route path="/Contract" element={<Contract />} />
    </Routes>
  );
};

export default Main;
