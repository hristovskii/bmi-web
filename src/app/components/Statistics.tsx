"use client";

import Numbers from "./Numbers";

import { RevealList } from  'next-reveal';

export default function Statistics() {
    return(
        <section className="my-10 md:mx-28 mx-12">
            <RevealList interval={100} delay={700}>
                <div className="lg:flex justify-evenly items-center gap-24">
                    <Numbers number={"150+"} text={"players"}></Numbers>
                    <Numbers number={"60+"} text={"mods"}></Numbers>
                    <Numbers number={"24/7"} text={"online"}></Numbers>
                </div>
            </RevealList>
        </section>
    );
}