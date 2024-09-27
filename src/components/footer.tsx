import ContentWrapper from "../ui/wrappers";
// import companyLogo from "../assets/images/icons/Frame 3.png";

export const Footer = () => {
  return (
    <div className="bg-black text-white font-primary bg-[url('/src/assets/images/icons/ileaflogo.png')] bg-no-repeat bg-right-bottom ">
      <ContentWrapper>
        <h1 className="pt-[90px] pb-[53px] font-extralight text-[40.86px]  ">
          Contact Us
        </h1>
        <div className="grid lg:grid-cols-3 lg:max-w-[710px] w-[200px] gap-[100px]  ">
          <div className="a ">
            <h1 className="  text-[#81AC40] text-[29.92px] font-extralight ">
              India (HO)
            </h1>
            <p className="font-light text-[15.75px] leading-[23.62px] pt-[10px] pb-[42px]  ">
              Phase-II Carnival Infopark, Kochi 682042
            </p>
            <p className="font-light text-[15.75px] leading-[23.62px]">
              info@ileafsolutions.com <p>+91-8121300643</p>
            </p>
          </div>
          <div className="a ">
            <h1 className=" text-[#81AC40] text-[29.92px] font-extralight ">
              USA
            </h1>
            <p className="font-light text-[15.75px] leading-[23.62px] pt-[10px] pb-[42px]  ">
              701  Tillery Street Unit 12, 2194 Austin, TX 78702 USA
            </p>
            <p className="font-light text-[15.75px] leading-[23.62px]">
              usbuzz@ileafsolutions.com <p>+1(201)3101074</p>
            </p>
          </div>
          <div className="a ">
            <h1 className=" text-[#81AC40] text-[29.92px] font-extralight ">
              UK
            </h1>
            <p className="font-light text-[15.75px] leading-[23.62px] pt-[10px] pb-[42px]  ">
              2 Westcott Street, TS183EQ,Stockton on Tees,Durham
            </p>
            <p className="font-light text-[15.75px] leading-[23.62px]">
              ukbuzz@ileafsolutions.com <p>+44 7825787146</p>
            </p>
          </div>
        </div>
        <h1 className=" pt-[93.58px] font-light text-xl pb-[60px] ">ileafsolutions.com</h1>
      </ContentWrapper>
    </div>
  );
};
