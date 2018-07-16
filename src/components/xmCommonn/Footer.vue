
<template>
    <div class="footer">
        <ul>
          <li><a href="javascript:;"><i class="iconfont icon-shouye1"></i><span>首页</span></a></li>
          <li><a href="javascript:;"><i class="iconfont icon-fenlei"></i><span class="foot_second">分类</span></a></li>
          <li><router-link to="/cart"><i class="iconfont icon-gouwuche1"></i><span>购物车</span></router-link></li>
          <li><router-link to="/my"><i class="iconfont icon-tubiaolunkuo-"></i><span>我的</span></router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style scoped>
.footer{
  background:#ffffff;
  height:.5rem;
  border-bottom:1px solid #fffbff;
}
  .footer ul{
    display:flex;
    justify-content: space-around;
}
a{
  display:flex;
  flex-direction: column
}
.foot_second{
  color:#f76d00;
}
  span{
    font-size:0.06rem;
    display:block;
    color:#b5b6b5;
  }
  .iconfont{
    color:#737173;
    font-size:0.26rem;
  }
  .icon-fenlei{
    color:#f76d00;
  }
</style>