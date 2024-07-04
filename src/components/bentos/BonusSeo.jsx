import Button from '../ui/Button'
import Container from '../ui/Container'
import { Calendar, TrendingUp } from 'lucide-react'

function BonusSeo() {
  return (
    <Container>
      <div className='flex flex-col items-start justify-start gap-2'>
        <div className='flex flex-row items-center justify-center gap-2'>
          <span className='flex items-center justify-center rounded-xl p-2 bg-[#252525]'>
            <TrendingUp size={20} color='#a290fc' />
          </span>
          <h2 className='text-title text-2xl font-medium'>SEO Optimization</h2>
        </div>
        <p className='text-text font-medium text-md'>
          Enhancing website visibility and search engine ranking.
        </p>
        <ul className='text-text list-disc ml-5'>
          <li>Keyword Research</li>
          <li>On-page Optimization</li>
          <li>Technical SEO</li>
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

export default BonusSeo
