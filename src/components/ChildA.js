import React from "react";
import ChildB from "../components/ChildB";

const ChildA = ({ nameUsama }) => {
  return <ChildB nameUsama={nameUsama} />;
};

export default ChildA;
