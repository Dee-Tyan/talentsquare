import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Bani 5.svg";
import eye from "../../assets/eye.svg";
const Login = () => {


  const showPassword = () => {

  }
  return (
    <div className="bg-bgcolor h-screen">
      <div className="flex items-center justify-center py-10">
        <img src={logo} alt="logo" className="" />
      </div>
      <div class="container mx-auto bg-white sm:w-3/12 w-auto rounded-lg px-8">
        <div className="">
          <h1 className="pt-12 text-2xl font-bold tracking-normal">
            Log in to your account
          </h1>
          <p className="text-sm mt-12">
            {" "}
            Don't have an account?{" "}
            <span className="text-blue"> Get Started</span>
          </p>
        </div>

        <div className="flex flex-col">
          <label className="grid text-xs text-ltxt mt-4">
            Email
            <input
              type="email"
              value="E.g: victor.onazi@getbani.co"
              className="text-grey h-11 mt-2 border-slate-100"
            />
          </label>

          <div className="flex justify-between text-xs text-ltxt mt-4">
            <label>Password</label>
            <p className="text-blue">Forgot password?</p>
          </div>

          <div className="relative h-11 mt-2 border">
            <div>
              <input
                type="password"
                value="password"
                className="border-slate-50"
              />
            </div>

            <div className='text-2xl absolute top-4 right-5'>
              <img src={eye}/>
            </div>
          </div>

          <div className="flex items-center justify-center mb-8">
            <input
              type="button"
              className="h-12 w-full mt-16 bg-blue text-white text-center rounded text-bold"
              value="Log in"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
