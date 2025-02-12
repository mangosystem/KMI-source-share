import { Fragment } from "react/jsx-runtime";
import { activeContents, navMenu, useScrollDispatch, useScrollState } from "../context/ScrollContext";
import { isBlockStart, isNavList, sections } from "./data/data";

const LeftNav = () => {

	const scrollState = useScrollState();
	const scrollDispatch = useScrollDispatch();

	const onClickNav = (section: { id: 'string', block: 'string' }, item: { id: string, block: 'string'} | null, page: number, activeContent: activeContents | undefined) => {
		let targetId;
		if(item) {
			targetId = `${section.id}-${item.id}`;
		} else {
			targetId = section.id;
		}

		scrollDispatch({
			type: 'SET_NAV',
			currentNav: targetId as navMenu
		})

		scrollDispatch({
			type: 'SET_PAGE',
			currentPage: page
		})

		console.log('activeContent: ', activeContent);

		if(activeContent) {
			scrollDispatch({
				type: 'SET_ACTIVECONTENT',
				activeContent: activeContent
			})
		}

		const isStart= isBlockStart(targetId);
		
		document.getElementById(targetId)?.scrollIntoView({
			behavior: 'smooth',
			block: isStart ? 'start' : 'center'
		});
	}

	return (
		<nav className="LeftNav" style={ scrollState!.currentNav === 'ocean-story' ? { backgroundColor : '#4C84FF', transition: 'background-color 0.5s ease-in-out' } : { backgroundColor : '#F6FAFF', transition: 'background-color 0.5s ease-in-out' }}>
			<ol>
        {sections.map((section: any) => {
					return (
						<Fragment key={section.id}>
							<li className="LeftNavItem"  title={section.title}
								onClick={() => onClickNav(section, null, section.page, section.activeContentName)}>
								<img src={section.id === 'ocean-index' && scrollState!.currentNav === section.id ? 'images/home_fill.svg': section.id === 'ocean-index' && scrollState!.currentNav !== section.id ? 'images/home_outline.svg' : scrollState!.currentNav === section.id ? 'images/ellipse-fill.svg' : 'images/ellipse-outline.svg'} alt={section.title} />
							</li>
							{
								section.items && section.items.map((item: any) => {
									const isNav = isNavList(item.id);
									if(isNav) {
										return (
											<li key={item.id} className="LeftNavItem"  title={item.title}
												onClick={() => onClickNav(section, item, item.page, item.activeContentName)}>
												<img src={scrollState!.currentNav === `${section.id}-${item.id}` ? 'images/ellipse-fill.svg' : 'images/ellipse-outline.svg'} alt={section.title} />
											</li>
										)
									}
								})
							}
						</Fragment>
					)
				}
        )}
			</ol>
		</nav>
	);
};

export default LeftNav;