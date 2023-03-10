import React from 'react'
import { useState } from 'react';

const Giftcard = () => {
    const [details, setDetails] = useState({
        productURL: "",
        receiverEmail: "",

    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        console.log(details);
        // console.log(details);
        // let result = await fetch("http://localhost:3000/productType", {
        //     method: "post",
        //     body: JSON.stringify(details),
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json",
        //     },
        // });
        // result = await result.json();
        //   console.log(result, "result");
        // localStorage.setItem("admin", JSON.stringify(result));
        // navigate("/");
    }
    return (
        <div className="flex w-full flex-col gap-5">
            <form onSubmit={handleSubmit} action="" className="mt-5">

                <div className="mt-6 grid grid-cols-1 xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 md:gap-12 mb-8">
                    <div className="">
                        <label
                            htmlFor="id1"
                            className={`text-xl mt-5 mb-5 text-navy-700 dark:text-white ml-6 font-bold`}
                        >
                            Product Url
                        </label>
                        <input
                            value={details.productURL}
                            type="text"
                            id="id1"
                            onChange={(e) => { setDetails({ ...details, productURL: e.target.value }) }}
                            placeholder="Enter the product url"
                            className={`flex h-15 mb-5 mt-3 ml-3 pl-4 w-full items-center justify-center rounded-xl border p-2 text-lg outline-none bg-formBg`}
                        />
                        <label
                            htmlFor="id1"
                            className={`text-xl mt-5 mb-5 text-navy-700 dark:text-white ml-6 font-bold`}
                        >
                            Receiver Email Address
                        </label>
                        <input
                            value={details.receiverEmail}
                            type="text"
                            id="id1"
                            onChange={(e) => { setDetails({ ...details, receiverEmail: e.target.value }) }}
                            placeholder="Enter the site url"
                            className={`flex h-15 mb-5 mt-3 ml-3 pl-4 w-full items-center justify-center rounded-xl border p-2 text-lg outline-none bg-formBg`}
                        />

                        <button type="submit" class="bg-krishSecondary mt-7 w-1/4 hover:bg-blue-700 text-blue font-bold ml-2 py-2 px-4 rounded-xl border">
                            Generate
                        </button>
                    </div>


                </div>

            </form>
        </div>
    );
}

export default Giftcard