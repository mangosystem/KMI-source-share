const chartOptions: any = {
	company: {
		series: [7.5],
		options: {
			chart: {
				type: 'radialBar',
				// height: 150
			},
			plotOptions: {
				radialBar: {
					dataLabels: {
						show: true,
						name: {
							show: true,
							offsetY: 0,
							fontSize: '20px',
						},
						value: {
							show: true,
							colors: '#111',
							offsetY: 28,
							fontSize: '40px',
							fontWeight: 700,
							formatter: function (val: any) {
								return val + '%';
							},
						},
					},
					hollow: {
						size: '65%',
						margin: 0,
					},
				},
			},
			labels: ['사업체 비율'],
			tooltip: {
				enabled: true,
				custom: function () {
					return `
            <div className="CustomTooltipBox">
              <p>전체 사업체수(개소): 400,565</p>
              <p>해양 사업체수(개소): 30,044</p>
              <p>비중: 7.5%</p>
            </div>
          `;
				},
				style: {
					fontSize: '14px',
					colors: '#111',
				},
				background: {
					enabled: true,
					foreColor: '#fff',
				},
			},
		},
	},
	employee: {
		series: [10.3],
		options: {
			chart: {
				type: 'radialBar',
				// height: 150
			},
			plotOptions: {
				radialBar: {
					dataLabels: {
						show: true,
						name: {
							show: true,
							offsetY: 0,
							fontSize: '20px',
						},
						value: {
							show: true,
							colors: '#111',
							offsetY: 28,
							fontSize: '40px',
							fontWeight: 700,
							formatter: function (val: any) {
								return val + '%';
							},
						},
					},
					hollow: {
						size: '65%',
						margin: 0,
					},
				},
			},
			labels: ['종사자 비율'],
			tooltip: {
				enabled: true,
				custom: function () {
					return `
            <div className="CustomTooltipBox">
              <p>전체 종사자수(명): 1,554,664</p>
              <p>해양사업체 종사자수(명): 159,943</p>
              <p>비중: 10.3%</p>
            </div>
          `;
				},
				style: {
					fontSize: '14px',
					colors: '#111',
				},
				background: {
					enabled: true,
					foreColor: '#fff',
				},
			},
		},
	},
	sales: {
		series: [15.1],
		options: {
			chart: {
				type: 'radialBar',
				// height: 150
			},
			plotOptions: {
				radialBar: {
					dataLabels: {
						show: true,
						name: {
							show: true,
							offsetY: 0,
							fontSize: '20px',
						},
						value: {
							show: true,
							colors: '#111',
							offsetY: 28,
							fontSize: '40px',
							fontWeight: 700,
							formatter: function (val: any) {
								return val + '%';
							},
						},
					},
					hollow: {
						size: '65%',
						margin: 0,
					},
				},
			},
			labels: ['매출액 비율'],
			tooltip: {
				enabled: true,
				custom: function () {
					return `
            <div className="CustomTooltipBox">
              <p>전체 매출액(조): 394.6</p>
              <p>해양 사업체 매출액(조): 59.6</p>
              <p>비중: 15.1%</p>
            </div>
          `;
				},
				style: {
					fontSize: '14px',
					colors: '#111',
				},
				background: {
					enabled: true,
					foreColor: '#fff',
				},
			},
		},
	},
	marinedebris: {
		series: [
			{
				name: '부산 합계',
				type: 'column',
				data: [
					1908.4, 1771.9, 1053.9, 1142.7, 1186.6, 589.9, 10717.9, 4913.6,
					5337.8, 4381.5, 4834.9, 4363.1, 5230.3, 8562.3, 7537.8, 5329.8,
				],
			},
			{
				name: '전국 합계',
				type: 'line',
				data: [
					25239.5, 59437.5, 33436.5, 92897.6, 122365.6, 49080.4, 76935.8,
					69128.9, 70840.6, 82175.4, 95632, 108644.1, 138361.9, 120736.2,
					126035.4, 131930.7,
				],
			},
		],
		options: {
			chart: {
				id: 'marinedebris-chart',
				type: 'line',
				height: 350,
				toolbar: {
					show: false,
				},
				redrawOnParentResize: true,
			},
			plotOptions: {
				lineBar: {
					dataLabels: {
						show: true,
						style: {
							fontSize: '50px',
						},
						name: {
							show: true,
						},
						value: {
							show: true,
							style: {
								colors: '#111',
								fontSize: '50px',
							},
							formatter: function (val: string) {
								return val;
							},
						},
					},
				},
			},
			dataLabels: {
				enabled: true,
				enabledOnSeries: [1],
			},
			stroke: {
				width: [0, 4],
			},
			labels: [
				2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
				2020, 2021, 2022, 2023,
			],
			yaxis: [
				{
					title: {
						text: '부산 합계',
					},
					// tickAmount: 5000,
					max: 50000,
				},
				{
					opposite: true,
					title: {
						text: '전국 합계',
					},
					min: 0,
					max: 150000,
					stepSize: 30000,
				},
			],
		},
	},
	'finedust-column': {
		series: [
			{
				name: '미세먼지',
				data: [
					23.9, 30.1, 32.9, 28.7, 25.3, 25.7, 22.9, 30.4, 24.5, 24.5, 26.6,
					24.0, 27.0, 24.2, 28.6, 23.7, 25.0, 23.9, 24.8, 29.2, 28.1, 30.9,
					24.5, 28.5, 23.1, 25.1, 29.1, 32.4, 28.0, 29.1, 26.6, 23.9,
				],
			},
			{
				name: '초미세먼지',
				data: [
					13.6, 14.3, 17.3, 15.2, 15.2, 12.8, 13.1, 15.5, 11.0, 13.4, 15.2,
					14.0, 13.5, 16.9, 18.1, 13.1, 12.9, 13.1, 14.4, 17.8, 15.0, 16.4,
					14.7, 14.0, 12.0, 15.1, 17.4, 14.6, 15.3, 14.2, 12.7, 14.1,
				],
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 150,
				toolbar: {
					show: false,
				},
			},
			plotOptions: {
				bar: {
					horizontal: false,
					borderRadius: 2,
					borderRadiusApplication: 'end',
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				show: true,
				width: 1,
				colors: ['transparent'],
			},
			xaxis: {
				categories: [
					['광', '복', '동'],
					['장', '림', '동'],
					['학', '장', '동'],
					['덕', '천', '동'],
					['연', '산', '동'],
					['대', '연', '동'],
					['청', '룡', '동'],
					['전', '포', '동'],
					['태', '종', '대'],
					['기', '장', '읍'],
					['대', '저', '동'],
					['부', '곡', '동'],
					['광', '안', '동'],
					['명', '장', '동'],
					['녹', '산', '동'],
					['용', '수', '리'],
					['좌', '동'],
					['수', '정', '동'],
					['대', '신', '동'],
					['덕', '포', '동'],
					['당', '리', '동'],
					['개', '금', '동'],
					['재', '송', '동'],
					['화', '명', '동'],
					['청', '학', '동'],
					['회', '동', '동'],
					['명', '지', '동'],
					['온', '천', '동'],
					['초', '량', '동'],
					['삼', '락', '동'],
					['우', '동'],
					['용', '호', '동'],
				],
			},
		},
	},
	'finedust-line': {
		series: [
			{
				name: '미세먼지',
				data: [
					25.3, 31.0, 27.6, 22.6, 37.8, 54.9, 27.4, 26.5, 15.0, 19.1, 15.5,
					17.3,
				],
			},
			{
				name: '초미세먼지',
				data: [
					15.3, 19.4, 18.6, 15.4, 18.7, 21.4, 14.1, 15.9, 8.1, 11.2, 8.1, 8.6,
				],
			},
		],
		options: {
			chart: {
				type: 'line',
				height: 350,
				toolbar: {
					show: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			xaxis: {
				categories: [
					'2023.11월',
					'2023.12월',
					'2024.01월',
					'2024.02월',
					'2024.03월',
					'2024.04월',
					'2024.05월',
					'2024.06월',
					'2024.07월',
					'2024.08월',
					'2024.09월',
					'2024.10월',
				],
			},
			yaxis: {
				min: 0,
				max: 60,
			},
		},
	},
	'revenuerecognition-donut': {
		series: [66, 1967, 5448, 6441, 1127],
		options: {
			chart: {
				type: 'donut',
			},
			legend: {
				show: true,
				position: 'right',
				horizontalAlign: 'center',
			},
			labels: [
				'매우 좋아졌다',
				'좋아졌다',
				'그대로다',
				'나빠졌다',
				'매우 나빠졌다',
			],
			colors: ['#78C87C', '#7BCCC4', '#0868AC', '#43A1CA', '#BAE4BC'],
			states: {
				hover: {
					filter: {
						type: 'none',
					},
				},
			},
			stroke: {
				width: 0,
			},
			grid: {
				padding: {},
			},
			tooltip: {
				enabled: true,
				custom: function (ctx: any) {
					const currentVal = ctx.series[ctx.seriesIndex];
					const labels = ctx.w.config.labels;
					return `<div className="CustomTooltipBox">
              <p>${labels[ctx.seriesIndex]}: ${currentVal.toLocaleString(
						'ko-KR'
					)}</p>
            </div>`;
				},
				style: {
					fontSize: '14px',
					colors: '#111',
				},
			},
		},
	},
	'revenuerecognition-treemap': {
		series: [
			{
				data: [
					{
						x: '전문인력 부족',
						y: 3036,
					},
					{
						x: '사업체 규모 영세성',
						y: 2106,
					},
					{
						x: '자금 부족',
						y: 1634,
					},
					{
						x: '기술 부족',
						y: 576,
					},
					{
						x: '정보 부족',
						y: 1141,
					},
					{
						x: '과도한 규제',
						y: 1496,
					},
					{
						x: '정부지원 미흡',
						y: 3158,
					},
					{
						x: '기타',
						y: 101,
					},
				],
			},
		],
		options: {
			legend: {
				show: false,
			},
			chart: {
				type: 'treemap',
				toolbar: {
					show: false,
				},
			},
			colors: [
				'#D84800',
				'#FF7400',
				'#FFB96C',
				'#798490',
				'#0071AF',
				'#45A4D2',
				'#98CDEC',
				'#A1ACBA',
			],
			plotOptions: {
				treemap: {
					distributed: true,
					enableShades: false,
				},
			},
			tooltip: {
				enabled: true,
				custom: function (ctx: any) {
					const targetData = ctx.ctx.w.config.series[0].data;
					const sum = targetData.reduce((acc: number, cur: any) => {
						return acc + cur.y;
					}, 0);
					const labels = targetData.map((row: any) => row.x);
					const currentVal = targetData[ctx.dataPointIndex].y;
					return `<div className="CustomTooltipBox">
              <p>${labels[ctx.dataPointIndex]}: ${currentVal.toLocaleString(
						'ko-KR'
					)}(${((currentVal / sum) * 100).toFixed(2)}%)</p>
            </div>`;
				},
				style: {
					fontSize: '14px',
					colors: '#111',
				},
				background: {
					enabled: true,
					foreColor: '#fff',
				},
			},
		},
	},
	'recognition-column': {
		series: [
			{
				name: 'survey',
				data: [66.7, 26.1, 6.5, 0.7],
			},
		],
		options: {
			chart: {
				type: 'bar',
				toolbar: {
					show: false,
				},
			},
			plotOptions: {
				bar: {
					horizontal: false,
					borderRadius: 2,
					borderRadiusApplication: 'end',
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				show: true,
				width: 1,
				colors: ['transparent'],
			},
			labels: ['매우 중요하다', '꽤 중요하다', '보통', '별로 중요하지 않다'],
			tooltip: {
				enabled: true,
				custom: function (ctx: any) {
					const targetData = ctx.series[0];
					const labels = ctx.ctx.w.config.labels;
					const currentVal = targetData[ctx.dataPointIndex];
					return `<div className="CustomTooltipBox">
              <p>${labels[ctx.dataPointIndex]}: ${currentVal.toLocaleString(
						'ko-KR'
					)}%</p>
            </div>`;
				},
				style: {
					fontSize: '14px',
					colors: '#111',
				},
				background: {
					enabled: true,
					foreColor: '#fff',
				},
			},
			title: {
				text: '바다의 일상생활 중요도',
				align: 'left',
				offsetY: 20,
			},
		},
	},
	'recognition-pie': {
		series: [0.7, 6.5, 92.8],
		options: {
			chart: {
				type: 'pie',
				toolbar: {
					show: false,
				},
			},
			colors: ['#98CDEC', '#45A4D2', '#0071AF'],
			dataLabels: {
				enabled: true,
				formatter: function (val: string) {
					return val + '%';
				},
			},
			stroke: {
				show: true,
				width: 1,
				colors: ['transparent'],
			},
			labels: ['중요하지 않음', '보통', '중요함'],
			legend: {
				show: true,
				position: 'bottom',
				horizontalAlign: 'center',
			},
			tooltip: {
				y: {
					formatter: (value: string) => `${value}%`,
				},
			},
		},
	},
	'recognition-radar': {
		series: [
			{
				name: '부산(가중치)',
				data: [70.6, 62.5, 27.9, 38.0],
			},
			{
				name: '전국평균(가중치)',
				data: [49.2, 29.3, 46.0, 48.0],
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'radar',
				toolbar: {
					show: false,
				},
			},
			yaxis: {
				stepSize: 20,
			},
			xaxis: {
				categories: [
					'해양생태계',
					'해양생태계서비스',
					'해양 인적 및 사회 자본',
					'해양정책 및 거버넌스',
				],
			},
			stroke: {
				dashArray: [0, 5],
			},
		},
	},
};

const getChartOptions = (id: string) => {
	return chartOptions[id];
};

export { getChartOptions };
