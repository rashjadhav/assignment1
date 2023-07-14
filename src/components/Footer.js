import React from 'react';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <div>
            {window.innerWidth < 1024 ? <header className="text-gray-600 body-font flex-col headerbackcolor mt-4">
                <div className="container mx-auto flex flex-wrap px-14 py-2 flex-col md:flex-row items-center ">
                    {/* <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"> */}





                    {/* </a> */}
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900"><FacebookOutlinedIcon /></a>
                        <a className="mr-5 hover:text-gray-900"><PinterestIcon /></a>
                        <a className="mr-5 hover:text-gray-900"><TwitterIcon /></a>
                        <a className="mr-5 hover:text-gray-900"><InstagramIcon /></a>
                        <a className="mr-5 hover:text-gray-900">< YouTubeIcon /></a>
                    </nav>
                    <div className='flex flex-wrap '>
                        <a href="/#about" className='mx-5'>About</a>
                        <a href="/#notes" className='mx-5'>Services</a>
                        <a href="/#vision" className='mx-5'>Portfolio</a>
                        <a href="/#" className='mx-5'>Blog</a>

                    </div>
                    <div className='flex flex-wrap '>
                        <span className="items-center text-center">All Rights Reserved @ AAIMS 2023</span>
                    </div>

                </div>
            </header> :


                <header className="text-gray-600 body-font flex-row headerbackcolor mt-4">
                    <div className="container mx-auto flex flex-wrap px-14 py-2 flex-col md:flex-row items-center ">
                        {/* <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"> */}
                        <div className='flex flex-wrap w-1/3'>
                            <span className="ml-3 ">All Rights Reserved @ AAIMS 2023</span>
                        </div>

                        <div className='flex flex-wrap '>
                            <a href="/#about" className='mx-5'>About</a>
                            <a href="/#notes" className='mx-5'>Services</a>
                            <a href="/#vision" className='mx-5'>Portfolio</a>
                            <a href="/#" className='mx-5'>Blog</a>
                            <a href="/#touch" className='mx-5'>Get In Touch</a>
                        </div>
                        {/* </a> */}
                        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            <a className="mr-5 hover:text-gray-900"><FacebookOutlinedIcon /></a>
                            <a className="mr-5 hover:text-gray-900"><PinterestIcon /></a>
                            <a className="mr-5 hover:text-gray-900"><TwitterIcon /></a>
                            <a className="mr-5 hover:text-gray-900"><InstagramIcon /></a>
                            <a className="mr-5 hover:text-gray-900">< YouTubeIcon /></a>
                        </nav>

                    </div>
                </header>}
        </div>
    )
}

export default Footer
