import React from 'react'

const Nav = () => {

  return (
    <div className=' flex justify-around mx-auto p-10 h-[52px] items-center bg-slate-600 text-white'>
        <div>
            Juan Castaneda
        </div>
        <nav>
            <ul className='flex gap-10'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav