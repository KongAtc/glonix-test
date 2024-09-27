"use client";
import Image from "next/image";
import { TitleCourses } from "../data/data";
import { useState } from "react";

export default function MainContent() {
  const [selectedTitle, setSelectedTitle] = useState(1);

  return (
    <div className="flex items-center justify-between flex-col xl:flex-row gap-14 mt-5">
      <div className="flex gap-6 flex-col">
        <div className="relative py-3">
          <p className="text-xl text-seconday font-medium">
            Lorem Ipsum is simply dummy .
          </p>
          <div className="w-80 font-semibold text-[3.25rem]">
            <p>
              learn anytime, anywhere with{" "}
              <span className="text-seconday">Lorem</span>
            </p>
          </div>
          <Image
            src="/Vector 1.png"
            width={250}
            height={24.73}
            alt="vector-1"
            className="absolute bottom-0 right-0"
          />
        </div>
        <div className="flex items-center justify-between border rounded-l-md">
          <div className="flex items-center gap-2 pl-4 py-2 xl:px-6 xl:py-4">
            <Image
              src="/search-normal.svg"
              width={24}
              height={24}
              alt="search-normal"
            />
            <input placeholder="ค้นหาหลักสูตร" />
          </div>
          <button className="bg-[#A8AD00] text-white py-2 px-4 xl:py-4 rounded-r-md">
            ค้นหา
          </button>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-4">
        {TitleCourses.map((course) => {
          const isSelected = selectedTitle === course.id;
          return (
            <div
              onClick={() => setSelectedTitle(course.id)}
              key={`course-${course.id}`}
              className={`p-10 xl:h-[548px] rounded-3xl relative xl:flex flex-col justify-between bg-no-repeat ${
                isSelected
                  ? "w-80 h-[25rem] xl:w-[412px] text-white"
                  : "xl:w-[150px] w-80"
              }`}
              style={{
                backgroundImage: `url('${course.backgroundUrl}')`,
              }}>
              <div
                className="absolute w-full top-0 left-0 opacity-80 z-10 h-full rounded-3xl"
                style={{ background: course.backgroundColor }}
              />
              <div className="z-20 flex flex-col">
                <p
                  className={
                    isSelected ? "font-bold text-3xl" : "font-bold text-3xl"
                  }>
                  {course.title}
                </p>
                {isSelected && (
                  <span className="text-2xl">{course.description}</span>
                )}
              </div>
              <div className="flex gap-4 z-20 items-center">
                <Image
                  src={course.author.imageUrl}
                  width={55}
                  height={55}
                  alt={course.author.imageUrl}
                />
                {isSelected && (
                  <div>
                    <p>{course.author.name}</p>
                    <p>{course.author.detail}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
