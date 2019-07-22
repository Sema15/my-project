<template>
    <div id="app">
        <div class="nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                            aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarColor01">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <router-link class="nav-link" to="/">HOME</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/blog">BLOG</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/services">SERVICES</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/contact">CONTATS</router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
            <transition name="moveInUp">
                <router-view/>
            </transition>


    </div>
</template>
<script>
    export default {
        name: 'App'
    }
</script>
<style>
    @import "assets/styles/framework.css";

    .moveInUp-enter-active {
        animation: fadeIn 1s ease-in;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }
</style>
