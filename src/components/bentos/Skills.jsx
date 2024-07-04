import React from 'react'
import Container from '../ui/Container'
import { ArrowDownToDot } from 'lucide-react'

function Skills() {
  return (
    <Container>
      <span className='flex flex-row items-center gap-2 justify-center text-text text-xl font-medium'>
        <ArrowDownToDot size={30} color='#a290fc'/>
        Skills
      </span>
      <h2 className='text-center text-2xl text-title font-semibold'>Im Good At</h2>
    </Container>
  )
}

export default Skills