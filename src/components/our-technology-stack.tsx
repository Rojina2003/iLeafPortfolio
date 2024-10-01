import { useState } from "react";
import web1 from "../assets/images/ourTechnologyStack/web7.png";
import web2 from "../assets/images/ourTechnologyStack/web5.png";
import web3 from "../assets/images/ourTechnologyStack/web4.png";
import web4 from "../assets/images/ourTechnologyStack/web1.png";
import web5 from "../assets/images/ourTechnologyStack/web2.png";
import web6 from "../assets/images/ourTechnologyStack/web8.png";
import web7 from "../assets/images/ourTechnologyStack/web6.png";
import web8 from "../assets/images/ourTechnologyStack/web3.png";
import cloud1 from "../assets/images/ourTechnologyStack/cloud1.png";
import cloud2 from "../assets/images/ourTechnologyStack/cloud2.png";
import cloud3 from "../assets/images/ourTechnologyStack/cloud3.png";
import cloud4 from "../assets/images/ourTechnologyStack/cloud4.png";
import cloud5 from "../assets/images/ourTechnologyStack/cloud5.png";
import mob1 from "../assets/images/ourTechnologyStack/mob1.png";
import mob2 from "../assets/images/ourTechnologyStack/mob2.png";
import mob3 from "../assets/images/ourTechnologyStack/mob3.png";
import mob4 from "../assets/images/ourTechnologyStack/mob4.png";
import dev1 from "../assets/images/ourTechnologyStack/dev1.png";
import dev2 from "../assets/images/ourTechnologyStack/dev2.png";
import dev3 from "../assets/images/ourTechnologyStack/dev3.png";
import dev4 from "../assets/images/ourTechnologyStack/dev4.png";
import dev5 from "../assets/images/ourTechnologyStack/dev5.png";
import data1 from "../assets/images/ourTechnologyStack/data1.png";
import data2 from "../assets/images/ourTechnologyStack/data2.png";
import data3 from "../assets/images/ourTechnologyStack/data3.png";
import data4 from "../assets/images/ourTechnologyStack/data4.png";
import data5 from "../assets/images/ourTechnologyStack/data5.png";
import ContentWrapper from "../ui/wrappers";

const OurTechnologyStack = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredImageName, setHoveredImageName] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleMouseEnter = (category: string, imageName: string | null) => {
    setHoveredCategory(category);
    setHoveredImageName(imageName);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
    setHoveredImageName(null);
  };

  const handleCategoryClick = (category: string) => {
    // Toggle category selection
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div className="bg-black font-primary text-white font-extralight text-[40.86px]  lg:pt-[110px] ">
      <ContentWrapper>
        <div className="py-5 lg:text-[40.86px] text-[26px] ">
          Our Technology Stack
        </div>
        <div className="lg:pt-[52px] pb-[142px] ">
          <div className="max-w-[1295px] m-auto border-[1px] border-[#818181] rounded-3xl ">
            <div className="flex flex-wrap font-bold gap-3 lg:text-[20px] text-xs justify-evenly p-[28px]">
              <h1
                onClick={() => handleCategoryClick("web")}
                onMouseEnter={() => handleMouseEnter("web", null)}
                onMouseLeave={handleMouseLeave}
                className={
                  hoveredCategory && hoveredCategory !== "web"
                    ? "opacity-50"
                    : ""
                }
              >
                Web Platforms
              </h1>
              <h1
                onClick={() => handleCategoryClick("dev")}
                onMouseEnter={() => handleMouseEnter("dev", null)}
                onMouseLeave={handleMouseLeave}
                className={
                  hoveredCategory && hoveredCategory !== "dev"
                    ? "opacity-50"
                    : ""
                }
              >
                Development Framework
              </h1>
              <h1
                onClick={() => handleCategoryClick("mob")}
                onMouseEnter={() => handleMouseEnter("mob", null)}
                onMouseLeave={handleMouseLeave}
                className={
                  hoveredCategory && hoveredCategory !== "mob"
                    ? "opacity-50"
                    : ""
                }
              >
                Mobile Platforms
              </h1>
              <h1
                onClick={() => handleCategoryClick("cloud")}
                onMouseEnter={() => handleMouseEnter("cloud", null)}
                onMouseLeave={handleMouseLeave}
                className={
                  hoveredCategory && hoveredCategory !== "cloud"
                    ? "opacity-50"
                    : ""
                }
              >
                Cloud Services
              </h1>
              <h1
                onClick={() => handleCategoryClick("data")}
                onMouseEnter={() => handleMouseEnter("data", null)}
                onMouseLeave={handleMouseLeave}
                className={
                  hoveredCategory && hoveredCategory !== "data"
                    ? "opacity-50"
                    : ""
                }
              >
                Data Management
              </h1>
            </div>
            <div className="md:grid hidden lg:grid-cols-17 md:grid-cols-11  gap-2 p-[27px]">
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>

              <div
                className={`rounded-[14px] ${
                  hoveredCategory === "web" ? "opacity-100" : "opacity-50"
                }`}
                onMouseEnter={() => handleMouseEnter("web", "Web 1")}
                onMouseLeave={handleMouseLeave}
              >
                <img src={web1} />
                {hoveredCategory === "web" && hoveredImageName === "Web 1" && (
                  <div className="text-center text-white text-sm">Web 1</div>
                )}
              </div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "web" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={web2} />
              </div>

              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "cloud" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={cloud1} />
              </div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>

              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "mob" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={mob1} />
              </div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "cloud" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={cloud2} />
              </div>

              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "mob" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={mob2} />
              </div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "mob" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={mob3} />
              </div>

              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "dev" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={dev1} />
              </div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "web" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={web3} />
              </div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "dev" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={dev2} />
              </div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "web" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={web4} />
              </div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "web" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={web5} />
              </div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "web" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={web6} />
              </div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "data" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={data1} />
              </div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "web" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={web7} />
              </div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "cloud" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={cloud3} />
              </div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "data" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={data2} />
              </div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "dev" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={dev3} />
              </div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "cloud" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={cloud4} />
              </div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "data" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={data3} />
              </div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "data" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={data4} />
              </div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "dev" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={dev4} />
              </div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "cloud" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={cloud5} />
              </div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "mob" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={mob4} />
              </div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "web" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={web8} />
              </div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "data" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={data5} />
              </div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
              <div
                className={` rounded-[14px] ${
                  hoveredCategory === "dev" ? "opacity-100" : "opacity-50"
                }`}
              >
                <img src={dev5} />
              </div>
            </div>
            <div className="md:hidden flex">
              {selectedCategory && (
                <div className="grid gap-2 px-3 py-2 grid-cols-5">
                  {selectedCategory === "web" && (
                    <>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "web"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={web1} />
                      </div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "web"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={web2} />
                      </div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "web"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={web6} />
                      </div>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "web"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={web5} />
                      </div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "web"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={web3} />
                      </div>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "web"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={web8} />
                      </div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "web"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={web7} />
                      </div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "web"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={web4} />
                      </div>
                    </>
                  )}
                  {selectedCategory === "dev" && (
                    <>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "dev"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={dev2} />
                      </div>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "dev"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={web2} />
                      </div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "dev"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={dev1} />
                      </div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>

                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "dev"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={dev5} />
                      </div>

                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "dev"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={dev3} />
                      </div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "dev"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={dev4} />
                      </div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                    </>
                  )}
                  {selectedCategory === "mob" && (
                    <>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "mob"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={mob3} />
                      </div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "mob"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={mob1} />
                      </div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "mob"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={web5} />
                      </div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "mob"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={mob4} />
                      </div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "mob"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={mob2} />
                      </div>
                    </>
                  )}
                  {selectedCategory === "cloud" && (
                    <>
                     <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                     <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "cloud"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={cloud5} />
                      </div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "cloud"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={cloud4} />
                      </div>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "cloud"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={cloud3} />
                      </div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "cloud"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={cloud1} />
                      </div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "cloud"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={cloud2} />
                      </div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                    </>
                  )}
                  {selectedCategory === "data" && (
                    <>
                     <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "data"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={data1} />
                      </div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "data"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={data2} />
                      </div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "data"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={data4} />
                      </div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div className="border-[1px]  rounded-[14px] opacity-[50%]"></div>
                      <div
                        className={`rounded-[14px] ${
                          hoveredCategory === "data"
                            ? "opacity-100"
                            : "opacity-50"
                        }`}
                      >
                        <img src={data3} />
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export { OurTechnologyStack };
