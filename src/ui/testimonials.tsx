import { MdOutlineStar } from "react-icons/md";

interface TestimonialsInputProps {
  imgSrc: string; 
  name: string; 
  title: string; 
  testimonial: string; 
}

export const TestimonialsInput: React.FC<TestimonialsInputProps> = ({
  imgSrc,
  name,
  title,
  testimonial,
}) => {
  return (
    <div className=" bg-[#EDFBBF] max-w-[299px]lg:px-[17px] px-2 lg:py-5 py-2 border-[1px] border-[#e1f798] lg:rounded-[20px] rounded-[10px] font-primary ">
      <div className="flex text-[#FF9900] gap-[2px] pb-[5px] ">
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
      </div>
      <h1 className="font-normal lg:text-[11.07px] text-[6.01px] lg:leading-[16.61px] leading-[9.02px] italic ">
        {testimonial}
      </h1>
      <div className="flex lg:gap-[10px] gap-[5.54px] lg:pt-[35px] pt-[19.48px] items-center ">
        <img src={imgSrc} />
        <div>
          <h1 className="font-semibold lg:text-[12.3px] text-[6.68px] ">{name}</h1>
          <h1 className="font-light lg:text-[9px] text-[7.33px] ">{title}</h1>
        </div>
      </div>
    </div>
  );
};
