import { motion } from "framer-motion";

const baseCardClasses =
  "bg-slate-800/90 border border-slate-700 rounded-2xl overflow-hidden shadow-md hover:shadow-amber-400/30 hover:scale-[1.02] transition-all duration-300";

interface AnimatedCardProps {
  imgSrc: string;
  title: string;
  index?: number;
  className?: string;
  role?:string;
  children?: React.ReactNode; // например кнопки
}

const AnimatedCard = ({
  imgSrc,
  title,
  className = "",
  role,
  children,
}: AnimatedCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className={`${baseCardClasses} ${className}`}
  >
    <img
      src={imgSrc}
      className="w-full h-48 lg:h-64 object-cover rounded-t-2xl"
    />

    <div className="p-6 text-center">
      <h3 className="text-xl">{title}</h3>
<p className="text-gray-400 italic mt-2">{role}</p>
      {children}
    </div>
  </motion.div>
);
export default AnimatedCard;
