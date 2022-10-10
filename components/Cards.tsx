import React from "react";
import {motion} from "framer-motion";

export default function Cards() {
    return <article className={"flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"}>
        <motion.img
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{duration: 1.2}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className={"w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"}
            src={"https://media.istockphoto.com/vectors/profile-picture-vector-illustration-vector-id587805038?k=20&m=587805038&s=612x612&w=0&h=JGnDyfsxiom4kZcloJDfuOSybEhAiKXt9zAJEfr7wY8="}
            alt={""}/>
        <div className={"px-0 md:px-10"}>
            <h4 className={"text-4xl font-light"}>CEO SomeWhere</h4>
            <p className={"font-bold text-2xl mt-1"}>Company</p>
            <div className={"flex space-x-2 my-2"}>
                <img className={"h-10 w-10"}
                     src={"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"} alt={""}/>
                <img className={"h-10 w-10"}
                     src={"https://w1.pngwing.com/pngs/136/126/png-transparent-javascript-logo-angularjs-nodejs-computer-programming-web-development-computer-software-jquery-yellow.png"}
                     alt={""}/>
                <img className={"h-10 w-10"}
                     src={"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"} alt={""}/>
            </div>
            <p className={"uppercase py-5 text-gray-300"}>Started work.. -Ended</p>
            <ul className={"list-disc space-y-4 ml-5 text-lg"}>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
            </ul>
        </div>
    </article>
}