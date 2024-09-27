import Image from "next/image";
import Link from "next/link";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="max-w-[1280px] w-full pt-4 md:pt-[38px] px-5">
        <nav className="flex justify-between w-full items-center">
          <div className="flex gap-4 sm:gap-8 items-center">
            <p className="text-secondary font-semibold text-[2.125rem]">LOGO</p>
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
        <MainContent />
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
