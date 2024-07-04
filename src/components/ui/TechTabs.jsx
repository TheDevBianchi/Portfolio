import Image from 'next/image'
import React from 'react'

function TechTabs({ src, label, Icon }) {
  return (
    <div className='relative group rounded-2xl bg-[#252525] flex items-center justify-start gap-2 py-4 px-4 w-auto'>
      {
        src 
        ? <Image src={src} alt='Icon' width={20} height={20} />
        : <Icon size={20} color={'#a290FC'} />
      }
      <span className='text-text font-medium'>{label}</span>
      <span className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#a290fc] transition-all duration-500"></span>
    </div>
  )
}

export default TechTabs
