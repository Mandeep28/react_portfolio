import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  name,
  description,
  tags,
  source_code_link,
  image,
  index,
}) => {
  return (
    <div >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-3xl w-full sm:w-[360px] p-5"
      >
        <div className="h-[230px] w-full relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full rounded-2xl object-cover"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="rounded-full black-gradient w-10 h-10 flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white text-[24px] font-bold">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px]">
            {description}
          </p>
        </div>
        {/* tags */}
        <div className="flex mt-4 flex-wrap gap-2">
          {
            tags.map((tag)=>(
              <p className={`text-[14px] ${tag.color}`} key={tag.name}>
                #{tag.name}

              </p>
            ))
          }
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div >
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}> Projects.</h2>
      </div>
      <p
        
        className="text-secondary mt-5 text-[17px] max-w-3xl leading-[30px]"
      >
        Following projects showcase my skills and experience through real-world
        example of my work. Each project is briefly described with links to code
        repositories and live demo in it. It reflects my ability to solve
        complex problems , work with different technologies, and manage project
        efficiently.
      </p>
      <div className="flex flex-wrap gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
