import Design from '@/components/bentos/Design'
import Projects from '@/components/bentos/Projects'
import Skills from '@/components/bentos/Skills'
import Stack from '@/components/bentos/Stack'
import Web from '@/components/bentos/Web'
import BonusContainer from '@/components/containers/BonusContainer'
import ProfileContainer from '@/components/containers/ProfileContainer'

function Page() {
  return (
    <div className='container mx-auto p-5'>
      <div className='grid-container'>
        <div className='Activities flex flex-col gap-4'>
          <Stack />
          <Projects />
        </div>
        <ProfileContainer />
        <div className='Headline flex flex-col gap-2'>
          <Skills />
        </div>
        <div className='Skills'>
          <div className='Skill-1'>
            <Web />
          </div>
          <div className='Skill-2'>
            <Design />
          </div>
          <BonusContainer />
        </div>
      </div>
    </div>
  )
}

export default Page
