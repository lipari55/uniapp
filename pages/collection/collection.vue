<template>
  <view class="collection-content">
    <view class="room-list">
      <view class="room-total">
        4个房源
      </view>
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
                  <uni-rate class="comment-score" :readonly="true" :size="12"  v-model="room.comments[0].score"/>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import _ from '../../underscore.js'
  import TestData from '../../store/test_data.js'
  import Moment from '../../moment.js'
  export default {
    data() {
      return {
        rooms: [],
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
          housing_resource: 1,
          services: []
        },
      }
    },
    onShow() {
      this.data = (uni.getStorageSync('gosearch') && JSON.parse(uni.getStorageSync('gosearch'))) || [];
      this.search = JSON.parse(JSON.stringify(this.data));
    },
    created() {
      this.rooms = _.where(TestData.initRoomDataForHomePage(), {
        city: '东京'
      })
      console.log(this.rooms)
    },
    methods:{
      goDetail: function(e) {
        uni.navigateTo({
          url: '../details/details?id=' + e
        });
      },
    }
   
  }
</script>

<style lang="scss">
  .collection-content {
    margin: 20rpx;
  }
  
  .room-total {
    font-size: 17px;
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
  .favbtn {
    position: absolute;
    z-index: 9;
    margin: 10rpx 0 0 648rpx;
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
