<template>
    <div class="details">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>{{product.productTitle}}</h1>
                    <img :src="product.image" class="img-fluid" alt="">
                    <p style="padding-top: 30px">{{product.desc}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {PRODUCTS} from "../assets/data/productList";

    export default {
        name: 'details',
        data() {
            return {
                proId: this.$route.params.Pid,
                product: {}
            }
        },
        mounted() {
            this.product = PRODUCTS[this.proId - 1] || {};
        }
    }
</script>
