import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AnimatedDiv = ({ classname, id, children }) => {
	const sectionVariants = {
		visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
		hidden: { opacity: 0, y: 100 },
	};
	const controls = useAnimation();
	const [ref, inView] = useInView();
	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<motion.div
			className={classname}
			id={id}
			ref={ref}
			animate={controls}
			initial={"hidden"}
			variants={sectionVariants}>
			{children}
		</motion.div>
	);
};

export default AnimatedDiv;
