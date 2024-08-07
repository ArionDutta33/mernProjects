import Buttons from "./Buttons";
import axios from "axios";
import { useState, useEffect } from "react";
const Box = () => {
  const [photographers, setPhotographers] = useState([]);
  useEffect(() => {
    async function call() {
      try {
        const response = await axios.get("/test");
        setPhotographers(response.data.data);

        console.log(response);
      } catch (error) {
        console.log("error");
      }
    }
    call();
  }, []);
  const src =
    "https://images.pexels.com/photos/20367980/pexels-photo-20367980/free-photo-of-hungarian-parliament-in-budapest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
  return (
    <>
      {photographers.map((elem, idx) => {
        return (
          <div
            key={idx}
            className="outer    flex flex-col items-center my-8 mx-8"
          >
            <div className="box   min-h-56 w-full">
              <img
                src={src}
                className="h-24 w-full object-cover object-center"
                alt=""
              />
              <div className="info relative flex  flex-col py-4  items-center justify-center border  ">
                <img
                  className="absolute h-[80px] rounded-full top-[-50px]    outline-none"
                  src="https://randomuser.me/api/portraits/men/73.jpg"
                  alt=""
                />
                <div className=" mt-6 name text-sm text-gray-500">
                  {elem.firstname} {elem.lastname}
                </div>
                <div className="address text-sm text-gray-500">
                  {elem.address}
                </div>
                <Buttons name="Thais Varela" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Box;
