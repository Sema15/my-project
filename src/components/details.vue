<template>
    <div class="details">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>{{product[proId].productTitle}}</h1>
                    <img :src="product[proId].image" alt="">
                    <p style="padding-top: 30px" >{{product[proId].desc}}</p>
                    <button @click="goToedit()" type="button" class="btn btn-outline-secondary">Редактировать</button>
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
                proId: this.$route.params.Pid - 1,
                product: json.products,
            }
        },
        props:{

        },
        methods: {
            goToedit() {
                this.$router.push({name: 'edit'})
            }

        }

    }
</script>
