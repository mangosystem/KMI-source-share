import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM, XYZ } from 'ol/source';
import { useEffect, useRef, useState } from 'react';
import { data } from './values/data';

const Values = (props) => {
	const scrollRef = useRef(null);
	const { scrollY, scrollYProgress } = useScroll({
		target: scrollRef,
		offset: ['start end', 'end end'],
	});
	const [listWidth, setListWidth] = useState(1000);
	const [listHeight, setListHeight] = useState(1000);
	const [translateY, setTranslateY] = useState(0);
	const [map, setMap] = useState(null);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		// console.log('scrollY: ', latest);

		if (latest < window.innerHeight * 2) {
			props.setFixed(false);
		} else if (latest >= window.innerHeight * 2 + listHeight) {
			props.setFixed(false);
			setTranslateY(listHeight + 20);
		} else {
			props.setFixed(true);
			setTranslateY(0);
		}
	});

	useEffect(() => {
		const scrollElement = document.querySelector('.swiper-wrapper');
		setListWidth(scrollElement.offsetWidth);
		setListHeight(scrollElement.offsetHeight - window.innerHeight);

		if (!map) {
			const _map = new Map({
				layers: [
					new TileLayer({
						source: new XYZ({
							url: 'https://xdworld.vworld.kr/2d/Satellite/service/{z}/{x}/{y}.jpeg',
							attributions: '공간정보오픈플랫폼',
						}),
					}),
				],
				target: 'map',
				view: new View({
					center: [14368931.525201745, 4174723.3074785667],
					zoom: 14,
				}),
			});

			setMap(_map);
		}
	}, []);

	useEffect(() => {
		console.log('listHeight: ', listHeight);
	}, [listHeight]);

	return (
		<div className="values" ref={scrollRef}>
			<section className="section-slide-wrap">
				<div className="values-content-wrapper">
					<div className="swiper-wrapper">
						<div
							className={props.fixed ? 'values-title-box fixed' : 'values-title-box sticky'}
							style={translateY ? { top: translateY } : null}
						>
							<p className="title">우리의 보물창고, 해양자원</p>
						</div>
					</div>
					<div
						className={props.fixed ? 'static-area fixed-area' : 'static-area sticky-area'}
						style={{ height: window.innerHeight }}
					>
						<img src="images/organization.jpg" />
						{/* <div id="map"></div> */}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Values;
