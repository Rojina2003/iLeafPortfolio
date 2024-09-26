import ContentWrapper from "../ui/wrappers";
import companyLogo from "../assets/images/icons/Frame 3.png"

export const Footer = () => {
  return (
    <div className="bg-black text-white font-primary relative ">
      <ContentWrapper>
        <h1 className="pt-[90px] pb-[53px] font-extralight lg:text-[32.17px] text-[26px] " >Contact Us</h1>
        <div className="grid lg:grid-cols-3 lg:gap-[100px] gap-[23px] ">
          <div className="font-light lg:text-[15.75px] text-xs max-w-[182px] ">
            <h1 className="font-extralight lg:text-[29.92px] text-[26.17px] text-[#81AC40] " >India (HO)</h1>
            <h3 className="pt-[9px] lg:pb-[42px] pb-[7px] ">Phase-II Carnival Infopark, Kochi 682 042</h3>
            <h3>info@ileafsolutions.com +91-8121300643</h3>
          </div>
          <div className="font-light lg:text-[15.75px] text-xs max-w-[204px] ">
            <h1 className="font-extralight lg:text-[29.92px] text-[26.17px] text-[#81AC40] ">USA</h1>
            <h3 className="pt-[9px] lg:pb-[42px] pb-[7px] ">701 Tillery Street Unit 12, 2194 Austin, TX 78702 USA</h3>
            <h3>usbuzz@ileafsolutions.com +1(201)3101074</h3>
          </div>
          <div className="font-light lg:text-[15.75px] text-xs max-w-[210px] ">
            <h1 className="font-extralight lg:text-[29.92px] text-[26.17px] text-[#81AC40] ">UK</h1>
            <h3 className="pt-[9px] lg:pb-[42px] pb-[7px] ">2 Westcott Street, TS183EQ,Stockton on Tees,Durham</h3>
            <h3>ukbuzz@ileafsolutions.com +44 7825787146</h3>
          </div>
        </div>
        <h1 className="pt-[233.37px] pb-[51.21px] ">ileafsolutions.com</h1>
        <img className="absolute bottom-0 right-0" src={companyLogo} />
      </ContentWrapper>
    </div>
  );
};
