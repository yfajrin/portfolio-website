'use client'

import { getPortfolio } from "@/app/actions/getPortfolio";
import { getSkills } from "@/app/actions/getSkill";
import EmptyState from "@/app/components/empty-state";
import Heading from "@/app/components/heading";
import ProjectCard from "@/app/components/project-card";
import { useEffect, useState } from "react";

const SkillPage = ({params}) => {  
    const [projectsBySkill, setProjectsBySkill] = useState([]);
    const [skill, setSkill] = useState({});

    useEffect(()=>{
        getSkills()
        .then((data)=>setSkill(data.find((skill) => 
           {return skill.skillUrl.toLocaleLowerCase() === params.skill.toLocaleLowerCase()})))
        .catch((error) => {
            console.error('Error fetching portfolio data:', error)
    })},[params])
    console.log(skill);

    useEffect(()=>{
        getPortfolio()
        .then((data)=> {
            const projBySkill = [];
            data.forEach((category)=>{
                category.projects.forEach((project)=>{
                    const index = project.tools.findIndex(tool => {
                        if (params.skill === 'scikit-learn') {
                            return tool.toLocaleLowerCase() === params.skill.toLocaleLowerCase();
                        } else {
                            return tool.toLocaleLowerCase() === params.skill.replace(/-/g,' ');
                        }
                        })
                    if (index !== -1) {
                        projBySkill.push(project)
                    }
                })
            })
            return projBySkill;
        })
        .then((projBySkill) => setProjectsBySkill(projBySkill))
        .catch((error) => {
            console.error('Error fetching portfolio data:', error)
        })
    },[params])
    console.log(projectsBySkill)
    

    return(
        <div className='py-20 px-10'>
            <div className={projectsBySkill.length===0 ? 'hidden' : 'block'}>
                <Heading title={`Projects that used ${skill.skillTitle}`} subtitle={`${skill.skillDescription}`} />
            </div>
                {Array.isArray(projectsBySkill) ? (projectsBySkill.length === 0 ? (
                    <EmptyState 
                        title={`No ${skill.skillTitle} project uploaded yet`}
                        subtitle={`I'll try to upload my ${skill.skillTitle} projects soon`}
                    />
                ) : (
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5'>
                    {projectsBySkill.map((project) => {
                        return(                        
                            <ProjectCard 
                                key={project.slug}
                                title={project.title} 
                                backgroundImg={project.imgSrc} 
                                categoryUrl={`/projects/${project.category}/${project.slug}`} 
                            />
                            )
                    }
                )}
                </div>
                )) : (
                    <div className='text-center pt-30 px-30'>
                        <h4>Loading projects...</h4>
                    </div>
                )}
            
        </div>
    )
}

export default SkillPage;