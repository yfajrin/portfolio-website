
import SkillCard from "./skill-card";


const Skills = () => {

    return(
        <div className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <SkillCard label='Python' />
                    <SkillCard label='Pandas' />
                    <SkillCard label='Numpy' />
                    <SkillCard label='Scikit-learn' />
                    <SkillCard label='Tensorflow' />
                    <SkillCard label='PyTorch' />
                    <SkillCard label='Tableau' />
                    <SkillCard label='R' />
                    <SkillCard label='SQL' />
                    <SkillCard label='SPSS' />
                    <SkillCard label='Ms Excel' />
                    <SkillCard label='HTML' />
                    <SkillCard label='CSS' />
                    <SkillCard label='JavaScript' />
                    <SkillCard label='React' />
                    <SkillCard label='Next' />
                    <SkillCard label='Tailwind' />
                    <SkillCard label='Firebase' />
                    <SkillCard label='MongoDB' />
                    <SkillCard label='Github' />
                    <SkillCard label='Wordpress' />

                </div>
            </div>
        </div>
    )
}

export default Skills;