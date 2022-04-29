import { Headertab, Slidetab } from "./components/Headertab";
import Ordertab from "./components/Ordertab";
import { Category } from "./components/Category";

function App() {
  return (
    <div className="flex flex-row justify-center w-full">
      <div className="w-[70%] m-4">
        <Headertab />
        <Slidetab />
        <Category />
      </div>
      <div className=" w-[30%] bg-[#f6fafb] h-auto mt-4 rounded">
        <Ordertab />
      </div>
    </div>
  );
}

export default App;
