import React from 'react'

function Footer() {
  return (
    <header className='flex items-center justify-between gap-4 p-3'>
            <a href="https://adil0710.github.io/" target='_blank'><h1 className='text-[10px] font-medium sm:text-sm text-slate-400'>Copyright © Developed By |<span className='text-slate-600 bold hover:text-slate-800 duration-200'> Adil Patel</span></h1></a>
            <div className='gap-4 flex items-center '>
                
                <a href="https://www.instagram.com/code_with_adil?igsh=NTc2dTRudnc1ZnYz" target='_blank' className='flex items-center specialBtni px-2 py-1 text-slate-500 rounded-full duration-200 hover:text-rose-400'>
                    
                <i className="fa-brands fa-instagram text-xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/adil-patel-737692252/" target='_blank' className='flex items-center specialBtn px-2 py-1 text-slate-500 rounded-full duration-200 hover:text-blue-600'>
                    
                <i className="fa-brands fa-linkedin text-xl"></i>
                </a>
                <a href="https://www.github.com/adil0710" target='_blank' className='flex items-center specialBtng px-2 py-1 text-slate-500 rounded-full duration-200 hover:text-slate-900'>
                    
                <i className="fa-brands fa-github text-xl"></i>
                </a>
            </div>
        </header>
  )
}

export default Footer
