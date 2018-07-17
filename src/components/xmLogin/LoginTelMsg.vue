<template>
    <div class="loginTelMsg">
        <div class="tel_num">
            <div class="tel_right">
                <span>+86</span>
                <i></i>
            </div>
            <input type="text" id="tel_name" placeholder="手机号码" @focus="gone" v-model="info.username">
        </div>

        <div class="ver_code">
            <input type="text" id="code" placeholder="短信验证码" @focus="gone" v-model="info.password">
            <span>获取验证码</span>
        </div>
        <div class="err_tip" ref="tip"><span>{{tip}}</span></div>

        <div class="go" @click="vertify">立即登录/注册</div>

        <div class="user_go" @click="res">用户名密码登录</div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        data(){
           return{
                tip:'',
                info:{},
                pageNum:2
           }
        },
        methods:{
            res(){
                this.$emit('event',this.pageNum);
                this.info.username ='';
                this.info.password ='';
                this.gone();
            },
            gone(){
                this.$refs.tip.style.display = 'none';
            },
            vertify(){
                var reg1 = /^1[345678][0-9]{9}$/i;
                var reg2 = /^\d{6}$/;
                if(!this.info.username){
                    this.$refs.tip.style.display = 'block';
                    this.tip = '请输入手机号'
                }else if(!reg1.test(this.info.username)){
                    this.$refs.tip.style.display = 'block';
                    this.tip = '手机格式不正确'
                }else if(!this.info.password){
                    this.$refs.tip.style.display = 'block';
                    this.tip = '请输入验证码'
                }else if(!reg2.test(this.info.password)){
                    this.$refs.tip.style.display = 'block';
                    this.tip = '请输入六位验证码'
                }else{
                    $.post('http://localhost:3000/sign/api/sign',this.info,(data)=>{
                        if(data){
                            this.info.username ='';
                            this.info.password ='';
                            location.href='http://localhost:8080/#/sort';
                        }else{
                            this.$refs.tip.style.display = 'block';
                            this.tip = '账号已存在，请选择用户名密码登录';
                        }
                    },'json')
                  
                }
                
            }
        },
       
    }
</script>

<style lang="scss" scoped>
    .loginTelMsg{
        width:3.19rem;
        margin:0 auto;
        overflow: hidden;
        .tel_num{
            display:-webkit-flex;
            margin-bottom:1px;
            border-bottom:1px solid #d3d3d3;
            -webkit-align-items: center;
            .tel_right{
                padding: .1rem;
                margin-right: 8px;
                color: #4a4a4a;
                display:-webkit-flex;
                span{
                    margin-right: 2px;
                    color: #9b9b9b;
                    font-size: .18rem;
                    line-height: .2rem;
                }
                i{
                    font-style: normal;
                    margin-left: .03rem;
                    margin-top:.05rem;
                    display: block;
                    width: .07rem;
                    height: .07rem; 
                    border-width: .01rem;
                    border-style: solid;
                    border-color: transparent transparent #9b9b9b #9b9b9b;
                    -webkit-transform: rotate(-135deg);
                }
            }
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
        .ver_code{
            display:-webkit-flex;
            margin-bottom:1px;
            border-bottom:1px solid #d3d3d3;
            -webkit-align-items: center;
            input{
                padding: .16rem 0;
                width:2.09rem;
                line-height: normal;
                display: block;
                font-size: .18rem;
                border:none;
                outline: none;
            }
            span{
                -webkit-flex:1;
                display: block;
                padding: .1rem .2rem;
                cursor: pointer;
                color: #2ea5e5;
                font-size: .14rem;
                text-align:center;
            }

        }
        .err_tip{
            margin-bottom: .05rem;
            line-height: .2rem;
            color: #F66;
            padding-top: .15rem;
            font-size:.14rem;
            display:none;
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
            box-sizing: border-box;
            width: 100%;
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

