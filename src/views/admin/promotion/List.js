import React, { useEffect, useState } from "react";
import ComplexTable from "views/admin/default/components/customerSpecificCouponTable";
const columnsDataComplex = [
  {
    Header: "Company Name",
    accessor: "name",
  },
  // {
  //   Header: "STATUS",
  //   accessor: "status",
  // },
  {
    Header: "Company Url",
    accessor: "date",
  },
  {
    Header: "Company Id",
    accessor: "progress",
  },
];
// const tableDataComplex = [
//   {
//     name: "Marketplace",
//     date: "24.Jan.2021",
//     progress: 30,
//   },
//   {
//     name: "Marketplace",
//     date: "30.Dec.2021",
//     progress: 30,
//   },
//   {
//     name: "Marketplace",
//     date: "20.May.2021",
//     progress: 30,
//   },
//   {
//     name: "Marketplace",
//     date: "12.Jul.2021",
//     progress: 30,
//   },
// ];
const List = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
    // makeTable();
  }, []);

  const getProducts = async () => {
    let result = await fetch(`http://localhost:3000/company`);
    result = await result.json() ;
    const newData = result.map((item) => {
      return {
        name: item.companyName,
        date: item.companySite,
        progress: item.companyUniqueId,
      };
    });
    setProducts(newData);
  };

  return (
    <>
      <div>List</div>
      <ComplexTable
        columnsData={columnsDataComplex}
        tableData={products}
      />
    </>
  );
};

export default List;
