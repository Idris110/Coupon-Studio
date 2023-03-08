import React from "react";

const createPromotion = () => {
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
        className={`flex h-16 w-full items-center justify-center rounded-xl border bg-white/0 p-2 text-lg outline-none pl-5 bg-lightPrimary`}
      />
    </div>
  );
};

export default createPromotion;