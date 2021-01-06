import Favorite from './Favorite.js'
import Picture from './Picture.js'
import Price from './Price.js'
import Room from './Room.js'
import Comment from './Comment.js'
import LocalStorage from './localStorage.js'
import _ from '../underscore.js'

class TestData {
	static getData() {
		return {
			data: {
				users: [
					{
						name: 'wjj',
						wx_token: '',
						avatar: '../../static/logo.jpeg'
					}
				],
				rooms: [{
						id: 1,
						city: '东京',
						address: '中央区99 Room 501, unit 6, building 20, North Lane, east flower market,',
						title: "定安·在云端｜网红民宿｜50m凤起路地铁口｜紧邻西湖断桥、嘉里中心｜延安路商圈｜市中心民宿",
						number_of_beds: 1,
						maximum_number_of_people: 3,
						areaage: 76.0,
						number_of_living_room: 1,
						number_of_bedroom: 2,
						special_information: '',
						washing_machine: true,
						iron: true,
						washing_machine: true,
						hair_dryer: true,
						air_conditioner: true,
						wifi: true,
						refrigerator: true,
						television: true,
						kettle: true,
						microwave: true,
						kitchen_ware: true,
						ATM: true,
						wifi: true,
						part: true,
						post_office: true,
						convenience_store: true,
						supermarket: true,
						prices: [],
						pictures: [],
						favorites: [],
						comments: [],
            locations: {
              '日本': {
                '东京': ['千代田区', '中央区', '港区','新宿区','文京区','品川','大田区'],
                '栎木': ['那须'],
                '横滨': ['中区','南区'],
                '冲绳': ['宫古岛','宜野湾','石垣','那霸'],
                '神奈川': ['小田原','藤'],
                '千叶': ['船桥','山武郡']
              },
              '泰国': {
                '曼谷': ['Central lumpini','pathumwan','Sukhumvit','Late Sukhumvit']
              }
            }
					},
          {
          		id: 26,
          		city: '千叶',
          		address: '中央区99 Room 501, unit 6, building 20, North Lane, east flower market,',
          		title: "定安·在云端｜网红民宿｜50m凤起路地铁口｜紧邻西湖断桥、嘉里中心｜延安路商圈｜市中心民宿",
          		number_of_beds: 1,
          		maximum_number_of_people: 4,
          		areaage: 76.0,
          		number_of_living_room: 1,
          		number_of_bedroom: 2,
          		special_information: '',
          		washing_machine: true,
          		iron: true,
          		washing_machine: true,
          		hair_dryer: true,
          		air_conditioner: true,
          		wifi: true,
          		refrigerator: true,
          		television: true,
          		kettle: true,
          		microwave: true,
          		kitchen_ware: true,
          		ATM: true,
          		wifi: true,
          		part: true,
          		post_office: true,
          		convenience_store: true,
          		supermarket: true,
          		prices: [],
          		pictures: [],
          		favorites: [],
          		comments: [],
              locations: {
                '日本': {
                  '东京': ['千代田区', '中央区', '港区','新宿区','文京区','品川','大田区'],
                  '栎木': ['那须'],
                  '横滨': ['中区','南区'],
                  '冲绳': ['宫古岛','宜野湾','石垣','那霸'],
                  '神奈川': ['小田原','藤'],
                  '千叶': ['船桥','山武郡']
                },
                '泰国': {
                  '曼谷': ['Central lumpini','pathumwan','Sukhumvit','Late Sukhumvit']
                }
              }
          	},{
						id: 25,
						city: '栎木',
						address: '中央区99 Room 501, unit 6, building 20, North Lane, east flower market,',
						title: "定安·在云端｜网红民宿｜50m凤起路地铁口｜紧邻西湖断桥、嘉里中心｜延安路商圈｜市中心民宿",
						number_of_beds: 1,
						maximum_number_of_people: 4,
						areaage: 76.0,
						number_of_living_room: 1,
						number_of_bedroom: 2,
						special_information: '',
						washing_machine: true,
						iron: true,
						washing_machine: true,
						hair_dryer: true,
						air_conditioner: true,
						wifi: true,
						refrigerator: true,
						television: true,
						kettle: true,
						microwave: true,
						kitchen_ware: true,
						ATM: true,
						wifi: true,
						part: true,
						post_office: true,
						convenience_store: true,
						supermarket: true,
						prices: [],
						pictures: [],
						favorites: [],
						comments: [],
            locations: {
              '日本': {
                '东京': ['千代田区', '中央区', '港区','新宿区','文京区','品川','大田区'],
                '栎木': ['那须'],
                '横滨': ['中区','南区'],
                '冲绳': ['宫古岛','宜野湾','石垣','那霸'],
                '神奈川': ['小田原','藤'],
                '千叶': ['船桥','山武郡']
              },
              '泰国': {
                '曼谷': ['Central lumpini','pathumwan','Sukhumvit','Late Sukhumvit']
              }
            }
					},{
						id: 21,
						city: '千叶',
						address: '中央区99 Room 501, unit 6, building 20, North Lane, east flower market,',
						title: "定安·在云端｜网红民宿｜50m凤起路地铁口｜紧邻西湖断桥、嘉里中心｜延安路商圈｜市中心民宿",
						number_of_beds: 1,
						maximum_number_of_people: 2,
						areaage: 76.0,
						number_of_living_room: 1,
						number_of_bedroom: 2,
						special_information: '',
						washing_machine: true,
						iron: true,
						washing_machine: true,
						hair_dryer: true,
						air_conditioner: true,
						wifi: true,
						refrigerator: true,
						television: true,
						kettle: true,
						microwave: true,
						kitchen_ware: true,
						ATM: true,
						wifi: true,
						part: true,
						post_office: true,
						convenience_store: true,
						supermarket: true,
						prices: [],
						pictures: [],
						favorites: [],
						comments: [],
            locations: {
              '日本': {
                '东京': ['千代田区', '中央区', '港区','新宿区','文京区','品川','大田区'],
                '栎木': ['那须'],
                '横滨': ['中区','南区'],
                '冲绳': ['宫古岛','宜野湾','石垣','那霸'],
                '神奈川': ['小田原','藤'],
                '千叶': ['船桥','山武郡']
              },
              '泰国': {
                '曼谷': ['Central lumpini','pathumwan','Sukhumvit','Late Sukhumvit']
              }
            }
					},{
						id: 20,
						city: '栎木',
						address: '中央区99 Room 501, unit 6, building 20, North Lane, east flower market,',
						title: "定安·在云端｜网红民宿｜50m凤起路地铁口｜紧邻西湖断桥、嘉里中心｜延安路商圈｜市中心民宿",
						number_of_beds: 1,
						maximum_number_of_people: 4,
						areaage: 76.0,
						number_of_living_room: 1,
						number_of_bedroom: 2,
						special_information: '',
						washing_machine: true,
						iron: true,
						washing_machine: true,
						hair_dryer: true,
						air_conditioner: true,
						wifi: true,
						refrigerator: true,
						television: true,
						kettle: true,
						microwave: true,
						kitchen_ware: true,
						ATM: true,
						wifi: true,
						part: true,
						post_office: true,
						convenience_store: true,
						supermarket: true,
						prices: [],
						pictures: [],
						favorites: [],
						comments: [],
            locations: {
              '日本': {
                '东京': ['千代田区', '中央区', '港区','新宿区','文京区','品川','大田区'],
                '栎木': ['那须'],
                '横滨': ['中区','南区'],
                '冲绳': ['宫古岛','宜野湾','石垣','那霸'],
                '神奈川': ['小田原','藤'],
                '千叶': ['船桥','山武郡']
              },
              '泰国': {
                '曼谷': ['Central lumpini','pathumwan','Sukhumvit','Late Sukhumvit']
              }
            }
					},{
						id: 19,
						city: '横滨',
						address: '中央区99 Room 501, unit 6, building 20, North Lane, east flower market,',
						title: "定安·在云端｜网红民宿｜50m凤起路地铁口｜紧邻西湖断桥、嘉里中心｜延安路商圈｜市中心民宿",
						number_of_beds: 1,
						maximum_number_of_people: 5,
						areaage: 76.0,
						number_of_living_room: 1,
						number_of_bedroom: 2,
						special_information: '',
						washing_machine: true,
						iron: true,
						washing_machine: true,
						hair_dryer: true,
						air_conditioner: true,
						wifi: true,
						refrigerator: true,
						television: true,
						kettle: true,
						microwave: true,
						kitchen_ware: true,
						ATM: true,
						wifi: true,
						part: true,
						post_office: true,
						convenience_store: true,
						supermarket: true,
						prices: [],
						pictures: [],
						favorites: [],
						comments: [],
            locations: {
              '日本': {
                '东京': ['千代田区', '中央区', '港区','新宿区','文京区','品川','大田区'],
                '栎木': ['那须'],
                '横滨': ['中区','南区'],
                '冲绳': ['宫古岛','宜野湾','石垣','那霸'],
                '神奈川': ['小田原','藤'],
                '千叶': ['船桥','山武郡']
              },
              '泰国': {
                '曼谷': ['Central lumpini','pathumwan','Sukhumvit','Late Sukhumvit']
              }
            }
					},{
						id: 18,
						city: '横滨',
						address: '中央区99 Room 501, unit 6, building 20, North Lane, east flower market,',
						title: "定安·在云端｜网红民宿｜50m凤起路地铁口｜紧邻西湖断桥、嘉里中心｜延安路商圈｜市中心民宿",
						number_of_beds: 1,
						maximum_number_of_people: 2,
						areaage: 76.0,
						number_of_living_room: 1,
						number_of_bedroom: 2,
						special_information: '',
						washing_machine: true,
						iron: true,
						washing_machine: true,
						hair_dryer: true,
						air_conditioner: true,
						wifi: true,
						refrigerator: true,
						television: true,
						kettle: true,
						microwave: true,
						kitchen_ware: true,
						ATM: true,
						wifi: true,
						part: true,
						post_office: true,
						convenience_store: true,
						supermarket: true,
						prices: [],
						pictures: [],
						favorites: [],
						comments: [],
            locations: {
              '日本': {
                '东京': ['千代田区', '中央区', '港区','新宿区','文京区','品川','大田区'],
                '栎木': ['那须'],
                '横滨': ['中区','南区'],
                '冲绳': ['宫古岛','宜野湾','石垣','那霸'],
                '神奈川': ['小田原','藤'],
                '千叶': ['船桥','山武郡']
              },
              '泰国': {
                '曼谷': ['Central lumpini','pathumwan','Sukhumvit','Late Sukhumvit']
              }
            }
					},{
						id: 18,
						city: '横滨',
						address: '中央区99 Room 501, unit 6, building 20, North Lane, east flower market,',
						title: "定安·在云端｜网红民宿｜50m凤起路地铁口｜紧邻西湖断桥、嘉里中心｜延安路商圈｜市中心民宿",
						number_of_beds: 1,
						maximum_number_of_people: 4,
						areaage: 76.0,
						number_of_living_room: 1,
						number_of_bedroom: 2,
						special_information: '',
						washing_machine: true,
						iron: true,
						washing_machine: true,
						hair_dryer: true,
						air_conditioner: true,
						wifi: true,
						refrigerator: true,
						television: true,
						kettle: true,
						microwave: true,
						kitchen_ware: true,
						ATM: true,
						wifi: true,
						part: true,
						post_office: true,
						convenience_store: true,
						supermarket: true,
						prices: [],
						pictures: [],
						favorites: [],
						comments: [],
            locations: {
              '日本': {
                '东京': ['千代田区', '中央区', '港区','新宿区','文京区','品川','大田区'],
                '栎木': ['那须'],
                '横滨': ['中区','南区'],
                '冲绳': ['宫古岛','宜野湾','石垣','那霸'],
                '神奈川': ['小田原','藤'],
                '千叶': ['船桥','山武郡']
              },
              '泰国': {
                '曼谷': ['Central lumpini','pathumwan','Sukhumvit','Late Sukhumvit']
              }
            }
					},{
						id: 17,
						city: '千叶',
						address: '中央区99 Room 501, unit 6, building 20, North Lane, east flower market,',
						title: "定安·在云端｜网红民宿｜50m凤起路地铁口｜紧邻西湖断桥、嘉里中心｜延安路商圈｜市中心民宿",
						number_of_beds: 1,
						maximum_number_of_people: 3,
						areaage: 76.0,
						number_of_living_room: 1,
						number_of_bedroom: 2,
						special_information: '',
						washing_machine: true,
						iron: true,
						washing_machine: true,
						hair_dryer: true,
						air_conditioner: true,
						wifi: true,
						refrigerator: true,
						television: true,
						kettle: true,
						microwave: true,
						kitchen_ware: true,
						ATM: true,
						wifi: true,
						part: true,
						post_office: true,
						convenience_store: true,
						supermarket: true,
						prices: [],
						pictures: [],
						favorites: [],
						comments: [],
            locations: {
              '日本': {
                '东京': ['千代田区', '中央区', '港区','新宿区','文京区','品川','大田区'],
                '栎木': ['那须'],
                '横滨': ['中区','南区'],
                '冲绳': ['宫古岛','宜野湾','石垣','那霸'],
                '神奈川': ['小田原','藤'],
                '千叶': ['船桥','山武郡']
              },
              '泰国': {
                '曼谷': ['Central lumpini','pathumwan','Sukhumvit','Late Sukhumvit']
              }
            }
					},{
						id: 16,
						city: '神奈川',
						address: '中央区99 Room 501, unit 6, building 20, North Lane, east flower market,',
						title: "定安·在云端｜网红民宿｜50m凤起路地铁口｜紧邻西湖断桥、嘉里中心｜延安路商圈｜市中心民宿",
						number_of_beds: 1,
						maximum_number_of_people: 2,
						areaage: 76.0,
						number_of_living_room: 1,
						number_of_bedroom: 2,
						special_information: '',
						washing_machine: true,
						iron: true,
						washing_machine: true,
						hair_dryer: true,
						air_conditioner: true,
						wifi: true,
						refrigerator: true,
						television: true,
						kettle: true,
						microwave: true,
						kitchen_ware: true,
						ATM: true,
						wifi: true,
						part: true,
						post_office: true,
						convenience_store: true,
						supermarket: true,
						prices: [],
						pictures: [],
						favorites: [],
						comments: [],
            locations: {
              '日本': {
                '东京': ['千代田区', '中央区', '港区','新宿区','文京区','品川','大田区'],
                '栎木': ['那须'],
                '横滨': ['中区','南区'],
                '冲绳': ['宫古岛','宜野湾','石垣','那霸'],
                '神奈川': ['小田原','藤'],
                '千叶': ['船桥','山武郡']
              },
              '泰国': {
                '曼谷': ['Central lumpini','pathumwan','Sukhumvit','Late Sukhumvit']
              }
            }
					},{
						id: 1,
						city: '神奈川',
						address: '那霸99 Room 501, unit 6, building 20, North Lane, east flower market,',
						title: "定安·在云端｜网红民宿｜50m凤起路地铁口｜紧邻西湖断桥、嘉里中心｜延安路商圈｜市中心民宿",
						number_of_beds: 1,
						maximum_number_of_people: 3,
						areaage: 76.0,
						number_of_living_room: 1,
						number_of_bedroom: 2,
						special_information: '',
						washing_machine: true,
						iron: true,
						washing_machine: true,
						hair_dryer: true,
						air_conditioner: true,
						wifi: true,
						refrigerator: true,
						television: true,
						kettle: true,
						microwave: true,
						kitchen_ware: true,
						ATM: true,
						wifi: true,
						part: true,
						post_office: true,
						convenience_store: true,
						supermarket: true,
						prices: [],
						pictures: [],
						favorites: [],
						comments: [],
            locations: {
              '日本': {
                '东京': ['千代田区', '中央区', '港区','新宿区','文京区','品川','大田区'],
                '栎木': ['那须'],
                '横滨': ['中区','南区'],
                '冲绳': ['宫古岛','宜野湾','石垣','那霸'],
                '神奈川': ['小田原','藤'],
                '千叶': ['船桥','山武郡']
              },
              '泰国': {
                '曼谷': ['Central lumpini','pathumwan','Sukhumvit','Late Sukhumvit']
              }
            }
					},{
						id: 13,
						city: '神奈川',
						address: '中央区99 Room 501, unit 6, building 20, North Lane, east flower market,',
						title: "定安·在云端｜网红民宿｜50m凤起路地铁口｜紧邻西湖断桥、嘉里中心｜延安路商圈｜市中心民宿",
						number_of_beds: 1,
						maximum_number_of_people: 3,
						areaage: 76.0,
						number_of_living_room: 1,
						number_of_bedroom: 2,
						special_information: '',
						washing_machine: true,
						iron: true,
						washing_machine: true,
						hair_dryer: true,
						air_conditioner: true,
						wifi: true,
						refrigerator: true,
						television: true,
						kettle: true,
						microwave: true,
						kitchen_ware: true,
						ATM: true,
						wifi: true,
						part: true,
						post_office: true,
						convenience_store: true,
						supermarket: true,
						prices: [],
						pictures: [],
						favorites: [],
						comments: [],
            locations: {
              '日本': {
                '东京': ['千代田区', '中央区', '港区','新宿区','文京区','品川','大田区'],
                '栎木': ['那须'],
                '横滨': ['中区','南区'],
                '冲绳': ['宫古岛','宜野湾','石垣','那霸'],
                '神奈川': ['小田原','藤'],
                '千叶': ['船桥','山武郡']
              },
              '泰国': {
                '曼谷': ['Central lumpini','pathumwan','Sukhumvit','Late Sukhumvit']
              }
            }
					},{
						id: 12,
						city: '冲绳',
						address: '中央区99 Room 501, unit 6, building 20, North Lane, east flower market,',
						title: "定安·在云端｜网红民宿｜50m凤起路地铁口｜紧邻西湖断桥、嘉里中心｜延安路商圈｜市中心民宿",
						number_of_beds: 1,
						maximum_number_of_people: 2,
						areaage: 76.0,
						number_of_living_room: 1,
						number_of_bedroom: 2,
						special_information: '',
						washing_machine: true,
						iron: true,
						washing_machine: true,
						hair_dryer: true,
						air_conditioner: true,
						wifi: true,
						refrigerator: true,
						television: true,
						kettle: true,
						microwave: true,
						kitchen_ware: true,
						ATM: true,
						wifi: true,
						part: true,
						post_office: true,
						convenience_store: true,
						supermarket: true,
						prices: [],
						pictures: [],
						favorites: [],
						comments: [],
            locations: {
              '日本': {
                '东京': ['千代田区', '中央区', '港区','新宿区','文京区','品川','大田区'],
                '栎木': ['那须'],
                '横滨': ['中区','南区'],
                '冲绳': ['宫古岛','宜野湾','石垣','那霸'],
                '神奈川': ['小田原','藤'],
                '千叶': ['船桥','山武郡']
              },
              '泰国': {
                '曼谷': ['Central lumpini','pathumwan','Sukhumvit','Late Sukhumvit']
              }
            }
					},{
						id: 10,
						city: '栎木',
						address: '中央区99 Room 501, unit 6, building 20, North Lane, east flower market,',
						title: "定安·在云端｜网红民宿｜50m凤起路地铁口｜紧邻西湖断桥、嘉里中心｜延安路商圈｜市中心民宿",
						number_of_beds: 1,
						maximum_number_of_people: 1,
						areaage: 76.0,
						number_of_living_room: 1,
						number_of_bedroom: 2,
						special_information: '',
						washing_machine: true,
						iron: true,
						washing_machine: true,
						hair_dryer: true,
						air_conditioner: true,
						wifi: true,
						refrigerator: true,
						television: true,
						kettle: true,
						microwave: true,
						kitchen_ware: true,
						ATM: true,
						wifi: true,
						part: true,
						post_office: true,
						convenience_store: true,
						supermarket: true,
						prices: [],
						pictures: [],
						favorites: [],
						comments: [],
            locations: {
              '日本': {
                '东京': ['千代田区', '中央区', '港区','新宿区','文京区','品川','大田区'],
                '栎木': ['那须'],
                '横滨': ['中区','南区'],
                '冲绳': ['宫古岛','宜野湾','石垣','那霸'],
                '神奈川': ['小田原','藤'],
                '千叶': ['船桥','山武郡']
              },
              '泰国': {
                '曼谷': ['Central lumpini','pathumwan','Sukhumvit','Late Sukhumvit']
              }
            }
					},{
						id: 9,
						city: '栎木',
						address: '中央区99 Room 501, unit 6, building 20, North Lane, east flower market,',
						title: "定安·在云端｜网红民宿｜50m凤起路地铁口｜紧邻西湖断桥、嘉里中心｜延安路商圈｜市中心民宿",
						number_of_beds: 1,
						maximum_number_of_people: 3,
						areaage: 76.0,
						number_of_living_room: 1,
						number_of_bedroom: 2,
						special_information: '',
						washing_machine: true,
						iron: true,
						washing_machine: true,
						hair_dryer: true,
						air_conditioner: true,
						wifi: true,
						refrigerator: true,
						television: true,
						kettle: true,
						microwave: true,
						kitchen_ware: true,
						ATM: true,
						wifi: true,
						part: true,
						post_office: true,
						convenience_store: true,
						supermarket: true,
						prices: [],
						pictures: [],
						favorites: [],
						comments: [],
            locations: {
              '日本': {
                '东京': ['千代田区', '中央区', '港区','新宿区','文京区','品川','大田区'],
                '栎木': ['那须'],
                '横滨': ['中区','南区'],
                '冲绳': ['宫古岛','宜野湾','石垣','那霸'],
                '神奈川': ['小田原','藤'],
                '千叶': ['船桥','山武郡']
              },
              '泰国': {
                '曼谷': ['Central lumpini','pathumwan','Sukhumvit','Late Sukhumvit']
              }
            }
					},
          {
						id: 2,
						city: '东京',
						address: '千代区99 Room 501, unit 6, building 20, North Lane, east flower market,',
						title: "东京【城宿·韶光】ins风一居室|步行至西湖|湖滨商圈|近凤起路地铁站-500米",
						number_of_beds: 2,
						maximum_number_of_people: 4,
						areaage: 112.0,
						number_of_living_room: 1,
						number_of_bedroom: 2,
						special_information: '',
						washing_machine: true,
						iron: true,
						washing_machine: true,
						hair_dryer: true,
						air_conditioner: true,
						wifi: true,
						refrigerator: true,
						television: true,
						kettle: true,
						microwave: true,
						kitchen_ware: false,
						ATM: true,
						wifi: true,
						part: true,
						post_office: true,
						convenience_store: true,
						supermarket: true,
						prices: [],
						pictures: [],
						favorites: [],
						comments:[],
            locations: {
              '日本': {
                '东京': ['千代田区', '中央区', '港区','新宿区','文京区','品川','大田区'],
                '栎木': ['那须'],
                '横滨': ['中区','南区'],
                '冲绳': ['宫古岛','宜野湾','石垣','那霸'],
                '神奈川': ['小田原','藤'],
                '千叶': ['船桥','山武郡']
              },
              '泰国': {
                '曼谷': ['Central lumpini','pathumwan','Sukhumvit','Late Sukhumvit']
              }
            }
					}, {
						id: 3,
						city: '东京',
						address: '千代区99 Room 501, unit 6, building 20, North Lane, east flower market',
						title: "东京圆融02金鸡湖会议中心诚品书店圆融时代广场地铁口附近整套带窗户独立卫浴54平温馨大床可烧饭",
						number_of_beds: 1,
						maximum_number_of_people: 2,
						areaage: 76.0,
						number_of_living_room: 1,
						number_of_bedroom: 2,
						special_information: '',
						washing_machine: true,
						iron: true,
						washing_machine: true,
						hair_dryer: true,
						air_conditioner: true,
						wifi: true,
						refrigerator: true,
						television: true,
						kettle: true,
						microwave: true,
						kitchen_ware: true,
						ATM: true,
						wifi: true,
						part: true,
						post_office: true,
						convenience_store: true,
						supermarket: true,
						prices: [],
						pictures: [],
						favorites: [],
						comments:[],
            locations: {
              '日本': {
                '东京': ['千代田区', '中央区', '港区','新宿区','文京区','品川','大田区'],
                '栎木': ['那须'],
                '横滨': ['中区','南区'],
                '冲绳': ['宫古岛','宜野湾','石垣','那霸'],
                '神奈川': ['小田原','藤'],
                '千叶': ['船桥','山武郡']
              },
              '泰国': {
                '曼谷': ['Central lumpini','pathumwan','Sukhumvit','Late Sukhumvit']
              }
            }
					},			
					{
						id: 4,
						city: '曼谷',
						address: '中央区99 Room 501, unit 6, building 20, North Lane, east flower market,',
						title: "IRON  城景 摄影 近地铁 西湖 奈尔宝 博览中心 奥体 灯光秀 星耀城 星光大道",
						number_of_beds: 1,
						maximum_number_of_people: 3,
						areaage: 76.0,
						number_of_living_room: 1,
						number_of_bedroom: 2,
						special_information: '',
						washing_machine: true,
						iron: true,
						washing_machine: true,
						hair_dryer: true,
						air_conditioner: true,
						wifi: true,
						refrigerator: true,
						television: true,
						kettle: true,
						microwave: true,
						kitchen_ware: true,
						ATM: true,
						wifi: true,
						part: true,
						post_office: true,
						convenience_store: true,
						supermarket: true,
						prices: [],
						pictures: [],
						favorites: [],
						comments: [],
            locations: {
              '日本': {
                '东京': ['千代田区', '中央区', '港区','新宿区','文京区','品川','大田区'],
                '栎木': ['那须'],
                '横滨': ['中区','南区'],
                '冲绳': ['宫古岛','宜野湾','石垣','那霸'],
                '神奈川': ['小田原','藤'],
                '千叶': ['船桥','山武郡']
              },
              '泰国': {
                '曼谷': ['Central lumpini','pathumwan','Sukhumvit','Late Sukhumvit']
              }
            }
					}, {
						id: 4,
						city: '曼谷',
						address: '港区99 Room 501, unit 6, building 20, North Lane, east flower market,',
						title: "滨江270度江景loft高档公寓 近地铁口 奥体 16分钟可到西湖近萧山机场",
						number_of_beds: 1,
						maximum_number_of_people: 3,
						areaage: 76.0,
						number_of_living_room: 1,
						number_of_bedroom: 2,
						special_information: '',
						washing_machine: true,
						iron: true,
						washing_machine: true,
						hair_dryer: true,
						air_conditioner: true,
						wifi: true,
						refrigerator: true,
						television: true,
						kettle: true,
						microwave: true,
						kitchen_ware: true,
						ATM: true,
						wifi: true,
						part: true,
						post_office: true,
						convenience_store: true,
						supermarket: true,
						prices: [],
						pictures: [],
						favorites: [],
						comments:[],
            locations: {
              '日本': {
                '东京': ['千代田区', '中央区', '港区','新宿区','文京区','品川','大田区'],
                '栎木': ['那须'],
                '横滨': ['中区','南区'],
                '冲绳': ['宫古岛','宜野湾','石垣','那霸'],
                '神奈川': ['小田原','藤'],
                '千叶': ['船桥','山武郡']
              },
              '泰国': {
                '曼谷': ['Central lumpini','pathumwan','Sukhumvit','Late Sukhumvit']
              }
            }
					}, {
						id: 5,
						city: '曼谷',
						address: '99 Room 501, unit 6, building 20, North Lane, east flower market,',
						title: "17#【Big Morning 边工作边旅行】钱塘江景 Loft 近地铁 智能家居可观影设计師的家",
						number_of_beds: 1,
						maximum_number_of_people: 2,
						areaage: 76.0,
						number_of_living_room: 1,
						number_of_bedroom: 2,
						special_information: '',
						washing_machine: true,
						iron: true,
						washing_machine: true,
						hair_dryer: true,
						air_conditioner: true,
						wifi: true,
						refrigerator: true,
						television: true,
						kettle: true,
						microwave: true,
						kitchen_ware: true,
						ATM: true,
						wifi: true,
						part: true,
						post_office: true,
						convenience_store: true,
						supermarket: true,
						prices: [],
						pictures: [],
						favorites: [],
						comments:[],
            locations: {
              '日本': {
                '东京': ['千代田区', '中央区', '港区','新宿区','文京区','品川','大田区'],
                '栎木': ['那须'],
                '横滨': ['中区','南区'],
                '冲绳': ['宫古岛','宜野湾','石垣','那霸'],
                '神奈川': ['小田原','藤'],
                '千叶': ['船桥','山武郡']
              },
              '泰国': {
                '曼谷': ['Central lumpini','pathumwan','Sukhumvit','Late Sukhumvit']
              }
            }
					}, {
						id: 6,
						city: '曼谷',
						address: 'Sukhumvit 99 Room 501, unit 6, building 20, North Lane, east flower market,',
						title: "月租优惠【西湖.翩翩】甜蜜爱情套房/定安路地铁站/近西湖、省中、市一医院，、河坊街南宋御街",
						number_of_beds: 1,
						maximum_number_of_people: 1,
						areaage: 76.0,
						number_of_living_room: 1,
						number_of_bedroom: 2,
						special_information: '',
						washing_machine: true,
						iron: true,
						washing_machine: true,
						hair_dryer: true,
						air_conditioner: true,
						wifi: true,
						refrigerator: true,
						television: true,
						kettle: true,
						microwave: true,
						kitchen_ware: true,
						ATM: true,
						wifi: true,
						part: true,
						post_office: true,
						convenience_store: true,
						supermarket: true,
						prices: [],
						pictures: [],
						favorites: [],
						comments:[],
            locations: {
              '日本': {
                '东京': ['千代田区', '中央区', '港区','新宿区','文京区','品川','大田区'],
                '栎木': ['那须'],
                '横滨': ['中区','南区'],
                '冲绳': ['宫古岛','宜野湾','石垣','那霸'],
                '神奈川': ['小田原','藤'],
                '千叶': ['船桥','山武郡']
              },
              '泰国': {
                '曼谷': ['Central lumpini','pathumwan','Sukhumvit','Late Sukhumvit']
              }
            }
					}, {
						id: 7,
						city: '东京',
						address: '99 Room 501, unit 6, building 20, North Lane, east flower market,',
						title: "月租优惠【西湖.翩翩】甜蜜爱情套房/定安路地铁站/近西湖、省中、市一医院，、河坊街南宋御街",
						number_of_beds: 1,
						maximum_number_of_people: 4,
						areaage: 76.0,
						number_of_living_room: 1,
						number_of_bedroom: 2,
						special_information: '',
						washing_machine: true,
						iron: true,
						washing_machine: true,
						hair_dryer: true,
						air_conditioner: true,
						wifi: true,
						refrigerator: true,
						television: true,
						kettle: true,
						microwave: true,
						kitchen_ware: true,
						ATM: true,
						wifi: true,
						part: true,
						post_office: true,
						convenience_store: true,
						supermarket: true,
						prices: [],
						pictures: [],
						favorites: [],
						comments:[],
            locations: {
              '日本': {
                '东京': ['千代田区', '中央区', '港区','新宿区','文京区','品川','大田区'],
                '栎木': ['那须'],
                '横滨': ['中区','南区'],
                '冲绳': ['宫古岛','宜野湾','石垣','那霸'],
                '神奈川': ['小田原','藤'],
                '千叶': ['船桥','山武郡']
              },
              '泰国': {
                '曼谷': ['Central lumpini','pathumwan','Sukhumvit','Late Sukhumvit']
              }
            }
					}, {
						id: 8,
						city: '曼谷',
						address: 'Central lumpini99 Room 501, unit 6, building 20, North Lane, east flower market,',
						title: "IRON  城景 摄影 近地铁 西湖 奈尔宝 博览中心 奥体 灯光秀 星耀城 星光大道",
						number_of_beds: 1,
						maximum_number_of_people: 3,
						areaage: 76.0,
						number_of_living_room: 1,
						number_of_bedroom: 2,
						special_information: '',
						washing_machine: true,
						iron: true,
						washing_machine: true,
						hair_dryer: true,
						air_conditioner: true,
						wifi: true,
						refrigerator: true,
						television: true,
						kettle: true,
						microwave: true,
						kitchen_ware: true,
						ATM: true,
						wifi: true,
						part: true,
						post_office: true,
						convenience_store: true,
						supermarket: true,
						prices: [],
						pictures: [],
						favorites: [],
						comments:[],
            locations: {
              '日本': {
                '东京': ['千代田区', '中央区', '港区','新宿区','文京区','品川','大田区'],
                '栎木': ['那须'],
                '横滨': ['中区','南区'],
                '冲绳': ['宫古岛','宜野湾','石垣','那霸'],
                '神奈川': ['小田原','藤'],
                '千叶': ['船桥','山武郡']
              },
              '泰国': {
                '曼谷': ['Central lumpini','pathumwan','Sukhumvit','Late Sukhumvit']
              }
            }
					}
				],
				pictures: [{
						image_file: "https://z1.muscache.cn/im/pictures/7953a6b0-a414-43a9-8c09-9ec5be0b7dae.jpg?aki_policy=large",
						room_id: 1
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/2591a0a5-e6d3-4143-86d7-4f17c95fbb0f.jpg?aki_policy=large",
						room_id: 1
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/cc806a03-ee1f-4cb1-b1ac-cad3ab573858.jpg?aki_policy=large",
						room_id: 1
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/c71a7e4b-3626-4752-ae1a-b20dc064d91a.jpg?aki_policy=large",
						room_id: 2
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
						room_id: 2
					},
					{
						image_file: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
						room_id: 2
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/c71a7e4b-3626-4752-ae1a-b20dc064d91a.jpg?aki_policy=large",
						room_id: 4
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
						room_id: 4
					},
					{
						image_file: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
						room_id: 4
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/2591a0a5-e6d3-4143-86d7-4f17c95fbb0f.jpg?aki_policy=large",
						room_id: 3
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/cc806a03-ee1f-4cb1-b1ac-cad3ab573858.jpg?aki_policy=large",
						room_id: 3
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/c71a7e4b-3626-4752-ae1a-b20dc064d91a.jpg?aki_policy=large",
						room_id: 3
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
						room_id: 3
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
						room_id: 5
					},
          {
          	image_file: "https://z1.muscache.cn/im/pictures/2591a0a5-e6d3-4143-86d7-4f17c95fbb0f.jpg?aki_policy=large",
          	room_id: 7
          },
          {
          	image_file: "https://z1.muscache.cn/im/pictures/cc806a03-ee1f-4cb1-b1ac-cad3ab573858.jpg?aki_policy=large",
          	room_id: 8
          },
          {
          	image_file: "https://z1.muscache.cn/im/pictures/c71a7e4b-3626-4752-ae1a-b20dc064d91a.jpg?aki_policy=large",
          	room_id: 9
          },
          {
          	image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
          	room_id: 10
          },
          {
          	image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
          	room_id: 11
          },
					{
						image_file: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
						room_id: 29
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/2591a0a5-e6d3-4143-86d7-4f17c95fbb0f.jpg?aki_policy=large",
						room_id: 28
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/cc806a03-ee1f-4cb1-b1ac-cad3ab573858.jpg?aki_policy=large",
						room_id: 29
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
						room_id: 6
					},
					{
						image_file: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
						room_id: 6
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/2591a0a5-e6d3-4143-86d7-4f17c95fbb0f.jpg?aki_policy=large",
						room_id: 6
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/cc806a03-ee1f-4cb1-b1ac-cad3ab573858.jpg?aki_policy=large",
						room_id: 28
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
						room_id: 27
					},
					{
						image_file: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
						room_id: 26
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/2591a0a5-e6d3-4143-86d7-4f17c95fbb0f.jpg?aki_policy=large",
						room_id: 25
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/cc806a03-ee1f-4cb1-b1ac-cad3ab573858.jpg?aki_policy=large",
						room_id: 23
					},{
						image_file: "https://z1.muscache.cn/im/pictures/7953a6b0-a414-43a9-8c09-9ec5be0b7dae.jpg?aki_policy=large",
						room_id: 1
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/2591a0a5-e6d3-4143-86d7-4f17c95fbb0f.jpg?aki_policy=large",
						room_id: 1
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/cc806a03-ee1f-4cb1-b1ac-cad3ab573858.jpg?aki_policy=large",
						room_id: 18
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/c71a7e4b-3626-4752-ae1a-b20dc064d91a.jpg?aki_policy=large",
						room_id:18
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
						room_id: 25
					},
					{
						image_file: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
						room_id: 25
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/c71a7e4b-3626-4752-ae1a-b20dc064d91a.jpg?aki_policy=large",
						room_id: 19
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
						room_id: 19
					},
					{
						image_file: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
						room_id: 22
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/2591a0a5-e6d3-4143-86d7-4f17c95fbb0f.jpg?aki_policy=large",
						room_id:21
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/cc806a03-ee1f-4cb1-b1ac-cad3ab573858.jpg?aki_policy=large",
						room_id: 20
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/c71a7e4b-3626-4752-ae1a-b20dc064d91a.jpg?aki_policy=large",
						room_id: 3
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
						room_id: 19
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
						room_id: 18
					},
          {
          	image_file: "https://z1.muscache.cn/im/pictures/2591a0a5-e6d3-4143-86d7-4f17c95fbb0f.jpg?aki_policy=large",
          	room_id: 17
          },
          {
          	image_file: "https://z1.muscache.cn/im/pictures/cc806a03-ee1f-4cb1-b1ac-cad3ab573858.jpg?aki_policy=large",
          	room_id: 15
          },
          {
          	image_file: "https://z1.muscache.cn/im/pictures/c71a7e4b-3626-4752-ae1a-b20dc064d91a.jpg?aki_policy=large",
          	room_id: 14
          },
          {
          	image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
          	room_id: 13
          },
          {
          	image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
          	room_id: 12
          }, {
          	image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
          	room_id: 12
          }, {
          	image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
          	room_id: 12
          },
					{
						image_file: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
						room_id: 11
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/2591a0a5-e6d3-4143-86d7-4f17c95fbb0f.jpg?aki_policy=large",
						room_id: 10
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/cc806a03-ee1f-4cb1-b1ac-cad3ab573858.jpg?aki_policy=large",
						room_id: 9
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
						room_id: 8
					},
					{
						image_file: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
						room_id: 7
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/2591a0a5-e6d3-4143-86d7-4f17c95fbb0f.jpg?aki_policy=large",
						room_id: 6
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/cc806a03-ee1f-4cb1-b1ac-cad3ab573858.jpg?aki_policy=large",
						room_id: 5
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
						room_id: 4
					},{
						image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
						room_id: 16
					},{
						image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
						room_id: 16
					},{
						image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
						room_id: 8
					},{
						image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
						room_id: 17
					},{
						image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
						room_id: 17
					},{
						image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
						room_id: 17
					},{
						image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
						room_id: 17
					},
					{
						image_file: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
						room_id: 3
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/2591a0a5-e6d3-4143-86d7-4f17c95fbb0f.jpg?aki_policy=large",
						room_id: 2
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/cc806a03-ee1f-4cb1-b1ac-cad3ab573858.jpg?aki_policy=large",
						room_id: 1
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
						room_id: 24
					},
					{
						image_file: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
						room_id: 22
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/c71a7e4b-3626-4752-ae1a-b20dc064d91a.jpg?aki_policy=large",
						room_id: 21
					},{
						image_file: "https://z1.muscache.cn/im/pictures/c71a7e4b-3626-4752-ae1a-b20dc064d91a.jpg?aki_policy=large",
						room_id: 13
					},{
						image_file: "https://z1.muscache.cn/im/pictures/c71a7e4b-3626-4752-ae1a-b20dc064d91a.jpg?aki_policy=large",
						room_id: 13
					},{
						image_file: "https://z1.muscache.cn/im/pictures/c71a7e4b-3626-4752-ae1a-b20dc064d91a.jpg?aki_policy=large",
						room_id: 13
					},{
						image_file: "https://z1.muscache.cn/im/pictures/c71a7e4b-3626-4752-ae1a-b20dc064d91a.jpg?aki_policy=large",
						room_id: 14
					},{
						image_file: "https://z1.muscache.cn/im/pictures/c71a7e4b-3626-4752-ae1a-b20dc064d91a.jpg?aki_policy=large",
						room_id: 14
					},{
						image_file: "https://z1.muscache.cn/im/pictures/c71a7e4b-3626-4752-ae1a-b20dc064d91a.jpg?aki_policy=large",
						room_id: 14
					},{
						image_file: "https://z1.muscache.cn/im/pictures/c71a7e4b-3626-4752-ae1a-b20dc064d91a.jpg?aki_policy=large",
						room_id: 14
					},
					{
						image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
						room_id: 20
					},
          {
          	image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
          	room_id: 19
          },
          {
          	image_file: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
          	room_id: 18
          },
          {
          	image_file: "https://z1.muscache.cn/im/pictures/2591a0a5-e6d3-4143-86d7-4f17c95fbb0f.jpg?aki_policy=large",
          	room_id: 17
          },
          {
          	image_file: "https://z1.muscache.cn/im/pictures/cc806a03-ee1f-4cb1-b1ac-cad3ab573858.jpg?aki_policy=large",
          	room_id: 16
          },
          {
          	image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
          	room_id: 15
          },
          {
          	image_file: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
          	room_id: 13
          },
          {
          	image_file: "https://z1.muscache.cn/im/pictures/2591a0a5-e6d3-4143-86d7-4f17c95fbb0f.jpg?aki_policy=large",
          	room_id: 14
          },
          {
          	image_file: "https://z1.muscache.cn/im/pictures/cc806a03-ee1f-4cb1-b1ac-cad3ab573858.jpg?aki_policy=large",
          	room_id: 12
          },
          {
          	image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
          	room_id: 11
          },{
          	image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
          	room_id: 26
          },{
          	image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
          	room_id: 26
          },{
          	image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
          	room_id: 26
          },{
          	image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
          	room_id: 21
          },{
          	image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
          	room_id: 21
          },{
          	image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
          	room_id: 21
          },{
          	image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
          	room_id: 21
          },
          {
          	image_file: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
          	room_id: 5
          },{
          	image_file: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
          	room_id: 5
          },{
          	image_file: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
          	room_id: 5
          },{
          	image_file: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
          	room_id: 5
          },{
          	image_file: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
          	room_id: 10
          },{
          	image_file: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
          	room_id: 10
          },{
          	image_file: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
          	room_id: 10
          },{
          	image_file: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
          	room_id: 10
          },
          {
          	image_file: "https://z1.muscache.cn/im/pictures/c71a7e4b-3626-4752-ae1a-b20dc064d91a.jpg?aki_policy=large",
          	room_id: 9
          },
          {
          	image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
          	room_id: 9
          },
          {
          	image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
          	room_id: 11
          },
          {
          	image_file: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
          	room_id: 8
          },
          {
          	image_file: "https://z1.muscache.cn/im/pictures/c71a7e4b-3626-4752-ae1a-b20dc064d91a.jpg?aki_policy=large",
          	room_id: 8
          },
          {
          	image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
          	room_id: 6
          },{
          	image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
          	room_id: 6
          },{
          	image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
          	room_id: 6
          },{
          	image_file: "https://z1.muscache.cn/im/pictures/82fee4c8-ca9e-4bea-9afa-eb2805c3df51.jpg?aki_policy=large",
          	room_id: 6
          },
				],
				prices: [{
						room_id: 6,
						date: "2020-12-12",
						amount: 440
					},{
						room_id: 6,
						date: "2020-12-12",
						amount: 440
					},{
						room_id: 6,
						date: "2020-12-12",
						amount: 440
					},{
						room_id: 6,
						date: "2020-12-12",
						amount: 440
					},{
						room_id: 6,
						date: "2020-12-12",
						amount: 440
					},{
						room_id: 6,
						date: "2020-12-12",
						amount: 440
					},{
						room_id: 6,
						date: "2020-12-12",
						amount: 440
					},{
						room_id: 6,
						date: "2020-12-12",
						amount: 440
					},{
						room_id: 6,
						date: "2020-12-12",
						amount: 440
					},{
						room_id: 5,
						date: "2020-12-12",
						amount: 440
					},{
						room_id:5,
						date: "2020-12-12",
						amount: 440
					},{
						room_id: 5,
						date: "2020-12-12",
						amount: 440
					},{
						room_id:5,
						date: "2020-12-12",
						amount: 440
					},{
						room_id: 5,
						date: "2020-12-12",
						amount: 440
					},{
						room_id:5,
						date: "2020-12-12",
						amount: 440
					},{
						room_id: 5,
						date: "2020-12-12",
						amount: 440
					},{
						room_id:5,
						date: "2020-12-12",
						amount: 440
					},{
						room_id: 5,
						date: "2020-12-12",
						amount: 440
					},{
						room_id:5,
						date: "2020-12-12",
						amount: 440
					},{
						room_id: 5,
						date: "2020-12-12",
						amount: 440
					},{
						room_id:5,
						date: "2020-12-12",
						amount: 440
					},{
						room_id: 5,
						date: "2020-12-12",
						amount: 440
					},{
						room_id:5,
						date: "2020-12-12",
						amount: 440
					},{
						room_id: 6,
						date: "2020-12-12",
						amount: 440
					},
          {room_id: 1,
          	date: "2020-12-13",
          	amount: 520
          },
          {room_id: 1,
          	date: "2020-12-14",
          	amount: 140
          },
          {room_id: 1,
          	date: "2020-12-15",
          	amount: 400
          },{room_id: 1,
						date: "2020-12-16",
						amount: 540
					},{room_id: 1,
						date: "2020-12-17",
						amount: 540
					},{room_id: 1,
						date: "2020-12-18",
						amount: 520
					},{room_id: 1,
						date: "2020-12-19",
						amount: 510
					},{room_id: 1,
						date: "2020-12-20",
						amount: 520
					},{room_id: 1,
						date: "2020-12-21",
						amount: 520
					},{room_id: 1,
						date: "2020-12-22",
						amount: 510
					},
					{
						room_id: 2,
						date: "2020-12-2",
						amount: 600
					},
					{
						room_id: 3,
						date: "2020-12-2",
						amount: 300
					},
					{
						room_id: 4,
						date: "2020-12-2",
						amount: 400
					},
					{
						room_id: 30,
						date: "2020-12-2",
						amount: 200
					},
					{
						room_id: 29,
						date: "2020-12-2",
						amount: 340
					},
					{
						room_id:28,
						date: "2020-12-2",
						amount: 450
					},
					{
						room_id: 26,
						date: "2020-12-2",
						amount: 350
					},{
						room_id: 24,
						date: "2020-12-12",
						amount: 440
					},{room_id: 1,
						date: "2020-12-22",
						amount: 510
					},
					{
						room_id: 2,
						date: "2020-12-2",
						amount: 600
					},
					{
						room_id: 3,
						date: "2020-12-2",
						amount: 300
					},
					{
						room_id: 4,
						date: "2020-12-2",
						amount: 400
					},
					{
						room_id: 30,
						date: "2020-12-2",
						amount: 200
					},
					{
						room_id: 8,
						date: "2020-12-2",
						amount: 340
					},
					{
						room_id:7,
						date: "2020-12-2",
						amount: 450
					},
					{
						room_id: 26,
						date: "2020-12-2",
						amount: 350
					},{
						room_id: 9,
						date: "2020-12-12",
						amount: 440
					},
          {room_id: 10,
          	date: "2020-12-13",
          	amount: 520
          },
          {room_id: 23,
          	date: "2020-12-14",
          	amount: 140
          },
          {room_id: 22,
          	date: "2020-12-15",
          	amount: 400
          },{room_id: 24,
						date: "2020-12-16",
						amount: 540
					},{room_id: 21,
						date: "2020-12-17",
						amount: 540
					},{room_id: 20,
						date: "2020-12-18",
						amount: 520
					},{room_id: 19,
						date: "2020-12-19",
						amount: 510
					},{room_id: 18,
						date: "2020-12-20",
						amount: 520
					},{room_id: 17,
						date: "2020-12-21",
						amount: 520
					},{room_id: 16,
						date: "2020-12-22",
						amount: 510
					},
					{
						room_id: 15,
						date: "2020-12-2",
						amount: 600
					},
					{
						room_id: 14,
						date: "2020-12-2",
						amount: 300
					},
					{
						room_id: 13,
						date: "2020-12-2",
						amount: 400
					},
					{
						room_id: 12,
						date: "2020-12-2",
						amount: 200
					},
					{
						room_id: 11,
						date: "2020-12-2",
						amount: 340
					},
					{
						room_id: 10,
						date: "2020-12-2",
						amount: 450
					},
					{
						room_id: 9,
						date: "2020-12-2",
						amount: 350
					},
          {
          		room_id: 1,
          		date: "2020-12-12",
          		amount: 440
          	},
            {room_id: 1,
            	date: "2020-12-13",
            	amount: 520
            },
            {room_id: 1,
            	date: "2020-12-14",
            	amount: 140
            },
            {room_id: 1,
            	date: "2020-12-15",
            	amount: 400
            },{room_id: 1,
          		date: "2020-12-16",
          		amount: 540
          	},{room_id: 1,
          		date: "2020-12-17",
          		amount: 540
          	},{room_id: 1,
          		date: "2020-12-18",
          		amount: 520
          	},{room_id: 1,
          		date: "2020-12-19",
          		amount: 510
          	},{room_id: 1,
          		date: "2020-12-20",
          		amount: 520
          	},{room_id: 1,
          		date: "2020-12-21",
          		amount: 520
          	},{room_id: 1,
          		date: "2020-12-22",
          		amount: 510
          	},
          	{
          		room_id: 2,
          		date: "2020-12-2",
          		amount: 600
          	},
          	{
          		room_id: 3,
          		date: "2020-12-2",
          		amount: 300
          	},
          	{
          		room_id: 4,
          		date: "2020-12-2",
          		amount: 400
          	},
          	{
          		room_id: 30,
          		date: "2020-12-2",
          		amount: 200
          	},
          	{
          		room_id: 29,
          		date: "2020-12-2",
          		amount: 340
          	},
          	{
          		room_id:28,
          		date: "2020-12-2",
          		amount: 450
          	},
          	{
          		room_id: 26,
          		date: "2020-12-2",
          		amount: 350
          	},{
          		room_id: 24,
          		date: "2020-12-12",
          		amount: 440
          	},{room_id: 1,
          		date: "2020-12-22",
          		amount: 510
          	},
          	{
          		room_id: 2,
          		date: "2020-12-2",
          		amount: 600
          	},
          	{
          		room_id: 3,
          		date: "2020-12-2",
          		amount: 300
          	},
          	{
          		room_id: 4,
          		date: "2020-12-2",
          		amount: 400
          	},
          	{
          		room_id: 0,
          		date: "2020-12-2",
          		amount: 200
          	},
          	{
          		room_id: 8,
          		date: "2020-12-2",
          		amount: 340
          	},
          	{
          		room_id:7,
          		date: "2020-12-2",
          		amount: 450
          	},
          	{
          		room_id: 26,
          		date: "2020-12-2",
          		amount: 350
          	},{
          		room_id: 9,
          		date: "2020-12-12",
          		amount: 440
          	},
            {room_id: 10,
            	date: "2020-12-13",
            	amount: 520
            },
            {room_id: 23,
            	date: "2020-12-14",
            	amount: 140
            },
            {room_id: 22,
            	date: "2020-12-15",
            	amount: 400
            },{room_id: 24,
          		date: "2020-12-16",
          		amount: 540
          	},{room_id: 21,
          		date: "2020-12-17",
          		amount: 540
          	},{room_id: 20,
          		date: "2020-12-18",
          		amount: 520
          	},{room_id: 19,
          		date: "2020-12-19",
          		amount: 510
          	},{room_id: 18,
          		date: "2020-12-20",
          		amount: 520
          	},{room_id: 17,
          		date: "2020-12-21",
          		amount: 520
          	},{room_id: 16,
          		date: "2020-12-22",
          		amount: 510
          	},
          	{
          		room_id: 9,
          		date: "2020-12-2",
          		amount: 600
          	},
          	{
          		room_id:10,
          		date: "2020-12-2",
          		amount: 300
          	},
          	{
          		room_id: 9,
          		date: "2020-12-2",
          		amount: 400
          	},
          	{
          		room_id: 10,
          		date: "2020-12-2",
          		amount: 200
          	},
          	{
          		room_id: 20,
          		date: "2020-12-2",
          		amount: 340
          	},
          	{
          		room_id: 25,
          		date: "2020-12-2",
          		amount: 450
          	},
          	{
          		room_id: 20,
          		date: "2020-12-2",
          		amount: 350
          	}
				],
				favorites: [{
					user_id: 1,
					room_id: 1,
				}, {
					user_id: 2,
					room_id: 2,
				}, {
					user_id: 3,
					room_id: 3,
				}, {
					user_id: 4,
					room_id: 4,
				}, {
					user_id: 5,
					room_id: 5,
				}, {
					user_id: 6,
					room_id: 6,
				}, {
					user_id: 7,
					room_id: 7,
				}, {
					user_id: 8,
					room_id: 8,
				}],
				comments: [{
						user_id: 1,
						room_id: 1,
						time: '2020.11.13',
						score: 4.8,
						content: '第二次入住了，一如既往地出人意料，主人房非常大，并又一个独立的浴缸洗漱室，城市景观阳台和超大客厅，全屋智能化系统，僻静且有礼貌的安保人员，下次再见'
					}, {
						user_id: 2,
						room_id: 1,
						time: '2020.11.12',
						score: 4.9,
						content: '因为自己的原因没看到是合租,一开还有点不乐意,但是后来发现一起住的是房东两口子,针不戳,毕竟是自己用的东西,品质真的都很不错,感觉房东小哥哥比较羞涩哈哈,性价比不错,推荐!'
					}, {
						user_id: 3,
						room_id: 1,
						time: '2020.11.12',
						score: 4.5,
						content: '有两个房间出租,大房是双人床,空间大点还是舒服点｡房间干净舒适,就是床软了些'
					}, {
						user_id: 4,
						room_id: 1,
						time: '2020.11.12',
						score: 3.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},
					{
						user_id: 2,
						room_id: 1,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 6,
						room_id: 6,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 7,
						room_id: 7,
						time: '2020.11.12',
						score: 3.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 1,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 6,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 28,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 29,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 30,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 28,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 27,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},
          {
          		user_id: 1,
          		room_id: 26,
          		time: '2020.11.13',
          		score: 4.8,
          		content: '第二次入住了，一如既往地出人意料，主人房非常大，并又一个独立的浴缸洗漱室，城市景观阳台和超大客厅，全屋智能化系统，僻静且有礼貌的安保人员，下次再见'
          	}, {
          		user_id: 2,
          		room_id: 24,
          		time: '2020.11.12',
          		score: 4.9,
          		content: '因为自己的原因没看到是合租,一开还有点不乐意,但是后来发现一起住的是房东两口子,针不戳,毕竟是自己用的东西,品质真的都很不错,感觉房东小哥哥比较羞涩哈哈,性价比不错,推荐!'
          	}, {
          		user_id: 3,
          		room_id: 25,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '有两个房间出租,大房是双人床,空间大点还是舒服点｡房间干净舒适,就是床软了些'
          	}, {
          		user_id: 4,
          		room_id: 24,
          		time: '2020.11.12',
          		score: 3.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},
          	{
          		user_id: 2,
          		room_id: 23,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 6,
          		room_id: 21,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},
            {
            		user_id: 1,
            		room_id: 26,
            		time: '2020.11.13',
            		score: 4.8,
            		content: '第二次入住了，一如既往地出人意料，主人房非常大，并又一个独立的浴缸洗漱室，城市景观阳台和超大客厅，全屋智能化系统，僻静且有礼貌的安保人员，下次再见'
            	}, {
            		user_id: 2,
            		room_id: 24,
            		time: '2020.11.12',
            		score: 4.9,
            		content: '因为自己的原因没看到是合租,一开还有点不乐意,但是后来发现一起住的是房东两口子,针不戳,毕竟是自己用的东西,品质真的都很不错,感觉房东小哥哥比较羞涩哈哈,性价比不错,推荐!'
            	}, {
            		user_id: 3,
            		room_id: 25,
            		time: '2020.11.12',
            		score: 4.5,
            		content: '有两个房间出租,大房是双人床,空间大点还是舒服点｡房间干净舒适,就是床软了些'
            	}, {
            		user_id: 4,
            		room_id: 24,
            		time: '2020.11.12',
            		score: 3.5,
            		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
            	},
            	{
            		user_id: 5,
            		room_id: 23,
            		time: '2020.11.12',
            		score: 4.5,
            		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
            	},{
            		user_id: 6,
            		room_id: 21,
            		time: '2020.11.12',
            		score: 4.5,
            		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
            	},{
          		user_id: 7,
          		room_id: 20,
          		time: '2020.11.12',
          		score: 3.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 8,
          		room_id: 19,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 8,
          		room_id: 18,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 13,
          		room_id: 13,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 12,
          		room_id: 17,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 11,
          		room_id: 16,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 10,
          		room_id: 14,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 9,
          		room_id: 15,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 2,
          		room_id: 13,
          		time: '2020.11.12',
          		score: 4.9,
          		content: '因为自己的原因没看到是合租,一开还有点不乐意,但是后来发现一起住的是房东两口子,针不戳,毕竟是自己用的东西,品质真的都很不错,感觉房东小哥哥比较羞涩哈哈,性价比不错,推荐!'
          	}, {
          		user_id: 3,
          		room_id: 12,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '有两个房间出租,大房是双人床,空间大点还是舒服点｡房间干净舒适,就是床软了些'
          	}, {
          		user_id: 4,
          		room_id: 11,
          		time: '2020.11.12',
          		score: 3.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},
          	{
          		user_id: 2,
          		room_id: 10,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 6,
          		room_id: 9,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 7,
          		room_id: 8,
          		time: '2020.11.12',
          		score: 3.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 8,
          		room_id: 4,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 8,
          		room_id: 4,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 13,
          		room_id: 5,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 12,
          		room_id: 24,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 11,
          		room_id: 3,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 8,
          		room_id: 2,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 5,
          		room_id: 1,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
						user_id: 1,
						room_id: 1,
						time: '2020.11.13',
						score: 4.8,
						content: '第二次入住了，一如既往地出人意料，主人房非常大，并又一个独立的浴缸洗漱室，城市景观阳台和超大客厅，全屋智能化系统，僻静且有礼貌的安保人员，下次再见'
					}, {
						user_id: 2,
						room_id: 1,
						time: '2020.11.12',
						score: 4.9,
						content: '因为自己的原因没看到是合租,一开还有点不乐意,但是后来发现一起住的是房东两口子,针不戳,毕竟是自己用的东西,品质真的都很不错,感觉房东小哥哥比较羞涩哈哈,性价比不错,推荐!'
					}, {
						user_id: 3,
						room_id: 1,
						time: '2020.11.12',
						score: 4.5,
						content: '有两个房间出租,大房是双人床,空间大点还是舒服点｡房间干净舒适,就是床软了些'
					}, {
						user_id: 4,
						room_id: 1,
						time: '2020.11.12',
						score: 3.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 2,
						room_id: 1,
						time: '2020.11.12',
						score: 4.9,
						content: '因为自己的原因没看到是合租,一开还有点不乐意,但是后来发现一起住的是房东两口子,针不戳,毕竟是自己用的东西,品质真的都很不错,感觉房东小哥哥比较羞涩哈哈,性价比不错,推荐!'
					}, {
						user_id: 3,
						room_id: 4,
						time: '2020.11.12',
						score: 4.5,
						content: '有两个房间出租,大房是双人床,空间大点还是舒服点｡房间干净舒适,就是床软了些'
					}, {
						user_id: 4,
						room_id: 4,
						time: '2020.11.12',
						score: 3.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},
					{
						user_id: 2,
						room_id: 1,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 6,
						room_id: 6,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 7,
						room_id: 7,
						time: '2020.11.12',
						score: 3.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 1,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},
          {
          	user_id: 3,
          	room_id: 4,
          	time: '2020.11.12',
          	score: 4.5,
          	content: '有两个房间出租,大房是双人床,空间大点还是舒服点｡房间干净舒适,就是床软了些'
          }, {
          	user_id: 4,
          	room_id: 4,
          	time: '2020.11.12',
          	score: 3.5,
          	content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          },
          {
          	user_id: 2,
          	room_id: 1,
          	time: '2020.11.12',
          	score: 4.5,
          	content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          },{
          	user_id: 6,
          	room_id: 6,
          	time: '2020.11.12',
          	score: 4.5,
          	content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          },{
          	user_id: 6,
          	room_id: 5,
          	time: '2020.11.12',
          	score: 3.5,
          	content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          },{
          	user_id: 8,
          	room_id: 1,
          	time: '2020.11.12',
          	score: 4.5,
          	content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          },{
						user_id: 8,
						room_id: 6,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},
          {
          	user_id: 8,
          	room_id: 6,
          	time: '2020.11.12',
          	score: 4.5,
          	content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          },{
						user_id: 8,
						room_id: 6,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 6,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 6,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 6,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 6,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 28,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 29,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 30,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 2,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 27,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},
          {
          		user_id: 1,
          		room_id: 26,
          		time: '2020.11.13',
          		score: 4.8,
          		content: '第二次入住了，一如既往地出人意料，主人房非常大，并又一个独立的浴缸洗漱室，城市景观阳台和超大客厅，全屋智能化系统，僻静且有礼貌的安保人员，下次再见'
          	}, {
          		user_id: 2,
          		room_id: 24,
          		time: '2020.11.12',
          		score: 4.9,
          		content: '因为自己的原因没看到是合租,一开还有点不乐意,但是后来发现一起住的是房东两口子,针不戳,毕竟是自己用的东西,品质真的都很不错,感觉房东小哥哥比较羞涩哈哈,性价比不错,推荐!'
          	}, {
          		user_id: 3,
          		room_id: 25,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '有两个房间出租,大房是双人床,空间大点还是舒服点｡房间干净舒适,就是床软了些'
          	}, {
          		user_id: 4,
          		room_id: 22,
          		time: '2020.11.12',
          		score: 3.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},
          	{
          		user_id: 2,
          		room_id: 23,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 6,
          		room_id: 21,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 7,
          		room_id: 20,
          		time: '2020.11.12',
          		score: 3.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 8,
          		room_id: 19,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 8,
          		room_id: 18,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 13,
          		room_id: 13,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 12,
          		room_id: 17,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 11,
          		room_id: 16,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 10,
          		room_id: 14,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 9,
          		room_id: 15,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 2,
          		room_id: 24,
          		time: '2020.11.12',
          		score: 4.9,
          		content: '因为自己的原因没看到是合租,一开还有点不乐意,但是后来发现一起住的是房东两口子,针不戳,毕竟是自己用的东西,品质真的都很不错,感觉房东小哥哥比较羞涩哈哈,性价比不错,推荐!'
          	}, {
          		user_id: 3,
          		room_id: 25,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '有两个房间出租,大房是双人床,空间大点还是舒服点｡房间干净舒适,就是床软了些'
          	}, {
          		user_id: 4,
          		room_id: 22,
          		time: '2020.11.12',
          		score: 3.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},
          	{
          		user_id: 2,
          		room_id: 23,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 6,
          		room_id: 21,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 7,
          		room_id: 20,
          		time: '2020.11.12',
          		score: 3.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 8,
          		room_id: 12,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 8,
          		room_id: 18,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 13,
          		room_id: 9,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 12,
          		room_id: 23,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 11,
          		room_id: 7,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 8,
          		room_id: 14,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 5,
          		room_id: 15,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
						user_id: 8,
						room_id: 29,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 30,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 28,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 27,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},
          {
          		user_id: 1,
          		room_id: 26,
          		time: '2020.11.13',
          		score: 4.8,
          		content: '第二次入住了，一如既往地出人意料，主人房非常大，并又一个独立的浴缸洗漱室，城市景观阳台和超大客厅，全屋智能化系统，僻静且有礼貌的安保人员，下次再见'
          	}, {
          		user_id: 2,
          		room_id: 24,
          		time: '2020.11.12',
          		score: 4.9,
          		content: '因为自己的原因没看到是合租,一开还有点不乐意,但是后来发现一起住的是房东两口子,针不戳,毕竟是自己用的东西,品质真的都很不错,感觉房东小哥哥比较羞涩哈哈,性价比不错,推荐!'
          	}, {
          		user_id: 3,
          		room_id: 25,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '有两个房间出租,大房是双人床,空间大点还是舒服点｡房间干净舒适,就是床软了些'
          	}, {
          		user_id: 4,
          		room_id: 24,
          		time: '2020.11.12',
          		score: 3.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},
          	{
          		user_id: 2,
          		room_id: 23,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 6,
          		room_id: 21,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 7,
          		room_id: 20,
          		time: '2020.11.12',
          		score: 3.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 8,
          		room_id: 19,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 8,
          		room_id: 18,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 13,
          		room_id: 13,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 12,
          		room_id: 17,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 11,
          		room_id: 16,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 10,
          		room_id: 14,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 9,
          		room_id: 15,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 2,
          		room_id: 13,
          		time: '2020.11.12',
          		score: 4.9,
          		content: '因为自己的原因没看到是合租,一开还有点不乐意,但是后来发现一起住的是房东两口子,针不戳,毕竟是自己用的东西,品质真的都很不错,感觉房东小哥哥比较羞涩哈哈,性价比不错,推荐!'
          	}, {
          		user_id: 3,
          		room_id: 12,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '有两个房间出租,大房是双人床,空间大点还是舒服点｡房间干净舒适,就是床软了些'
          	}, {
          		user_id: 4,
          		room_id: 11,
          		time: '2020.11.12',
          		score: 3.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},
          	{
          		user_id: 2,
          		room_id: 10,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 6,
          		room_id: 9,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 7,
          		room_id: 8,
          		time: '2020.11.12',
          		score: 3.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 8,
          		room_id: 7,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 8,
          		room_id: 6,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 13,
          		room_id: 5,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 12,
          		room_id: 24,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 11,
          		room_id: 3,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 8,
          		room_id: 2,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 5,
          		room_id: 1,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
						user_id: 1,
						room_id: 1,
						time: '2020.11.13',
						score: 4.8,
						content: '第二次入住了，一如既往地出人意料，主人房非常大，并又一个独立的浴缸洗漱室，城市景观阳台和超大客厅，全屋智能化系统，僻静且有礼貌的安保人员，下次再见'
					}, {
						user_id: 2,
						room_id: 1,
						time: '2020.11.12',
						score: 4.9,
						content: '因为自己的原因没看到是合租,一开还有点不乐意,但是后来发现一起住的是房东两口子,针不戳,毕竟是自己用的东西,品质真的都很不错,感觉房东小哥哥比较羞涩哈哈,性价比不错,推荐!'
					}, {
						user_id: 3,
						room_id: 1,
						time: '2020.11.12',
						score: 4.5,
						content: '有两个房间出租,大房是双人床,空间大点还是舒服点｡房间干净舒适,就是床软了些'
					}, {
						user_id: 4,
						room_id: 1,
						time: '2020.11.12',
						score: 3.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},
					{
						user_id: 2,
						room_id: 1,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 6,
						room_id: 6,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 7,
						room_id: 7,
						time: '2020.11.12',
						score: 3.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 1,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 6,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 28,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 29,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 30,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 2,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},{
						user_id: 8,
						room_id: 27,
						time: '2020.11.12',
						score: 4.5,
						content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
					},
          {
          		user_id: 1,
          		room_id: 26,
          		time: '2020.11.13',
          		score: 4.8,
          		content: '第二次入住了，一如既往地出人意料，主人房非常大，并又一个独立的浴缸洗漱室，城市景观阳台和超大客厅，全屋智能化系统，僻静且有礼貌的安保人员，下次再见'
          	}, {
          		user_id: 2,
          		room_id: 24,
          		time: '2020.11.12',
          		score: 4.9,
          		content: '因为自己的原因没看到是合租,一开还有点不乐意,但是后来发现一起住的是房东两口子,针不戳,毕竟是自己用的东西,品质真的都很不错,感觉房东小哥哥比较羞涩哈哈,性价比不错,推荐!'
          	}, {
          		user_id: 3,
          		room_id: 25,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '有两个房间出租,大房是双人床,空间大点还是舒服点｡房间干净舒适,就是床软了些'
          	}, {
          		user_id: 4,
          		room_id: 22,
          		time: '2020.11.12',
          		score: 3.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},
          	{
          		user_id: 2,
          		room_id: 23,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 6,
          		room_id: 21,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 7,
          		room_id: 20,
          		time: '2020.11.12',
          		score: 3.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 8,
          		room_id: 19,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 8,
          		room_id: 18,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 13,
          		room_id: 13,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 12,
          		room_id: 17,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 11,
          		room_id: 16,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 10,
          		room_id: 14,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 9,
          		room_id: 15,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 2,
          		room_id: 24,
          		time: '2020.11.12',
          		score: 4.9,
          		content: '因为自己的原因没看到是合租,一开还有点不乐意,但是后来发现一起住的是房东两口子,针不戳,毕竟是自己用的东西,品质真的都很不错,感觉房东小哥哥比较羞涩哈哈,性价比不错,推荐!'
          	}, {
          		user_id: 3,
          		room_id: 25,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '有两个房间出租,大房是双人床,空间大点还是舒服点｡房间干净舒适,就是床软了些'
          	}, {
          		user_id: 4,
          		room_id: 22,
          		time: '2020.11.12',
          		score: 3.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},
          	{
          		user_id: 2,
          		room_id: 23,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 6,
          		room_id: 21,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 7,
          		room_id: 20,
          		time: '2020.11.12',
          		score: 3.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 8,
          		room_id: 12,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 8,
          		room_id: 18,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 13,
          		room_id: 9,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 12,
          		room_id: 23,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 11,
          		room_id: 7,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 8,
          		room_id: 14,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	},{
          		user_id: 5,
          		room_id: 15,
          		time: '2020.11.12',
          		score: 4.5,
          		content: '房东帅气幽默,人超级超级nice,下次来一定要来这里住,家里特别干净,咖啡也好喝,和他聊天特别开心｡'
          	}
				],
        
			}
		}
	}
	
	// static isFavortite(room) {
	// 	let user = LocalStorage.get('user');
	// 	let fs = room.favorties.filter(function(favortie) {
	// 		return favortie.user_id == user.id
	// 	});
	// 	return fs.length > 0
	// }

	static initRoomDataForHomePage() {
		let rooms = _.map(TestData.getData().data.rooms, function(room) {
			return Room.binding_data(room);
		})
		return rooms
	}
}

export default TestData;
