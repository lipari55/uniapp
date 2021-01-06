<template>
  <view class="content-box">
    <view class="fliex">
      <view class="head">
        <view class="head-left">
          <!-- 位置选择 -->
          <view class="loction-select" @click="citySelectBtn">
            <uni-icons class="mr-05" type="location-filled" size="15" color="#5451bd"></uni-icons>
            <text style="font-size: 24rpx; color: #5451BD;">{{search.city}}</text>
            <uni-icons style="margin-left: 5rpx;" type="arrowdown" size="13"></uni-icons>
          </view>
          <!-- 日期选择 -->
          <view>
            <uni-calendar ref="calendar" :range="true" :insert="false" @confirm="confirm"></uni-calendar>
            <button @click="open" class="select-date-btn">
              <text>{{search.startDate}}</text>
              <view style="color: #C0C0C0; display: inline-block;">
                <text class="ml-1">-共</text>
                <text>{{search.dateLength}}</text>
                <text class="mr-1">晚-</text>
              </view>
              <text>{{search.endDate}}</text>
            </button>
          </view>
        </view>
      </view>
      <view>
        <ms-dropdown-menu>
          <!-- 人数 -->
          <ms-dropdown-item :hasSlot="true" :title="searchLabels.number_of_members" ref="dropdownItem1">
            <view class="dropdown-item-content">
              <uni-data-checkbox v-model="value1" mode="tag" selectedColor="#5354bd" :localdata="memberList" @change="clickMemberBtn"></uni-data-checkbox>
            </view>
          </ms-dropdown-item>
          <!-- 价格 -->
          <ms-dropdown-item :hasSlot="true" :title="searchLabels.priceRange" ref="dropdownItem2">
            <view class="dropdown-item-content">
              <view class="text-center">
                <text>¥{{ rangeValues[0] }}</text>
                <text>¥{{ rangeValues[1] }}</text>
              </view>
              <view class="rowBox mrg50T">
                <view class="sliderBox">
                  <RangeSlider :width="slideWidth" :height="slideHeight" :blockSize="slideBlockSize" :min="slideMin"
                    :max="slideMax" :values="rangeValues" :step="step" :liveMode="isLiveMode" active-color="#5453bd"
                    @rangechange="onRangeChange">
                    <view slot="minBlock" class="range-slider-block"></view>
                    <!-- 左边滑块的内容 -->
                    <view slot="maxBlock" class="range-slider-block"></view>
                    <!-- 右边滑块的内容 -->
                  </RangeSlider>
                </view>
              </view>
              <uni-data-checkbox class="priceTag" v-model="rangeValues" mode="tag" selectedColor="#5354bd" @change="clickPriceBtn"
                :localdata="priceList"></uni-data-checkbox>
              <view class="button-block">
                <button class="reset" type="default" @click="resetPrice">重置</button>
                <button class="save" type="default" @click="savePrice">保存</button>
              </view>
            </view>
          </ms-dropdown-item>
          <!-- 位置 -->
          <ms-dropdown-item :hasSlot="true" :title="this.searchLabels.location" ref="dropdownItem3">
            <uni-list v-for="value in loactionList">
              <uni-list-item clickable :title="value" @click="selectLocation(value)"></uni-list-item>
            </uni-list>
          </ms-dropdown-item>
          <!-- 更多 -->
          <ms-dropdown-item :hasSlot="true" :title="this.searchLabels.services" ref="dropdownItem4">
            <view class="dropdown-item-content">
              <view class="content-title">
                房源户型
              </view>
              <uni-data-checkbox v-model="value2" mode="tag" selectedColor="#5354bd" :localdata="housingList" @change="clickHouseBtn(value2)"></uni-data-checkbox>
              <view class="content-title">
                设施服务
              </view>
              <uni-data-checkbox v-model="value3" mode="tag" selectedColor="#5354bd" multiple :localdata="servingList"
                @change="clickServeBtn(value3)"></uni-data-checkbox>
              <view class="button-block">
                <button class="reset" @click="reseatServe" type="default">重置</button>
                <button class="save" @click="saveServe" type="default">保存</button>
              </view>
            </view>
          </ms-dropdown-item>
        </ms-dropdown-menu>
      </view>
    </view>

    <view class="room-list" style="padding-top: 192rpx;">
      <view class="uni-list dis-flex-wrap">
        <view class="uni-list-cell" hover-class="uni-list-cell-hover" @click="goDetail(room.id)" v-for="(room, index) in rooms">
          <view class="uni-media-list">
            <view style="position: relative;">
              <view class="favbtn">
                <uni-fav></uni-fav>
              </view>
              <image class="uni-media-list-img" :src="room.pictures[0].image_file"></image>
            </view>
            <view class="uni-media-list-body">
              <text class="uni-media-list-price">¥{{ room.prices[0].amount }}/晚</text>
              <text class="uni-media-list-title">{{room.title }}</text>
              <view class="describe-tag">
                <view>如实描述</view>
                <view>干净整洁</view>
                <view>入住顺利</view>
                <view>沟通顺畅</view>
                <view>位置便利</view>
              </view>
              <view class="uni-media-list-bottom">
                {{ room.number_of_beds }}床·{{room.maximum_number_of_people}}人
                <view class="score">
                  <text>{{ room.comments[0].score}}</text>
                  <uni-rate class="comment-score" :readonly="true" :size="12" v-model="room.comments[0].score" />
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="nullroomlist" v-if="!rooms.length">
      <image src="../../static/nodate.jpg"></image>
    </view>
  </view>
</template>

<script>
  import _ from '../../underscore.js'
  import TestData from '../../store/test_data.js'
  import Moment from '../../moment.js'
  import msDropdownMenu from '@../../components/ms-dropdown/dropdown-menu.vue'
  import msDropdownItem from '@../../components/ms-dropdown/dropdown-item.vue'
  import RangeSlider from '@../../components/range-slider/range-slider.vue';
  export default {
    components: {
      msDropdownMenu,
      msDropdownItem,
      RangeSlider
    },
    data() {
      return {
        rooms: [],
        value: '',
        value1: '',
        value2: '',
        value3: '',
        House: '',
        loactionList: [],
        rangeValues: [0, 800],
        slideWidth: 645,
        slideHeight: 80,
        slideBlockSize: 30,
        slideMin: 0,
        slideMax: 800,
        isLiveMode: true,
        step: 100,
        searchLabels: {
          number_of_members: '人数',
          priceRange: '价格',
          location: '位置',
          services: '更多',
        },
        search: {
          startDate: "11.12",
          endDate: "11.13",
          city: "东京",
          priceRange: {
            minPrice: 0,
            maxPrice: 800
          },
          location: '',
          dateLength: 1,
          number_of_members: 1,
          housing_resource: '',
          services: []
        },

        memberList: [{
            text: 1,
            value: 1
          },
          {
            text: 2,
            value: 2
          },
          {
            text: 3,
            value: 3
          }, {
            text: 4,
            value: 4
          }, {
            text: 5,
            value: 5
          }, {
            text: 6,
            value: 6
          }, {
            text: 7,
            value: 7
          }, {
            text: '8+',
            value: 8
          }
        ],
        priceList: [{
            text: '¥0-300',
            value: [0, 300]
          },
          {
            text: '¥300-500',
            value: [300, 500]
          },
          {
            text: '¥500-800',
            value: [500, 800]
          },
          {
            text: '¥800+',
            value: [800, 800]
          }
        ],
        housingList: [{
            text: 1,
            value: 1
          },
          {
            text: 2,
            value: 2
          },
          {
            text: 3,
            value: 3
          }, {
            text: 4,
            value: 4
          }
        ],
        value1: 0,
        servingList: [{
            text: '空调',
            value: 'air_conditioner'
          },
          {
            text: '电视机',
            value: 'television'
          },
          {
            text: '洗衣机',
            value: 'washing_machine'
          },
          {
            text: '冰箱',
            value: 'refrigerator'
          },
          {
            text: '微波炉',
            value: 'microwave'
          },
          {
            text: '厨具',
            value: 'kitchen_ware'
          }
        ],

      }
    },
    onShow() {
      this.data = (uni.getStorageSync('gosearch') && JSON.parse(uni.getStorageSync('gosearch'))) || [];
      this.search.startDate = this.data.startDate;
      this.search.endDate = this.data.endDate;
      this.search.city = this.data.city;
      this.search.dateLength = this.data.dateLength;
      let city = this.data.city
      let roomdata = TestData.initRoomDataForHomePage();
      let location = roomdata[0].locations
      // console.log(location['日本']['东京'])
      let cities = _.find(location, function(e) {
        return _.keys(e).indexOf(city)
      })
      this.loactionList = cities[city]
    },
    created() {
      this.data = (uni.getStorageSync('gosearch') && JSON.parse(uni.getStorageSync('gosearch'))) || [];
      let scity = this.data.city;
      console.log(scity)
      this.rooms = _.where(TestData.initRoomDataForHomePage(), {
        city: scity
      })
      console.log(this.rooms)
    },
    methods: {
      // 打开日历
      open(e) {
        this.$refs.calendar.open();
      },
      // 确认日历事件
      confirm(e) {
        this.search.dateLength = e.range.data.length
        this.search.startDate = e.range.before;
        this.search.endDate = e.range.after;
      },
      goDetail: function(e) {
        uni.navigateTo({
          url: '../details/details?id=' + e
        });
      },
      citySelectBtn() {
        uni.navigateTo({
          url: "../../pages/CitySelect/CitySelect"
        })
      },
      // 人数选择事件
      clickMemberBtn: function(e) {
        this.$refs.dropdownItem1.closePopup();
        this.search.number_of_members = e.detail.data.value;
        this.searchLabels.number_of_members = [e.detail.data.value, '人'].join('');
        let nfm = this.search.number_of_members;
        this.rooms = _.where(TestData.initRoomDataForHomePage(), {
          maximum_number_of_people: nfm
        })
        console.log(this.rooms)
      },
      // 价格选择事件，滑块变化
      onRangeChange: function(e) {
        this.rangeValues = [e.minValue, e.maxValue];
        console.log(this.rangeValues);
      },
      // 价格选择事件，点击按钮
      clickPriceBtn: function(e) {
        console.log(this.rangeValues)
      },
      // 重置价格事件
      resetPrice() {
        this.rangeValues = [0, 800]
      },
      // 保存价格事件
      savePrice() {
        this.$refs.dropdownItem2.closePopup();
        this.search.priceRange = this.rangeValues;
        this.searchLabels.priceRange = this.rangeValues.map(function(e) {
          return `¥${e}`
        }).join('-');
        if (_.isEqual(this.rangeValues, [800, 800])) {
          this.searchLabels.priceRange = '¥800+'
        }
        console.log(this.search.priceRange[1])
        let nfm = this.search.number_of_members;
        console.log(nfm)
        this.rooms = _.where(TestData.initRoomDataForHomePage(), {
          maximum_number_of_people: nfm
        })
      },
      selectLocation(e) {
        this.$refs.dropdownItem3.closePopup();
        this.searchLabels.location = e
      },
      clickHouseBtn(e) {
        this.search.housing_resource = e
      },
      clickServeBtn(e) {
        this.search.services = e
      },
      reseatServe() {
        this.value2 = [];
        this.value3 = [];
      },
      // 保存服务项事件
      saveServe() {
        this.$refs.dropdownItem4.closePopup();
        console.log(this.search);
        if (this.search.housing_resource == '' && this.search.services.length !== 0) {
          this.searchLabels.services = `${this.search.services.length}项`
        } else if (this.search.housing_resource == "" && this.search.services.length == '') {
          return this.searchLabels.services = '更多'
        } else if (this.search.housing_resource !== '' && this.search.services.length === '') {
          return this.searchLabels.services = '1项'
        } else {
          this.searchLabels.services =
            `${_.reduce([1,this.search.services.length],function(memo,num){
					      return memo + num
					    },0)}项`
        };

      }
    },
  }
</script>

<style lang="scss">
  page {
    background-color: #FFFFFF;
  }

  .fliex {
    position: fixed;
    z-index: 999;
    width: 92%;
    background-color: #FFFFFF;
  }

  .content-box {
    margin: 0 30rpx;
  }

  .text-center {
    display: flex;
    justify-content: space-between;
  }

  .content-title {
    display: flex;
    margin: 20rpx 0;
  }

  .button-block {
    display: flex;

    .reset {
      border: 1px solid #5453bd;
      border-radius: 50rpx;
      width: 160rpx;
      font-size: 30rpx;
      color: #5453bd;
      margin: 20rpx 0;
      margin-right: 44rpx;
      height: 80rpx;
    }

    .save {
      background-color: #5453bd;
      width: 440rpx;
      border-radius: 50rpx;
      margin: 20rpx 0;
      height: 80rpx;
      color: #FFFFFF;
      font-size: 30rpx;
    }
  }

  .dropdown-item-content {
    margin: 0 56rpx
  }

  .favbtn {
    position: absolute;
    z-index: 9;
    margin: 10rpx 0 0 626rpx;
  }

  .head {
    display: flex;
    background-color: #FFFFFF;
    padding: 10rpx 0;
    box-shadow: 0 0 8rpx #EEEEEE;
    border-radius: 30rpx;
    margin: 10rpx 0;
  }

  .head-left {
    display: flex;
    background-color: #FFFFFF;
    border-radius: 30rpx;
    width: 100%;
    padding-right: 20rpx;

  }

  .loction-select {
    width: 150rpx;
    margin: 20rpx;
    font-size: 28rpx;
    float: left;
    border-right: 1rpx solid #8F8F94;
    background-color: #FFFFFF;
  }

  .select-date-btn {
    padding: 0;
    margin: 0;
    background-color: #FFFFFF;
    font-size: 27rpx;
    line-height: 3.11;
  }

  .uni-media-list-text-top {
    height: 74upx;
    font-size: 28upx;
    overflow: hidden
  }

  .uni-list-cell {
    margin: 30rpx 0;
    width: 100%;
    height: 560rpx;
    border-radius: 15rpx;
    box-shadow: 0 4rpx 8rpx 0 rgba(0, 0, 0, 0.2);
  }

  .uni-media-list-img {
    width: 100%;
    height: 300rpx;
    border-top-right-radius: 15rpx;
    border-top-left-radius: 15rpx;
  }

  .uni-media-list-body {
    margin: 14rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .uni-media-list-price {
    font-size: 26rpx;
    font-weight: bold;
    color: #5451BD;
    margin-bottom: 20rpx;
  }

  .uni-media-list-title {
    font-size: 26rpx;
    line-height: 1.5;
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  .describe-tag {
    display: flex;
    font-size: 20rpx;
    margin: 15rpx 0;
    justify-content: space-between;
    width: 80%;

    view {
      background-color: #C8C7CC;
      color: #555555;
    }
  }

  .uni-media-list-bottom {
    display: flex;
    font-size: 22rpx;
    color: #808080;
  }

  .score {
    display: flex;
    justify-content: flex-end;
    margin-left: 370rpx;
  }

  .comment-score {
    margin: 4rpx 8rpx;
  }

  .end-title {
    display: flex;
    justify-content: space-between;
    width: 310rpx;
    font-size: 26rpx;
    margin-top: 20rpx;
  }

  .end-title view {
    float: left;
    border-radius: 40rpx;
    text-align: center;
    width: 140rpx;
    height: 60rpx;
    line-height: 60rpx;
    background-color: #808080;
    color: #FFFFFF;
  }
</style>
