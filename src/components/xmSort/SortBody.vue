<template>
    <div class="sort_body">
        <sort-list :tit="proDatas"></sort-list>
        <sort-content :product="proDatas"><slot></slot></sort-content>
    </div>
</template>

<script>
    import SortList from './SortList'
    import SortContent from './SortContent'
    export default {
        // data(){
        //     return{
                
        //     }
        // },
        props:['proDatas'],
        components:{
            SortList,
            SortContent
        }
    }
</script>

<style lang="scss" scoped>
    .sort_body{
        display: flex;
        flex:1;
        overflow:auto;

    }
</style>


