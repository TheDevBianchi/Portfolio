import React from 'react'
import Container from '../ui/Container'
import { Flag, Smile, Star } from 'lucide-react'
import Profile from '../bentos/Profile'

function ProfileContainer() {
  return (
    <div className='Profile flex flex-col gap-4'>
      <div className='hidden md:grid grid-cols-1 md:grid-cols-3 gap-4'>
        <Container min>
          <div className='flex flex-col items-center justify-center gap-1 bg-[#191919] p-4 rounded-xl'>
            <h2 className='text-4xl font-bold text-[#a290fc]'>12+</h2>
            <span className='flex items-center gap-1 text-sm text-[#a290fc]'>
              <Flag className='text-[#a290fc]' />
              Projects
            </span>
          </div>
        </Container>

        <Container min>
          <div className='flex flex-col items-center justify-center gap-1 bg-[#191919] p-4 rounded-xl'>
            <h2 className='text-4xl font-bold text-[#a290fc]'>8+</h2>
            <span className='flex items-center gap-1 text-sm text-[#a290fc]'>
              <Smile className='text-[#a290fc]' />
              Happy Clients
            </span>
          </div>
        </Container>

        <Container min>
          <div className='flex flex-col items-center justify-center gap-1 bg-[#191919] p-4 rounded-xl'>
            <h2 className='text-4xl font-bold text-[#a290fc]'>3+</h2>
            <span className='flex items-center gap-1 text-sm text-[#a290fc]'>
              <Star className='text-[#a290fc]' />
              Year Expertise
            </span>
          </div>
        </Container>
      </div>
      <Profile />
    </div>
  )
}

export default ProfileContainer
