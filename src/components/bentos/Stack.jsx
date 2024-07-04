import React from 'react'
import Container from '../ui/Container'
import { Layers } from 'lucide-react'
import TechTabs from '../ui/TechTabs'

function Stack() {
  return (
    <Container>
      <div className='flex flex-col w-full'>
        <span className='text-text text-xl font-medium flex items-center justify-center gap-2'>
          <Layers size={20} color='#a290fc' />
          My Stack
        </span>
        <h2 className='text-title text-2xl font-semibold text-center mb-4'>Tech Arsenal</h2>
        <div className='grid grid-cols-2 gap-4 mt-2'>
          <TechTabs src='/nextjs.svg' label='Next Js' />
          <TechTabs src='/js.svg' label='JavaScript' />
          <TechTabs src='/firebase.svg' label='Firebase' />
          <TechTabs src='/tailwind.svg' label='Tailwind' />
        </div>
      </div>
    </Container>
  )
}

export default Stack
