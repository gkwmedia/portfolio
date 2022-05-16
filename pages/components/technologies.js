import AnimatedDiv from "./animated_div";

import {
  SiJavascript,
  SiReact,
  SiFlutter,
  SiFramer,
  SiWebflow,
  SiNextdotjs,
} from "react-icons/si";

const TechnologiesSlider = () => {
  const iconSize = 50;

  return (
    <AnimatedDiv classname="section accent-bg-2" id={"technologies-section"}>
      <h3 className="section-header">Technologies I&apos;ve Used</h3>
      <div className="technologies-container">
        <SiJavascript className="technology-icon" size={iconSize} />
        <SiNextdotjs className="technology-icon" size={iconSize} />
        <SiReact className="technology-icon" size={iconSize} />
        <SiFlutter className="technology-icon" size={iconSize} />
        <SiFramer className="technology-icon" size={iconSize} />
        <SiWebflow className="technology-icon" size={iconSize} />
      </div>
    </AnimatedDiv>
  );
};

export default TechnologiesSlider;
