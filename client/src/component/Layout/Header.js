import { NavLink } from "react-router-dom";
import headerClass from "./Header.module.css";

const Header = () => {
  return (
    <header className={headerClass.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/LeaseList">계약</NavLink>
          </li>
          <li>
            <NavLink to="/Member">회원</NavLink>
          </li>
          {/* <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
