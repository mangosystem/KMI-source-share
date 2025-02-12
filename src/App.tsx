import { LegacyRef, useEffect, useRef } from 'react';
import './App.css';
import LeftNav from './components/LeftNav';
import { pages } from './components/data/data';
import {
	activeContents,
	navMenu,
	SCROLL_DELAY,
	ScrollState,
	useScrollDispatch,
	useScrollState,
} from './context/ScrollContext';
import ScrollPage from './components/ScrollPage';
import OceanStory from './components/OceanStory';
import OceanCoexistence from './components/OceanCoexistence';
import Index from './components/Index';

export interface ScrollPageRef {
	leftSidePanelRef: HTMLDivElement;
	mainContentPanelRef: HTMLDivElement;
}

export type multiRefObject = {
	leftSidePanelRef: LegacyRef<ScrollPageRef>;
	mainContentPanelRef: LegacyRef<ScrollPageRef>;
};

const SCROLL_CORRECTION_VALUE = 10;

const App = () => {
	const scrollState = useScrollState();
	const { currentNav, isScrolling, lastScrollTime, currentPage }: ScrollState =
		scrollState;
	const scrollDispatch = useScrollDispatch();
	const mainRef = useRef<HTMLElement | null>(null);
	const coexistenceRef = useRef<HTMLElement | null>(null);
	const scrollTimeoutRef = useRef<number | undefined>();

	const refs: multiRefObject = {
		leftSidePanelRef: useRef<ScrollPageRef>(null),
		mainContentPanelRef: useRef<ScrollPageRef>(null),
	};
	const handlePageChange = (newPage: number, flag: boolean) => {
		let pageId;
		if (flag) {
			scrollDispatch({
				type: 'SET_NAV',
				currentNav: 'ocean-sustain-current',
			});
		} else {
			pageId = pages[newPage] as navMenu;
			scrollDispatch({
				type: 'SET_NAV',
				currentNav: pageId,
			});
		}

		scrollDispatch({
			type: 'SET_SCROLLING',
			isScrolling: true,
		});

		scrollDispatch({
			type: 'SET_SCROLLTIME',
			lastScrollTime: Date.now(),
		});

		scrollDispatch({
			type: 'SET_PAGE',
			currentPage: newPage,
		});

		if (scrollTimeoutRef.current) {
			clearTimeout(scrollTimeoutRef.current);
		}

		scrollTimeoutRef.current = setTimeout(() => {
			scrollDispatch({
				type: 'SET_SCROLLING',
				isScrolling: false,
			});
		}, SCROLL_DELAY);

		let target;
		if (flag) {
			target = document.getElementById('ocean-sustain-current-ldgs-map');
			target?.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			});
		} else if (pageId) {
			target = document.getElementById(pageId);
			target?.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	};

	const handleNormalScroll = (deltaY: number) => {
		//@ts-ignore
		if (!refs.leftSidePanelRef?.current) return;

		const { scrollTop, scrollHeight, clientHeight } =
			//@ts-ignore
			refs.leftSidePanelRef.current;

		const triggerLocate = window.innerHeight / 2;

		// 우리의 보물창고, 해양자원
		const resourcesSpaceMapLocate = document
			.getElementById('ocean-resources-space')
			?.getBoundingClientRect().top;
		const resourcesEconomyMapLocate = document
			.getElementById('ocean-resources-economy')
			?.getBoundingClientRect().top;
		const resourcesEconomyGraphLocate = document
			.getElementById('ocean-resources-economy-graph')
			?.getBoundingClientRect().top;

		// 위기의 바다, 현주소
		const envRealityLocate = document
			.getElementById('ocean-env-reality')
			?.getBoundingClientRect().top;
		const envRealityMarinedebrisGraphLocate = document
			.getElementById('ocean-env-reality-marinedebris-graph')
			?.getBoundingClientRect().top;
		const envRealityFinedustMapLocate = document
			.getElementById('ocean-env-reality-finedust')
			?.getBoundingClientRect().top;
		const envRealityFinedustGraphLocate = document
			.getElementById('ocean-env-reality-finedust-graph')
			?.getBoundingClientRect().top;
		const envRealityRevenuerecognitionMapLocate = document
			.getElementById('ocean-env-reality-revenuerecognition')
			?.getBoundingClientRect().top;
		const envRealityRevenuerecognitionGraphLocate = document
			.getElementById('ocean-env-reality-revenuerecognition-graph')
			?.getBoundingClientRect().top;

		// 푸른 미래를 위한 약속
		const sustainLocate = document
			.getElementById('ocean-sustain')
			?.getBoundingClientRect().top;
		const sustainSustainbilityLocate = document
			.getElementById('ocean-sustain-sustainability')
			?.getBoundingClientRect().top;
		const sustainCurrentMapLocate = document
			.getElementById('ocean-sustain-current')
			?.getBoundingClientRect().top;

		let id: navMenu = scrollState!.currentNav;
		let activeContent: string = '';

		if (sustainCurrentMapLocate && sustainCurrentMapLocate <= triggerLocate) {
			id = 'ocean-sustain-current';
			activeContent = 'ocean-sustain-current-ldgs-map';
		} else if (
			sustainSustainbilityLocate &&
			sustainSustainbilityLocate <= triggerLocate
		) {
			id = 'ocean-sustain-sustainability';
			activeContent = 'ocean-sustain-sustainability-venn';
		} else if (sustainLocate && sustainLocate <= triggerLocate) {
			id = 'ocean-sustain';
			activeContent = 'ocean-sustain-recognition-graph';
		} else if (
			envRealityRevenuerecognitionGraphLocate &&
			envRealityRevenuerecognitionGraphLocate <= triggerLocate
		) {
			id = 'ocean-env-reality-revenuerecognition';
			activeContent = 'ocean-env-reality-revenuerecognition-graph';
		} else if (
			envRealityRevenuerecognitionMapLocate &&
			envRealityRevenuerecognitionMapLocate <= triggerLocate
		) {
			id = 'ocean-env-reality-revenuerecognition';
			activeContent = 'ocean-env-reality-revenuerecognition-map';
		} else if (
			envRealityFinedustGraphLocate &&
			envRealityFinedustGraphLocate <= triggerLocate
		) {
			id = 'ocean-env-reality-finedust';
			activeContent = 'ocean-env-reality-finedust-graph';
		} else if (
			envRealityFinedustMapLocate &&
			envRealityFinedustMapLocate <= triggerLocate
		) {
			id = 'ocean-env-reality-finedust';
			activeContent = 'ocean-env-reality-finedust-map';
		} else if (
			envRealityMarinedebrisGraphLocate &&
			envRealityMarinedebrisGraphLocate <= triggerLocate
		) {
			id = 'ocean-env-reality';
			activeContent = 'ocean-env-reality-marinedebris-graph';
		} else if (envRealityLocate && envRealityLocate <= triggerLocate) {
			id = 'ocean-env-reality';
			activeContent = 'ocean-env-reality-marinedebris-map';
		} else if (
			resourcesEconomyGraphLocate &&
			resourcesEconomyGraphLocate <= triggerLocate
		) {
			id = 'ocean-resources-economy';
			activeContent = 'ocean-resources-economy-graph';
		} else if (
			resourcesEconomyMapLocate &&
			resourcesEconomyMapLocate <= triggerLocate
		) {
			id = 'ocean-resources-economy';
			activeContent = 'ocean-resources-economy-map';
		} else if (
			resourcesSpaceMapLocate &&
			resourcesSpaceMapLocate > triggerLocate
		) {
			id = 'ocean-resources';
			activeContent = 'ocean-resources-nature-map';
		} else if (
			resourcesSpaceMapLocate &&
			resourcesSpaceMapLocate <= triggerLocate
		) {
			id = 'ocean-resources-space';
			activeContent = 'ocean-resources-space-map';
		}

		scrollDispatch({
			type: 'SET_NAV',
			currentNav: id,
		});

		scrollDispatch({
			type: 'SET_ACTIVECONTENT',
			activeContent: activeContent as activeContents,
		});

		if (deltaY < 0 && scrollTop === 0) {
			handlePageChange(2, false);
			return;
		}

		if (
			deltaY > 0 &&
			scrollTop + clientHeight + SCROLL_CORRECTION_VALUE >= scrollHeight
		) {
			handlePageChange(4, false);
		}
	};

	const handleWheel = (event: WheelEvent) => {
		const now = Date.now();

		if (isScrolling || now - lastScrollTime < SCROLL_DELAY) {
			event.preventDefault();
			return;
		}

		const deltaY = event.deltaY;

		if (currentPage === 3) {
			handleNormalScroll(deltaY);
			return;
		}

		if (deltaY < 0 && currentPage === 4) {
			handlePageChange(3, true);
			return;
		}

		if (deltaY > 0 && currentPage < 6) {
			handlePageChange(currentPage + 1, false);
		} else if (deltaY < 0 && currentPage > 1) {
			handlePageChange(currentPage - 1, false);
		}
	};

	useEffect(() => {
		window.addEventListener('wheel', handleWheel, { passive: false });
		//@ts-ignore
		refs.mainContentPanelRef.current?.addEventListener('wheel', function (e) {
			e.preventDefault();
			e.stopPropagation();
		});

		return () => {
			window.removeEventListener('wheel', handleWheel);
		};
	}, [currentNav, currentPage, isScrolling, lastScrollTime]);

	return (
		<div className="App">
			<LeftNav />
			<main className="AppMain" ref={mainRef}>
				<section id="ocean-index" className="section ocean-index">
					<Index />
				</section>
				<section
					id="ocean-story"
					className="section ocean-story"
					style={
						scrollState!.currentNav === 'ocean-story'
							? {
									backgroundColor: '#4C84FF',
									transition: 'background-color 0.5s ease-in-out',
							  }
							: {
									backgroundColor: '#F6FAFF',
									transition: 'background-color 0.5s ease-in-out',
							  }
					}
				>
					<OceanStory />
				</section>
				{/* @ts-ignore */}
				<ScrollPage ref={refs} />
				<section
					id="ocean-coexistence"
					ref={coexistenceRef}
					className="section ocean-coexistence"
					style={
						scrollState!.currentNav === 'ocean-story'
							? {
									backgroundColor: '#4C84FF',
									transition: 'background-color 0.5s ease-in-out',
							  }
							: {
									backgroundColor: '#F6FAFF',
									transition: 'background-color 0.5s ease-in-out',
							  }
					}
				>
					<OceanCoexistence />
				</section>
			</main>
		</div>
	);
};

export default App;
