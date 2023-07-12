import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form, [name] : value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
  };

  return (
    <section className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-7 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 0.75)}
        className="flex-[0.80] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in Touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form
          ref={formRef}
          className="mt-12 flex flex-col gap-8"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col ">
            <label htmlFor="name" className="text-white font-medium mb-4 mx-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What your name ?"
              className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary border-none outline-none rounded-lg "
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="email" className="text-white font-medium mb-4 mx-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What your Email ?"
              className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary border-none outline-none rounded-lg "
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="message" className="text-white font-medium mb-4 mx-2">
              Your Message
            </label>
            <textarea
             rows="7"
              name="message"
              id="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say ?"
              className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary border-none outline-none rounded-lg "
            />
          </div>
          <button
          type="submit"
          className="bg-tertiary rounded-lg w-fit text-white font-bold py-3 px-8 shadow-lg shadow-primary"
          >
            {
              loading ? 'Sending ...' : 'Send'
            }

          </button>
        </form>
      </motion.div>
      {/*  Earth Canvas */}
      <motion.div 
    variants={slideIn("right", "tween", 0.2, 0.75)}
    className="xl:flex-[0.90] xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>

      </motion.div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
