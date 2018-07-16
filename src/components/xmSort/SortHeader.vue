<template>
    <div class="sort_header">
      <router-link to="/phone"><img src="../../assets/sort01.png" alt=""></router-link>
      <span>分类</span>
      <router-link to="/search"><img src="../../assets/sort02.png" alt=""></router-link>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
  .sort_header{
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f2f2f2;
    padding: 0 0.15rem;
    span{
      display: block;
      font-size: 0.16rem;
      color:#666;
    }
    a{
      display: block;
      width: 0.21rem;
      height: 0.24rem;
      img{
        display: block;
        width: 0.21rem;
        height: 0.24rem;
      }
    }
  }
</style>