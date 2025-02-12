import { getSection } from './data/data';

const OceanCoexistence = () => {
	const coexistenceContentData = getSection('ocean-coexistence');

	return (
		<>
			<div className="CoexistenceContent">
				{coexistenceContentData?.items?.map((item: any, index: number) => {
					return (
						<div className="CoexistenceContentWrapper" key={item.id}>
							{!index && (
								<header className="IndexHeader">
									<h1>{coexistenceContentData?.title}</h1>
								</header>
							)}
							<div
								key={`${item.id}-image`}
								id={`${coexistenceContentData.id}-${item.id}`}
							>
								<h3 className="CoexistenceImageTitle">{item.title}</h3>
								<img src={`images/${item.image}`} />
							</div>
							{item.sources && (
								<u className="Sources" style={{ margin: '0 10px 5px auto' }}>
									{item.sources}
								</u>
							)}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default OceanCoexistence;
