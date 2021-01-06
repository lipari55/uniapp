<template>
  <view class="container">
    <!-- 轮播图 -->
    <swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
      <swiper-item>
        <view class="swiper-item">
          <image src="../../static/banner1.jpg"></image>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">
          <image src="../../static/banner2.jpg"></image>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">
          <image src="../../static/banner3.jpg"></image>
        </view>
      </swiper-item>
    </swiper>
    <!-- 房源搜索模块 -->
    <view class="search box">
      <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" active-color="#ffffff">
      </uni-segmented-control>
      <view class="content" style="background-color: #FFFFFF;">
        <view v-if="current === 0" style="height: 200rpx;" v-model="search">
          <!-- 位置选择 -->
          <view class="loction-select" @click="citySelectBtn">
            <uni-icons class="mr-05" type="location-filled" size="15" color="#5451bd"></uni-icons>
            <text style="font-size: 24rpx; color: #5451BD;">{{search.city}}</text>
            <uni-icons style="margin-left: 8rpx;" type="arrowdown" size="13"></uni-icons>
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

          <!-- 点击搜索 -->
          <button class="search-btn" @click="goSearchBtn">
            <text>点击搜索日租房源</text>
          </button>
        </view>
        <view v-if="current === 1" style="height: 200rpx;" v-model="search">
          <!-- 位置选择 -->
          <view class="loction-select" @click="citySelectBtn">
            <uni-icons class="mr-05" type="location-filled" size="15" color="#5451bd"></uni-icons>
            <text style="font-size: 24rpx; color: #5451BD;">{{search.city}}</text>
            <uni-icons style="margin-left: 8rpx;" type="arrowdown" size="13"></uni-icons>
          </view>
          <!-- 日期选择 -->
          <view>
            <uni-calendar ref="calendar" :insert="false" @confirm="confirm"></uni-calendar>
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
          <!-- 点击搜索 -->
          <button class="search-btn" @click="goSearchBtn">
            <text>点击搜索月租房源</text>
          </button>
        </view>
      </view>
    </view>
    <!-- 页面主内容 -->
    <view class="main-background">
      <!-- 热门城市 -->
      <view class="city-content">
        <text>热门城市</text>
        <!-- 城市名称 -->
        <view class="end-title">
          　<view @click="change(0)" :class="{btna:btnnum === 0}">东京</view>
          　<view @click="change(1)" :class="{btna:btnnum === 1}">曼谷</view>
        </view>
        <view class="content">
          <view class="end-cont" :class="{dis:btnnum === 0}">
            <!-- 东京房源列表 -->
            <view class="uni-list dis-flex-wrap">
              <view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(room, index) in rooms" @click="goDetail(room.id)">
                <view class="uni-media-list">
                  <view style="position: relative;">
                    <view class="favbtn">
                      <uni-fav @click="favBtn"></uni-fav>
                    </view>
                    <image class="uni-media-list-img" :src="room.pictures[0].image_file"></image>
                  </view>
                  <view class="uni-media-list-body">
                    <text class="uni-media-list-price">¥{{ room.prices[0].amount }}/晚</text>
                    <text class="uni-media-list-title">{{room.title }}</text>
                    <text class="uni-media-list-bottom">{{ room.number_of_beds }}床·{{room.maximum_number_of_people}}人</text>
                  </view>
                </view>
              </view>
            </view>
          </view>
          <view class="end-cont" :class="{dis:btnnum === 1}">
            <!-- 曼谷房源列表 -->
            <view class="uni-list dis-flex-wrap">
              <view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(room, index) in rooms" @click="goDetail(room.id)">
                <view class="uni-media-list">
                  <view style="position: relative;">
                    <view class="favbtn">
                      <uni-fav></uni-fav>
                    </view>
                    <image class="uni-media-list-img" :src="room.pictures[0].image_file"></image>
                  </view>
                  <view class="uni-media-list-body">
                    <text class="uni-media-list-price">¥{{ room.prices[0].amount }}/晚</text>
                    <text class="uni-media-list-title">{{ room.title }}</text>
                    <text class="uni-media-list-bottom">{{ room.number_of_beds }}床·{{room.maximum_number_of_people}}人</text>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <!-- 加载更多 -->
        <button class="loading-btn" @click="goSearchBtn">
          <text>查看更多东京房源</text>
        </button>
        <!-- footer -->
        <view class="footer dis-flex-wrap">
          <view>
            <uni-icons type="camera" size="40"></uni-icons>
            <text style="font-size: 30rpx; text-align: center;">平台可靠</text>
            <text style="font-size: 24rpx; color: #8F8F94;">日本民宿官方拍照</text>
          </view>
          <view class="funi-media-list-body">
            <uni-icons type="camera" size="40"></uni-icons>
            <text style="font-size: 30rpx; text-align: center;">平台可靠</text>
            <text style="font-size: 24rpx; color: #8F8F94;">日本民宿官方拍照</text>
          </view>
          <view class="funi-media-list-body">
            <uni-icons type="camera" size="40"></uni-icons>
            <text style="font-size: 30rpx; text-align: center;">平台可靠</text>
            <text style="font-size: 24rpx; color: #8F8F94;">日本民宿官方拍照</text>
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
  export default {
    data() {
      return {
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 500,
        items: ['日租', '月租'],
        current: 0,
        citycurrent: 0,
        btnnum: 0,
        rooms: [],
        search: {
          startDate: "2020-11-12",
          endDate: "2020-11-13",
          city: "东京",
          dateLength: 1
        }
      }
    },
    onShow() {
      this.search.city = uni.getStorageSync('e');
    },
    created() {
      this.rooms = _.where(TestData.initRoomDataForHomePage(), {
        city: '东京'
      })
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
      citySelectBtn() {
        uni.navigateTo({
          url: "../../pages/CitySelect/CitySelect"
        })
      },
      // 日租月租切换事件
      onClickItem(e) {
        this.search = {
          startDate: "2020-11-12",
          endDate: "2020-11-13",
          city: "东京",
          dateLength: 1
        };
        uni.setStorageSync('e', '东京')
        if (this.current !== e.currentIndex) {
          this.current = e.currentIndex;
        }
      },
      // 热门城市切换事件
      change(e) {
        this.btnnum = e;
        if (this.btnnum === 0) {
          this.rooms = _.where(TestData.initRoomDataForHomePage(), {
            city: '东京'
          })
        }
        if (this.btnnum === 1) {
          this.rooms = _.where(TestData.initRoomDataForHomePage(), {
            city: '曼谷'
          })
        }
      },
      goDetail: function(e) {
        uni.navigateTo({
          url: '../details/details?id=' + e
        });
      },
      goSearchBtn() {
        uni.setStorageSync('gosearch', JSON.stringify(this.search))
        uni.navigateTo({
          url: '../search/search'
        })
      },
      favBtn() {
      }
    }
  }
</script>

<style lang="scss">
  .search {
    position: relative;
    z-index: 999;
    width: 660rpx;
    margin: 0rpx auto;
    top: 340rpx;
  }

  .search-btn {
    width: 560rpx;
    background-color: #5451BD;
    height: 70rpx;
    color: #FFFFFF;
    font-size: 28rpx;
    border-radius: 60rpx;
    margin: 8rpx auto;
  }

  .loction-select {
    width: 160rpx;
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

  .control-btn {
    border: none;
    color: #5451BD;
  }

  .city-content {
    margin: 240rpx auto;
  }

  .favbtn {
    position: absolute;
    z-index: 9;
    margin: 10rpx 0 0 240rpx;
  }

  .uni-media-list-logo {
    width: 180upx;
    height: 140upx;
  }

  .uni-media-list-text-top {
    height: 74upx;
    font-size: 28upx;
    overflow: hidden
  }

  .uni-list-cell {
    width: 300rpx;
    height: 360rpx;
    margin: 20rpx 12rpx;
    border-radius: 15rpx;
    box-shadow: 0 4rpx 8rpx 0 rgba(0, 0, 0, 0.2);
  }

  .uni-media-list-img {
    width: 100%;
    height: 180rpx;
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
  }

  .uni-media-list-title {
    font-size: 26rpx;
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;

  }

  .uni-media-list-bottom {
    font-size: 22rpx;
    color: #808080;
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

  .footer {
    width: 100%;
    height: 50rpx;
    justify-content: space-around
  }

  .footer view {
    display: flex;
    text-align: center;
    flex-direction: column;
    width: 200rpx;
    height: 80rpx;
  }

  .loading-btn {
    width: 100%;
    height: 70rpx;
    color: #5451BD;
    font-size: 28rpx;
    border: 1rpx solid #5451BD;
    border-radius: 60rpx;
    margin: 16rpx auto;
    background-color: #FFFFFF;
  }
</style>
