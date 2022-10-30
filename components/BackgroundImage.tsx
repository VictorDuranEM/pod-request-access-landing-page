import { useEffect, useState } from "react";
import Image from "next/image";
import bgMobile from '../public/mobile/image-host.jpg';
import bgTablet from '../public/tablet/image-host.jpg';
import bgDesktop from '../public/desktop/image-host.jpg';

function getWindowWidth() {
  return window.innerWidth;
}

export default function BackgroundImage() {
  
  const [windowWidth, setWindowWidth] = useState<number>();
  const TABLET_SIZE = 768;
  const DESKTOP_SIZE = 1024;
  let bgImage = bgMobile;
  
  if (windowWidth && windowWidth < TABLET_SIZE) {
    bgImage = bgMobile;
  } else if (windowWidth && windowWidth < DESKTOP_SIZE) {
    bgImage = bgTablet;
  } else {
    bgImage = bgDesktop;
  }
  
  useEffect(() => {
    setWindowWidth(getWindowWidth());
    window.addEventListener('resize', () => setWindowWidth(getWindowWidth()));
    return () => window.removeEventListener('resize', () => setWindowWidth(getWindowWidth()));
  }, []);
  
  return (
    <div className="absolute inset-0 -z-10">
      <Image src={bgImage} alt="" width={windowWidth} priority className="opacity-20" />
    </div>
  );
}