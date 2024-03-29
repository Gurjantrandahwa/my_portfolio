import type {GetStaticProps} from 'next'
import Head from 'next/head'
import Header from "../components/Header";
import Hero from '../components/Hero';
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import {PageInfo, Project, Skill, Social} from "../typing";
import {fetchPageInfo} from "../utils/fetchPageInfo";
import {fetchSkill} from "../utils/fetchSkill";
import {fetchProjects} from "../utils/fetchProjects";
import {fetchSocial} from "../utils/fetchSocial";

type Props = {
    pageInfo: PageInfo;
    skills: Skill[];
    projects: Project[];
    socials: Social[];
}
const Home = ({pageInfo,skills,socials,projects}:Props) => {
    return <div
        className={"bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 " +
            "scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"}>
        <Head>
            <title>{pageInfo?.name} Portfolio</title>
        </Head>
        <Header socials={socials}/>

        <section id={"hero"} className={"snap-start"}>
            <Hero pageInfo={pageInfo}/>
        </section>

        <section id={"about"} className={"snap-center"}>
            <About pageInfo={pageInfo} />
        </section>

        <section id={"skills"} className={"snap-start"}>
            <Skills skills={skills}/>
        </section>

        <section id={"projects"} className={"snap-start"}>
            <Projects projects={projects}/>
        </section>

        <section id={"contact"} className={"snap-start"}>
            <ContactMe/>
        </section>
        {/*https://i.imgur.com/e2yvD6A.png*/}
        <Link href={"#hero"}>
            <div className={"sticky -bottom-0 w-full cursor-pointer"}>
                <footer className={"flex items-center justify-center"}>
                    <img className={"h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"}
                         src={"https://scontent.fluh1-2.fna.fbcdn.net/v/t39.30808-6/296443020_3247308662252299_5817958111528289864_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sT5OhWXPd2oAX9DaWem&tn=gfXzRWYOBYB_Ecym&_nc_ht=scontent.fluh1-2.fna&oh=00_AT8_sWxzONZgur0Fah4bA3y8wu9Yr61PPaYYw56M2Ojffg&oe=6346E4AE"}
                         alt={""}/>
                </footer>
            </div>

        </Link>
    </div>

}

export default Home;
export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo= await fetchPageInfo();
    const skills: Skill[] = await fetchSkill();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocial();
    return {
        props: {
            pageInfo,
            skills,
            projects,
            socials
        },
        revalidate:10,
    };
};
