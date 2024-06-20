"use client";
import Link from "next/link";

// import background from "@/app/resources/"
import { FaInstagram, FaLinkedin, FaPeopleRobbery, FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import IconComponent from "./Icon";

export default function Footer() {
    return(
        <header className="bg-white px-12 w-full content-center"  style={{
            backgroundColor: "#05474D",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
            <nav className="flex md:justify-between items-center justify-center">
                
                <div className="md:flex justify-center items-center gap-20">
                    
                <article className="grid justify-items-center md:px-10 px-1 py-4 my-2">
                <Link href={""}>
                    <IconComponent icon={FaInstagram} size="4rem" color="white"></IconComponent>
                    <h3 className="text-center text-base text-neutral-700 underline text-white decoration-2 underline-offset-4 font-medium my-1">{"Instagram"}</h3>
                </Link>
                </article>
                <article className="grid justify-items-center md:px-10 px-1 py-4 my-2">
                <Link href={""}>
                    <IconComponent icon={FaSquareFacebook} size="4rem" color="white"></IconComponent>
                    <h3 className="text-center text-base text-neutral-700 underline text-white decoration-2 underline-offset-4 font-medium my-1">{"Facebook"}</h3>
                </Link>
                </article>
                <article className="grid justify-items-center md:px-10 px-1 py-4 my-2">
                <Link href={""}>
                    <IconComponent icon={FaXTwitter} size="4rem" color="white"></IconComponent>
                    <h3 className="text-center text-base text-neutral-700 underline text-white decoration-2 underline-offset-4 font-medium my-1">{"Twitter"}</h3>
                </Link>
                </article>
                <article className="grid justify-items-center md:px-10 px-1 py-4 my-2">
                    <Link href={""}>
                    <IconComponent icon={FaLinkedin} size="4rem" color="white"></IconComponent>
                    <h3 className="text-center text-base text-neutral-700 underline text-white decoration-2 underline-offset-4 font-medium my-1">{"LinkedIn"}</h3>
                    </Link>
                </article>
                </div>
            
                <h3 className="max-md:hidden font-eestec text-white text-3xl font-semibold pt-2 ">Power Your Body</h3>
            </nav>
            <div className="content-end">
            <h1 className="lg:flex justify-center text-white text-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
                © 2024 Petar Hristovski. All rights served.
                </h1>
            </div>
        </header>
    );
}


