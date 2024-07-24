import data from "../../public/data.json";
import Home from "../Home/Home";
import Cards from "./Cards";
import { Link } from "react-router-dom";
const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum vero
            ut eum alias. Modi eveniet suscipit unde. Fugit et perspiciatis
            vitae alias fuga cum ut tempore minima eos eius! Dolorum voluptatem
            quisquam qui voluptates esse eveniet ratione nobis, enim
            perspiciatis alias? Minus iure, fugit atque pariatur voluptatem
            praesentium tempora eius repellendus incidunt rem? Qui maiores nobis
            animi! Omnis, temporibus esse.
          </p>
          <Link to={"/"}>
            <button className="bg-pink-500 px-4 py-2 text-white mt-6 rounded-md hover:bg-pink-700 duration-200">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {data.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
