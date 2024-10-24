import Container from '@/components/ui/Container'
import React from 'react'
import ProjectCard from '@/components/ui/ProjectCard'
import projects from '@/data/projectsData'
import { BriefcaseBusiness } from 'lucide-react'

function ProjectsPage() {
  return (
    <div className='container mx-auto px-6 py-12'>
      {/* Header de la página */}
      <div className='text-center mb-12'>
        <div className='flex flex-col items-center'>
          <span className='flex items-center gap-2 text-lg font-medium text-primary'>
            <BriefcaseBusiness className='w-6 h-6 text-primary' />
            My Work
          </span>
          <h3 className='text-3xl font-semibold text-title mb-4'>
            My Top 3 Projects
          </h3>
          <p className='text-base text-gray-400 max-w-xl mx-auto'>
            Here are some of the projects I’m most proud of, showcasing my work
            and skills in various technologies.
          </p>
        </div>
      </div>

      {/* Grid de proyectos */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {projects.map(
          ({
            title,
            duration,
            overview,
            features,
            achievements,
            link,
            imageSrc,
          }) => (
            <ProjectCard
              key={link}
              title={title}
              duration={duration}
              overview={overview}
              features={features}
              achievements={achievements}
              link={link}
              imageSrc={imageSrc}
            />
          )
        )}
      </div>
    </div>
  )
}

export default ProjectsPage
