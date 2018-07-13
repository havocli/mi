<template>
    <div class="loginUserMsg">
        <div class="user_num">
            <input type="text" id="user_name" ref="user_name" placeholder="邮箱/手机号码/小米ID">
        </div>

        <div class="password">
            <input type="text" id="pass_word" ref="pass_word" placeholder="密码">
            <span></span>
        </div>
        <div class="err_tip">{{tip}}</div>

        <div class="go">登录</div>

        <div class="user_go" @click="res">手机短信登录/注册</div>
    </div>
</template>

<script>
import $ from 'jquery' 

    export default {
         data(){
           return{
                tip:'',
                pageNum:1
           }
        },
        methods:{
            res(){
                this.$emit('event',this.pageNum);
                this.$refs.user_name.value='';
                this.$refs.pass_word.value='';
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