import { AnimatePresence, motion } from 'framer-motion';
import List from './story/List';
import Item from './story/Item';
import { useState } from 'react';
import { getContentData } from '../common';
import YoutubeEmbed from './youtube/YoutubeEmbed';

const StoryOfOcean = (props) => {
	const [id, setId] = useState(null);

	const contentData = getContentData('ocean_story');

	const [env, industry] = contentData.items;

	return (
		<div className="story-of-ocean">
			<div className="title-box">
				<p className="title">{contentData.title}</p>
			</div>
			<section className="story-of-ocean-section">
				<div className="story-of-ocean-contents-grid-wrapper">
					<div className="story-of-ocean-card-list-wrapper">
						<div className="story-of-ocean-card">
							<YoutubeEmbed title={env.title} embedId={env.youtube_code} />
							<div className="story-of-ocean-card-footer">
								<p className="story-of-ocean-card-title">{env.title}</p>
								<p className="story-of-ocean-card-text">{env.content.join(' ')}</p>
								<p className="story-of-ocean-content-source">{`(자료출처: ${env.source})`}</p>
							</div>
						</div>
						<div className="story-of-ocean-card">
							<YoutubeEmbed title={industry.title} embedId={industry.youtube_code} />
							<div className="story-of-ocean-card-footer">
								<p className="story-of-ocean-card-title">{industry.title}</p>
								<p className="story-of-ocean-card-text">{industry.content.join(' ')}</p>
								<p className="story-of-ocean-content-source">{`(자료출처: ${industry.source})`}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<AnimatePresence>{id && <Item />}</AnimatePresence>
		</div>
	);
};

export default StoryOfOcean;
