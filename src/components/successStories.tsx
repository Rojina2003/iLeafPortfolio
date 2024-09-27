/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import ContentWrapper from "../ui/wrappers";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import roost1 from "../assets/images/successStories/roost1.svg";
import roost2 from "../assets/images/successStories/roost2.svg";
import CrunchLogo from "../assets/images/successStories/Crunch.svg";
import letshegoLogo from "../assets/images/successStories/letshego.svg";
import ixlayerLogo from "../assets/images/successStories/ixlayer.svg";
import mudanoLogo from "../assets/images/successStories/mudano.svg";
import picterusLogo from "../assets/images/successStories/picterus.svg";
import roostLogo from "../assets/images/successStories/roost.svg";
import sworkitLogo from "../assets/images/successStories/sworkit.svg";
import yourCauseLogo from "../assets/images/successStories/yourCause.svg";
import mudano1 from "../assets/images/successStories/mudanologo.svg";
import ixlayer1 from "../assets/images/successStories/ixlayerlogo.svg";
import picterus1 from "../assets/images/successStories/picteruslogo.svg";
import yourcause1 from "../assets/images/successStories/yourcauselogo.svg";
import crunch1 from "../assets/images/successStories/crunchlogo1.svg";
import crunch2 from "../assets/images/successStories/crunchlogo2.svg";
import crunch3 from "../assets/images/successStories/crunchlogo3.svg";
import sworkit1 from "../assets/images/successStories/sworkitlogo.svg";
import letshego1 from "../assets/images/successStories/letshegologo1.svg";
import letshego2 from "../assets/images/successStories/letshegologo2.svg";
import bg1 from "../assets/images/successStories/bg-1.png";
import bg2 from "../assets/images/successStories/bg-2.png";
import SuccessStoryInput from "../ui/successStoryInput";

const successStoriesData = [
  {
    companyName: "Roost",
    companyTagline: "IOT Solutions",
    trustedBy: "Trusted By",
    trustedByLogos: [roost1, roost2],
    achievements: [
      {
        description:
          "Established valuable partnerships with major insurance companies like Armed Forces Insurance, Church Mutual, etc.",
      },
      {
        description:
          "Winner of the IF design Award & TDI LIVE North America InsurTech Award 2020.",
      },
    ],
    logo: roostLogo,
  },
  {
    companyName: "Mudano",
    companyTagline: "Fintech",
    trustedByLogos: [mudano1],
    trustedBy: "Part of",
    achievements: [
      {
        description: "Mudano R&D got Team of the Year - UK 2024 FinTech award",
      },
      {
        description: "Acquired by Accenture in 2020",
      },
    ],
    logo: mudanoLogo,
  },
  {
    companyName: "ixlayer",
    companyTagline: "Healthcare",
    trustedBy: "Partnered with ",
    trustedByLogos: [ixlayer1],
    achievements: [
      {
        description:
          "ixlayer has joined the Innovators Network at the American Heart Association Center for Health Technology & Innovation.",
      },
      {
        description: "Raised over $75 m in funding on March 2021",
      },
    ],
    logo: ixlayerLogo,
  },
  {
    companyName: "Picterus",
    companyTagline: "Healthcare",
    trustedBy: "Partnered with",
    trustedByLogos: [picterus1],
    achievements: [
      {
        description:
          "Intermountain Health and Picterus AS Partnered to Study New Technology for Jaundice Screening on March 2024.",
      },
      {
        description: "Received over  $3M from the European innovation council",
      },
    ],
    logo: picterusLogo,
  },
  {
    companyName: "YourCause",
    companyTagline: "CSR Solution",
    trustedBy: "Part Of ",
    trustedByLogos: [yourcause1],
    achievements: [
      {
        description:
          "Recognized as a Top Ten HR Technology Solution by CIOReview",
      },
      {
        description: "Acquired by Blackbaud for $157M in 2019",
      },
    ],
    logo: yourCauseLogo,
  },
  {
    companyName: "Crunch",
    companyTagline: "Fitness",
    trustedBy: "Partnered with ",
    trustedByLogos: [crunch1, crunch2, crunch3],
    achievements: [
      {
        description:
          "Matterport partners with Crunch Fitness to offer advanced photography services",
      },
      {
        description: "Raised over $21.1M funding In 2020",
      },
    ],
    logo: CrunchLogo,
  },
  {
    companyName: "Sworkit",
    companyTagline: "Fitness",
    trustedBy: "Acquired by ",
    trustedByLogos: [sworkit1],
    achievements: [
      {
        description:
          "Established valuable partnerships with major insurance companies like Armed Forces Insurance, Church Mutual, etc.",
      },
      {
        description:
          "Winner of the IF design Award & TDI LIVE North America InsurTech Award 2020.",
      },
    ],
    logo: sworkitLogo,
  },
  {
    companyName: "Letshego",
    companyTagline: "Banking & Finance",
    trustedBy: "Trusted By",
    trustedByLogos: [letshego1, letshego2],
    achievements: [
      {
        description:
          "Established valuable partnerships with major insurance companies like Armed Forces Insurance, Church Mutual, etc.",
      },
      {
        description:
          "Winner of the IF design Award & TDI LIVE North America InsurTech Award 2020.",
      },
    ],
    logo: letshegoLogo,
  },
];

const calculateLogoPosition = (
  index: number,
  activeIndex: number,
  totalLogos: number
) => {
  const angle = 170 / (totalLogos - 1);
  const radius = 300;

  const currentAngle =
    angle * (index - activeIndex + Math.floor(totalLogos / 2));

  const x = -Math.sin((currentAngle * Math.PI) / 180) * radius;
  const y = Math.cos((currentAngle * Math.PI) / 180) * radius;

  return { x, y };
};

export const SuccessStories = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number>(3);

  const handleScroll = (direction: "up" | "down") => {
    setActiveIndex((prevIndex) => {
      if (direction === "up" && prevIndex > 0) {
        return prevIndex - 1;
      } else if (
        direction === "down" &&
        prevIndex < successStoriesData.length - 1
      ) {
        return prevIndex + 1;
      }
      return prevIndex;
    });
  };

  const updateScrollButtons = () => {
    setCanScrollUp(activeIndex > 0);
    setCanScrollDown(activeIndex < successStoriesData.length - 1);
  };

  useEffect(() => {
    updateScrollButtons();
  }, [activeIndex]);

  return (
    <div className="relative overflow-hidden">
      <img src={bg1} className="absolute bottom-0" />
      <img src={bg2} className="absolute top-0 right-0" />
      <ContentWrapper>
        <div className="lg:flex font-extralight font-primary items-center lg:max-w-[80%] lg:py-[100px] space-x-2 relative ">
          <div>
            <h1 className="lg:text-[40.86px] text-[26px] pb-[18px] lg:pb-[145px]">Success Stories</h1>
            <div className="relative">
              <div
                ref={scrollRef}
                className="h-[310px] overflow-auto scrollbar-hide"
                style={{ scrollBehavior: "smooth" }}
              >
                <SuccessStoryInput
                  companyName={successStoriesData[activeIndex].companyName}
                  companyTagline={
                    successStoriesData[activeIndex].companyTagline
                  }
                  trustedBy={successStoriesData[activeIndex].trustedBy}
                  trustedByLogos={
                    successStoriesData[activeIndex].trustedByLogos
                  }
                  achievements={successStoriesData[activeIndex].achievements}
                />
              </div>
              <div className="lg:hidden flex justify-center mt-4">
                <div className="transition-transform duration-300">
                  <img
                    src={successStoriesData[activeIndex].logo}
                    alt={successStoriesData[activeIndex].companyName}
                    className={`w-[90px] h-[90px] transition-transform duration-300 ${
                      activeIndex === activeIndex ? "scale-150" : ""
                    }`}
                  />
                </div>
              </div>
              <div className="flex gap-[5px] mt-4">
                <button
                  className={`h-10 w-10 rounded-full flex items-center justify-center text-2xl cursor-pointer z-10 ${
                    canScrollUp ? "bg-[#97C529] text-black" : "bg-gray-400"
                  }`}
                  onClick={() => handleScroll("up")}
                  disabled={!canScrollUp}
                >
                  <GoArrowLeft />
                </button>
                <button
                  className={`h-10 w-10 rounded-full flex items-center justify-center text-2xl cursor-pointer z-10 ${
                    canScrollDown ? "bg-black text-white" : "bg-gray-400"
                  }`}
                  onClick={() => handleScroll("down")}
                  disabled={!canScrollDown}
                >
                  <GoArrowRight />
                </button>
              </div>
            </div>
          </div>

          <div className="relative pl-[400px] pb-10 lg:block hidden">
            {/* Semicircle logos */}
            {successStoriesData.map((story, index) => {
              const { x, y } = calculateLogoPosition(
                index,
                activeIndex,
                successStoriesData.length
              );

              return (
                <div
                  key={index}
                  className={`absolute overflow-hidden transition-transform duration-500 ease-in-out ${
                    index === activeIndex ? "active-logo" : ""
                  }`}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    opacity: index === activeIndex ? 1 : 0.5,
                    zIndex: index === activeIndex ? 10 : 1,
                  }}
                >
                  <div
                    className={`w-[160px] h-[160px]  flex items-center justify-center transition-all duration-500 ${
                      index === activeIndex ? "scale-125" : ""
                    }`}
                  >
                    <img
                      src={story.logo}
                      alt={story.companyName}
                      className={`w-[60%] h-[60%] p-2 transition-transform duration-300 ${
                        index === activeIndex ? "scale-150" : ""
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Show only the active logo for small screens */}
        </div>
      </ContentWrapper>
    </div>
  );
};
