import React from 'react'

function DeployCoupon() {
  return (
    <div className='mt-8'>
      <div className="w-full px-3 mb-6 md:mb-0">
        <label
          htmlFor="Ecoms"
          className={`text-xl mt-5 text-navy-700 dark:text-white ml-3 font-bold`}
        >
          Select E-commerce
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
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
          </div>
        </div>
      </div>
      <div className="w-full mt-7 px-3 mb-6 md:mb-0">
        <label
          htmlFor="progType"
          className={`text-xl mt-5 text-navy-700 dark:text-white ml-3 font-bold`}
        >
          Available Coupons
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
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
          </div>
        </div>
      </div>

      <div className="mt-7 ml-3">
        <label
          htmlFor="minSpent"
          className={`text-lg mt-2 text-navy-700 dark:text-white ml-3 font-bold`}
        >
          Minimum purchase &nbsp; &nbsp; &nbsp;
        </label>

        <input
          type="text"
          id="id1"

          placeholder=""
          disabled={false}
          className={`mt-3 h-15 rounded-xl border p-2 text-lg outline-none pl-5 bg-formBg`}
        />
      </div>

      <div className="mt-5 flex justify-center">
        <button type="submit" className="bg-ourTheme mt-7 w-3/5 hover:bg-ourDarkTheme text-blue font-bold py-3 px-6 rounded-xl border text-xl">
          Generate Coupon
        </button>
      </div>
    </div>
  )
}

export default DeployCoupon
