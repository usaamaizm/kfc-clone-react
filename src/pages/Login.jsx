import Header from "components/Header";
import React from "react";

function Login() {
  fetch("https://restcountries.com/v2/name/pakistan")
  .then(res => res.json())
  .then(data => console.log(data))
  
  return (
    <>
      <Header />
      <div className="login">Login or Register Yourself for KFC food</div>
    </>
  );
}

export default Login;
