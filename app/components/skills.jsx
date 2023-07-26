'use client'
import { useState, useEffect } from "react";
import { getSkills } from "../actions/getSkill";
import SkillCard from "./skill-card";


const Skills = () => {
    const [skill, setSkill] = useState({});

    useEffect(()=>{
        getSkills()
        .then((data)=>setSkill(data))
        .catch((error) => {
            console.error('Error fetching portfolio data:', error)
    })},[])
    return(
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#7abf17] px-10'>Skills</p>
                <h2 className='py-4 px-10'>What I Can Do</h2>
                <div className='grid sm:grid-cols-3 md:grid-cols-5 gap-3 px-20 py-5'>
                    {Array.isArray(skill) ? (
                        skill.map((skill) => {
                            return <SkillCard key={skill.skillUrl} label={skill.skillTitle} skillUrl={skill.skillUrl} />
                        })
                    ) : (
                    <div className='text-center pt-30 px-30'>
                        <h4>Loading skills...</h4>
                    </div>
                    )

                    }
                </div>
            </div>
        </div>
    )
}

export default Skills;