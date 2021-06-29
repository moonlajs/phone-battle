<template>
    <div>

        <v-container v-if="skeletonShow">
            <v-skeleton-loader
                    v-bind="skeletonAttrs"
                    type="article, actions"
            ></v-skeleton-loader>

        </v-container>


        <v-container v-if="false" id="dropdown-example-3" class="d-flex justify-space-between mb-6">
            <div style="width: 48%;">
                <v-overflow-btn
                        class="my-2"
                        :label="dropdown_one_label"
                        background-color="#f0f0f0"
                >

                </v-overflow-btn>
                <!-- <v-btn
                         class="ma-2"
                         outlined
                         fab
                         color="teal"
                 >
                     {{dropdown_one_label}}
                     <v-icon>mdi-format-list-bulleted-square</v-icon>
                 </v-btn>-->
            </div>
            <div style="width: 48%;">
                <v-overflow-btn
                        class="my-2"
                        :items="dropdown_two"
                        :label="dropdown_two_label"
                        item-value="name"
                        item-text="name"
                        background-color="#f0f0f0"
                ></v-overflow-btn>
            </div>
        </v-container>
        <v-container class="grey lighten-5" v-if="false">
            <v-row>
                <template v-for="n in 4">
                    <v-col :key="n">
                        <v-card
                                class="pa-2"
                                outlined
                                tile
                        >
                            Column
                        </v-card>
                    </v-col>
                    <v-responsive
                            v-if="n === 2"
                            :key="`width-${n}`"
                            width="100%"
                    ></v-responsive>
                </template>
            </v-row>
        </v-container>
        <v-container fluid v-if="false">
            <v-select
                    v-model="selectedFruits"
                    :items="fruits"
                    label="Favorite Fruits"
            >
                <template v-slot:prepend-item>
                    <v-list-item
                            ripple
                            @click="selectAll"
                    >
                        <v-list-item-action>
                            <v-icon :color="selectedFruits.length > 0 ? 'indigo darken-4' : ''">
                                {{ icon }}
                            </v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                全选
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider class="mt-2"></v-divider>
                </template>
                <template v-slot:append-item>
                    <v-divider class="mb-2"></v-divider>
                    <v-list-item disabled>
                        <v-list-item-avatar color="grey lighten-3">
                            <v-icon>
                                mdi-food-apple
                            </v-icon>
                        </v-list-item-avatar>

                        <v-list-item-content v-if="likesAllFruit">
                            <v-list-item-title>
                                你选的真多
                            </v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-content v-else-if="likesSomeFruit">
                            <v-list-item-title>
                                水果数量：
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{ selectedFruits.length }}
                            </v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-content v-else>
                            <v-list-item-title>
                                都不喜欢吗？
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                重新选择一下吧!
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-select>
        </v-container>

        <v-container fluid v-if="false">
            <v-select
                    v-model="selectedFruits"
                    :items="fruits"
                    label="Favorite Fruits"
            >
                <template v-slot:prepend-item>
                    <v-list-item
                            ripple
                            @click="selectAll"
                    >
                        <v-list-item-action>
                            <v-icon :color="selectedFruits.length > 0 ? 'indigo darken-4' : ''">
                                {{ icon }}
                            </v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                全选
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider class="mt-2"></v-divider>
                </template>
                <template v-slot:append-item>
                    <v-divider class="mb-2"></v-divider>
                    <v-list-item disabled>
                        <v-list-item-avatar color="grey lighten-3">
                            <v-icon>
                                mdi-food-apple
                            </v-icon>
                        </v-list-item-avatar>

                        <v-list-item-content v-if="likesAllFruit">
                            <v-list-item-title>
                                Holy smokes, someone call the fruit police!
                            </v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-content v-else-if="likesSomeFruit">
                            <v-list-item-title>
                                水果数量：
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{ selectedFruits.length }}
                            </v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-content v-else>
                            <v-list-item-title>
                                都不喜欢吗？
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                重新选择一下吧!
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-select>
        </v-container>


        <v-bottom-sheet v-model="sheet" v-if="false">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                        color="purple"
                        dark
                        v-bind="attrs"
                        v-on="on"
                >
                    Open In
                </v-btn>
            </template>
            <v-list>
                <v-subheader>Open in</v-subheader>
                <v-list-item
                        v-for="tile in tiles"
                        :key="tile.title"
                        @click="sheet = false"
                >
                    <v-list-item-avatar>
                        <v-avatar
                                size="32px"
                                tile
                        >
                            <img
                                    :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                                    :alt="tile.title"
                            >
                        </v-avatar>
                    </v-list-item-avatar>
                    <v-list-item-title>{{ tile.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-bottom-sheet>


        <v-container class="grey lighten-5" v-if="false">
            <v-row>
                <template v-for="n in 2">
                    <v-col :key="n">
                        <v-combobox
                                v-model="select"
                                outlined
                                dense
                                label="Select a favorite activity or create a new one"
                        ></v-combobox>
                    </v-col>
                    <v-responsive
                            v-if="n === 2"
                            :key="`width-${n}`"
                            width="100%"
                    ></v-responsive>
                </template>
            </v-row>
            <zDropDown v-if="showDropDown"></zDropDown>
        </v-container>

        <v-container fluid v-if="false">
            <v-row>
                <v-col cols="6">
                    <v-combobox
                            :label="dropdown_one_label"
                            outlined
                            dense
                    ></v-combobox>
                </v-col>
                <v-col cols="6">
                    <v-combobox
                            :label="dropdown_two_label"
                            outlined
                            dense
                    ></v-combobox>
                </v-col>
            </v-row>
        </v-container>


        <v-container fluid v-if="true">
            <v-row class="ch-row-bar">
                <v-col cols="6">
                    <z-phone-button :title="dropdown_one_label" @toggle="toggleDropDownOne"
                                    :focused="showDropDownOne"></z-phone-button>
                </v-col>
                <v-col cols="6">
                    <z-phone-button :title="dropdown_two_label" @toggle="toggleDropDownTwo"
                                    :focused="showDropDownTwo"></z-phone-button>
                </v-col>
            </v-row>
            <zDropDown v-if="showDropDownOne || showDropDownTwo" :items="allPhoneItems" @toggle="toggleDropDown"></zDropDown>

            <v-row class="ch-row-content">
                <v-col cols="6">
                    <z-content :item="itemOne" :left="true"></z-content>
                </v-col>
                <v-col cols="6">
                    <z-content :item="itemTwo"></z-content>
                </v-col>
            </v-row>
        </v-container>





        <template v-if="false">
            <div class="pc-phone-picker-container" style="top: 43px; display: block;">
                <div class="pc-phone-picker-wrapper" style="position: relative;
    overflow: hidden;">
                    <div>
                        <div class="pc-phone-picker-series" style="float: left;
    overflow: hidden;
    margin: 0;
    padding-right: 0;">
                            <ul class="pc-ul" style="    margin-right: -100px;
    padding-right: 100px;
    max-height: 402px;
    overflow-y: auto;
}">
                                <li class="pc-phone-picker-active">iQOO</li>
                                <li>NEX系列</li>
                                <li>X系列</li>
                                <li>S系列</li>
                                <li>Z系列</li>
                                <li>Y系列</li>
                                <li>U系列</li>
                                <li>Xplay系列</li>
                            </ul>
                        </div>
                        <div class="pc-phone-picker-products PScroll mCustomScrollbar _mCS_1">
                            <div id="mCSB_1" class="mCustomScrollBox mCS-light-thick mCSB_vertical mCSB_inside"
                                 style="max-height: none;" tabindex="0">
                                <div id="mCSB_1_container" class="mCSB_container"
                                     style="position: relative; top: 0px; left: 0px;" dir="ltr">
                                    <div>
                                        <div>
                                            <ul>
                                                <li class="pc-phone-picker-active pc-phone-picker-disabled">iQOO U3x标准版<br>已选
                                                </li>
                                                <li class=" pc-phone-picker-disabled">iQOO Neo5 活力版<br>已选</li>
                                                <li class=" pc-phone-picker-disabled">iQOO Z3<br>已选</li>
                                                <li class="">iQOO U3x</li>
                                                <li class="">iQOO Neo5</li>
                                                <li class="">iQOO 7</li>
                                                <li class="">iQOO U3</li>
                                                <li class="">iQOO U1x</li>
                                                <li class="">iQOO 5 Pro</li>
                                                <li class="">iQOO 5</li>
                                                <li class="">iQOO U1</li>
                                                <li class="">iQOO Z1x</li>
                                                <li class="">iQOO 3变形金刚限量版</li>
                                                <li class="">iQOO Z1</li>
                                                <li class="">iQOO Neo3</li>
                                                <li class="">iQOO 3</li>
                                                <li class="">iQOO Neo 855竞速版</li>
                                                <li class="">iQOO Neo 855版</li>
                                                <li class="">iQOO Pro &amp; iQOO Pro 5G版</li>
                                                <li class="">iQOO Neo</li>
                                                <li class="">iQOO</li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div id="mCSB_1_scrollbar_vertical"
                                     class="mCSB_scrollTools mCSB_1_scrollbar mCS-light-thick mCSB_scrollTools_vertical"
                                     style="display: block;">
                                    <div class="mCSB_draggerContainer">
                                        <div id="mCSB_1_dragger_vertical" class="mCSB_dragger"
                                             style="position: absolute; min-height: 30px; top: 0px; display: block; height: 232px; max-height: 394px;">
                                            <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                                        </div>
                                        <div class="mCSB_draggerRail"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>



    </div>
</template>

<script>

    import data from '@/assets/data/phone'
    import zDropDown from '@/components/z-drop-down'
    import zPhoneButton from '@/components/z-phone-button'
    import ZContent from "./z-content";

    export default {
        name: "battle",
        components: {
            ZContent,
            zDropDown,
            zPhoneButton
        },
        data() {
            return {
                skeletonShow: false,
                skeletonAttrs: {
                    class: 'mb-6',
                    boilerplate: true,
                    elevation: 2,
                },
                dropdown: [
                    {name: '100%'},
                    {name: '75%'},
                    {name: '50%'},
                    {name: '25%'},
                    {name: '0%'},
                ],
                dropdown_one: [],
                dropdown_two: [],
                dropdown_one_label: '',
                dropdown_two_label: '',
                dropdown_edit: [
                    {text: '100%'},
                    {text: '75%'},
                    {text: '50%'},
                    {text: '25%'},
                    {text: '0%'},
                ],
                fruits: [
                    'Apples',
                    'Tangerines',
                    'Tomatoes',
                    'Watermelons',
                    'Zucchini',
                ],
                selectedFruits: [],
                sheet: false,
                tiles: [
                    {img: 'keep.png', title: 'Keep'},
                    {img: 'inbox.png', title: 'Inbox'},
                    {img: 'hangouts.png', title: 'Hangouts'},
                    {img: 'messenger.png', title: 'Messenger'},
                    {img: 'google.png', title: 'Google+'},
                ],
                showDropDown: false,
                showDropDownOne: false,
                showDropDownTwo: false,
                allPhoneItems: [],
                itemOne:{},
                itemTwo:{},
            }
        },
        created() {


            // this.dropdown_one = data.allPhone.slice(0,1)
            // this.dropdown_two = data.allPhone.slice(1,2)
            this.dropdown_one_label = data.allPhone[0].name;
            this.dropdown_two_label = data.allPhone[1].name;
            this.allPhoneItems = data.allPhone;
            this.itemOne = data.allPhone[0];
            this.itemTwo = data.allPhone[1]
        },
        computed: {
            likesAllFruit() {
                return this.selectedFruits.length === this.fruits.length
            },
            likesSomeFruit() {
                return this.selectedFruits.length > 0 && !this.likesAllFruit
            },
            icon() {
                if (this.likesAllFruit) return 'mdi-close-box'
                if (this.likesSomeFruit) return 'mdi-minus-box'
                return 'mdi-checkbox-blank-outline'
            },
        },

        methods: {
            selectAll() {
                //全选
                this.$nextTick(() => {
                    if (this.likesAllFruit) {
                        this.selectedFruits = []
                    } else {
                        this.selectedFruits = this.fruits.slice()
                    }
                })
            },
            toggleDropDownOne(is) {
                if (is) {
                    this.showDropDownOne = false;
                }
                this.showDropDownTwo = is
            },
            toggleDropDownTwo(is) {

                this.showDropDownOne = is;
                if (is) {
                    this.showDropDownTwo = false
                }

            },
            toggleDropDown(value){

               if(!this.showDropDownOne){
                   this.itemOne = value;
               }
                if(!this.showDropDownTwo){
                    this.itemTwo = value;
                }

                this.showDropDownOne = false;
                this.showDropDownTwo = false;
            }
        },
    }
</script>

<style lang='scss'>

    .pc-phone-picker-series li, .pc-phone-picker-products li {
        cursor: pointer;
        white-space: nowrap;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        overflow: hidden;
        position: relative;
        color: #242933;
        font-size: 14px;
        text-align: center;
        font-family: sans-serif;
        width: 100px;
        height: 64px;
        line-height: 64px;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
    }

    .pc-phone-picker-active {
        background: #fff;
    }
    .pc-phone-picker-products{
        position: absolute;
        left: 110px;
        right: 0;
        top: 0;
        bottom: 0;
        overflow: hidden;
        margin-bottom: -2px;
    }


    .pc-phone-picker-products>div{
        padding-right: 12px;
        max-height: 402px;
        overflow: hidden;
    }

    .mCustomScrollBox{
        position: relative;
        overflow: hidden;
        height: 100%;
        max-width: 100%;
        outline: 0;
        direction: ltr;
    }
    .pc-phone-picker-products>div>div{
        overflow: hidden;
    }
    .mCSB_container{
        overflow: hidden;
        width: auto;
        height: auto;
    }
    .mCSB_scrollTools{
        opacity: .75;
        filter: "alpha(opacity=75)";
        -ms-filter: "alpha(opacity=75)";
    }
    .mCSB_scrollTools, .mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCSB_scrollTools
    .mCSB_buttonUp, .mCSB_scrollTools .mCSB_buttonDown, .mCSB_scrollTools .mCSB_buttonLeft, .mCSB_scrollTools .mCSB_buttonRight{
        -webkit-transition: opacity .2s ease-in-out,background-color .2s ease-in-out;
        -moz-transition: opacity .2s ease-in-out,background-color .2s ease-in-out;
        -o-transition: opacity .2s ease-in-out,background-color .2s ease-in-out;
        transition: opacity .2s ease-in-out,background-color .2s ease-in-out;
    }

    .pc-phone-picker-products ul{
        min-width: -webkit-calc(225px + 2ch);
        min-width: -moz-calc(225px + 2ch);
        min-width: calc(225px + 2ch);
        font-size: 12px;
        line-height: 0;
        text-align: justify;
        white-space: normal;
        margin-bottom: 0;
    }
    .pc-phone-picker-products li:not(.pc-phone-picker-disabled):hover, .pc-phone-picker-products li.pc-phone-picker-active{
        color: #242933;
    }

    .pc-phone-picker-products li.pc-phone-picker-disabled{
        color: #8a8f99;
        line-height: 20px;
        padding-top: 10px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-family: VIVO-FONT-WEB-BOLD,sans-serif;
    }
    .pc-phone-picker-products li{
        display: inline-block;
        vertical-align: top;
        font-size: 14px;
        text-align: center;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        color: #8a8f99;
        width: 100px;
        height: 64px;
        line-height: 64px;
    }

    .pc-phone-picker-series li, .pc-phone-picker-products li{
        cursor: pointer;
        white-space: nowrap;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .pc-phone-picker-products li:nth-of-type(2n){
        padding-right: 12px;
    }

    .pc-phone-picker-products li.pc-phone-picker-disabled{
        color: #8a8f99;
        line-height: 20px;
        padding-top: 10px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-family: VIVO-FONT-WEB-BOLD,sans-serif;
    }
    .mCSB_scrollTools{
        position: absolute;
        width: 16px;
        height: auto;
        left: auto;
        top: 0;
        right: 0;
        bottom: 0;
    }
    .mCSB_scrollTools .mCSB_draggerContainer{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        height: auto;
    }
    .mCSB_scrollTools .mCSB_dragger{
        cursor: pointer;
        width: 100%;
        height: 30px;
        z-index: 1;
    }
    .mCS-light-thick.mCSB_scrollTools .mCSB_draggerRail, .mCS-dark-thick.mCSB_scrollTools .mCSB_draggerRail{
        width: 4px;
        background-color: #fff;
        background-color: rgba(255,255,255,.1);
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px
    }
    .mCSB_scrollTools .mCSB_draggerRail{
        background-color: #000;
        background-color: rgba(0,0,0,.4);
        filter: "alpha(opacity=40)";
        -ms-filter: "alpha(opacity=40)";
        width: 2px;
        height: 100%;
        margin: 0 auto;
        -webkit-border-radius: 16px;
        -moz-border-radius: 16px;
        border-radius: 16px;

    }
    .mCS-light-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCS-dark-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{
        width: 6px;
        /* background-color: #cdcdcd; */
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
    }

    .mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{
        background-color: #fff;
        background-color: rgba(255,255,255,.75);
        filter: "alpha(opacity=75)";
        -ms-filter: "alpha(opacity=75)";
    }
    .mCSB_scrollTools, .mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar, .mCSB_scrollTools .mCSB_buttonUp, .mCSB_scrollTools .mCSB_buttonDown, .mCSB_scrollTools .mCSB_buttonLeft, .mCSB_scrollTools .mCSB_buttonRight{
        -webkit-transition: opacity .2s ease-in-out,background-color .2s ease-in-out;
        -moz-transition: opacity .2s ease-in-out,background-color .2s ease-in-out;
        -o-transition: opacity .2s ease-in-out,background-color .2s ease-in-out;
        transition: opacity .2s ease-in-out,background-color .2s ease-in-out;
    }
    .mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{
        position: relative;
        width: 4px;
        height: 100%;
        margin: 0 auto;
        -webkit-border-radius: 16px;
        -moz-border-radius: 16px;
        border-radius: 16px;
        text-align: center;
    }
    .mCustomScrollbar{
        touch-action: pinch-zoom;
    }

    .page-contrast-wrapper .product-info-wrapper .product-name-lists .name-list:first-child .pc-phone-picker-container{
        left: 0;
        right: auto;
    }
    .pc-phone-picker-container{
        position: absolute;
        width: 350px;
        z-index: 98;
        background-color: #fff;
        -webkit-border-radius: 0 0 24px 24px;
        -moz-border-radius: 0 0 24px 24px;
        border-radius: 0 0 24px 24px;
        overflow: hidden;
        border: solid 1px #ecedf0;
        border-top: 0;
        padding-top: 4px;
        left: 0;
        display: none;
    }




    .ch-no-padding{
        padding:0
    }

    .ch-no-padding .v-sheet.v-banner{
        width: 100%;
    }

    .ch-flex-column{
        display: flex;
        flex-direction: column;
    }

    .z-phone-button{
        max-height: 50px;
    }
    .ch-row-bar{
        position: fixed;
        top: 70px;
        width: 100%;
        z-index: 9;
    }
    .ch-row-content{

        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        overflow-y: auto;
        /* overflow-x: hidden; */
        top: 50px;
    }
</style>

