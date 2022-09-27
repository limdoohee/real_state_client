import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/LeaseList">LeaseList</Link>
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
