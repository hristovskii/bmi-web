"use client";
import bg from "../resources/background.png";
import Link from "next/link";
import { FaCopy, FaDownload } from "react-icons/fa";
import IconComponent from "./Icon";
import { useState } from "react";

import { RevealList } from  'next-reveal';

export default function Hero() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText("numbers-formats.gl.joinmc.link");
    setIsCopied(true);
  };

  return (
    <main
      className="w-full px-5 py-24"
      style={{
        height: "95vh",
        backgroundImage: `linear-gradient(180deg, #262626 0%, rgba(38, 38, 38, 0.5) 100%), url(${bg.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container text-center mx-auto md:px-10 px-2 py-16">

        <RevealList interval={100} delay={500}>
          <h1 className="md:text-5xl lg:flex justify-center text-4xl font-semibold my-3 text-balance text-white">
            Calculate your{" "}
            <span className="text-eestec font-bold px-3 shadow"> BMI </span>{" "}
            with
            <span className="text-eestec font-bold px-3 shadow"> ShapeCheck </span>{" "}
          </h1>
          <p className="md:text-base lg:flex justify-center text-sm text-slate-50 my-3 text-balance leading-none">
            Scroll down for the calculator{" "}
            <span className="font-medium px-1.5 reversedShadow">
            ShapeCheck!
            </span>
          </p>
        </RevealList>

        <div className="lg:flex justify-center">
          <RevealList interval={100} delay={700}>
            <div
              className="rounded-full border px-6 my-6 flex justify-center items-center gap-3 text-white "
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            >
              <span>123</span>
              <button
                className="rounded-full border bg-eestec px-7 py-2 my-3 flex justify-center items-center gap-3 animation"
                onClick={handleCopyClick}
              >
                <span className="text-white font-bold">
                  {isCopied ? "Copied" : "Copy"}
                </span>
                <IconComponent
                  icon={FaCopy}
                  color="white"
                  size="20px"
                ></IconComponent>
              </button>
            </div>
          </RevealList>
        </div>

        
        <RevealList interval={200} delay={900}>
              <div className="flex justify-center">
                <Link href={""} target="_blank" >
                  <button className="rounded-full border bg-eestec px-7 py-2 my-3 flex justify-center items-center gap-3 animation">
                    <span className="text-white font-bold">Download BMI table!</span>
                    <IconComponent
                      icon={FaDownload}
                      color="white"
                      size="20px"
                    ></IconComponent>
                  </button>
                </Link>
              </div>
        </RevealList>
      </div>
    </main>
  );
}
