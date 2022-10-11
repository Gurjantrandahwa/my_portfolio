import React from "react";
import {EnvelopeIcon, PhoneIcon} from "@heroicons/react/24/solid";
import {MapPinIcon} from "@heroicons/react/20/solid";
import {useForm, SubmitHandler} from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};
export default function ContactMe() {
    const {register, handleSubmit,} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:gurjantrandhawa74456@gmail?subject=${formData.subject}&body=Hi,my name is${formData.name}.${formData.message} (${formData.email})`;
    };
    return <div
        className={"h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"}>
        <h3 className={"absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl "}>
            Contact
        </h3>
        <div className={"flex flex-col space-y-10"}>
            <h4 className={"text-4xl font-semibold text-center"}>
                I have got just what you need.{" "}
                <span className={"decoration-[#F7AB0A]/50 underline"}>Let's Talk.</span>
            </h4>
            <div className={"space-y-10"}>

                <div className={"flex items-center space-x-5 justify-center"}>
                    <PhoneIcon className={"text-[#F7AB0A] w-7 h-7 animate-pulse"}/>
                    <p className={"text-2xl"}>8528083391</p>
                </div>

                <div className={"flex items-center space-x-5 justify-center"}>
                    <EnvelopeIcon className={"text-[#F7AB0A] w-7 h-7 animate-pulse"}/>
                    <p className={"text-2xl"}>gurjantrandhawa74456@gmail.com</p>
                </div>

                <div className={"flex items-center space-x-5 justify-center"}>
                    <MapPinIcon className={"text-[#F7AB0A] w-7 h-7 animate-pulse"}/>
                    <p className={"text-2xl"}>Goindwal Sahib,Taran-Taran Punjab</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col space-y-2 w-fit mx-auto"}>

                <div className={"flex space-x-2"}>
                    <input
                        {...register('name')}
                        placeholder={"Name"}
                        type={"text"}
                        className={"contactInput"}/>
                    <input
                        {...register('email')}
                        placeholder={"Email"}
                        type={"email"}
                        className={"contactInput"}/>
                </div>
                <input
                    {...register('subject')}
                    placeholder={"Subject"}
                    type={"text"}
                    className={"contactInput"}/>

                <textarea
                    {...register('message')}
                    placeholder={"Message"}
                    className={"contactInput"}/>

                <button type={"submit"}
                        className={"bg-[#F7AB0A] py-3 px-5 rounded-md text-black font-bold text-ls"}>
                    Submit
                </button>

            </form>
        </div>
    </div>
}