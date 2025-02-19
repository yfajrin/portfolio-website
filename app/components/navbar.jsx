'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937') 
    const currentRoute = usePathname().split('/');

    useEffect(() => {
        if(currentRoute.length === 4) {
            setNavBg('transparent');
            setLinkColor('#ecf0f3')
        } else {
            setNavBg('#ecf0f3');
            setLinkColor('#1f2937');
        }
    },[currentRoute])

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
        if(window.scrollY >= 90) {
            setShadow(true);
        } else {
            setShadow(false);
        }
    };
    window.addEventListener('scroll', handleShadow)
    }, [])

    return(
        <div style={{backgroundColor:`${navBg}`}} className={shadow ? 'fixed bg-[#ecf0f3] w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/'>
                    <Image className='pl-5' src='/assets/kf.png' alt='Kang Fajrin Logo' width='75' height='30'  />
                </Link>

                <div>
                    <ul style={{color:`${linkColor}`}} className='hidden md:flex pr-5'>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='https://kangfajrin.id/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Blog</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden cursor-pointer'>
                        <AiOutlineMenu style={{color:`${linkColor}`}}  size={25} />
                    </div>
                </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav 
                                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500' }>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src='/assets/kf.png' alt='Kang Fajrin Logo' width='75' height='30'  />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>
                                Let`s build something crazy
                            </p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col pb-10'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>Project</li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-10'>
                            <p className='tracking-widest uppercase text-[#7abf17]'>Let`s connect!</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='https://www.linkedin.com/in/fajrin-ym/' rel="noopener noreferrer" target="_blank">
                                        <FaLinkedinIn />
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='https://github.com/yfajrin' rel="noopener noreferrer" target="_blank">
                                        <FaGithub />
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='mailto:fajrinyusuf@gmail.com' rel="noopener noreferrer" target="_blank">
                                        <AiOutlineMail />
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <Link href='https://api.whatsapp.com/send/?phone=447470636463&text&type=phone_number&app_absent=0' rel="noopener noreferrer" target="_blank">
                                        <BsWhatsapp />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;