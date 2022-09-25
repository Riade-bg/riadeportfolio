import {BsLinkedin, BsGithub} from 'react-icons/bs'

const Socials = () => {
    return(
        <div className="text-[#8893ae] top-96 -right-5 fixed z-10">
            <ul className="hidden md:flex flex-col justify-center items-center text-xl">
                <li className="mb-5 cursor-pointer">
                    <a href="https://www.linkedin.com/in/riadeboughaba/" target={"_blank"} rel="noreferrer">
                        <BsLinkedin />
                    </a>
                </li>
                <li className="cursor-pointer">
                    <a href="https://github.com/Riade-bg" targer={"_blank"} rel="noreferrer">
                    <BsGithub />
                    </a>
                </li>
                <li className='rotate-90 text-sm mt-24'>
                    <a href="mailto:riadeboughaba@gmail.com">
                        riadeboughaba@gmail.com
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Socials