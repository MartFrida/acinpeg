const SectionTitle = ({ children, className }: { children: React.ReactNode; className?: string; }) => (
  <h2 className={`text-2xl md:text-4xl font-semibold text-center text-amber-400 mb-4 md:mb-10 uppercase tracking-wider font-serif ${className}`}>
    {children}
  </h2>
);

export default SectionTitle;
