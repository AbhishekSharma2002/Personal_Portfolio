import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function index() {
  return (
    <>
      <div className='sticky top-0 bg-white z-10 shadow-lg p-2 dark:bg-slate-800 w-screen'>
        <div className='flex justify-between text-justify '>
          <p className='text-purple-700 font-bold pl-6 text-2xl'>CodeWithAbhishek</p>
          <div className='flex space-x-4'>
            <div className='hover:cursor-pointer hover:border-b-2 hover:border-purple-700 dark:text-white'><Link to="/">Home |</Link></div>
            <div className='hover:cursor-pointer hover:border-b-2 hover:border-purple-700 dark:text-white'><Link to="/work">Work With Us |</Link></div>
            <div className='hover:cursor-pointer hover:border-b-2 hover:border-purple-700 dark:text-white'><Link to="/todosList">List of todos</Link></div>
            <Link to="/login"><button class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center">Login</button></Link>

          </div>
        </div>
      </div>

      <Outlet />
    </>
  )
}