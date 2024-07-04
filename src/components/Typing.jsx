'use client'
import Typewriter from 'typewriter-effect'

function Typing() {
  return (
    <span className='flex items-center gap-2 font-medium text-text'>
      Im a 
      <u className='text-primary'>
        <Typewriter
          options={{
            strings: ['Frontend', 'Developer', 'Musician'],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </u>
    </span>
  )
}

export default Typing
