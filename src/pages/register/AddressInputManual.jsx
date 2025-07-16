import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconRemove from "../../assets/images/IconRemove.png";


function AddressInputManual() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/registersuccess");
  };

  return (
    <div className="card-container1 flex flex-col gap-7">
      <div className="flex flex-row justify-between">
        <h5 className="flex flex-row place-items-baseline gap-4 font-semibold text-[20px]">
          Add address
          <span className="text-[#6BC62D] text-[14px] font-bold">3 of 3</span>
        </h5>
        <img className="size-6" src={IconRemove} alt="closebutton" />
      </div>

      <div>
        <form action="">
          {/* street address input */}
          <div className=" flex flex-col gap-5">
            <div className=" flex flex-col px-3 py-1 border-2 rounded-xl border-[#dddddd] active:border-2-[#5932EA] focus:border-[#5932EA]">
              <span className="text-[14px] text-[#1A0710A6]">
                Street address
              </span>
              <div className="flex flex-row justify-between gap-3">
                <input
                  width={100}
                  type="text"
                  placeholder="Enter street address"
                  required
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Apartment input */}
            <div className="relative">
              <input
                className=" p-3 border-2 border-[#dddddd] w-full rounded-xl "
                type="tel"
                name="bday"
                id="birthday"
                placeholder="Apartment"
              />
              <div className="flex gap-2 place-items-center absolute right-3 top-4">
                <p className="text-[14px] text-[#1A071066]"> Optional </p>
              </div>
            </div>

            {/* city input */}

            <div className="field-content flex flex-col  px-3 py-1 border-2 rounded-lg border-[#dddddd] active:border-[#5932EA] ">
              <span className="text-[14px] text-[#1A0710A6]">City</span>
              <div className="flex flex-row justify-between">
                <input
                  type="text"
                  placeholder="New York City"
                  required
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  maxLength={8}
                />
              </div>
            </div>

          {/* state and zip code */}
            <div className="flex gap-3 mb-15">
              <div className="flex flex-col w-[200px] px-3 py-1 border-2 rounded-xl border-[#ddd] active:border-[#5932EA]">
                <span className="text-[14px] text-[#1A0710A6]">State</span>
                <div className="flex flex-row justify-between">
                  <input
                    type="text"
                    placeholder="Enter state"
                    required
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    maxLength={8}
                  />
                </div>
              </div>
               
              <div className="flex flex-col w-[200px] px-3 py-1 border-2 rounded-xl border-[#ddd] active:border-[#5932EA]">
                <span className="text-[14px] text-[#1A0710A6]">Zip code</span>
                <div className="flex flex-row justify-between">
                  <input
                    type="text"
                    placeholder="Enter zip code"
                    required
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    maxLength={8}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={handleClick}
              className=" hover:shadow-lg mb-2"
              type="submit"
            >
              Save Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddressInputManual 