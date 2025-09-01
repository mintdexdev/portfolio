import ContainerX from './ContainerX';

const navList = [
  { name: "Projects", link: "#" },
  { name: "Skills", link: "#" },
  { name: "About", link: "#" },
  { name: "Contact", link: "#" }
]

export default function Navbar() {
  return (
    <nav className='fixed w-full'>
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