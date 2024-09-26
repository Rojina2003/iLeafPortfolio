/// <reference types="vite-plugin-svgr/client" />

import appStore from "../assets/images/webMob/appStore.svg";
import googlePlay from "../assets/images/webMob/googlePlay.svg";

interface WebmobInputProps {
  title: string;
  companyName: string;
  description: string[];
}

export const WebmobInput = ({
  title,
  companyName,
  description,
}: WebmobInputProps) => {
  return (
    <div className="bg-white rounded-[20px] lg:max-w-[40%] grid p-5 space-x-3 font-primary  ">
      <h1 className="font-bold text-[10px]">{title}</h1>
      <h3 className="font-light text-[30px] ">{companyName}</h3>
      <div className="font-medium text-sm leading-[21px] space-y-5">
        {description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
      <div className="flex  gap-[13px]">
        <img src={appStore}  className="h-fit w-fit" />
        <img src={googlePlay}  className="h-fit w-fit" />
      </div>
    </div>
  );
};
