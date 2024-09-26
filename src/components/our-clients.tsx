import ContentWrapper from "../ui/wrappers";
import client1 from "../assets/images/our-client/client1.svg";
import client2 from "../assets/images/our-client/client2.svg";
import client3 from "../assets/images/our-client/client3.svg";
import client4 from "../assets/images/our-client/client4.svg";
import client5 from "../assets/images/our-client/client-5.svg";
import client6 from "../assets/images/our-client/client-6.svg";
import client7 from "../assets/images/our-client/client-7.svg";
import client8 from "../assets/images/our-client/client8.svg";
import client9 from "../assets/images/our-client/client9.svg";
import client10 from "../assets/images/our-client/client10.svg";

import client21 from "../assets/images/our-client/client2-1.svg";
import client22 from "../assets/images/our-client/client2-2.svg";
import client23 from "../assets/images/our-client/client2-3.svg";
import client24 from "../assets/images/our-client/client2-4.svg";
import client25 from "../assets/images/our-client/client2-5.svg";
import client26 from "../assets/images/our-client/client2-6.svg";
import client27 from "../assets/images/our-client/client2-7.svg";
import client28 from "../assets/images/our-client/client2-8.svg";
import client29 from "../assets/images/our-client/client2-9.svg";
import client210 from "../assets/images/our-client/client2-10.svg";

import "../style.css";

export const OurClients = () => {
  return (
    <div>
      <ContentWrapper>
        <h1 className="font-primary font-extralight text-[40.86px] pb-[54px]">
          Our Clients
        </h1>
      </ContentWrapper>
      <div className="scroll-container pb-10">
        <div className="scroll-content">
          {[client1, client2, client3, client4, client5, client6, client7, client8, client9, client10].map((client, index) => (
            <img key={index} src={client}  />
          ))}
          {[client1, client2, client3, client4, client5, client6, client7, client8, client9, client10].map((client, index) => (
            <img key={`duplicate-${index}`} src={client}  />
          ))}
          {[client1, client2, client3, client4, client5, client6, client7, client8, client9, client10].map((client, index) => (
            <img key={`duplicate-${index}`} src={client}  />
          ))}
        </div>
      </div>
      <div className="scroll-container">
        <div className="scroll-content ">
          {[client21, client22, client23, client24, client25, client26, client27, client28, client29, client210].map((client, index) => (
            <img key={index} src={client}  />
          ))}
          {[client21, client22, client23, client24, client25, client26, client27, client28, client29, client210].map((client, index) => (
            <img key={`duplicate-${index}`} src={client}  />
          ))}
          {[client21, client22, client23, client24, client25, client26, client27, client28, client29, client210].map((client, index) => (
            <img key={`duplicate-${index}`} src={client}  />
          ))}
        </div>
      </div>
    </div>
  );
};
