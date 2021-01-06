<template>
  <view style="background-color: #F8F8F8;">
    <view class="order-block">
      <!-- 头部房源信息 -->
      <view class="order-head b m">
        <view class="order-head-content">
          <image class="order-head-img" :src="room.pictures[0].image_file"></image>
          <view class="order-head-body">
            <text class="order-head-title ">{{room.title}}</text>
            <text class="order-head-bottom tc">{{ room.number_of_beds}}床·{{ room.maximum_number_of_people }}人</text>
          </view>
        </view>
      </view>
      <!-- 时间和人数模块 -->

      <uni-calendar ref="calendar" :range="true" :insert="false" @confirm="confirm"></uni-calendar>
      <view class="order-data b m">
        <view class="order-data-content">
          <view class="edit-data">
            <!-- 修改日期开始 -->
            <view class="date-change ml-1">
              <text>{{select.startDate}}</text>
              <text>—</text>
              <text>{{select.endDate}}</text>
              <view style=" display: inline-block;">
                <text class="ml-1">共</text>
                <text>{{select.dateLength}}</text>
                <text>晚</text>
              </view>
              <button class="right main-color" style="background: none; font-size: 30rpx; margin-top: 14rpx;" @click="open">修改日期</button>
            </view>
          </view>

          <view class="members m">
            <text>入住人数</text>
            <picker style="width: 470rpx; margin-left: 22rpx;" :range="array" :value="index" @change="bindMemberChange">
              <view>{{array[index]}}</view>
            </picker>
            <uni-icons type="arrowright"></uni-icons>
          </view>

        </view>
      </view>
      <!-- 联系人模块 -->
      <view class="order-linkman m">
        <view style="margin-bottom: 30rpx;">联系信息</view>
        <view class="order-linkman-block b ">
          <view class="order-linkman-content">
            <uni-icons type="person"></uni-icons>
            <text style="width:100rpx;">姓名</text>
            <textarea maxlength="15" value="id" placeholder="请填写昵称" />
            </view>
        </view>
      </view>
      <view class="order-linkman m">
      <view style="margin-bottom: 30rpx;">备注</view>
      <view class="order-linkman-content order-linkman-block b">
      <textarea value="" placeholder="如果你有特殊要求,请在此备注" placeholder-style="font-size:27rpx" />
      </view>
      </view>
    <!-- 价格模块 -->
    <view class="price m">
       <view style="margin-bottom: 30rpx;">金额</view>
         <uni-list class="price-list b" >
             <uni-list-item  title="详情" :rightText="'¥' + room.prices[0].amount + '*共' + select.dateLength + '晚' + '*' + array[index] +'人'"></uni-list-item>
             <uni-list-item  title="住宿费用" :rightText="'¥' + select.amountSum"></uni-list-item>
             <uni-list-item  title="清扫费" rightText="¥300"></uni-list-item>
             <uni-list-item  title="总价" :rightText="'¥' + roomSum"></uni-list-item>
         </uni-list>
       </view>
              
       <!-- 预定须知 -->
       <view class="order-message m b">
        <view class="mb-title">预定须知</view>
         <view class="dis-flex mb-1">
           <text style="margin-right: 45rpx; font-size: 28rpx;">房屋守则</text>
           <view class="dis-flex-co" style="font-size: 28rpx;">
             <text>适合儿童入住（2-12岁）</text>
             <text>适合儿童入住（2-12岁）</text>
           </view>
         </view>
                
         <view class="dis-flex mb-1">
           <text class="mr-1 " style="font-size: 28rpx; ">入住/退房</text>
           <view class="dis-flex-co" style="font-size: 28rpx;">
             <text>16:00后入住，11:00前退房</text>
           </view>
         </view>
                
         <view class="dis-flex mb-1">
           <text class="mr-1 " style="font-size: 28rpx; ">入住/退房</text>
           <view class="dis-flex-co" style="font-size: 28rpx;">
             <text>16:00后入住，11:00前退房</text>
           </view>
         </view>
                
         <view class="dis-flex mb-1">
           <text style="margin-right: 45rpx ; font-size: 28rpx;">取消说明</text>
           <view class="dis-flex-co" style="font-size: 28rpx;">
             <text>预定确定过后48小时内免费取消</text>
             <text class="mr-05" style="color: #5451BD;" @click="goCancelPolicy()">查看更多</text>
           </view>
         </view>
               
         <view class="dis-flex mb-1" v-if="room.special_information !== '' ">
           <text style="margin-right: 45rpx ; font-size: 28rpx;">其他特殊需求</text>
           <view class="dis-flex-co" style="font-size: 28rpx;">
             <text>{{room.special_information}}</text>
           </view>
         </view>           
      <view style="height: 150rpx;"></view>
      
      </view>
    </view>
    <uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @at-root @click="onClick" @buttonClick="buttonClick" />
    <view class="navprice">
      ¥{{roomSum}}
      <view class="ml-1">共{{select.dateLength}}晚</view>
    </view>
  </view>
</template>

<script>
  import _ from '../../underscore.js'
  import TestData from '../../store/test_data.js'
  export default {
    data() {
      return {
        index: 0,
        array: [1,2],
        options: [{
        }],
        buttonGroup: [{
          text: '立即支付',
          backgroundColor: '#5451bd',
          color: '#fff'
        }],
        room: '',
        average: '',
        select: {
          startDate: "2020-11-12",
          endDate: "2020-11-13",
          dateLength: 1,
          dataList: [],
          amountSum: '',
          roomSum: ''
        },
        data: ''
      }
    },
    onLoad(event) {
      this.data = (uni.getStorageSync('localselect') && JSON.parse(uni.getStorageSync('localselect'))) || [];
      this.select = JSON.parse(JSON.stringify(this.data));
      this.roomdata = TestData.initRoomDataForHomePage();
      let eid = _.values(event)
      this.roomdata.some(element => {
        if (element.id == eid) {
          this.room = element;
        }
      })
      console.log(this.room)
      // 计算订单总价格
      let amountsum = this.select.amountSum
      this.roomSum = _.reduce([amountsum,300],function(memo,num) {
        return memo + num
      },0)
      console.log(this.roomSum)
    },
    onShow() {},
    methods: {
      open() {
        this.$refs.calendar.open();
      },
      confirm(e) {
        this.select.dateLength = e.range.data.length
        this.select.startDate = e.range.before;
        this.select.endDate = e.range.after;
        this.select.dataList = e.range.data
        // console.log(this.select.dataList)
        let prices = this.room.prices
        let selectPriceList = this.select.dataList.map(function(date) {
          return prices[prices.findIndex(function(price) {
            return price.date == date
          })]
        })
        // console.log(selectPriceList)
        // 计算房间总价格
        let amountlist = _.map(selectPriceList, 'amount')
        this.select.amountSum = _.reduce(amountlist, function(memo, num) {
          return memo + num
        }, 0)
        console.log(this.select.amountSum)
        let amountsum = this.select.amountSum
        this.roomSum = _.reduce([amountsum,300],function(memo,num) {
          return memo + num
        },0)
        console.log(this.roomSum)
      },
      bindMemberChange(e) {
        this.index = e.target.value
      },
      goCancelPolicy() {
        uni.navigateTo({
          url: '../CancelPolicy/CancelPolicy'
        })
      },
      buttonClick() {
        uni.showToast({
          title: '支付完成'
        });
      }
    }
  }
</script>

<style lang="scss">
  .order-block {
    margin: 10rpx;
  }
  page {
    background-color: #F8F8F8;
  }
  // 订单头部
  .order-head {
    background-color: #FFFFFF;
    height: 180rpx;
    .order-head-content {
      display: flex;
      .order-head-img {
        width: 480rpx;
        height: 180rpx;
        border-radius:  20rpx 0  0 20rpx;
        background-color: #FFFFFF;
      }
    }
  }
  .order-head-title {
    font-size: 28rpx;
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .order-head-body {
    display: flex;
    flex-direction: column;
    margin: 40rpx 20rpx;
  }
  // 日期人数
  .order-data {
    display: flex;
    height: 200rpx;
    flex-direction: column;
    background-color: #FFFFFF;
    .edit-data {
      background-color: #FFF0F5;
      height: 100rpx;
      line-height: 100rpx;
      font-size: 28rpx;
      border-radius: 30rpx 30rpx 0 0;
    }
    .date-change {
      font-size: 28rpx;
    }
    .members {
      display: flex;
      height: 72rpx;
      line-height: 62rpx;
      font-size: 27rpx;
    }
  }
  // 联系信息
  .order-linkman {
    margin-top: 80rpx;
    textarea {
      height: 50rpx;
      margin-top: 30rpx;
      font-size: 27rpx;
    }
   }
   .order-linkman-content {
    font-size: 27rpx;
    display: flex;
    padding: 0 20rpx;
   }
   .order-linkman-block {
      height: 100rpx;
      background-color: #FFFFFF;
      line-height: 100rpx;
   }
  .price {
    margin-top: 80rpx;
  }
  .dis-flex-co {
    color: #666666;
  }
  .navprice {
    z-index: 2;
    bottom: 0;
    position: fixed;
    margin-left: 35rpx;
    font-size: 40rpx;
    color: #5451bd;
    display: flex;
    view {
      font-size: 20rpx;
      color: #555555;
      margin-top: 18rpx;
    }
  }
  .uni-list-item__extra-text {
    color: #000000!important;
  }

</style>
