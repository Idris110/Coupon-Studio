import React from 'react'
import { useState,useEffect } from 'react';
import ComplexTable from "views/admin/default/components/CouponTable";
const Giftcard = () => {

    const [details, setDetails] = useState({
      productURL: "",
      receiverEmail: "",
      maxAmount:"",
    });
    useEffect(() => {
      getProducts();
      // makeTable();
    }, []);

    const getProducts = async () => {
      let result = await fetch(`http://localhost:3000/GiftCard`);
      result = await result.json();
      const newData = result.map((item) => {
        return {
          name: item.emailId,
        //   date: item.amt,
          progress: item._id,
        //   status: item._id,
        };
      });
      setDetails(newData);
      console.log(newData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        console.log(details);
        let result = await fetch("http://localhost:3000/GiftCard", {
            method: "post",
            body: JSON.stringify(details),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        result = await result.json();
        //   console.log(result, "result");
        // localStorage.setItem("admin", JSON.stringify(result));
        // navigate("/");
    }
    const columnsDataComplex = [
      {
        Header: "Program Name",
        accessor: "name",
      },
      {
        Header: "Limit",
        accessor: "date",
      },
      {
        Header: "Company Id",
        accessor: "progress",
      },
      {
        Header: "Edit",
        accessor: "status",
      },
    ];
    const Edit = async (e) => {
      console.log(e.target.value);
      console.log(details);
      let id = e.target.value;
      let result = await fetch(`http://localhost:3000/UserSpecific/get/${id}`);
      result = await result.json();
      setDetails(result.user);
      console.log(details, "result");
      getProducts();
    };
    const Delete = async (e) => {
      console.log(e.target);
      console.log(e.target.value);
      let id = e.target.value;
      // let result = await fetch(`http://localhost:3000/UserSpecific/get/${id}`);
      // result = await result.json();
      // setDetails(result.user);
      // console.log(details, "result");
      fetch(`http://localhost:3000/UserSpecific/${id}`, {
        method: "DELETE",
      }).then((data) => console.log(data, "deleted"));
      getProducts();
    };
    return (
      <div className="flex w-full flex-col gap-5">
        <ComplexTable
          edit={Edit}
          delet={Delete}
          columnsData={columnsDataComplex}
          tableData={details}
        />
        <form onSubmit={handleSubmit} action="" className="mt-5">
          <div className="mt-6 mb-8 grid grid-cols-1 md:grid-cols-1 md:gap-12 lg:grid-cols-1 xl:grid-cols-1">
            <div className="">
              <label
                htmlFor="id1"
                className={`mt-5 mb-5 ml-6 text-xl font-bold text-navy-700 dark:text-white`}
              >
                Product Url
              </label>
              <input
                value={details.productURL}
                type="text"
                id="id1"
                onChange={(e) => {
                  setDetails({ ...details, productURL: e.target.value });
                }}
                placeholder="Enter the product url"
                className={`h-15 mb-5 mt-3 ml-3 flex w-full items-center justify-center rounded-xl border bg-formBg p-2 pl-4 text-lg outline-none`}
              />
              <label
                htmlFor="id1"
                className={`mt-5 mb-5 ml-6 text-xl font-bold text-navy-700 dark:text-white`}
              >
                Max Amount
              </label>
              <input
                value={details.maxAmount}
                type="text"
                id="id1"
                onChange={(e) => {
                  setDetails({ ...details, maxAmount: e.target.value });
                }}
                placeholder="Enter the product url"
                className={`h-15 mb-5 mt-3 ml-3 flex w-full items-center justify-center rounded-xl border bg-formBg p-2 pl-4 text-lg outline-none`}
              />
              <label
                htmlFor="id1"
                className={`mt-5 mb-5 ml-6 text-xl font-bold text-navy-700 dark:text-white`}
              >
                Receiver Email Address
              </label>
              <input
                value={details.receiverEmail}
                type="text"
                id="id1"
                onChange={(e) => {
                  setDetails({ ...details, receiverEmail: e.target.value });
                }}
                placeholder="Enter the site url"
                className={`h-15 mb-5 mt-3 ml-3 flex w-full items-center justify-center rounded-xl border bg-formBg p-2 pl-4 text-lg outline-none`}
              />

              <button
                onClick={handleSubmit}
                type="submit"
                class="text-blue mt-7 ml-2 w-1/4 rounded-xl border bg-krishSecondary py-2 px-4 font-bold hover:bg-blue-700"
              >
                Generate
              </button>
            </div>
          </div>
        </form>
      </div>
    );
}

export default Giftcard