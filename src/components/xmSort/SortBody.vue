<template>
    <div class="sort_body">
        <sort-list></sort-list>
        <sort-content :product="proDatas"></sort-content>
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
        display: -webkit-flex;
        .sort-content{
            height:100%;
        
        }
    }
</style>


