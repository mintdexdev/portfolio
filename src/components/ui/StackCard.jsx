import React, { useEffect, useRef } from 'react'

export default function StackCard(
  {
    title = "Skill Group Title",
    skills = [],
    index
  }
) {
  const gridRef = useRef();

  useEffect(() => {

  })
  return (
    <div className={`skills-card h-[640px] rounded-t-2xl border-t border-white/38 `}    >
      <div className='p-5  flex justify-between'>
        <div className='text-l2'>{title}</div>
        <div className='text-l2'>{index + 1}</div>
      </div>
      <div ref={gridRef}
        className='grid  [grid-template-columns:repeat(auto-fit,minmax(120px,1fr))] sm:grid-cols-4 px-5 py-10 gap-y-10'>
        {skills.map((skill) => (
          <div key={skill.name || skill}>
            {skill.imgSrc ?
              <div className='text-center '>
                <div className='w-[48px] h-[48px] mb-4 flex items-center mx-auto sm:w-[100px]  sm:h-[100px] '>
                  <img src={skill.imgSrc} alt={skill.alt} />
                </div>
                <p className='font-mono' >{skill.name}</p>
              </div> :
              <div className='py-4'>
                <p className='font-mono'> {skill} </p >
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  )
}
