import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={(isActive) => (isActive ? "link active" : "link")}
      >
        About
      </NavLink>
      <NavLink
        to="/product"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Product
      </NavLink>
    </nav>
  );
};
export default Navbar;
