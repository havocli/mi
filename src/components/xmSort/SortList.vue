<template>
    <div class="sort_list" ref="lists">
        <ul>
            <li v-for="(title,num) in tit" :key="(title.name)" @click="counts(num)" ref="lis" :asd="tops">{{title.name}}</li>
        </ul>
    </div>
</template>

<script>
    import $ from "jquery"
    export default {
        data(){
            return{
                rolls:[0,0,0,0,0,0,0,0,0,0,0,0,38,83,128,173,218,262]
            }
        },
        props:['tit','tops'],
        methods:{
            counts(units){
                this.$emit('send',units);
                $('li').eq(units).addClass('active').siblings().removeClass('active');
            },
            // roll(){
            //     console.log(this.$refs.lists.scrollTop)
            // }
        },
        mounted(){
            
        },
        updated(){
            // console.log(this.tops)
            $('li').eq(this.tops).addClass('active').siblings().removeClass('active');
            this.$refs.lists.scrollTop=this.rolls[this.tops]
            return false;
        }
    }
</script>

<style lang="scss" scoped>
    .sort_list{
        width:.78rem;
        height:100%;
        overflow-y: auto;
        ul{
            border-right:1px solid #efefef;
            li{
                line-height:.46rem;
                font-size:.14rem;
                color:#3c3c3c;
                text-align: center;
                transition: all .1s;
            }
            .active{
                color:#fb7d34;
                transform:scale(1.25)
            }
        }
    }
</style>


