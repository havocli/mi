 <template>
    <div class="sort_item">
        <div class="pic_show" >
            <a href="javascript:;"><img :src="items.pic"></a>
        </div>
  
        <div class="item_li" v-for="pro in items.item" :key="pro.itemName">
            <div class="item_tit"> 
                <span>{{pro.itemName}}</span>
            </div>
            <ul>
                <li v-for="showP in pro.product" :key="showP.aaa"><a href="javascript:;"><img :src="showP.shows"><span>{{showP.pro}}</span></a></li>
            </ul>
            <div class="item_more">
                <a href="javascript:;"><img :src="pro.botPic"></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
            }
        },
    
        props:['items'],
        mounted(){
        }
        
    }
</script>

<style lang="scss" scoped>
    .sort_item{
        .pic_show{
            a{
                display: block;
                img{
                    width:100%;
                    height:100%;
                }
            }
            
        }
        
        .item_li{
            .item_tit{
                background: #fff;
                font-size: .14rem;
                text-align: center;
                font-weight: 400;
                margin-top: .1rem;
                height: .64rem;
                line-height: .64rem;
                overflow: hidden;
                color:#3c3c3c;
                span{
                    position:relative;
                    &:before{
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: auto;
                        width: 0.2rem;
                        border-top: 1px solid #e0e0e0;
                        transform: translate3d(-150%,-50%,0); 
                    }
                    &:after{
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: auto;
                        width: 0.2rem;
                        border-top: 1px solid #e0e0e0;
                        transform: translate3d(50%,-50%,0); 
                    }
                }
            }
            ul{
                display:flex;
                flex-wrap:wrap;
                li{
                    width:33.33%;
                    text-align: center;
                    margin-top: .1rem;
                    margin-bottom: .15rem;
                    overflow: hidden;
                    a{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        img{
                            width:.5rem;
                            height:.5rem;
                        }
                        span{
                            margin-top: .14rem;
                            font-size: .12rem;
                            width:100%;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            color: rgba(0,0,0,.54);
                        }
                    }
                }
            }
            .item_more{
                // width:100%;
                // height:.4rem;
                a{
                    display: block;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
            }
        }
        
    }
</style>


