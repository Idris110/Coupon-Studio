import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DeployCoupon() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    companyName: "",
    companySite: "",
    companyUniqueId: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });

    console.log(user.companyName);
  };
  const register = async () => {
    // console.log("ll");
    const { companyName, companySite, companyUniqueId } = user;

    if (companyName && companySite && companyUniqueId) {
      console.log(user);
      let result = await fetch("http://localhost:3000/company", {
        method: "post",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      result = await result.json();
      //   console.log(result, "result");
      localStorage.setItem("admin", JSON.stringify(result));
      // navigate("/");
      // <Redirect to="/" />;
    } else {
      alert("invalid");
    }
  };
  return (
    <div className="mt-8">
      <div className="mb-6 w-full px-3 md:mb-0">
        <label
          htmlFor="Ecoms"
          className={`mt-5 ml-3 text-xl font-bold text-navy-700 dark:text-white`}
        >
          Select E-commerce
        </label>
        <div className="relative">
          <select
            className="mt-3 mr-3 block w-full appearance-none rounded-xl border border-gray-200 bg-formBg py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="grid-state"
          >
            <option>Coupons</option>
            <option>Loyalty Cards</option>
            <option>Promotions</option>
            <option>Discount Code</option>
            <option>Buy X get Y</option>
            <option>Next Order Coupons</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-7 mb-6 w-full px-3 md:mb-0">
        <label
          htmlFor="progType"
          className={`mt-5 ml-3 text-xl font-bold text-navy-700 dark:text-white`}
        >
          Available Coupons
        </label>
        <div className="relative">
          <select
            className="mt-3 mr-3 block w-full appearance-none rounded-xl border border-gray-200 bg-formBg py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="grid-state"
          >
            <option>Coupons</option>
            <option>Loyalty Cards</option>
            <option>Promotions</option>
            <option>Discount Code</option>
            <option>Buy X get Y</option>
            <option>Next Order Coupons</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-7 ml-3">
        <label
          htmlFor="minSpent"
          className={`mt-2 ml-3 text-lg font-bold text-navy-700 dark:text-white`}
        >
          Minimum purchase &nbsp; &nbsp; &nbsp;
        </label>

        <input
          type="text"
          id="id1"
          placeholder=""
          disabled={false}
          className={`h-15 mt-3 rounded-xl border bg-formBg p-2 pl-5 text-lg outline-none`}
        />
      </div>

      <div className="mt-5 flex justify-center">
        <button
          type="submit"
          className="text-blue mt-7 w-3/5 rounded-xl border bg-ourTheme py-3 px-6 text-xl font-bold hover:bg-ourDarkTheme"
        >
          Generate Coupon
        </button>
      </div>
    </div>
  );
}

export default DeployCoupon;
