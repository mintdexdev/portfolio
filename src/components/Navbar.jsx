import ContainerX from './ui/ContainerX';
import { navList } from '@/data/navList'

export default function Navbar() {
  return (
    <nav className='w-full z-10'>
      <ContainerX>

        <div className='py-2 flex justify-between'>

          <a href="/">
            {/* <img src="" alt="image" /> */}
            mintdexdev
          </a>

          <ul className='flex gap-12'>
            {navList.map((item) => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>

        </div>

      </ContainerX>
    </nav>
  )
}