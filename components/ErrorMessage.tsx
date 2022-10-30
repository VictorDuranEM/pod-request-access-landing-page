export default function ErrorMessage({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <p className={`font-bold text-xs text-red ${className}`}>{children}</p>
  );
}
