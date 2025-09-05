import { useRef } from 'react';
import ContainerX from '@/components/ui/ContainerX';
import { skillList } from '@/data/skillList';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger)
export default function Skills() {
  const skillContainer = useRef(null);

  useGSAP(() => {
    const skillArray = gsap.utils.toArray(skillContainer.current.children)
    skillArray.forEach((skill, i) => {
      gsap.from(skill, {
        opacity: 0,
        // x: 80,
        scale: 0.90,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: skill,
          start: 'top 90%',
          end: 'top 60%',
          scrub: true
        }
      });

    })
  })

  return (

    <section
      id='section-skills' >
      <ContainerX>
        <div className='sr-only'>
          <h2>{skillList.title}</h2>
          <ul aria-label='List of Skills'>
            {skillList.hardSkills.map(skill => <li key={skill}>{skill}</li>)}
            {skillList.softSkills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </div>

        <div aria-hidden="true" className='overflow-clip' >
          <div className='mb-20 text-l9 text-center'>{skillList.title}</div>

          <div ref={skillContainer}
            className='text-l2'>

            {skillList.hardSkills.map((item, i) => (
              <div className='border bg-zinc-800 rounded-2xl px-4 py-3 my-4'
                key={item}>
                {i + 1}. {item}
              </div>
            ))}

            {skillList.softSkills.map((item, i) => (
              <div className='border bg-zinc-800 rounded-2xl px-4 py-3 my-4'
                key={item}>
                {i + skillList.hardSkills.length + 1} {item}
              </div>
            ))}

          </div>
        </div>
      </ContainerX>
    </section>
  )
}