<template>
  <view class="content">
    <!-- 用户登录板块 -->
    <view class="login" v-if="!user" @click="login()">
      <uni-icons type="person" size="40" class="ml-1"></uni-icons>
      <text class="login_button">登录/注册</text>
    </view>
    <view class="login" v-if="user" @click="logout()">
      <image :src="user.avatar"></image>
      <text class="login_button">{{user.name}}</text>
    </view>
    <!-- 消息通知板块 -->
    <navigator url="../Chat/Chat" type="default" hover-class="none">
      <button hover-class="none">
        <uni-icons class="right" type="arrowright"></uni-icons>
        <uni-icons class="mr-05" type="chatbubble"></uni-icons>
        消息
      </button>
    </navigator>
    <!-- 订单板块 -->
    <view class="order">
      <view class="day_order" @click="orderClick">日租订单</view>
      <view class="month_order" @click="orderClick">月租订单</view>
    </view>
    <!-- 工具栏板块 -->
    <view class="tools">
      <text>工具</text>
      <view class="tools_content">
        <view>
          <uni-icons type="email" size="30"></uni-icons>
          <text>反馈</text>
        </view>
        <view>
          <uni-icons type="info" size="30"></uni-icons>
          <text>关于</text>
        </view>
        <view @click="clear()">
          <uni-icons type="info" size="30"></uni-icons>
          <text>清除缓存</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import User from '../../store/User.js'
  import LocalStorage from '../../store/localStorage.js'
  export default {
    data() {
      return {
        user: null
      }
    },
    created() {},
    onLoad() {
      // console.log(User)
    },
    methods: {
      // 用户登录
      login() {
        this.user = User.login();
        console.log(this.user)
      },
      // 用户登出
      logout() {
        User.logout();
        this.user = null;
      },
      clear() {
        LocalStorage.clearStorage();
      },
      orderClick() {
        uni.showToast({
          title: '暂无订单'
        });
      }
      // 登录获取本地local数据
      // getuserlocal() {
      // 	let stringData = window.localStorage.getItem('usertextdata');
      // 	this.userData = JSON.parse(stringData)
      // }
    },
  }
</script>

<style lang="less" scoped>
  .content {
    width: 640rpx;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .login {
    width: 100%;
    display: flex;
    height: 220rpx;
    align-items: center;
    margin: 30rpx 0;
    border: 1px solid #bbbbbb;
    border-radius: 40rpx;

    image {
      width: 120rpx;
      height: 120rpx;
      border-radius: 60rpx;
      margin: 25rpx 35rpx;
    }
  }

  .login .login_button {
    font-size: 38rpx;
    margin-left: 30rpx;
  }

  .order {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    view {
      width: 300rpx;
      height: 150rpx;
      border: 1px solid #bbbbbb;
      text-align: center;
      margin: 60rpx 0;
      line-height: 150rpx;
    }
  }

  button {
    background-color: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #bbbbbb;
    text-align: left;
    height: 3em;
    line-height: 3em;
    font-size: 1em;
  }

  .tools {
    width: 100%;
    height: 500rpx;
    font-size: 40rpx;

    .tools_content {
      font-size: 25rpx;
      display: flex;
      text-align: center;

      view {
        display: flex;
        margin-top: 20rpx;
        flex-direction: column;
        margin: 40rpx;
      }
    }

  }
</style>
