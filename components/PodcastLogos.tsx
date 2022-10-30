import applePodcast from '../public/desktop/apple-podcast.svg';
import spotifyPodcast from '../public/desktop/spotify.svg';
import googlePodcast from '../public/desktop/google-podcasts.svg';
import pocketPodcast from '../public/desktop/pocket-casts.svg';
import Image from 'next/image';

export default function PodcastLogos({ className }: { className?: string }) {
  return (
    <div className='flex justify-between items-center gap-6 flex-wrap'>
      <Image src={spotifyPodcast} alt='Spotify Podcast' className={`[filter:invert(40%)_sepia(37%)_saturate(407%)_hue-rotate(187deg)_brightness(89%)_contrast(88%)] ${className}`} />
      <Image src={applePodcast} alt='Apple Podcast' className={`[filter:invert(40%)_sepia(37%)_saturate(407%)_hue-rotate(187deg)_brightness(89%)_contrast(88%)] ${className}`} />
      <Image src={googlePodcast} alt='Google Podcast' className={`[filter:invert(40%)_sepia(37%)_saturate(407%)_hue-rotate(187deg)_brightness(89%)_contrast(88%)] ${className}`} />
      <Image src={pocketPodcast} alt='Pocket Cast' className={`[filter:invert(40%)_sepia(37%)_saturate(407%)_hue-rotate(187deg)_brightness(89%)_contrast(88%)] ${className}`} />
    </div>
  );
}
