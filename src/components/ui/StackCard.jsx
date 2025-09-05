import React from 'react'

export default function SkillsCard(
  {
    title = "Skill Group Title",
    skills = [],
    index
  }
) {
  return (
    <div className={`skills-card h-[640px] rounded-t-2xl `}    >
      <div className='p-5  flex justify-between'>
        <div className='text-l3'>{title}</div>
        <div className='text-l3'>{index + 1}</div>
      </div>
      <div className='flex gap-5 flex-wrap border-t px-5 py-10'>
        {skills.map((skill) => (
          <div key={skill.name || skill}>
            {skill.imgSrc ?
              <div className='text-center '>
                <div className='w-[100px] h-[100px] mb-4 flex items-center mx-auto'>
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
