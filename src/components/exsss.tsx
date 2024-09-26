import { useState } from "react";
import { WebmobInput } from "../ui/webmobInput";
import ContentWrapper from "../ui/wrappers";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import roost4 from "../assets/images/webMob/roost/roost4.png";
import roost3 from "../assets/images/webMob/roost/roost3.png";
import roost1 from "../assets/images/webMob/roost/roost1.png";
import roost2 from "../assets/images/webMob/roost/roost2.png";
import roost5 from "../assets/images/webMob/roost/roost5.png";
import Tick from "../assets/images/webMob/roost/tick.svg?react";
import crunch1 from "../assets/images/webMob/crunch/crunch1.png";
import crunch2 from "../assets/images/webMob/crunch/crunch2.png";
import crunch3 from "../assets/images/webMob/crunch/crunch3.png";
import crunch4 from "../assets/images/webMob/crunch/crunch4.png";
import bio1 from "../assets/images/webMob/biotecnika/bio1.png";
import bio2 from "../assets/images/webMob/biotecnika/bio2.png";
import bio3 from "../assets/images/webMob/biotecnika/bio3.png";
import bio4 from "../assets/images/webMob/biotecnika/bio4.png";
import odin1 from "../assets/images/webMob/odin/odin1.png";
import odin2 from "../assets/images/webMob/odin/odin2.png";
import odin3 from "../assets/images/webMob/odin/odin3.png";
import sancharam1 from "../assets/images/webMob/sancharam/sancharam1.png";
import sancharam2 from "../assets/images/webMob/sancharam/sancharam2.png";
import sancharam3 from "../assets/images/webMob/sancharam/sancharam3.png";

const webmobData: {
  [key: string]: {
    title: string;
    description: string[];
    inputs: {
      description: string[];
      companyName: string;
      gridElements: JSX.Element;
    }[];
  };
} = {
  "IOT Solutions": {
    title: "IOT Solutions",
    description: [
      "Roost App is a highly secure smart home mobile app for homeowners and commercial insurance with smart, in-home solutions.",
      "It lets you set up and stay informed about the status of your Roost smart Devices.",
      "Hybrid App developed in React Native Platform.",
    ],
    inputs: [
      {
        description: [
          "Roost App is a highly secure smart home mobile app for homeowners and commercial insurance with smart, in-home solutions.",
          "It lets you set up and stay informed about the status of your Roost smart Devices.",
          "Hybrid App developed in React Native Platform.",
        ],
        companyName: "Roost",
        gridElements: (
          <div className="grid grid-cols-3 gap-[11px] bg-white">
            <div className="grid gap-[11px] ">
              <div className="bg-primary-bg  rounded-[20px] bg-[url('/src/assets/images/webMob/roost/roostbg.png')] bg-no-repeat flex items-center justify-center text-center">
                <p className="text-xs font-normal ">
                  Their products are helping to make homes
                  <p className="font-semibold text-xl">
                    safer <span className="font-normal text-xs">& more </span>
                    secure
                  </p>
                </p>
              </div>
              <div className="bg-primary-bg rounded-[20px] flex justify-center items-center">
                <img src={roost4} className="py-[23px]" />
              </div>
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-2 w-fit gap-[11px]">
                <div className="bg-primary-bg rounded-[20px] flex justify-center items-center col-span-2 px-6 py-8">
                  <h1 className="font-primary text-xs">
                    Professional monitoring for ultimate peace of mind
                  </h1>
                </div>
                <div className="bg-primary-bg rounded-[20px] flex items-center justify-center">
                  <img src={roost3} />
                </div>
                <div className="bg-primary-bg rounded-[20px] row-span-2 flex flex-col items-center justify-center">
                  <h1 className="text-xs py-5">Awards</h1>
                  <img srcSet={roost1} />
                  <img srcSet={roost2} className="py-[51px]" />
                </div>
                <div className="bg-[#404042] rounded-[20px] flex justify-center items-center">
                  <img src={roost5} />
                </div>
                <div className="bg-primary-bg rounded-[20px] flex justify-center items-center gap-[11px] col-span-2 px-8 py-6 ">
                  <Tick className="w-[61px] h-[61px]" />
                  <h1 className="font-normal text-xs">
                    Trusted system that prevents damage & saves money for both
                    homeowners & insurers
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  "Healthcare & Fitness": {
    title: "Healthcare & Fitness",
    description: [
      "FitnessPro App helps users stay on track with their fitness goals.",
      "Provides personalized workout plans and health metrics.",
      "Built using cutting-edge mobile technology.",
    ],
    inputs: [
      {
        description: [
          "Crunch is best known for our colorful personality and kickass group fitness and training programs that are only at Crunch.",
          "With two brands, and a variety of membership options with no long-term commitments, the right Crunch experience is ready for you.",
          "Crunch offers fitness classes, designed for all, from beginner to expert, Crunch+ online video workouts, HydroMassage beds, tanning, multi-club access and guest privileges",
        ],
        companyName: "Crunch",
        gridElements: (
          <div className="grid grid-cols-3 gap-[11px] bg-white font-primary  ">
            <div className="bg-primary-bg rounded-[20px] flex flex-col justify-center col-span-2 items-center px-5 ">
              <p className="text-xs font-normal">
                Recognized for outstanding franchising achievements including
              </p>
              <p className="text-xl font-semibold">
                Entrepreneur's Franchise 500 10+ Club
              </p>
            </div>
            <div className="bg-primary-bg rounded-[20px] row-span-2 flex justify-center items-center ">
              <img src={crunch2} />
            </div>
            <div className="bg-primary-bg rounded-[20px] flex justify-center items-center ">
              <img src={crunch4} />
            </div>
            <div className="bg-primary-bg rounded-[20px] flex justify-center items-center ">
              <p className="text-xs font-normal text-center">
                Achieved dynamic growth in the high-value, low-price fitness
                industry
              </p>
            </div>
            <div className="bg-primary-bg  rounded-[20px] bg-[url('/src/assets/images/webMob/crunch/crunchbg.png')] bg-no-repeat flex  justify-center items-center ">
              <div className=" text-center  ">
                <p className="text-xs font-normal">Climbed the ranks to </p>
                <p className="text-xl font-semibold">
                  #39<span className="text-xs font-normal">in </span>
                </p>
                <p className="text-xs font-normal">
                  Entrepreneur's 44th Annual Franchise 500® ranking
                </p>
              </div>
            </div>
            <div className="bg-[#404042] rounded-[20px] col-span-2 flex   ">
              <div className="flex justify-center items-center px-5">
                <img className="h-fit w-fit" src={crunch3} />
              </div>
              <div className="flex px-5 pt-5 ">
                <img src={crunch1} />
              </div>
            </div>
          </div>
        ),
      },
      
    ],
  },
  eLearning: {
    title: "ELEARNING",
    description: [
      "BiotecNika is an eLearning, eCommerce and Biotech Infopedia website and mobile application for the exclusive use by Life Scie-nces students and researches. A comprehensive online resource for Biotechnology students.",
      "",
      "The app is built with the aim to create an interactive platform which could provide unprecedented support to novice biotech students and researches in their day today doubts and also to increase the awareness among the students about this field and introduce the various upcoming areas of research.",
    ],
    inputs: [
      {
        description: [
          "BiotecNika is an eLearning, eCommerce and Biotech Infopedia website and mobile application for the exclusive use by Life Scie-nces students and researches. A comprehensive online resource for Biotechnology students.",
          "",
          "The app is built with the aim to create an interactive platform which could provide unprecedented support to novice biotech students and researches in their day today doubts and also to increase the awareness among the students about this field and introduce the various upcoming areas of research.",
        ],
        companyName: "BiotecNika",
        gridElements: (
          <div className="grid grid-cols-3 gap-[11px] bg-white font-primary  ">
            <div className="bg-primary-bg rounded-[20px] col-span-2 flex flex-col justify-center items-center px-5 ">
              <p className=" text-xs ">
                BioTecNika has grown into one of
                <p className="text-xl font-semibold leading-6">
                  India's largest magazines in the field of biotechnology
                </p>
              </p>
            </div>
            <div className="bg-[#404042] rounded-[20px] row-span-2 relative overflow-hidden">
              <img src={bio2} className="absolute left-4 top-4 " />
              <img src={bio3} className="absolute -bottom-5 right-4 " />
            </div>
            <div className="bg-primary-bg rounded-[20px] flex justify-center items-center ">
              <p className="text-xs text-center">
                {" "}
                Launched a web TV channel, expanding their reach beyond print
                media
              </p>
            </div>
            <div className="bg-primary-bg rounded-[20px] bg-[url('/src/assets/images/webMob/biotecnika/bioBg1.png')] bg-no-repeat  flex justify-center items-center ">
              <p className="text-center text-xs font-normal ">
                Over<p className="text-xl font-semibold ">1L+</p>downloads on
                Play Store
              </p>
            </div>
            <div className="bg-primary-bg rounded-[20px] flex justify-center items-center ">
              <img src={bio1} />
            </div>
            <div className="bg-primary-bg rounded-[20px] col-span-2 bg-[url('/src/assets/images/webMob/biotecnika/biobg.png')] bg-no-repeat flex justify-center items-center ">
              <img src={bio4} className="h-[75%] w-[75%] " />
            </div>
          </div>
        ),
      },
      {
        description: [
          "Odin Education offers one of the only complete digital eLearning solution in the country of South Africa.",
          "The Android tablet, which is part of the Odin Education ecosystem, is designed to give every South African child a digital identity and connection to the online world.",
          "This ed-tech platform is designed to give learners unprecedented free access - via the Omang tablet - to world-class digital learning resources at the tap of a button",
        ],
        companyName: "Odin Education",
        gridElements: (
          <div className="grid grid-cols-4 gap-[11px] bg-white font-primary  ">
            <div className="bg-primary-bg rounded-[20px] col-span-2  bg-[url('/src/assets/images/webMob/crunch/crunchbg.png')] bg-no-repeat flex justify-center items-center  ">
              <p className=" text-xl font-semibold">
                126,351+
                <p className="text-xs font-normal ">
                  High number of engagement Hours
                </p>
              </p>
            </div>
            <div className="bg-primary-bg rounded-[20px] col-span-2 flex justify-center items-center  ">
              <img src={odin1} />
            </div>
            <div className="bg-primary-bg rounded-[20px] col-span-2 flex justify-center items-center px-5 ">
              <p className="text-xs font-normal">
                Focuses on providing under-resourced schools with digital
                learning materials
              </p>
            </div>
            <div className="bg-primary-bg col-span-2  rounded-[20px] flex justify-center items-center px-5  ">
              <p className="text-xs font-normal">
                Odin Education works with corporations to fulfill their social
                investment initiatives
              </p>
            </div>
            <div className="bg-primary-bg rounded-[20px] flex ">
              <img src={odin3} />
            </div>
            <div className="bg-[#404042] col-span-3 rounded-[20px] bg-[url('/src/assets/images/webMob/odin/odinbg.png')] bg-no-repeat bg-right-top flex justify-center items-end ">
              <img src={odin2} />
            </div>
          </div>
        ),
      },
      
    ],
  },
  
 
  "Travel & Hospitality": {
    title: "TRAVEL & HOSPITALITY",
    description: [],
    inputs: [
      {
        description: [
          "Dream of traveling the world like Santhosh George Kulangara? The Sancharam app helps you save small amounts weekly, making your travel dreams a reality",
          "Choose your destination, set your savings goal, and let Sancharam handle the rest. Start preparing for your journey with confidence!",
        ],
        companyName: "Sancharam",
        gridElements: (
          <div className="grid grid-cols-3 gap-[11px] bg-white font-primary  ">
            <div className="bg-primary-bg rounded-[20px] col-span-2 flex flex-col justify-center items-center px-5 ">
              <p className="text-xs font-normal text-center px-5 ">
                Expansion of Global Reach
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#BAEF02] to-[#D9F189]  rounded-[20px] flex items-end row-span-2 pt-10 ">
              <img src={sancharam1} />
            </div>
            <div className="bg-primary-bg rounded-[20px] flex justify-center items-center ">
              <p className=" text-center  text-xs px-5 font-normal ">
                Integration of Advanced Technology
              </p>
            </div>
            <div className="bg-primary-bg rounded-[20px] bg-[url('/src/assets/images/webMob/biotecnika/bioBg1.png')] bg-no-repeat flex justify-center items-center ">
              <p className="text-xs px-5 text-center font-normal">
                Exceptional Customer Service
              </p>
            </div>
            <div className="bg-[#404042]  rounded-[20px] flex justify-center items-center ">
              <img src={sancharam2} />
            </div>
            <div className=" rounded-[20px] col-span-2 flex justify-center items-center ">
              <img src={sancharam3} className="h-full w-fit " />
            </div>
          </div>
        ),
      },
    ],
  },
};
export const WebMob = () => {
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof webmobData>("IOT Solutions");
  const [currentInputIndex, setCurrentInputIndex] = useState(0);

  const handleCategoryClick = (category: keyof typeof webmobData) => {
    setActiveCategory(category);
    setCurrentInputIndex(0);
  };

  const handleNextInput = () => {
    const totalInputs = webmobData[activeCategory].inputs.length;
    if (currentInputIndex < totalInputs - 1) {
      setCurrentInputIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevInput = () => {
    if (currentInputIndex > 0) {
      setCurrentInputIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <ContentWrapper>
      <div className="lg:flex py-40 space-x-5 font-primary">
        <div className="space-y-4 w-1/4 bg-white ">
          {Object.keys(webmobData).map((category) => (
            <h1
              key={category}
              className={`cursor-pointer p-2 rounded-lg transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-primary-bg font-bold text-black"
                  : ""
              }`}
              onClick={() =>
                handleCategoryClick(category as keyof typeof webmobData)
              }
            >
              {category}
            </h1>
          ))}
        </div>
        <div className="bg-primary-bg rounded-[20px] px-[15px] w-full py-[15px]  font-primary">
          <div className="flex bg-white lg:h-[500px] px-3 py-3 rounded-2xl">
            {webmobData[activeCategory] && (
              <WebmobInput
                title={webmobData[activeCategory].title}
                companyName={
                  webmobData[activeCategory].inputs[currentInputIndex]
                    .companyName
                }
                description={
                  webmobData[activeCategory].inputs[currentInputIndex]
                    .description
                }
              />
            )}
            {webmobData[activeCategory].inputs[currentInputIndex].gridElements}
          </div>
          <div className=" p-5 flex justify-end">
            <button
              onClick={handlePrevInput}
              disabled={currentInputIndex === 0}
              className={`mr-2  w- rounded-full border-[2px] h-10 w-10 border-black border-opacity-20 flex justify-center items-center ${
                currentInputIndex === 0
                  ? "bg-primary-bgtext-black opacity-20 "
                  : "bg-black text-white"
              }`}
            >
              <GoArrowLeft size={30} />
            </button>
            <button
              onClick={handleNextInput}
              disabled={
                currentInputIndex ===
                webmobData[activeCategory].inputs.length - 1
              }
              className={` w- rounded-full border-[2px] h-10 w-10 border-black border-opacity-20 flex justify-center items-center ${
                currentInputIndex ===
                webmobData[activeCategory].inputs.length - 1
                  ? "bg-primary-bg text-black opacity-20 "
                  : "bg-black text-white"
              }`}
            >
              <GoArrowRight size={30} />
            </button>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};
