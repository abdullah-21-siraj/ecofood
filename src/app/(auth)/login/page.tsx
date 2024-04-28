"use client";
import { KeyRoundIcon, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";


const LoginPage = () => {



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function onClickRoute()
  {
    router.push("/signup");
  }

  async function onClickSubmitLogin() {
    try {
      const response = await fetch("/api/authenticate/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password
        })

      });
      if (!response.ok) {
        alert("Error submitting data");
        return;
      }

      alert("Login Successful");
      return;

    } catch (error) {

    }

  }

  return (
    <div className="min-h-screen flex  flex-col items-start justify-center bg-gray-50 py-3 px-4 sm:px-6 lg:px-8">
    <span className="px-14 text-sm text-[#3A7B74]">Home {"->"} Log in to your account</span>
    
    <div className="min-h-screen flex md:flex-row flex-col space-y-32 md:space-y-0  items-start justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="md:w-[50%] w-full px-6 flex flex-col space-y-6 items-left justify-left">
      
        <h1 className="text-3xl font-bold mb-5">NEW CUSTOMERS</h1>
        <p className="text-[#3A7B74]">By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
        <div>
        <button onClick={onClickRoute} className="bg-[#3A7B74] px-8 py-1.5 self-left hover:bg-transparent border-2 border-[#3A7B74] hover:border-2 hover:border-[#3A7B74] hover:text-[#3A7B74] text-white rounded-md">Create an account</button>
        </div>
      </div>
      
      
      <div className=" md:w-[50%] w-full space-y-8 ">
        <div>
          <h2 className="text-left text-3xl font-bold text-gray-700">
          LOG IN TO YOUR ACCOUNT
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <div className="flex flex-col space-y-6">
            
            <div className="w-full flex flex-row space-x-4 py-4 items-center border-[1px] border-gray-300 px-3">
              <Mail size={18} color="#3A7B74"/>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="focus:outline-0 text-[#3A7B74] bg-transparent placeholder:text-[#3A7B74]"
                placeholder="Email"
              />
            </div>


            <div className="w-full flex flex-row space-x-4 py-4 items-center border-[1px] border-gray-300 px-3">
              <KeyRoundIcon size={18} color="#3A7B74"/>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="focus:outline-0 text-[#3A7B74] bg-transparent placeholder:text-[#3A7B74]"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-end space-x-7">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-gray-300 hover:text-gray-800"
              >
                Forgot your password?
              </a>
            </div>

            <div>
            <button
              onClick={onClickSubmitLogin}
              className="bg-[#3A7B74] px-6 font-light py-2 rounded-lg text-white"
            >
              Sign in
            </button>
          </div>





          </div>

          
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
