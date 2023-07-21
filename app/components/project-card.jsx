import Image from "next/image";
import Link from "next/link";


const ProjectCard = ({title, backgroundImg, categoryUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-full w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#7abf17] to-[#b7d68b]'>                    
        <Image className='rounded-xl group-hover:opacity-30 object-contain' src={backgroundImg} alt={title} width={400} height={300}  />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-xl text-white tracking-wider text-center drop-shadow-xl pb-5'>{title}</h3>
            <Link href={categoryUrl}>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-md cursor-pointer'>More Info</p>                
            </Link>
         </div>
    </div>

  )
};

export default ProjectCard;
