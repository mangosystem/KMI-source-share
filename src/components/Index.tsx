import { isBlockStart, isNavList, sections } from "./data/data";
import { activeContents, navMenu, useScrollDispatch } from "../context/ScrollContext";

const Index = () => {
	const scrollDispatch = useScrollDispatch();

	const indexList = sections.slice(1);

	const onClickMenu = (id: string, page: number, activeContent: activeContents | undefined) => {
		scrollDispatch({
			type: 'SET_NAV',
			currentNav: id as navMenu
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

		const isStart= isBlockStart(id);
		
		document.getElementById(id)?.scrollIntoView({
			behavior: 'smooth',
			block: isStart ? 'start' : 'center'
		});
	}

	return (
		<>
			<header className="IndexHeader">
				<h1>해양과의 공존</h1>
			</header>
			<div className="IndexContent">
				<div className="IndexContentWrapper">
					{
						indexList.map((row: any) => (
							<div className="IndexContentItem" key={`${row.id}-index-list-row`}>
								<div className={`icon-box ${row.id}`}>
									<img src={`images/${row.icon}`} className={`${row.id}-icon`} alt={row.title} />
								</div>
								<h2 onClick={() => onClickMenu(row.id, row.page, row.activeContentName)}>{row.title}</h2>
								{
									row.items.map((item: any, i:number) => (
										<h3 key={item.id} onClick={() => onClickMenu(isNavList(item.id) ? `${row.id}-${item.id}`: row.id, item.page, item.activeContentName)}>{`${i + 1}) ${item.title}`}</h3>
									))
								}
							</div>
						))
					}
				</div>
				<img src="images/index-bg.svg" className="IndexBg" alt="목차 배경 이미지" />
			</div>
		</>
	);
};

export default Index;