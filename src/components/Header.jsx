import React from "react";

const Header = ({ personn }) => {
  return (
    <>
      <p>{personn.name}</p>
      <p>{personn.age}</p>
      <p>{personn.salary}</p>
    </>
  );
};

export default Header;
