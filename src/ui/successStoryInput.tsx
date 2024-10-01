import React from "react";
import logo1 from "../assets/images/successStories/successlogo1.svg";
import logo2 from "../assets/images/successStories/successlogo2.svg";

interface Achievement {
  description: string;
}

interface SuccessStoryInputProps {
  companyName: string;
  companyTagline: string;
  trustedByLogos?: string[];
  achievementsTitle?: string;
  achievements?: Achievement[];
  trustedBy?: string
  className?: string;
}

const SuccessStoryInput: React.FC<SuccessStoryInputProps> = ({
  companyName,
  companyTagline,
  trustedByLogos = [],
  achievements = [],
  trustedBy,
  className,
}) => {
  return (
    <div className={` ${className}`}>
      <div className="flex items-center font-primary border-b-[3px] lg:gap-36 gap-8 pb-2">
        <div className="flex  items-center">
          <img src={logo1} className="lg:h-fit lg:w-fit h-[25%] w-[25%] " />
          <div className="pl-1 pr-[36px] lg:space-y-[-20px] space-y-[-10px]">
            <p className="lg:text-xl text-[14.2px] font-medium">{companyTagline}</p>
            <p className="lg:text-[65px] text-[40px]  font-semibold text-[#628B00]">
              {companyName}
            </p>
          </div>
        </div>
        <div className="space-y-[8px] lg:text-xs text-[8.6px]  border-l-2 p-[19px]">
          <h1>{trustedBy}</h1>
          <div className="flex items-center justify-evenly">
            {trustedByLogos.map((logo, index) => (
              <img key={index} src={logo} className="lg:h-fit lg:w-fit h-[50%] w-[50%] " />
            ))}
          </div>
        </div>
      </div>
      <div className="p-[12px]">
        <h1 className="p-[10px] bg-[#BAEF02] rounded-[5px] w-fit font-medium text-xs ">
          Achievements
        </h1>
      </div>
      <div className="space-y-[26px]">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start space-x-2">
            <img src={logo2} alt={`Achievement logo ${index}`} />
            <h1 className="font-medium lg:text-lg text-xs leading-[27px]">
              {achievement.description}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStoryInput;
