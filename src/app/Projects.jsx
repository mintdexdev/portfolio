import ContainerX from '@/components/ContainerX'
import Project from '@/components/Project'
import React from 'react'

export default function Projects() {
  return (
    <section id='section-projects'>
      <div className='section-projects py-10 rounded-2xl'>
        <ContainerX>
          <h2 className='mb-20 text-l9 text-center'>Projects</h2>


          <div className='flex relative'>
            <div className='w-2/5'>
              <div className='w-full h-screen grid place-items-center sticky top-0 '>
                <p className='text-[20rem] font-semibold'>01.</p>
              </div>
            </div>
            <div className='w-3/5'>
              <div className='min-h-screen flex items-center'>
                <Project />
              </div>
              <div className='min-h-screen flex items-center'>
                <Project />
              </div>
              <div className='min-h-screen flex items-center'>
                <Project />
              </div>
            </div>

          </div>
        </ContainerX>

      </div>
    </section>
  )
}
