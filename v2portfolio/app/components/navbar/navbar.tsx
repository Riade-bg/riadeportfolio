import {BiMenuAltRight} from 'react-icons/bi'

const Navbar = () => {
    const Navelems = [
        {
            name: '01. About',
            link: '/#about'
        },
        {
            name: '02. Experience',
            link: '/#experience'
        },
        {
            name: '03. Work',
            link: '/#work'
        },
        {
            name: '04. Contact',
            link: '/#contact'
        },
    ]
    return(
        <nav className="w-full top-0 flex flex-1 justify-between items-center px-14 py-5 shadow-md bg-blur">
            <div>
                <a href={"/"} className="px-3 py-1 border-4 border-black text-md font-bold text-[#64ffda]">
                    R.B
                </a>
            </div>
            <ul className="hidden md:flex text-sm font-work items-center">
                {Navelems.map((item) => (
                <li className="mx-5" key={item.name}>
                    <a href={item.link} >       
                        {item.name}
                    </a>
                </li>
                ))}
                <li>
                    <a href={"/"} className="border-2 border-black rounded p-2">
                        Resume
                    </a>
                </li>
            </ul>
            <div className='flex md:hidden cursor-pointer hover:bg-green-200/50 transition p-2'>
                <span>
                    <BiMenuAltRight size={30} />
                </span>
            </div>
        </nav>
    )
}

export default Navbar