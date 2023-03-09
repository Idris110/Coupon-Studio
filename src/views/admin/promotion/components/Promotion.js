import React from "react";
import { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const Promotion = () => {

  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className="flex w-full flex-col gap-5">
      <label
        htmlFor="id1"
        className={`text-xl mt-5 text-navy-700 dark:text-white ml-3 font-bold`}
      >
        Program Name
      </label>
      <input
        type="text"
        id="id1"
        placeholder="Enter the program name"
        className={`flex h-20 w-full items-center justify-center rounded-xl border p-2 text-3xl outline-none pl-5 bg-formBg`}
      />

      <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 md:gap-8 mb-8">
        <div className="">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              htmlFor="id1"
              className={`text-xl mt-5 text-navy-700 dark:text-white ml-3 font-bold`}
            >
              Program Type
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-formBg border border-gray-200 text-gray-700 mt-3 mr-3 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option >Coupons</option>
                <option>Loyalty Cards</option>
                <option>Promotions</option>
                <option>Discount Code</option>
                <option>Buy X get Y</option>
                <option>Next Order Coupons</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>        
        <div className="">
          <label
              htmlFor=""
              className={`text-xl mt-5 text-navy-700 dark:text-white ml-3 font-bold`}
            >
              Program Type
            </label>
        <Calendar
          value={selectedDay}
          onChange={setSelectedDay}
          shouldHighlightWeekends
        />
        </div>        
      </div>
    </div>
  );
};

export default Promotion;
