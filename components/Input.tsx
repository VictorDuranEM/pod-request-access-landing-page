export default function Input({ placeholder, className }: { placeholder: string, className?: string }) {
  return (
    <input type="text" placeholder={placeholder} className={`font-bold text-sm leading-7 text-white placeholder:font-bold placeholder:text-sm placeholder:leading-7 bg-darkGray py-3.5 px-8 rounded-full focus:outline-none ${className}`} />
  );
}
