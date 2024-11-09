import React from "react";
import Image from "next/image";
import WorkTogether from "@/app/assets/Work Together Image.png";
import ourSponsors from "@/app/assets/sponsors.png";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
const Main = () => {
  return (
    <>
      {/* GET MORE DONE WITH WHITEPACE  */}
      <div
        className={`py-[140px] px-[220px] top-[92px] bg-[#043873] text-white flex items-center w-[1920px] h-[829px] ${inter.className}`}
      >
        <div className="w-[656px] h-[361px] ">
          <div className="w-[656px] h-[238px]">
            <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6">
              Get More Done with whitepace
            </h2>
            <p className="font-normal text-lg leading-[30px] tracking-[-0.02em]">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
            <button className="w-[219px] h-[63px] bg-[#4F9CF9] p-5 rounded-lg mt-[60px] hover:bg-[#3E82D4]">
              Try Whitepace free -&gt;
            </button>
          </div>
        </div>
        <div className="w-[824px] h-[549px] bg-[#C4DEFD] "></div>
      </div>
      {/* 2nd section of project management */}
      <div
        className={`${inter.className} py-[140px] px-[220px] w-[1920px] h-[1588px]`}
      >
        <div className=" flex items-center w-[1480px] h-[547px] gap-6">
          <div className="w-[656px] h-[238px]">
            <h2 className=" text-[#212529] font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6">
              Project Management
            </h2>
            <p className="text-[#212529] font-normal text-lg leading-[30px] tracking-[-0.02em]">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>
            <button className="w-[186px] h-[63px] bg-[#4F9CF9] py-5 px-10 rounded-lg mt-[60px] text-white hover:bg-[#3E82D4] ">
              Get Started -&gt;
            </button>
          </div>

          <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
        </div>
        {/* 3rd worktogether section  */}
        <div className="w-[1480px] h-[661px] mt-[100px] flex items-center gap-[100px]">
          <Image src={WorkTogether} alt="" />

          <div className="h-[171px] w-[670px]">
            <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6 text-[#212529];">
              Work Together
            </h2>
            <p className="text-[#212529] font-normal text-lg leading-[30px] tracking-[-0.02em]">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
            <button className="w-[186px] h-[63px] bg-[#4F9CF9] py-5 px-10 rounded-lg mt-[60px] text-white hover:bg-[#3E82D4]">
              Try it now -&gt;
            </button>
          </div>
        </div>
      </div>
      {/* 4th section, use as extension*/}
      <div
        className={`h-[759px] w-[1921px] top-[2509px] bg-[#043873] flex items-center text-white py-[140px] px-[220px] gap-[98px] ${inter.className}`}
      >
        <div className="w-[697px] h-[294px] ">
          <div className="w-[697px] h-[171px]">
            <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6">
              Use as Extension
            </h2>
            <p className="font-normal text-lg leading-[30px] tracking-[-0.02em]">
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </p>
          </div>
          <button className="w-[219px] h-[63px] bg-[#4F9CF9] p-5 rounded-lg mt-[60px] hover:bg-[#3E82D4]">
            Let&#39;s Go -&gt;
          </button>
        </div>
        <div className="w-[686px] h-[479px] bg-[#C4DEFD]"></div>
      </div>
      {/* 5th section, customise it as your need  */}
      <div
        className={`h-[812.09px] w-[1921px] top-[3268px] flex items-center text-[#212529] py-[140px] px-[220px] gap-[98px] ${inter.className}`}
      >
        <div className="w-[714px] h-[532.09px] bg-[#C4DEFD]"></div>
        <div className="w-[669px] h-[411px] ">
          <div className="w-[669px] h-[288px]">
            <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6">
              Customise it to your needs
            </h2>
            <p className="font-normal text-lg leading-[30px] tracking-[-0.02em]">
              Customise the app with plugins, custom themes and multiple text
              editors (Rich Text or Markdown). Or create your own scripts and
              plugins using the Extension API
            </p>
          </div>
          <button className="w-[219px] h-[63px] bg-[#4F9CF9] p-5 rounded-lg mt-[60px] text-white hover:bg-[#3E82D4] ">
            Let&#39;s Go -&gt;
          </button>
        </div>
      </div>
      {/* 6th section, your work everywhere you are  */}
      <div
        className={`w-[1921px] h-[574px] bg-[#043873] text-white top-[4080px] py-[140px] px-[220px] ${inter.className}`}
      >
        <div className="w-[1481px] h-[294px] gap-[60px] flex items-center flex-col">
          <div className="w-[1064px] h-[171px] ">
            <h1 className="text-7xl font-bold leading-[87.14px] tracking-[-0.02em]">
              Your work, everywhere you are
            </h1>
            <p className="text-lg font-normal leading-[30px] tracking-[-0.02em] text-center mt-6">
              Access your notes from your computer, phone or tablet by
              synchronising with various services, including whitepace, Dropbox
              and OneDrive. The app is available on Windows, macOS, Linux,
              Android and iOS. A terminal app is also available!
            </p>
          </div>
          <button className="w-[219px] h-[63px] bg-[#4F9CF9] p-5 rounded-lg mt-[10px] text-white hover:bg-[#3E82D4]">
            Try Taskey -&gt;
          </button>
        </div>
      </div>
      {/* 7th section, Our sponsors  */}
      <div
        className={`h-[538px] w-[1922px] top-[4654px] py-[140px] px-[220px] ${inter.className}`}
      >
        <div className="h-[87px] w-[1428px]">
          <h1 className=" text-center text-7xl font-bold leading-[87.14px] tracking-[-0.02em] text-[#212529]">
            Our Sponsors
          </h1>
        </div>
        <Image src={ourSponsors} alt="" className="mt-[100px]" />
      </div>
    </>
  );
};

export default Main;
