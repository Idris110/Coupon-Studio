// import React, { useMemo, useState } from "react";
// import CardMenu from "components/card/CardMenu";
// import Card from "components/card";
// import {
//   useGlobalFilter,
//   usePagination,
//   useSortBy,
//   useTable,
// } from "react-table";

// import tableDataColumns from "../../../views/admin/tables/variables/companyDetails.json"

import { useState } from "react";
// import DetailsComponent from "./DetailsComponent";

// const { columnsData, tableDataColumns } = props;
const columnsDataColumns = [
  {
    Header: "CUSTOMER NAME",
    accessor: "name",
  },
  {
    Header: "CUST EMAIL",
    accessor: "email",
  },
  {
    Header: "DATE REGISTERED",
    accessor: "date",
  },
  {
    Header: "SPENDING",
    accessor: "spending",
  },
];
const CompanyDetails = () => {

  const [json, setJson] = useState([]);

  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      console.log(JSON.parse(e.target.result));
      // console.log("e.target.result", e.target.result);
      setJson(JSON.parse(e.target.result));
    };
  };

  return (
    <div className="mt-5">
      <div className="mt-6">
        <input type="file" name="json" id="" onChange={handleChange} />
      </div>

      <div className="my-6 mx-10">
        <div className="grid grid-cols-4">
          <p className="ml-5 font-bold text-xl">Name</p>
          <p className="ml-5 font-bold text-xl">EMAIL</p>
          <p className="ml-5 font-bold text-xl">DATE</p>
          <p className="ml-5 font-bold text-xl">SPENDING</p>
        </div>

        <hr />
        {/* {users && users.map((user) => {
            return (
              // <h3 className="text-2lg font-bold">{user.login}</h3>
              <UserItem login={user.login} avatar={user.avatar_url} key={user.login} />
            )
          })} */}

        <div className="mt-3">
          {json && json.map((elem) => {
            return (
              <div className="grid grid-cols-4">
                <p className="mx-2 my-3 text-lg"> {elem.name}</p>
                <p className="mx-2 my-3 text-lg">{elem.email}</p>
                <p className="mx-2 my-3 text-lg">{elem.date}</p>
                <p className="mx-2 my-3 text-lg">{elem.spending}</p>
              </div>
            )
          })}
        </div>
      </div>


    </div>
  );
}

export default CompanyDetails