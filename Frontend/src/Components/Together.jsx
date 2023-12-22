import React from 'react'
import instagram from "./files/instagram logo.png"
import gmailLogo from "./files/Gmail logo.png"
import whatsappLogo from "./files/Whatsapp logo.png"
import linkedinLogo from "./files/Linkedin logo.png"

export default function Together() {
  return (
    <>
      <div className='dark:bg-slate-900 h-screen'>
        <div className='max-w-max p-20 font-custom font-bold text-2xl dark:text-white'>
          <p>Hello, I'm Abhishek and I work as a web developer. I have been working as a web developer for quite some time now. I believe I am a very ambitious person who loves to work on making the website work well. Working on the web is my passion as I love to work on exciting projects.</p>
          <p>Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.</p>
        </div>
        <div className='flex justify-evenly mt-14'>

          {/* Instagram section */}
          <div className='flex bg-slate-100 rounded-xl max-w-max p-4 shadow-xl shadow-pink-300'>
            <img className='h-16 ' src={instagram} alt="instagram_logo" />
            <div className='mt-2'>
              <div>Instagram Account</div>
              <a href='https://www.instagram.com/abhishek_sharma_7376/?next=%2F' className='text-blue-600 hover:underline'>Click here</a>
            </div>
          </div>
          {/* Gmail section */}
          <div className='flex bg-slate-100 rounded-xl max-w-max p-4 shadow-xl shadow-red-300 '>
            <img className='h-20 ' src={gmailLogo} alt="instagram_logo" />
            <div className='mt-2'>
              <div>Gmail Account</div>
              <a href='https://www.instagram.com/abhishek_sharma_7376/?next=%2F' className='text-blue-600 hover:underline'>Click here</a>
            </div>
          </div>
          {/* WhatsApp secton */}
          <div className='flex bg-slate-100 rounded-xl max-w-max p-4 shadow-xl shadow-green-300'>
            <img className='h-20 ' src={whatsappLogo} alt="instagram_logo" />
            <div className='mt-2'>
              <div>Whatsapp Account</div>
              <a href='https://www.instagram.com/abhishek_sharma_7376/?next=%2F' className='text-blue-600 hover:underline'>Click here</a>
            </div>
          </div>
          {/* Linkedin section */}
          <div className='flex bg-slate-100 rounded-xl max-w-max p-4 shadow-xl shadow-blue-300'>
            <img className='h-20 ' src={linkedinLogo} alt="instagram_logo" />
            <div className='mt-2'>
              <div>Linkedin Account</div>
              <a href='https://www.instagram.com/abhishek_sharma_7376/?next=%2F' className='text-blue-600 hover:underline'>Click here</a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
