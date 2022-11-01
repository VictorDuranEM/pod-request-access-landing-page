import { BodyText } from './../components/BodyText';
import { Title } from './../components/Title';
import PodcastLogos from './../components/PodcastLogos';
import ErrorMessage from './../components/ErrorMessage';
import Head from "next/head"
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import logo from '../public/desktop/logo.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pod Request Access</title>
      </Head>
      <div className='relative px-6 pt-16 pb-24 md:pt-12 md:px-10 md:pb-0 
                      before:absolute before:inset-0
                      before:bg-[url(/mobile/image-host.jpg)] before:md:bg-[url(/tablet/image-host.jpg)] before:xl:bg-[url(/desktop/image-host.jpg)]
                      before:bg-no-repeat before:bg-cover before:opacity-20 before:md:opacity-100 before:md:left-[40%] before:xl:top-20'>
        <div className='relative'>
          <Image src={logo} alt='Pod Request Access' className='w-32' />
          <div className='md:bg-dark grid md:max-w-xl md:mt-36'>
            <div className='text-center font-light mt-14 md:text-left'>
              <Title />
              <BodyText className='md:max-w-md'/>
            </div>
            <PodcastLogos className='mt-8 row-start-3 md:mt-12' />
            <div className='mt-12 md:w-fit md:inline-block md:bg-darkGray md:rounded-full md:px-1 md:mt-10'>
              <Input placeholder='Email address' className='w-full md:w-fit' />
              {/* <ErrorMessage className='mt-2 pl-8'>Oops! Please check your email</ErrorMessage> */}
              <SubmitButton className='w-full mt-4 md:w-fit md:mt-0'>Request Access</SubmitButton>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
