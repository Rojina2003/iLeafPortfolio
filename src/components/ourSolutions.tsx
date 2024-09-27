import ContentWrapper from "../ui/wrappers";
import sports from "../assets/images/ourSolution/sports.png";
import arvr from "../assets/images/ourSolution/arvr.png";
import healthfitness from "../assets/images/ourSolution/healthfitness.png";
import iot from "../assets/images/ourSolution/iot.png";
import enterprise from "../assets/images/ourSolution/enterprise.png";
import elearning from "../assets/images/ourSolution/e-learning.png";
import oilgas from "../assets/images/ourSolution/oilgas.png";
import banking from "../assets/images/ourSolution/banking.png";
import travel from "../assets/images/ourSolution/travel.png";
import govt from "../assets/images/ourSolution/govt.png";
import ecommerce from "../assets/images/ourSolution/e-commerce.png";

const solutions = [
  {
    img: arvr,
    title: "AI/AR Solutions",
    desc: "We deliver cutting-edge AI/AR solutions for immersive and intelligent experiences, transforming operations and engagement across various industries.",
  },
  {
    img: sports,
    title: "Sports Technology",
    desc: "We offer advanced technology for enhanced sports performance and management, providing athletes & teams with innovative tools for training and analysis.",
  },
  {
    img: healthfitness,
    title: "Health & Fitness",
    desc: "We provide innovative healthcare and fitness technology aimed at enhancing overall well-being and promoting healthier lifestyles.",
    className: "row-span-3",
  },
  {
    img: iot,
    title: "IoT Solutions",
    desc: "Our innovative IoT solutions provide seamless connectivity and intelligent automation, transforming operations across diverse industries.",
  },
  {
    img: enterprise,
    title: "Enterprise Solutions",
    desc: "We specialize in comprehensive enterprise solutions tailored to meet your business needs, driving efficiency, scalability, and innovation.",
  },
  {
    img: elearning,
    title: "E-Learning Technology",
    desc: "We deliver innovative technology for effective e-learning experiences, enabling interactive learning environments and personalised education solutions.",
    className: "row-span-2",
  },
  {
    img: oilgas,
    title: "Oil & Gas Solutions",
    desc: "We offer specialised technology solutions designed to optimize operations in the oil and gas industry, ensuring efficiency, safety, and sustainability.",
    className: "row-span-2",
  },
  {
    img: banking,
    title: "Banking Solutions",
    desc: "We provide advanced technology solutions for the banking and finance sectors, enhancing security, efficiency, and customer experiences.",
    className: "row-span-2",
  },
  {
    img: travel,
    title: "Travel Technology",
    desc: "We specialize in advanced technology solutions for the travel and hospitality industry, elevating guest experiences and boosting operational efficiency.",
  },
  {
    img: govt,
    title: "Government Solutions",
    desc: "We provide state-of-the-art technology solutions for government and agency services, optimizing efficiency and enhancing citizen experiences through innovative digital platforms.",
  },
  {
    img: ecommerce,
    title: "E-Commerce Solutions",
    desc: "We provide comprehensive e-commerce solutions tailored to optimize online retail experiences, driving seamless transactions and fostering business growth.",
  },
];

export const OurSolution = () => {
  return (
    <ContentWrapper>
      <div className="font-primary  font-extralight text-[40.86px] py-[89px]">
        <h1 className="pb-14">Our Solution</h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-5 gap-2">
        {solutions.map((solution, index) => (
  <div
    className={`relative group ${solution.className || ""}`}
    key={index}
  >
    <img src={solution.img} className="rounded-[20px] w-full h-full " />
    
    <div className="absolute bottom-0 left-0  rounded-[20px]  right-0 text-center text-white lg:text-xl text-base font-medium p-4 transition-transform duration-300">
      <h2 className="transform translate-y-0   group-hover:translate-y-[-70px]">{solution.title}</h2>
    </div>

    <div className="absolute inset-0 flex items-end justify-center">
      <div className="p-2 rounded-[20px] bg-black bg-opacity-60  text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[7px] lg:text-xs">
        <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <span>{solution.desc}</span>
        </div>
      </div>
    </div>
  </div>
))}


        </div>
      </div>
    </ContentWrapper>
  );
};
