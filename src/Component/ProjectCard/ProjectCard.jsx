import { motion } from "framer-motion";
export default function ProjectCard({ title, describition, imgUrl }) {
  return (
    <motion.div
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 col-span-12 md:col-span-4`}
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
    >
      <h3 className="mx-auto text-center text-3xl font-semibold">{title}</h3>
      <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
        <span className="block text-center font-semibold text-indigo-50">
          {describition}
        </span>
        <img src={imgUrl} alt={describition} />
      </div>
    </motion.div>
  );
}
