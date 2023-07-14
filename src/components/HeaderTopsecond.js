import React from 'react'
import RoomIcon from '@mui/icons-material/Room';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const HeaderTopsecond = () => {
    return (
        <div id='touch'>

            <div class="bg-pink container px-0 pt-2 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div class="w-92    flex-shrink-0 md:mx-12 my-1 mx-auto text-center md:text-left">
                    <a class="flex title-font font-medium items-center md:justify-start justify-center">
                        <img class="w-60 h-24 text-white " src='../autopeepal.png' />
                    </a>
                    {/* <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p> */}
                </div>
                <div class="flex-grow flex flex-wrap md:ml-96  md:pl-20 -mb-10 md: mt-6 md:text-left text-center">
                    <div class="lg:w-1/3 md:w-1/2 w-full px-4">
                        <div class="lg:w-1/2">
                            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <RoomIcon />
                                <div class="flex-grow sm:pl-8">
                                    <h2 class="title-font font-medium text-lg text-gray-900">Contact Us</h2>
                                    <h3 class="text-gray-500 mb-3">Pune,411041</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 w-full px-4">
                        <div class="lg:w-1/2">
                            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <MailOutlineIcon />
                                <div class="flex-grow sm:pl-8">
                                    <h2 class="title-font font-medium text-lg text-gray-900">Email Us</h2>
                                    <h3 class="text-gray-500 mb-3">abc@gmail.com</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 w-full px-4">
                        <div class="lg:w-1/2">
                            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <AddIcCallIcon />
                                <div class="flex-grow sm:pl-8">
                                    <h2 class="title-font font-medium text-lg text-gray-900">Free Call</h2>
                                    <h3 class="text-gray-500 mb-3">9385374102</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >

        </div >
    )
}

export default HeaderTopsecond
