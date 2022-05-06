import { HiOutlineMenuAlt2 } from "react-icons/hi";
export const Headertab = () => {
  return (
    <>
      <Header />
      <Slide />
    </>
  );
};

const Slide = () => {
  return (
    <div className="flex mt-7 flex-row w-[100%] md:flex-wrap justify-around items-center bg-[#daf4d1] rounded-2xl">
      <div className="m-2 flex flex-col">
        <h1 className="text-4xl text-[#55af33] text-bold m-2 ">
          You don't need a silver <br />
          Folk to eat good food
        </h1>
        <button className="text-green-600 bg-transparent hover:bg-green-100 p-1 m-2 w-[7.5rem] rounded-full border border-green-400">
          Learn more
        </button>
      </div>
      <img
        className="mb-2 w-[20rem] "
        src={require("../images/sandwich.png")}
        alt="foodImage"
      />
    </div>
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
        className="outline-none border-none  px-2 py-[0.5rem] bg-gray-100 rounded-xl w-[60%] "
        type="search"
        placeholder="What would you like to eat today?"
      />
    </div>
  );
};
