import AnimatedDiv from "./animated_div";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiFlutter,
  SiFramer,
  SiWebflow,
  SiNextdotjs,
} from "react-icons/si";

const TechnologiesSlider = () => {
  const iconSize = 50;

  return (
    <AnimatedDiv classname='section accent-bg-2' id={"technologies-section"}>
      <h3 className='section-header'>Technologies I&apos;ve Used</h3>
      <div className='technologies-container'>
        <div className='icon-holder'>
          <SiTypescript className='technology-icon' size={iconSize} />
          <div className='tech-icon-hint'>Typescript</div>
        </div>
        <div className='icon-holder'>
          <SiNextdotjs className='technology-icon' size={iconSize} />
          <div className='tech-icon-hint'>NextJS</div>
        </div>
        <div className='icon-holder'>
          <SiReact className='technology-icon' size={iconSize} />
          <div className='tech-icon-hint'>ReactJS</div>
        </div>
        <div className='icon-holder'>
          <SiFlutter className='technology-icon' size={iconSize} />
          <div className='tech-icon-hint'>Flutter</div>
        </div>
        <div className='icon-holder'>
          <SiFramer className='technology-icon' size={iconSize} />
          <div className='tech-icon-hint'>Framer Motion</div>
        </div>
        <div className='icon-holder'>
          <SiWebflow className='technology-icon' size={iconSize} />
          <div className='tech-icon-hint'>Webflow</div>
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default TechnologiesSlider;
