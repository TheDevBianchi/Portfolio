import React from 'react'

function Container({children, min, projects }) {
  return (
    <div className={`relative rounded-2xl flex flex-col ${projects ? 'bg-[#252525] gap-2 p-6 group' : 'justify-center bg-bgc gap-4 p-4 h-full'} ${min ? 'min-h-[200px]' : null}`}>
      {children}
    </div>
  )
}

export default Container