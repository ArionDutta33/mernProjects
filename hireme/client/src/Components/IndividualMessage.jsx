// import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import FormMessage from "./FormMessage";
import PricingComponent from "./PricingComponent";

import Navbar from "./Navbar";
const IndividualMessage = () => {
  const [showMessage, setShowMessage] = useState(true);
  //   const [showModal, setshowModal] = useState(false);

  return (
    <div className="mb-20">
      <Navbar />
      <div>
        <div className=" flex flex-col items-center py-4 ">
          <img
            className="rounded-full h-24 w-24"
            src="https://randomuser.me/api/portraits/men/47.jpg"
            alt=""
          />
          <span className="mt-1">Jack Sparrow</span>
        </div>
        <div className="px-8 py-6 flex justify-between">
          <span
            onClick={() => setShowMessage(true)}
            className="hover:border-b-2 hover:border-blue-500 text-gray-400"
          >
            Message
          </span>
          <span
            onClick={() => setShowMessage(false)}
            className="hover:border-b-2 hover:border-blue-500 text-gray-400"
          >
            Pricing
          </span>
        </div>

        {showMessage ? <FormMessage /> : <PricingComponent />}
      </div>
    </div>
  );
};

export default IndividualMessage;
