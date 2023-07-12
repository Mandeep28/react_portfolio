import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  company,
  designation,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 xs:w-[320px] w-full rounded-3xl p-10"
  >
    <p className="text-white font-black text-[48px]">"</p>
    <p className="mt-1 text-[19px] text-white tracking-wider"> {testimonial}</p>
    <div className="mt-7 flex justify-between items-center gap-1">
      <div className="flex  flex-1 flex-col">
        <p className="text-white text-[16px]">
          <span className="text-blue-gradient">@</span>{name}
        </p>
        <p className="text-secondary text-[14px]">
         {designation} of {company}
        </p>

      </div>
      <img 
      src={image}
      alt={`feedback-by-${name}`}
      className="w-10 h-10 object-cover rounded-full"
      />

    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <section className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-4`}>
        {testimonials.map((item, index) => (
          <FeedbackCard key={item.name} index={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Feedbacks, "");
