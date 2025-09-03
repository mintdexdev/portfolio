import React, { useEffect, useState } from 'react';
import ContainerX from '@/components/ui/ContainerX';
import { ButtonLightOutline } from './ui/Button';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");


  useEffect(() => {
    // function to format time as HH:mm:ss in IST
    const getTimeIST = () => {
      return new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());
    };

    setCurrentTime(getTimeIST());


    const timer = setInterval(() => {
      setCurrentTime(getTimeIST());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (

    <footer className='bg-black '>
      <ContainerX>


        <nav className='pt-20 relative'>

          <h2 className='text-l4 text-center border-b'>Links</h2>
          <div className='flex justify-around py-10'>
            <ul >
              <li><a href="#section-projects">Projects</a></li>
              <li><a href="#section-skills">Skills</a></li>
              <li><a href="#section-about">About</a></li>
              <li><a href="#section-contact">Contact</a></li>
            </ul>
            <ul >
              <li><a href="#section-projects">Projects</a></li>
              <li><a href="#section-skills">Skills</a></li>
              <li><a href="#section-about">About</a></li>
              <li><a href="#section-contact">Contact</a></li>
            </ul>
            <ul >
              <li><a href="#section-projects">Projects</a></li>
              <li><a href="#section-skills">Skills</a></li>
              <li><a href="#section-about">About</a></li>
              <li><a href="#section-contact">Contact</a></li>
            </ul>
          </div>

          <a className='absolute right-0 bottom-0'
            href="#section-hero">
            <ButtonLightOutline>
              Go To Top ↑
            </ButtonLightOutline>
          </a>

        </nav>

        <div className='text-center font-mono py-10'>
          <p>[ {currentTime} ] </p>
          <p>IST / +5:30 UTC</p>
        </div>
        <div className='mt-10'>
          <img src="/assets/deepak-gobari.svg" alt="deepak gobari" />
        </div>
      </ContainerX>
    </footer>
  )
}
