import React from 'react'
import { useNavigate } from 'react-router-dom';
import SuccessModal from "../../assets/images/SucessModal.png";
import IconRemove from "../../assets/images/IconRemove.png";


function RegisterSuccess() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="card-container2 flex flex-col">
      <img className="relative rounded-t-3xl" src={SuccessModal} alt="" />
      <img
        className="size-6 absolute place-self-end m-7 "
        src={IconRemove}
        alt="closebutton"
      />
      <div className="p-11 space-y-10">
        <p className="text-4xl font-bold">You are successfully registered!</p>
        <div>
          <div className=" flex flex-col gap-5">
            <button
              onClick={handleClick}
              className=" hover:shadow-lg"
              type="submit"
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default RegisterSuccess