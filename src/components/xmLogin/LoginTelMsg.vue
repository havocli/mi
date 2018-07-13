<template>
    <div class="loginTelMsg">
        <div class="tel_num">
            <div class="tel_right">
                <span>+86</span>
                <i></i>
            </div>
            <input type="text" id="tel_name" ref='tel_name' placeholder="手机号码">
        </div>

        <div class="ver_code">
            <input type="text" id="code" ref='code' placeholder="短信验证码">
            <span>获取验证码</span>
        </div>
        <div class="err_tip">{{tip}}</div>

        <div class="go">立即登录/注册</div>

        <div class="user_go" @click="res">用户名密码登录</div>
    </div>
</template>

<script>
    export default {
        data(){
           return{
                tip:'',
                pageNum:2
           }
        },
        methods:{
            res(){
                this.$emit('event',this.pageNum);
                this.$refs.tel_name.value='';
                this.$refs.code.value='';
            }
        }
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
            }

        }
        .err_tip{
            margin-bottom: .05rem;
            line-height: .2rem;
            color: #F66;
            display: none;
            padding-top: .15rem;
            font-size:.14rem;
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

