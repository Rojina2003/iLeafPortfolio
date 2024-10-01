import CompanyLogo from "../assets/images/icons/Group 3.svg";
import SideImg from "../assets/images/home/Frame back.png";

const Home = () => {
  return (
    <div className="h-screen bg-bg-img bg-no-repeat lg:bg-contain bg-cover flex flex-col justify-between bg-left-bottom relative ">
      <div className="flex justify-between items-start">
        <img src={CompanyLogo} className="p-5" />
        <img src={SideImg} className="lg:w-fit w-[50%] bg-[url('src/assets/images/home/Frame.png')] bg-cover " />
      </div>
      <div className=" absolute  font-primary font-extralight bottom-16 lg:left-10 left-4 space-y-10 ">
        <h1 className=" lg:text-[118.52px] text-[40px] leading-[45.4px] lg:leading-[112.59px]">
          The Company <div>Canvas:</div>
        </h1>
        <p className="lg:text-[42.13px] text-[16.99px] ">
          Painting Our Business Landscape
        </p>
        <p className="lg:text-xl text-[10px] pb-5 ">www.ileafsolutions.com</p>
      </div>
    </div>
  );
};

export { Home };
