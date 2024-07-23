import data from "../../public/data.json";
const Freebook = () => {
  const freeBooks = data.filter((elem) => elem.category === "Free");
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 w">
        <h1 className="font-bold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, sunt!
        </p>
      </div>
    </>
  );
};

export default Freebook;
