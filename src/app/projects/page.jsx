import Container from '@/components/ui/Container'
import React from 'react'
import ProjectCard from '@/components/ui/ProjectCard'
import projects from '@/data/projectsData'
import { BriefcaseBusiness } from 'lucide-react'

function ProjectsPage() {
  return (
    <div className='container mx-auto flex flex-col items-center justify-center p-5'>
      <Container>
        <div className='flex flex-col items-center justify-center'>
          <span className='flex flex-row justify-center items-center gap-2 text-text text-lg font-medium'>
            <BriefcaseBusiness color='#a290fc' />
            My Work
          </span>
          <h3 className='text-subtitle font-medium mb-8 text-title text-2xl'>
            My top 4 Projects
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {projects.map(({ title, duration, technologies, overview, features, achievements, link, imageSrc }) => (
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
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProjectsPage
