import ContainerX from '@/components/ui/ContainerX';
import { skillList } from '@/data/skillList';

export default function Skills() {
  return (

    <section
      id='section-skills' >
      <ContainerX>
        <div className=' section-about h-screen min-h-[640px] flex items-center justify-center'>
          <div>

            <h2 className='mb-20 text-l9 text-center'>{skillList.title}</h2>


            <div className='text-l2'>

              {skillList.hardSkills.map((item) => (
                <div key={item}>
                  {item}
                </div>
              ))}

              {skillList.softSkills.map((item) => (
                <div key={item}>
                  {item}
                </div>
              ))}

            </div>
            
          </div>
        </div>
      </ContainerX>
    </section>
  )
}