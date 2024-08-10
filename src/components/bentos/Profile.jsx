import Container from '../ui/Container'
import Image from 'next/image'
import Link from 'next/link'
import Typing from '../Typing'
import Tabs from '../ui/Tabs'
import Button from '../ui/Button'
import {
  Globe,
  MapPin,
  GraduationCap,
  BookMarked,
  SmilePlus,
  BriefcaseBusiness
} from 'lucide-react'

function Profile() {
  return (
    <Container>
      <div className='flex gap-4 justify-center w-full'>
        <Image
          className='rounded-2xl overflow-hidden object-cover'
          src='/face.webp'
          alt='Profile'
          width={300}
          height={300}
        />
        <div>
          <div className='flex items-center gap-2 pl-4 w-full min-w-[200px] bg-[#252525] rounded-2xl py-1 px-1'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-2xl bg-green-400 opacity-75'></span>
              <span className='relative inline-flex rounded-2xl h-2 w-2 bg-green-500'></span>
            </span>
            <p className='text-text 2xl:text-[18px]'>Available To Work</p>
          </div>
          <h2 className='text-title font-semibold text-3xl pt-2'>
            Rafael Bianchi
          </h2>
          <Typing />
          <Link
            className='hidden md:block text-text mt-2'
            href='/Rafael_Bianchi_CV.pdf'
            target='_blank'
            download='Rafael_Bianchi_CV.pdf'>
            Download My CV
          </Link>
        </div>
      </div>
      <div className='bg-[#191919] flex flex-wrap gap-4 w-full rounded-2xl p-4 text-span'>
        <Tabs Icon={MapPin} text='Venezuela' />
        <Tabs Icon={Globe} text='English & Spanish' />
        <Tabs Icon={BriefcaseBusiness} text='Freelancer' />
        <Tabs Icon={BookMarked} text='6th Semester' />
        <Tabs Icon={GraduationCap} text='Software Engineer' />
        <Tabs Icon={BookMarked} text='Universidad Autónoma de Santo Domingo' />
        <Tabs Icon={SmilePlus} text='Good Boy' />
      </div>
      <div className='flex flex-wrap gap-4 w-full'>
        <Button src='/telegram.svg' text={'Telegram Me'} link='https://t.me/+584127113895' />
        <Button src='/whatsapp.svg' text={'Whatsapp Me'} link='https://api.whatsapp.com/send/?phone=584127113895&text&type=phone_number&app_absent=0' />
      </div>
    </Container>
  )
}

export default Profile

