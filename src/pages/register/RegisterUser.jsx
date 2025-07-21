
import React from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingNav from '../../components/OnboardingNav';
import IconRemove from "../../assets/images/IconRemove.png";
import Fb from "../../assets/images/fb.png";
import SuperG from "../../assets/images/super-g.png";
import Apple from "../../assets/images/apple.png";
import Tick from "../../assets/images/tick.png";
import Eyeon from "../../assets/images/eyeon.png";
import { doCreateUserWithEmailAndPassword } from '../../utils/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

function RegisterUser() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [isRegistering, setIsRegistering] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const onSubmit = async (data) => {
    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await doCreateUserWithEmailAndPassword(data.email, data.password);
        navigate("/personalinfo");
      } catch (error) {
        setIsRegistering(false);
        if (error.code === "auth/email-already-in-use") {
          setErrorMessage("Email already exists. Please try a different email.");
        } else {
          setErrorMessage(error.message);
        }
      }
    }
  };

  return (
    <div className="card-container1 flex flex-col gap-7 max-w-md mx-auto p-4 md:p-8 lg:p-12">
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
        <p className="text-[13px] text-[#230a1666] mb-5">or register with email</p>
        {errorMessage && <p className="text-red-600 font-semibold">{errorMessage}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col mb-5 px-3 py-1 border-2 rounded-xl border-gray-300 active:border-[#5932EA] focus:border-[#5932EA]">
              <span className="text-[14px] text-[#1A0710A6]">Email address</span>
              <div className="flex flex-row justify-between gap-3">
                <input type="email" placeholder="example@mail.com" {...register('email')} className="w-full" />
                <img src={Tick} width={24} alt="email check correct" className="hidden md:block" />
              </div>
              {errors.email && <p className="text-red-500 text-[12px]">{errors.email.message}</p>}
            </div>
            {/* password input */}
            <div className="field-content flex flex-col px-3 py-1 border-3 rounded-lg border-[#5932EA] active:border-[#5932EA]">
              <span className="text-[14px] text-[#1A0710A6]">Password</span>
              <div className="flex flex-row justify-between">
                <input type="password" placeholder="*********" {...register('password')} className="w-full" />
                <div className="flex gap-2">
                  <img src={Tick} width={24} alt="password check correct" />
                <img src={Eyeon} width={22} alt="showpwd" />
              </div>
            </div>
            {errors.password && <p className="text-red-500 text-[12px]">{errors.password.message}</p>}
</div>
            <p className="text-[12px] text-[#1A0710A6] mb-10 mt-0.5">8+ characters</p>
            <button 
              className=" hover:shadow-lg mb-2" 
              type="submit"
              disabled={isRegistering}
            >
              {isRegistering ? 'Creating Account...' : 'Create Account'}
            </button>
          </div>

          {/* new and promotion checkbox */}
          <div className="flex flex-row gap-3">
            <input type="checkbox" name="new&promotion" id="newsandpromotion" />
            <p>Send me news and promotion</p>
          </div>
        </form>
      </div>
      <p className="text-center w-[292px] m-auto  text-[#646464] text-[12px]">
        By continuing I agree with the <span className="text-[#3871ec] text-[14px] underline">Terms & Conditions, Privacy Policy</span>
      </p>
    </div>
  );
}

export default RegisterUser;

