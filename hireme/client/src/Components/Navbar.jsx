const Navbar = () => {
  return (
    <nav className="bg-black text-white flex items-center justify-between px-4 py-4 ">
      <div className="logo font-bold text-lg">Logo</div>
      <div className="links flex gap-4">
        <div className="btn">Login</div>
        <div className="btn">Register</div>
      </div>
    </nav>
  );
};

export default Navbar;
