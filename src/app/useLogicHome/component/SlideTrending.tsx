/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Avatar, Progress, Tooltip } from "antd";
import { useDataContent } from "./Data";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";

const SlideTrending = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShowCount, setSlidesToShowCount] = useState(getSlidesToShow());
  const [isHovered, setIsHovered] = useState(false);
  const { testimonials } = useDataContent();
  function getSlidesToShow(): number {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 2;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShowCount(getSlidesToShow());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const id = setInterval(handleNext, 3000);
      return () => clearInterval(id);
    }
  }, [isHovered, slidesToShowCount]);

  // console.log(currentIndex);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + 1) % Math.ceil(testimonials.length / slidesToShowCount)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(testimonials.length / slidesToShowCount) - 1
        : prevIndex - 1
    );
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-xl   justify-center items-center space-y-4 overflow-hidden  py-3 md:pr-0 pr-3 md:pl-3"
    >
      <div className="flex  justify-between items-center mx-4 ">
        <h4 className="text-[1.5rem] font-inter font-semibold leading-[1.235rem]">
          Trending Now
        </h4>
        <div className="flex space-x-4 items-center mt-4">
          <button
            className="text-white p-2 rounded-full z-30"
            onClick={handlePrev}
          >
            &#10094;
          </button>
          <button
            className="text-white p-2 rounded-full z-30"
            onClick={handleNext}
          >
            &#10095;
          </button>
        </div>
      </div>
      <div
        className={`flex w-full transition-transform duration-50 `}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0  w-full md:w-[50%] h-auto justify-center items-center flex flex-col    border-gray-200 rounded-lg bg-content1"
          >
            <div
              style={{
                backgroundImage: `url(${testimonial.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "90%",
                height: "200px",
              }}
              className="w-[90%] max-h-[200px] rounded-t-lg"
              aria-label="Background image"
            />
            <div className="w-[90%] p-2 bg-menu ">
              <p className="text-[1rem] my-2 px-2 font-inter font-medium leading-[1.5] text-white">
                {testimonial.name}
              </p>
              <div className="flex justify-between items-center px-2">
                <p className="text-[0.75rem] font-medium leading-[1.43] font-inter text-color_menu">
                  Popularity
                </p>
                <p className="text-[0.75rem] font-inter font-medium leading-[1.43] text-color_menu">
                  {testimonial.number} %
                </p>
              </div>
              <Progress
                className=" px-2 my-2"
                percent={testimonial.number}
                status="active"
                showInfo={false}
                size={["100%", 4]}
              />
            </div>
            <div className="flex w-[90%]  justify-end items-end p-2 rounded-b-lg bg-menu">
              <Avatar.Group
                size="default"
                max={{
                  count: 2,
                  style: { color: "menu", backgroundColor: "logo" },
                }}
              >
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
                <Avatar className="bg-red-300">K</Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar
                    // style={{ backgroundColor: "#87d068" }}
                    className="bg-yellow-200"
                    icon={<UserOutlined />}
                  />
                </Tooltip>
                <Avatar
                  className="bg-orange-300"
                  icon={<AntDesignOutlined />}
                />
              </Avatar.Group>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideTrending;
