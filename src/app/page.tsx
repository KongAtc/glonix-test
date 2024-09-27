import Image from "next/image";
import Link from "next/link";
import { TitleCourses } from "./data/data";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="max-w-[1280px] w-full pt-4 md:pt-[38px] px-5">
        <nav className="flex justify-between w-full items-center">
          <div className="flex gap-4 sm:gap-8 items-center">
            <p className="text-seconday font-semibold text-[2.125rem]">LOGO</p>
            <div className="flex gap-2 sm:gap-6">
              <Link href="" className="text-body">
                รายวิชา
              </Link>
              <Link href="" className="text-body">
                ถ่ายทอดสด
              </Link>
              <Link href="" className="text-body">
                กระทู้คำถาม
              </Link>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="py-4 md:block hidden px-6 bg-[#EFEFEF] rounded-[1.125rem]">
              ออกจากระบบ
            </button>
            <button className="bg-[#1C1C29] flex items-center gap-2 rounded-full md:rounded-[1.125rem] md:py-4 md:px-6">
              <Image
                src="/Ellipse 1.png"
                width={30}
                height={30}
                alt="image-profile"
              />
              <p className="text-white md:block hidden">Siriwat Rachanon</p>
              <Image
                src="/arrow-down.png"
                width={24}
                height={24}
                alt="arrow-down"
                className="md:block hidden"
              />
            </button>
          </div>
        </nav>
        <div className="flex items-center justify-center flex-col gap-14 mt-5">
          <div className="flex gap-6 flex-col">
            <div className="relative py-3">
              <p className="text-lg text-seconday font-medium">
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
              <button className="bg-[#A8AD00] text-white py-2 px-4 rounded-r-md">
                ค้นหา
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {TitleCourses.map((course) => (
              <div
                key={`course-${course.id}`}
                className="p-10 lg:h-[548px] h-[25rem] lg:w-[412px]  w-80 rounded-3xl relative flex flex-col justify-between bg-no-repeat"
                style={{
                  backgroundImage: `url('${course.backgroundUrl}')`,
                }}>
                <div
                  className="absolute w-full top-0 left-0 opacity-80 z-10 h-full rounded-3xl"
                  style={{ background: course.backgroundColor }}
                />
                <div className="z-20">
                  <p className="font-bold text-3xl">{course.title}</p>
                  <span className="text-2xl">{course.description}</span>
                </div>
                <div className="flex gap-4 z-20 items-center">
                  <Image
                    src={course.author.imageUrl}
                    width={55}
                    height={55}
                    alt={course.author.imageUrl}
                  />
                  <div>
                    <p>{course.author.name}</p>
                    <p>{course.author.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
