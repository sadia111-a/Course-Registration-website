import "./App.css";

import Home from "./Components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="bg-[#F3F3F3]">
      <h1 className="text-center text-[#1C1B1B] text-xl md:text-xl lg:text-3xl font-bold pt-8 mb-6">
        Course Registration
      </h1>

      <Home></Home>
      <ToastContainer />
    </div>
  );
}

export default App;
