import React, { useEffect, useState } from "react";
import CustomCard from "./CustomCard";
const List = (props) => {
  // const { couponCode, date, category, minPurchase, discountType, maxDiscount, redemptions } = props;
  return (
    <>
      <CustomCard
        couponCode="GET50"
        date="11th March 2023"
        category="Electronics"
        minPurchase="1000"
        discountType="Percentage"
        maxDiscount="150"
        redemptions="2" />
        <CustomCard
        couponCode="GET50"
        date="11th March 2023"
        category="Electronics"
        minPurchase="1000"
        discountType="Percentage"
        discount="50"
        maxDiscount="600"
        redemptions="2" />
    </>
  );
};

export default List;
