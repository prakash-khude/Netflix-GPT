import React, { useState } from 'react'
import Header from './Header'
const Login = () => {

  const[isSIgnIn, setIsSignedI] = useState(true);

  const toggelSignInForm = () => {
    setIsSignedI(!isSIgnIn);
  }

  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/CA-en-20250421-TRIFECTA-perspective_8c7583d6-7e3a-4558-8b79-670b4d639dce_large.jpg" alt="Logo"/>
      </div>

      <form className="w-3/12 p-10 absolute bg-black px-10 my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-90">
        <h1 className="font-bold py-4 text-4xl text-white">{isSIgnIn ? "Sign In" : "Sign Up"}</h1>
        {!isSIgnIn && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-900" />}
        <input type="email" placeholder="Email or phone number" className="p-4 my-4 w-full bg-gray-900" />
        <input type="password" placeholder="Password" className="p-4 my-4 bg-gray-900 w-full" />
        <button className="p-4 my-6 bg-red-600 w-full">{isSIgnIn ? "Sign In" : "Sign Up"}</button>
        <p className="py-5 cursor-pointer" onClick={toggelSignInForm}>{isSIgnIn ? "New to Netflix? Sign up now" : "Already registered? Sign In now"}</p>
      </form>
    </div>
  )
}

export default Login