<template>
    <div class="content">
        <div class="container">
            <div class="card__list">
                <div class="card__item" v-for="item in photos" v-bind:key = "item">
                    <img  :src="item" alt="">
                    <p class="card__desc">{{basetext}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContentBlock",
        data () {
            return {
                photos: ['https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg',
                    'https://24tv.ua/resources/photos/news/201810/1044696.jpg',
                    'http://napirse.ru/pic/9501242711032516.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfD2hVwws59RY-44XMz91DbRqrVTN5Dp0rrgVeYHTS9DRLvSVj',
                'http://foto-cvetov.com/barhatcy/barhatcy_1.jpg',
                'https://img11.postila.ru/data/74/4a/97/8a/744a978ae00f369fe32c5853aaaf79fcadafc9f0990e47ca7ab09a571f732bfe.jpg'],
                basetext: 'Пины для вас'
            };
        }
    }
</script>

<style scoped>
    .card__list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .card__list .card__item{
        display: flex;
        flex-basis: calc(100% / 3 - 30px);
        align-items: flex-end;
        padding: 10px;
        background: #efefef;
        border-radius: 10px;
        margin: 10px;
        flex-direction: column;
    }
    .card__list .card__item img{
        margin-bottom: 20px;
        width: 100%;
        max-height: 305px;
    }
</style>
