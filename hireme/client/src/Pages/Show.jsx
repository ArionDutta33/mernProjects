import { useState } from "react";
import Navbar from "../Components/Navbar";
import InfoPage from "../../Section/InfoPage";
// import Collections from "../../Section/Collections";
import Collections from "../../Section/Collections";
const Show = () => {
  const [isInfo, setisInfo] = useState(true);

  return (
    <div className="main">
      <div className="bg">
        <Navbar isTransparent={true} />
        <img
          className="relative w-full h-44 object-cover object-center -z-10"
          src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt=""
        />
        <img
          className="absolute rounded-full left-28 top-28 border-white  border-8 "
          src="https://randomuser.me/api/portraits/men/31.jpg"
          alt=""
        />
      </div>
      <div className="bio   flex-col mt-24 flex items-center justify-center">
        <span className="text-xl font-semibold">John Doe</span>
        <p className="text-sm text-gray-500 tracking-tight text-center   px-20 mt-2">
          Passionate photographer with a creative mind
        </p>
      </div>
      <div className="address text-sm justify-center flex gap-2 my-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        San francisco , USA
      </div>
      <div className="  my-4 mb-8 flex justify-center">
        {" "}
        <button className="bg-blue-400 text-white text-sm flex  px-4 py-2 gap-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          Message
        </button>
      </div>
      <div className="tags justify-around cursor-pointer flex my-4 ">
        <div
          onClick={() => setisInfo(true)}
          className="text-sm text-gray-400 cursor-pointer hover:text-black hover:border-b hover:border-b-red-600"
        >
          Info
        </div>
        <div
          onClick={() => setisInfo(false)}
          className="text-sm text-gray-400 cursor-pointer hover:text-black hover:border-b hover:border-b-red-600 outline-none"
        >
          Collection
        </div>
      </div>

      {isInfo ? <InfoPage /> : <Collections />}
    </div>
  );
};

export default Show;
