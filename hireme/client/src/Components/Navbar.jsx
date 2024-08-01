const Navbar = (props) => {
  return (
    <nav
      className={` ${
        props.isTransparent
          ? "bg-transparent  text-black  flex items-center justify-between px-4 py-4 fixed top-0 right-0 left-0"
          : "`bg-black text-white flex items-center justify-between px-4 py-4 fixed top-0 right-0 left-0"
      } `}
    >
      <div className="logo font-bold text-lg">Logo</div>
      <div className="links flex gap-4">
        <div className="btn">Login</div>
        <div className="btn">Register</div>
      </div>
    </nav>
  );
};

export default Navbar;
