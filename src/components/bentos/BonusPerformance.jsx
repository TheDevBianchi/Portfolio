import React from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { Calendar, CircleGauge } from 'lucide-react'

function BonusPerformance() {
  return (
    <Container>
      <div className='flex flex-col items-start justify-start gap-2'>
        <div className='flex flex-row items-center justify-center gap-2'>
          <span className='flex items-center justify-center rounded-xl p-2 bg-[#252525]'>
            <CircleGauge size={20} color='#a290fc' />
          </span>
          <h2 className='text-title text-2xl font-medium'>Web Performance</h2>
        </div>

        <p className='text-text font-medium text-md'>
          Improving website speed and user experience.
        </p>
        <ul className='text-text list-disc ml-5'>
          <li>Page Load Optimization</li>
          <li>Resource Compression</li>
          <li>Caching Strategies</li>
        </ul>
        <Button
          Icon={Calendar}
          text='Schedule Call'
          link={'https://api.whatsapp.com/send/?phone=584127113895&text&type=phone_number&app_absent=0'}
          navigation={false}
        />
      </div>
    </Container>
  )
}

export default BonusPerformance
