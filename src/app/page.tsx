"use client";

// Dependency imports
import { useEffect, useState } from "react";
import Image from "next/image";

// Data imports
import listOfFeatures from "@/data/features";

// Components
import BentoBox from "@/components/BentoBox";
import BentoBoxB from "@/components/BentoBoxB";
import LandingFooter from "@/components/LandingFooter";

export default function Home() {
    return (
        <main className="dark">
            <div className=" h-screen bg-background flex flex-col items-center justify-center gap-4 z-0">
                <Image
                    src="/img/background.jpg"
                    alt=""
                    objectFit="cover"
                    quality={100}
                    layout="responsive"
                    width={1600}
                    height={900}
                    className=" z-10 absolute transform translate-y-1/3"
                />
                <h1 className=" text-7xl text-textColor z-20">
                    Prepare better with DevPrep
                </h1>
                <p className="text-textColor z-20">
                    Centralize your dev journey, Simplify your success
                </p>
                <button className="text-textColor z-20 border py-3 px-10 rounded-3xl hover:bg-slate-400">
                    Start now
                </button>
            </div>

            <div className=" h-auto w-full z-20 bg-background flex flex-col items-center justify-center gap-3">
                <h2 className="text-textColor z-20 text-5xl">
                    How do we work?
                </h2>
                <p className="text-textColor z-20 pb-6">
                    Discover our features that make it simple to keep track of
                    your progress
                </p>

                <div className=" grid h-4/5 w-4/5 grid-cols-3 grid-rows-5 gap-4 max-w-1080">
                    {listOfFeatures.map((f) => {
                        if (f.bentoType === "b-w") {
                            return <BentoBoxB feature={f} key={f.title} />;
                        }
                        return <BentoBox feature={f} key={f.title} />;
                    })}
                </div>
            </div>

            <div className="h-screen z-10 flex justify-center items-center">
                <div className=" w-4/5 max-w-1080 h-auto flex justify-around">
                    <div className=" w-72">
                        <h2 className="text-textColor text-6xl">Contact</h2>
                        <h2 className="text-textColor text-6xl text-right">
                            Us
                        </h2>
                        <p className="text-textColor">
                            Leave a message about any features you would like to
                            see in the future!
                        </p>
                    </div>
                    <div>
                        <p className="text-textColor">Name</p>
                        <input type="text" />
                        <p className="text-textColor">Email</p>
                        <input type="text" />
                        <p className="text-textColor">Share your thoughts</p>
                        <input type="text" />
                        <button className="text-textColor"></button>
                    </div>
                </div>

                <LandingFooter></LandingFooter>
            </div>
        </main>
    );
}
