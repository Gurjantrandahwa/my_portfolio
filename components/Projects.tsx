import React from "react";
import {motion} from "framer-motion";

export default function Projects() {
    const projects = [1, 2, 3, 4, 5]
    return <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className={"h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"}>
        <h3 className={"absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl "}>
            Projects
        </h3>
        <div className={"relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20" +
            " scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"}>
            {projects.map((project, index) => (
                <div key={index}
                     className={"w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:pt-44 h-screen"}>
                    <motion.img
                        initial={{y:-300,opacity:0}}
                        transition={{duration: 1.2}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className={"w-1/2 mt-20 md:w-1/3"}
                        src={"https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads" +
                            "/mediaGallery/image/1626272988083.jpg-org"}
                        alt={""}/>
                    <div className={"space-x-10 px-0 md:px-10 max-w-6xl"}>
                        <h4 className={"text-3xl font-semibold text-center"}>
                            <span className={"underline decoration-[#F7AB0A]"}>
                            Case Study {index + 1} of {projects.length}
                        </span>
                            {" "}: Netflix Clone
                        </h4>

                        <p className={"text-base text-center md:text-left mt-3"}>
                            A app which is build with the firebase and React.In this
                            signIn and signUp method with good looking UI
                            A app which is build with the firebase and React.
                            In this signIn and signUp method with good looking UI
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <div className={"w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"}/>
    </motion.div>
}