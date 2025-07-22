import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import OnboardingNav from "../components/OnboardingNav";
import IconRemove from "../../src/assets/images/IconRemove.png";
import Fb from "../../src/assets/images/fb.png";
import SuperG from "../../src/assets/images/super-g.png";
import Apple from "../../src/assets/images/apple.png";
import Eyeon from "../../src/assets/images/eyeon.png";
import { doSignInWithEmailAndPassword } from '../utils/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

function LoginPage() {
  const navigate = useNavigate();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(data.email, data.password);
        navigate("/dashboard");
      } catch (error) {
        setIsSigningIn(false);
        if (error.code === 'auth/invalid-credential') {
          // Handle invalid credentials error
        } else {
          // Handle other errors
        }
      }
    }
  };

  

return (
  <div className="card-container1 flex flex-col gap-7 max-w-md mx-auto p-4 md:p-8 lg:p-12 w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
    <div className="flex flex-row justify-between">
      <OnboardingNav />
      <img src={IconRemove} width={24} alt="closebutton" className="md:hidden" />
    </div>
    <div className="flex gap-5 justify-center md:justify-start">
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col mb-5 px-3 py-1 border-2 rounded-xl border-gray-300 active:border-[#5932EA] focus:border-purple-500">
            <span className="text-[14px] text-[#1A0710A6]">Email address</span>
            <div className="flex flex-row justify-between gap-3">
              <input
                type="email"
                placeholder="example@mail.com"
                {...register('email')}
                className="w-full text-sm md:text-base"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-[12px]">{errors.email.message}</p>
            )}
          </div>
          {/* password input */}
          <div className="field-content flex flex-col px-3 py-1 mb-8 border-3 rounded-xl border-[#5932EA] active:border-[#5932EA]">
            <span className="text-[14px] text-[#1A0710A6]">Password</span>
            <div className="flex flex-row justify-between">
              <input
                type="password"
                placeholder="*********"
                {...register('password')}
                className="w-full text-sm md:text-base"
              />
              <div className="flex gap-2">
                <img src={Eyeon} width={22} alt="showpwd" />
              </div>
            </div>
            {errors.password && (
              <p className="text-red-500 text-[12px]">{errors.password.message}</p>
            )}
          </div>
          <button className="hover:shadow-lg mb-2 w-full md:w-auto" type="submit">
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
};

export default LoginPage