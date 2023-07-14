import React from 'react'

const Notes = () => {
    return (
        <div>
            <section class=" body-font" id='notes'>
                <div class="container px-5 py-24 mx-auto">

                    <div class="flex md:mx-28 flex-wrap items-center  sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 ">
                        <div class="h-96 m-4 p-10 md:w-96 flex flex-col text-center items-center  hover:bg-gray-400 hover:text-white shadow-lg  hover:-translate-y-4 cursor-pointer mt-6 transition-all duration-500">
                            <div class="w-20 h-20 inline-flex items-center justify-center  bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div class="flex-grow">
                                <h2 class=" text-lg title-font font-medium mb-3">DESIGN</h2>
                                <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>

                            </div>
                        </div>
                        <div class="h-96 m-4 p-10 md:w-96 flex flex-col text-center items-center  hover:bg-gray-400 hover:text-white shadow-lg  hover:-translate-y-4 cursor-pointer mt-6 transition-all duration-500">
                            <div class="w-20 h-20 inline-flex items-center justify-center  bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div class="flex-grow">
                                <h2 class=" text-lg title-font font-medium mb-3">BUILD</h2>
                                <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>

                            </div>
                        </div>
                        <div class="h-96  m-4 p-10 md:w-96 flex flex-col text-center items-center  hover:bg-gray-400 hover:text-white shadow-lg  hover:-translate-y-4 cursor-pointer mt-6 transition-all duration-500">
                            <div class="w-20 h-20 inline-flex items-center justify-center  bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div class="flex-grow b ">
                                <h2 class="text-lg title-font font-medium mb-3">MANAGE</h2>
                                <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Notes
