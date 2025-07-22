import React from 'react';
import IconRemove from "../../assets/images/IconRemove.png";
import IconInfo from "../../assets/images/IconInfo.png";
import ChevronDown from "../../assets/images/chevron-down.png";
import { useNavigate } from 'react-router-dom';
import Calendar from "../../assets/images/calendar.png";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  fullname: yup.string().required('Full name is required'),
  phoneNumber: yup.string().required('Phone number is required').matches(/^[0-9]+$/, 'Phone number must be a number'),
  birthday: yup.string().notRequired(),
  gender: yup.string().required('Gender is required'),
});

function PersonalInfo() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const handleClick = () => {
    navigate("/inputaddress");
  };

  return (
    <div className="card-container1 flex flex-col gap-7 w-fit">
      <div className="flex flex-row justify-between">
        <h5 className="flex flex-row place-items-baseline gap-4 font-semibold text-[20px]">
          Personal information{" "}
          <span className="text-[#6BC62D] text-[14px] font-bold">1 of 3</span>
        </h5>
        <img className="size-6" src={IconRemove} alt="closebutton" />
      </div>
      {/* fullname input */}
      <div className="flex flex-col">
        <form onSubmit={handleSubmit(handleClick)} className="flex flex-col gap-5">
          <input
            className="p-3 border-2 border-[#dddddd] w-full rounded-lg"
            type="text"
            {...register('fullname')}
            placeholder="Full name"
          />
          {errors.fullname && <p className="text-red-500">{errors.fullname.message}</p>}
          <div className="flex gap-2">
            <p className="text-[#1A0710A6]">Gender:</p>
            <input
              className="px-3 py-1 border-3 rounded-lg border-[#5932EA] active:border-[#5932EA]"
              type="radio"
              {...register('gender')}
              value="male"
            />
            <label>Male</label>
            <input
              className="px-3 py-1 border-3 rounded-lg border-[#5932EA] active:border-[#5932EA]"
              type="radio"
              {...register('gender')}
              value="female"
            />
            <label>Female</label>
          </div>
          {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
          {/* info */}
          <div className="flex gap-2 place-items-center">
            <img className="size-3.5" src={IconInfo} width={""} alt="info" />
            <p className="text-sm font-semibold text-[13px] text-[#1A0710A6]">
              The phone number and birthday are only visible to you
            </p>
          </div>
          {/* phone input */}
          <div className="flex gap-6">
            <div className="flex flex-row relative p-2 border-2 border-[#dddddd] w-[80px] rounded-lg">
              <div className="flex gap-1 absolute place-self-center">
                <p className="text-[#1A0710A6]">+598</p>
                <img src={ChevronDown} width={20} alt="down arrow" />
              </div>
            </div>
            <input
              className="p-3 border-2 border-[#dddddd] w-full rounded-lg"
              type="tel"
              {...register('phoneNumber')}
              placeholder="Phone number"
            />
          </div>
          {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
          {/* Birthday input */}
          <div className="relative">
            <input
              className="p-3 border-2 border-[#dddddd] w-full rounded-lg"
              type="date"
              {...register('birthday')}
              placeholder="Birthday"
            />
            <div className="flex gap-2 place-items-center absolute right-3 top-4">
              <p className="text-[14px] text-[#1A071066]">Optional</p>
              <img className="size-6" src={Calendar} alt="calendar"
 />
            </div>
          </div>
        </form>
        <p className="text-[12px] text-[#1A0710A6] mb-10 mt-0.5">
          Let us know about your birthday so as not to miss a gift
        </p>
        <button
          onClick={handleClick}
          className=" hover:shadow-lg mb-2"
          type="submit"
        >
          Save information
        </button>
      </div>
    </div>
  );
}

export default PersonalInfo;