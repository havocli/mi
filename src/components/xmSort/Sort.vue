<template>
    <div class="sort">
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
    .sort{
        display: -webkit-flex;
    }
</style>


