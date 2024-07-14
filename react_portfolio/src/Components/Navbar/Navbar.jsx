import { useState } from "react";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(true);

  const handleMenuClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      {isClicked && (
        <div className="menu-dropdown bg-blue-9500000 px-4 py-10  h-screen">
          <div className="menu" onClick={handleMenuClick}>
            <IoIosMenu fontSize={26} />
          </div>
          <ul className="mt-8 h-full flex flex-col gap-10">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
      <div>
        <nav className="flex px-4 py-6 justify-between">
          <div className="text-2xl">
            <span className="text-green-500">A</span>rion{" "}
            <span className="text-green-400">D</span>utta
          </div>
          <div className="menu" onClick={handleMenuClick}>
            <IoIosMenu fontSize={26} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
