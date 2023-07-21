'use client'

import Image from "next/image";
import Heading from "@/app/components/heading";
import { RiRadioButtonFill } from 'react-icons/ri';

import { useRouter } from "next/navigation";
import Link from "next/link";
import { getPortfolio } from "@/app/actions/getPortfolio";
import { useEffect, useState } from "react";

const ProjectPage = ({params}) => {
  const router = useRouter();
  const [project, setProject] = useState({});

  useEffect(() => {
    getPortfolio()
      .then((data) =>
        data.find((category) => category.category === params.category)
      )
      .then((data) => setProject(data.projects.find((project) => project.slug === params.slug)))
      .catch((error) => {
        console.error('Error fetching portfolio data:', error);
      });
  }, [params]);

  return (
    <>
    {Array.isArray(project.tools) ? (
      <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
          <Image src={project.imgSrc} alt='/' className='absolute z-1 object-cover' fill/>
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-5' >
  
            <Heading 
              title={project.title}
              subtitle={project.subtitle}
            />
          </div>
        </div>
  
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'> 
            <p>Project</p>
            <h2>Overview</h2>
            <div className='p-10'>
              <p>{project.projectDescription} </p>
            </div>
            <Link href={project.codeSrc} rel="noopener noreferrer" target="_blank">
              <button className='px-8 py-2 mt-4 mr-8'>{project.buttonLabel1 ? project.buttonLabel1 : 'Demo'}</button>
            </Link>
            {project.buttonLabel2 && (
              <Link href={project.demoSrc} rel="noopener noreferrer" target="_blank">
              <button className='px-8 py-2 mt-4 mr-8'>{project.buttonLabel2 ? project.buttonLabel2 : 'Code'}</button>
              </Link>
            ) }
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                {project.tools.map((tool)=>{
                  return (
                  <p key={tool} className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' />
                    {tool}
                  </p>
                )})}
              </div>
            </div>
          </div>
          <div onClick={()=>router.back()}>
            <p className='underline cursor-pointer mb-10'>Back</p>
          </div>
        </div>
      </div>
      ) : (
        <div className='pt-40 pl-30'>
          <h4>Loading information...</h4>
        </div>
      )}
      </>
  )
};

export default ProjectPage;
