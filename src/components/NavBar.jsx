import { Link } from "react-router-dom";
import { IMAGES } from "../utils/assets";
import { SlHandbag } from "react-icons/sl";

const NavBar = () => {
  return (
    <>
    <header className="flex justify-between pt-6 md:px-20 px-4">
      <Link to="/">
          <img src={IMAGES.Logo} alt="logo" className="w-32 md:w-fit" />
      </Link>

      <div className="flex gap-3 items-center ">
        <div className="relative">
          <SlHandbag className="text-lg md:text-2xl" />
          <div
            aria-label="cart"
            className=" absolute -top-2 md:-top-5 left-2 bg-SecondaryColor border-white border-2 rounded-full w-4 h-4 md:w-7 md:h-7 flex justify-center items-center"
          >
            <p className="text-white font-bold text-[8px] md:text-xs">0</p>
          </div>
        </div>
        <div>
          <p className="text-[8px] md:text-sm">Shopping Cart:</p>
          <p className=" text-xs md:text-base font-medium">$0.00</p>
        </div>
      </div>
    </header>
<nav className="bg-black w-full h-12"></nav>
      </>
  );
};

export default NavBar;
