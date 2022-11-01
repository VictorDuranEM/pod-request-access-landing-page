import { BodyText } from './../components/BodyText';
import { Title } from './../components/Title';
import PodcastLogos from './../components/PodcastLogos';
import ErrorMessage from './../components/ErrorMessage';
import Head from "next/head"
import Input from '../components/Input';
import SubmitButton from '../components/SubmitButton';
import logo from '../public/desktop/logo.svg';
import Image from 'next/image';
import bgPatternDots from '../public/desktop/bg-pattern-dots.svg';
import { useState } from 'react';

export default function Home() {
  const [errorMessage, setErrorMessage] = useState('');
  
  function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const input = e.currentTarget.elements[0] as HTMLInputElement;
    if (input.value === '') {
      setErrorMessage("Oops! Please add your email");
    } else if (!input.value.match(mailformat)) {
      setErrorMessage("Oops! Please check your email");
    } else {
      setErrorMessage('');
    }
  }
  

  return (
    <div className='xl:py-[130px] xl:pl-[165px] relative'>
      <Head>
        <title>Pod Request Access</title>
      </Head>
      <div className='relative min-h-screen md:min-h-fit px-6 pt-16 pb-24 md:pt-12 md:px-10 md:pb-0 xl:pt-0 
                      before:absolute before:inset-0
                      before:bg-[url(/mobile/image-host.jpg)] before:md:bg-[url(/tablet/image-host.jpg)] before:xl:bg-[url(/desktop/image-host.jpg)]
                      before:bg-no-repeat before:bg-cover before:opacity-20 before:md:opacity-100 before:md:left-[40%] before:xl:left-[40%]'>
        <div className='relative'>
          <Image src={logo} alt='Pod Request Access' className='w-32 xl:relative xl:-top-6 xl:mb-20' />
          <div className='md:bg-dark grid md:max-w-[635px] md:mt-40 md:pt-7 xl:mt-0 xl:max-w-4xl'>
            <div className='text-center font-light mt-14 md:text-left'>
              <Title />
              <BodyText className='md:max-w-md xl:mt-6' />
            </div>
            <PodcastLogos className='mt-8 row-start-3 md:mt-12 max-w-lg xl:mt-16' />
            <div>
              <form className='mt-12 md:w-fit md:inline-block md:bg-darkGray md:rounded-full md:px-1 md:mt-10' onSubmit={handleSubmit}>
                <Input placeholder='Email address' className='w-full md:w-fit' />
                <SubmitButton className='w-full mt-4 md:w-fit md:mt-0'>Request Access</SubmitButton>
              </form>
              <ErrorMessage className='w-fit mx-auto md:mx-0 mt-2 md:pl-8'>{errorMessage}</ErrorMessage>
            </div>
          </div>
        </div>
      </div>
      <Image src={bgPatternDots} alt='' className='hidden md:block mt-40 ml-10 xl:absolute xl:right-0 xl:bottom-20' />
    </div>
  )
}
