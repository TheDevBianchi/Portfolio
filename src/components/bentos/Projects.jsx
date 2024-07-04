import { BriefcaseBusiness } from 'lucide-react'
import Container from '@/components/ui/Container'
import Carrousel from '../ui/Carrousel'
import Button from '../ui/Button'
import {SquareMousePointer} from 'lucide-react'

function Projects() {
  return (
    <Container>
      <div className='grid grid-cols-1'>
        <span className='flex items-center justify-center gap-2 text-text text-xl font-medium'>
          <BriefcaseBusiness size={20} color='#a290fc' />
          Projects
        </span>
        <h2 className='text-title font-semibold text-2xl text-center'>
          Works Gallery
        </h2>
        <Carrousel />
      </div>
      <Button link='/projects' text='Take a Look of My Projects' Icon={SquareMousePointer} /> 
    </Container>
  )
}

export default Projects
