import { useViewportSize } from "@/context/ViewportSize"

export default function DeepakGobari({ breakWord = false }) {
  
  const viewportSize = useViewportSize()

  if (viewportSize !== "large" && breakWord) {
    return (
      <div className={`flex gap-5 ${breakWord ? "flex-col" : ""}`}>
        <div className='w-full'>
          <img src="/assets/deepak.svg" />
        </div>
        <div className='w-full'>
          <img src="/assets/gobari.svg" />
        </div>
      </div>
    )
  } else {
    return (
      <div className={`flex gap-5 `}>
        <div className='w-full'>
          <img src="/assets/deepak.svg" />
        </div>
        <div className='w-full'>
          <img src="/assets/gobari.svg" />
        </div>
      </div>
    )
  }
}
