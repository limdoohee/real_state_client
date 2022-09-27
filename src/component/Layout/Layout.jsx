import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
