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
}

const SuccessStoryInput: React.FC<SuccessStoryInputProps> = ({
  companyName,
  companyTagline,
  trustedByLogos = [],
  achievements = [],
  trustedBy,
}) => {
  return (
    <div className="max-w-[800px] h-fit ">
      <div className="flex items-center font-primary border-b-[3px] pb-2">
        <div className="flex items-center">
          <img src={logo1} alt="Company Logo" />
          <div className="pl-1 pr-[36px] space-y-[-20px]">
            <p className="text-xl font-medium">{companyTagline}</p>
            <p className="text-[65px] font-semibold text-[#628B00]">
              {companyName}
            </p>
          </div>
        </div>
        <div className="space-y-[8px] border-l-2 p-[19px]">
          <h1>{trustedBy}</h1>
          <div className="flex justify-evenly">
            {trustedByLogos.map((logo, index) => (
              <img key={index} src={logo} alt={`Trusted by logo ${index}`} />
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
            <h1 className="font-medium text-lg  leading-[27px]">
              {achievement.description}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStoryInput;
