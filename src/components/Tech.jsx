import { technologies } from "../constants"
import { SectionWrapper } from "../hoc"
import { BallCanvas } from "./canvas"



const Tech = () => {
  return (
    <div className="flex flex-wrap flex-row gap-8 justify-center">
      {
        technologies.map((technology)=>(
            <div key={technology.name} className="w-[150px]">
              {/* <BallCanvas icon={technology.icon}/> */}
              <img src={technology.icon} alt={technology.name} className="w-full"/>
              <p className="text-center">
                {technology.name}
              </p>
              </div>
        ))
      }

    </div>
  )
}

export default SectionWrapper(Tech, "")