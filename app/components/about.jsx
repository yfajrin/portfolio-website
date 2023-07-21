import Image from "next/image";


const About = () => {
    return(
        <div id='about' className='w-full md:h-screen p-5 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 px-10'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#7abf17]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>I consider my self a problem seeker. I get excited by challenging problems. I can get deep into my works to tackle and solve those problems, which I usually address within a framework of a business model and system thinking approach. This is why I became an entrepreneur. I seek problems as a business opportunity.</p>
                    <p className='py-2 text-gray-600'>My entrepreneurial journey brought me to various intriguing worlds; from web development fields to data science bootcamps, from sustainable tourism and social entrepreneurship to luxurious leathercraft industry. From the triumphant success, to the bittersweet lesson of failures. I keep learning more and more everyday.</p>
                    <p className='py-2 text-gray-600'>I am ready for a new journey.</p>
                    <p className='py-2 text-gray-600'>Check out some of my latest projects.</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image className='rounded-xl' src='/assets/kang fajrin.jpeg' width={400} height={300} alt='Kang Fajrin Yusuf Muttaqin Photo'/>
                    
                </div>
            </div>
        </div>
    )
}

export default About;