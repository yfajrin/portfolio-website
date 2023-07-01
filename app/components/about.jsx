

const About = () => {
    return(
        <div className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-autp md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>I am your average researcher</p>
                    <p className='py-2 text-gray-600'>This paragraph explain who I am. This paragraph explain who I am. This paragraph explain who I am</p>
                    <p className='py-2 text-gray-600'>This paragraph explain who I am. This paragraph explain who I am. This paragraph explain who I am</p>
                    <p className='py-2 text-gray-600'>Check out some of my latest projects.</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img className='rounded-xl' src='https://kangfajrin.id/wp-content/uploads/2017/01/propic-768x768.jpg' alt='Fajrin Yusuf Muttaqin Photo' />
                </div>
            </div>
        </div>
    )
}

export default About;