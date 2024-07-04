import React from 'react';

function Container({children, min, projects}) {
  return (
    <div 
      className={`relative rounded-2xl flex flex-col w-full 
        ${projects ? 'bg-[#252525] gap-2 p-4' : 'justify-center bg-bgc gap-4 p-2 h-full'} 
        ${min ? 'min-h-[200px]' : ''} 
        md:w-auto`}>
      {children}
    </div>
  );
}

export default Container;
