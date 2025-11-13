const CardGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-10 max-w-6xl mx-auto">
    {children}
  </div>
);
export default CardGrid;