import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Button({ src, text, link, navigation, Icon, cards }) {
  return (
    <Link
      href={link}
      target='_blank'
      className={`relative group ${
        navigation ? 'bg-primary' : 'bg-[#191919]'
      } ${cards ? 'max-h-7' : null} mt-2 flex-grow flex justify-center items-center gap-4 rounded-2xl p-4 w-full`}>
      {navigation ? null : src ? (
        <Image src={src} alt={src ? 'Icon' : null} width={20} height={20} />
      ) : null}
      {Icon ? (
        <span>
          <Icon size={20} color='#a290fc' />
        </span>
      ) : null}
      <span
        className={` ${
          navigation ? 'text-[#191919]' : 'text-text'
        } font-medium`}>
        {text}
      </span>
      <span className='absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#a290fc] transition-all duration-500'></span>
    </Link>
  )
}

export default Button
