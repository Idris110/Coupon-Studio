import React from "react";
import { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const Promotion = () => {
  const defaultValue = {
    year: 2023,
    month: 3,
    day: 11
  }
  const [selectedDay, setSelectedDay] = useState(defaultValue);
  const [details, setDetails] = useState({
    programName: "",
    couponType: "",
    usage: {
      type: "",
      limit: 1
    },
    minPurchase: 0,
    maxDiscount: 0,
    porductType: "",
    reward: {
      type: "",
      amount: 0
    },
    expiryDate: {
      year: 2023,
      month: 3,
      day: 11
    }
  });
  // const Change = (e) => {
  //   console.log(e);
  //   console.log(details);
  //   setDetails(...details, e.target.name: e.target.value);

  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e);
    console.log(details);
    let result = await fetch("http://localhost:3000/productType", {
      method: "post",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    //   console.log(result, "result");
    localStorage.setItem("admin", JSON.stringify(result));
    // navigate("/");
  }
  return (
    <div className="flex w-full flex-col gap-5">
      <form onSubmit={handleSubmit} action="" className="mt-5">

        <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 md:gap-12 mb-8">
          <div className="">
            <label
              htmlFor="id1"
              className={`text-xl mt-5 mb-5 text-navy-700 dark:text-white ml-6 font-bold`}
            >
              Program Name
            </label>
            <input
              value={details.programName}
              type="text"
              id="id1"
              onChange={(e) => { setDetails({ ...details, programName: e.target.value }) }}
              placeholder="Enter the program name"
              className={`flex h-15 mb-5 mt-3 ml-3 pl-4 w-full items-center justify-center rounded-xl border p-2 text-lg outline-none bg-formBg`}
            />

            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                htmlFor="progType"
                className={`text-xl mt-5 text-navy-700 dark:text-white ml-3 font-bold`}
              >
                Program Type
              </label>
              <div className="relative">
                <select name="couponType"
                  value={details.couponType}
                  onChange={(e) => {
                    let x = e.target.value
                    setDetails({ ...details, couponType: x })
                  }}
                  className="block appearance-none w-full bg-formBg border border-gray-200 text-gray-700 mt-3 mr-3 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option value="Coupons">Coupons</option>
                  <option value="LoyaltyCards">Loyalty Cards</option>
                  <option value="Promotions">Promotions</option>
                  <option value="DiscoutCode">Discount Code</option>
                  <option value="BuyXgetY">Buy X get Y</option>
                  <option value="NextOrder">Next Order Coupons</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>


            <div className="w-full mt-7 px-3 mb-6 md:mb-0">
              <label
                htmlFor="condRules"
                className={`text-xl mt-9 text-navy-700 dark:text-white ml-3 font-bold`}
              >
                Conditions Rules :
              </label>
              <br />
              <div className="mt-4">
                <label
                  htmlFor="minSpent"
                  className={`text-lg text-navy-700 dark:text-white ml-3 font-bold`}
                >
                  Minimum purchase &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </label>

                <input
                  type="text"
                  id="id1"
                  onChange={(e) => { setDetails({ ...details, minPurchase: e.target.value }) }}
                  placeholder="Min purchase amount"
                  disabled={false}
                  className={`mt-3 h-15 rounded-xl border p-2 text-lg outline-none pl-5 bg-formBg`}
                />
              </div>
              <div className="mt-2">
                <label
                  htmlFor="maxDis"
                  className={`text-lg mt-2 text-navy-700 dark:text-white ml-3 font-bold`}
                >
                  Maximum discount &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </label>

                <input
                  value={details.maxDiscount}
                  type="text"
                  id="id1"
                  onChange={(e) => { setDetails({ ...details, maxDiscount: e.target.value }) }}
                  placeholder="Max applicable discount"
                  disabled={false}
                  className={`mt-3 h-15 rounded-xl border p-2 text-lg outline-none pl-5 bg-formBg`}
                />
              </div>
              <div className="mt-2">
                <label
                  htmlFor="prodType"
                  className={`text-lg mt-2 text-navy-700 dark:text-white ml-3 font-bold`}
                >
                  On product &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </label>

                <input
                  value={details.porductType}
                  type="text"
                  id="id1"
                  onChange={(e) => { setDetails({ ...details, porductType: e.target.value }) }}
                  placeholder="Product Type"
                  disabled={false}
                  className={`mt-3 h-15 rounded-xl border p-2 text-lg outline-none pl-5 bg-formBg`}
                />
              </div>

            </div>
            <div className="w-full mt-7 px-3 mb-6 md:mb-0">
              <label
                htmlFor="condRules"
                className={`text-xl mt-6 text-navy-700 dark:text-white ml-3 font-bold`}
              >
                Reward
              </label>
              <br />
              <div className="grid grid-cols-2 mt-3">
                <div className="mr-4">
                  <div className="relative">
                    <select
                      onChange={(e) => {
                        let x = e.target.value;
                        setDetails({ ...details, reward: { type: x, amount: details.reward.amount } })
                      }}
                      className="block appearance-none w-full bg-formBg border border-gray-200 text-gray-700 mr-3 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option value="Absolute">Absolute</option>
                      <option value="Percentage">Percentage</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>

                <div className="">
                  <input
                    value={details.reward.amount}
                    type="text"
                    id="id1"
                    placeholder="Enter amount"
                    onChange={(e) => { setDetails({ ...details, reward: { type: details.reward.type, amount: e.target.value } }) }}
                    disabled={false}
                    className={`flex h-15 w-full items-center justify-center rounded-xl border p-2 text-lg outline-none pl-5 bg-formBg`}
                  />
                </div>
              </div>

            </div>
          </div>

          <div className="">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                htmlFor="progType"
                className={`text-xl mt-5 text-navy-700 dark:text-white ml-3 font-bold`}
              >
                Usage Limit
              </label>
              <div className="grid grid-cols-2 mt-3">
                <div className="mr-4">
                  <div className="relative">
                    <select
                      value={details.usage.type}
                      onChange={(e) => {
                        let x = e.target.value;
                        e.target.value = "unlimited" ? setDetails({ ...details, usage: { type: x, limit: -1 } }) : setDetails({ ...details, usage: { type: x, limit: details.usage.limit } })
                      }}
                      className="block appearance-none w-full bg-formBg border border-gray-200 text-gray-700 mr-3 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option value="limited">Limited</option>
                      <option value="unlimited">Unlimited</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>

                <div className="">
                  <input
                    value={details.usage.limit}
                    onChange={(e) => { setDetails({ ...details, usage: { type: details.usage.type, limit: e.target.value } }) }}
                    type="text"
                    id="id1"
                    placeholder="Enter usage limit"
                    disabled={details.usage.type === "unlimited" ? true : false}
                    className={`flex h-15 w-full mb-5 items-center justify-center rounded-xl border p-2 text-lg outline-none pl-5 bg-formBg`}
                  />
                </div>
              </div>

              <label
                  htmlFor="validity"
                  className={`text-xl text-navy-700 dark:text-white ml-3 font-bold`}
                >
                  Validity
                </label>
            </div>
            <div className="flex justify-center mt-2">
              <div className="">

                <div className="mt-3 display-none">
                  <Calendar

                    value={selectedDay}
                    colorPrimary="#422afb" // added this
                    onChange={(e) => {
                      // let x = e.target.value;
                      console.log(e);
                      setDetails({
                        ...details, expiryDate: {
                          year: e.year,
                          month: e.month,
                          day: e.day
                        }
                      })
                      setSelectedDay({
                        year: e.year,
                        month: e.month,
                        day: e.day
                      })
                    }}
                    shouldHighlightWeekends
                  />
                </div>
                <div className="content-end">
                  <button type="submit" class="bg-krishSecondary mt-7 w-1/2 hover:bg-blue-700 text-blue font-bold py-2 px-4 rounded-xl border">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
};

export default Promotion;
