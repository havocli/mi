<template>
    <div class="loginUserMsg">
        <div class="user_num">
            <input type="text" id="user_name" @focus="gone" v-model="info.username" placeholder="邮箱/手机号码/小米ID">
        </div>
        <div class="password">
            <input type="password" id="pass_word" @focus="gone" v-model="info.password" placeholder="密码">
            <span></span>
        </div>
        <div class="err_tip" ref="tip"><span>{{tip}}</span></div>
    
        <div class="go" @click="vertify">登录</div>

        <div class="user_go" @click="res">手机短信登录/注册</div>
    </div>
</template>

<script>
    import $ from 'jquery' 
    export default {
         data(){
           return{
                tip:'',
                pageNum:1,
                info:{}
           }
        },
        methods:{
            res(){
                this.$emit('event',this.pageNum);
                this.info.username='';
                this.info.password='';
                this.gone();
            },
            gone(){
                this.$refs.tip.style.display = 'none';
            },
            vertify(){
                var reg1 = /^1[345678][0-9]{9}$/i;

                if(!this.info.username){
                    this.$refs.tip.style.display = 'block';
                    this.tip = '请输入账号'
                }else if(!reg1.test(this.info.username)){
                    this.$refs.tip.style.display = 'block';
                    this.tip = '用户名不正确'
                }else if(!this.info.password){
                    this.$refs.tip.style.display = 'block';
                    this.tip = '请输入密码'
                }else{
                  
                  
                }
                

                
            }
        },
        mounted(){
           
        }
    }
</script>

<style lang="scss" scoped>
    .loginUserMsg{
        width:3.19rem;
        margin:0 auto;
        overflow: hidden;
        .user_num{
            display:-webkit-flex;
            margin-bottom:1px;
            border-bottom:1px solid #d3d3d3;
            -webkit-align-items: center;
            
            input{
                -webkit-flex:1;
                padding: .16rem 0;
                line-height: normal;
                display: block;
                font-size: .18rem;
                border:none;
                outline: none;
            }
            
        }
        .password{
            display:-webkit-flex;
            margin-bottom:1px;
            border-bottom:1px solid #d3d3d3;
            -webkit-align-items: center;
            input{
                -webkit-flex:1;
                padding: .16rem 0;
                line-height: normal;
                display: block;
                font-size: .18rem;
                border:none;
                outline: none;
            }
            span{
                width:.2rem;
                height:.12rem;
                cursor: pointer;
                background: url(../../assets/arrow.jpg) no-repeat center;
                background-size:100% 100%;
            }

        }
        .err_tip{
            display:none;
            margin-bottom: .05rem;
            line-height: .2rem;
            color: #F66;
            padding-top: .15rem;
            font-size:.14rem;
            span{
                background:url(../../assets/login_tip.jpg) no-repeat left center;
                background-size:.14rem .14rem;
                padding-left:.19rem;
            }
        }
        .go{
            margin-top:.24rem;
            margin-bottom:.14rem;
            width: 100%;
            padding: .1rem 0;
            margin-bottom: .24rem;
            text-align: center;
            font-size: .18rem;
            color: #fff;
            cursor: pointer;
            -webkit-border-radius: .06rem;
            -moz-border-radius: .06rem;
            -o-border-radius: .06rem;
            border-radius: .06rem;
            overflow: hidden;
            background-color: #ff6700;
        }
        .user_go{
            width: 100%;
            box-sizing: border-box;
            padding: .1rem 0;
            display: block;
            margin-bottom: .14rem;
            text-align: center;
            font-size: .18rem;
            cursor: pointer;
            -webkit-border-radius: .06rem;
            -moz-border-radius: .06rem;
            -o-border-radius: .06rem;
            border-radius: .06rem;
            overflow: hidden;
            background: #fff;
            border: .01rem solid #d3d3d3;
            color: #000;
        }
    }
</style>