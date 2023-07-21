'use client'

import { useState, useEffect } from "react";
import ProjectCard from "./project-card";
import { getPortfolio } from "../actions/getPortfolio";


const Projects = () => {
    const [portfolio, setPortfolio] = useState([]);

    useEffect(()=>{
        getPortfolio()
        .then((data)=>setPortfolio(data)).
        catch((error) => {
            console.error('Error fetching portfolio data:', error)
        });
    },[])
    return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#7abf17] px-10'>Projects</p>
            <h2 className='py-4 px-10'>What I have Build</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 px-10'>
                {Array.isArray(portfolio) ? (portfolio.map((category)=>{
                return (
                    <div key={category.id}>
                        <ProjectCard key={category.id} 
                            title={category.categoryTitle} 
                            backgroundImg={category.catImgSrc} 
                            categoryUrl={`/projects/${category.category}`} 
                            />
                    </div>)
                    })) : (
                        <div>
                            <h2>Loading projects</h2>
                        </div>
                    )}
            </div>
        </div>
      
    </div>
    )}
  
export default Projects;
