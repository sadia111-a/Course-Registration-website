import "./App.css";
// import Cart from "./Components/Cart";
import Home from "./Components/Home";

function App() {
  return (
    <div className="bg-[#F3F3F3]">
      <h1 className="text-center text-[#1C1B1B] text-xl md:text-xl lg:text-3xl font-bold pt-8 mb-6">
        Course Registration
      </h1>

      <Home></Home>
      {/* <Cart selectedCourse={selectedCourse}></Cart> */}
    </div>
  );
}

export default App;
