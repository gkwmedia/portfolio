import AnimatedDiv from "./animated_div";
import Tooltip from "./toolbar";

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
				<div className="icon-tooltip-container">
					<SiJavascript className="technology-icon relative" size={iconSize} />
					<Tooltip text="JavaScript" />
				</div>
				<div className="icon-tooltip-container">
					<SiNextdotjs className="technology-icon" size={iconSize} />
					<Tooltip text="NextJS" />
				</div>
				<div className="icon-tooltip-container">
					<SiReact className="technology-icon" size={iconSize} />
					<Tooltip text="ReactJS" />
				</div>
				<div className="icon-tooltip-container">
					<SiFlutter className="technology-icon" size={iconSize} />
					<Tooltip text="Flutter" />
				</div>
				<div className="icon-tooltip-container">
					<SiFramer className="technology-icon" size={iconSize} />
					<Tooltip text="Framer" />
				</div>
				<div className="icon-tooltip-container">
					<SiWebflow className="technology-icon" size={iconSize} />
					<Tooltip text="Webflow" />
				</div>
			</div>
		</AnimatedDiv>
	);
};

export default TechnologiesSlider;
