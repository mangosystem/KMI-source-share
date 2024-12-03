// Photos from https://citizenofnowhe.re/lines-of-the-city
import './App.css';
import './styles.css';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, MotionValue, useMotionValueEvent } from 'framer-motion';
import Epilogue from './components/Epilogue';
import Values from './components/Values';
import SeaEnvReality from './components/SeaEnvReality';
import MarineSustain from './components/MarineSustain';
import CoexistenceWithOcean from './components/CoexistenceWithOcean';
import StoryOfOcean from './components/StoryOfOcean';

// function useParallax(value: MotionValue<number>, distance: number) {
// 	return useTransform(value, [0, 1], [-distance, distance]);
// }

// function Image({ id }: { id: number }) {
// 	const ref = useRef(null);
// 	const { scrollYProgress } = useScroll({ target: ref });
// 	const y = useParallax(scrollYProgress, 600);

// 	return (
// 		<section>
// 			<div ref={ref}>
// 				<img src={`/${id}.jpg`} alt="A London skyscraper" />
// 			</div>
// 			<motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
// 		</section>
// 	);
// }

export default function App() {
	// const epilogueRef = useRef(null);
	// const valuesRef = useRef(null);

	// const { scrollYProgress } = useScroll({
	// 	target: epilogueRef,
	// 	offset: ['start end', 'end end'],
	// });

	// useMotionValueEvent(scrollYProgress, 'change', (latest) => {
	// 	console.log('scrollYProgress: ', latest);
	// });
	const [fixed, setFixed] = useState(false);

	return (
		<>
			{[
				<CoexistenceWithOcean />,
				<StoryOfOcean />,
				<Values fixed={fixed} setFixed={setFixed} />,
				<SeaEnvReality />,
				<MarineSustain />,
				<Epilogue />,
			].map((component) => component)}
		</>
	);
}
