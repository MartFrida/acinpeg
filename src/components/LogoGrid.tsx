import { motion } from "framer-motion";

const LogoGrid = ({ items, size = "h-24" }: { items: string[]; size?: string }) => (
  <div className="grid grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6 items-center justify-items-center max-w-6xl mx-auto">
    {items.map((logo, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: i * 0.05 }}
        whileHover={{ scale: 1.1 }}
        className="flex items-center justify-center w-full h-full"
      >
        <img src={logo} alt={`logo-${i + 1}`} className={`${size} object-contain`} />
      </motion.div>
    ))}
  </div>
)
export default LogoGrid;