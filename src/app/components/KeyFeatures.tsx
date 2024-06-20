"use client";

import Feature from "./Feature";
import { RevealList } from  'next-reveal';
import { FaCalculator } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { BiHappy } from "react-icons/bi";

export default function KeyFeatures() {
    return(
        <section className="my-10 md:mx-6 mx-12">

        <RevealList interval={100} delay={500}>
            <div className="md:flex justify-center items-center gap-20">
                <Feature icon={FaCalculator} text={"FAST"}></Feature>
                <Feature icon={BiHappy} text={"HAPPY FACES"}></Feature>
                <Feature icon={IoSchool} text={"EDUCATIONAL"}></Feature>
            </div>
        </RevealList>
        </section>
    );
}