import React from 'react';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';



const HeaderTop = () => {
    return (
        <header className="text-gray-600 body-font flex-row headerbackcolor">
            <div className="container mx-auto flex flex-wrap px-14 py-0 flex-col md:flex-row items-center">
                {/* <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"> */}
                <div className='flex flex-wrap'>

                    <span className="ml-3 text-xl"><AddIcCallIcon />&nbsp;(+91) 9385374102</span> &nbsp; &nbsp; |&nbsp;

                    <span className="ml-3 text-xl">< MailOutlineIcon />&nbsp; abc@gmail.com</span>
                </div>

                {/* </a> */}
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900"><FacebookOutlinedIcon /></a>
                    <a className="mr-5 hover:text-gray-900"><PinterestIcon /></a>
                    <a className="mr-5 hover:text-gray-900"><TwitterIcon /></a>
                    <a className="mr-5 hover:text-gray-900"><InstagramIcon /></a>
                    <a className="mr-5 hover:text-gray-900">< YouTubeIcon /></a>
                </nav>
                {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button> */}
                <button class="flex-shrink-0 text-white bg-black  border-0  py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">GET IN TOUCH</button>
            </div>
        </header>
    )
}

export default HeaderTop
