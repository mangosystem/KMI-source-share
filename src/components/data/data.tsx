const BLOCK_START_LIST: string[] = [
	'ocean-story',
	'ocean-resources',
	'ocean-env-reality',
	'ocean-sustain',
	'ocean-sustain-current',
	'ocean-coexistence',
	'ocean-coexistence-policy',
	'ocean-coexistence-vision',
	'ocean-coexistence-platform',
];
const NOT_NAV_LIST: string[] = [
	'env-issue',
	'industry-issue',
	'nature',
	'marinedebris',
	'recognition',
	'policy',
];

const sections: any = [
	{
		id: 'ocean-index',
		title: '해양과의 공존',
		block: 'start',
		page: 1,
	},
	{
		id: 'ocean-story',
		title: '바다가 들려주는 이야기',
		block: 'start',
		icon: 'ocean-story.svg',
		page: 2,
		items: [
			{
				id: 'env-issue',
				title: '해양환경 이슈',
				category: '부산시 해양쓰레기 관련 뉴스',
				description: [
					"국제환경단체 그린피스의 환경감시선 '레인보우 워리어'가 부산항에 도착했습니다. 이는 11월 25일부터 일주일간 부산에서 개최되는 유엔 플라스틱 협약 제5차 정부간협상위원회(INC-5)와 관련이 있으며, 이 회의에는 170여 개국에서 4,000여 명이 참석할 예정입니다. 이번 마지막 회의는 플라스틱 생산량 감축에 대한 국제적 합의를 목표로 하고 있습니다. 현재 전 세계 플라스틱의 90% 이상이 재활용되지 않고 있어 그린피스와 같은 환경단체들은 생산량 감축이 필수적이라고 주장하고 있습니다.",
				],
				source: 'MBC 2024년 11월 18일자 뉴스',
				link: 'https://www.youtube.com/embed/wNga3-OA7jE?si=tJ4-Lpr9EgCwF0Cu',
				youtube_code: 'wNga3-OA7jE',
				page: 2,
			},
			{
				id: 'industry-issue',
				title: '해양산업 이슈',
				category: '부산시 해양산업(스마트 항만) 관련 뉴스',
				description: [
					'부산의 해양 신산업이 획기적인 도약을 이뤘습니다. 국내 최초로 문을 연 부산항 신항7부두는 완전히 자동화된 스마트 항만으로, 인공지능과 자동화 기술을 통해 물류 처리 효율을 30% 높였습니다. 모든 설비를 국산 기술로 개발해 8,500억원의 경제 효과를 창출했으며, 장비를 전기 동력으로 전환해 환경 문제도 해결했습니다. 이는 단순한 항만 시설이 아닌, 해양 신산업의 미래를 보여주는 혁신 사례입니다.',
				],
				source: 'SBS 2024년 4월 8일자 뉴스',
				link: 'https://www.youtube.com/watch?v=pP2M0w84rDo',
				youtube_code: 'pP2M0w84rDo',
				page: 2,
			},
		],
	},
	{
		id: 'ocean-resources',
		title: '우리의 보물창고, 해양자원',
		block: 'start',
		icon: 'ocean-resources.svg',
		page: 3,
		activeContentName: 'ocean-resources-nature-map',
		items: [
			{
				id: 'nature',
				title: '자연적 가치',
				block: 'center',
				page: 3,
				content: [
					'생태계서비스는 1970년대에 생물다양성 보전에 대한 대중의 인식을 높이기 위해 등장한 개념입니다. 이는 생태계의 기능을 인간 사회에 제공되는 재화와 서비스로 보는 인간 중심적 관점입니다. 생태계서비스는 생태계의 건강과 기능을 유지함으로 인간이 얻는 다양한 혜택을 의미합니다.',
					'해양이 주는 혜택 즉 해양생태계서비스는 크게 네 가지로 나눌 수 있습니다. 첫째, 물고기를 잡거나 해양생물 자원을 조사하는 공급 서비스가 있습니다. 둘째, 바다 생물들이 살아가는 데 필요한 영양분 순환과 같은 지원 서비스가 있습니다. 셋째, 이산화탄소를 저장하고 해안가 침식을 막아주는 조절 서비스가 있습니다. 넷째, 관광이나 휴양과 같은 문화 서비스가 있습니다.',
					'해양수산과학기술진흥원(KIMST)이 2017년부터 2021년까지 이러한 바다의 가치를 평가하는 기술을 개발했습니다. 이 기술로 부산의 바다가 주는 혜택을 계산해보니 총 2억 7,273만 달러(약 3,961억 원)의 가치가 있는 것으로 나타났습니다. 0.93km×0.93km 크기의 구역당 평균 26만 4,740달러(약 3억 8,458만 원)의 가치를 가지고 있습니다.',
				],
				color: '#EEAB3C',
				mapTitle: '부산시 해양 생태계서비스 현황',
				activeContentName: 'ocean-resources-nature-map',
				sources: [
					'* 자료 출처: KIMST(2017~2021), 생태계기반 해양공간분석 및 활용기술 개발 연구',
				],
			},
			{
				id: 'space',
				title: '공간적 가치',
				block: 'center',
				page: 3,
				content: [
					'우리나라는 바다를 체계적으로 관리하기 위한 법률(해양공간계획법)을 만들었습니다. 이 법에 따라 바다의 특성과 사회적 필요를 고려하여 구역별로 용도를 정하고, 각 구역을 알맞게 활용하고 관리하고 있습니다.',
					'해양공간관리계획에서는 바다를 9개의 용도구역(어업활동보호구역, 골재·광물자원개발구역, 에너지개발구역, 해양관광구역, 환경·생태계관리구역, 연구·교육보전구역, 항만·항행구역,  군사활동구역, 안전관리구역)으로 나누어 관리합니다. 이 계획의 목표는 바다의 가치를 높이고, 이해관계자들 간의 갈등을 줄이며, 바다 생태계를 보호하는 것입니다.',
					'해양수산부 장관과 시도지사는 영해, 배타적 경제수역, 대륙붕 및 항만구역의 계획을 수립하고 시도지사는 다양한 이해관계자의 의견 수렴을 위해 지역협의회를 운영하고 있습니다. 부산시는 해양수산부와 함께 2020년 2월에 해양공간관리계획을 수립하였고, 현재 8개의 용도구역으로 나누어 관리하고 있습니다.',
				],
				color: '#987CE4',
				mapTitle: '부산시 해양용도구역 현황',
				activeContentName: 'ocean-resources-space-map',
				sources: [
					'자료 출처: 부산광역시 및 해양수산부(2020), 부산 해양공간관리계획',
					'자료 출처: 해양공간통합관리정보시스템(https://www.msp.go.kr/)',
				],
			},
			{
				id: 'economy',
				title: '경제적 가치',
				block: 'center',
				page: 3,
				content: [
					"부산시는 매년 4-5월에 지역의 모든 해양 관련 기업들을 직접 방문하여 조사를 실시합니다. 이를 '부산해양산업조사'라고 하며, 이 조사를 통해 부산의 해양산업이 어떻게 발전하고 있는지 파악합니다.",
					'조사는 부산에 있는 해양 관련 기업이면 모두 대상이 됩니다. 직원이 한 명이라도 있는 모든 기업을 방문하여 조사합니다. 주로 기업의 매출과 운영 상태, 앞으로의 사업 계획 등을 조사합니다.',
					'이렇게 모은 정보는 부산의 해양산업을 발전시키는 데 중요한 자료가 됩니다. 크고 작은 모든 기업을 조사하기 때문에, 부산의 해양산업 전체 모습을 정확하게 파악할 수 있습니다. 이 자료를 바탕으로 부산시는 해양산업 발전을 위한 여러 가지 정책을 만들고 지원 계획을 세웁니다.',
				],
				tableData: {
					head: ['2022년 기준', '사업체수(개소)', '종사자수(명)', '매출액(조)'],
					body: [
						['전체 사업체', 400565, 1554664, 394.6],
						['해양사업체', 30044, 159943, 59.6],
					],
				},
				color: '#5F97E0',
				graphTitle: '부산시 해양산업분류별 산업분포(사업체, 종사자, 매출액)',
				image: 'ocean-resources-economy-info',
				mapTitle: '부산시 지역별 해양사업체 현황',
				activeContentName: 'ocean-resources-economy-map',
				sources: ['* 자료 출처: 부산광역시(2024), 2023 부산해양산업조사'],
			},
		],
	},
	{
		id: 'ocean-env-reality',
		title: '위기의 바다, 현주소',
		block: 'start',
		icon: 'ocean-env-reality.svg',
		page: 3,
		activeContentName: 'ocean-env-reality-marinedebris-map',
		items: [
			{
				id: 'marinedebris',
				title: '해양쓰레기',
				block: 'center',
				page: 3,
				content: [
					'부산시의 해양쓰레기 문제는 날로 심각해지고 있는 환경 현안입니다. 해상에서 발생하는 쓰레기의 주요 원인은 어업 활동 중 유실되거나 방치되는 어구와 어망, 그리고 양식장과 선박에서 발생하는 폐스티로폼입니다.',
					'해양쓰레기는 전국의 하천을 통해 바다로 유입되며, 해류를 따라 광범위하게 이동하면서 연안 지역부터 먼바다까지 영향을 미치고 있습니다. 특히 조류의 흐름이 복잡한 지역에서는 쓰레기가 더욱 집중적으로 축적되는 현상이 나타나고 있습니다.',
					'특히 해양생태계에 미치는 영향이 심각한데, 해양 생물종의 약 88%가 해양쓰레기로 인한 부정적인 영향을 받고 있습니다. 이에 부산시는 정기적인 수거 활동, 어업인 교육, 제도적 장치 마련 등 다양한 해양쓰레기 저감 정책을 시행하고 있으며, 이러한 정책의 성공을 위해서는 시민들의 적극적인 참여가 필수적입니다.',
				],
				color: '#EEAB3C',
				mapTitle: '부산시 지역별 해양쓰레기 분포',
				graphTitle: '부산시 해양쓰레기 현황(단위: 톤)',
				activeContentName: 'ocean-env-reality-marinedebris-map',
				image: 'ocean-env-reality-marinedebris-info',
			},
			{
				id: 'finedust',
				title: '항만 미세먼지',
				block: 'center',
				page: 3,
				content: [
					'부산항은 대한민국 최대의 물류 중심지로서, 선박, 하역장비, 화물차량 등에서 상당한 양의 대기오염 물질이 배출되고 있습니다. 특히 주목할 만한 점은 부산항만의 미세먼지 발생량 중 94.79%가 선박에서 발생하고 있습니다.',
					'부산항에서 발생하는 미세먼지는 부산 전체 미세먼지 배출량의 50% 이상을 차지할 정도로 심각한 수준입니다. 이러한 항만 배출 미세먼지는 울산과 경남 창원 등 인근 산업단지가 밀집된 지역에까지 영향을 미치고 있어, 광역적인 대기오염 문제를 야기하고 있습니다.',
					'이는 단순히 부산항의 문제를 넘어서 주변 도시들의 대기질에도 상당한 영향을 미치는 환경문제로 발전하고 있으며, 체계적인 관리와 저감 대책이 시급한 상황입니다.',
				],
				color: '#987CE4',
				mapTitle: [
					'부산시 항만 미세먼지 현황(구별 연평균)',
					'부산시 항만 초미세먼지 현황(구별 연평균)',
				],
				graphTitle: [
					'부산시 월별 미세먼지/초미세먼지 변화(부산 평균)',
					'부산시 동별 미세먼지/초미세먼지 평균',
				],
				activeContentName: 'ocean-env-reality-finedust-map',
				image: 'ocean-env-reality-finedust-info',
				tableData: {
					head: [
						['구분', '예보등급'],
						['좋음', '보통', '나쁨', '매우 나쁨'],
					],
					body: [
						['미세먼지(PM-10)', '0-30', '31-80', '81-150', '≥ 151'],
						['초미세먼지(PM-2.5)', '0-15', '16-35', '36-75', '≥ 76'],
					],
				},
			},
			{
				id: 'revenuerecognition',
				title: '해양산업',
				block: 'center',
				page: 3,
				content: [
					'부산의 해양 관련 기업 중 절반 정도가 작년보다 경영 상태가 나빠졌다고 응답했습니다. 많은 기업이 어려움을 겪고 있습니다.',
					'기업들이 발전하는 데 가장 큰 어려움으로 꼽은 것은 정부의 지원 부족(23.8%)과 전문 인력을 구하기 어렵다는 점(22.9%)입니다. 이러한 문제들을 해결하기 위해서는 산업 전반의 체계적인 개선이 필요합니다.',
					'또 하나의 중요한 문제는 해양 분야의 핵심 기술력이 서울과 경기도 등 수도권에 70%나 몰려있다는 점입니다. 이에 따라 부산을 비롯한 지방의 해양산업이 독자적으로 성장하기 어려운 상황입니다. 지역 간 균형 있는 발전과 우리나라 해양산업의 경쟁력을 높이기 위해서는 이러한 문제를 반드시 해결해야 합니다.',
				],
				color: '#5F97E0',
				mapTitle: '부산시 수익이출 대상지역(광역시도)',
				graphTitle: [
					'전년대비 경영실적',
					'해양산업 발전 장애요인',
					'부산 해양산업 실태',
				],
				activeContentName: 'ocean-env-reality-revenuerecognition-map',
				image: 'ocean-env-reality-revenuerecognition-info',
			},
		],
	},
	{
		id: 'ocean-sustain',
		title: '푸른 미래를 위한 약속',
		block: 'start',
		page: 3,
		icon: 'ocean-sustain.svg',
		activeContentName: 'ocean-sustain-recognition-graph',
		items: [
			{
				id: 'recognition',
				title: '지속가능성 인식',
				block: 'center',
				page: 3,
				activeContentName: 'ocean-sustain-recognition-graph',
				content: [
					"지속가능한 발전이란 '환경을 지키면서 발전하는 것'을 말합니다. 이는 마치 황금알을 낳는 거위를 키우는 것과 같습니다. 당장의 이익만 생각해서 환경을 망가뜨리면, 이를 되돌리는 데 훨씬 더 많은 시간과 비용이 들고, 결국 더 이상 발전할 수 없게 됩니다.",
					'하지만 환경을 잘 보호하면서 발전해 나간다면, 우리 세대뿐만 아니라 우리 자녀들의 세대까지 계속해서 좋은 환경 속에서 살아갈 수 있습니다. 이는 거위를 잘 돌보면 계속해서 황금알을 얻을 수 있는 것과 같은 이치입니다.',
					'결국 우리의 소중한 자원인 환경을 지키기 위해서는 지구를 잘 보살펴야 합니다. 당장의 이익보다는 먼 미래를 바라보며 환경과 발전이 함께 가는 길을 찾아야 합니다. 이것이 바로 현재와 미래가 함께 잘 살 수 있는 지속가능한 발전의 가장 중요한 점입니다.',
				],
				color: '#EEAB3C',
				graphTitle: ['바다가 당신 삶에 얼마나 중요한가요?'],
				sources: [
					'* 자료 출처: 부산 해양도시 지속가능성 인식 설문조사 결과(2024년 12월)',
				],
			},
			{
				id: 'sustainability',
				title: '해양의 지속가능성',
				block: 'center',
				page: 3,
				activeContentName: 'ocean-sustain-sustainability-venn',
				content: [
					'바다는 우리 생활에 매우 중요한 공간입니다. 물고기와 해산물을 제공하고, 배들이 다니는 길이 되며, 우리가 휴식을 취하는 공간이 되는 등 다양한 혜택을 주고 있습니다. 해양 지속가능성”은 해양자원을 현재의 필요를 충족하면서도 미래 세대를 위해 해양생태계의 건강성과 생산성을 훼손하지 않고 사용하고 관리하는 것을 의미합니다.',
					'우리는 바다를 이용할 때 항상 장기적인 관점에서 생각해야 합니다. 해양쓰레기를 줄이고, 바다 생물들의 서식지를 보호하며, 해양자원을 적절하게 이용하는 것이 중요합니다. 이렇게 할 때 우리 세대뿐만 아니라 미래 세대들도 계속해서 바다의 혜택을 누릴 수 있을 것입니다. 해양의 지속가능성을 시스템적으로 이해하기 위해 환경, 경제, 사회 측면을 통합적으로 고려하여야 합니다.',
				],
				color: '#987CE4',
				graphTitle: ['해양 지속가능성 핵심 요소'],
			},
			{
				id: 'current',
				title: '부산의 해양 지속가능성 현황',
				block: 'center',
				page: 3,
				activeContentName: 'ocean-sustain-current-ldgs-map',
				content: [
					'바다는 우리 생활에 다양한 혜택을 제공합니다. 먹거리를 제공하고, 지구의 기후를 조절하며, 오염물질을 정화하고, 여러 자원을 제공할 뿐만 아니라 관광과 여가 활동의 장소가 되기도 합니다. 특히 부산의 바다는 아름다운 경관과 건강한 해양환경을 자랑합니다.',
					'그러나 이러한 해양생태계가 기후변화, 환경오염, 이용과 개발로 인해 훼손되고 있어 해양의 지속가능성을 위협하고 있습니다. 해양의 지속가능성을 진단하기 위해 해양생태계, 해양생태계 서비스, 해양사회 및 인적자본, 해양정책과 거버넌스 영역별 수준을 정량적으로 평가하였습니다. 평가 결과 4개 영역 중 해양생태계와 해양생태계 서비스 영역의 부산 점수가 전국 평균에 비해 높은 수준을 나타내고 있었습니다.',
					'특히, 부산 바다의 가치를 구체적으로 확인하기 위해 해안가 호텔의 바다 전망(오션뷰) 객실 현황을 조사했습니다. 많은 관광객이 바다가 보이는 객실을 선호하고 이용한다는 것은, 그만큼 부산의 바다 경관이 특별한 가치를 가지고 있다는 것을 보여줍니다.',
				],
				color: '#5F97E0',
				mapTitle: ['오션뷰 호텔 현황'],
				image: ['ocean-sustain-current-ocean-hotel-info'],
				mapId: ['ldgs'],
			},
		],
	},
	{
		id: 'ocean-coexistence',
		title: '바다와 함께 성장하는 부산',
		block: 'start',
		page: 4,
		icon: 'ocean-coexistence.svg',
		items: [
			{
				id: 'policy',
				title: '해양환경 및 산업 정책',
				image: 'ocean-coexistence-policy.svg',
				block: 'start',
				page: 4,
			},
			{
				id: 'vision',
				title: '해양도시 비전',
				image: 'ocean-coexistence-vision.svg',
				block: 'start',
				page: 5,
			},
			{
				id: 'platform',
				title: '부산시 지능형 해양환경 관리지원 플랫폼',
				image: 'ocean-coexistence-platform.svg',
				block: 'start',
				page: 6,
				sources: [
					'* 이 스토리맵은 부산시 "데이터 기반 지능형 해양환경 관리지원 플랫폼 개발사업" 일환으로 제작되었습니다.',
				],
			},
		],
	},
];

const pages: string[] = [
	'',
	'ocean-index',
	'ocean-story',
	'ocean-resources',
	'ocean-coexistence',
	'ocean-coexistence-vision',
	'ocean-coexistence-platform',
];

const getSection = (id: string) => {
	return sections.find((section: any) => section.id === id);
};

const getContentData = (id: string) => {
	return getSection('ocean-index')?.items?.find((item: any) => item.id === id);
};

const isBlockStart = (id: string) => {
	return BLOCK_START_LIST.includes(id);
};

const isNavList = (id: string) => {
	return !NOT_NAV_LIST.includes(id);
};

export { sections, getSection, getContentData, pages, isBlockStart, isNavList };
