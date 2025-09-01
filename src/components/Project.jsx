
export default function Project() {
  return (
    <div className="w-full">
      <img className='w-full aspect-video rounded-2xl border'
        src=""
        alt="" />
      <div className='mt-8 flex justify-between items-end'>
        <p className='text-l3'>Project Name 1</p>
        <div className='h-fit flex gap-4'>
          <button className='border rounded-full px-4 py-1'
            type="button"
          >June 2025
          </button>
          <button className=' rounded-full px-4 py-1 bg-[#121212] text-[#ededed]'
            type="button"
          >
            View Source Code -
          </button>
        </div>
      </div>
    </div>
  )
}