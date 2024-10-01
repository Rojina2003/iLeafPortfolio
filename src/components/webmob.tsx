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
import sworkit1 from "../assets/images/webMob/sworkit/sworkit1.png";
import sworkit2 from "../assets/images/webMob/sworkit/sworkit2.png";
import sworkit3 from "../assets/images/webMob/sworkit/sworkit3.png";
import sworkit4 from "../assets/images/webMob/sworkit/sworkit4.png";
import sworkit8 from "../assets/images/webMob/sworkit/sworkit8.png";
import bio1 from "../assets/images/webMob/biotecnika/bio1.png";
import bio2 from "../assets/images/webMob/biotecnika/bio2.png";
import bio4 from "../assets/images/webMob/biotecnika/bio4.png";
import odin1 from "../assets/images/webMob/odin/odin1.png";
import odin2 from "../assets/images/webMob/odin/odin2.png";
import odin3 from "../assets/images/webMob/odin/odin3.png";
import bmjme1 from "../assets/images/webMob/bmjme/bmjme1.png";
import bmjme2 from "../assets/images/webMob/bmjme/bmjme2.png";
import bmjme3 from "../assets/images/webMob/bmjme/bmjme3.png";
import bmjme7 from "../assets/images/webMob/bmjme/bmjme7.png";
import ekool1 from "../assets/images/webMob/ekool/ekool1.png";
import ekool2 from "../assets/images/webMob/ekool/ekool2.png";
import ekool3 from "../assets/images/webMob/ekool/ekool3.png";
import scandlearn1 from "../assets/images/webMob/scandlearn/scandlearn1.png";
import scandlearn2 from "../assets/images/webMob/scandlearn/scandlearn2.png";
import scandlearn3 from "../assets/images/webMob/scandlearn/scandlearn3.png";
import scandlearn from "../assets/images/webMob/scandlearn/scandlearn.png";
import logically1 from "../assets/images/webMob/logically/logically1.png";
import logically2 from "../assets/images/webMob/logically/logically2.png";
import logically3 from "../assets/images/webMob/logically/logically3.png";
import driveitaway1 from "../assets/images/webMob/driveitaway/driveitaway1.png";
import driveitaway2 from "../assets/images/webMob/driveitaway/driveitaway2.png";
import driveitaway3 from "../assets/images/webMob/driveitaway/driveitaway3.png";
import driveitaway5 from "../assets/images/webMob/driveitaway/driveitaway5.png";
import joyn1 from "../assets/images/webMob/joyn/joyn1.png";
import joyn2 from "../assets/images/webMob/joyn/joyn2.png";
import joyn3 from "../assets/images/webMob/joyn/joyn3.png";
import joyn4 from "../assets/images/webMob/joyn/joyn4.png";
import tuvu1 from "../assets/images/webMob/tuvu/tuvu1.png";
import tuvu2 from "../assets/images/webMob/tuvu/tuvu2.png";
import tuvu3 from "../assets/images/webMob/tuvu/tuvu3.png";
import shoot1 from "../assets/images/webMob/shoot/shoot1.png";
import shoot2 from "../assets/images/webMob/shoot/shoot2.png";
import shoot4 from "../assets/images/webMob/shoot/shoot4.png";
import briind1 from "../assets/images/webMob/briind/briind1.png";
import briind2 from "../assets/images/webMob/briind/briind2.png";
import briind3 from "../assets/images/webMob/briind/briind3.png";
import cuia1 from "../assets/images/webMob/cuia/cuia1.png";
import cuia2 from "../assets/images/webMob/cuia/cuia2.png";
import cuia3 from "../assets/images/webMob/cuia/cuia3.png";
import letshego1 from "../assets/images/webMob/letshego/letshego1.png";
import letshego2 from "../assets/images/webMob/letshego/letshego2.png";
import letshego4 from "../assets/images/webMob/letshego/letshego4.png";
import calm1 from "../assets/images/webMob/calm/calm1.png";
import calm2 from "../assets/images/webMob/calm/calm2.png";
import calm3 from "../assets/images/webMob/calm/calm3.png";
import calm4 from "../assets/images/webMob/calm/calm4.png";
import ubsport1 from "../assets/images/webMob/ubsport/ubsport1.png";
import ubsport2 from "../assets/images/webMob/ubsport/ubsport2.png";
import ubsport3 from "../assets/images/webMob/ubsport/ubsport3.png";
import yourhome1 from "../assets/images/webMob/yourhome/yourhome1.png";
import yourhome2 from "../assets/images/webMob/yourhome/yourhome2.png";
import yourhome3 from "../assets/images/webMob/yourhome/yourhome3.png";
import sell1 from "../assets/images/webMob/sell/sell1.png";
import sell2 from "../assets/images/webMob/sell/sell2.png";
import sell3 from "../assets/images/webMob/sell/sell3.png";
import sancharam1 from "../assets/images/webMob/sancharam/sancharam1.png";
import sancharam2 from "../assets/images/webMob/sancharam/sancharam2.png";
import sancharam3 from "../assets/images/webMob/sancharam/sancharam3.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

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
            <div className="bg-primary-bg rounded-[15px] flex lg:hidden justify-center items-center col-span-3 px-3 py-4">
              <h1 className="font-primary text-xs">
                Professional monitoring for ultimate peace of mind
              </h1>
            </div>
            <div className="  rounded-[20px]  flex flex-col gap-[11px] items-center  text-center">
              <div className="lg:text-xs py-9 p-3 rounded-[20px] bg-primary-bg bg-[url('/src/assets/images/webMob/roost/roostbg.png')] bg-no-repeat text-[8px] font-normal leading-[14px] ">
                Their products are helping to make homes
                <div className="font-semibold lg:text-xl text-[15px] ">
                  safer
                  <span className="font-normal lg:text-xs text-[8px]">
                    & more
                  </span>
                  secure
                </div>
              </div>
              <div className="bg-primary-bg w-full h-full rounded-[20px] flex justify-center items-center">
                <img src={roost4} className="" />
              </div>
            </div>
            <div className="col-span-2 grid gap-[11px] grid-cols-2">
              <div className="bg-primary-bg rounded-[20px] lg:flex hidden justify-center items-center col-span-2 px-6 py-8">
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
              <div className="bg-primary-bg lg:flex hidden rounded-[20px] justify-center items-center gap-[11px] col-span-2 px-8 py-6 ">
                <Tick className="w-[61px] h-[61px]" />
                <h1 className="font-normal text-xs">
                  Trusted system that prevents damage & saves money for both
                  homeowners & insurers
                </h1>
              </div>
            </div>

            <div className="bg-primary-bg lg:hidden flex rounded-[20px] justify-center items-center gap-[11px] col-span-3 px-3 py-3 ">
              <Tick className="w-[61px] h-[61px]" />
              <h1 className="font-normal text-xs">
                Trusted system that prevents damage & saves money for both
                homeowners & insurers
              </h1>
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
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-[11px] bg-white font-primary  ">
            <div className="bg-primary-bg rounded-[20px] flex flex-col justify-center col-span-2 items-center px-5 py-5 ">
              <div className="text-xs font-normal">
                Recognized for outstanding franchising achievements including
              </div>
              <div className="text-xl font-semibold">
                Entrepreneur's Franchise 500 10+ Club
              </div>
            </div>
            <div className="bg-primary-bg rounded-[20px] lg:row-span-2 flex justify-center items-center ">
              <img src={crunch2} />
            </div>
            <div className="bg-primary-bg rounded-[20px] flex justify-center items-center ">
              <img src={crunch4} />
            </div>
            <div className="bg-primary-bg rounded-[20px] flex justify-center py-5 px-5 items-center ">
              <div className="text-xs font-normal text-center">
                Achieved dynamic growth in the high-value, low-price fitness
                industry
              </div>
            </div>
            <div className="bg-primary-bg py-5 px-5 rounded-[20px] bg-[url('/src/assets/images/webMob/crunch/crunchbg.png')] bg-no-repeat flex  justify-center items-center ">
              <div className=" text-center  ">
                <div className="text-xs font-normal">Climbed the ranks to </div>
                <div className="text-xl font-semibold">
                  #39<span className="text-xs font-normal">in </span>
                </div>
                <div className="text-xs font-normal">
                  Entrepreneur's 44th Annual Franchise 500® ranking
                </div>
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
      {
        description: [
          "Sworkit is a fitness app designed to be your pocket-sized gym. Forget expensive memberships or limited schedules.",
          "Sworkit offers customizable workouts that fit your goals and time constraints, all without needing any equipment.",
          "Get fit anytime, anywhere with bodyweight exercises and on-demand coaching, making Sworkit a convenient and effective solution for anyone looking to prioritize their health.",
        ],
        companyName: "SWorkit Health",
        gridElements: (
          <div className="grid grid-cols-4 gap-[11px] bg-white font-primary  ">
            <div className="bg-primary-bg rounded-[20px] col-span-2 flex flex-col justify-center items-center px-5 ">
              <div className="text-xs ">
                Ranked
                <div className="text-xl font-semibold ">
                  #1
                  <span className="font-normal "> fitness app by the ACSM</span>
                </div>
              </div>
            </div>
            <div className="bg-primary-bg rounded-[20px] col-span-2  bg-[url('/src/assets/images/webMob/crunch/crunchbg.png')] bg-no-repeat flex justify-center items-center ">
              <img src={sworkit2} />
            </div>
            <div className="bg-primary-bg rounded-[20px] justify-end items-end   col-span-2 flex ">
              <img src={sworkit4} />
            </div>
            <div className="bg-[#404042] col-span-2  rounded-[20px]   ">
              <img src={sworkit3} className="h-full" />
            </div>
            <div className="bg-primary-bg rounded-[20px]  flex ">
              <img src={sworkit1} />
            </div>
            <div className="bg-gradient-to-r from-[#BAEF02] to-[#D9F189]  col-span-3 rounded-[20px]   ">
              <img src={sworkit8} className=" h-full " />
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
              <div className=" lg:text-xs text-[9px] ">
                BioTecNika has grown into one of
                <div className="lg:text-xl text-base font-semibold lg:leading-6 leading-4 ">
                  India's largest magazines in the field of biotechnology
                </div>
              </div>
            </div>
            <div className="bg-[#404042] rounded-[20px] row-span-2 h-full ">
              <img src={bio2} className=" h-full " />
            </div>
            <div className="bg-primary-bg rounded-[20px] flex justify-center items-center ">
              <div className="lg:text-xs text-[9px] text-center">
                {" "}
                Launched a web TV channel, expanding their reach beyond print
                media
              </div>
            </div>
            <div className="bg-primary-bg rounded-[20px] bg-[url('/src/assets/images/webMob/biotecnika/bioBg1.png')] bg-no-repeat  flex justify-center items-center ">
              <div className="text-center tlg:text-xs text-[9px] font-normal ">
                Over
                <div className="lg:text-xl text-base font-semibold ">1L+</div>
                downloads on Play Store
              </div>
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
            <div className="bg-primary-bg rounded-[20px] col-span-2 px-5 py-2 bg-[url('/src/assets/images/webMob/crunch/crunchbg.png')] bg-no-repeat flex justify-center items-center  ">
              <div className=" text-xl font-semibold">
                126,351+
                <div className="text-xs font-normal ">
                  High number of engagement Hours
                </div>
              </div>
            </div>
            <div className="bg-primary-bg rounded-[20px] px-5 col-span-2 flex justify-center items-center  ">
              <img src={odin1} />
            </div>
            <div className="bg-primary-bg rounded-[20px] col-span-2 flex justify-center items-center px-5 ">
              <div className="text-xs font-normal">
                Focuses on providing under-resourced schools with digital
                learning materials
              </div>
            </div>
            <div className="bg-primary-bg col-span-2  rounded-[20px] flex justify-center items-center px-5  ">
              <div className="text-xs font-normal">
                Odin Education works with corporations to fulfill their social
                investment initiatives
              </div>
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
      {
        description: [
          "Sworkit is a fitness app designed to be your pocket-sized gym. Forget expensive memberships or limited schedules.",
          "Sworkit offers customizable workouts that fit your goals and time constraints, all without needing any equipment.",
          "Get fit anytime, anywhere with bodyweight exercises and on-demand coaching, making Sworkit a convenient and effective solution for anyone looking to prioritize their health.",
        ],
        companyName: "British Medical Journal Medical Education",
        gridElements: (
          <div className="grid grid-cols-4 gap-[11px] bg-white font-primary  ">
            <div className="bg-primary-bg rounded-[20px] col-span-2 flex flex-col justify-center items-center  ">
              <div className="lg:text-xs text-[9px] font-normal py-3 px-5 ">
                The BMJ was one of the first major medical journals to launch a
                website and made most of its content freely available online
                since 1995
              </div>
            </div>
            <div className="bg-primary-bg rounded-[20px] col-span-2  bg-[url('/src/assets/images/webMob/crunch/crunchbg.png')] bg-no-repeat flex justify-center items-center ">
              <div className="lg:text-xs text-[9px] font-normal px-5">
                The BMJ published the first of many seminal papers on antisepsis
                by Joseph Lister in 1867{" "}
              </div>
            </div>
            <div className="bg-primary-bg rounded-[20px] col-span-2 flex ">
              <div className="flex items-end justify-end   ">
                <img src={bmjme3} />
              </div>
            </div>
            <div className="bg-[#404042] col-span-2 flex justify-center items-end rounded-[20px]   ">
              <img src={bmjme2} className="h-[80%] " />
            </div>
            <div className="bg-primary-bg rounded-[20px] lg:p-5  p-3 ">
              <img src={bmjme1} />
            </div>
            <div className="bg-[#BAEF02] overflow-hidden col-span-3 rounded-[20px] ">
              <div className="grid grid-cols-2  ">
                <div className="lg:text-xs text-[8px] font-normal p-4 flex justify-center items-center  ">
                  The BMJ Awards is a prestigious recognition program that
                  acknowledges the outstanding contributions of healthcare
                  professionals in the UK
                </div>
                <div className="relative">
                  <img src={bmjme7} className="h-[180px] absolute px-5 pt-5 " />
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        description: [
          "eKool is a quick and easy solution for bringing the students, their families, teachers, schools and school supervisors together into a connected learning community.",
          "eKool supports better learning for the students, parents are better aware of their children’s progress and the authorities have a good overview of students, teachers and what goes on in schools under their management.",
        ],
        companyName: "ekool",
        gridElements: (
          <div className="grid grid-cols-3 gap-[11px] bg-white font-primary  ">
            <div className="bg-primary-bg rounded-[20px] flex flex-col justify-center col-span-2 items-center lg:px-2 px-4 py-3 ">
              <div className="lg:text-xs text-[9px] font-normal">
                eKool is used in 90% of Estonia's school network, connecting
                students, parents and teachers
              </div>
            </div>
            <div className="bg-primary-bg rounded-[20px] row-span-2 flex  justify-center items-end ">
              <img src={ekool3} className="w-full" />
            </div>
            <div className="bg-primary-bg rounded-[20px] flex justify-center items-center ">
              <img src={ekool2} />
            </div>
            <div className="bg-primary-bg rounded-[20px] flex justify-center items-center ">
              <div className="lg:text-xs text-[9px] font-normal py-2 px-3">
                eKool saves teachers up to 50% of time spent on administrative
                tasks and fosters better communication between schools, parents
                and students
              </div>
            </div>
            <div className="bg-primary-bg rounded-[20px] bg-[url('/src/assets/images/webMob/crunch/crunchbg.png')] bg-no-repeat  flex  justify-center items-center ">
              <div className="lg:text-xs text-[9px] font-normal text-center">
                eKool is credited with reducing lesson skipping and improving
                learning results
              </div>
            </div>
            <div className="bg-[#404042] rounded-[20px] col-span-2 flex   ">
              <div className="flex justify-center items-center ">
                <img className="h-fit w-fit" src={ekool1} />
              </div>
              <div className="flex justify-center items-center ">
                <img src={ekool2} />
              </div>
            </div>
          </div>
        ),
      },
      {
        description: [
          "Scandlearn is a platform for conducting and momnitoring smart flight training in your organisation.",
          "Scandlearn offers the biggest library on the market with 80+ online courses for cabin, flight, ground crews, handling personel, flight ops, management, and techicians",
        ],
        companyName: "Scandlearn",
        gridElements: (
          <div className="grid grid-cols-3 lg:gap-[11px] gap-1 space-x-2 bg-white">
            <div className="bg-primary-bg row-span-2 px-3 py-3 rounded-[20px] bg-[url('/src/assets/images/webMob/roost/roostbg.png')] bg-no-repeat flex items-center justify-center text-center">
              <div className=" font-semibold text-xl px-5 ">
                800+
                <div className="text-xs font-normal">
                  satisfied clients around the world trust Scandlearn for their
                  language learning needs
                </div>
              </div>
            </div>
            <div className="bg-primary-bg col-span-2 rounded-[20px] flex justify-center items-center ">
              <h1 className="font-primary text-xs text-center">
                Scandlearn boasts the largest courseware library, offering over
                80+ courses to choose from
              </h1>
            </div>
            <div className="col-span-2 flex justify-between items-center lg:gap-[11px] gap-1">
              <img src={scandlearn1} className="h-fit lg:w-fit w-[70%]  " />
              <img
                src={scandlearn}
                className="lg:h-fit lg:w-fit w-[70%] h-[60%] rounded-[20px] "
              />
            </div>
            <div className="bg-primary-bg row-span-2 rounded-[20px] flex justify-center items-center ">
              {" "}
              <img src={scandlearn2} className="" />
            </div>
            <div className="bg-primary-bg rounded-[20px] col-span-2  ">
              <img srcSet={scandlearn3} className="w-full h-full " />
            </div>
            <div className="bg-primary-bg rounded-[20px]  flex justify-center items-center   col-span-2 py-[30px] px-5">
              <h1 className="font-normal text-xs text-center ">
                Scandlearn is a leader in Competency-Based Training and
                Assessment (CBTA)
              </h1>
            </div>
          </div>
        ),
      },
      {
        description: [
          "Logically is on a mission to reduce the harms associated with mis-and disinformation. ",
          "Logically has been working with governments and organizations around the globe to proactively limit the harms associated with mis-and disinformation",
        ],
        companyName: "Logically",
        gridElements: (
          <div className="grid grid-cols-3 gap-[11px] bg-white font-primary  ">
            <div className="bg-primary-bg rounded-[20px] col-span-2 flex flex-col justify-center items-center  ">
              <div className="text-xs font-normal px-5 text-center ">
                Helped safeguard US elections in 2020 and 2022 by identifying
                inauthentic accounts and disinformation campaigns.
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#BAEF02] to-[#D9F189] rounded-[20px] row-span-2 flex justify-center items-center py-[50px] ">
              <img src={logically3} />
            </div>
            <div className="bg-primary-bg rounded-[20px] col-span-2 flex justify-center items-center">
              <img src={logically2} className="h-fit  w-fit " />
            </div>
            <div className="bg-primary-bg px-5 py-5 text-center bg-[url('/src/assets/images/webMob/crunch/crunchbg.png')] bg-no-repeat flex justify-center items-center rounded-[20px]   ">
              <div className="text-xs">
                Helping to reduce the harms associated with misleading or
                deceptive information online
              </div>
            </div>
            <div className="bg-[#404042] rounded-[20px] col-span-2 flex justify-end ">
              <img src={logically1} />
            </div>
          </div>
        ),
      },
    ],
  },
  Ecommerce: {
    title: "ECOMMERCE",
    description: [
      "DriveItAway offers Pay As you go car Buying by allowing you to rent your dream vehicle before committing--and, then turning your rental payments into car payments when you want t commit.",
      "Don’t have enough down payment or are unsure you want to lay out that much upfront? Not sure if this is the car for you? DriveItAway instead. Rent it. Love it.",
      "Buy it.",
    ],
    inputs: [
      {
        description: [
          "DriveItAway offers Pay As you go car Buying by allowing you to rent your dream vehicle before committing--and, then turning your rental payments into car payments when you want t commit.",
          "Don’t have enough down payment or are unsure you want to lay out that much upfront? Not sure if this is the car for you? DriveItAway instead. Rent it. Love it.",
          "Buy it.",
        ],
        companyName: "DriveItAway",
        gridElements: (
          <div className="grid grid-cols-3 gap-[11px] bg-white font-primary  ">
            <div className="bg-primary-bg rounded-[20px] col-span-2 flex flex-col justify-center items-center py-3 px-5 ">
              <div className=" lg:text-xs text-[9px]  font-normal text-center ">
                Helps customers achieve car ownership and improve credit scores
              </div>
            </div>
            <div className="bg-[#404042] rounded-[20px] row-span-3 ">
              <img src={driveitaway3} className=" h-full " />
            </div>
            <div className="bg-primary-bg rounded-[20px] flex justify-center items-center px-3 py-3 col-span-2 ">
              <img src={driveitaway1} />
            </div>
            <div className="bg-primary-bg rounded-[20px]   flex justify-center items-center ">
              <div className="text-center lg:text-xs text-[9px] font-normal px-5 ">
                Provides flexible car access for diverse needs
              </div>
            </div>
            <div className="bg-primary-bg rounded-[20px] bg-[url('/src/assets/images/webMob/biotecnika/bioBg1.png')] bg-no-repeat flex justify-center items-center ">
              <div className="text-center lg:text-xs text-[9px] font-normal py-3 px-5 ">
                Recognition within the industry for its innovative approach to
                car acquisition.
              </div>
            </div>
            <div className="bg-[#404042] rounded-[20px] flex justify-center px-3 items-center ">
              <img src={driveitaway5} />
            </div>
            <div className="bg-gradient-to-r from-[#BAEF02] to-[#D9F189] rounded-[20px] col-span-2  flex justify-center items-center ">
              <img src={driveitaway2} className="h-[75%] w-[75%] " />
            </div>
          </div>
        ),
      },
    ],
  },
  "Oil & Gas": {
    title: "Oil & Gas",
    description: [
      "JOYN, as an AI-integrated application, stands as a potent tool in the oil and gas production industry, offering the potential to significantly enhance efficiency, profitability, and regulatory compliance.",
    ],
    inputs: [
      {
        description: [
          "JOYN, as an AI-integrated application, stands as a potent tool in the oil and gas production industry, offering the potential to significantly enhance efficiency, profitability, and regulatory compliance.",
        ],
        companyName: "Joyn FDG ",
        gridElements: (
          <div className="grid grid-cols-3 gap-[11px] bg-white">
            <div className="bg-primary-bg  rounded-[20px]  flex items-center justify-center text-center ">
              <img src={joyn2} />
            </div>
            <div className="bg-primary-bg rounded-[20px] flex justify-center items-center  px-6 py-8">
              <h1 className="font-primary text-xs">
                Improved data accuracy and quality
              </h1>
            </div>
            <div className="bg-primary-bg rounded-[20px] flex items-center justify-center">
              <h1 className="font-primary text-xs">
                Better decision-making based on real-time data
              </h1>
            </div>
            <div className="bg-primary-bg row-span-2  rounded-[20px] bg-[url('/src/assets/images/webMob/roost/roostbg.png')] bg-no-repeat flex justify-center items-center ">
              <img src={joyn4} className="py-[23px]" />
            </div>
            <div className="bg-[#404042] rounded-[20px] col-span-2 flex lg:flex-row flex-col gap-[22px] py-5 items-center justify-center">
              <img srcSet={joyn1} className="w-[55%]" />
              <img srcSet={joyn3} />
            </div>
            <div className="bg-primary-bg rounded-[20px] flex justify-center items-center py-8 ">
              <h1 className="font-primary text-xs text-center px-5  ">
                Increased efficiency in data collection processes
              </h1>
            </div>
            <div className="bg-primary-bg rounded-[20px] flex justify-center items-center gap-[11px]  px-8">
              <h1 className="font-normal text-xs text-center py-3 ">
                Reduced time and costs associated with field data collection
              </h1>
            </div>
          </div>
        ),
      },
    ],
  },
  "Social Media": {
    title: "SOCIAL MEDIA",
    description: [
      "TUVU App is a Privacy-First Social Networking app. TUVU is the safe-harbor, subscription-based social network for those seeking an alternative platform!",
      "TUVU aims to provide a space where users can connect and share with each other while feeling confident that their personal data and information ois being protected.",
    ],
    inputs: [
      {
        description: [
          "TUVU App is a Privacy-First Social Networking app. TUVU is the safe-harbor, subscription-based social network for those seeking an alternative platform!",
          "TUVU aims to provide a space where users can connect and share with each other while feeling confident that their personal data and information ois being protected.",
        ],
        companyName: "TUVU ",
        gridElements: (
          <div className="grid grid-cols-5 gap-[11px] font-primary  ">
            <div className="bg-primary-bg rounded-[20px]  col-span-4 flex flex-col justify-center items-center   ">
              <div className=" text-xs px-10 ">
                TUVU stands out by offering an
                <div className="text-xl font-semibold leading-6">
                  ad-free experience
                </div>
              </div>
            </div>
            <div className="bg-[#404042]  rounded-[20px] flex items-end row-span-2 ">
              <img src={tuvu1} className=" " />
            </div>
            <div className="bg-primary-bg rounded-[20px] px-10 col-span-2 flex justify-center items-center ">
              <div className="text-xs text-center">Growing Community</div>
            </div>
            <div className="bg-primary-bg px-10 rounded-[20px] col-span-2 bg-cover bg-[url('/src/assets/images/webMob/biotecnika/bioBg1.png')] bg-no-repeat  flex justify-center items-center ">
              <div className="text-center  text-xl font-semibold  ">
                Positive
                <div className="text-xs font-normal">User Experience</div>
              </div>
            </div>
            <div className="bg-[#404042] col-span-2 px-4 rounded-[20px] flex justify-center items-center ">
              <img src={tuvu2} />
            </div>
            <div className="bg-primary-bg rounded-[20px] col-span-3 bg-[url('/src/assets/images/webMob/biotecnika/biobg.png')] bg-no-repeat flex justify-center items-center ">
              <img src={tuvu3} className="h-fit w-fit " />
            </div>
          </div>
        ),
      },
      {
        description: [
          "Shoot the Frame is a social media website collective of photographers from around the globe.",
          "Every month three contests theme; portrait, landscape and wildlife. The themes don’t change - you can see the magnificent photography from the past finalists and winners on the home page of shoot the frame.",
          "It is a great platform to get global exposure for amateurs and professional photographers",
        ],
        companyName: "Shoot the Frame",
        gridElements: (
          <div className="grid grid-cols-3 gap-[11px] bg-white font-primary  ">
            <div className="bg-primary-bg py-3 rounded-[20px] flex flex-col justify-center col-span-2 items-center px-5 ">
              <img src={shoot4} />
            </div>
            <div className="bg-primary-bg rounded-[20px] row-span-2 flex justify-center items-end ">
              <img src={shoot1} />
            </div>
            <div className="bg-primary-bg rounded-[20px] flex justify-center items-center ">
              <div className="lg:text-xs text-[9px] font-normal px-5 text-center ">
                showcases finalist & winner photos in their gallery, potentially
                leading to increased exposure for talented photographers
              </div>
            </div>
            <div className="bg-primary-bg rounded-[20px] flex justify-center items-center ">
              <div className="lg:text-xs text-[9px] font-normal px-5 text-center ">
                Shoot The Frame as a "fantastic photo competition" that attracts
                top photographers from around the world
              </div>
            </div>
            <div className="bg-primary-bg  rounded-[20px] bg-[url('/src/assets/images/webMob/crunch/crunchbg.png')] bg-no-repeat  flex  justify-center items-center ">
              <div className="lg:text-xs text-[9px] font-normal px-5 text-center">
                Their website mentions an association with the International
                Photography Festival (IPF), showcasing winning photos from Shoot
                The Frame
              </div>
            </div>
            <div className="bg-[#404042] col-span-2 rounded-[20px] flex justify-end ">
              <img src={shoot2} className=" h-full " />
            </div>
          </div>
        ),
      },
      {
        description: [
          "Briind is a platform that integrates and harmonizes business functions with the social media needs of members-based organizations, making it unique from other social media platforms.",
          "To efficiently manage the organization and personal social media involvements, Briind has two kinds of accounts. Personal account and Organizational account.",
        ],
        companyName: "Briind",
        gridElements: (
          <div className="grid grid-cols-4 gap-[11px] bg-white font-primary  ">
            <div className="bg-primary-bg rounded-[20px] col-span-2   flex justify-center items-center  ">
              <div className="text-xs font-normal text-center py-3 ">
                Community Building for
                <div className=" text-xl font-semibold ">Diverse Interests</div>
              </div>
            </div>
            <div className="bg-primary-bg bg-[url('/src/assets/images/webMob/crunch/crunchbg.png')] bg-no-repeat rounded-[20px] col-span-2 flex justify-center items-center  ">
              <div className="text-xs font-normal text-center px-10 ">
                Efficient Management for Organizations
              </div>
            </div>
            <div className="bg-primary-bg rounded-[20px] col-span-2 flex justify-center items-center px-5 ">
              <img src={briind3} />
            </div>
            <div className="bg-primary-bg col-span-2  rounded-[20px] flex justify-center items-center px-5  ">
              <img src={briind2} />
            </div>
            <div className="bg-primary-bg rounded-[20px] flex ">
              <div className="lg:text-base text-xs font-semibold text-center flex justify-center items-center lg:px-5 ">
                Potential Growth & Recognition
              </div>
            </div>
            <div className="bg-[#404042] col-span-3 rounded-[20px] flex justify-end items-end ">
              <img src={briind1} />
            </div>
          </div>
        ),
      },
      {
        description: [
          "Cula is the pinnacle of photo presets for your iOS device with over 100+ beautifully crafted presets for your photos and videos! Cula has created the most beautiful filters to suit every occasion.",
          "Take your editing to the next level by using our advanced editing tools with a wide variety of tools and overlays you will be able to create the perfect photo aesthetic.",
        ],
        companyName: "Cula ",
        gridElements: (
          <div className="grid grid-cols-3 gap-[11px] bg-white font-primary  ">
            <div className="bg-primary-bg rounded-[20px] col-span-2 flex flex-col justify-center items-center py-3 px-5 ">
              <div className=" lg:text-xs text-[8px] font-normal  text-center ">
                Cula has built a vast network of
                <div className="lg:text-xl text-base font-semibold lg:leading-6 leading-4">
                  600+ device partners
                </div>
                solidifying its position in the device subscription industry
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#BAEF02] to-[#D9F189] rounded-[20px] flex items-end justify-center row-span-2  ">
              <img src={cuia1} />
            </div>
            <div className="bg-primary-bg rounded-[20px] flex justify-center px-1 items-center ">
              <div className=" lg:text-xs text-[8px] font-normal text-center ">
                Company raised
                <div className="lg:text-xl text-base font-semibold leading-6">
                  $2.7 million
                </div>
                in seed funding led by Venture Catalysts and supported by
                multiple investors
              </div>
            </div>
            <div className="bg-primary-bg rounded-[20px] py-3 px-2 bg-[url('/src/assets/images/webMob/biotecnika/bioBg1.png')] bg-no-repeat  flex justify-center items-center ">
              <div className=" lg:text-xs text-[8px] font-normal text-center ">
                The company has seen substantial growth in device subscriptions,
                with over
                <div className="lg:text-xl text-base font-semibold leading-6">
                  30,000
                </div>
                currently active
              </div>
            </div>
            <div className="bg-[#404042] rounded-[20px] flex justify-center items-center ">
              <img src={cuia2} />
            </div>
            <div className="bg-[#404042] rounded-[20px] col-span-2 bg-[url('/src/assets/images/webMob/biotecnika/biobg.png')] bg-no-repeat gap-[20px] py-5 flex justify-center items-center ">
              <img src={cuia3} className=" " />
            </div>
          </div>
        ),
      },
    ],
  },
  "Banking & Finance": {
    title: "BANKING & FINANCE",
    description: [""],
    inputs: [
      {
        description: [
          "LetsGo offers safe, secure & easy loans. Letshego, your #1 retail financial services partner now gives you an even better way to manage your finances with our new digital platform.",
          "As we continue to improve lives, LetsGo gives you personal finance enabling you to quickly apply for a loan top-up & easily track your existing loan repayment progress",
        ],
        companyName: "Letshego ",
        gridElements: (
          <div className="grid grid-cols-3 gap-[11px] bg-white font-primary  ">
            <div className="bg-primary-bg rounded-[20px] col-span-2 flex flex-col justify-center items-center px-5 ">
              <img src={letshego1} />
            </div>
            <div className="bg-[#404042] rounded-[20px] flex items-end row-span-2  ">
              <img src={letshego2} className="h-full" />
            </div>
            <div className="bg-primary-bg rounded-[20px] flex justify-center items-center ">
              <div className=" lg:text-xs text-[9px] font-normal text-center px-5 ">
                Operating in
                <div className="lg:text-xl text-base font-semibold leading-6">
                  11 countries
                </div>
                including Botswana, Namibia, and Nigeria,
              </div>
            </div>
            <div className="bg-primary-bg rounded-[20px] flex justify-center items-center py-2 px-5 ">
              <div className="lg:text-xs text-[9px] font-normal text-center  ">
                Letshego has made substantial investments in digital
                transformation, enhancing its service delivery through
                innovative digital platforms
              </div>
            </div>
            <div className="bg-primary-bg bg-[url('/src/assets/images/webMob/biotecnika/bioBg1.png')] bg-no-repeat   rounded-[20px] flex justify-center items-center ">
              <div className="lg:text-xs text-[9px] font-normal text-center  ">
                Company has been committed to driving financial inclusion and
                improving the quality of life for underserved populations
              </div>
            </div>
            <div className="bg-[#404042] rounded-[20px] col-span-2 flex justify-center items-center ">
              <img src={letshego4} className="h-full w-fit " />
            </div>
          </div>
        ),
      },
    ],
  },
  "AI/VR": {
    title: "AI/VR",
    description: ["."],
    inputs: [
      {
        description: [
          "Calm AR is an AR-enabled Mixed reality application for visualizing underground utilities in a 3D view. It was developed for a client in the UK",
          "It displays all of the sewage pipes and assists",
        ],
        companyName: "Calm AR",
        gridElements: (
          <div className="grid grid-cols-3 gap-[11px] lg:max-w-[56%] bg-white font-primary  ">
            <div className="bg-primary-bg rounded-[20px] row-span-2  bg-[url('/src/assets/images/webMob/roost/roostbg.png')] bg-no-repeat  flex items-center justify-center text-center ">
              <h1 className="font-primary lg:text-xs text-[8px] px-1 w-full break-words ">
                Augmented mode to virtually see and visualize the entire
                pipeline. The system highlights the potential/defective/damaged
                pipeline for immediate attention
              </h1>
            </div>
            <div className="bg-primary-bg rounded-[20px] col-span-2 flex justify-center items-center   px-6 py-1 ">
              <h1 className="font-primary text-xs">
                Notifies the department, users and the associated technician
                assigned, in case if an anomaly occurs.
              </h1>
            </div>
            <div className="bg-primary-bg rounded-[20px] flex items-center justify-center ">
              <img src={calm4} />
            </div>
            <div className="bg-primary-bg rounded-[20px]  py-1 flex justify-center items-center">
              <img src={calm3} />
            </div>
            <div className="bg-primary-bg rounded-[20px] flex justify-center items-center ">
              <img src={calm2} />
            </div>
            <div className="bg-primary-bg rounded-[20px]  col-span-2 flex gap-[22px] py-5 items-center justify-center ">
              <img srcSet={calm1} className="h-[100%] w-[40%] " />
            </div>
          </div>
        ),
      },
    ],
  },
  Sports: {
    title: "SPORTS",
    description: [""],
    inputs: [
      {
        description: [
          "UB sports is a leading Web and mobile app connecting athletes and participants in sports with their sports life.",
          "UB sports lets each participant enter an ecosystem that surrounds them with all the content, connections, insights, and equipment needed to reach their athletic goals, and to most fully enjoy sports lives. This app is still under development.",
        ],
        companyName: "UBsports",
        gridElements: (
          <div className="grid grid-cols-3 gap-[11px] bg-white font-primary  ">
            <div className="bg-primary-bg rounded-[20px] py-5 col-span-2 flex flex-col justify-center items-center px-5 ">
              <img src={ubsport1} />
            </div>
            <div className="bg-[#404042] rounded-[20px] flex items-end row-span-2 pt-10 ">
              <img src={ubsport2} />
            </div>
            <div className="bg-primary-bg rounded-[20px] flex justify-center items-center ">
              <div className=" text-center  lg:text-xl text-[9px] px-5 font-semibold ">
                Comprehensive Sports Solutions
              </div>
            </div>
            <div className="bg-primary-bg rounded-[20px]   flex justify-center items-center ">
              <div className="lg:text-xs text-[9px] text-center px-5 ">
                The company has successfully forged partnerships with major
                sports brands, enhancing its credibility and market presence
              </div>
            </div>
            <div className="bg-primary-bg bg-[url('/src/assets/images/webMob/biotecnika/bioBg1.png')] bg-no-repeat rounded-[20px] flex justify-center items-center ">
              <div className=" text-center text-[9px] lg:text-xl font-semibold ">
                Support for Grassroots Development
              </div>
            </div>
            <div className="bg-[#404042] rounded-[20px] col-span-2 bg-[url('/src/assets/images/webMob/biotecnika/biobg.png')] bg-no-repeat flex justify-center items-center ">
              <img src={ubsport3} className="h-full w-fit " />
            </div>
          </div>
        ),
      },
    ],
  },
  "Real estate ": {
    title: "REAL ESTATE",
    description: [""],
    inputs: [
      {
        description: [
          "Your Home Our Home App is your one-stop solution for effortless rental property management. It helps you easily manage and control your rental properties, organize rent payments, inspections, maintenance and communication with tenants.",
        ],
        companyName: "YourHome Ourhome ",
        gridElements: (
          <div className=" rounded-[20px] grid grid-cols-2 gap-[11px] bg-white">
            <div className=" rounded-[20px]  bg-primary-bg flex justify-center items-center py-5 px-5  ">
              <h1 className=" rounded-[20px] text-xs font-normal text-center ">
                Your Home Our Home has developed a reputation for providing
                <span className=" rounded-[20px]  font-bold ">
                  Innovative housing solutions
                </span>
                that cater to diverse needs
              </h1>
            </div>
            <div className=" rounded-[20px]  bg-primary-bg px-5 bg-no-repeat flex justify-center items-center bg-[url('/src/assets/images/webMob/roost/roostbg.png')] ">
              <div className=" rounded-[20px] text-xs font-normal text-center ">
                The company has made a significant impact on communities by
                focusing on sustainable and inclusive housing projects
              </div>
            </div>
            <div className=" rounded-[20px]  bg-primary-bg flex justify-center items-center py-5  ">
              <h1 className=" rounded-[20px] text-xs font-normal text-center ">
                Your Home Our Home has consistently prioritized
                <span className=" rounded-[20px]  font-bold ">
                  customer satisfaction
                </span>
                through their exceptional service and support
              </h1>
            </div>
            <div className=" rounded-[20px]  bg-[#404042] row-span-3 flex justify-end ">
              <img src={yourhome1} />
            </div>
            <div className=" rounded-[20px]  bg-primary-bg flex justify-center py-5 items-center ">
              <img src={yourhome2} />
            </div>
            <div className=" rounded-[20px]  bg-primary-bg flex justify-center items-center ">
              <img src={yourhome3} />
            </div>
          </div>
        ),
      },
      {
        description: [
          "SellByOwner revolutionizes property sales, empowering homeowners to sell without real estate agents. Create captivating listings, engage directly with buyers, and negotiate offers in real-time",
          "Access real-time data and analytics for informed decisions. Secure transactions with integrated tools. Join a vibrant community for support and insights. Say goodbye to commissions and hello to control and flexibility with SellByOwner.",
        ],
        companyName: "SellbyOwner",
        gridElements: (
          <div className="grid grid-cols-3 gap-[11px] bg-white font-primary  ">
            <div className="bg-primary-bg rounded-[20px] col-span-2 flex flex-col justify-center items-center px-5 ">
              <div className="text-xs font-normal text-center px-5 ">
                SellByOwner is revolutionizing property sales, empowering
                homeowners to sell confidently & efficiently
              </div>
            </div>
            <div className="bg-[#404042] rounded-[20px] flex items-end row-span-2 pt-10 ">
              <img src={sell1} />
            </div>
            <div className="bg-primary-bg rounded-[20px] flex justify-center items-center ">
              <div className=" text-center  text-xs px-5 font-normal ">
                Integrated payment processing & contract management tools
              </div>
            </div>
            <div className="bg-primary-bg rounded-[20px] bg-[url('/src/assets/images/webMob/biotecnika/bioBg1.png')] bg-no-repeat flex justify-center items-center ">
              <div className="text-xl font-semibold text-center px-5 ">
                Secure
                <div className="text-xs font-normal">Messaging System</div>
              </div>
            </div>
            <div className="bg-primary-bg  rounded-[20px] flex justify-center items-center ">
              <img src={sell2} />
            </div>
            <div className="bg-primary-bg rounded-[20px] col-span-2 flex justify-center items-center ">
              <img src={sell3} className="h-full w-fit " />
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
              <div className="text-xs font-normal text-center px-5 ">
                Expansion of Global Reach
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#BAEF02] to-[#D9F189]  rounded-[20px] flex items-end row-span-2 pt-10 ">
              <img src={sancharam1} />
            </div>
            <div className="bg-primary-bg rounded-[20px] flex justify-center items-center ">
              <h1 className=" text-center  text-xs px-5 font-normal ">
                Integration of Advanced Technology
              </h1>
            </div>
            <div className="bg-primary-bg rounded-[20px] bg-[url('/src/assets/images/webMob/biotecnika/bioBg1.png')] bg-no-repeat flex justify-center items-center ">
              <h1 className="text-xs px-5 text-center font-normal">
                Exceptional Customer Service
              </h1>
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategoryClick = (category: keyof typeof webmobData) => {
    setActiveCategory(category);
    setCurrentInputIndex(0);
    setIsDropdownOpen(false);
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
      <div className="lg:flex space-y-5  lg:py-40 py-20 lg:space-x-5 font-primary">
        <div className="relative lg:w-1/4 m-auto ">
          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="lg:hidden bg-primary-bg px-4 py-2  flex justify-between rounded-lg w-full text-left"
          >
            {activeCategory}
            {isDropdownOpen ? (
              <IoIosArrowUp className="ml-2" />
            ) : (
              <IoIosArrowDown className="ml-2" />
            )}
          </button>

          {isDropdownOpen && (
            <div
              className={`absolute top-full left-0 right-0 bg-white rounded-lg shadow-lg mt-2 z-50`}
            >
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
          )}
          <div className="hidden lg:block space-y-4 bg-white">
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
        </div>

        <div className="bg-primary-bg rounded-[20px] px-[15px] w-full py-[15px] font-primary">
          <div className="lg:flex gap-5 bg-white lg:h-[600px] px-3 py-4 rounded-2xl">
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
                onPrev={handlePrevInput}
                onNext={handleNextInput}
                isPrevDisabled={currentInputIndex === 0}
                isNextDisabled={
                  currentInputIndex ===
                  webmobData[activeCategory].inputs.length - 1
                }
              />
            )}
            {webmobData[activeCategory].inputs[currentInputIndex].gridElements}
          </div>
          <div className="p-5 lg:flex hidden justify-end">
            <button
              onClick={handlePrevInput}
              disabled={currentInputIndex === 0}
              className={`mr-2 w-10 h-10 rounded-full border-[2px] border-black border-opacity-20 flex justify-center items-center ${
                currentInputIndex === 0
                  ? "bg-primary-bg text-black opacity-20"
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
              className={`w-10 h-10 rounded-full border-[2px] border-black border-opacity-20 flex justify-center items-center ${
                currentInputIndex ===
                webmobData[activeCategory].inputs.length - 1
                  ? "bg-primary-bg text-black opacity-20"
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
