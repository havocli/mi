<template>
    <div class="LoginFooter">
        <div class="other_login">
            <p><span>其他方式登录</span></p>
            <div class="other_icon">
                <a href="javascript:;"></a>
                <a href="javascript:;"></a>
                <a href="javascript:;"></a>
            </div>
        </div>  
        <div class="login_state">
            <a href="javascript:;">简体</a>|
            <a href="javascript:;">繁体</a>|
            <a href="javascript:;">English</a>|
            <a href="javascript:;">常见问题</a>|
            <a href="javascript:;">隐私政策</a>
        </div>      
    </div>
    
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .LoginFooter{
        
        .other_login{
            width:3.19rem;
            margin:0 auto;
            padding-top:.4rem;
            padding-bottom:.83rem;
            p{
                position: relative;
                padding-bottom:.1rem;
                span{
                    display: block;
                    width:80px;
                    margin:0 auto;
                    background:#fff;
                    text-align: center;
                    font-size: .12rem;
                    color:#b0b0b0;
                }
                &:after{
                    content:'';
                    display: block;
                    width:100%;
                    border-top:1px solid #f2f2f2;
                    position: absolute;
                    top:.08rem;
                    z-index: -1;

                }
            }
            .other_icon{
                padding-top:.1rem;
                text-align:center;
                display:-webkit-flex;
                justify-content: center;
                a{
                    width: .3rem;
                    height: .3rem;
                    margin: 0 .12rem;
                    background:url(../../assets/login_qq.jpg) no-repeat;
                    background-size:100% 100%;
                    &:nth-child(2){
                        background-image: url(../../assets/login_weibo.jpg);
                        background-size: 100% 100%;
                    }
                    &:nth-child(3){
                        background-image: url(../../assets/login_zhifubao.jpg);
                        background-size:100% 100%;
                    }
                }
            }
        }
        .login_state{
            position:fixed;
            width:100%;
            bottom:.7rem;
            font-size:.14rem;
            color:#9b9b9b;
            text-align: center;
            a{
                color:#9b9b9b;
                padding:0 .1rem;
                &:first-child{
                    color:#4a4a4a;
                }
            }
        }
    }
</style>


