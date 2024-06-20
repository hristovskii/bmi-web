"use client";

import Link from "next/link";
import Logo from "@/app/resources/svg_logo.svg";
import background from '../resources/texture.jpg'
import Image from 'next/image';
import IconComponent from "./Icon";
import { LuInfo } from "react-icons/lu";

export default function Header() {
    return (
        <header className="bg-white px-12 w-full"  
        style={{
            backgroundColor: "#05474D",
           
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
            <nav className="flex md:justify-between items-center justify-center gap-10">
                
                <h3 className="items-center text-center justify-center flex font-eestec text-eestec text-3xl font-semibold pt-2 ">ShapeCheck</h3>
                <Link href={"/"}>
                    <Image src={Logo} alt="ShapeCheck Logo" width={50} height={50} className="py-3"/>
                </Link>
                {/* <IconComponent
                      icon={LuInfo}
                      color="white"
                      size="3rem"
                    ></IconComponent> */}
            </nav>
        </header>
    );
}