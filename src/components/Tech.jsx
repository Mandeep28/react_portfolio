import { technologies } from "../constants"
import { SectionWrapper } from "../hoc"
import { BallCanvas } from "./canvas"



const Tech = () => {
  return (
    <div className="flex flex-wrap flex-row gap-10 justify-center">
      {
        technologies.map((technology)=>(
            <div key={technology.name} className="w-28 h-28">
              <BallCanvas icon={technology.icon}/>
              </div>
        ))
      }

    </div>
  )
}

export default SectionWrapper(Tech, "")