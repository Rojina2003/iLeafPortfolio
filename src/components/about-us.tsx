import nasscom from "../assets/images/aboutus/nasscom.png";
import gtech from "../assets/images/aboutus/gtech.png";
import clutch from "../assets/images/aboutus/clutch.png";
import topDevelopers from "../assets/images/aboutus/topDevelopers.png";
import goodFirms from "../assets/images/aboutus/goodFirms.png";
import appFutura from "../assets/images/aboutus/appfutura.png";
import map from "../assets/images/weStand/map.png";
import mapTop from "../assets/images/weStand/maptop1.png";
import bxsmap from "../assets/images/weStand/bxs_map.png";
import ContentWrapper from "../ui/wrappers";

const AboutUs = () => {
  return (
    <div className="bg-black  font-primary  ">
   <ContentWrapper>
      <div className=" rounded-[20px] bg-gradient-to-br from-white via-gray-100 to-[#DADADA] ">
        <div className="p-10 font-extralight lg:text-[40.86px] text-[26px] ">AboutUs</div>
        <div className="font-light lg:text-xl text-xs lg:leading-[30px] leading-[18px] lg:px-10 px-[19px] ">
          iLeaf Solutions Pvt. Ltd. stands as a global leader in consulting,
          designing, and developing enterprise web and mobile solutions tailored
          for Startups, SMBs, and Corporates. Established in 2007, our firm
          boasts a diverse clientele spanning the U.S., Europe, the Middle East,
          and Oceania. We have consistently maintained our position as an
          industry frontrunner. Our commitment to excellence shines through in
          the exceptional experiences we deliver, leveraging cutting-edge
          technologies such as AI, AR, ML, and RPA, coupled with proficient
          mobile and web application solutions.
        </div>
        <div className=" flex flex-row flex-wrap gap-5 justify-evenly items-center w-fit pt-[94px] pb-10 px-10 ">
          <img className="h-fit" src={nasscom} />
          <img className="h-fit" src={gtech} />
          <img className="h-fit" src={clutch} />
          <img className="h-fit" src={topDevelopers} />
          <img className="h-fit" src={goodFirms} />
          <img className="h-fit" src={appFutura} />
        </div>
      </div>
      <div className=" font-thin lg:py-[73px] py-6 lg:pt-[138px] pt-[80px] text-white lg:flex">
        <div>
          <div className="font-extralight lg:pb-10 pb-[13px] lg:text-[40.86px] text-[26px] ">
            Where We Stand
          </div>
          <div className="lg:text-[20px] text-xs  lg:leading-[30px] pb-[84px]">
            Our company offers a rare fusion of technology and creativity,
            attracting a wide range of clientele globally.
          </div>
          <div className="grid grid-cols-3 w-fit lh:text-[20px] text-[10px]  ">
            <div className="border border-t-0 ">
              <h1 className="text-primary-green font-semibold lg:text-[40.86px] text-[23.53px] ">
                500+
              </h1>
              <h4>Web Projects</h4>
            </div>
            <div className="border border-t-0 ">
              <h1 className="text-primary-green font-semibold lg:text-[40.86px] text-[23.53px] ">
                650+
              </h1>
              <h4>Mobile Apps</h4>
            </div>
            <div className="border border-t-0 border-r-0">
              <h1 className="text-primary-green font-semibold lg:text-[40.86px] text-[23.53px] ">
                25+
              </h1>
              <h4>Enterprise Projects</h4>
            </div>
            <div className="border border-t-0 border-b-0">
              <h1 className="text-primary-green font-semibold lg:text-[40.86px] text-[23.53px] ">
                03
              </h1>
              <h4>No. of Office</h4>
            </div>
            <div className="border border-t-0 border-b-0">
              <h1 className="text-primary-green font-semibold lg:text-[40.86px] text-[23.53px] ">
                150+
              </h1>
              <h4>No. of Employees</h4>
            </div>
          </div>
        </div>
        <div className=" relative m-auto ">
          <img className="absolute lg:bottom-[300px]" src={mapTop} />
          <img className="absolute lg:bottom-[250px] " src={mapTop} />
          <img
            className="w-full flex justify-center  items-center pt-[150px] "
            src={map}
          />
          <img
            className="absolute z-10 top-[38%] left-[60%] "
            src={bxsmap}
          />
          <img
            className="absolute z-10 top-[51%] left-[10%] transform -translate-x-1/2 -translate-y-1/2"
            src={bxsmap}
          />
          <img
            className="absolute z-10 top-[44%] left-[38%] transform -translate-x-1/2 -translate-y-1/2"
            src={bxsmap}
          />
        </div>
      </div>
      </ContentWrapper>
    </div>
   
  );
};
export { AboutUs };
