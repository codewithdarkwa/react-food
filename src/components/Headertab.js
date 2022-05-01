import React from "react";

export const Headertab = () => {
  return (
    <>
      <div className="flex flex-row justify-between  items-center ">
        <div className="flex flex-row">
          <div>
            <span className="block w-[1.5rem] h-[0.2rem] m-[0.3rem] auto bg-black"></span>
            <span className="block w-[1.5rem] h-[0.2rem] m-[0.3rem] auto bg-black"></span>
            <span className="block w-[1.5rem] h-[0.2rem] m-[0.3rem] auto bg-black"></span>
          </div>
          <h3 className="font-normal text-lg ml-4">125 Eastern Cosmo St.</h3>
          <input
            className="outline-none border-none p-1.5 bg-gray-50 rounded-xl w-[35rem] ml-16 "
            type="search"
            placeholder="What would you like to eat today?"
          />
        </div>
      </div>
    </>
  );
};

export const Slidetab = () => {
  return (
    <>
      <Slide />
    </>
  );
};

const Slide = () => {
  return (
    <div className="flex mt-7 flex-row w-[100%] justify-around items-center bg-[#daf4d1] rounded-2xl">
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
