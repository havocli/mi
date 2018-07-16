<template>
    <div class="sort_content"  ref="cont" @scroll="compute">
        <sort-con-item v-for="item in product" :key="item" :items="item"></sort-con-item>
        <aside></aside>
    </div>
</template>

<script>
    import SortConItem from './SortConItem'
    export default {
        props:['product'],
        components:{
            SortConItem
        },
        methods:{
            compute(){
                // console.log(this.$refs.cont.scrollTop)
            }
        },
        mounted(){
            // this.$refs.cont.scrollTop=3767
            
        }
    }
</script>

<style lang="scss" scoped>
    .sort_content{
        padding:0 .16rem;
        flex:1;
        height:100%;
        overflow-y: auto;
        aside{
            height:3.87rem;
            width:100%;
        }
    }
</style>


