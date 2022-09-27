import Layout from "./Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import LeaseList from "./LeaseList";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/LeaseList" element={<LeaseList />} />
      </Route>
    </Routes>
  );
};

export default Main;
