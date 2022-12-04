import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Bani 5.svg";
import eye from "../../assets/eye.svg";
const Login = () => {
         
    const [view, setView] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const clicked = () => {
      setView(!view)
    }
    

    const saveData = () => {
      let loginData = [email, password]
    }
    const handleInfo = (e) => {
      saveData()

      const myData = {
        email,
        password
      }

      localStorage.setItem("myData", JSON.stringify(myData))
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
          <p className="text-sm mt-8">
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
              value={email}
               placeholder = "E.g: victor.onazi@getbani.co"
              className="text-grey h-11 mt-2 border-slate-100"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <div className="flex justify-between text-xs text-ltxt mt-4">
            <label>Password</label>
            <p className="text-blue">Forgot password?</p>
          </div>

          <div className="relative h-11 mt-2 border">
            <div>
              <input
                type= {(view === true) ? 'text' : 'password'}
                value={password}
                className="border-slate-50 text-grey"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='text-2xl absolute top-4 right-5'>
              <img src={eye} onClick={clicked}/>
            </div>
          </div>

          <div >
            <button
            className="flex justify-center items-center font-bold h-12 w-full mt-16 bg-blue text-white text-center rounded mb-8"
           onSubmit={handleInfo}
           > <Link to="/dashboard">  Log in </Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
