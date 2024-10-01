import ContentWrapper from "../ui/wrappers";
import sports from "../assets/images/ourSolution/sports.png";
import arvr from "../assets/images/ourSolution/arvr.png";
import healthfitness from "../assets/images/ourSolution/healthfitness.png";
import iot from "../assets/images/ourSolution/iot.png";
import enterprise from "../assets/images/ourSolution/enterprise.png";
import elearning from "../assets/images/ourSolution/e-learning1.png";
import oilgas from "../assets/images/ourSolution/oilgas.png";
import banking from "../assets/images/ourSolution/banking.png";
import travel from "../assets/images/ourSolution/travel.png";
import govt from "../assets/images/ourSolution/govt.png";
import ecommerce from "../assets/images/ourSolution/e-commerce.png";

export const OurSolution = () => {
  const data = [
    {
      src: arvr,
      title: "AR/VR",
      desc: "We deliver cutting-edge AI/AR solutions for immersive and intelligent experiences, transforming operations and engagement across various industries.",
    },
    {
      src: sports,
      title: "Sports",
      desc: "We offer advanced technology for enhanced sports performance and management, providing athletes & teams with innovative tools for training and analysis.",
    },
    {
      src: healthfitness,
      title: "Healthcare & Fitness",
      desc: "We provide innovative healthcare and fitness technology aimed at enhancing overall well-being and promoting healthier lifestyles.",
    },
    {
      src: iot,
      title: "IoT",
      desc: "Our innovative IoT solutions provide seamless connectivity and intelligent automation, transforming operations across diverse industries.",
    },
    {
      src: enterprise,
      title: "Enterprise Solutions",
      desc: "We specialize in comprehensive enterprise solutions tailored to meet your business needs, driving efficiency, scalability, and innovation.",
    },
    {
      src: govt,
      title: "Govt. & Emergency Services",
      desc: "We provide state-of-the-art technology solutions for government and agency services, optimizing efficiency and enhancing citizen experiences through innovative digital platforms.",
    },

    {
      src: oilgas,
      title: "Oil & Gas",
      desc: "We offer specialised technology solutions designed to optimize operations in the oil and gas industry, ensuring efficiency, safety, and sustainability.",
    },
    {
      src: banking,
      title: "Banking & Finance",
      desc: "We provide advanced technology solutions for the banking and finance sectors, enhancing security, efficiency, and customer experiences.",
    },
    {
      src: travel,
      title: "Travel & Hospitality",
      desc: "We specialize in advanced technology solutions for the travel and hospitality industry, elevating guest experiences and boosting operational efficiency.",
    },
    {
      src: elearning,
      title: "E Learning",
      desc: "We deliver innovative technology for effective e-learning experiences, enabling interactive learning environments and personalised education solutions.",
    },
    {
      src: ecommerce,
      title: "E commerce",
      desc: "We provide comprehensive e-commerce solutions tailored to optimize online retail experiences, driving seamless transactions and fostering business growth.",
    },
  ];

  return (
    <ContentWrapper>
      <h1 className="font-primary font-extralight text-[40.86px] leading-[61.29px] pb-14 pt-20">
        Our Solutions
      </h1>
      <div className="grid lg:grid-cols-4 grid-cols-2 h-full w-full lg:gap-[20px] gap-[5px] lg:pb-0 pb-16">
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden lg:rounded-[20px] rounded-xl ${getGridAlignment(
              index
            )}`}
          >
            <img src={item.src} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-end  bg-black bg-opacity-20 group-hover:bg-opacity-80 transition-all duration-500">
              <div className="flex flex-col transform group-hover:translate-y-[-17px] transition-transform duration-500 ease-in-out">
                <h2 className="text-white md:text-xl text-xs px-2 font-medium ">
                  {item.title}
                </h2>
                <p className="text-white p-1 md:text-xs text-[7px] font-light opacity-0 group-hover:opacity-100 transition-opacity duration-50">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ContentWrapper>
  );
};

const getGridAlignment = (index: number) => {
  switch (index) {
    case 2:
      return "row-span-3"; // Healthcare & Fitness
    case 5:
      return "row-span-2"; // E Learning
    case 6:
      return "row-span-2"; // Oil & Gas
    case 7:
      return "row-span-2"; // Banking & Finance
    default:
      return "";
  }
};
