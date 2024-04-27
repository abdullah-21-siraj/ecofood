"use client"
import Link from "next/link";
import React from "react";
import { useState } from "react";

const SignupPage = () => {
  const [gender, setGender] = useState("")
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");

  async function onClickSubmit()
  {
    try {
      const response = await fetch("/api/authenticate/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
    
        body: JSON.stringify({
          gender:gender,
          fname:firstName,
          lname:lastName,
          email:email,
          password:password,
          dob:dob
        }),
      })

      if(!response.ok)
        {
          alert("Error submitting data");
          return;
        }

        alert("Account created successfully");
        setEmail("");
        setPassword("");
        setGender("");
        setFirstName("");
        setLastName("");
        setDob("");

    } catch (error) {
      
    }
  }


  return (
    <div className="min-h-screen flex w-full  bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col space-y-6">
          <h2 className="mt-6 text-left text-3xl font-extrabold text-gray-700">
            CREATE AN ACCOUNT
          </h2>
          <span className="text-gray-500">Already have an Account? <Link className="text-black" href="/login">Login in instead!</Link></span>
        </div>
        <div className="mt-8 space-y-6 w-full">
          <div className="flex flex-col w-full space-y-8">

            <div className="flex flex-row justify-between w-full">
            <label htmlFor="email-address" >
                  Social title
                </label>


              <div className="flex flex-row space-x-4">  
              <div className="flex flex-row space-x-3">
                <input
                  id="Mr"
                  name="gender"
                  type="radio"

                  value={gender}
                  onClick={() => setGender("Mr")}
                />
                <span>Mr</span>
              </div>


              <div className="flex flex-row space-x-3">

                <input
                  id="Mrs"
                  name="gender"
                  type="radio"
                  value={gender}
                  onClick={() => setGender("Mrs")}
                />
                <span>Mrs</span>
              </div>


              </div>


            </div>


            <div className="flex flex-row justify-between w-full">
              <span className="w-full">
                First Name
              </span>

              <input
                id="fname"
                name="fname"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="First Name..."
              />
            </div>


            <div className="flex flex-row justify-between w-full">
              <span className="w-full">
                Last Name
              </span>

              <input
                id="lname"
                name="lname"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Last Name..."
              />
            </div>



            <div>
              <label htmlFor="email-address" className="">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>


            

            <div>
              <label htmlFor="password" >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>



            <div className="flex flex-row justify-between w-full">
              <span className="w-full">
                Date of Birth
              </span>

              <input
                id="dob"
                name="dob"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>



          </div>

          <div>
            <button
            onClick={onClickSubmit}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
