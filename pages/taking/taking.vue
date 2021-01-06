<template>
  <view class="taking-block">
    <!-- 房源简介 -->
    <view class="order-head b m">
      <view class="order-head-content">
        <image class="order-head-img" :src="room.pictures[0].image_file"></image>
        <view class="order-head-body">
          <text class="order-head-title ">{{room.title}}</text>
          <text class="order-head-bottom tc">{{ room.number_of_beds}}床·{{ room.maximum_number_of_people }}人</text>
        </view>
      </view>
    </view>

    <view class="content">
      <scroll-view class="msg-list" scroll-y="true" :scroll-with-animation="scrollAnimation" :scroll-top="scrollTop"
        :scroll-into-view="scrollToView">
        <view class="row" v-for="(row,index) in msgList" :key="index" :id="'msg'+row.id">
          <!-- 自己发出的消息 -->
          <view class="my" v-if="row.uid==myuid">
            <view class="left">
              <view v-if="row.type=='text'" class="bubble">
                <rich-text :nodes="row.msg.content"></rich-text>
              </view>
              <view class="username">
                <view class="time">{{row.time}}</view>
              </view>
            </view>
          </view>
          <!-- 别人发出的消息 -->
          <view class="other" v-if="row.uid!=myuid">
            <view class="left">
              <image :src="row.face"></image>
            </view>
            <view class="right">
              <view v-if="row.type=='text'" class="bubble">
                <rich-text :nodes="row.msg.content"></rich-text>
              </view>
              <view class="username">
                <view class="time">{{row.time}}</view>
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
    <!-- 表情栏 -->
    <!-- 底部输入栏 -->
    <view class="input-box" @touchmove.stop.prevent="discard">
      <view class="textbox">
        <view class="box">
          <textarea auto-height="true" placeholder="在这里输入您想要咨询的内容" v-model="textMsg" id="textMsg" />
          </view>
    	</view>
    	<label for="textMsg">
    	<view class="send"  @tap="sendText">
    		<view class="btn">
    			发送
    		</view>
    	</view>
    	</label>
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
        room: '',
        data: '',
        //文字消息
        textMsg:'',
        //消息列表
        scrollAnimation:false,
        scrollTop:0,
        scrollToView:'',
        msgList:[],
        msgImgList:[],
        myuid:0,
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
      this.getMsgList();
    },
    
    methods:{
      getMsgList(){
      	// 消息列表
      	let list = [
      		{id:0,uid:0,time: Moment().format('YYYY-MM-DD HH:mm'),type:"text",msg:{content:"你好"}}]
      	this.msgList = list;
      	// 滚动到底部
      	this.$nextTick(function() {
      		this.scrollTop = 9999;
      		this.scrollAnimation = true;
      	});
      },
      // 接受消息(筛选处理)
      screenMsg(msg){
      	//从长连接处转发给这个方法，进行筛选处理
      	if(msg.uid!=this.myuid){
      		uni.vibrateLong();
      	}
      	switch (msg.type){
      		case 'text':
      			this.addTextMsg(msg);
      			break;
      	}
      	this.$nextTick(function() {
      		this.scrollToView = 'msg'+msg.id
      	});
      },
      // 发送文字消息
      sendText(){
      	if(!this.textMsg){
      		return;
      	}
        let content = this.textMsg;
      	let msg = {content:content}
      	this.sendMsg(msg,'text');
      	this.textMsg = '';
      },
      // 发送消息
      sendMsg(content,type){
      	//实际应用中，此处应该提交长连接，模板仅做本地处理。
      	var nowDate = new Date();
      	let lastid = this.msgList[this.msgList.length-1].id;
      	lastid++;
      	let msg = {id:lastid,uid:0,face:"../../static/kefu.png",time: Moment().format('YYYY-MM-DD HH:mm'),type:type,msg:content};
      	this.screenMsg(msg);
      	// 定时器模拟对方回复,三秒
      	setTimeout(()=>{
      		lastid = this.msgList[this.msgList.length-1].id;
      		lastid++;
      		msg = {id:lastid,uid:1,username:'Booking',face:"../../static/kefu.png",time: Moment().format('YYYY-MM-DD HH:mm'),type:type,msg:content};
      		this.screenMsg(msg);
      	},3000)
      },
      // 处理文字消息
      addTextMsg(msg){
      	this.msgList.push(msg);
      },
      discard(){
      	return;
      }  
    }
    
  }
</script>

<style lang="scss">
  .taking-block {
    margin: 10rpx;
  }
  page {
    background-color: #FFFFFF;
  }
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
  
  //底部输入框
  .input-box{
  	width: 98%;
  	min-height: 100upx;
  	padding: 0 1%;
  	background-color: #F8F8F8;
  	display: flex;
  	position: fixed;
  	z-index: 20;
  	bottom: 0;
  	.send{
  		flex-shrink: 0;
  		width: 100upx;
  		height: 100upx;
  		display: flex;
  		align-items: center;
  		.btn{
  			width: 90upx;
  			height: 56upx;
  			display: flex;
  			justify-content: center;
  			align-items: center;
  			color: #5453bd;
  			font-size: 30upx;
  		}
  	}
  	.textbox{
  		width: 100%;
  		height: 70rpx;
  		margin-top: 20upx;

  		.box{
        width: 95%;
        padding-left: 30upx;
        height: 60rpx;
        align-items: center;
        border-radius: 30rpx;
        background-color: #EEEEEE;
  			textarea{
  			 width: 100%;
         line-height: 60rpx;
         font-size: 20rpx;
  			}
  		}
  	}
  }
  
  .content{
  	width: 100%;
  	.msg-list{
  		.row{
  			padding: 20upx 0;
  			.my .left,.other .right{
  				width: 100%;
  				display: flex;
  				.bubble{
  					max-width: 70%;
  					min-height: 50upx;
  					border-radius: 10upx;
  					padding: 15upx 20upx;
  					display: flex;
  					align-items: center;
  					font-size: 32upx;
  					word-break: break-word;
  				}
  			}
  			.my .right,.other .left{
  				flex-shrink: 0;
  				width: 80upx;
  				height: 80upx;
  				image{
  					width: 80upx;
  					height: 80upx;
  					border-radius: 10upx;
  				}
  			}
  			.my{
  				width: 100%;
  				display: flex;
  				justify-content: flex-end;
  				.left{
  					min-height: 80upx;	
  					align-items: flex-end;
  					justify-content: flex-end;
            flex-wrap: wrap;
            flex-direction: column;
            .username{
            	height: 45upx;
            	font-size: 24upx;
            	color: #666666;
              justify-content: flex-end;
            }
  					.bubble{
  						background-color: #E8E8E8;
  						color: #000;
              font-size: 25rpx;
  					}
  				}
  				.right{
  					margin-left: 15upx;
  				}
  			}
  			.other{
  				width: 100%;
  				display: flex;
  				.left{
  					margin-right: 15upx;
  				}
  				.right{
  					flex-wrap: wrap;
  					.username{
  						width: 100%;
  						height: 45upx;
  						font-size: 24upx;
  						color: #666666;
  						display: flex;
  					}
  					.bubble{
  						background-color:#E6E6FA;
  						color: #333;
              font-size: 25rpx;
  					}
  				}
  			}
  		}
  	}
  }
</style>
