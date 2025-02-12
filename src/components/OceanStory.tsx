import YoutubeEmbed from './youtube/YoutubeEmbed';
import { getSection } from './data/data';

const OceanStory = () => {

	const oceanStoryContentData = getSection('ocean-story');
	const [env, industry] = oceanStoryContentData.items;

	return (
		<>
			<header className="OceanStoryHeader">
				<div className="OceanStoryHeaderContentWrapper">
					<div className='OceanStoryHeaderNumberWrapper'>
						<p className="HeaderNumber">1</p>
						<hr className="OceanStoryHeaderLine" />
					</div>
					<h1 className="OceanStoryHeaderTitle">{oceanStoryContentData.title}</h1>
				</div>
			</header>
			<div className="OceanStoryContentWrapper">
				<div className="OceanStoryContent">
					<div className="OceanStoryContentCardWrapper">
						<div className="OceanStoryContentCardArea">
							<div className="OceanStoryContentCardHeader">
								<div className="OceanStoryContentCardHeaderNumber">
									<p>1</p>
								</div>
								<div className="OceanStoryContentCardHeaderTitle">
									<h3>{env.title}</h3>
								</div>
							</div>
							<div className="OceanStoryContentCard">
								<div className="OceanStoryContentCardBody">
									<div className="OceanStoryContentCardVideoWrapper">
										<YoutubeEmbed title={env.title} embedId={env.youtube_code} />
									</div>
									<div className="OceanStoryContentCardTextWrapper">
										<div className="OceanStoryContentCardText">
											<p className="OceanStoryContentCardTextTitle">{env.category}</p>
											<p className="OceanStoryContentCardTextContent">{env.description.join(' ')}</p>
										</div>
										<div className="OceanStoryContentCardFooter">
											<p className="OceanStoryContentCardTextSource">{`자료출처: ${env.source}`}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="OceanStoryContentCardWrapper">
						<div className="OceanStoryContentCardArea">
							<div className="OceanStoryContentCardHeader">
								<div className="OceanStoryContentCardHeaderNumber">
									<p>2</p>
								</div>
								<div className="OceanStoryContentCardHeaderTitle">
									<h3>{industry.title}</h3>
								</div>
							</div>
							<div className="OceanStoryContentCard">
								<div className="OceanStoryContentCardBody">
									<div className="OceanStoryContentCardVideoWrapper">
										<YoutubeEmbed title={industry.title} embedId={industry.youtube_code} />
									</div>
									<div className="OceanStoryContentCardText" style={{ padding: '16px 12px 40px 12px'}}>
										<p className="OceanStoryContentCardTextTitle">{industry.category}</p>
										<p className="OceanStoryContentCardTextContent">{industry.description.join(' ')}</p>
									</div>
									<div className="OceanStoryContentCardFooter">
										<p className="OceanStoryContentCardTextSource">{`자료출처: ${industry.source}`}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OceanStory;
