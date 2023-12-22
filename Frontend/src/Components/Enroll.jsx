import React from 'react'

export default function Enroll() {
    return (
        <>
            <div className='grid grid-cols-2 p-3 dark:text-white h-screen dark:bg-slate-800'>
                <img className='h-96' src='https://media.istockphoto.com/id/1096969570/vector/isometric-illustration-with-a-laptop-men-and-women-working-on-web-design.jpg?s=612x612&w=0&k=20&c=a3VvtOOYjuI0Sux_WmMEg_WHp6Bkgxh3HfY7BK6LIzA=' alt="can't loaded"></img>
                <div className='w-2/3'>
                    <p className='text-center text-3xl  mt-7'>Fill Web Builder Form</p>
                    <div className='flex space-x-10 mt-4 -ml-6'>
                        <div class="mb-4 ">
                            <label class="block text-gray-700 text-sm font-bold mb-2 dark:text-white" >
                                Enter Your Name
                            </label>
                            <input class="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter your name here" />
                        </div>
                        <div class="mb-4 -ml-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2 dark:text-white" >
                                Enter your Contact Number
                            </label>
                            <input class="shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter your Contact number" />
                        </div>

                    </div>
                    <div className='flex space-x-10 mt-4 -ml-6'>
                        <div className='border-blue-700 border rounded-md p-4'>
                            <p>which type of website you want? If you don't known which website type for you otherwise fill form continue <p className='text-blue-600 hover:underline' href='#' alt="">click here</p> </p>
                            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option selected>Choose a website type</option>
                                <option value="US">Static</option>
                                <option value="CA">Dynamic</option>
                            </select>
                            <button className='p-2 bg-purple-500 w-5/6 rounded-lg mt-4 ml-8 text-white font-semibold hover:bg-purple-300'>Submit Details</button>
                            <p className='mt-4'><b>Note:</b> Our team contact you in 12 hours only</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
