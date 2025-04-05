import React from 'react'
import { Book, History, Bookmark, Moon } from 'lucide-react';

const Navbar = () => {
  return (
    <>
      <div className="navbar px-[250px] flex items-center justify-between h-[100px] border-bottom-[1px] border-[#374151]">
        <div className="logo flex items-center gap-[5px]">
          <Book size={"40px"} color='#9333ea' />
          <h3 className='text-[25px] font-[600]'>Lexi<span className='text-purple-600'>AI</span></h3>
        </div>
        <div className="icons flex items-center gap-[20px]">
          <History size={"35px"} className='cursor-pointer p-[5px] rounded-[50%] transition-all hover:bg-[#1F2937]'/>
          <Bookmark size={"35px"} className='cursor-pointer p-[5px] rounded-[50%] transition-all hover:bg-[#1F2937]'/>
          <Moon size={"35px"} className='cursor-pointer p-[5px] rounded-[50%] transition-all hover:bg-[#1F2937]'/>
        </div>
      </div>
    </>
  )
}

export default Navbar