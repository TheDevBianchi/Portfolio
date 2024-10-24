import Image from 'next/image'
import Button from './Button'
import { ArrowRight } from 'lucide-react'

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
    <div className='relative bg-bgc max-h-max shadow-xl rounded-2xl p-8 transition-transform transform hover:scale-[1.06] hover:shadow-2xl duration-300 ease-out group'>
      {/* Imagen del proyecto */}
      <Image
        src={imageSrc}
        alt={title}
        className='rounded-xl mb-6 object-cover w-full h-60 transition-all duration-300 ease-in-out group-hover:opacity-90'
        width={600}
        height={600}
      />

      {/* Contenido del proyecto */}
      <div className='flex flex-col gap-4'>
        <h3 className='text-2xl font-bold text-primary'>{title}</h3>
        <p className='text-sm text-gray-400 italic'>{duration}</p>
        <p className='text-base font-light text-gray-300'>{overview}</p>

        {/* Features del proyecto */}
        {features && features.length > 0 && (
          <div>
            <h4 className='text-lg font-semibold text-primary mb-2'>
              Features
            </h4>
            <ul className='text-sm text-gray-400 list-disc ml-4 space-y-1'>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Achievements del proyecto */}
        {achievements && achievements.length > 0 && (
          <div className='pb-4'>
            <h4 className='text-lg font-semibold text-secondary text-primary mb-2'>
              Achievements
            </h4>
            <ul className='text-sm text-gray-400 list-disc ml-4 space-y-1'>
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Botón de visita */}
      <div className='mt-6 z-40'>
        <Button
          Icon={ArrowRight}
          text='Visit'
          link={link}
          navigation={true}
          cards
        />
      </div>

      {/* Efecto de borde animado */}
      <span className='absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary transition-all duration-500'></span>
    </div>
  )
}

export default ProjectCard
