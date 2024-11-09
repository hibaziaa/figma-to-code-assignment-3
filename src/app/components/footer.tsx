import Image from "next/image";
import Logo from "@/app/assets/Logo.png";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  return (
    <>
      <div
        className={`${inter.className} h-[461px] w-[1920px] bg-[#043873] top-[5195px] px-[220px] pt-[140px] pb-8`}
      >
        <div className="flex flex-col gap-[100px] w-[1480px] h-[289px]">
          <div className="h-[169px] w-[1480px] text-white flex gap-[100px]">
            <div className="h-[169px] w-[295px]">
              <Image src={Logo} alt="logo" />
              <p className="text-lg font-normal leading-[30px] tracking-[-0.02em] mt-[15px] ">
                whitepace was created for the new ways we live and work. We make
                a better workspace around the world
              </p>
            </div>
            <div className="h-[127px] w-[295px] flex flex-col gap-[15px]">
              <p className="font-bold text-lg leading-[21.78px] tracking[-0.02em] ">
                Product
              </p>
              <a
                href="#"
                className="hover:text-[#FFD36B] font-normal text-base leading-[20px] tracking-[-0.02em]"
              >
                Overview
              </a>
              <a
                href="#"
                className="hover:text-[#FFD36B] font-normal text-base leading-[20px] tracking-[-0.02em]"
              >
                Pricing
              </a>
              <a
                href="#"
                className="hover:text-[#FFD36B] font-normal text-base leading-[20px] tracking-[-0.02em] "
              >
                Customer stories
              </a>
            </div>
            <div className="h-[127px] w-[295px] flex flex-col gap-[15px]">
              <p className="font-bold text-lg leading-[21.78px] tracking[-0.02em]">
                Resources
              </p>
              <a
                href="#"
                className="hover:text-[#FFD36B] font-normal text-base leading-[20px] tracking-[-0.02em]"
              >
                Blog
              </a>
              <a
                href="#"
                className="hover:text-[#FFD36B] font-normal text-base leading-[20px] tracking-[-0.02em]"
              >
                Guides & tutorials
              </a>
              <a
                href="#"
                className="hover:text-[#FFD36B] font-normal text-base leading-[20px] tracking-[-0.02em]"
              >
                Help center
              </a>
            </div>
            <div className="h-[127px] w-[295px] flex flex-col gap-[15px]">
              <p className="font-bold text-lg leading-[21.78px] tracking[-0.02em]">
                Company
              </p>
              <a
                href="#"
                className="hover:text-[#FFD36B] font-normal text-base leading-[20px] tracking-[-0.02em]"
              >
                About us
              </a>
              <a
                href="#"
                className="hover:text-[#FFD36B] font-normal text-base leading-[20px] tracking-[-0.02em]"
              >
                Careers
              </a>
              <a
                href="#"
                className="hover:text-[#FFD36B] font-normal text-base leading-[20px] tracking-[-0.02em]"
              >
                Media Kits
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center w-full ">
            <hr className="w-3/4 mb-4 border-t-2 border-[#305177]" />
            <p className="font-normal text-base leading-[20px] tracking-[-0.02em] text-white">
              ©2021 Whitepace LLC.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
