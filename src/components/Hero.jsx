import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const bounce = {
  animate: {
    y: [0, 10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <motion.div
        className="container max-w-4xl mx-auto text-center z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="space-y-6">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <motion.span
              variants={fadeUp}
              className="inline-block"
            >
              Hi, I'm
            </motion.span>{" "}
            <motion.span
              variants={fadeUp}
              className="inline-block text-primary"
            >
              AFKIR
            </motion.span>{" "}
            <motion.span
              variants={fadeUp}
              className="inline-block text-gradient"
            >
              Chaimaâ
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
          Full-stack web developer with expertise in both front-end and back-end technologies. I specialize in creating dynamic, responsive, and user-friendly web applications with clean, efficient code. My development approach focuses on performance, scalability, and maintainability.

          </motion.p>

          <motion.div variants={fadeUp} className="pt-4">
            <motion.a
              href="#projects"
              className="cosmic-button inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        variants={bounce}
        animate="animate"
      >
        <span className="text-sm text-muted-foreground mb-2">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.div>
    </section>
  );
};

export default Hero
 
