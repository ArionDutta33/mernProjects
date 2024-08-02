import { useState } from "react";
import Navbar from "../Components/Navbar";
import InfoPage from "../Section/InfoPage";
//importing form modal
import { useNavigate, useParams } from "react-router-dom";
import Collections from "../Section/Collections";
const Show = () => {
  const [isInfo, setisInfo] = useState(true);

  const path = useParams();
  const navigate = useNavigate();
  //send ing email
  //removed the handler fn
  return (
    <div className="main">
      {console.log(path.id)}
      <div className="bg ">
        <Navbar isTransparent={true} />
        <img
          //!removed relative
          className="  w-full h-44 object-cover object-center -z-10"
          src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt=""
        />
        <img
          className="absolute rounded-full left-28 top-28 border-white  border-8 "
          src="https://randomuser.me/api/portraits/men/31.jpg"
          alt=""
        />
      </div>
      <div className="bio  relative  flex-col mt-24 flex items-center justify-center">
        {/* removed the modal from */}
        {/* <ModalForm id={path.id} /> */}
        <span className="text-xl font-semibold relative">John Doe</span>
        {/*<div className="bg-blue-400 text-white rounded-full flex flex-col sitems-center left-64 top-16 items-center justify-center  absolute h-20 w-20">
          Hire me
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
            />
          </svg>
        </div> */}
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
        <button
          onClick={() => {
            navigate(`/${path.id}/email-send`);
          }}
          className="bg-blue-400 text-white text-sm flex  px-4 py-2 gap-2 rounded-md"
        >
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
