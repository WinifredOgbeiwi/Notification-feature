import React from "react";
import { PRODUCT } from "../utils/assets";
import { SlHandbag } from "react-icons/sl";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const ProductList = () => {
  return (
    <section className=" md:mx-20 mx-4 my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {PRODUCT.map((item) => (
        <div
          key={item.id}
          className="border-[1px] hover:border-PrimaryColor border-gray-100 flex flex-col justify-between p-3 ">
          <Link to={`./product/${item.id}`}>
            <img src={item.Image} alt={item.name} />
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400 text-lg md:text-sm">{item.name}</p>
                <p className="font-semibold ">{item.price}</p>
                <div className="flex ">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span
                      key={index}
                      className={`${
                        index < item.rating ? "text-red-500" : "text-gray-300"
                      } `} >
                      <FaStar />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default ProductList;
