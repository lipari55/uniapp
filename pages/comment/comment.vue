<template>
  <view class="comment">
    <view>
      <view class="comment-total">
        <view class="comment-top">
          <text class="comment-score">{{average}}</text>
          <uni-rate style="margin-left: 16rpx; margin-top: 28rpx;" :readonly="true" :size="12" v-model="average" />
          <text class="comment-length">（{{room.comments.length}}条评论）</text>
        </view>
        <view class="describe-tag">
          <view>如实描述5.0</view>
          <view>干净整洁5.0</view>
          <view>入住顺利4.9</view>
          <view>沟通顺畅4.8</view>
          <view>位置便利4.9</view>
          <view>位置便利5.0</view>
        </view>
      </view>
    </view>
    <view class="mt-1" style="border-bottom: 1px solid #C0C0C0;" v-for="value in room.comments">
      <!-- 用户头像 -->
      <view class="dis-flex">
        <view style="background-color: #F8F8F8;">
          <uni-icons type="person-filled" style="color: #808080;" size="32"></uni-icons>
        </view>
        <view class="dis-flex-co ml-5" style="font-size: 25rpx;">
          <strong>lipari</strong>
          <text style="color: #969896;font-size: 8rpx;">2020.11.30</text>
        </view>
        <!-- 评分 -->
        <uni-rate active-color="#FFD700" :readonly="true" style="margin: 5px 0 0 160px" v-model="value.score" />
      </view>
      <!-- 评论内容 -->
      <view class="comment-box ml-5">
        <view>
          {{value.content}}
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
        room: '',
        average: ''
      }
    },
    onLoad(event) {
      this.roomdata = TestData.initRoomDataForHomePage();
      let eid = _.values(event)
      this.roomdata.some(element => {
        if (element.id == eid) {
          this.room = element;
        }
      })
      // console.log(this.room.comments)// [{},{}]
      let rc = this.room.comments;
      let commentslist = _.map(rc,'score')
      let scoreSum =_.reduce(commentslist,function(memo,num){
        return memo + num;
      },0)
      let averages = Math.ceil(scoreSum / this.room.comments.length)
      this.average = averages.toFixed(1)
    },
  }
</script>

<style lang="scss">
  .comment {
    margin: 30rpx;
  }

  .describe-tag {
    display: flex;
    font-size: 24rpx;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-left: 6rpx;
    color: #222222;
    view {
      width: 180rpx;
      margin-top: 10rpx;
    }
  }

  .comment-total {
    background-color: #E1E0FF;
    height: 200rpx;
    font-size: 30rpx;
    display: flex;
    flex-direction: column;
    border-radius: 20rpx;
  }

  .comment-top {
    display: flex;
    margin: 20rpx 30rpx 0;
  }

  .comment-score {
    font-size: 50rpx;
    color: #5451bd;
  }

  .comment-length {
    margin-top: 22rpx;
    font-size: 14rpx;
    color: #757373;
  }

  .comment-box {
    font-size: 24rpx;
    margin-top: 20rpx;
    width: 100%;
    height: 100%;

    view {
      margin-bottom: 40rpx;
      margin-left: 60rpx;
      margin-right: 40rpx;
      line-height: 1.8;
    }
  }
</style>
