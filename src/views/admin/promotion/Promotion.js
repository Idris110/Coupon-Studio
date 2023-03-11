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
    promotionName: "",
    promotionType: "New Customer",
    onProductType: "Clothing",
    targetAudience: "Middle-Aged",
    couponLength: "",
    couponCodeType: "AlphaNumeric",
    couponCode: "",
    usage: {
      type: "Limited",
      limit: 1
    },
    minPurchase: 0,
    maxDiscount: 0,
    reward: {
      type: "Fixed Amount",
      amount: 0
    },
    expiryDate: {
      year: 2023,
      month: 3,
      day: 11
    }
  });
  const generateCode = (type, length) => {
    let alphanum = "";
    if(type === "Numeric")
      alphanum = "0123456789"
    else if(type === "Alphabetic")
      alphanum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    else if(type === "AlphaNumeric")
      alphanum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890123456789";

    var code = "";

    for (var i = 0; i < length; i++) {
      code += alphanum.charAt(Math.floor(Math.random() * alphanum.length));
    }
    console.log(code);
    return code;
    // if (generated.indexOf(code) === -1) {
    //   generated.push(code);
    // } else {
    //   generateCode(type, length);
    // }
    
  }
  // const Change = (e) => {
  //   console.log(e);
  //   console.log(details);
  //   setDetails(...details, e.target.name: e.target.value);

  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e);
    if(details.couponCodeType !== "Custom"){
      let code = generateCode(details.couponCodeType, details.couponLength)
      setDetails({...details, couponCode: code});
    }
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
              Promotion Name
            </label>
            <input
              value={details.promotionName}
              type="text"
              id="id1"
              onChange={(e) => { setDetails({ ...details, promotionName: e.target.value }) }}
              placeholder="Enter the program name"
              className={`flex h-15 mb-5 mt-3 ml-3 pl-4 w-full items-center justify-center rounded-xl border p-2 text-lg outline-none bg-formBg`}
            />

            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                htmlFor="progType"
                className={`text-xl mt-5 text-navy-700 dark:text-white ml-3 font-bold`}
              >
                Promotion Type
              </label>
              <div className="relative">
                <select name="couponType"
                  value={details.promotionType}
                  onChange={(e) => {
                    let x = e.target.value
                    setDetails({ ...details, promotionType: x })
                  }}
                  className="block appearance-none w-full bg-formBg border border-gray-200 text-gray-700 mt-3 mr-3 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option value="New Customer">New Customer</option>
                  <option value="Existing Customer">Existing Customer</option>
                  <option value="Returning Customer">Returning Customer</option>
                  <option value="General Promotion">General Promotion</option>
                  <option value="Loyalty Cards">Loyalty Cards</option>
                  <option value="Buy X get Y">Buy X get Y</option>
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
              <div className="mt-5">
                <label
                  htmlFor="prodType"
                  className={`text-lg mt-2 text-navy-700 dark:text-white ml-3 font-bold`}
                >
                  Select Product Category: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </label>

                <div className="relative mt-1">
                  <select name="couponType"
                    value={details.onProductType}
                    onChange={(e) => {
                      let x = e.target.value
                      setDetails({ ...details, onProductType: x })
                    }}
                    className="block appearance-none w-full bg-formBg butborder border-gray-200 text-gray-700 mt-3 mr-3 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option value="Clothing">Clothing</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture">Furniture</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

            </div>
            <div className="w-full mt-7 px-3 mb-6 md:mb-0">
              <label
                htmlFor="condRules"
                className={`text-xl mt-6 text-navy-700 dark:text-white ml-3 font-bold`}
              >
                Reward :
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
                      <option value="Fixed Amount">Absolute</option>
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



            <div className="mt-8 ml-3">
              <label
                htmlFor="targetAud"
                className={`text-lg mt-2 text-navy-700 dark:text-white ml-3 font-bold`}
              >
                Target Audience
              </label>

              {/* <input
                value={details.targetAudience}
                onChange={(e) => { setDetails({ ...details, targetAudience: e.target.value }) }}
                type="text"
                id="id1"
                placeholder="Target Audience"
                disabled={false}
                className={`flex items-center justify-center w-full mt-3 h-15 rounded-xl border p-2 text-lg outline-none pl-5 bg-formBg`}
              /> */}
              <div className="relative">
                <select name="couponType"
                  value={details.targetAudience}
                  onChange={(e) => {
                    let x = e.target.value
                    setDetails({ ...details, targetAudience: x })
                  }}
                  className="block appearance-none w-full bg-formBg border border-gray-200 text-gray-700 mt-3 mr-3 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option value="Middle-Aged">Middle-Aged</option>
                  <option value="Gen-Z">Gen-Z</option>
                  <option value="New Customers">New Customers</option>
                  <option value="Returning Customers">Returning Customers</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
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
                Redemption Limit
              </label>
              <div className="grid grid-cols-2 mt-3">
                <div className="mr-4">
                  <div className="relative">
                    <select
                      value={details.usage.type}
                      onChange={(e) => {
                        let x = e.target.value;
                        e.target.value = "Unlimited" ? setDetails({ ...details, usage: { type: x, limit: -1 } }) : setDetails({ ...details, usage: { type: x, limit: details.usage.limit } })
                      }}
                      className="block appearance-none w-full bg-formBg border border-gray-200 text-gray-700 mr-3 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option value="Limited">Limited</option>
                      <option value="Unlimited">Unlimited</option>
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
                className={`text-xl mt-3 text-navy-700 dark:text-white ml-3 font-bold block`}
              >
                Validity
              </label>
            </div>


            <div className="flex justify-center">
              <div className="">

                <div className="mt-3 display-none">
                  <Calendar

                    value={selectedDay}
                    colorPrimary="#422afb" // added this
                    onChange={(e) => {
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
              </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-3 gap-6">
              <div className="mt-5">
                <label
                  htmlFor="targetAud"
                  className={`text-lg mt-2 text-navy-700 dark:text-white ml-3 font-bold`}
                >
                  Length of Coupon
                </label>

                <input
                  value={details.couponLength}
                  onChange={(e) => { setDetails({ ...details, couponLength: e.target.value }) }}
                  type="text"
                  id="id1"
                  placeholder="Enter Coupon Length"
                  disabled={false}
                  className={`flex items-center justify-center w-full mt-3 h-15 rounded-xl border p-2 text-lg outline-none pl-5 bg-formBg`}
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="targetAud"
                  className={`text-lg mt-2 text-navy-700 dark:text-white ml-3 font-bold`}
                >
                  Code type
                </label>

                <div className="relative mt-1">
                  <select name="couponType"
                    value={details.couponCodeType}
                    onChange={(e) => { setDetails({ ...details, couponCodeType: e.target.value }) }}
                    className="block appearance-none w-full bg-formBg border border-gray-200 text-gray-700 mt-3 mr-3 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option value="AlphaNumeric">AlphaNumeric</option>
                    <option value="Numeric">Numeric</option>
                    <option value="Alphabetic">Alphabetic</option>
                    <option value="Custom">Custom</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="flex justify-center">
                <button type="submit" class="text-blue h-[50px] w-full rounded-xl bg-ourTheme text-xl font-bold hover:bg-ourDarkTheme  hover:text-lightPrimary">
                  Generate Coupon
                </button>
              </div>

              <input
                type="text"
                id="id1"
                value={details.couponCode}
                onChange={(e) => { setDetails({ ...details, couponCode: e.target.value }) }}
                placeholder="Enter Custom Code"
                disabled={details.couponCodeType !== "Custom" ? true : false}
                className={` flex items-center justify-center w-full h-15 rounded-xl border p-2 text-lg outline-none pl-5 bg-formBg`}
              />
            </div>
          </div>
        </div>

      </form>
    </div>
  );
};

export default Promotion;
