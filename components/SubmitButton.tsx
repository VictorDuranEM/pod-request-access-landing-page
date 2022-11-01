export default function SubmitButton({ children, className}: { children: React.ReactNode, className?: string }) {
  return (
    <button 
      type="submit" 
      className={`font-bold text-sm leading-7 text-dark bg-green py-2.5 px-7 rounded-full hover:bg-lightGreen ${className}`}>
      {children}
    </button>
  );
}

