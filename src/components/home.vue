<template>
    <div class="home">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-6" v-for="(data,index) in products" :key="index">
                    <img :src="data.image" alt="">
                    <h3 @click="goTodetail(data.productId)">{{data.productTitle}}</h3>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import json from "../assets/data/productList.json";

    export default {

        name: 'home',
        methods: {
            goTodetail(proId) {
                this.$router.push({name: 'details', params: {Pid: proId}})
            }

        },
        data() {
            return {
                title: 'Home',
                products: json.products

            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home .container .row img{
        border-radius: 10px 10px 0 0;
    }
</style>
