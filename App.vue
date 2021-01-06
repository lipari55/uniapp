<script>
  import _ from './underscore.js'
  import Moment from './moment.js'

  export default {
    onLaunch: function() {
      console.log('App Launch')
    },
    onShow: function() {
      console.log('App Show')
    },
    onHide: function() {
      console.log('App Hide')
    }
  }
</script>

<style lang="scss">
  /*每个页面公共css */
  @import "common/common.css";
  @import "common/iconfont.css";
  .uni-list-item__extra-text {
    color: #000000!important;
    font-size: 28rpx!important;
  }
  .uni-list-item__content-title {
    color: #8F8F94!important;
  }
  .select-tab {
    background-color: #F8F8F8!important;
    height: 20px!important;
    margin-top: -10px!important;
  }
  .priceTag .is-tag {
    width: 141px!important;
  }
</style>
