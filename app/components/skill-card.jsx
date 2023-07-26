import Image from "next/image";
import Link from "next/link";


const SkillCard = ({label, skillUrl}) => {

    return(
            <Link href={`/skills/${skillUrl}`}>
                <div className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-3 justify-center items-center'>
                    <div className='flex h-full items-center'>
                       <Image src={`/assets/skills/${label.toLocaleLowerCase()}.png`} alt={label} width='50' height='50' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                       <h3>{label}</h3>
                    </div>
                  </div>
                </div>
            </Link>
    )
}

export default SkillCard;