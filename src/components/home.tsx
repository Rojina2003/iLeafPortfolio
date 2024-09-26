import CompanyLogo from "../assets/images/icons/Group 3.svg";
import SideImg from "../assets/images/home/Frame back.png";
const Home = () => {
  return (
    <div className="h-screen bg-bg-img bg-no-repeat lg:bg-contain bg-cover  bg-left-bottom ">
      <div className=" relative">
        <img className="h-fit  lg:p-[71px] p-6 " src={CompanyLogo} />
        <img
          className="lg:bg-side-bg lg:w-fit w-[50%] bg-right-top  absolute top-0 right-0 "
          src={SideImg}
        />
      </div>
      <div className="  font-primary font-extralight p-6 lg:p-[71px] relative lg:mt-0 mt-52 space-y-10 ">
        <h1 className=" lg:text-[118.52px] text-[42.13px] leading-[45.4px] lg:leading-[112.59px]">
          The Company <p>Canvas:</p>
        </h1>
        <p className="lg:text-[42.13px] text-[16.99px] ">
          Painting Our Business Landscape
        </p>
        <p className="lg:text-xl text-[10px]  ">www.ileafsolutions.com</p>
      </div>
    </div>
  );
};

export { Home };
