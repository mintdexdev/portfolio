import { ButtonDark } from "@/components/ui/Button";
import Tag from "./Tag";

export default function ProjectCard(
  {
    name,
    imgSrc,
    sourceCodeLink,
    liveLink,
    tags = [],
  }
) {
  return (
    <div className="w-full">
      <img className='w-full  aspect-video rounded-2xl border'
        src={imgSrc}
        alt="" />
      <div className='mt-8 flex justify-between items-end'>
        <p className='text-l2'>{name}</p>
        <div className='h-fit flex gap-4'>
          <a
            href={sourceCodeLink}
            target='_blank'
            title='View Source Code for this Project'
          >
            <ButtonDark>
              View Source Code ↗
            </ButtonDark>
          </a>
          <a
            href={liveLink}
            target='_blank'
            title='View Live Preview of this project'
          >
            <ButtonDark>
              View Live ↗
            </ButtonDark>
          </a>
        </div>
      </div>
      <div className="flex gap-2 mt-4 flex-wrap">
        {tags.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </div>
  )
}