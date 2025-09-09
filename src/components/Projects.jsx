import { useRef, useState } from 'react';

import { links } from '@/data/links';
import { projectList } from '@/data/lists.js';

import ContainerX from '@/components/ui/ContainerX'
import ProjectCard from '@/components/ui/ProjectCard'
import { ButtonDark } from './ui/Button';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useViewportSize } from '@/context/ViewportSize';


gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Projects() {
  const viewportSize = useViewportSize()

  const [currentIndex, setCurrentIndex] = useState(1)

  const sectionRef = useRef();

  useGSAP(() => {
    const section = sectionRef.current;

    gsap.fromTo(section,
      { scale: 0.9 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
        ease: "power1.out"
      }
    );

    gsap.fromTo(section,
      { scale: 1 },
      {
        scale: 0.9,
        scrollTrigger: {
          trigger: section,
          start: "bottom center",
          end: "bottom top",
          scrub: true,
        },
        ease: "power1.out"
      }
    );
  }, { scope: sectionRef })


  useGSAP(() => {
    projectList.forEach((_, idx) => {
      ScrollTrigger.create({
        trigger: `[data-index="${idx}"]`,
        start: "top 80%", // 20% from bottom
        onEnter: () => setCurrentIndex(idx + 1),
        onEnterBack: () => setCurrentIndex(idx + 1),
      });
    });
  })


  return (
    <section
      id='section-projects'
      ref={sectionRef}
    >
      <div className='section-projects py-10 rounded-2xl'>
        <ContainerX>
          <h2 className='mb-20 text-l9 text-center'>Projects</h2>

          <div className='flex gap-10 relative justify-center flex-col lg:flex-row'>

            {viewportSize == "large" ?
              <div className='h-screen grid place-items-center sticky top-0 '>
                <div className='index-number font-mono'>
                  0{currentIndex}
                </div>
              </div> :
              null
            }

            <div >
              {projectList.map((item, idx) => (
                <div className='h-screen min-h-[640px] my-[100px] flex items-center'
                  key={item.name}
                >
                  <ProjectCard
                    dataIndex={idx}
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
                href={links.allProjects}
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
