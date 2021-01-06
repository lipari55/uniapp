<template>
  <view>
    <view class="gobackBTN" >
      <view @click="goback">
        <uni-icons style="margin:12rpx" type="arrowleft" size="20"></uni-icons>
      </view>
      <view @click="gohome">
        <uni-icons style="margin-left:30rpx" type="home" size="20"></uni-icons>
      </view>
    </view>
    <swiper style="height: 250px;" :indicator-dots="indicatorDots">
      <swiper-item>
        <view class="swiper-item">
          <image :src="room.pictures[0].image_file"></image>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">
          <image :src="room.pictures[1].image_file"></image>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">
          <image :src="room.pictures[2].image_file"></image>
        </view>
      </swiper-item>
    </swiper>
    <view class="main-background">
      <view class="city-content">
        <!-- <view class="border-shadow" style="width: 160rpx; height: 60rpx; border-radius: 30rpx;"> -->
        <button class="border-shadow sharebtn" type="default" open-type="share">
          <uni-icons type="redo" size="20" color="#f07373"></uni-icons>
        </button>
        <view class="border-shadow favbtn dis-flex">
          <uni-fav></uni-fav>
          <text style="margin-left: 10rpx;">22</text>
        </view>
        <!-- 修改日期开始 -->
        <uni-calendar ref="calendar" :range="true" :insert="false" @confirm="confirm"></uni-calendar>
        <view class="date-change mt-1">
          <text class="ml-1">{{select.startDate}}</text>
          <text>—</text>
          <text>{{select.endDate}}</text>
          <view style=" display: inline-block;">
            <text class="ml-1">共</text>
            <text>{{select.dateLength}}</text>
            <text>晚</text>
          </view>
          <button class="right main-color mr-1" style="background: none;margin: unset; font-size: 30rpx; margin-top: 10rpx;"
            @click="open">修改日期</button>
        </view>
        <!-- 修改日期结束 -->
				
        <!-- 房源文字介绍开始 -->
        <view>
          <view class="describe mt-1">
            <view class=" mr-1">
              <view class="banner-title mb-05">{{room.title}} </view>
              <view class="room-scale">

                <view>
                  <view class="iconfont icon-mianji"></view>
                  <text>{{ room.areaage }}平米</text>
                </view>
                <view>
                  <view class="iconfont icon-woshi"></view>
                  <text>{{ room.number_of_living_room }}个卧室</text>
                </view>

                <view>
                  <view class="iconfont icon-chuang"></view>
                  <text>{{ room.number_of_beds}}张床</text>
                </view>

                <view>
                  <view class="iconfont icon-keting"></view>
                  <text>{{ room.number_of_living_room}}个客厅</text>
                </view>
              </view>
              <view class="room-scale mt-05">
                <view class="iconfont icon-renshu"></view>
                <view>
                  <text>最多住{{ room.maximum_number_of_people }}人</text>
                </view>
              </view>

            </view>
            <view class="comment-content" style="text-align: center;
						font-size: 28rpx; color: #5451BD;">
              <view style="margin-top: 15rpx;">
                <view>{{room.comments[0].score}}</view>
                <uni-rate :readonly="true" :size="15" v-model="room.comments[0].score" />
                <view>——</view>
                <view>{{room.comments.length}}条评论</view>
              </view>
            </view>
          </view>
          <view class="describe-tag">
            <view>如实描述</view>
            <view>干净整洁</view>
            <view>入住顺利</view>
            <view>沟通顺畅</view>
            <view>位置便利</view>
            <view>位置便利</view>
          </view>
        </view>
        <!-- 房源文字介绍结束 -->

        <!-- 配套设施开始 -->
        <view>
          <view class="mb-title">配套设施</view>

          <uni-collapse style="background-color: #F8F8F8;">
            <view class="supporting-facility">

              <view v-if="room.washing_machine === true">
                <view class="iconfont icon-xiyiji"></view>
                <text>洗衣机</text>
              </view>

              <view v-if="room.iron === true">
                <view class="iconfont icon-ic_yun"></view>
                <text>熨斗</text>
              </view>

              <view v-if="room.hair_dryer=== true">
                <view class="iconfont icon-dianchuifeng"></view>
                <text>吹风机</text>
              </view>

              <view v-if="room.wifi === true">
                <view class="iconfont icon-wifiwofi"></view>
                <text>wifi</text>
              </view>

            </view>
            <uni-collapse-item title="全部设施">

              <view class="supporting-facility">

                <view v-if="room.refrigerator === true">
                  <view class="iconfont icon-bingxiang1"></view>
                  <text>冰箱</text>
                </view>

                <view v-if="room.television === true">
                  <view class="iconfont icon-dianshiji"></view>
                  <text>电视机</text>
                </view>

                <view v-if="room.kettle === true">
                  <view class="iconfont icon-dianreshuihu"></view>
                  <text>电热水壶</text>
                </view>
                <view v-if="room.microwave === true">
                  <view class="iconfont icon-weibolu2"></view>
                  <text>微波炉</text>
                </view>
              </view>
              <view class="supporting-facility">

                <view v-if="room.kitchen_ware === true">
                  <view class="iconfont icon-chuju1"></view>
                  <text>厨具</text>
                </view>

              </view>

            </uni-collapse-item>
          </uni-collapse>
        </view>

        <!-- 配套设施结束 -->

        <!-- 房客点评开始 -->
        <view class="mb-title">房客点评</view>
        <view>

          <view>
            <view style="background-color: #E1E0FF; 
						height: 100rpx; line-height: 100rpx;font-size: 30rpx; display: flex;">
              <text class="ml-5">{{room.comments[0].score}}</text>
              <uni-rate :readonly="true" style="margin: 34rpx 0 0 10rpx;" :size="16" v-model="room.comments[0].score" />
              <text>（{{room.comments.length}}条评论）</text>
            </view>
          </view>

          <view class="mt-05">
            <!-- 用户头像 -->
            <view class="dis-flex">
              <view style="background-color: #F8F8F8;">
                <uni-icons type="person-filled" style="color: #808080;" size="32"></uni-icons>
              </view>
              <view class="dis-flex-co ml-5" style="font-size: 25rpx;">
                <text>lipari</text>
                <text style="color: #969896;font-size: 8rpx;">2020.11.30</text>
              </view>
              <!-- 评分 -->
              <uni-rate :readonly="true" active-color="#FFD700" style="margin: 5px 0 0 145px" v-model="room.comments[0].score" />

            </view>
            <!-- 评论内容 -->
            <view style="font-size: 25rpx;margin-top: 10rpx;">
              {{room.comments[0].content}}
            </view>

            <view style="text-align: center; font-size: 30rpx; color: #5451BD;" @click='goAllComment(room.id)'>
              <view class="mt-05">
                <text>全部评价</text>
                <uni-icons class="right" color="#5451BD" size="18" type="arrowright" />
              </view>
            </view>
          </view>
        </view>
        <!-- 房客点评结束 -->

        <!-- 房源位置开始 -->
        <view class="mb-title">房源位置</view>
        <view class="dis-flex" style="justify-content: space-around;" @click="goMap()">
          <uni-icons type="map-pin-ellipse" style="line-height: 80rpx;"></uni-icons>
          <text style="font-size: 28rpx;width: 460rpx;">{{room.address}}
          </text>
          <uni-icons type="arrowright" style="line-height: 80rpx;"></uni-icons>
        </view>
        <!-- 房源位置结束 -->

        <view class="mt-1">
          <uni-collapse style="background-color: #F8F8F8;">
            <view class="supporting-facility">

              <view v-if="room.ATM === true">
                <view class="iconfont icon-atm"></view>
                <text>ATM</text>
              </view>

              <view v-if="room.part === true">
                <view class="iconfont icon-chechangguanli"></view>
                <text>停车场</text>
              </view>

              <view v-if="room.post_office == true">
                <view class="iconfont icon-youju"></view>
                <text>邮局</text>
              </view>

              <view v-if="room.convenience_store == true">
                <view class="iconfont icon-bianlidian"></view>
                <text>便利店</text>
              </view>

            </view>
            <uni-collapse-item title="全部设施">

              <view class="supporting-facility">

                <view v-if="room.supermarket === true">
                  <view class="iconfont icon-chaoshi"></view>
                  <text>超市</text>
                </view>

              </view>

            </uni-collapse-item>
          </uni-collapse>
        </view>
        <!-- 预定须知开始 -->
        <view class="mb-title">预定须知</view>
        <view class="dis-flex mb-1">
          <text style="margin-right: 45rpx; font-size: 28rpx; font-weight: bold;">房屋守则</text>
          <view class="dis-flex-co" style="font-size: 28rpx;">
            <text>适合儿童入住（2-12岁）</text>
            <text>适合儿童入住（2-12岁）</text>
          </view>
        </view>

        <view class="dis-flex mb-1">
          <text class="mr-1 " style="font-size: 28rpx; font-weight: bold;">入住/退房</text>
          <view class="dis-flex-co" style="font-size: 28rpx;">
            <text>16:00后入住，11:00前退房</text>
          </view>
        </view>

        <view class="dis-flex mb-1">
          <text class="mr-1 " style="font-size: 28rpx; font-weight: bold;">入住/退房</text>
          <view class="dis-flex-co" style="font-size: 28rpx;">
            <text>16:00后入住，11:00前退房</text>
          </view>
        </view>

        <view class="dis-flex mb-1">
          <text style="margin-right: 45rpx ; font-size: 28rpx; font-weight: bold;">取消说明</text>
          <view class="dis-flex-co" style="font-size: 28rpx;">
            <text>预定确定过后48小时内免费取消</text>
            <text class="mr-05" style="color: #5451BD;" @click="goCancelPolicy()">查看更多</text>
          </view>
        </view>

        <view class="dis-flex mb-1" v-if="room.special_information !== '' ">
          <text style="margin-right: 45rpx ; font-size: 28rpx; font-weight: bold;">其他特殊需求</text>
          <view class="dis-flex-co" style="font-size: 28rpx;">
            <text>{{room.special_information}}</text>
          </view>
        </view>
        <view style="height: 180rpx;"></view>

        <!-- 预定须知结束 -->
      </view>
    </view>
    <uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @at-root @click="onClick(room.id)"
      @buttonClick="buttonClick(room.id)" />
    <view class="price">
      ¥{{select.amountSum}}
      <text>总价格</text>
    </view>
  </view>
</template>

<script>
  import _ from '../../underscore.js'
  import TestData from '../../store/test_data.js'
  export default {
    data() {
      return {
        room: '',
        indicatorDots: true,
        options: [{
          icon: 'headphones',
          text: '客服'
        }],
        buttonGroup: [{
          text: '立即预定',
          backgroundColor: '#5451bd',
          color: '#fff'
        }],
        select: {
          startDate: "2020-11-12",
          endDate: "2020-11-13",
          dateLength: 1,
          dataList: [],
          amountSum: 500
        },

      }
    },
    onLoad(event) {
      this.roomdata = TestData.initRoomDataForHomePage();
      this.roomdata.some(element => {
        if (element.id == event.id) {
          this.room = element;
        }
      })
    },
    methods: {
      onClick(e) {
        uni.navigateTo({
          url: '../taking/taking?id =' + e
        })
      },
      buttonClick(e) {
        uni.setStorageSync('localselect', JSON.stringify(this.select));
        uni.navigateTo({
          url: '../OrderSubmit/OrderSubmit?id =' + e
        })
      },
      goback() {
        uni.navigateBack()
      },
      gohome() {
        uni.switchTab({
          url:"../home/home"
        })
      },
      open() {
        this.$refs.calendar.open();
      },
      confirm(e) {
        this.select.dateLength = e.range.data.length
        this.select.startDate = e.range.before;
        this.select.endDate = e.range.after;
        this.select.dataList = e.range.data
        console.log(this.select.dataList)
        let prices = this.room.prices
        let selectPriceList = this.select.dataList.map(function(date) {
          return prices[prices.findIndex(function(price) {
            return price.date == date
          })]
        })
        // console.log(selectPriceList)
        let amountlist = _.map(selectPriceList, 'amount')
        this.select.amountSum = _.reduce(amountlist, function(memo, num) {
          return memo + num
        }, 0)
        // console.log(this.select.amountSum)
      },
      goAllComment(e) {
        uni.navigateTo({
          url: '../comment/comment?id =' + e
        })
      },
      goMap() {
        uni.navigateTo({
          url: "../map/map"
        })
      },
      goCancelPolicy() {
        uni.navigateTo({
          url: '../CancelPolicy/CancelPolicy'
        })
      },
    }
  }
</script>

<style lang="scss">
  .main-background {
    margin-top: -54rpx;
    background: #FFFFFF;
    height: 900rpx;
  }

  .city-content {
    margin: 10rpx auto;
  }

  .gobackBTN {
    display: flex;
    position: fixed;
    top: 34rpx;
    left: 20rpx;
    z-index: 999;
    background: none;
    background-color: #ffffff;
    width: 160rpx;
    height: 60rpx;
    line-height: 60rpx;
    border-radius: 20px;
  }

  .date-change {
    height: 50px;
    line-height: 50px;
    background-color: #F6F5F9;
    border-radius: 15px
  }

  .date-change text {
    font-size: 28rpx;
  }

  .describe {
    display: flex;
  }

  .comment-content {
    width: 200rpx;
    height: 200rpx;
    background-color: #F8F8F8;
    border-radius: 15rpx;
  }

  .describe-tag {
    display: flex;
    font-size: 24rpx;
    ;
    margin: 15rpx 0;
    justify-content: space-between;
  }

  .describe-tag view {
    background-color: #DCDCDC
  }

  .iconlist {
    font-size: 50rpx !important;
    background-color: #FFFFFF;
    border-radius: 15rpx;
    text-align: center;
    width: 100rpx;
    height: 100rpx;
    line-height: 100rpx;
    margin-top: 10rpx;
  }

  .sharebtn {
    width: 100rpx;
    height: 100rpx;
    border-radius: 100rpx;
    background: #ffffff;
    margin: -56rpx 0 0 548rpx;
  }

  .favbtn {
    width: 120rpx;
    height: 100rpx;
    border-radius: 100rpx;
    margin: -100rpx 0 0 390rpx;
    line-height: 50px;
  }

  .supporting-facility {
    display: flex;
    background-color: #F8F8F8;
    flex-wrap: wrap;
    justify-content: center;

    .iconfont {
      font-size: 60rpx;
    }
  }

  .supporting-facility view {
    flex: 1;
    text-align: center;
    margin-top: 20rpx;

  }

  .room-scale {
    font-size: 24rpx;
    display: flex;

    view {
      display: flex;
      -webkit-box-flex: 0;

      text {
        margin-right: 10rpx
      }
    }
  }

  .price {
    z-index: 2;
    bottom: 0;
    position: fixed;
    margin-left: 135rpx;
    font-size: 28rpx;
    color: #5451bd;
    display: flex;
    flex-direction: column;
  }
</style>
