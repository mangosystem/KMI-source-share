import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';

const Epilogue = (props) => {
	const scrollRef = useRef(null);

	const { scrollY, scrollYProgress } = useScroll({
		target: scrollRef,
		offset: ['start end', 'end end'],
	});

	const [headerFixed, setHeaderFixed] = useState(false);

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		console.log('latest: ', latest);

		if (latest === 1) {
			setHeaderFixed(true);
		} else if (latest < 1) {
			setHeaderFixed(false);
		}
	});

	const removeLink = (e) => {
		e.preventDefault();
	};

	return (
		<motion.div className="epilogue" ref={scrollRef}>
			<div className={!headerFixed ? 'epilogue-title-box' : 'epilogue-title-box-sticky'}>
				<div>
					<p className="title">에필로그</p>
					<p className="subtitle">바다와 함께 성장하는 부산</p>
				</div>
			</div>
			<div className="epilogue-contents-grid-wrapper">
				<div className="epilogue-card-list-wrapper">
					<a className="epilogue-card-link" href="#" onClick={removeLink}>
						<div className="epilogue-card">
							<div className="epilogue-card-image-wrapper">
								<img src="/images/env.jpg" className="epilogue-card-image" />
							</div>
							<div className="epilogue-card-footer">
								<p className="epilogue-card-title">부산 해양환경</p>
								<p className="epilogue-card-text">주요 추진사업, 성과 및 향후계획, 인포그래픽</p>
							</div>
						</div>
					</a>
					<a className="epilogue-card-link" href="#" onClick={removeLink}>
						<div className="epilogue-card">
							<div className="epilogue-card-image-wrapper">
								<img src="/images/industry.jpg" className="epilogue-card-image" />
							</div>
							<div className="epilogue-card-footer">
								<p className="epilogue-card-title">부산 해양산업</p>
								<p className="epilogue-card-text">주요 산업육성 방안, 추진 현황 및 목표, 인포그래픽</p>
							</div>
						</div>
					</a>
					<a className="epilogue-card-link" href="#" onClick={removeLink}>
						<div className="epilogue-card">
							<div className="epilogue-card-image-wrapper">
								<img src="/images/future.jpg" className="epilogue-card-image" />
							</div>
							<div className="epilogue-card-footer">
								<p className="epilogue-card-title">통합적 발전방향</p>
								<p className="epilogue-card-text">지속 가능한 성장전략, 시민 참여 프로그램 등 인포그래픽</p>
							</div>
						</div>
					</a>
					<a className="epilogue-card-link" href="#" onClick={removeLink}>
						<div className="epilogue-card">
							<div className="epilogue-card-image-wrapper">
								<img src="/images/organization.jpg" className="epilogue-card-image" />
							</div>
							<div className="epilogue-card-footer">
								<p className="epilogue-card-title">환경관리 플랫폼의 역할과 기능</p>
								<p className="epilogue-card-text">
									해양환경 자원 모니터링, 정책지원기능, 시민참여 지원, 지속가능성 평가 및 관리
								</p>
							</div>
						</div>
					</a>
					<a className="epilogue-card-link" href="https://www.youtube.com/watch?v=dFO2A29Zf8Q&t=22s" target="_blank">
						<div className="epilogue-card">
							<div className="epilogue-card-image-wrapper video">
								<img src="/images/kmi1.jpg" className="epilogue-card-image kmi1" />
							</div>
							<div className="epilogue-card-footer">
								<p className="epilogue-card-title">한국해양수산원 STORY</p>
								<p className="epilogue-card-text">해양수산 정책수립 정부출연 연구기관</p>
							</div>
						</div>
					</a>
					<a className="epilogue-card-link" href="https://www.youtube.com/watch?v=sPalITfaYYg" target="_blank">
						<div className="epilogue-card">
							<div className="epilogue-card-image-wrapper video">
								<img src="/images/kmi2.jpg" className="epilogue-card-image kmi2" />
							</div>
							<div className="epilogue-card-footer">
								<p className="epilogue-card-title">정책연구 성과보고</p>
								<p className="epilogue-card-text">부산 해양수산의 현재와 미래</p>
							</div>
						</div>
					</a>
				</div>
			</div>
		</motion.div>
	);
};

export default Epilogue;
