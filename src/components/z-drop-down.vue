<template>
    <div>

        <div class="z-drop-down__content" role="document" tabindex="0">


            <template v-if="false">
                <v-container class="grey lighten-5" style="height: 100%">
                    <v-row
                            no-gutters
                            style=""
                    >
                        <v-col
                                align-self="center"
                                cols="4"
                                class=""
                                style="border-right: 1px solid #f0f0f0;"
                        >
                            <v-list dense>

                                <v-list-item-group
                                        v-model="selectedItem"
                                        color="primary"
                                >
                                    <v-list-item
                                            v-for="(item, i) in items"
                                            :key="i"
                                    >

                                        <v-list-item-content>
                                            <v-list-item-title v-text="item.brand"></v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>

                        </v-col>
                        <v-col
                                align-self="center"
                                class=""
                                cols="8"
                        >
                            <v-list dense>

                                <v-list-item-group
                                        v-model="selectedItem"
                                        color="primary"
                                >
                                    <v-list-item
                                            v-for="(item, i) in items"
                                            :key="i"
                                    >

                                        <v-list-item-content>
                                            <v-list-item-title v-text="item.name"></v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>

                        </v-col>
                    </v-row>
                </v-container>
            </template>


            <template v-if="true">


                <div class="grey lighten-5" style="height: 100%;padding-top: 0; width:100%">
                    <v-row
                            no-gutters
                            style=""
                    >
                        <v-col
                                align-self="center"
                                cols="4"
                                class=""
                                style="border-right: 1px solid #f0f0f0;"
                        >

                            <v-list>
                                <v-list-item-group
                                        v-model="brandIndex"
                                        active-class="white"
                                        light
                                        color="black"
                                >
                                    <v-virtual-scroll
                                            class="ch-ul-no-scrollbar ch-max-width"
                                            :bench="benched"
                                            :items="brands"
                                            :item-height="64"
                                            height="300"
                                    >
                                        <template v-slot:default="{ item }">

                                            <v-list-item>

                                                <v-list-item-content>
                                                   <v-list-item-title v-text="item"></v-list-item-title>
                                                </v-list-item-content>

                                            </v-list-item>


                                        </template>
                                    </v-virtual-scroll>
                                </v-list-item-group>
                            </v-list>
                        </v-col>

                        <v-col
                                align-self="center"
                                class=""
                                cols="8"
                        >
                            <v-list>
                                <v-list-item-group
                                        v-model="selectedSubItem"
                                        active-class="white"

                                        color="black"
                                >
                                    <v-virtual-scroll
                                            class="ch-ul-no-scrollbar ch-scrollbar"
                                            :bench="benched"
                                            :items="subItems"
                                            :item-height="64"
                                            height="300"
                                    >
                                        <template v-slot:default="{ item }">

                                            <v-list-item @click="selectedPhone(item)">

                                                <v-list-item-content>
                                                    <v-list-item-title v-text="item.name"></v-list-item-title>
                                                </v-list-item-content>

                                            </v-list-item>


                                        </template>
                                    </v-virtual-scroll>
                                </v-list-item-group>
                            </v-list>
                        </v-col>
                    </v-row>
                </div>
            </template>
        </div>

    </div>
</template>

<script>
    export default {
        name: "z-drop-down",
        props: ['items'],
        data() {
            return {
                alignments: ['start',
                    'center',
                    'center',
                    'center',
                    'end',],

                brandIndex: '0',
                benched: 30,
                selectedSubItem: ''
            }
        },
        computed: {
            brands() {
                return Array.from(new Set(this.items.map(item => {
                    return item.brand
                })))
            },
            subItems() {
                return this.items.filter(item => {
                    return this.brands[this.brandIndex] === item.brand
                })
            }
        },
        created() {


        },
        methods: {
            selectedPhone(value){

                this.$emit('toggle',value)
            }
        }
    }
</script>

<style lang='scss'>

    .z-drop-down__content {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: self-start;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 300px;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        left: 0;
        /*pointer-events: none;*/
        position: fixed;
        top: 120px;
        -webkit-transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1), z-index 1ms;
        transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1), z-index 1ms;
        width: 100%;
        z-index: 6;
        outline: none;
        transform-origin: center center;
        max-height: 90%;
        align-self: flex-start;
        border-radius: 0;
        -webkit-box-flex: 0;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        margin: 0;
        overflow: visible;
        background: #efefef;
        box-shadow: 2px 2px 2px 2px #f0f0f0;


    }

    .v-col-list {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        contain: strict;
    }

    .ch-ul-no-scrollbar {
        margin-right: -1000px;
        padding-right: 1000px;
        overflow-y: auto;
    }

    .ch-max-width {
        max-width: -webkit-fill-available !important;
    }

    .v-list-item--dense, .v-list--dense .v-list-item {
        min-height: 64px !important;
    }

    .container {

    }

    .ch-ul-no-scrollbar .v-virtual-scroll__container {

        position: relative;
    }

    .ch-ul-no-scrollbar .v-list-item {
        min-height: 64px
    }

    .ch-ul-no-scrollbar .v-list {
        padding: 0;
    }
    .ch-scrollbar .v-virtual-scroll__container{
        width: 500px;
    }
</style>
