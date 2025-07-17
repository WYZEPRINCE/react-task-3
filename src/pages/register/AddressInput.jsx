import React from 'react'
import IconRemove from "../../assets/images/IconRemove.png";
import Search from "../../assets/images/IconSearch.png";
import { useNavigate, Link} from 'react-router-dom';
import IconPin from "../../assets/images/IconPin.png";
import IconUser from "../../assets/images/IconUsers.png";


function AddressInput() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/inputaddressmanual");
  };


  return (
    <div className="card-container1 flex flex-col gap-7">
      <div className="flex flex-row justify-between">
        <h5 className="flex flex-row place-items-baseline gap-4 font-semibold text-[20px]">
          Add address
          <span className="text-[#6BC62D] text-[14px] font-bold">2 of 3</span>
        </h5>
        <img className="size-6" src={IconRemove} alt="closebutton" />
      </div>

      {/* fullname input */}

      <div className="flex flex-col">
        <form action="" className="flex flex-col gap-">
          <div className="field-content flex flex-col  px-3 py-1 border-2 rounded-lg border-[#DDDDDD] active:border-[#5932EA] ">
            <div className="flex flex-row gap-3 py-3">
              <div className="">
                <img src={Search} width={24} alt="showpwd" />
              </div>
              <input
                type="search"
                placeholder="Search for address"
                required
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                maxLength={8}
              />
            </div>
          </div>
          <p className="text-[13px]  text-[#1A0710A6] mb-10 ">
            Your address is not visible to other users
          </p>

          {/* choose address method */}
          <div className="flex gap-2 mb-20">
            <div className="flex gap-1 cursor-pointer border-2 py-2 px-2 rounded-[12px] border-[#EF498F47] place-items-center">
              <img className="size-4" src={IconPin} alt="" />
              <p className="text-[#5932EA] text-[13px] font-bold">
                Use current location
              </p>
            </div>
            <p
              className="text-[#5932EA] text-[13px] font-bold cursor-pointer border-2 py-2 px-2 rounded-[12px] border-[#EF498F47]"
              onClick={handleClick}
            >
              Add manually
            </p>
          </div>

          {/* sharing your address */}
          <div className="flex flex-col gap-4 mb-10">
            <p className="font-bold text-lg">Sharing your address shows:</p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 place-items-center">
                <img className="size-4 " src={IconUser} alt="" />
                <p>People near you</p>
              </div>

              <div className="flex gap-2 place-items-center">
                <img className="size-4" src={IconUser} alt="" />
                <p>Estimated delivery time</p>
              </div>

              <div className="flex gap-2 place-items-center">
                <img className="size-4" src={IconUser} alt="" />
                <p>Estimate shipping costs</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddressInput;