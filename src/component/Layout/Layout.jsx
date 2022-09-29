import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
      <Outlet />
    </div>
  );
};

export default Layout;
