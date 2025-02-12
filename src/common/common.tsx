const GEOSERVER_URL = import.meta.env.VITE_GISSERVER_WMS_URL;

function getImgUrl(url: string, name: string) {
	return new URL(url + '/' + name + '.png', import.meta.url).href;
}

function getLegendGraphic(layerName: string, styleName?: string | undefined) {
	return `${GEOSERVER_URL}?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=${layerName}&style=${
		styleName ?? layerName
	}&legend_options=fontName:NanumSquare Bold;fontSize:12;fontAntiAliasing:true;`;
}

export { getImgUrl, getLegendGraphic };
