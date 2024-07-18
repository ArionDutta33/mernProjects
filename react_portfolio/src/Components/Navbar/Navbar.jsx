import Button from "../Button/Button";
const Navbar = () => {
  return (
    <>
      <div>
        <nav className="flex px-4 py-6 justify-between">
          <div className="text-2xl">
            <span className="text-green-500">A</span>rion{" "}
            <span className="text-green-400">D</span>utta
          </div>
          <a href="https://x.com/Throwaw87381617">
            <Button text="Twitter" />
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
