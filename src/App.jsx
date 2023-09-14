import "./App.css";
import Cart from "./Components/Cart";
import Home from "./Components/Home";

function App() {
  return (
    <div className="bg-[#F3F3F3]">
      <h1 className="text-center text-[#1C1B1B] text-xl md:text-xl lg:text-3xl font-bold pt-8 mb-6">
        Course Registration
      </h1>
      <div className="flex lg:gap-1 flex-col md:flex-col lg:flex-row">
        <Home></Home>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
