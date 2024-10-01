import React from 'react'

function navbar() {
  return (
   <nav className='flex justify-between bg-slate-400 text-white '>
    <div className='logo w-20 object-contain mx-3 py-2 mix-blend-color-burn'>
    <img src="https://img.freepik.com/premium-vector/list-minimal-vector-line-icon-3d-button-isolated-black-background-premium-vectorxa_570929-1564.jpg" alt="" />
    </div>
    <ul className='flex gap-10 m-9'>
        <li className='cursor-pointer hover:text-violet-100 transition-all'>Your tasks</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
    </ul>

   </nav>
  )
}

export default navbar