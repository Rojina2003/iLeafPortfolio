import CompanyLogo from "../assets/images/icons/Group 3.svg";
import SideImg from "../assets/images/home/Frame back.png";
const Home = () => {
  return (
    <div className="w-full pl-[70px] h-screen font-primary font-extralight bg-bg-img bg-no-repeat bg-left-bottom bg-contain  ">
      <div className="flex justify-between">
        <img className="h-fit  p-[60px]" src={CompanyLogo} />
        <img className="bg-side-bg  w-auto bg-right-top" src={SideImg} />
      </div>
      <div className="absolute bottom-[90px]  text-[118.52px] leading-[112.59px]">
        The Company <p>Canvas:</p>
        <p className="text-[42.13px]">Painting Our Business Landscape</p>
        <p className="text-xl pl-[10px] pt-[78px]">www.ileafsolutions.com</p>
      </div>
      
    </div>
  );
};

export { Home };
