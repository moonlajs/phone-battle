<template>
    <div>
        <template>
            <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
        </template>
        <v-parallax
                dark
                src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
            <v-row
                    align="center"
                    justify="center"
            >
                <v-col
                        class="text-center"
                        cols="12"
                >
                    <h1 class="text-h4 font-weight-thin mb-4">
                        Vuetify
                    </h1>
                    <h4 class="subheading">
                        Build your application today!
                    </h4>
                </v-col>
            </v-row>
        </v-parallax>

        <v-parallax
                height="300"
                src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
        ></v-parallax>
    </div>
</template>

<script>
    export default {
        name: "parallax",
        data() {
            return {}
        }
    }
</script>

<style lang='scss'>

</style>
