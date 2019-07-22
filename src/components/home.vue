<template>
    <div class="home">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-6" v-for="(data,index) in products" :key="index">
                    <img :src="data.image" class="img-fluid" alt="">
                    <h3 @click="goTodetail(data.productId)">{{data.productTitle}}</h3>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {PRODUCTS} from "../assets/data/productList";

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
                products: PRODUCTS

            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
