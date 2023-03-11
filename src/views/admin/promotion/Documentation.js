import React from "react";

function Documentation() {
    return (
        <div className="mt-8">
            <label
                htmlFor="progType"
                className={`mt-5 text-2xl font-bold text-navy-700 dark:text-white`}
            >
                Integration Instructions
            </label>

            <div className="mt-10 ml-3 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
                <div className="">
                    <p className="text-2xl font-bold text-navy-700 dark:text-white">
                        Get
                    </p>

                    <ol className="">
                        <li class="mt-10 mb-4 flex text-xl text-base">
                            <span class="mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded bg-ourTheme">
                                1
                            </span>
                            Inorder to verify the coupon send the coupon code to our system by
                            following the below steps
                        </li>
                        <li class="mt-5 mb-4 flex text-xl text-base">
                            <span class="mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded bg-ourTheme">
                                2
                            </span>
                            Get the Merchat Id:-
                            <span className="font-bold"> askdjfasd</span>
                        </li>
                        <li class="mt-5 mb-4 flex text-xl text-base">
                            <span class="mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded bg-ourTheme">
                                3
                            </span>
                            Store the coupon code in CouponCode variable
                            <span style={{ color: "blue" }}>/ link-stotre-id/ </span>
                        </li>
                        <li class="mt-5 mb-4 flex text-xl text-base">
                            <span class="mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded bg-ourTheme">
                                4
                            </span>
                            Copy and paste the code in your header:
                            
                            <span style={{ color: "blue" }}>
                                let result = await fetch( "http://localhost:3000/api/
                                <span style={{ color: "Red" }}>MerchantUId</span>/
                                <span style={{ color: "Red" }}>CouponCode</span>" );
                                <br></br>result = await result.json();
                            </span>
                        </li>
                        <li class="mt-5 mb-4 flex text-xl text-base">
                            <span class="mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded bg-ourTheme">
                                5
                            </span>
                            The coupon gets validates by verification in our dataset or though
                            our backend
                        </li>
                        <li class="mt-5 mb-4 flex text-xl text-base">
                            <span class="mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded bg-ourTheme">
                                6
                            </span>
                            Sample Output is as follows
                            <br></br>
                            <span></span>
                        </li>
                    </ol>
                    {JSON.stringify({
                        usage: {
                            type: "",
                            limit: 1,
                        },
                        reward: {
                            type: "",
                            amount: 0,
                        },
                        expiryDate: {
                            year: 2023,
                            month: 3,
                            day: 22,
                        },
                        _id: "640c8764818a2552808e9cc5",
                        programName: "Priyansh",
                        couponType: "LoyaltyCards",
                        couponLength: "34",
                        couponCode: "Priyansh",
                        minPurchase: 56,
                        maxDiscount: 7,
                        porductType: "sad",
                        __v: 0,
                    })}
                </div>

                <div className="">
                    <p className="text-2xl font-bold text-navy-700 dark:text-white">
                        Post
                    </p>

                    <ol className="">
                        <li class="mt-10 mb-4 flex text-xl text-base">
                            <span class="mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded bg-ourTheme">
                                1
                            </span>
                            Inorder to send you customer cart data or any kind of data and to
                            get recommendation use this method.
                        </li>
                        <li class="mt-5 mb-4 flex text-xl text-base">
                            <span class="mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded bg-ourTheme">
                                2
                            </span>
                            Pass Customer Id as inside CustomerId field.
                        </li>

                        <li class="mt-5 mb-4 flex text-xl text-base">
                            <span class="mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded bg-ourTheme">
                                3
                            </span>
                            Inside data send whatever you feel like transfering.
                        </li>
                        <li class="mt-5 mb-4 flex text-xl text-base">
                            <span class="mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded bg-ourTheme">
                                4
                            </span>

                            {/* "const details={
                    "CustomerId": "User ID of customer",
                    "data": [{
                        "Brand":"Sprite",
                        "Product":"250 ml Bottle",
                        "Selling Price":"45",
                        "Cost Price":"30",
                    },
                    {
                        "Brand":"Realme",
                        "Product":"Watch SE",
                        "Selling Price":"2000",
                        "Cost Price":"1500",
                    }
                    ]
                }
                let result = await fetch("http://localhost:3000/api/post/${MerchantUId}", {
                    method: "post",
                    body: JSON.stringify(details),
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    });
                result = await result.json(); */}
                        </li>
                        <li class="mt-5 mb-4 flex text-xl text-base">
                            <span class="mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded bg-ourTheme">
                                5
                            </span>
                            Sample Output:
                            {/* {
                "couponCode" : "GET50",
                "date" : "11th March 2023",
                "category" : "Electronics",
                "minPurchase" : "1000",
                "discountType" : "Percentage",
                "discount" : "50",
                "maxDiscount" : "600",
                "redemptions" : "2"
                } */}
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Documentation;
