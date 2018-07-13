<template>
    <div class="xmLogin">
        <login-header></login-header>
        <login-tel-msg v-show="flag==1" @event="changePage"></login-tel-msg>
        <login-user-msg v-show="flag==2" @event="changePage"></login-user-msg>

        <login-footer></login-footer>
    </div>
</template>

<script>
    import LoginHeader from '../components/xmLogin/LoginHeader'
    import LoginTelMsg from '../components/xmLogin/LoginTelMsg'
    import LoginUserMsg from '../components/xmLogin/LoginUserMsg'
    import LoginFooter from '../components/xmLogin/LoginFooter'

    export default {
        data(){
            return{
                flag:1
            }
        },
        components:{
            LoginHeader,
            LoginTelMsg,
            LoginUserMsg,
            LoginFooter
        },
        methods:{
            changePage(v){
                this.flag =v
            }
        }
        
    }
</script>

<style>
    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
    color: #9b9b9b;
    }
</style>


