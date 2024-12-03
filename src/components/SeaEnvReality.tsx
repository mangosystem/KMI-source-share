import { motion } from 'framer-motion';
import { useRef } from 'react';

const SeaEnvReality = () => {
	const scrollRef = useRef();
	return <motion.div className="sea-env">해양환경 실태</motion.div>;
};

export default SeaEnvReality;
