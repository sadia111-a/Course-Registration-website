import "./App.css";
import Cart from "./Components/Cart";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <h1 className="text-center text-[#1C1B1B] text-xl md:text-xl lg:text-3xl font-bold mt-8 mb-6">
        Course Registration
      </h1>
      <div className="flex flex-col md:flex-col lg:flex-row">
        <Home></Home>
        <Cart></Cart>
      </div>
    </>
  );
}

export default App;
