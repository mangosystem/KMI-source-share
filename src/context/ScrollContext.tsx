import { createContext, Dispatch, useContext, useReducer } from 'react';

export type navMenu =
	| 'ocean-index'
	| 'ocean-story'
	| 'ocean-resources'
	| 'ocean-resources-space'
	| 'ocean-resources-economy'
	| 'ocean-env-reality'
	| 'ocean-env-reality-finedust'
	| 'ocean-env-reality-revenuerecognition'
	| 'ocean-sustain'
	| 'ocean-sustain-sustainability'
	| 'ocean-sustain-current'
	| 'ocean-coexistence'
	| 'ocean-coexistence-vision'
	| 'ocean-coexistence-platform';

export type activeContents =
	| 'ocean-resources-space-map'
	| 'ocean-resources-nature-map'
	| 'ocean-resources-economy-map'
	| 'ocean-resources-economy-graph'
	| 'ocean-env-reality-marinedebris-map'
	| 'ocean-env-reality-marinedebris-graph'
	| 'ocean-env-reality-finedust-map'
	| 'ocean-env-reality-finedust-graph'
	| 'ocean-env-reality-revenuerecognition-map'
	| 'ocean-env-reality-revenuerecognition-graph'
	| 'ocean-sustain-recognition-graph'
	| 'ocean-sustain-sustainability-venn'
	| 'ocean-sustain-current-ldgs-map';

export interface ScrollState {
	isScrolling: boolean;
	lastScrollTime: number;
	currentPage: number;
	currentNav: navMenu;
	activeContent: activeContents;
}

type ScrollAction =
	| { type: 'SET_NAV'; currentNav: navMenu }
	| { type: 'SET_PAGE'; currentPage: number }
	| { type: 'SET_SCROLLING'; isScrolling: boolean }
	| { type: 'SET_SCROLLTIME'; lastScrollTime: number }
	| { type: 'SET_ACTIVECONTENT'; activeContent: activeContents };

type ScrollDispatch = Dispatch<ScrollAction>;

export const SCROLL_DELAY = 1000;
export const SCROLL_THRESHOLD = 20;

const ScrollStateContext = createContext({} as ScrollState);
const ScrollDispatchContext = createContext({} as ScrollDispatch);

function scrollReducer(state: ScrollState, action: ScrollAction): ScrollState {
	switch (action.type) {
		case 'SET_NAV':
			return {
				...state,
				currentNav: action.currentNav,
			};
		case 'SET_PAGE':
			return {
				...state,
				currentPage: action.currentPage,
			};
		case 'SET_SCROLLING':
			return {
				...state,
				isScrolling: action.isScrolling,
			};
		case 'SET_SCROLLTIME':
			return {
				...state,
				lastScrollTime: action.lastScrollTime,
			};
		case 'SET_ACTIVECONTENT':
			return {
				...state,
				activeContent: action.activeContent,
			};
		default:
			return state;
	}
}

const ScrollContext = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(scrollReducer, {
		currentNav: 'ocean-index',
		currentPage: 1,
		isScrolling: false,
		lastScrollTime: Date.now(),
		activeContent: 'ocean-resources-nature-map',
	});

	return (
		<ScrollStateContext.Provider value={state}>
			<ScrollDispatchContext.Provider value={dispatch}>
				{children}
			</ScrollDispatchContext.Provider>
		</ScrollStateContext.Provider>
	);
};

export default ScrollContext;

export function useScrollState() {
	const state = useContext(ScrollStateContext);
	return state;
}

export function useScrollDispatch() {
	const dispatch = useContext(ScrollDispatchContext);
	if (!dispatch) throw new Error('dispatch error');
	return dispatch;
}
