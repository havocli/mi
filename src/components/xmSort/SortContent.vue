<template>
    <div class="sort_content">
        <sort-con-item v-for="item in product" :key="item" :items="item"></sort-con-item>
    </div>
</template>

<script>
    import SortConItem from './SortConItem'
    export default {
        props:['product'],
        components:{
            SortConItem
        }
    }
</script>

<style lang="scss" scoped>
    .sort_content{
        padding:0 .16rem;
        -webkit-flex:1;
    }
</style>


