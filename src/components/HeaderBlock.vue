<template>
    <div class="header">
        <div class="container">
            <ul class="header__tabs">
                <li><a >home</a></li>
                <li><a href="">TAB</a></li>
                <li><a href="">TAB</a></li>
                <li><a href="">TAB</a></li>
                <li><a href="">TAB</a></li>
                <li><a href="">TAB</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderBlock',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header__tabs{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        list-style: none;
    }
    .header__tabs li{

        flex-basis: calc(100% / 6);
        text-align: center;
    }
    .header__tabs li a{
        padding: 10px 3px;
        font-size: 20px;
        line-height: 22px;
        text-transform: uppercase;
    }
    .header__tabs li a:hover{
        background-color: burlywood;
    }
</style>
