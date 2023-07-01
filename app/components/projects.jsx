
import propertyImg from '../../public/assets/projects/property.jpg';
import cryptoImg from '../../public/assets/projects/crypto.jpg';
import netflixImg from '../../public/assets/projects/netflix.jpg';
import twitchImg from '../../public/assets/projects/twitch.jpg';

import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I`ve Build</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectCard title='Property Finder' backgroundImg={propertyImg} projectUrl='/property' />
                <ProjectCard title='Crypto App' backgroundImg={cryptoImg} projectUrl='/property' />
                <ProjectCard title='Netflix Clone' backgroundImg={netflixImg} projectUrl='/property' />
                <ProjectCard title='Twitch Clone' backgroundImg={twitchImg} projectUrl='/property' />
            </div>
        </div>
      
    </div>
    )}
  
export default Projects;
