<template>
  <view class="container">
    <uni-segmented-control :current="current" :values="items.country" @clickItem="onClickItem"
      active-color="#5451bd" style-type="text">
    </uni-segmented-control>
    <view class="content">
      <view v-if="current === 0">
        <uni-list v-for="(city,index) in dongjinglist" :key="index">
          <uni-list-item :title="city" clickable link="switchTab" to="../home/home" @click="onClick(city)"></uni-list-item>
        </uni-list>
      </view>
      <view v-if="current === 1">
        <uni-list v-for="(city,index) in mangulist" :key="index">
          <uni-list-item :title="city" clickable link="switchTab" to="../home/home" @click="onClick(city)"></uni-list-item>
        </uni-list>
      </view>
    </view>
  </view>
</template>

<script>
  import TestData from '../../store/test_data.js'
  import _ from '../../underscore.js'
  export default {
    data() {
      return {
        items: {},
        current: 0,
        roomdata:'',
        dongjinglist: [],
        mangulist: []
      }
    },
    onLoad() {
      this.dongjinglist = this.getCities(0);
      this.mangulist = this.getCities(1);
    },
    onShow() {
      this.roomdata = TestData.initRoomDataForHomePage();
      this.items.country = _.keys(this.roomdata[0].locations)
    },
    methods: {
      getCities(index) {
        console.log(index)
        this.roomdata = TestData.initRoomDataForHomePage();
        let location = this.roomdata[0].locations;
        return _.keys(_.values(location)[index])
      },
      
      onClickItem(e) {
        console.log(e)
        if (this.current !== e.currentIndex) {
          this.current = e.currentIndex;
        }
      },
      onClick(e) {
        uni.setStorageSync('e', e)
      }
    }
  }
</script>

<style>
  .container {
    padding-left: 20rpx;
    padding-right: 20rpx;
  }
</style>
