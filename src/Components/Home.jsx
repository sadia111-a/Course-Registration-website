import { useEffect } from "react";
import { useState } from "react";
import Cart from "./Cart";
import { FiDollarSign } from "react-icons/fi";
import { BsBook } from "react-icons/bs";

const Home = () => {
  const [allCourse, setAllCourse] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);

  useEffect(() => {
    fetch("./course.json")
      .then((res) => res.json())
      .then((data) => setAllCourse(data));
  }, []);

  const handleSelectCourse = (course) => {
    const isExist = selectedCourse.find((item) => item.id == course.id);
    if (isExist) {
      return alert("already booked");
    } else {
      setSelectedCourse([...selectedCourse, course]);
    }
  };

  const handleTotalCredit = (courseCreditTime) => {
    const newTotalCredit = totalCredit + courseCreditTime;
    if (newTotalCredit > 20) {
      return alert("you can not add more than 20credit");
    } else {
      setTotalCredit(newTotalCredit);
      updateCreditHour(newTotalCredit);
    }
  };

  const updateCreditHour = (newCredit) => {
    setTotalCredit(newCredit);
  };

  return (
    <div className="flex lg:gap-1 flex-col md:flex-col lg:flex-row">
      <div className="w-full lg:w-3/4 bg-base-200 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {allCourse.map((course) => (
            <div key={course.id} className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4 ">
                <img src={course.image} alt="Course" className="rounded-xl" />
              </figure>
              <div className="card-body text-left">
                <h2 className="card-title text-[#1C1B1B] text-lg">
                  {course.course_name}
                </h2>
                <p className="text-sm text-[#1C1B1B99] font-normal">
                  {course.details}
                </p>
                <div className="flex gap-2">
                  <p className="flex items-center">
                    <FiDollarSign></FiDollarSign>
                    <span className="text-[#1C1B1B99] text-base font-medium">
                      Price :{course.price}
                    </span>
                  </p>
                  <p className="flex items-center">
                    <BsBook></BsBook>
                    <span className="text-[#1C1B1B99] text-base font-medium">
                      <button
                        onClick={() => handleTotalCredit(course.credit_time)}
                      >
                        Credit :{course.credit_time}hr
                      </button>
                    </span>
                  </p>
                </div>

                <div className="w-full">
                  <button
                    onClick={() => handleSelectCourse(course)}
                    className="btn w-full bg-[#2F80ED] text-white"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/4 ">
        <Cart
          selectedCourse={selectedCourse}
          totalCredit={totalCredit}
          updateCreditHour={updateCreditHour}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
