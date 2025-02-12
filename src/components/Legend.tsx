import { getLegendGraphic } from '../common/common';

const Legend = (props: {
	title: string;
	layerName: string;
	unit?: string | undefined;
	styleName?: string | undefined;
	imageWidth?: number | undefined;
}) => {
	return (
		<div className="Legend">
			<p className="LegendTitle">{props.title}</p>
			{props.unit ? (
				<p className="LegendUnit">{`(단위: ${props.unit})`}</p>
			) : null}

			<hr className="LegendHeaderDivider" />
			<img
				src={getLegendGraphic(props.layerName, props.styleName)}
				alt="legend"
				width={props.imageWidth ?? 'auto'}
			/>
		</div>
	);
};

export default Legend;
