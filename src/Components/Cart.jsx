// import React from "react";
import PropTypes from "prop-types";

const Cart = ({ selectedCourse, totalCredit }) => {
  // console.log(selectedCourse);
  const totalPrice = selectedCourse.reduce(
    (acc, course) => acc + course.price,
    0
  );
  return (
    <div>
      <div className="bg-white rounded-lg pl-2 ">
        <h2 className="text-[#2F80ED] text-lg font-bold pb-4 pt-3 border-b-2">
          Credit Hour Remaining : 7 hr
        </h2>
        <h2 className="text-[#1C1B1B] pt-3 pb-4 text-xl font-bold">
          Course Name
        </h2>
        <p>
          {selectedCourse.map((course) => (
            <li
              className="list-decimal text-[#1C1B1B99] text-lg pb-2 "
              key={course.id}
            >
              {course.course_name}
            </li>
          ))}
        </p>
        <hr className="border-b-0" />
        <p className="text-[#1C1B1BCC] text-lg font-medium pt-2 pb-2">
          Total Credit Hour: {totalCredit} hr
        </p>
        <hr />
        <p className="text-[#1C1B1BCC] text-lg font-semibold pt-2 pb-2">
          Total Price: {totalPrice} USD
        </p>
      </div>
    </div>
  );
};
Cart.propTypes = {
  selectedCourse: PropTypes.array.isRequired,
  totalCredit: PropTypes.number.isRequired,
};
export default Cart;
