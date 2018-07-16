<template>
    <div class="sort_body">
        <sort-list :tit="proDatas" :tops="pi" @send="receive"></sort-list>
        <sort-content :product="proDatas" :counts="num" @scrolls="scales"><slot></slot></sort-content>
    </div>
</template> 

<script>
    import SortList from './SortList'
    import SortContent from './SortContent'
    export default {
        data(){
            return{
                num:'' ,
                pi:7
            }
        },
        props:['proDatas'],
        methods:{
            receive(unit){
                this.num = unit;
            },
            scales(param){
                if(this.pi!==param){
                    this.pi=param;
                    // console.log(111)
                }else{

                // console.log(123)
                }
            }
        },
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


