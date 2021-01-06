<template>
  <view>
    <view class="chat-list">
      <view class="title">
        客服消息
      </view>
      <view class="chat" v-for="(chat,index) in chatList" :key="index">
        <view class="row" @tap="toChat(chat)">
          <view class="left">
            <image :src="chat.face"></image>
          </view>
          <view class="right">
            <view class="top">
              <view class="username">{{chat.username}}</view>
              <view class="time">{{chat.time}}</view>
            </view>
            <view class="bottom">
              <view class="msg">{{chat.msg}}</view>
              <view class="tis" v-if="chat.tisNum>0">{{chat.tisNum}}</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        chatList: [{
          uid: 1,
          username: "Booking",
          face: "../../static/kefu.png",
          time: "2020-12-17 11:40",
          msg: "你好",
          tisNum: 1
        }, ]
      }
    },
    //下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
    onPullDownRefresh() {
      setTimeout(function() {
        uni.stopPullDownRefresh();
      }, 1000);
    },
    onLoad() {

    },
    methods: {
      toChat(chat) {
        uni.navigateTo({
          url: "../Chat/Chat?name=" + chat.username
        })
      }
    }
  }
</script>

<style lang="scss">
  .title {
    margin: 40rpx 0;
  }
  page {
    background-color: #FFFFFF;
  }
  .chat-list {
    width: 94%;
    padding: 0 3%;

    .chat {
      width: 100%;
      height: 100upx;
      padding: 20upx 0;
      border-bottom: solid 1upx #eaeaea;

      .row {
        display: flex;
        justify-content: flex-start;

        .left {
          flex-shrink: 0;
          width: 100upx;
          height: 100upx;

          image {
            width: 100upx;
            height: 100upx;
            border-radius: 20upx;
          }
        }

        .right {
          flex-shrink: 1;
          width: 98%;
          padding-left: 2%;

          .top {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;

            .usernam {
              font-size: 26upx;
            }

            .time {
              font-size: 22upx;
              color: #bebebe;
            }
          }

          .bottom {
            width: 100%;
            height: 40upx;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .msg {
              font-size: 25upx;
              color: #777;
            }

            .tis {
              width: 35upx;
              height: 35upx;
              font-size: 22upx;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #eb4d3d;
              color: #fff;
              border-radius: 100%;
            }
          }
        }
      }
    }
  }
</style>
