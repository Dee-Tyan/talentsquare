import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Bani 5.svg";

const Login = () => {
  return (
    <div className="bg-bgcolor h-screen">
      <div className="flex items-center justify-center py-10">
        <img src={logo} alt="logo" className="" />
      </div>
      <div class="container mx-auto bg-white w-3/12 rounded-lg h-3/12 px-8">
        <div className=" mt-8">
          <h1 className="text-2xl my-8 font-bold">Log in to your account</h1>
          <p className="text-xs">
            {" "}
            Don't have an account? <span> Get Started</span>
          </p>

          <div className="flex flex-col">
            <label className="grid text-xs text-ltxt font-bold mt-4">
              Email
              <input type="email" value="E.g: victor.onazi@getbani.co" className="text-grey border h-11 mt-2"/>
            </label>

            <label className="grid text-xs text-ltxt font-bold mt-4">
              Password
              <input type="password" value="password" className="text-grey border h-11 mt-2"/>
            </label>

            <div className="flex items-center justify-center mb-8">
              <input
                type="button"
                className="h-12 w-full mt-16 bg-blue text-white text-center rounded"
                value='Log In'
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
