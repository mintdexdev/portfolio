import ContainerX from './ui/ContainerX';

const navList = [
  { name: "Projects", link: "#section-projects" },
  { name: "Skills", link: "#section-skills" },
  { name: "About", link: "#section-about" },
  { name: "Contact", link: "#section-contact" }
]

export default function Navbar() {
  return (
    <nav className='w-full z-10'>
      <ContainerX>

        <div className='py-2 flex justify-between'>

          <a href="/">
            {/* <img src="" alt="image" /> */}
            mintdexdev
          </a>

          <ol className='flex gap-12'>
            {navList.map((item) => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ol>

        </div>

      </ContainerX>
    </nav>
  )
}