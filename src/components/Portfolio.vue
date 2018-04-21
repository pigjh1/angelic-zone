<template>
    <section id="portfolio" class="portfolio">
        <div class="l-wrap">
            <h2>Portfolio</h2>

            <div class="option">
                <div class="option-filter" v-for="(active, menu) in menus">
                    <span class="option-label">{{ menu }}</span>
        			<div id="filter" class="filter" data-option-key="filter"
                        v-if="menu === filter" v-for="(options, filter) in filters">
                        <div class="option-item"
                            v-for="(active, option) in options"
                            :class="{ 'is-active': active }"
                            @click="setFilter(filter, option)">
                            {{ option }}
                        </div>
                    </div>
                </div>
                <div class="option-clear" @click="clearAllFilters">[Clear]</div>
            </div>

            <ul class="pr">
                <li class="box" v-for="portfolio in list">
                    <div class="pic" v-if="portfolio.img1 !== ''">
                        <img :src="getPic(portfolio.directory, portfolio.img1)" alt="">
                    </div>
                    <ul class="cont">
                        <li class="tit">{{ portfolio.project }}</li>
                        <li class="url" v-if="portfolio.siteState === 'Y'">
                            <a :href="portfolio.site" target="_blank">{{ portfolio.site }}</a>
                        </li>
                        <li v-if="portfolio.rate !== ''"><span>참여</span> | {{ portfolio.rate }}</li>
                        <li v-if="portfolio.period !== ''"><span>기간</span> | {{ portfolio.period }}</li>
                        <li v-if="portfolio.working !== ''"><span>비고</span> | {{ portfolio.working }}</li>
                    </ul>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
        fetch('./static/portfolio.json')
        .then(response => response.json())
        .then(portfolios => {
            this.portfolios = portfolios;

            portfolios.forEach(({ category, year }) => {
                this.$set(this.filters.categories, category, false);
                this.$set(this.filters.years, year, false);
            });
        });
    },
    data() {
        return {
            portfolios: [],
            filters: { years: {}, categories: {} },
            menus: { years: false, categories: false }
        }
    },
    computed: {
        list() {
            let { years, categories } = this.activeFilters;

            return this.portfolios.filter(({ year, category }) => {
                if (categories.length && !~categories.indexOf(category)) return false;
                return (
                    !years.length || years.every(y => ~year.indexOf(y))
                );
            });
        },

        activeFilters() {
            let { years, categories } = this.filters;

            return {
                years: Object.keys(years).filter(c => years[c]),
                categories: Object.keys(categories).filter(c => categories[c])
            };
        }
    },
    methods: {
        setFilter(filter, option) {
            if (filter === "categories") {
                this.filters[filter][option] = !this.filters[filter][option];
            } else {
                setTimeout(() => {
                    this.clearFilter(filter, option, this.filters[filter][option]);
                }, 100);
            }
        },

        clearFilter(filter, except, active) {
            Object.keys(this.filters[filter]).forEach(option => {
                this.filters[filter][option] = (except === option && !active);
            });
        },

        clearAllFilters() {
            Object.keys(this.menus).forEach(this.clearFilter);
        },

        getPic(directory, imgsrc) {
            return '/static/images/portfolio/' + directory + '/' + imgsrc;
        }
    }
}
</script>
<style lang="scss" scoped>
.portfolio{display: none}
.portfolio {
    background: #f17c72;

    .option {
        position: relative;

        &-label {
            text-transform: capitalize;
        }

        &-filter {
            margin: .5em 0;
        }

        .filter {
            margin-top: -1.5em;
            padding-left: 6em;
        }

        &-item {
            display: inline-block;
            margin: 0 .5em;
            cursor: pointer;

            &.is-active {
                color: #ac3934;
                font-weight: bold;
            }
        }

        &-clear {
            position: absolute;
            bottom: 0;
            right: 0;
            cursor: pointer;
        }
    }
    .pr {
        -moz-column-width: 15em;
        -webkit-column-width: 15em;
        -moz-column-gap: 1.5em;
        -webkit-column-gap: 1.5em;

    }
    .box {
        display: inline-block;
        margin: 0.5em;
        width: 100%;
        box-sizing: border-box;
        border: 3px solid #f29188;
        background: #e6655f;
    }
    .pic {
        position: relative;
        text-align: center;

        &:before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            background: #f29188;
            opacity: 0.4;
            mix-blend-mode: multiply;
        }

        img {
            width: 100%;
        }
    }
    .cont {
        padding: 15px 20px;
        word-break: break-all;
        span {
            font-weight: bold;
        }
    }
    .tit {
        font-weight: bold;
        color: #ffe7e5;
        font-size: 1.077em;
        letter-spacing: -0.05em;
    }
    .url {
        font-size: 0.846em;
        a {
            color: #fff;
        }
    }
}
</style>
