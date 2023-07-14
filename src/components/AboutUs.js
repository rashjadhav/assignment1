import React from 'react'

const AboutUs = () => {
    return (
        <div id='about'>
            <section class="text-gray-600 body-font overflow-hidden mb-6">
                <div class="container px-5 py-4 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="./flower.jpg" />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">About Our AAIMS</h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">Recognized interior & exterior company since 2003</h1>

                            <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>

                            <div class="container px-5 py-4 mx-auto flex flex-wrap">
                                <div class="flex flex-wrap w-full">
                                    <div class="lg:w-full md:w-1/2 md:pr-10 md:py-6">
                                        <div class="flex relative pb-12">
                                            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                            </div>
                                            <div class="flex-shrink-0 w-10 h-10  bg-gray-500 inline-flex items-center justify-center text-white relative">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                                </svg>
                                            </div>
                                            <div class="pl-4">
                                                <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                                            </div>
                                        </div>
                                        <div class="flex relative  pb-12">
                                            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                            </div>
                                            <div class="flex-shrink-0 w-10 h-10  bg-gray-500 inline-flex items-center justify-center text-white relative">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                                </svg>
                                            </div>
                                            <div class=" pl-4">
                                                <p class="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p>
                                            </div>
                                        </div>
                                        <button class=" flex-shrink-0 text-white bg-orange-400 hover:bg-red-600  border-0  py-4 px-14 focus:outline-none  rounded text-lg mt-10 sm:mt-0">Read More</button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
