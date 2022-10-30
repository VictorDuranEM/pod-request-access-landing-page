import PodcastLogos from './../components/PodcastLogos';
import ErrorMessage from './../components/ErrorMessage';
import Head from "next/head"
import InlineForm from '../components/InlineForm';
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import logo from '../public/desktop/logo.svg';
import Image from 'next/image';
import bgMobile from '../public/mobile/image-host.jpg';
import dynamic from 'next/dynamic';

const BackgroundImage = dynamic(() => import('../components/BackgroundImage'), { ssr: false });

export default function Home() {
  return (
    <div className='relative'>
      <Head>
        <title>Pod Request Access</title>
      </Head>
      <div className='px-6 pt-16 pb-24'>
        <Image src={logo} alt='Pod Request Access' className='mx-auto' />
        <div className='text-center font-light mt-14'>
          <h1 className='text-green text-2xl leading-9 uppercase'>Publish your podcasts <span className='text-white'>everywhere.</span></h1>
          <p className='text-lightGray text-sm leading-6 mt-4'>Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
        </div>
        <PodcastLogos className='mt-8'/>
        <div className='mt-12'>
          <Input placeholder='Email address' className='w-full' />
          {/* <ErrorMessage className='mt-2 pl-8'>Oops! Please check your email</ErrorMessage> */}
          <SubmitButton className='w-full mt-4'>Request Access</SubmitButton>
        </div>
      </div>
      
      <BackgroundImage />
    </div>
  )
}
