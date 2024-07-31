import Buttons from "./Buttons";
const Box = () => {
  const src =
    "https://images.pexels.com/photos/20367980/pexels-photo-20367980/free-photo-of-hungarian-parliament-in-budapest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
  return (
    <>
      <div className="outer    flex flex-col items-center my-8 mx-8">
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
            <div className=" mt-6 name text-sm text-gray-500">Thais Varela</div>
            <div className="address text-sm text-gray-500">Madrid, Spain</div>
            <Buttons name="Thais Varela" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Box;
