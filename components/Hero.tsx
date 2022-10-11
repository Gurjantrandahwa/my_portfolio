import React from "react";
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

export default function Hero() {
    const [text, count] = useTypewriter({
        words: ["Hi, My name is Gurjant Singh",
            "A front-end Developer",
            "<WhoLovesToCodeMore />"],
        loop: true,
        delaySpeed: 2000,
    });
    return <div className={"h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"}>
        <BackgroundCircles/>
        <img className={"relative rounded-full h-32 w-32 mx-auto object-cover"}
            src={"https://scontent.fluh1-2.fna.fbcdn.net/v/t39.30808-6/296443020_3247308662252299_5817958111528289864_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sT5OhWXPd2oAX9DaWem&tn=gfXzRWYOBYB_Ecym&_nc_ht=scontent.fluh1-2.fna&oh=00_AT8_sWxzONZgur0Fah4bA3y8wu9Yr61PPaYYw56M2Ojffg&oe=6346E4AE"}
             alt={""}/>
        <div className={"z-20"}>
            <h2 className={"text-sm uppercase text-gray-500 pb-2 tracking-[15px]"}>Web Developer</h2>
            <h1 className={"text-1xl lg:text-3xl font-semibold px-10"}>
                <span className={"mr-3"}>{text}</span>
                <Cursor cursorColor={"#F7AB04"}/>
            </h1>
            <div className={"pt-5"}>
                <Link href={"#about"}>
                    <button className={"heroButton"}>About</button>
                </Link>
                {/*<Link href={"#experience"}>*/}
                {/*    <button className={"heroButton"}>Experience</button>*/}
                {/*</Link>*/}
                <Link href={"#skills"}>
                    <button className={"heroButton"}>Skills</button>

                </Link>
                <Link href={"#projects"}>
                    <button className={"heroButton"}>Projects</button>
                </Link>
            </div>
        </div>


    </div>
}