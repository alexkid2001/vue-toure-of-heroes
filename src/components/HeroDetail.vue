<template>
    <div>
        <h2>{{hero.name | uppercase}} Details</h2>
        <div><span>id: </span>{{hero.id}}</div>
        <div>
            <label>name:
                <input v-model="hero.name" placeholder="name"/>
            </label>
        </div>
        <button @click="goBack()">go back</button>
    </div>
</template>

<script>
    import { Hero } from '../hero';
    import HeroService from '../hero-service';
    import Router from "vue-router";

    const heroService = new HeroService;

    export default {
        name: "HeroDetail",
        // props: {
        //     'hero': new Hero
        // },
        data() {
          return {
              id: '',
              'hero': new Hero
          }
        },
        created() {
            this.getHero();
        },
        methods: {
            getHero() {
                this.id = +this.$route.params.id;
                heroService.getHero(this.id)
                    .subscribe(hero => this.hero = hero);
            },
            goBack() {
                this.$router.back();
            }
        },
        watch: {
            ready: function () {
                this.getHero();
            }
        },
        filters: {
            uppercase(value) {
                return value.toUpperCase();
            }
        }
    }
</script>

<style scoped>
    /* HeroDetailComponent's private CSS styles */
    label {
        display: inline-block;
        width: 3em;
        margin: .5em 0;
        color: #607D8B;
        font-weight: bold;
    }
    input {
        height: 2em;
        font-size: 1em;
        padding-left: .4em;
    }
    button {
        margin-top: 20px;
        font-family: Arial;
        background-color: #eee;
        border: none;
        padding: 5px 10px;
        border-radius: 4px;
        cursor: pointer;
        cursor: hand;
    }
    button:hover {
        background-color: #cfd8dc;
    }
    button:disabled {
        background-color: #eee;
        color: #ccc;
        cursor: auto;
    }
</style>