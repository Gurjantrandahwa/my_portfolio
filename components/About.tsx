import React from "react";
import {motion} from "framer-motion";

export default function About() {
    return <motion.div
        initial={{opacity: 0}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1}}
        className={"flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 pt-36 justify-evenly mx-auto items-center"}>

        <h3 className={"absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"}>
            About
        </h3>
        <motion.img
            initial={{
                x: -200,
                opacity: 0
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{x: 0, opacity: 1}}
            viewport={{once: true}}
            src={"https://avatars.githubusercontent.com/u/101963722?s=400&u=84736adea5f02f15f612277e6c66fd008af05413&v=4"}
            className={"-mb-20 md:mb-0 flex-shrink-0 w-50 h-48 rounded-full object-cover md:rounded-lg md:h-95 md:w-64 xl:w-[300px] xl:h-[350px]"}
        />
        <div className={"space-y-10 px-0 md:px-10"}>
            <h4 className={"text-3xl font-semibold pt-20"}>
                Here is a{" "}<span className={"underline decoration-[#F7AB0A]"}>little</span> background
            </h4>
            <p className={"text-base"}>
                Hello! I'm Gurjant Singh, a Front-End Web Developer. I am very passionate about coding so, I started a new journey to build creative design to make eye-catching,
                accessible, user-friendly websites and applications.
                Well-organised person,interested in the entire frontend spectrum and working on ambitious projects
                with positive people.I spend my time on personal projects for learning new skills
            </p>
        </div>
    </motion.div>
}