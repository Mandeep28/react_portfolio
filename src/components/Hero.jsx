import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute top-[80px]   inset-0 max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="rounded-full w-5 h-5 bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        {/* hero text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hii, I am <span className="text-[#915eff]">Mandeep </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I specialize in creating  user interfaces, web applications, and immersive web experiences.
          </p>
        </div>
      </div>
      <ComputersCanvas/>
      <div className="absolute  bottom-2 flex justify-center items-center w-full">
        <a href="#about">

  
        <div className="w-[25px] h-[45px] rounded-3xl border-4 border-secondary flex justify-center items-start ">
          <motion.div
          animate={{y: [0,24,0]}}
          transition={{
            duration: 1.5,
            repeat : Infinity,
            repeatType : 'loop'
          }}
          className="w-3 h-3 rounded-full bg-secondary"
          />

        </div>
        </a>

      </div>
    </section>
  );
};

export default Hero;
