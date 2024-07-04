import Button from '../ui/Button'
import Container from '../ui/Container'
import { Calendar, Palette, Star, Code, Laptop, ShoppingCart, Globe } from 'lucide-react'
import TechTabs from '../ui/TechTabs'

function Design() {
  return (
    <Container>
      <div className='flex items-center justify-start gap-2 mb-4'>
        <span className='flex items-center justify-center rounded-xl p-2 bg-[#252525]'>
          <Palette size={20} color='#a290fc'/>
        </span>
        <h2 className='text-title text-2xl font-medium'>Web Design</h2>
      </div>
      <p className='text-text font-medium text-md mb-4'>
        Creating visually stunning and user-centric designs that reflect brand identity and captivate target audiences effectively.
      </p>
      
      <h3 className='text-title text-xl font-medium mb-2'>{"What's My Offer?"}</h3>
      <div className='flex flex-col gap-4 mb-4'>
        <TechTabs label="Responsive Web Design" Icon={Laptop} />
        <TechTabs label="UI/UX Design" Icon={Code} />
        <TechTabs label="E-commerce Design" Icon={ShoppingCart} />
        <TechTabs label="Branding and Identity" Icon={Globe} />
      </div>
      
      <Button Icon={Calendar} text='Schedule Call' link={'https://api.whatsapp.com/send/?phone=584127113895&text&type=phone_number&app_absent=0'} navigation={false}/>
    </Container>
  )
}

export default Design
