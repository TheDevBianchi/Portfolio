
import { Calendar, BarChart2 } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'

function BonusMetrics() {
  return (
    <Container>
        <div className='flex flex-col items-start justify-start gap-2'>
          <div className='flex flex-row items-center justify-center gap-2'>
            <span className='flex items-center justify-center rounded-xl p-2 bg-[#252525]'>
              <BarChart2 size={20} color='#a290fc' />
            </span>
            <h2 className='text-title text-2xl font-medium'>Metrics & Statistics</h2>
          </div>
          <p className='text-text font-medium text-md'>
            Analyzing the data to drive informed decisions.
          </p>
          <ul className='text-text list-disc ml-5'>
            <li>Traffic Analysis</li>
            <li>User Behavior Tracking</li>
            <li>Conversion Metrics</li>
          </ul>
          <Button Icon={Calendar} text='Schedule Call' link={'https://api.whatsapp.com/send/?phone=584127113895&text&type=phone_number&app_absent=0'} navigation={false} />
        </div>
      </Container>
  )
}

export default BonusMetrics