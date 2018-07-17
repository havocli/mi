<template>
    <div class="sort_content"  ref="cont" @scroll="compute">
        <sort-con-item v-for="item in product" :key="item.id" :items="item"></sort-con-item>
        <aside></aside>
    </div>
</template>

<script>
    import SortConItem from './SortConItem'
    export default {
        data(){
            return{
                position:[0,1062,2767,3767,4545,5041,5536,6241,7241,7779,8170,8665,9055,9445,9834,11044,11435,11719,11900]
            }
        },
        props:['product','counts'],
        components:{
            SortConItem
        },
        methods:{
            compute(){
                var top = this.$refs.cont.scrollTop;
                var p   = this.position;
                // p.forEach((v,k)=>{
                //     if(top<p[k+1]&&top>=v){
                //          this.$emit('scrolls',k)
                //     }
                // });
                for(let i =0;i<p.length;i++){
                    if(top<p[i+1]&&top>=p[i]){
                        this.$emit('scrolls',i)
                    }
                }
            }
        },
        updated(){
            this.$refs.cont.scrollTop=this.position[this.counts]
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
            height:80%;
            width:100%;
        }
    }
</style>


