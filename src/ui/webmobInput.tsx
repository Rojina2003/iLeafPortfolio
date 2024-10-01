/// <reference types="vite-plugin-svgr/client" />

import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import appStore from "../assets/images/webMob/appStore.svg";
import googlePlay from "../assets/images/webMob/googlePlay.svg";

interface WebmobInputProps {
  title: string;
  companyName: string;
  description: string[];
  onPrev: () => void; 
  onNext: () => void; 
  isPrevDisabled: boolean; 
  isNextDisabled: boolean; 
}

export const WebmobInput = ({
  title,
  companyName,
  description,
  onPrev,
  onNext,
  isPrevDisabled,
  isNextDisabled,
}: WebmobInputProps) => {
  return (
    <div className="bg-white rounded-[20px]  grid  font-primary  ">
      <div className="  flex justify-between  pt-5 ">
        <div>
          <h1 className="font-bold text-[10px]">{title}</h1>
        </div>
        <div className="flex gap-2 lg:hidden">
          <button
            onClick={onPrev}
            disabled={isPrevDisabled}
            className={` w-7 h-7 rounded-full border-[2px] border-black border-opacity-20 flex justify-center items-center ${
              isPrevDisabled
                ? "bg-primary-bg text-black opacity-20"
                : "bg-black text-white"
            }`}
          >
            <GoArrowLeft size={20} />
          </button>
          <button
            onClick={onNext}
            disabled={isNextDisabled}
            className={`w-7 h-7  rounded-full border-[2px] border-black border-opacity-20 flex justify-center items-center ${
              isNextDisabled
                ? "bg-primary-bg text-black opacity-20"
                : "bg-black text-white"
            }`}
          >
            <GoArrowRight size={20} />
          </button>
        </div>
      </div>
      <h3 className="font-light text-[30px] ">{companyName}</h3>
      <div className="font-medium text-sm leading-[21px] lg:py-0 py-5 w-full space-y-5">
        {description.map((desc, index) => (
          <div key={index}>{desc}</div>
        ))}
      </div>

      <div className="lg:flex hidden items-end pb-3 gap-[13px]">
        <img src={appStore} className="h-fit w-fit" />
        <img src={googlePlay} className="h-fit w-fit" />
      </div>
    </div>
  );
};
