import { useRef } from 'react';

import { projectList } from '@/data/projectList.js';

import ContainerX from '@/components/ui/ContainerX'
import ProjectCard from '@/components/ui/ProjectCard'
import { ButtonDark } from './ui/Button';
import { allProjectLink } from '@/data/links';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Projects() {

  const sectionRef = useRef();

  useGSAP(() => {
    const section = sectionRef.current;

    gsap.from(section, {
      scale: 0.90,
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "top 50%",
        scrub: true
      },
      ease: "power1.out"
    })
    gsap.to(section, {
      scale: 0.90,
      scrollTrigger: {
        trigger: section,
        start: "bottom 50%",
        end: "bottom 0%",
        scrub: true
      },
      ease: "power1.out"
    })

  }, { scope: sectionRef })


  return (
    <section
      id='section-projects'
      ref={sectionRef}
    >
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
