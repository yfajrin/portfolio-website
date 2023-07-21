'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    return (
    <div id='contact' className='w-full lg:h-screen xl:h-auto mb-auto'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#7abf17] px-10'>Contact</p>
            <h2 className='py-4 px-10'>Get in Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8 px-10'>
                {/* left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                        <Image className='rounded-xl' src='/assets/kang fajrin.jpeg' width={400} height={300} alt='Kang Fajrin Yusuf Muttaqin Photo'/>
                        </div>
                        <div>
                            <h2 className='py-2'>
                                Fajrin Y. M.
                            </h2>
                            <p>Experienced entrepeneur and web developer, part-time mountain hiker, intrigued by data science and research, love to learn something new.</p>
                            <p className='py-4'>I am available for projects</p>
                        </div>
                    <div>
                        <p className='uppercase pt-8'>Connect with Me</p>
                        <div className='flex items-center justify-between py-4'>
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
                {/* right */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>

                        <form onSubmit={()=>{}}>
                            <div className='grid grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type='text'
                                        value={name}
                                        onChange={(e) => {
                                          setName(e.target.value);
                                        }}  
                                        name="name" />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type='text' 
                                        value={phone}
                                        onChange={(e) => {
                                          setPhone(e.target.value);
                                        }}  
                                        name="phone" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type='email' 
                                        value={email}
                                        onChange={(e) => {
                                        setEmail(e.target.value);
                                        }}  
                                        name="email" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type='text' 
                                        value={subject}
                                        onChange={(e) => {
                                        setSubject(e.target.value);
                                        }}  
                                        name="subject" />
                                </div>
                                
                            </div>
                            <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'
                                        value={message}
                                        onChange={(e) => {
                                        setMessage(e.target.value);
                                        }}  
                                        name="message"></textarea>
                                </div>
                            <Link href={`mailto:fajrinyusuf@gmail.com?cc=${email}&subject=${subject}&body=${message}${phone}`}>
                                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-120 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-[#7abf17]' size={30} />
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
};

export default Contact;
