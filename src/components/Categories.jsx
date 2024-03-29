import React from 'react'
import category1 from '../assets/category1.svg'
import category2 from '../assets/category2.svg'
import category3 from '../assets/category3.svg'
import category4 from '../assets/category4.svg'
import { Card } from 'flowbite-react'

function Categories() {
    return (
        <div>
            <div>
                <div className="flex  items-center">
                    <div className="text-center mx-auto pt-5">
                        <p className="mb-4 pt-5 text-red-500 font-medium ">CATEGORIES</p>
                        <h1 className="mb-4 text-5xl font-semibold"> <span className='text-sky-400'>Boundless</span> Learning at your tips.</h1>
                        <p className='text-gray-500 text-xl'>services that make your study journey easy peasy!!</p>
                    </div>
                </div>
            </div>
            <div className='mx-auto pt-10 mb-10 ' style={{ maxWidth: '100%', width: '2000px' }}>
                <div className='flex flex-wrap justify-center mt-10 mb-10 text-center items-center'>
                    <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4'>
                        <Card className="bg-green-100 max-w-xs mx-auto">
                            <img src={category1} alt="" className='border rounded-full max-h-20 bg-green-200' />
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Study Abroad
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Explore global learning opportunities for transformative education experiences.
                            </p>
                        </Card>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4">
                        <Card className="bg-red-100 max-w-xs mx-auto">
                            <img src={category2} alt="" className='bg-red-200 border rounded-full max-h-20' />
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Community
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Empowering connections and fostering collaboration for positive societal impact.
                            </p>
                        </Card>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4">
                        <Card className="bg-purple-100 max-w-xs mx-auto">
                            <img src={category3} alt="" className='bg-purple-200 border rounded-full max-h-20' />
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Skill Development
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Unlocking potential through tailored learning solutions for personal and professional growth.
                            </p>
                        </Card>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4">
                        <Card className="bg-yellow-100 max-w-xs mx-auto">
                            <img src={category4} alt="" className='bg-yellow-200 border rounded-full max-h-20' />
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Consulting
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Strategically navigating educational and business landscapes for sustainable success.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories