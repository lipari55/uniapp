import Picture from './Picture.js'
import Price from './Price.js'
import Favorite from './Favorite.js'
import Comment from './Comment.js'
import TestData from './test_data.js'
import location from './location.js'
import _ from '../underscore.js'

class Room {
	room_id = null;
	city = null; //城市
	address = null; //地址
	title = null; //标题
	number_of_beds = null; //床的数量
	number_of_living_room = null; //客厅的数量
	number_of_bedroom = null; //卧室的数量
	maximum_number_of_people = null; //人数
	areaage = null; //房间面积
	descriptions = null; //详情
	special_information = null; //特殊预定须知
	washing_machine = null; //洗衣机
	iron = null; //熨斗
	hair_dryer = null; //电吹风
	air_conditioner = null; //空调
	wifi = null; //wifi
	refrigerator = null; //冰箱
	television = null; //电视机
	kettle = null; //电热水壶
	microwave = null; //微波炉
	kitchen_ware = null; //厨具
	ATM = null; //ATM
	park = null; //停车场
	post_office = null; //邮局
	convenience_store = null; //便利店
	supermarket = null; //超市
	pictures = [];
	prices = [];
	favorites = [];
	Comments = [];
  locations = {};

	static binding_data(room) {
		room.pictures = _.filter(TestData.getData().data.pictures, function(picture) {
			return picture.room_id == room.id
		})
		// console.log(room)
		room.prices = _.filter(TestData.getData().data.prices, function(price) {
			return price.room_id == room.id
		})
		room.favorites = _.filter(TestData.getData().data.favorites, function(favortie) {
			return favortie.room_id == room.id
		})
		room.comments = _.filter(TestData.getData().data.comments, function(comment) {
			return comment.room_id == room.id
		})
		return room;
	}
}


export default Room
