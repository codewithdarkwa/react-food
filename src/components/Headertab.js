import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Slide } from "./SlideTab";
export const Headertab = () => {
  return (
    <>
      <Header />
      <Slide />
    </>
  );
};


const Header = () => {
  return (
    <div className=" flex flex-row items-center justify-between ">
      <div className="flex">
        <HiOutlineMenuAlt2 size={30} className="cursor-pointer" />
        <h3 className="font-normal text-lg ml-4 ">125 Eastern Cosmo St.</h3>
      </div>
      <input
        className="outline-none border-none  px-2 py-[0.5rem] bg-gray-100 rounded-xl w-[50%] "
        type="search"
        placeholder="What would you like to eat today?"
      />
    </div>
  );
};
