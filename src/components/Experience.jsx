import { motion } from "framer-motion";
import { styles } from "../styles";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experince }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #232621",
      }}
      date={experince.date}
      iconStyle={{ background: experince.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experince.icon}
            alt={experince.company_name}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experince.title}</h3>
        <p
          className="text-secondary font-semibold text-[16px]"
          style={{ margin: 0 }}
        >
          {experince.company_name}
        </p>
      </div>
      <ul className="list-disc mt-5 ml-5 space-y-2">
        {
          experince.points.map((point , index)=>(
            <li key={`experience-point-${index}`} className="text-white-100 pl-1 text-[14px] tracking-wider">
                {point}
            </li>

          ))
        }
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}> Work Experience .</h2>
      </motion.div>
      <div className="flex flex-col mt-20">
        <VerticalTimeline>
          {experiences.map((experince, index) => (
            <ExperienceCard key={index} experince={experince} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
