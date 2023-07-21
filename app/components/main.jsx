'use client'

import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";


const Main = () => {

    return(
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>Transforming Obstacles into Limitless Opportunities</p>
                    <h2 className='py-4 text-gray-700'>Hi, I`m  
                        <TypeAnimation
                            sequence={[' Fajrin', 2000,
                                       ' an Entrepreneur', 2000,
                                       ' a Writer', 2000, 
                                       ' a Data Scientist', 2000,
                                       ' a Researcher', 2000, 
                                       ' a Web Developer', 2000,
                                       ' a Business Teacher', 2000,
                                       ' anything I want to be!', 2000]}
                            wrapper='span'
                            speed='50'
                            style={{color:'#7abf17'}}
                            repeat={Infinity}
                            className='pl-1'
                        />

                    </h2>
                    <h2 className='py-2 text-gray-700'>Let me hear your problems!</h2>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I`m an experienced entrepreneurs with lots of failures, but hey, it brings me to you, a better world. Currently, I`m focused on exploring new technologies to broaden my scope of view.</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-120 ease-in duration-300'>
                            <Link href='https://www.linkedin.com/in/fajrin-yusuf-muttaqin-91115313a/' rel="noopener noreferrer" target="_blank">
                                <FaLinkedinIn />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-120 ease-in duration-300'>
                            <Link href='https://github.com/yfajrin' rel="noopener noreferrer" target="_blank">
                                <FaGithub />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-120 ease-in duration-300'>
                            <Link href='mailto:fajrinyusuf@gmail.com' rel="noopener noreferrer" target="_blank">
                                <AiOutlineMail />
                            </Link>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-120 ease-in duration-300'>
                            <Link href='hhttps://api.whatsapp.com/send/?phone=6285759029216&text&type=phone_number&app_absent=0' rel="noopener noreferrer" target="_blank">
                                <BsWhatsapp />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;