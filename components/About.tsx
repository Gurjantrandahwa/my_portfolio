import React from "react";
import {motion} from "framer-motion";
import {PageInfo} from "../typing";
import {urlFor} from "../sanity";
type Props = {
    pageInfo:PageInfo
}
export default function About({pageInfo}:Props) {
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
            src={urlFor(pageInfo?.heroImage).url()}
            className={"-mb-20 md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg md:h-95 md:w-64 xl:w-[300px] xl:h-[350px]"}
        />
        <div className={"space-y-10 px-0 md:px-10"}>
            <h4 className={"text-3xl font-semibold pt-20"}>
                Here is a{" "}<span className={"underline decoration-[#F7AB0A]"}>little</span> background
            </h4>
            <p className={"text-base"}>
                {pageInfo?.backgroundInformation}
            </p>
        </div>
    </motion.div>
}