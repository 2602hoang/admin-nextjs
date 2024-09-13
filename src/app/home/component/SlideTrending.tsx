/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Avatar, Progress, Tooltip } from "antd";
import Meta from "antd/es/card/Meta";
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
    function handleResize() {
      setSlidesToShowCount(getSlidesToShow());
    }

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
      className="relative w-full h-auto justify-center items-center  overflow-hidden bg-content1 md:pr-0 pr-3 md:pl-3"
    >
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-semibold leading-9">Trending Now</h1>
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
        className={`flex w-full transition-transform duration-500 gap-2  `}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0  w-full md:w-[49%] h-auto justify-start items-start flex flex-col   border border-gray-200 rounded-md bg-content1"
          >
            <img
              className="w-full max-h-[350px] "
              src="https://via.placeholder.com/200"
              alt={testimonial.name}
            />
            <div className="w-full">
              <p className="text-[1rem] my-3 font-medium leading-[1.5] text-white">
                {testimonial.name}
              </p>
              <p className="text-[0.75rem] font-medium leading-[1.43] text-color_menu">
                Popularity
              </p>
              <Progress
                className="text-white px-2 my-2"
                percent={testimonial.number}
                status="active"
              />
            </div>
            <div className="flex w-full justify-end items-end">
              <Avatar.Group
                size="default"
                max={{
                  count: 2,
                  style: { color: "#f56a00", backgroundColor: "#fde3cf" },
                }}
              >
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
                <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                  />
                </Tooltip>
                <Avatar
                  style={{ backgroundColor: "#1677ff" }}
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
