import Image from 'next/image'
import Button from './Button'
import { ArrowRight } from 'lucide-react'
import Container from './Container'

function ProjectCard({
  title,
  duration,
  overview,
  features,
  achievements,
  link,
  imageSrc,
}) {
  return (
    <Container projects>

      <Image
        src={imageSrc}
        alt={title}
        className='rounded-xl mb-4'
        width={600}
        height={600}
      />
      <div className='flex flex-col gap-2'>
        <h3 className='text-xl font-medium text-white'>{title}</h3>
        <p className='text-sm text-gray-400'>{duration}</p>
        <p className='text-md font-medium text-gray-400'>{overview}</p>
        {features && features.length > 0 && (
          <div>
            <h3 className='text-title font-medium'>Features</h3>
            <ul className='text-sm text-gray-400 list-disc ml-4'>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        {achievements && achievements.length > 0 && (
          <div className='pb-2'>
            <h3 className='text-title font-medium'>Achievements</h3>
            <ul className='text-sm text-gray-400 list-disc ml-4'>
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className='mt-auto z-40'>
        <Button
        Icon={ArrowRight}
        text='Visit'
        link={link}
        navigation={true}
        cards
      />
      </div>
      <span className='absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#a290fc] transition-all duration-500'></span>
    </Container>
  )
}

export default ProjectCard
