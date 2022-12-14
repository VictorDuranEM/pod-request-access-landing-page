import applePodcast from '../public/desktop/apple-podcast.svg';
import spotifyPodcast from '../public/desktop/spotify.svg';
import googlePodcast from '../public/desktop/google-podcasts.svg';
import pocketPodcast from '../public/desktop/pocket-casts.svg';
import Image from 'next/image';

export default function PodcastLogos({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-6 max-[330px]:flex-wrap md:justify-start md:gap-8 ${className}`}>
      <Image src={spotifyPodcast} alt='Spotify Podcast' className={`[filter:invert(40%)_sepia(37%)_saturate(407%)_hue-rotate(187deg)_brightness(89%)_contrast(88%)] max-w-[9]`} />
      <Image src={applePodcast} alt='Apple Podcast' className={`[filter:invert(40%)_sepia(37%)_saturate(407%)_hue-rotate(187deg)_brightness(89%)_contrast(88%)] max-w-[9]`} />
      <Image src={googlePodcast} alt='Google Podcast' className={`[filter:invert(40%)_sepia(37%)_saturate(407%)_hue-rotate(187deg)_brightness(89%)_contrast(88%)] max-w-[9]`} />
      <Image src={pocketPodcast} alt='Pocket Cast' className={`[filter:invert(40%)_sepia(37%)_saturate(407%)_hue-rotate(187deg)_brightness(89%)_contrast(88%)] max-w-[9]`} />
    </div>
  );
}
