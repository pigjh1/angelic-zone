<template>
    <section id="photo" class="photo">
        <h2>Photo</h2>
        <h3>Instagram</h3>
        <div class="l-wrap">
            <ul>
                <li class="box" v-for="item in list">
                    <img :src="item" alt="">
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.photo {
    background: #7f4c75;

    h3 {
        color: #f2bde8;
        text-align: center;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
    }

    li {
        flex: 0 0 25%;
    }
}
</style>

<script>
export default {
    mounted() {
        const accessToken = '247077117.698b843.f01b7ec54d2d4482abe979d7ae96f95e';
        const url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='+accessToken+'&callback=?';

        fetch(url)
        .then(response => response.json())
        .then(insta => {
            let list = this.list;
            insta.data.forEach(function(photos) {
                let img = photos.images.standard_resolution.url;
                list.push(img);
            });
        });
    },
    data() {
        return {
            list: []
        }
    },
    computed: {

    },
    methods: {

    }
}
</script>
