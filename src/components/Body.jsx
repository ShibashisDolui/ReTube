import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = ({ category }) => {
  return (
    <div className='flex'>
      <SideBar />
      <Outlet context={category} />
    </div>
  );
};

export default Body;
