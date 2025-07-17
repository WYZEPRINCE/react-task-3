import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import OnboardingNav from "../components/OnboardingNav";
import IconRemove from "../../src/assets/images/IconRemove.png";
import Fb from "../../src/assets/images/fb.png";
import SuperG from "../../src/assets/images/super-g.png";
import Apple from "../../src/assets/images/apple.png";
import Eyeon from "../../src/assets/images/eyeon.png";
import { doSignInWithEmailAndPassword } from '../utils/auth';
import { useAuth } from '../context/useAuth';

function LoginPage() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        navigate("/dashboard");
      } catch (error) {
        setIsSigningIn(false);
        if (error.code === 'auth/invalid-credential') {
          setErrorMessage('Invalid email or password');
        } else {
          setErrorMessage(error.message);
        }
      }
    }
  };

  if (isLoggedIn) {
    return <Navigate to={"/dashboard"} replace={true} />;
  }

  return (
    <div className="card-container1 flex flex-col gap-7">
      <div className="flex flex-row justify-between">
        <OnboardingNav />
        <img src={IconRemove} width={24} alt="closebutton" />
      </div>
      <div className="flex gap-5">
        <div className="bg-[#f6f6f6] py-5 px-5 rounded-[100px]">
          <img src={Apple} width={20} alt="" />
        </div>
        <div className="bg-[#f6f6f6] py-4 px-6 rounded-[100px]">
          <img src={Fb} width={12} alt="" />
        </div>
        <div className="bg-[#f6f6f6] py-5 px-5 w-fit rounded-[100px]">
          <img src={SuperG} width={20} alt="" />
        </div>
      </div>
      {/* Email input */}
      <div>
        <p className="text-[13px] text-[#230a1666] mb-5">or login with email</p>

        {errorMessage && <p className="text-red-600 font-semibold">{errorMessage}</p>}
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col mb-5 px-3 py-1 border-2 rounded-xl border-gray-300 active:border-[#5932EA] focus:border-purple-500">
              <span className="text-[14px] text-[#1A0710A6]">Email address</span>
              <div className="flex flex-row justify-between gap-3">
                <input
                  type="email"
                  placeholder="example@mail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            {/* password input */}
            <div className="field-content flex flex-col px-3 py-1 mb-8 border-3 rounded-xl border-[#5932EA] active:border-[#5932EA]">
              <span className="text-[14px] text-[#1A0710A6]">Password</span>
              <div className="flex flex-row justify-between">
                <input
                  type="password"
                  placeholder="*********"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex gap-2">
                  <img src={Eyeon} width={22} alt="showpwd" />
                </div>
              </div>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-[12px]">{errorMessage}</p>
            )}
            <button className="hover:shadow-lg mb-2" type="submit">
              Login to Dashboard
            </button>
          </div>
          {/* remember me */}
          <div className="flex flex-row gap-3 mb-20">
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            <p>Remember me</p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LoginPage;
