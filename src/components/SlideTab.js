
export const Slide = () => {
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