<template>
    <div class="sort_list">
        <ul>
            <li v-for="title in tit" :key="title" >{{title.name}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['tit']
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
            }
        }
    }
</style>


