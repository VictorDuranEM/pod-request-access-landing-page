export function BodyText({ className }: { className?: string }) {
  return (
    <p className={`text-lightGray text-sm leading-6 mt-4 md:text-lg ${className}`}>Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
  );
}
