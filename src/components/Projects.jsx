import { projectList } from '@/data/projectList.js';

import ContainerX from '@/components/ui/ContainerX'
import ProjectCard from '@/components/ui/ProjectCard'
import { ButtonDark } from './ui/Button';
import { allProjectLink } from '@/data/links';



export default function Projects() {
  return (
    <section id='section-projects'>
      <div className='section-projects py-10 rounded-2xl'>
        <ContainerX>
          <h2 className='mb-20 text-l9 text-center'>Projects</h2>

          <div className='flex gap-20 relative justify-center'>


            <div className='h-screen grid place-items-center sticky top-0 '>
              <p className='text-[clamp(15rem,-1.4286rem+17.8571vw,20rem)] font-semibold'>01.</p>
            </div>


            <div className=''>
              {projectList.map((item) => (
                <div className='h-screen min-h-[640px] my-[100px] flex items-center'
                  key={item.name}
                >
                  <ProjectCard
                    name={item.name}
                    imgSrc={item.imgSrc}
                    sourceCodeLink={item.sourceCodeLink}
                    liveLink={item.liveLink}
                    time={item.time}
                    tags={item.tags}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className='my-20 '>
            <h3 className='text-l3 text-center'>View all projects?</h3>
            <div className='flex justify-center mt-5'>
              <a className='text-lg'
                href={allProjectLink}
                target='_blank'
                title='Check all project by me'
              >
                <ButtonDark>
                  See All Projects ↗
                </ButtonDark>
              </a>
            </div>

          </div>
        </ContainerX>

      </div>
    </section>
  )
}
