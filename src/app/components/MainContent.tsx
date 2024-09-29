"use client";
import Image from "next/image";
import {
  BLOGS,
  COURSE_CATEGORIES,
  MY_COURSES,
  ONLINE_COURSES,
  TITLE_COURSE,
} from "../data/data";
import { useState } from "react";

type CourseType = "my-course" | "online-course";
export default function MainContent() {
  const [selectedTitle, setSelectedTitle] = useState(1);
  const [myCourseIndex, setMyCourseIndex] = useState(0);
  const [onlineCourseIndex, setOnlineCourseIndex] = useState(0);

  function next(type: CourseType) {
    if (type === "my-course" && myCourseIndex < MY_COURSES.length - 1)
      setMyCourseIndex(myCourseIndex + 1);
    else if (
      type === "online-course" &&
      onlineCourseIndex < ONLINE_COURSES.length - 1
    )
      setOnlineCourseIndex(onlineCourseIndex + 1);
  }
  function previous(type: CourseType) {
    if (type === "my-course" && myCourseIndex > 0)
      setMyCourseIndex(myCourseIndex - 1);
    else if (type === "online-course" && onlineCourseIndex > 0)
      setOnlineCourseIndex(onlineCourseIndex - 1);
  }
  const myCourseContent = () => {
    const selectedCourse = MY_COURSES[myCourseIndex];
    return (
      <div
        style={{ boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.04)" }}
        className="rounded-3xl"
        key={`my-course-${selectedCourse.id}`}>
        <div
          className="h-[152px] text-white font-semibold w-[304px] bg-no-repeat py-5 px-6"
          style={{
            backgroundImage: `url('${selectedCourse.backgroundUrl}')`,
          }}>
          <p>{selectedCourse.title}</p>
        </div>
        <div className="px-6 py-7 flex flex-col gap-9">
          <p>{selectedCourse.description}</p>
          <div>
            <p>
              เรียนไปแล้ว{" "}
              <span className="font-bold">{selectedCourse.progress}%</span>
            </p>
            <div className=" rounded-full flex flex-1 bg-[#EEEEEE] py-1" />
          </div>
        </div>
      </div>
    );
  };
  const onlineCourse = () => {
    const selectedOnlineCourse = ONLINE_COURSES[onlineCourseIndex];
    const isEven = onlineCourseIndex % 2 === 0;
    return (
      <div
        key={`online-course-${selectedOnlineCourse.id}`}
        className={`h-[548px] rounded-3xl w-[304px] flex flex-col justify-between bg-no-repeat py-11 px-7 ${
          isEven ? "text-black" : "text-white"
        }`}
        style={{
          backgroundImage: `url('${selectedOnlineCourse.backgroundUrl}')`,
          boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.04)",
        }}>
        <div className="flex flex-col gap-7">
          <p
            className={`py-2 px-4 border rounded-full w-fit ${
              isEven
                ? "border-[#7B7B7B] text-[#7B7B7B]"
                : "border-white text-[#B6B6B6]"
            }`}>
            {selectedOnlineCourse.type}
          </p>
          <p className="font-bold text-2xl">{selectedOnlineCourse.title}</p>
          <p className="text-xl">{selectedOnlineCourse.description}</p>
        </div>
        <div className="flex gap-4 items-center">
          <Image
            src={selectedOnlineCourse.author.imageUrl}
            width={55}
            height={55}
            alt={selectedOnlineCourse.author.imageUrl}
          />
          <div>
            <p>{selectedOnlineCourse.author.name}</p>
            <p>{selectedOnlineCourse.author.detail}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="flex items-center justify-between flex-col mt-5">
      <div className="flex w-80 xl:w-full flex-col xl:flex-row gap-14 justify-between">
        <div className="flex gap-6 flex-col">
          <div className="relative py-3">
            <p className="text-xl text-secondary font-medium">
              Lorem Ipsum is simply dummy .
            </p>
            <div className="w-80 font-semibold text-[3.25rem]">
              <p>
                learn anytime, anywhere with{" "}
                <span className="text-secondary">Lorem</span>
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
        <div className="flex flex-col items-center xl:flex-row gap-4">
          {TITLE_COURSE.map((course) => {
            const isSelected = selectedTitle === course.id;
            return (
              <div
                onClick={() => setSelectedTitle(course.id)}
                key={`course-${course.id}`}
                className={`p-10 xl:h-[548px] w-full rounded-3xl relative gap-5 flex-col flex bg-no-repeat bg-cover justify-between ${
                  isSelected
                    ? "w-80 h-[25rem] xl:w-[412px] text-white"
                    : "xl:w-[150px] w-full"
                }`}
                style={{
                  backgroundImage: `url('${course.backgroundUrl}')`,
                }}>
                <div className="flex flex-col">
                  <p
                    className={`${
                      isSelected
                        ? "font-bold text-3xl"
                        : "font-bold text-3xl xl:-rotate-90 xl:-translate-x-1/3 xl:translate-y-12 xl:w-64 break-words"
                    }`}>
                    {course.title}
                  </p>
                  {isSelected && (
                    <span className="text-2xl">{course.description}</span>
                  )}
                </div>
                <div className="flex gap-4 items-center">
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
      <div className="w-80 xl:w-full mt-20">
        <div className="flex gap-6 items-center">
          <Image
            src="/video-vertical.png"
            width={32}
            height={32}
            alt="video-vertical"
          />
          <p className="font-bold text-2xl">เลือกเรียนตามหัวข้อที่สนใจ</p>
        </div>
        <div className="flex flex-col xl:flex-row gap-5 mt-9">
          {COURSE_CATEGORIES.map((category) => (
            <div
              className="px-6 py-5 rounded-3xl gap-5 flex flex-col"
              style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              key={`category-${category.id}`}>
              <div className="flex gap-6 items-center">
                <Image
                  src={`/${category.logoUrl}`}
                  width={38}
                  height={38}
                  alt={category.logoUrl}
                />
                <p className="font-semibold text-xl">{category.title}</p>
              </div>
              <span className="text-body">{category.description}</span>
              <div className="flex justify-end">
                <button>
                  <Image
                    src="/arrow-right.png"
                    alt="arrow-right"
                    width={30}
                    height={30}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-80 xl:w-full mt-20">
        <div className="flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <Image
              src="/video-vertical.png"
              width={32}
              height={32}
              alt="video-vertical"
            />
            <p className="font-bold text-2xl">คอร์สของฉัน</p>
          </div>
          <button className="py-2 px-9 border-2 text-lg border-[#A8AD00] text-[#A8AD00] rounded-full">
            ดูทั้งหมด
          </button>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <Image
            onClick={() => previous("my-course")}
            src="/Group 23.png"
            width={36}
            height={36}
            alt="Group 23"
            className="w-9 h-9"
          />
          <div className="hidden flex-col xl:flex xl:flex-row gap-5 justify-center mt-9">
            {MY_COURSES.map((myCourse) => (
              <div
                style={{ boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.04)" }}
                className="rounded-3xl"
                key={`my-course-${myCourse.id}`}>
                <div
                  className="h-[152px] text-white font-semibold w-[304px] bg-no-repeat py-5 px-6"
                  style={{
                    backgroundImage: `url('${myCourse.backgroundUrl}')`,
                  }}>
                  <p>{myCourse.title}</p>
                </div>
                <div className="px-6 py-7 flex flex-col gap-9">
                  <p>{myCourse.description}</p>
                  <div>
                    <p>
                      เรียนไปแล้ว{" "}
                      <span className="font-bold">{myCourse.progress}%</span>
                    </p>
                    <div className=" rounded-full flex flex-1 bg-[#EEEEEE] py-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="block xl:hidden mt-9">{myCourseContent()}</div>

          <Image
            onClick={() => next("my-course")}
            src="/Group 22.png"
            width={36}
            height={36}
            alt="Group 22"
            className="w-9 h-9"
          />
        </div>
      </div>
      <div className="w-80 xl:w-full mt-20">
        <div className="flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <Image
              src="/video-vertical.png"
              width={32}
              height={32}
              alt="video-vertical"
            />
            <p className="font-bold text-2xl">คอร์สออนไลน์</p>
          </div>
          <button className="py-2 px-9 border-2 text-lg border-[#A8AD00] text-[#A8AD00] rounded-full">
            ดูทั้งหมด
          </button>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <Image
            onClick={() => previous("online-course")}
            src="/Group 23.png"
            width={36}
            height={36}
            alt="Group 23"
            className="w-9 h-9"
          />
          <div className="hidden flex-col xl:flex xl:flex-row gap-5 justify-center mt-9">
            {ONLINE_COURSES.map((onlineCourse, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={`online-course-${onlineCourse.id}`}
                  className={`h-[548px] rounded-3xl w-[304px] flex flex-col justify-between bg-no-repeat py-11 px-7 ${
                    isEven ? "text-black" : "text-white"
                  }`}
                  style={{
                    backgroundImage: `url('${onlineCourse.backgroundUrl}')`,
                    boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.04)",
                  }}>
                  <div className="flex flex-col gap-7">
                    <p
                      className={`py-2 px-4 border rounded-full w-fit ${
                        isEven
                          ? "border-[#7B7B7B] text-[#7B7B7B]"
                          : "border-white text-[#B6B6B6]"
                      }`}>
                      {onlineCourse.type}
                    </p>
                    <p className="font-bold text-2xl">{onlineCourse.title}</p>
                    <p className="text-xl">{onlineCourse.description}</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Image
                      src={onlineCourse.author.imageUrl}
                      width={55}
                      height={55}
                      alt={onlineCourse.author.imageUrl}
                    />
                    <div>
                      <p>{onlineCourse.author.name}</p>
                      <p>{onlineCourse.author.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="block xl:hidden mt-9">{onlineCourse()}</div>

          <Image
            onClick={() => next("online-course")}
            src="/Group 22.png"
            width={36}
            height={36}
            alt="Group 22"
            className="w-9 h-9"
          />
        </div>
      </div>
      <div className="w-80 xl:w-full mt-20">
        <div className="flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <Image
              src="/video-vertical.png"
              width={32}
              height={32}
              alt="video-vertical"
            />
            <p className="font-bold text-2xl">บทความและข่าวสารล่าสุด</p>
          </div>
          <button className="py-2 px-9 border-2 text-lg border-[#A8AD00] text-[#A8AD00] rounded-full">
            ดูทั้งหมด
          </button>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-between gap-5 mt-9">
          <div className="flex-col flex gap-5 justify-between">
            {BLOGS.slice(0, 2).map((blog) => {
              return (
                <div
                  key={`online-course-${blog.id}`}
                  className="xl:h-[413px] rounded-3xl w-full xl:w-[627px] flex flex-col xl:flex-row justify-between"
                  style={{
                    boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.04)",
                  }}>
                  <div
                    className="font-bold xl:rounded-none rounded-t-3xl w-full object-cover bg-no-repeat bg-cover xl:w-[280px] text-2xl text-white px-10 py-12"
                    style={{
                      backgroundImage: `url('${blog.backgroundUrl}')`,
                    }}>
                    <p>{blog.title}</p>
                  </div>
                  <div className="flex flex-col justify-between gap-6 w-[347px] px-10 py-6">
                    <div className="space-y-6">
                      <p className="py-2 px-4 border border-secondary text-secondary rounded-full w-fit">
                        {blog.type}
                      </p>
                      <div className="space-y-2">
                        <p className="font-bold text-2xl">{blog.subtitle}</p>
                        <p className="text-xl">{blog.detail}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-3">
                        <Image
                          src="/clock.png"
                          alt="clock"
                          width={24}
                          height={24}
                        />
                        <p>{blog.publishedAt}</p>
                      </div>
                      <div className="flex gap-3">
                        <Image
                          src="/eye.png"
                          alt="eye"
                          width={24}
                          height={24}
                        />
                        <p>{blog.viewer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-5 grow">
            {BLOGS.slice(2, BLOGS.length).map((blog) => (
              <div
                key={`online-course-${blog.id}`}
                className="xl:h-[269px] rounded-3xl w-full xl:w-[627px] flex flex-col xl:flex-row justify-between"
                style={{
                  boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.04)",
                }}>
                <div
                  className="font-bold xl:rounded-none rounded-t-3xl bg-no-repeat bg-cover xl:w-[214px] text-xl text-white text-center px-9 flex items-center py-12"
                  style={{
                    backgroundImage: `url('${blog.backgroundUrl}')`,
                  }}>
                  <p>{blog.title}</p>
                </div>
                <div className="flex flex-col justify-between w-full xl:w-[413px] gap-6 px-10 py-6">
                  <div className="space-y-6">
                    <p className="py-2 px-4 border border-secondary text-secondary rounded-full w-fit">
                      {blog.type}
                    </p>
                    <div className="space-y-2">
                      <p className="font-bold text-xl">{blog.subtitle}</p>
                      <p>{blog.detail}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-80 flex flex-col gap-9 xl:w-full mt-20">
        <div className="flex gap-6 items-center">
          <Image
            src="/video-vertical.png"
            width={32}
            height={32}
            alt="video-vertical"
          />
          <p className="font-bold text-2xl">คอร์สออนไลน์</p>
        </div>
        <div
          className="w-full rounded-3xl px-10 py-11 space-y-4"
          style={{ boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.04)" }}>
          <div className="space-y-3">
            <p className="font-bold text-xl">หัวข้อกระทู้</p>
            <input
              placeholder="หัวข้อกระทู้"
              className="px-6 py-3 border rounded-xl"
            />
          </div>
          <div className="space-y-3">
            <p className="font-bold text-xl">เนื้อหา</p>
            <textarea className="border w-full rounded-xl px-6 py-3" />
          </div>
          <div className="flex justify-end items-center">
            <button className="rounded-xl bg-[#A8AD00] text-white px-2 py-4 w-full xl:w-[145px]">
              ส่ง
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
