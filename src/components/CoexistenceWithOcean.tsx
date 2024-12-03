import { motion } from 'framer-motion';
import { useRef } from 'react';

const CoexistenceWithOcean = () => {
	const scrollRef = useRef();
	return <motion.div className="coexistence-with-ocean">해양과의 공존</motion.div>;
};

export default CoexistenceWithOcean;
