import ContentWrapper from "../ui/wrappers";
import testImg from "../assets/images/testimonials/testimonial6.png";
import testImg1 from "../assets/images/testimonials/testimonial1.png";
import testImg2 from "../assets/images/testimonials/testimonial2.png";
import testImg3 from "../assets/images/testimonials/testimonial3.png";
import testImg4 from "../assets/images/testimonials/testimonial4.png";
import testImg5 from "../assets/images/testimonials/testimonial5.png";
import testImg6 from "../assets/images/testimonials/testimonial7.png";
import testImg7 from "../assets/images/testimonials/testimonial8.png";
import testImg8 from "../assets/images/testimonials/testimonial9.png";
import { TestimonialsInput } from "../ui/testimonials";

export const Testimonials = () => {
  return (
    <ContentWrapper>
      <div className="py-[70px] ">
        <h1 className=" flex lg:hidden font-primary font-extralight py-[18px] text-[40.86px]  ">
          Testimonials
        </h1>
        <div className=" border-[1px] border-[#EDFCB8] grid lg:grid-cols-4 grid-cols-2 p-5 gap-5 bg-gradient-to-br from-[#FFFFFF] from-20% via-[#EDFCB8] to-[#97C529] rounded-[30px] ">
          <h1 className=" lg:flex hidden font-primary font-extralight text-[40.86px]  ">
            Testimonials
          </h1>
          <div className="  "></div>
          <TestimonialsInput
            imgSrc={testImg1}
            name="Angela Brady"
            title="Chief Medical Officer, Coventry & Warwickshire"
            testimonial="Our experience with iLeaf Solutions Pvt. Ltd. was predominantly positive."
          />
          <TestimonialsInput
            imgSrc={testImg2}
            name="Tadashi Yanai"
            title="Founder, Fast Retailing"
            testimonial="They exceeded the basic requirements & added innovative features and functions that enriched our customers' lives."
          />
          <div className=" lg:flex hidden "></div>
          <TestimonialsInput
            imgSrc={testImg3}
            name="Shelley McMeeken"
            title="Finance & Admin Manager, Learning with Difference"
            testimonial="They were extremely conscientious and excellent communicators."
          />

          <TestimonialsInput
            imgSrc={testImg4}
            name="Swathi Mohan"
            title="Co-Founder, Ionixx Technologies"
            testimonial="One of the most impressive aspects of iLeaf Solutions Pvt. Ltd. was their deep understanding of blockchain industry."
          />

          <TestimonialsInput
            imgSrc={testImg5}
            name="Armando Brunetti"
            title="Founder, Awhina President, Camfil"
            testimonial="iLeaf Solutions Pvt. Ltd. demonstrated excellent project management throughout the entire development process."
          />
          <TestimonialsInput
            imgSrc={testImg}
            name="Chris Yates"
            title="Founder, Awhina Ltd"
            testimonial="Their workflow is flexible, and they are willing to explore new options if necessary"
          />
          <TestimonialsInput
            imgSrc={testImg6}
            name="Kay Seljeseth"
            title="Manager, Flexi cash AS & Timekiosk AS"
            testimonial="iLeaf is very forthcoming, helpful, and has a well-structured business approach."
          />
          <TestimonialsInput
            imgSrc={testImg7}
            name="Serge Guertchakoff"
            title="Director of Publication, Immobilier.ch"
            testimonial="Their workflow is flexible, and they are willing to explore new options if necessary"
          />
          <TestimonialsInput
            imgSrc={testImg8}
            name="Neil Vincent"
            title="IT Manager, Privatization Holding Company"
            testimonial="The developers and testers were very aware of our expected outcomes, and they always went beyond that."
          />
        </div>
      </div>
    </ContentWrapper>
  );
};
