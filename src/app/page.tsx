import Image from "next/image";
import Link from "next/link";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <div className="flex justify-center w-full flex-col items-center">
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
      <footer className="bg-secondary w-full flex justify-center items-center text-white py-10">
        <div className="max-w-[1280px] text-center xl:text-left grow space-y-8">
          <p className="font-bold text-[4rem]">LOGO</p>
          <div className="border" />
          <div className="flex flex-wrap xl:flex-row flex-col justify-between gap-6">
            <div className="flex-col flex gap-3 xl:gap-7">
              <p className="font-bold text-xl">คอร์สของเรา</p>
              <div className="flex flex-col gap-2 xl:gap-4">
                <Link href="/">Data</Link>
                <Link href="/">Science</Link>
                <Link href="/">Tech</Link>
                <Link href="/">Business</Link>
              </div>
            </div>
            <div className="flex-col flex gap-3 xl:gap-7">
              <p className="font-bold text-xl">เกี่ยวกับเรา</p>
              <div className="flex flex-col gap-2 xl:gap-4">
                <Link href="/">สอนกับเรา</Link>
                <Link href="/">ติดต่อสอบถามเพิ่มเติม</Link>
                <Link href="/">แจ้งปัญหาเกี่ยวกับระบบ</Link>
                <Link href="/">ช่องทางการร้องเรียน</Link>
              </div>
            </div>
            <div className="flex-col flex gap-3 xl:gap-7">
              <p className="font-bold text-xl">ความปลอดภัย</p>
              <div className="flex flex-col gap-2 xl:gap-4">
                <Link href="/">Privacy Policy</Link>
                <Link href="/">Terms and Conditions</Link>
                <Link href="/">Data Protection Policy Six</Link>
                <Link href="/">Cookie Policy</Link>
              </div>
            </div>
            <div className="space-y-4">
              <p className="font-bold text-xl">ความปลอดภัย</p>
              <p>199 ม.6 ต.ทุ่งสุขลา อ.ศรีราชา จ.ชลบุรี 20230</p>

              <div className="justify-center flex xl:flex- gap-2 flex-col items-center xl:items-start">
                <p className="font-bold">ติดต่อเรา</p>
                <div className="flex gap-4">
                  <Image
                    src="/youtube.png"
                    alt="youtube"
                    width={24}
                    height={24}
                  />
                  <Image
                    src="/facebook.png"
                    alt="facebook"
                    width={24}
                    height={24}
                  />
                  <Image
                    src="/twitter.png"
                    alt="twitter"
                    width={24}
                    height={24}
                  />
                  <Image
                    src="/instagram.png"
                    alt="instagram"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border" />
          <div className="flex flex-col xl:flex-row justify-between">
            <p>Y.I.M Corporation @ 2023. All rights reserved.</p>
            <p>0-3835-4580-4 , 0-3835-2611-6</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
