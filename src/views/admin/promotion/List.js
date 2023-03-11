import React, { useEffect, useState } from "react";
import ComplexTable from "views/admin/default/components/customerSpecificCouponTable";
import ColumnsTable from "../tables/components/ColumnsTable";
import tableDataColumns from "../../../views/admin/tables/variables/tableDataColumns.json"
import {
  columnsDataColumns,
} from "../../../views/admin/tables/variables/columnsData.js";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
const List = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
    // makeTable();
  }, []);
  const { couponCode, date, category, minPurchase, discountType, maxDiscount, redemptions } = props;
  const getProducts = async () => {
    let result = await fetch(`http://localhost:3000/company`);
    result = await result.json();
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
    <div className="mt-7">
      <Card className="w-full">
        <CardHeader className="relative h-56">
          {/* <img
          src="/img/blog.jpg"
          alt="img-blur-shadow"
          className="h-full w-full"
        /> */}
          <div className="font-bold text-xl ml-10 mt-10">GET50 </div>
          <div className=" text-md ml-10 mt-1">Created on {date}</div>
          <Typography variant="h5" className="text-lg ml-10 mt-1 mb-2">
            <div className="grid grid-cols-3">
              <div className="">Category: Electronics</div>
              <div className=""> Discount Type: {discountType}</div>
              <div className="">Discount: {maxDiscount}</div>
            </div>
            <div className="grid grid-cols-3">
              <div className="">Minimum Purcahse: {minPurchase} </div>
              <div className="">Maximum Discount: {maxDiscount} </div>
              <div className="">Maximum redemptions: {redemptions}</div>
            </div>
          </Typography>
          <Typography className="ml-10 mt-1">
            
          </Typography>
        </CardHeader>
        {/* <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">$899/night</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
            Barcelona, Spain
          </Typography>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default List;
