import { forwardRef, useEffect, useRef, useState } from 'react';
import { useScrollState } from '../context/ScrollContext';
import { getSection } from './data/data';
import { Map, View } from 'ol';
// @ts-ignore
import Swipe from 'ol-ext/control/Swipe.js';
import TileLayer from 'ol/layer/Tile';
import ImageLayer from 'ol/layer/Image';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import { Vector as VectorSource } from 'ol/source.js';
import { Vector as VectorLayer } from 'ol/layer.js';
import { Icon, Style } from 'ol/style.js';
import { ImageWMS, TileWMS, XYZ } from 'ol/source';
import * as olProj from 'ol/proj';
import LayerGroup from 'ol/layer/Group';
import { getChartOptions } from '../common/chartOptions';
import Chart from 'react-apexcharts';
import { ScrollPageRef } from '../App';
import Legend from './Legend';

const GISSERVER_URL = import.meta.env.VITE_GISSERVER_URL;

// @ts-ignore
const ScrollPage = forwardRef<ScrollPageRef>((props, ref) => {
	const { leftSidePanelRef, mainContentPanelRef }: any = ref;

	const scrollState = useScrollState();

	const oceanResourcesContentData = getSection('ocean-resources');
	const oceanEnvContentData = getSection('ocean-env-reality');
	const oceanSustainContentData = getSection('ocean-sustain');

	const [natureMap, setNatureMap] = useState<Map | null>(null);
	const [spaceMap, setSpaceMap] = useState<Map | null>(null);
	const [economyMap, setEconomyMap] = useState<Map | null>(null);

	const [koreaMap, setKoreaMap] = useState<Map | null>(null);
	const [busanMap, setBusanMap] = useState<Map | null>(null);

	const [marinedebrisMap, setMarinedebrisMap] = useState<Map | null>(null);
	const [finedustMap, setFinedustMap] = useState<Map | null>(null);
	const [finedustStyle, setFinedustStyle] = useState<string>('normal');
	const [revenuerecognitionMap, setRevenuerecognitionMap] =
		useState<Map | null>(null);

	const [companyChartOptions] = useState<any>(getChartOptions('company'));
	const [employeeChartOptions] = useState<any>(getChartOptions('employee'));
	const [salesChartOptions] = useState<any>(getChartOptions('sales'));

	const [marinedebrisChartOptions] = useState<any>(
		getChartOptions('marinedebris')
	);
	const [finedustColumnChartOptions] = useState<any>(
		getChartOptions('finedust-column')
	);
	const [finedustLineChartOptions] = useState<any>(
		getChartOptions('finedust-line')
	);
	const [revenuerecognitionDonutChartOptions] = useState<any>(
		getChartOptions('revenuerecognition-donut')
	);
	const [revenuerecognitionTreemapChartOptions] = useState<any>(
		getChartOptions('revenuerecognition-treemap')
	);

	const [recognitionColumnChartOptions] = useState(
		getChartOptions('recognition-column')
	);
	const [recognitionPieChartOptions] = useState(
		getChartOptions('recognition-pie')
	);
	const [recognitionRadarChartOptions] = useState(
		getChartOptions('recognition-radar')
	);

	const oceanResourcesRef = useRef<HTMLDivElement | null>(null);
	const oceanEnvRef = useRef<HTMLDivElement | null>(null);
	const oceanSustainRef = useRef<HTMLDivElement | null>(null);

	const handleFinedustStyle = (type: string) => {
		const targetLayer = (
			(finedustMap?.getLayers().getArray()[1] as LayerGroup)
				.getLayers()
				.getArray() as ImageLayer<ImageWMS>[]
		)[0];
		if (targetLayer) {
			const styleName = type === 'normal' ? 'sm_finedust' : 'sm_finedust_udmp';
			targetLayer.getSource()?.updateParams({
				STYLES: styleName,
			});

			targetLayer.getSource()?.refresh();
			setFinedustStyle(type);
		}
	};

	useEffect(() => {
		if (!natureMap) {
			const natureMapView = new View({
				center: olProj.transform(
					[129.553215, 34.855507],
					'EPSG:4326',
					'EPSG:3857'
				),
				projection: 'EPSG:3857',
				zoom: 9.2,
				enableRotation: false,
			});

			const marineEcosystemLayer = new ImageLayer({
				source: new ImageWMS({
					url: GISSERVER_URL,
					params: {
						VERSION: '1.3.0',
						FORMAT: 'image/png',
						TRANSPARENT: 'true',
						tiled: 'true',
						STYLES: 'sm_marineecosystem',
						LAYERS: 'ocean:sm_marineecosystem',
					},
					serverType: 'geoserver',
					crossOrigin: 'anonymous',
				}),
			});

			const marineZoneLayer = new ImageLayer({
				source: new ImageWMS({
					url: GISSERVER_URL,
					params: {
						VERSION: '1.3.0',
						FORMAT: 'image/png',
						TRANSPARENT: 'true',
						tiled: 'true',
						STYLES: 'sm_marinezone',
						LAYERS: 'ocean:sm_marinezone',
					},
					serverType: 'geoserver',
					crossOrigin: 'anonymous',
				}),
				opacity: 0.6,
			});

			const _natureMap = new Map({
				target: 'nature-map',
				view: natureMapView,
				layers: [
					new LayerGroup({
						layers: [
							new TileLayer({
								source: new XYZ({
									url: 'https://xdworld.vworld.kr/2d/Base/service/{z}/{x}/{y}.png',
									attributions: '공간정보오픈플랫폼 VWORLD 2019 | 국토교통부',
								}),
							}),
						],
					}),
					new LayerGroup({
						layers: [marineEcosystemLayer, marineZoneLayer],
					}),
				],
			});

			const ctrl = new Swipe();
			_natureMap.addControl(ctrl);
			ctrl.addLayer(marineZoneLayer, true);

			setNatureMap(_natureMap);
		}

		if (!spaceMap) {
			const spaceMapView = new View({
				center: olProj.transform(
					[129.433215, 34.955507],
					'EPSG:4326',
					'EPSG:3857'
				),
				projection: 'EPSG:3857',
				zoom: 10,
				enableRotation: false,
			});

			const marineZoneLayer = new TileLayer({
				source: new TileWMS({
					url: GISSERVER_URL,
					params: {
						VERSION: '1.3.0',
						FORMAT: 'image/png',
						TRANSPARENT: 'true',
						tiled: 'true',
						STYLES: 'sm_marinezone',
						LAYERS: 'ocean:sm_marinezone',
					},
					serverType: 'geoserver',
					crossOrigin: 'anonymous',
				}),
			});

			const _spaceMap = new Map({
				target: 'space-map',
				view: spaceMapView,
				layers: [
					new LayerGroup({
						layers: [
							new TileLayer({
								source: new XYZ({
									url: 'https://xdworld.vworld.kr/2d/Base/service/{z}/{x}/{y}.png',
									attributions: '공간정보오픈플랫폼 VWORLD 2019 | 국토교통부',
								}),
							}),
						],
					}),
					new LayerGroup({
						layers: [marineZoneLayer],
					}),
				],
			});

			setSpaceMap(_spaceMap);
		}

		if (!economyMap) {
			const economyMapView = new View({
				center: olProj.transform(
					[129.033215, 35.175],
					'EPSG:4326',
					'EPSG:3857'
				),
				projection: 'EPSG:3857',
				zoom: 9.8,
				enableRotation: false,
			});

			const marineBusinessLayer = new ImageLayer({
				source: new ImageWMS({
					url: GISSERVER_URL,
					params: {
						VERSION: '1.3.0',
						FORMAT: 'image/png',
						TRANSPARENT: 'true',
						STYLES: 'sm_marinebusiness',
						LAYERS: 'ocean:sm_marinebusiness',
					},
					serverType: 'geoserver',
					crossOrigin: 'anonymous',
				}),
			});

			const _economyMap = new Map({
				target: 'economy-map',
				view: economyMapView,
				layers: [
					new LayerGroup({
						layers: [
							new TileLayer({
								source: new XYZ({
									url: 'https://xdworld.vworld.kr/2d/Base/service/{z}/{x}/{y}.png',
									attributions: '공간정보오픈플랫폼 VWORLD 2019 | 국토교통부',
								}),
							}),
						],
					}),
					new LayerGroup({
						layers: [marineBusinessLayer],
					}),
				],
			});

			setEconomyMap(_economyMap);
		}

		if (!marinedebrisMap) {
			const marinedebrisMapView = new View({
				center: olProj.transform([129.05, 35.2], 'EPSG:4326', 'EPSG:3857'),
				projection: 'EPSG:3857',
				zoom: 10.8,
				enableRotation: false,
			});

			const marinedebrisLayer = new ImageLayer({
				source: new ImageWMS({
					url: GISSERVER_URL,
					params: {
						VERSION: '1.3.0',
						FORMAT: 'image/png',
						TRANSPARENT: 'true',
						tiled: 'true',
						STYLES: 'sm_marinedebris',
						LAYERS: 'ocean:sm_marinedebris',
					},
					serverType: 'geoserver',
					crossOrigin: 'anonymous',
				}),
			});

			const _marinedebrisMap = new Map({
				target: 'marinedebris-map',
				view: marinedebrisMapView,
				layers: [
					new LayerGroup({
						layers: [
							new TileLayer({
								source: new XYZ({
									url: 'https://xdworld.vworld.kr/2d/Base/service/{z}/{x}/{y}.png',
									attributions: '공간정보오픈플랫폼 VWORLD 2019 | 국토교통부',
								}),
							}),
						],
					}),
					new LayerGroup({
						layers: [marinedebrisLayer],
					}),
				],
			});

			setMarinedebrisMap(_marinedebrisMap);
		}

		if (!finedustMap) {
			const finedustMapView = new View({
				center: olProj.transform([129.05, 35.2], 'EPSG:4326', 'EPSG:3857'),
				projection: 'EPSG:3857',
				zoom: 10.8,
				enableRotation: false,
			});

			const finedustLayer = new ImageLayer({
				source: new ImageWMS({
					url: GISSERVER_URL,
					params: {
						VERSION: '1.3.0',
						FORMAT: 'image/png',
						TRANSPARENT: 'true',
						tiled: 'true',
						STYLES: 'sm_finedust',
						LAYERS: 'ocean:sm_finedust',
					},
					serverType: 'geoserver',
					crossOrigin: 'anonymous',
				}),
			});

			const _finedustMap = new Map({
				target: 'finedust-map',
				view: finedustMapView,
				layers: [
					new LayerGroup({
						layers: [
							new TileLayer({
								source: new XYZ({
									url: 'https://xdworld.vworld.kr/2d/Base/service/{z}/{x}/{y}.png',
									attributions: '공간정보오픈플랫폼 VWORLD 2019 | 국토교통부',
								}),
							}),
						],
					}),
					new LayerGroup({
						layers: [finedustLayer],
					}),
				],
			});

			setFinedustMap(_finedustMap);
		}

		if (!revenuerecognitionMap) {
			const revenuerecognitionMapView = new View({
				center: olProj.transform([128, 36], 'EPSG:4326', 'EPSG:3857'),
				projection: 'EPSG:3857',
				zoom: 7,
				enableRotation: false,
			});

			const revenuerecognitionLayer = new ImageLayer({
				source: new ImageWMS({
					url: GISSERVER_URL,
					params: {
						VERSION: '1.3.0',
						FORMAT: 'image/png',
						TRANSPARENT: 'true',
						tiled: 'true',
						STYLES: 'sm_revenuerecognition',
						LAYERS: 'ocean:sm_revenuerecognition',
					},
					serverType: 'geoserver',
					crossOrigin: 'anonymous',
				}),
			});

			const _revenuerecognitionMap = new Map({
				target: 'revenuerecognition-map',
				view: revenuerecognitionMapView,
				layers: [
					new LayerGroup({
						layers: [
							new TileLayer({
								source: new XYZ({
									url: 'https://xdworld.vworld.kr/2d/Base/service/{z}/{x}/{y}.png',
									attributions: '공간정보오픈플랫폼 VWORLD 2019 | 국토교통부',
								}),
							}),
						],
					}),
					new LayerGroup({
						layers: [revenuerecognitionLayer],
					}),
				],
			});

			setRevenuerecognitionMap(_revenuerecognitionMap);
		}

		const koreaMapView = new View({
			center: olProj.transform([129.08, 35.2], 'EPSG:4326', 'EPSG:3857'),
			projection: 'EPSG:3857',
			zoom: 10.8,
			enableRotation: false,
		});

		if (!koreaMap) {
			const koreaLayer = new ImageLayer({
				source: new ImageWMS({
					url: GISSERVER_URL,
					params: {
						VERSION: '1.3.0',
						FORMAT: 'image/png',
						TRANSPARENT: 'true',
						tiled: 'true',
						STYLES: 'sm_ldgs',
						LAYERS: 'ocean:sm_ldgs',
					},
				}),
			});

			const busanLayer = new ImageLayer({
				source: new ImageWMS({
					url: GISSERVER_URL,
					params: {
						VERSION: '1.3.0',
						FORMAT: 'image/png',
						TRANSPARENT: 'true',
						tiled: 'true',
						STYLES: 'sm_busan_hotel',
						LAYERS: 'ocean:sm_busan_hotel',
					},
				}),
			});

			const hyattIconFeature = new Feature({
				geometry: new Point([14375997.590487126, 4185166.735129258]),
				name: '파크 하얏트 부산',
			});

			const hyattIconStyle = new Style({
				image: new Icon({
					anchor: [108, 5],
					anchorOrigin: 'bottom-left',
					anchorXUnits: 'pixels',
					anchorYUnits: 'pixels',
					src: 'images/park_hyatt.png',
				}),
			});

			const lavalseIconFeature = new Feature({
				geometry: new Point([14364573.13831379, 4176734.063408245]),
				name: '라발스 호텔 부산',
			});

			const lavalseIconStyle = new Style({
				image: new Icon({
					anchor: [108, 5],
					anchorOrigin: 'bottom-left',
					anchorXUnits: 'pixels',
					anchorYUnits: 'pixels',
					src: 'images/lavalse_hotel_busan.png',
				}),
			});
			const signielIconFeature = new Feature({
				geometry: new Point([14378998.797354762, 4185730.532961089]),
				name: '호텔롯데 시그니엘 부산',
			});

			const signielIconStyle = new Style({
				image: new Icon({
					anchor: [108, 5],
					anchorOrigin: 'bottom-left',
					anchorXUnits: 'pixels',
					anchorYUnits: 'pixels',
					src: 'images/signiel_busan.png',
				}),
			});

			const grandJosunIconFeature = new Feature({
				geometry: new Point([14378378.18006164, 4185675.091275921]),
				name: '그랜드 조선 부산',
			});

			const grandJosunIconStyle = new Style({
				image: new Icon({
					anchor: [108, 5],
					anchorOrigin: 'bottom-left',
					anchorXUnits: 'pixels',
					anchorYUnits: 'pixels',
					src: 'images/grand_josun_busan.png',
				}),
			});

			const plaireIconFeature = new Feature({
				geometry: new Point([14382026.531657051, 4187737.5108548985]),
				name: '송정 플레르 호텔',
			});

			const plaireIconStyle = new Style({
				image: new Icon({
					anchor: [108, 5],
					anchorOrigin: 'bottom-left',
					anchorXUnits: 'pixels',
					anchorYUnits: 'pixels',
					src: 'images/plaire_hotel_busan.png',
				}),
			});

			hyattIconFeature.setStyle(hyattIconStyle);
			lavalseIconFeature.setStyle(lavalseIconStyle);
			signielIconFeature.setStyle(signielIconStyle);
			grandJosunIconFeature.setStyle(grandJosunIconStyle);
			plaireIconFeature.setStyle(plaireIconStyle);

			const vectorSource = new VectorSource({
				features: [
					hyattIconFeature,
					lavalseIconFeature,
					signielIconFeature,
					grandJosunIconFeature,
					plaireIconFeature,
				],
			});

			const vectorLayer = new VectorLayer({
				source: vectorSource,
			});

			const _koreaMap = new Map({
				target: 'ldgs-map',
				view: koreaMapView,
				layers: [
					new LayerGroup({
						layers: [
							new TileLayer({
								source: new XYZ({
									url: 'https://xdworld.vworld.kr/2d/Base/service/{z}/{x}/{y}.png',
									attributions:
										'공간정보오픈플랫폼 VWORLD 2019 | 국토교통부 | 이미지 출처: 부산시 갈맷길 홈페이지(https://www.busan.go.kr/galmaetgil/notice02)',
								}),
							}),
						],
					}),
					new LayerGroup({
						layers: [busanLayer, koreaLayer, vectorLayer],
					}),
				],
			});

			setKoreaMap(_koreaMap);
		}

		const busanMapView = new View({
			center: olProj.transform([129.08, 35.2], 'EPSG:4326', 'EPSG:3857'),
			projection: 'EPSG:3857',
			zoom: 10.8,
			enableRotation: false,
		});

		if (!busanMap) {
			const busanLayer = new ImageLayer({
				source: new ImageWMS({
					url: GISSERVER_URL,
					params: {
						VERSION: '1.3.0',
						FORMAT: 'image/png',
						TRANSPARENT: 'true',
						tiled: 'true',
						STYLES: 'sm_busan_hotel',
						LAYERS: 'ocean:sm_busan_hotel',
					},
				}),
			});

			const _busanMap = new Map({
				target: 'busan-hotel-map',
				view: busanMapView,
				layers: [
					new LayerGroup({
						layers: [
							new TileLayer({
								source: new XYZ({
									url: 'https://xdworld.vworld.kr/2d/Base/service/{z}/{x}/{y}.png',
									attributions: '공간정보오픈플랫폼 VWORLD 2019 | 국토교통부',
								}),
							}),
						],
					}),
					new LayerGroup({
						layers: [busanLayer],
					}),
				],
			});

			setBusanMap(_busanMap);
		}
	}, []);

	return (
		<div className="scrollPageBox">
			<div className="leftSidePanel" ref={leftSidePanelRef}>
				<section
					id="ocean-resources"
					style={
						scrollState!.currentNav === 'ocean-resources'
							? undefined
							: { transition: 'opacity .25s ease-in-out' }
					}
					ref={oceanResourcesRef}
				>
					<header
						className={
							scrollState!.currentNav === 'ocean-resources'
								? 'LeftContentHeader active'
								: 'LeftContentHeader'
						}
					>
						<div className="LeftContentHeaderContentWrapper">
							<div className="LeftContentHeaderNumberWrapper">
								<p className="HeaderNumber">2</p>
								<hr className="LeftContentHeaderLine" />
							</div>
							<h1 className="LeftContentHeaderTitle">
								{oceanResourcesContentData.title}
							</h1>
						</div>
					</header>
					{oceanResourcesContentData.items.map(
						(category: any, index: number) => (
							<div
								key={category.id}
								className={
									(scrollState!.currentNav === 'ocean-resources' &&
										category.id === 'nature') ||
									scrollState!.currentNav ===
										`${oceanResourcesContentData.id}-${category.id}`
										? 'LeftContentCategory active'
										: 'LeftContentCategory'
								}
								id={`${oceanResourcesContentData.id}-${category.id}`}
							>
								<div className="LeftContentCategoryHeader">
									<div
										className="LeftContentCategoryColor"
										style={{ backgroundColor: category.color }}
									>
										<p>{index + 1}</p>
									</div>
									<h2
										className="LeftContentCategoryTitle"
										style={{ color: category.color }}
									>
										{category.title}
									</h2>
								</div>
								<div className="LeftContentCategoryContentWrapper">
									{category.content.map((text: string, i: number) => (
										<p key={i} className="LeftContentCategoryContent">
											{text}
										</p>
									))}
									{category.sources &&
										category.sources.map((text: string) => (
											<u className="Sources">{text}</u>
										))}
									{category.graphTitle && (
										<div
											id={`${oceanResourcesContentData.id}-${category.id}-graph`}
											className={
												scrollState.activeContent ===
												`${oceanResourcesContentData.id}-${category.id}-graph`
													? 'NotifyBox active'
													: 'NotifyBox'
											}
										>
											<img
												src={`images/${category.image}.png`}
												alt={category.image}
											/>
										</div>
									)}
								</div>
							</div>
						)
					)}
				</section>
				<section
					id="ocean-env-reality"
					style={
						scrollState!.currentNav === 'ocean-env-reality'
							? undefined
							: { transition: 'opacity .25s ease-in-out' }
					}
					ref={oceanEnvRef}
				>
					<header
						className={
							scrollState!.currentNav === 'ocean-env-reality'
								? 'LeftContentHeader active'
								: 'LeftContentHeader'
						}
					>
						<div className="LeftContentHeaderContentWrapper">
							<div className="LeftContentHeaderNumberWrapper">
								<p className="HeaderNumber">3</p>
								<hr className="LeftContentHeaderLine" />
							</div>
							<h1 className="LeftContentHeaderTitle">
								{oceanEnvContentData?.title}
							</h1>
						</div>
					</header>
					<div className="LeftContentCategoryWrapper">
						{oceanEnvContentData?.items &&
							oceanEnvContentData.items.map((category: any, index: number) => (
								<div
									key={category.id}
									className={
										(scrollState!.currentNav === 'ocean-env-reality' &&
											category.id === 'marinedebris') ||
										scrollState!.currentNav ===
											`${oceanEnvContentData.id}-${category.id}`
											? 'LeftContentCategory active'
											: 'LeftContentCategory'
									}
									id={`${oceanEnvContentData.id}-${category.id}`}
								>
									<div className="LeftContentCategoryHeader">
										<div
											className="LeftContentCategoryColor"
											style={{ backgroundColor: category.color }}
										>
											<p>{index + 1}</p>
										</div>
										<h2
											className="LeftContentCategoryTitle"
											style={{ color: category.color }}
										>
											{category.title}
										</h2>
									</div>
									<div className="LeftContentCategoryContentWrapper">
										{category.content.map((text: string, i: number) => (
											<p key={i} className="LeftContentCategoryContent">
												{text}
											</p>
										))}
										{category.id === 'finedust' &&
											oceanEnvContentData.items[1].tableData && (
												<>
													<h2
														className="TableTitle purple"
														style={{ marginTop: '40px' }}
													>
														미세먼지 예보 등급
													</h2>
													<table>
														<thead>
															{oceanEnvContentData.items[1].tableData.head.map(
																(theadRow: Array<string>, index: number) => {
																	if (index === 0) {
																		return (
																			<tr key={Math.random()}>
																				{theadRow.map((text, i) => {
																					if (i === 0) {
																						return (
																							<th
																								rowSpan={2}
																								key={Math.random()}
																							>
																								{text}
																							</th>
																						);
																					} else {
																						return (
																							<th
																								colSpan={4}
																								key={Math.random()}
																							>
																								{text}
																							</th>
																						);
																					}
																				})}
																			</tr>
																		);
																	} else {
																		return (
																			<tr key={Math.random()}>
																				{theadRow.map((text, i) => {
																					const colorSet = [
																						'blue',
																						'green',
																						'yellow',
																						'red',
																					];
																					return (
																						<th
																							key={Math.random()}
																							className={`finedust-${colorSet[i]}`}
																						>
																							{text}
																						</th>
																					);
																				})}
																			</tr>
																		);
																	}
																}
															)}
														</thead>
														<tbody>
															{oceanEnvContentData.items[1].tableData.body.map(
																(row: any) => {
																	return (
																		<tr key={Math.random()}>
																			{row.map((text: string) => (
																				<td key={Math.random()}>
																					{text.toLocaleString()}
																				</td>
																			))}
																		</tr>
																	);
																}
															)}
														</tbody>
													</table>
												</>
											)}
										{category.graphTitle && (
											<div
												id={`${oceanEnvContentData.id}-${category.id}-graph`}
												className={
													scrollState.activeContent ===
													`${oceanEnvContentData.id}-${category.id}-graph`
														? 'NotifyBox active'
														: 'NotifyBox'
												}
											>
												<img
													src={`images/${category.image}.png`}
													alt={category.image}
												/>
											</div>
										)}
									</div>
								</div>
							))}
					</div>
				</section>
				<section
					id="ocean-sustain"
					style={
						scrollState!.currentNav === 'ocean-sustain'
							? undefined
							: { transition: 'opacity .25s ease-in-out' }
					}
					ref={oceanSustainRef}
				>
					<header
						className={
							scrollState!.currentNav === 'ocean-sustain'
								? 'LeftContentHeader active'
								: 'LeftContentHeader'
						}
					>
						<div className="LeftContentHeaderContentWrapper">
							<div className="LeftContentHeaderNumberWrapper">
								<p className="HeaderNumber">4</p>
								<hr className="LeftContentHeaderLine" />
							</div>
							<h1 className="LeftContentHeaderTitle">
								{oceanSustainContentData?.title}
							</h1>
						</div>
					</header>
					{oceanSustainContentData &&
						oceanSustainContentData.items?.map(
							(category: any, index: number) => (
								<div
									key={category.id}
									className={
										(scrollState!.currentNav === 'ocean-sustain' &&
											category.id === 'recognition') ||
										scrollState!.currentNav ===
											`${oceanSustainContentData.id}-${category.id}`
											? 'LeftContentCategory active'
											: 'LeftContentCategory'
									}
									id={`${oceanSustainContentData.id}-${category.id}`}
								>
									<div className="LeftContentCategoryHeader">
										<div
											className="LeftContentCategoryColor"
											style={{ backgroundColor: category.color }}
										>
											<p>{index + 1}</p>
										</div>
										<h2
											className="LeftContentCategoryTitle"
											style={{ color: category.color }}
										>
											{category.title}
										</h2>
									</div>
									<div className="LeftContentCategoryContentWrapper">
										{category.content.map((text: string, i: number) => (
											<p key={i} className="LeftContentCategoryContent">
												{text}
											</p>
										))}
										{category.sources &&
											category.sources.map((text: string) => (
												<u className="Sources">{text}</u>
											))}
										{category.id === 'current' && (
											<Chart
												options={recognitionRadarChartOptions.options}
												series={recognitionRadarChartOptions.series}
												type="radar"
												height={350}
											/>
										)}
										{category.mapTitle &&
											category.mapTitle.map((title: string, i: number) => (
												<div
													key={category.id + title + i}
													id={`${oceanSustainContentData.id}-${category.id}-${category.mapId[i]}-map`}
													className={
														scrollState.activeContent ===
														`${oceanSustainContentData.id}-${category.id}-${category.mapId[i]}-map`
															? 'NotifyBox active'
															: 'NotifyBox'
													}
												>
													<img
														src={`images/${category.image[i]}.png`}
														alt={category.image[i]}
													/>
												</div>
											))}
									</div>
								</div>
							)
						)}
				</section>
			</div>
			<div className="mainContentPanel" ref={mainContentPanelRef}>
				{/* 경제적 가치 지도 시작 */}
				<div
					className={
						scrollState.activeContent === 'ocean-resources-nature-map'
							? 'RightContent active'
							: 'RightContent'
					}
				>
					<div className="RightContentWrapper">
						<div className="RightContentHeader">
							<h1 className="RightContentHeaderTitle yellow">
								{oceanResourcesContentData.items[0].mapTitle}
							</h1>
						</div>
						<div id="nature-map" className="map">
							<div className="LeftLegendWrapper">
								<Legend
									title="해양 생태계 서비스 가치평가"
									unit="달러"
									layerName="ocean:sm_marineecosystem"
									imageWidth={90}
								/>
							</div>
							<div className="RightLegendWrapper">
								<Legend title="해양 용도구역" layerName="ocean:sm_marinezone" />
							</div>
						</div>
					</div>
				</div>
				{/* 경제적 가치 지도 끝 */}
				{/* 공간적 가치 지도 시작 */}
				<div
					className={
						scrollState.activeContent === 'ocean-resources-space-map'
							? 'RightContent active'
							: 'RightContent'
					}
				>
					<div className="RightContentWrapper">
						<div className="RightContentHeader">
							<h1 className="RightContentHeaderTitle purple">
								{oceanResourcesContentData.items[1].mapTitle}
							</h1>
						</div>
						<div id="space-map" className="map">
							<div className="RightLegendWrapper">
								<Legend title="해양 용도구역" layerName="ocean:sm_marinezone" />
							</div>
						</div>
					</div>
				</div>
				{/* 공간적 가치 지도 끝 */}
				{/* 경제적 가치 지도 시작 */}
				<div
					className={
						scrollState.activeContent === 'ocean-resources-economy-map'
							? 'RightContent active'
							: 'RightContent'
					}
				>
					<div className="RightContentWrapper">
						<div className="RightContentHeader">
							<h1 className="RightContentHeaderTitle blue">
								{oceanResourcesContentData.items[2].mapTitle}
							</h1>
						</div>
						<div id="economy-map" className="map">
							<div className="RightLegendWrapper">
								<Legend
									title="해양사업체 현황"
									unit="개소"
									layerName="ocean:sm_marinebusiness"
									imageWidth={75}
								/>
							</div>
						</div>
					</div>
				</div>
				{/* 경제적 가치 지도 끝 */}
				{/* 경제적 가치 인포그래픽 시작 */}
				<div
					className={
						scrollState.activeContent === 'ocean-resources-economy-graph'
							? 'ChartContent active'
							: 'ChartContent'
					}
				>
					<div className="RightContentWrapper ChildHalfChart2">
						<div>
							<div className="RightContentHeader">
								<h1 className="RightContentHeaderTitle blue">
									{oceanResourcesContentData.items[2].graphTitle}
								</h1>
							</div>
							<div id="economy-chart">
								<Chart
									options={companyChartOptions.options}
									series={companyChartOptions.series}
									type="radialBar"
									width="90%"
								/>
								<Chart
									options={employeeChartOptions.options}
									series={employeeChartOptions.series}
									type="radialBar"
									width="90%"
								/>
								<Chart
									options={salesChartOptions.options}
									series={salesChartOptions.series}
									type="radialBar"
									width="90%"
								/>
							</div>
						</div>
						<div>
							{oceanResourcesContentData.items[2].tableData && (
								<>
									<h2 className="TableTitle blue">부산시 해양산업 현황</h2>
									<div className="TableWrapper">
										<table>
											<thead>
												<tr>
													{oceanResourcesContentData.items[2].tableData.head.map(
														(text: string) => {
															return <th key={Math.random()}>{text}</th>;
														}
													)}
												</tr>
											</thead>
											<tbody>
												{oceanResourcesContentData.items[2].tableData.body.map(
													(row: any) => {
														return (
															<tr key={Math.random()}>
																{row.map((text: string) => (
																	<td key={Math.random()}>
																		{text.toLocaleString()}
																	</td>
																))}
															</tr>
														);
													}
												)}
											</tbody>
										</table>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
				{/* 경제적 가치 그래픽 끝 */}
				{/* 해양쓰레기 지도 시작 */}
				<div
					className={
						scrollState.activeContent === 'ocean-env-reality-marinedebris-map'
							? 'RightContent active'
							: 'RightContent'
					}
				>
					<div className="RightContentWrapper">
						<div className="RightContentHeader">
							<h1 className="RightContentHeaderTitle yellow">
								{oceanEnvContentData.items[0].mapTitle}
							</h1>
						</div>
						<div id="marinedebris-map" className="map">
							<div className="RightLegendWrapper">
								<Legend
									title="해양쓰레기 분포"
									unit="톤"
									layerName="ocean:sm_marinedebris"
									imageWidth={80}
								/>
							</div>
						</div>
					</div>
				</div>
				{/* 해양쓰레기 지도 끝 */}
				{/* 해양쓰레기 인포그래픽 시작 */}
				<div
					className={
						scrollState.activeContent === 'ocean-env-reality-marinedebris-graph'
							? 'ChartContent active'
							: 'ChartContent'
					}
				>
					<div className="RightContentWrapper">
						<div className="RightContentHeader">
							<h1 className="RightContentHeaderTitle yellow">
								{oceanEnvContentData?.items &&
									oceanEnvContentData.items[0].graphTitle}
							</h1>
						</div>
						<div id="marinedebris-chart">
							<Chart
								options={marinedebrisChartOptions.options}
								series={marinedebrisChartOptions.series}
								type="line"
								width="100%"
							/>
						</div>
					</div>
				</div>
				{/* 해양쓰레기 그래픽 끝 */}
				{/* 항만 미세먼지 지도 시작 */}
				<div
					className={
						scrollState.activeContent === 'ocean-env-reality-finedust-map'
							? 'RightContent active'
							: 'RightContent'
					}
				>
					<div className="RightContentWrapper">
						<div className="RightContentHeader">
							<h1 className="RightContentHeaderTitle purple">
								{
									oceanEnvContentData.items[1].mapTitle[
										finedustStyle === 'normal' ? 0 : 1
									]
								}
							</h1>
						</div>
						<div id="finedust-map" className="map">
							<div className="MapControlWrapper">
								<button
									type="button"
									onClick={() => handleFinedustStyle('normal')}
									className={finedustStyle === 'normal' ? 'Btn active' : 'Btn'}
								>
									미세먼지
								</button>
								<button
									type="button"
									onClick={() => handleFinedustStyle('udmp')}
									className={finedustStyle === 'udmp' ? 'Btn active' : 'Btn'}
								>
									초미세먼지
								</button>
							</div>
							<div className="RightLegendWrapper">
								<Legend
									title="예보 등급"
									layerName="ocean:sm_marinezone"
									styleName={
										finedustStyle === 'normal'
											? 'ocean:sm_finedust'
											: 'ocean:sm_finedust_udmp'
									}
								/>
							</div>
						</div>
					</div>
				</div>
				{/* 항만 미세먼지 지도 끝 */}
				{/* 항만 미세먼지 인포그래픽 시작 */}
				<div
					className={
						scrollState.activeContent === 'ocean-env-reality-finedust-graph'
							? 'ChartContent active'
							: 'ChartContent'
					}
				>
					<div className="RightContentWrapper ChildHalfChart">
						<div>
							<div className="RightContentHeader">
								<h1 className="RightContentHeaderTitle purple">
									{oceanEnvContentData.items[1].graphTitle[0]}
								</h1>
							</div>
							<Chart
								options={finedustLineChartOptions.options}
								series={finedustLineChartOptions.series}
								type="line"
								height="80%"
							/>
						</div>
						<div>
							<div className="RightContentHeader">
								<h1 className="RightContentHeaderTitle purple">
									{oceanEnvContentData.items[1].graphTitle[1]}
								</h1>
							</div>
							<Chart
								options={finedustColumnChartOptions.options}
								series={finedustColumnChartOptions.series}
								type="bar"
								height="100%"
							/>
						</div>
					</div>
				</div>
				{/* 항만 미세먼지 그래픽 끝 */}
				{/* 해양산업 지도 시작 */}
				<div
					className={
						scrollState.activeContent ===
						'ocean-env-reality-revenuerecognition-map'
							? 'RightContent active'
							: 'RightContent'
					}
				>
					<div className="RightContentWrapper">
						<div className="RightContentHeader">
							<h1 className="RightContentHeaderTitle blue">
								{oceanEnvContentData.items[2].graphTitle[2]}
							</h1>
						</div>
						<div id="revenuerecognition-map" className="map">
							<div className="RightLegendWrapper">
								<Legend
									title="수익이출 대상지역"
									unit="개소"
									layerName="ocean:sm_revenuerecognition"
								/>
							</div>
						</div>
					</div>
				</div>
				{/* 해양산업 지도 끝 */}
				{/* 해양산업 인포그래픽 시작 */}
				<div
					className={
						scrollState.activeContent ===
						'ocean-env-reality-revenuerecognition-graph'
							? 'ChartContent active'
							: 'ChartContent'
					}
				>
					<div className="RightContentWrapper ChildHalfChart">
						<div>
							<div className="RightContentHeader">
								<h1 className="RightContentHeaderTitle blue">
									{oceanEnvContentData.items[2].graphTitle[0]}
								</h1>
							</div>
							<div className="TreemapChartWrapper">
								<Chart
									options={revenuerecognitionDonutChartOptions.options}
									series={revenuerecognitionDonutChartOptions.series}
									type="donut"
									height="100%"
								/>
							</div>
						</div>
						<div>
							<div className="RightContentHeader">
								<h1 className="RightContentHeaderTitle blue">
									{oceanEnvContentData.items[2].graphTitle[1]}
								</h1>
							</div>
							<div className="TreemapChartWrapper">
								<Chart
									options={revenuerecognitionTreemapChartOptions.options}
									series={revenuerecognitionTreemapChartOptions.series}
									type="treemap"
									height="100%"
								/>
							</div>
						</div>
					</div>
				</div>
				{/* 해양산업 그래픽 끝 */}
				{/* 지속가능성 인식 인포그래픽 시작 */}
				<div
					className={
						scrollState.activeContent === 'ocean-sustain-recognition-graph'
							? 'ChartContent active'
							: 'ChartContent'
					}
				>
					<div className="RightContentWrapper Chart">
						<div className="RightContentHeader">
							<h1 className="RightContentHeaderTitle yellow">
								{oceanSustainContentData?.items &&
									(oceanSustainContentData.items[0] as any).graphTitle[0]}
							</h1>
						</div>
						<div className="ChildChart">
							{/* @ts-ignore */}
							<Chart
								options={recognitionColumnChartOptions.options}
								series={recognitionColumnChartOptions.series}
								type="bar"
								height="100%"
							/>
							<Chart
								options={recognitionPieChartOptions.options}
								series={recognitionPieChartOptions.series}
								type="pie"
								width="100%"
							/>
						</div>
					</div>
				</div>
				{/* 지속가능성 인식 그래픽 끝 */}
				{/* 해양의 지속가능성 이미지(인포그래픽) 시작 */}
				<div
					className={
						scrollState.activeContent === 'ocean-sustain-sustainability-venn'
							? 'RightContent active'
							: 'RightContent'
					}
				>
					<div className="RightContentWrapper">
						<div className="RightContentHeader">
							<h1 className="RightContentHeaderTitle purple">
								{oceanSustainContentData?.items &&
									(oceanSustainContentData.items[1] as any).graphTitle[0]}
							</h1>
						</div>
						<div className="ImageWrapper">
							<img src="images/ocean-sustain-venn.png" width="95%" />
						</div>
					</div>
				</div>
				{/* 해양의 지속가능성 이미지(인포그래픽) 끝 */}
				{/* 부산의 해양 지속가능성 현황 오션뷰 호텔 현황 지도 시작 */}
				<div
					className={
						scrollState.activeContent === 'ocean-sustain-current-ldgs-map'
							? 'RightContent active'
							: 'RightContent'
					}
				>
					<div className="RightContentWrapper">
						<div className="RightContentHeader">
							<h1 className="RightContentHeaderTitle blue">
								{oceanSustainContentData?.items &&
									(oceanSustainContentData.items[2] as any).mapTitle[0]}
							</h1>
						</div>
						<div id="ldgs-map" className="map">
							<div className="LeftLegendWrapper">
								<Legend
									title="호텔 오션뷰 객실 가격"
									unit="원"
									layerName="ocean:sm_ldgs"
									imageWidth={100}
								/>
							</div>
							<div className="RightLegendWrapper">
								<Legend
									title="지역별 오션뷰 호텔 평균 가격"
									unit="원"
									layerName="ocean:sm_busan_hotel"
									imageWidth={100}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});

export default ScrollPage;
