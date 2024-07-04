import React from 'react';

function Tabs({ Icon, text }) {
  return (
    <span className='flex gap-2 items-center w-fit border border-text bg-[#202020] shadow-sm rounded-2xl py-[2px] px-2 text-[12px] lg:text-[14px] font-medium whitespace-nowrap'>
      <Icon size={18} color='#a290fc' />
      {text}
    </span>
  );
}

export default Tabs;
