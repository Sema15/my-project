<template>
    <div class="details">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>{{product[proId].productTitle}}</h1>
                    <img :src="product[proId].image" alt="">
                    <p style="padding-top: 30px">{{product[proId].desc}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import json from "../assets/data/productList.json";

    export default {
        name: 'details',
        data() {
            return {
                proId: this.$route.params.Pid,
                product: json.products
            }
        },

    }
</script>
