<template>
    <div class="sort">
        <sort-list></sort-list>
        <sort-content></sort-content>
    </div>
</template>

<script>
    import SortList from './SortList'
    import SortContent from './SortContent'
    export default {
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


