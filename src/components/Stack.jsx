import { developmentStackList, designStackList } from '@/data/stackList'

import ContainerX from '@/components/ui/ContainerX';
import StackCard from '@/components/ui/StackCard';

const CONSTANTS = {
  StackCardOffset: 140
}

export default function Stack() {

  return (
    <section id='section-stack'>
      <div className='pt-20'>
        <ContainerX>
          <h2 className='mb-20 text-l9 text-center'>Skills</h2>
          <div className='flex gap-4'>

            <div className='w-1/4 min-w-[280px] h-screen sticky top-0 grid place-items-center'>
              <h3 className='text-l4'>Development</h3>
            </div>

            <div className='w-3/4'>

              <div className=' relative '>
                {developmentStackList.map((item, index, array) => (
                  <div
                    className='sticky'
                    style={
                      {
                        top: `calc(10vh + ${(index * CONSTANTS.StackCardOffset)}px)`,
                        marginBottom: `${(array.length - index - 1) * CONSTANTS.StackCardOffset}px`,
                      }
                    }
                    key={item.title}
                  >
                    <StackCard
                      title={item.title}
                      skills={item.skills}
                      index={index}
                    />
                  </div>
                ))}
              </div>

              <div className=' relative '>
                {designStackList.map((item, index, array) => (
                  <div className=' sticky '
                    style={
                      {
                        top: `calc(30vh + ${index * CONSTANTS.StackCardOffset}px)`,
                        marginBottom: `${(array.length - index - 1) * CONSTANTS.StackCardOffset}px`
                      }
                    }
                    key={item.title}
                  >
                    <StackCard
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
