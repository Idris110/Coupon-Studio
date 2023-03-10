import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";
import Promo from "views/admin/promotion/Promotion";
import List from "views/admin/promotion/List";
import DeployCoupon from "views/admin/promotion/DeployCoupon";
import AddEcom from "views/admin/promotion/AddEcom";
import CouponDetails from "views/admin/promotion/CouponDetails";
import CustomerSpecific from "views/admin/promotion/customerSpecific";
// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "rtl",
    icon: <MdHome className="h-6 w-6" />,
    component: <RTLDefault />,
  },
  {
    name: "Create Promotions",
    layout: "/admin",
    path: "newPromo",
    icon: <MdHome className="h-6 w-6" />,
    component: <Promo />,
  },
  {
    name: "Promotions List",
    layout: "/admin",
    path: "listPromo",
    icon: <MdHome className="h-6 w-6" />,
    component: <List />,
  },
  {
    name: "Deploy Coupon",
    layout: "/admin",
    path: "deployCoupon",
    icon: <MdHome className="h-6 w-6" />,
    component: <DeployCoupon />,
  },
  {
    name: "Add Ecommerce",
    layout: "/admin",
    path: "addEcom",
    icon: <MdHome className="h-6 w-6" />,
    component: <AddEcom />,
  },
  {
    name: "User Specific Coupon",
    layout: "/admin",
    path: "couponDetails",
    icon: <MdBarChart className="h-6 w-6" />,
    component: <CustomerSpecific />,
  },
  {
    name: "View Coupon Details",
    layout: "/admin",
    path: "couponDetails",
    icon: <MdBarChart className="h-6 w-6" />,
    component: <CouponDetails />,
  },
];
export default routes;
