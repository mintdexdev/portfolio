import ContainerX from '@/components/ContainerX';
import SkillGroup from '@/components/SkillGroup';


// export default function Skills() {
//   return (
//     <section id='section-skills'>
//       <div className=' py-10 '>
//         <ContainerX>
//           <h2 className='mb-20 text-l9 text-center'>Skills</h2>
//           <div className=' bg-zinc-900 flex gap-4'>

//             <div className='w-1/4'>
//               <div className='w-full h-screen grid place-items-center sticky top-0 '>
//                 <h3 className='text-l4'>Development</h3>
//               </div>
//             </div>
//             <div className='w-3/4'>
//               <div className=' flex gap-4 h-screen min-h-[640px] overflow-x-scroll '>
//                 <SkillGroup />
//                 <SkillGroup />
//                 <SkillGroup />
//                 <SkillGroup />
//               </div>
//               <div className=' flex gap-4 h-screen min-h-[640px] overflow-x-scroll '>
//                 <SkillGroup />
//                 <SkillGroup />
//                 <SkillGroup />
//                 <SkillGroup />
//               </div>

//             </div>

//           </div>
//         </ContainerX>
//       </div>
//     </section>
//   )
// }
export default function Skills() {
  return (
    <section id='section-skills'>
      <div className=' py-10 '>
        <ContainerX>
          <h2 className='mb-20 text-l9 text-center'>Skills</h2>
          <div className='flex gap-4'>

            <div className='w-1/4'>
              <div className='w-full h-screen grid place-items-center sticky top-0 '>
                <h3 className='text-l4'>Development</h3>
              </div>
            </div>
            <div className='w-3/4'>
              <div className=' h-screen min-h-[640px]'>
                <SkillGroup />
                <SkillGroup />
                <SkillGroup />
                <SkillGroup />
              </div>
              <div className=' h-screen min-h-[640px]'>
                <SkillGroup />
                <SkillGroup />
                <SkillGroup />
                <SkillGroup />
              </div>

            </div>

          </div>
        </ContainerX>
      </div>
    </section>
  )
}
