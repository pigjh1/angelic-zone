<template>
    <section id="contacts" class="contacts">
        <h2>Contacts</h2>
        <div class="box">
            <!-- TODO: 아이콘으로 변경 -->
            <!--
                https://github.com/pigjh1
                https://pigjh1.github.io/
            -->
            <a href="http://twitter.com/pigjh1" target="_blank"><span class="social twitter">twitter</span></a>
            <a href="http://www.facebook.com/pigjh1" target="_blank"><span class="social facebook">facebook</span></a>
            <a href="https://plus.google.com/u/0/102944575822312165419/posts" target="_blank"><span class="social google">google</span></a>
            <a href="https://www.instagram.com/pigjh1/" target="_blank"><span class="social insta">instagram</span></a>
            <a href="http://pigjh1.tistory.com/" target="_blank"><span class="social tistory">tistory</span></a>
            <a href="http://www.lomography.co.kr/homes/pigjh1" target="_blank"><span class="social lomo">lomo</span></a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.contacts {
    background: #3f9fc9;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: column;
}
.social,
.social *{display:inline-block;overflow:visible;position:relative;margin:0;padding:0;border:0;background:url('/static/images/ico_social.png') no-repeat;font-size:0;}
.social {margin-right:4px}
.social *{left:4px;cursor:pointer;}
.social,
.social *{width:45px;height:45px;line-height:45px}
.social.facebook{background-position:0 0}
.social.twitter{background-position:-50px 0}
.social.google{background-position:-100px 0}
.social.insta{background-position:-150px 0}
.social.tistory{background-position:-200px 0}
.social.naverblog{background-position:-250px 0}
.social.lomo{background-position:-300px 0}
.social.evernote{background-position:0 -50px}
.social.picasa{background-position:-50px -50px}
.social.flickr{background-position:-100px -50px}
</style>
