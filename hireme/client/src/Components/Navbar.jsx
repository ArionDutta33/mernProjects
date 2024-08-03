import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav
      className={` ${
        props.isTransparent
          ? "bg-transparent  text-black   flex items-center justify-between px-4 py-4 "
          : "bg-black text-white flex items-center justify-between px-4 py-4   "
      } `}
    >
      <div className="logo font-bold text-lg">Logo</div>
      <div className="links flex gap-4">
        <Link to={"/register"} className="btn">
          Register
        </Link>
        <div className="btn">Login</div>
      </div>
    </nav>
  );
};

export default Navbar;
