"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants, useScroll, useTransform, useSpring } from "framer-motion";
import { NeuralScene } from "@/components/three/NeuralScene";
import Image from "next/image";

const roles = [
  "Computer Science Engineer",
  "AI / ML Enthusiast",
  "Data Analyst",
  "Python Developer",
  "Problem Solver",
];

const objectives = [
  "Build impactful AI & data-driven products",
  "Grow into an advanced AI/ML engineer",
  "Work on real-world problems at scale",
  "Contribute to innovation through research & development",
];

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const y3 = useTransform(scrollY, [0, 500], [0, 100]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const name = "Amit Kumar";

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center pt-24 pb-16 lg:pt-32">
      {/* Background with gradient and noise */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.15),transparent_50%)] bg-slate-950" />
      <div className="absolute inset-0 -z-10 opacity-20 bg-[url('/noise.svg')] mix-blend-overlay" /> 

      {/* Floating Background Photos */}
      <div className="absolute inset-0 -z-0 overflow-hidden pointer-events-none">
        <motion.div 
            style={{ y: y1, x: mousePosition.x * -20, rotate: -6 }} 
            className="absolute top-[10%] left-[5%] w-48 h-64 md:w-64 md:h-80 opacity-30 hover:opacity-60 transition-opacity duration-500"
        >
             <Image 
                src="/images/20251209_220721.jpg" 
                alt="Smart India Hackathon Winner" 
                fill 
                className="object-cover rounded-2xl drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
             />
        </motion.div>
        
        <motion.div 
            style={{ y: y2, x: mousePosition.x * 30, rotate: 15 }} 
            className="absolute top-[20%] right-[10%] w-40 h-56 md:w-56 md:h-72 opacity-20 hover:opacity-40 transition-opacity duration-500"
        >
             <Image 
                src="/images/ai-placeholder.svg" 
                alt="AI Model" 
                fill 
                className="object-contain drop-shadow-2xl"
             />
        </motion.div>

        <motion.div 
            style={{ y: y3, x: mousePosition.x * -40, rotate: -5 }} 
            className="absolute bottom-[20%] left-[20%] w-56 h-40 md:w-72 md:h-56 opacity-10 hover:opacity-30 transition-opacity duration-500"
        >
             <Image 
                src="/images/data-placeholder.svg" 
                alt="Data Visualization" 
                fill 
                className="object-contain drop-shadow-2xl"
             />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 z-10">
            
            {/* 1. Animated Name */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white flex flex-wrap gap-x-4">
                {name.split(" ").map((word, i) => (
                    <span key={i} className="flex">
                        {word.split("").map((char, index) => (
                            <motion.span
                                key={`${word}-${index}`}
                                variants={letterVariants}
                                className="inline-block transition-transform duration-300 hover:scale-110 hover:text-sky-400 cursor-default"
                            >
                            {char}
                            </motion.span>
                        ))}
                    </span>
                ))}
              </h1>
              {/* Subtle glow effect behind name */}
              <div className="absolute -inset-4 bg-sky-500/20 blur-3xl -z-10 rounded-full opacity-0 animate-pulse" />
            </motion.div>

            {/* 2. Dynamic Role */}
            <div className="h-8 md:h-10 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl font-medium text-sky-400 font-mono"
                > 
                  &gt; {roles[roleIndex]}
                  <span className="animate-blink">_</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 3. Profile Summary */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-base md:text-lg text-slate-300 max-w-xl leading-relaxed border-l-2 border-sky-500/50 pl-4"
            >
              A passionate Computer Science Engineering student with strong foundations in <span className="text-white font-medium">Python</span>, <span className="text-white font-medium">Data Analytics</span>, and <span className="text-white font-medium">AI/ML</span>. I build intelligent, scalable, and real-world solutions by combining analytical thinking, clean code, and modern technologies.
            </motion.p>

            {/* 4. Career Objectives */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
                Career Objectives
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {objectives.map((obj, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                    className="flex items-start gap-3 p-3 rounded-lg border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm transition-colors group cursor-default"
                  >
                    <div className="mt-1 h-2 w-2 rounded-full bg-sky-500 group-hover:bg-sky-400 group-hover:shadow-[0_0_8px_rgba(56,189,248,0.6)] transition-all" />
                    <span className="text-sm text-slate-300 group-hover:text-slate-100 transition-colors">
                      {obj}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="hidden lg:block h-[600px] w-full relative"
          >
             {/* 3D Scene Container */}
             <div className="absolute inset-0 mask-radial-fade">
                <NeuralScene />
             </div>
             
             {/* Floating Badge Example - Optional parallax element */}
             <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-10 right-10 p-4 rounded-xl bg-slate-900/80 border border-slate-700/50 backdrop-blur-md shadow-xl"
             >
                <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-mono text-green-400">System Online</span>
                </div>
             </motion.div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll</span>
        <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-5 h-8 border-2 border-slate-600 rounded-full flex justify-center p-1"
        >
            <div className="w-1 h-1 bg-slate-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
