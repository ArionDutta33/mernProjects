import React from "react";

const Cards = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-92 shadow-xl">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer border  p-3 rounded-md hover:bg-pink-500 duration-200 hover:text-white ">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
