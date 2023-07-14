import React from 'react'

const Testimonials = () => {
    return (
        <div>

            <section class="text-gray-600 body-font m-9">
                <div class="flex flex-col mx-12">
                    <div class="flex flex-wrap sm:flex-row flex-col  mb-10">
                        <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-3xl mb-2 sm:mb-0">Testimonials</h1>

                    </div>
                    <div class="h-1 bg-gray-200 rounded overflow-hidden ">
                        <div class="w-24 h-full bg-indigo-500"></div>
                    </div>

                </div>

                <div class="container px-5 py-24 lg:mx-24 ">
                    <div class="flex flex-wrap -m-4">
                        <div class=" m-4 p-10 md:w-96 lg:mb-0 mb-6  bg-white hover:bg-orange-100 hover:-translate-y-4 cursor-pointer transition-all duration-500">
                            <div class="h-full text-center">
                                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="./profile2.png" />
                                <p class="leading-relaxed">We have been purchasing furniture from Durian since the last 10 years. We appreciate their prompt service  we have faced no complaints with their furniture.</p>
                                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Janvi Kapur</h2>
                                <p class="text-gray-500">Pune</p>
                            </div>
                        </div>
                        <div class=" m-4 p-10 md:w-96 lg:mb-0 mb-6  bg-white hover:bg-orange-100 hover:-translate-y-4 cursor-pointer transition-all duration-500">
                            <div class="h-full text-center">
                                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="./profile2.png" />
                                <p class="leading-relaxed">The services provided by the officials was smooth and satisfactory. Products and goods delivered were up to satisfaction… and compared to market price.</p>
                                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Punita Chaudhari</h2>
                                <p class="text-gray-500">Pune</p>
                            </div>
                        </div>
                        <div class=" m-4 p-10 md:w-96 lg:mb-0  bg-white hover:bg-orange-100 hover:-translate-y-4 cursor-pointer transition-all duration-500">
                            <div class="h-full text-center">
                                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="./profile2.png" />
                                <p class="leading-relaxed">We purchased so many products from durian and we would recommend Durian Furniture to everyone who needs quality and decent looking furniture.</p>
                                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Richa Sharma</h2>
                                <p class="text-gray-500">Bangalore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials
