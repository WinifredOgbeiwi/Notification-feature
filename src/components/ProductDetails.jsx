import React, { useEffect } from "react";
import { PRODUCT, SOCIALS } from "../utils/assets";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { GiFallingLeaf } from "react-icons/gi";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = PRODUCT.find((p) => p.id === productId);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <section className="flex flex-col md:flex-row md:items-center gap-4 mt-8 mx-8 sm:mx-20 lg:mx-40">
      <img src={product.Image} alt="" className="w-full" />

      <div>
        <div className="w-fit flex gap-3">
          <h3 className="text-3xl lg:text-6xl font-semibold">
            {product.name}
          </h3>
          <p
            className={`${
              product.stock
                ? "bg-[#96ec9a] text-SecondaryColor"
                : "bg-red-500 text-black"
            } w-fit px-2 py-[2px] rounded-md m-auto text-nowrap`}
          >
            {product.stock ? "In Stock" : "Out of Stock"}
          </p>
        </div>

        <div className="flex  items-center my-2 text-lg gap-2">
          <div className="flex">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} className=" text-warning ">
                <FaStar />
              </span>
            ))}
          </div>
          <p>{product.rating} Review</p>
        </div>
        <p className="text-3xl text-SecondaryColor font-semibold">
          {product.price}
        </p>

        <div className="flex flex-col lg:flex-row gap-4 justify-between">
          <div className="flex items-center gap-3 mt-4">
            <h6 className="font-medium">Brand:</h6>
            <div className="border-[1px] border-gray-200 rounded-md py-1 px-3 flex items-center flex-col ">
              <GiFallingLeaf className="text-SecondaryColor text-xl " />
              <p className="text-sm font-homemade">Farmary</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <h6>Share item:</h6>
            {SOCIALS.map(({ id, icon: Icon, link }) => (
              <a key={id} href={link} className="socials ">
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <p className="my-3">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec,
          ultrices et ipsum. Nulla varius magna a consequat pulvinar.{" "}
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non corporis
          neque vel veniam debitis possimus consectetur accusamus? Velit
          blanditiis amet consequuntur facere nulla repudiandae. Pariatur
          tempora voluptatum repellendus minus at.
        </p>
      </div>
    </section>
  );
};

export default ProductDetails;
