'use client'

import { getPortfolio } from "@/app/actions/getPortfolio";
import Heading from "@/app/components/heading";
import ProjectCard from "@/app/components/project-card";
import { useEffect, useState } from "react";

const CategoryPage = ({params}) => {  
    const [projectsByCat, setProjectsByCat] = useState([]);

    useEffect(()=>{
        getPortfolio()
        .then((data)=> setProjectsByCat(data.find((category) => {
            return category.category === params.category
        })))
        .catch((error) => {
            console.error('Error fetching portfolio data:', error)
        })
    },[params])
    
    return(
        <div className='py-20 px-10'>
            <Heading title={`${projectsByCat.categoryTitle} Projects`} subtitle={`${projectsByCat.categoryDescription}`} />
            
            
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5'>
                {Array.isArray(projectsByCat.projects) ? (projectsByCat.projects.map((project) => {
                    return(    
                                <ProjectCard 
                                    key={project.slug} 
                                    title={project.title} 
                                    backgroundImg={project.imgSrc} 
                                    categoryUrl={`/projects/${params.category}/${project.slug}`} 
                                />
                        
                        )
                })) : (
                    <div className='pt-30 px-30'>
                        <h4>Loading projects...</h4>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CategoryPage;