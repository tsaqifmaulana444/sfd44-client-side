import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from "../assets/logo.png"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="bg-[#0a0a0a] py-[4vh]">
            <div className="ml-[7vw]">
                <img src={logo} alt="" className="w-[12vw]" />
            </div>
            <div className="ml-[7.5vw] mt-[3vh]">
                <FontAwesomeIcon icon={faEnvelope} className='text-white text-3xl cursor-pointer ' title='Gmail'/>
                <FontAwesomeIcon icon={faInstagram} className='text-white text-3xl cursor-pointer ml-4' title='Instagram'/>
                <FontAwesomeIcon icon={faYoutube} className='text-white text-3xl cursor-pointer ml-4' title='Youtube'/>
                <FontAwesomeIcon icon={faTiktok} className='text-white text-3xl cursor-pointer ml-4' title='Tiktok'/>
            </div>
            <div className="border-b-2 border-white ml-[7vw] mt-[0.3vw] w-[13vw]"></div>
            <div className="ml-[7vw]">
                <p className='text-white mt-[3vh]'><span className='hover:text-yellow-600 duration-200 cursor-pointer'>Privacy and Policy</span> | <span className='hover:text-yellow-600 duration-200 cursor-pointer'>Website Terms</span> | <span className='hover:text-yellow-600 duration-200 cursor-pointer'>Our Company</span> | <span className='hover:text-yellow-600 duration-200 cursor-pointer'>Cookies Usage</span></p>
                <p className='text-white'>&copy; 2023 PT Sinar Anugrah, All Right Reserved. </p>
            </div>
        </div>
    )
}

export default Footer