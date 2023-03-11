import React from 'react'

function Documentation() {
    return (
        <div className='mt-8'>
            <label
                htmlFor="progType"
                className={`mt-5 text-2xl font-bold text-navy-700 dark:text-white`}
            >Integration Instructions</label>

            <div className="mt-10 ml-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="">
                    <p className='text-2xl font-bold text-navy-700 dark:text-white'>
                        Get
                    </p>

                    <ol className=''>
                        <li class="text-xl mt-10 mb-4 flex text-base">
                            <span
                                class="bg-ourTheme mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded"
                            >
                                1
                            </span>
                            Inorder to verify the coupon send the coupon code to our system
                        </li>
                        <li class="text-xl mt-5 mb-4 flex text-base">
                            <span
                                class="bg-ourTheme mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded"
                            >
                                2
                            </span>
                            Enter the demo store id, make a test order an use voucher span &nbsp; <span className='font-bold'> ASDF</span>
                        </li>
                        <li class="text-xl mt-5 mb-4 flex text-base">
                            <span
                                class="bg-ourTheme mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded"
                            >
                                3
                            </span>
                            Send a redeem API GET call to <span style={{color : "blue"}}>/ linkasdfadfdfadsfa/ </span>
                        </li>
                        
                    </ol>


                </div>

                <div className="">
                    <p className='text-2xl font-bold text-navy-700 dark:text-white'>
                        Post
                    </p>

                    <ol className=''>
                        <li class="text-xl mt-10 mb-4 flex text-base">
                            <span
                                class="bg-ourTheme mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded"
                            >
                                1
                            </span>
                            Inorder to verify the coupon send the coupon code to our system
                        </li>
                        <li class="text-xl mt-5 mb-4 flex text-base">
                            <span
                                class="bg-ourTheme mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded"
                            >
                                2
                            </span>
                            Enter the demo store id, make a test order an use voucher span &nbsp; <span className='font-bold'> ASDF</span>
                        </li>
                        <li class="text-xl mt-5 mb-4 flex text-base">
                            <span
                                class="bg-ourTheme mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded"
                            >
                                3
                            </span>
                            Send a redeem API GET call to <span style={{color : "blue"}}>/ linkasdfadfdfadsfa/ </span>
                        </li>
                        
                    </ol>
                </div>
            </div>

        </div>
    )
}

export default Documentation