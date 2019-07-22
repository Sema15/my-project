<template>
    <div id="main">
        <HeaderBlock/>
        <ContentBlock/>
        <FooterBlock/>
    </div>
</template>

<script>
    import HeaderBlock from './components/HeaderBlock.vue'
    import ContentBlock from './components/ContentBlock.vue'
    import FooterBlock from './components/FooterBlock.vue'

    export default {
        name: 'app',
        components: {
            HeaderBlock,
            ContentBlock,
            FooterBlock
        }
    }
</script>

<style>
    @import './assets/styles/framework.css';

    * {
        box-sizing: border-box;
        font-family: Roboto,sans-serif;
        margin: 0;
        padding: 0;
    }


</style>
