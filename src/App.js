import { Headertab } from "./components/Headertab";
import Ordertab from "./components/Ordertab";
import { Category } from "./components/Category";
import { FoodProvider } from "./context/Foodcontext";

function App() {
  return (
    <FoodProvider>
      <main className="flex flex-row justify-center w-full ">
        <section className="w-[70%] m-4">
          <Headertab />
          <Category />
        </section>
        <section className=" w-[30%] bg-[#f6fafb] mt-4 rounded">
          <Ordertab />
        </section>
      </main>
    </FoodProvider>
  );
}

export default App;
