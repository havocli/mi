<template>
    <div class="xmSort">
        <sort :proDatas="data"></sort>
    </div>
</template>

<script>
    import Sort from '../components/xmSort/Sort'
    export default {
        data(){
            return{
                data:[
                    {
                        "id":1,
                        "name":"新品",
                        "pic":"../../../static/img/item1.jpg",
                        "item":[
                            {
                                "itemName":"手机",
                                "product":[
                                    "../../../static/img/itemLi1-1.png",
                                    "../../../static/img/itemLi1-1.png",
                                    "../../../static/img/itemLi1-1.png",
                                    "../../../static/img/itemLi1-1.png",

                                ],
                                "imgBottomUrl":"../../../static/img/item_more1.jpg"
                            },
                            {
                                "itemName":"电视",
                                "product":[
                                    "../../../static/img/itemLi1-12.png",
                                    "../../../static/img/itemLi1-12.png",
                                    "../../../static/img/itemLi1-12.png",
                                    "../../../static/img/itemLi1-12.png",
                                    "../../../static/img/itemLi1-12.png",
                                ]
                            },
                            {
                                "itemName":"电脑",
                                "product":[
                                    "../../../static/img/itemLi1-12.png"
                                ]
                            }
                        ]
                    },
                    {
                        "id":1,
                        "name":"手机",
                        "pic":"../../../static/img/item1.jpg",
                        "item":[
                            {
                                "itemName":"小米手机",
                                "product":[
                                    "../../../static/img/itemLi1-1.png"
                                ],
                                
                            },
                            {
                                "itemName":"红米手机",
                                "product":[
                                    "../../../static/img/itemLi1-12.png"
                                ]
                            },
                            {
                                "itemName":"移动4G+专区",
                                "product":[
                                    "../../../static/img/itemLi1-12.png"
                                ],
                                "imgBottomUrl":"../../../static/img/item_more1.jpg"
                            }
                        ]
                    }
                ]
            }
        },
        components:{
            Sort
        }
    }
</script>

