import { devSkillList, designSkillList } from '@/data/skillList'

import ContainerX from '@/components/ui/ContainerX';
import SkillsCard from '@/components/ui/SkillsCard';

const CONSTANTS = {
  skillCardOffset: 140
}

export default function Skills() {
 
  return (
    <section id='section-skills'>
      <div className='py-20'>
        <ContainerX>
          <h2 className='mb-20 text-l9 text-center'>Skills</h2>
          <div className='flex gap-4'>

            <div className='w-1/4 min-w-[280px] h-screen sticky top-0 grid place-items-center'>
              <h3 className='text-l4'>Development</h3>
            </div>

            <div className='w-3/4'>

              <div className=' relative '>
                {devSkillList.map((item, index, array) => (
                  <div
                    className='sticky'
                    style={
                      {
                        top: `calc(10vh + ${(index * CONSTANTS.skillCardOffset)}px)`,
                        marginBottom: `${(array.length - index - 1) * CONSTANTS.skillCardOffset}px`,
                      }
                    }
                    key={item.title}
                  >
                    <SkillsCard
                      title={item.title}
                      skills={item.skills}
                      index={index}
                    />
                  </div>
                ))}
              </div>

              <div className=' relative '>
                {designSkillList.map((item, index, array) => (
                  <div className=' sticky h-screen '
                    style={
                      {
                        top: `calc(30vh + ${index * CONSTANTS.skillCardOffset}px)`,
                        marginBottom: `${(array.length - index - 1) * CONSTANTS.skillCardOffset}px`
                      }
                    }
                    key={item.title}
                  >
                    <SkillsCard
                      title={item.title}
                      skills={item.skills}
                      index={index}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </ContainerX>
      </div>
    </section>
  )
}
