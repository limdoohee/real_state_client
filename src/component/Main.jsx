import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import LeaseList from "./LeaseList";
import Contract from "./Contract";
import ContractDetail from "./ContractDetail";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/LeaseList" element={<LeaseList />} />
      </Route>
      <Route path="/Contract" element={<Contract />} />
      <Route path="/ContractDetail/:contractID" element={<ContractDetail />} />
    </Routes>
  );
};

export default Main;
