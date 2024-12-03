import { motion } from 'framer-motion';
import { items } from './data';

function Card({ id, title, category, theme, setId }) {
	return (
		<li className="card" onClick={() => setId(id)}>
			<motion.div className="card-content" layoutId={`card-container-${id}`}>
				<motion.div className="card-image-container" layoutId={`card-image-container-${id}`}>
					<motion.img
						className="card-image"
						src={`/images/${id}.png`}
						// style={{ backgroundImage: `url(/images/${id}.png)`, backgroundSize: 'cover' }}
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.3 }}
						whileHover={{ scale: 1.2 }}
					/>
				</motion.div>
				<motion.div className="title-container" layoutId={`title-container-${id}`}>
					<span className="category">{category}</span>
					<h2>{title}</h2>
				</motion.div>
			</motion.div>
		</li>
	);
}

const List = ({ selectedId, setId }) => {
	return (
		<ul className="card-list">
			{items.map((card) => (
				<Card key={card.id} {...card} isSelected={card.id === selectedId} setId={setId} />
			))}
		</ul>
	);
};

export default List;
