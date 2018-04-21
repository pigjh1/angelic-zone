<template>
    <div id="wrap">
        <div id="skipnav">
            <a href="#main">본문 바로가기</a>
        </div>

        <Header/>

        <main id="main" class="main">
            <Home/>
            <Profile/>
            <Portfolio/>
            <Photo/>
            <Contacts/>
        </main>

        <Footer/>
    </div>
</template>

<script>
import Header from './components/layout/header'
import Footer from './components/layout/footer'

import Home from './components/Home'
import Profile from './components/Profile'
import Portfolio from './components/Portfolio'
import Photo from './components/Photo'
import Contacts from './components/Contacts'

export default {
    name: 'wrap',
    components: {
        Header,
        Footer,

        Home,
        Profile,
        Portfolio,
        Photo,
        Contacts
    }
}
</script>

<style lang="scss" src="./assets/scss/common.scss"></style>
