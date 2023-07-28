import React from "react";
import Button from "./Button";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import Image from "./Image";
const MainContainer = () => {
  return (
    <div className="border hover:border-red min-w-0 p-5 mt-5 bg-[#EAFFE4] rounded-xl">
      <Heading />
      <Image />
      <Link to="/activities"><Button text="See what you can do" link={<Link to='activities' />}/></Link>
    </div>
  );
};

export default MainContainer;
