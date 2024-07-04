import Button from '../ui/Button'
import Container from '../ui/Container'
import { Code, Calendar, Server, Codepen, Database, Globe } from 'lucide-react'
import TechTabs from '../ui/TechTabs'  // Asegúrate de importar el componente TechTabs correctamente

function Web() {
  return (
    <Container>
      <div className='flex items-center justify-start gap-2 mb-4'>
        <span className='flex items-center justify-center rounded-xl p-2 bg-[#252525]'>
          <Code size={20} color='#a290fc' />
        </span>
        <h2 className='text-title text-2xl font-medium'>Web Development</h2>
      </div>
      <p className='text-text font-medium text-md mb-4'>
        Crafting functional websites with clean code and responsive design to meet client objectives and enhance user experiences.
      </p>
      
      <h3 className='text-title text-xl font-semibold mb-2'>My Service</h3>
      <div className='flex flex-col gap-4 mb-4'>
        <TechTabs label="Frontend Development" Icon={Codepen} />
        <TechTabs label="Fullstack Applications" Icon={Server} />
        <TechTabs label="Firebase Managment" Icon={Database} />
        <TechTabs label="Web Performance" Icon={Globe} />
      </div>
      
      <Button Icon={Calendar} text='Schedule Call' link={'https://api.whatsapp.com/send/?phone=584127113895&text&type=phone_number&app_absent=0'} navigation={false}/>
    </Container>
  )
}

export default Web
