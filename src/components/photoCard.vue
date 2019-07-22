<template>
    <div class="card__list">
        <div class="card__item" v-for="item in data.src" v-bind:key="item">
            <div class="card__preview">
                <img
                        :src="item.src" alt="">
            </div>
            <div class="card__description">
                <p>{{item.src}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "photoCard",
        data () {
            return {
                src: ['https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg',
                    'https://avatars.mds.yandex.net/get-pdb/224945/f358b199-97c2-45f4-a565-433a62935ec6/s375',
                    'https://klike.net/uploads/posts/2019-01/1547367999_1.jpg']
            };
        },

    }

</script>

<style scoped>

</style>
