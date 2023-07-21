
import SkillCard from "./skill-card";


const Skills = () => {

    return(
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#7abf17] px-10'>Skills</p>
                <h2 className='py-4 px-10'>What I Can Do</h2>
                <div className='grid sm:grid-cols-3 md:grid-cols-5 gap-3 px-20 py-5'>
                    <SkillCard label='Python' />
                    <SkillCard label='Pandas' />
                    <SkillCard label='NumPy' />
                    <SkillCard label='Scikit-learn' />
                    <SkillCard label='Tensorflow' />
                    <SkillCard label='PyTorch' />
                    <SkillCard label='Tableau' />
                    <SkillCard label='R' />
                    <SkillCard label='SPSS' />
                    <SkillCard label='Ms Excel' />
                    <SkillCard label='HTML' />
                    <SkillCard label='CSS' />
                    <SkillCard label='JavaScript' />
                    <SkillCard label='Typescript' />
                    <SkillCard label='ReactJs' />
                    <SkillCard label='NextJs' />
                    <SkillCard label='Tailwind' />
                    <SkillCard label='Firebase' />
                    <SkillCard label='MongoDB' />
                    <SkillCard label='Prisma' />
                    <SkillCard label='ExpressJs' />
                    <SkillCard label='PostgreSQL' />
                    <SkillCard label='Node' />
                    <SkillCard label='Github' />
                    <SkillCard label='Wordpress' />
                    <SkillCard label='Elementor' />
                    <SkillCard label='Mailchimp' />
                    <SkillCard label='Photoshop' />
                    <SkillCard label='Corel Draw' />
                    <SkillCard label='Premiere Pro' />

                </div>
            </div>
        </div>
    )
}

export default Skills;