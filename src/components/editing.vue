<template>
    <div class="eidt">
        <div class="container">
            <div class="form-group">
                <label for="exampleTextarea">{{product[proId].productTitle}}</label>
                <textarea class="form-control" id="exampleTextarea" rows="3" v-html="product[proId].desc"></textarea>
            </div>
            <button v-on:click="change" type="button" class="btn btn-outline-secondary">Change</button>
        </div>
    </div>
</template>

<script>
    import json from "../assets/data/productList.json";
    export default {
        name: "editing",
        data() {
            return {
                proId: this.$route.params.Pid - 1,
                product: json.products,
            }
        },
        methods:{
            change: function(){
                this.$refs.header.innerText = ''
            }
        }
    }
</script>

<style scoped>

</style>
