<template>
    <header id="header" class="header">
        <div class="l-wrap">
            <h1>Angelic Zone</h1>
            <nav id="gnb" class="gnb">
                <a href="#home" class="is-active">Home</a>
                <a href="#profile">Profile</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#photo">Photo</a>
                <a href="#contacts">Contacts</a>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
#header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 35px;
    padding-top: 10px;
    background: #000;
    z-index: 100;

    h1 {
        float: left;
        font-size: 1.5em;
        font-weight: bold;
        color: #FFF;
    }

    .gnb {
        float: right;
        text-align: right;
        font-size: 1.3em;

        a {
            margin: 0 15px;
            color: #9c9c9c;
            text-transform: uppercase;
            font-weight: bold;

            &.is-active {
                color: #FFF;
            }
        }
    }
}

</style>
