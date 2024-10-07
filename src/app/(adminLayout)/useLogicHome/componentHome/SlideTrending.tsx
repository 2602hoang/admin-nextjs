import React, { useEffect, useState } from "react";
import { Avatar, Progress, Tooltip } from "antd";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { tableRank } from "./Data";

const SlideTrending: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [startX, setStartX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    const flag = isSmallScreen ? 0 : 1;
    const newIndex = currentIndex + 1;
    if (newIndex < tableRank.length - flag) {
      setCurrentIndex(newIndex);
    }
  };

  const handlePrev = () => {
    const flag = isSmallScreen ? 1 : 1;
    const newIndex = currentIndex - flag;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
    }
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(event.clientX);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (isDragging) {
      const moveX = event.clientX - startX;
      if (moveX > 50) {
        handlePrev();
        setIsDragging(false);
      } else if (moveX < -50) {
        handleNext();
        setIsDragging(false);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className="relative rounded-xl overflow-hidden p-3"
    >
      <div className="flex justify-between items-center mx-4">
        <h4 className=" text-[24px] font-semibold leading-[29.64px]">
          Trending Now
        </h4>
        <div className="flex space-x-4 items-center mt-4">
          <button
            className={`${
              currentIndex === 0
                ? "text-gray-400 cursor-not-allowed"
                : "text-white"
            } p-2 rounded-full z-20`}
            onClick={handlePrev}
          >
            &#10094;
          </button>
          <button
            className={`${
              (
                isSmallScreen
                  ? currentIndex + 1 >= tableRank.length
                  : currentIndex * 2 + 1 >= tableRank.length
              )
                ? "text-gray-400 cursor-not-allowed"
                : "text-white"
            } p-2 rounded-full z-20`}
            onClick={handleNext}
          >
            &#10095;
          </button>
        </div>
      </div>
      <div
        className={`flex w-full mt-5 transition-transform duration-50`}
        style={{
          transform: `translateX(-${
            currentIndex * (100 / (isSmallScreen ? 1 : 2))
          }%)`,
        }}
      >
        {tableRank.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex justify-center items-center flex-col w-full md:w-[50%] h-auto border-gray-200 rounded-lg"
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
              className="max-h-[200px] rounded-t-lg"
            />
            <div className="w-[90%] p-2 bg-brown">
              <p className="my-2 px-2  font-medium leading-[24px] text-white">
                {testimonial.name}
              </p>
              <div className="flex justify-between items-center px-2">
                <p className="text-[12px] font-medium leading-[17px]  text-gray-menu">
                  Popularity
                </p>
                <p className="text-[12px] font-medium leading-[17px]  text-gray-menu">
                  {testimonial.number}%
                </p>
              </div>
              <Progress
                className="px-2 my-2"
                percent={testimonial.number}
                status="active"
                showInfo={false}
                size={["100%", 4]}
              />
            </div>
            <div className="flex w-[90%] justify-end items-end p-2 rounded-b-lg bg-brown">
              <Avatar.Group
                size="default"
                max={{
                  count: 2,
                  style: { color: "menu", backgroundColor: "Light_Teal" },
                }}
              >
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
                <Avatar className="bg-red-300">K</Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar className="bg-yellow-200" icon={<UserOutlined />} />
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
