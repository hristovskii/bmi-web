"use client";

import { MdElectricBolt } from "react-icons/md";
import SecondaryButton from "./SecondaryButton";
import Photo2 from "@/app/resources/svg_logo.svg";

import Image from "next/image";

import { RevealList } from  'next-reveal';
export default function Promo() {
    return(
        <section className="my-10 md:mx-12 mx-auto px-8 ">

        <RevealList interval={100} delay={600}>
            <div className="rounded bg-eestec md:px-12 py-6 px-8 lg:flex md:justify-between items-center justify-center">
                <div className="">
                <h3 className="lg:text-6xl text-5xl text-white font-eestec font-semibold mt-6 mb-2">Want more ideas like this?</h3>
                <p className="text-white font-eestec font-light text-2xl mb-8">Contact us at @gmail.com and be one of the contributors and be one the first to know about our upcoming mod updates.</p>
                <SecondaryButton text={"Contact Us Now!"} icon={MdElectricBolt}></SecondaryButton>
                </div>
                <div>
                <Image src={Photo2} alt="Promo Image" width={200} height={200}/>
                </div>
            </div>
        </RevealList>
        </section>
    );
}