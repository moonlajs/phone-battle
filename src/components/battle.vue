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


            <div class="ch-row-content">
                <v-row>
                    <!--                <v-col cols="6">-->
                    <!--                    <z-content :item="itemOne" :left="true"></z-content>-->
                    <!--                </v-col>-->
                    <!--                <v-col cols="6">-->
                    <!--                    <z-content :item="itemTwo"></z-content>-->
                    <!--                </v-col>-->

                    <v-col cols="6">
                        <v-img
                                :aspect-ratio="16/9"
                                height="125"
                                contain
                                :src="itemOne.img"
                        ></v-img>
                    </v-col>
                    <v-col cols="6">
                        <v-img
                                :aspect-ratio="16/9"
                                height="125"
                                contain
                                :src="itemTwo.img"
                        ></v-img>
                    </v-col>
                </v-row>

                <v-row v-for="data in itemOne.datas" :key="data.id">
                    <v-banner class='ch-banner'>
                        <div class="transition-swing text-h5" v-text="data.title"></div>
                    </v-banner>
                    <v-col cols="6">
                        <div class="transition-swing">
                            <div v-for="listItem in data.listOne"
                                 :key="listItem.id"
                                 class="transition-swing">
                                <v-row no-gutters>
                                    <v-col cols="4" class="text-h6 d-flex justify-center mb-6">
                                        <template>
                                            <span v-html="svg[listItem.iconfont]"></span>
                                        </template>
                                    </v-col>
                                    <v-col cols="20">
                                        <div class="transition-swing  text-h6 d-flex justify-start mb-6"
                                             v-text="listItem.label">

                                        </div>
                                        <div v-for="arrItem in listItem.arr"
                                             :key="arrItem.id"
                                             class="transition-swing"

                                        >
                                            <div class="transition-swing  text-body-1 d-flex justify-start mb-6"
                                                 v-text="arrItem.name"></div>
                                            <div class="transition-swing  text-caption d-flex justify-start mb-6"
                                                 v-text="arrItem.value"></div>
                                        </div>
                                    </v-col>
                                </v-row>


                            </div>

                        </div>
                    </v-col>
                    <v-col cols="6">
                        <div  class="transition-swing" >
                            <div v-for="listItem in data.listTwo"
                                    :key="listItem.id"
                                    class="transition-swing"

                            >
                                <v-row
                                        no-gutters

                                >
                                    <v-col
                                            cols="4"

                                            class="text-h6 d-flex justify-center mb-6"
                                    >
                                        <template>
                                            <span v-html="svg[listItem.iconfont]"></span>
                                        </template>
                                    </v-col>
                                    <v-col
                                            cols="20"

                                    >
                                        <div

                                                class="transition-swing  text-h6 d-flex justify-start mb-6"
                                                v-text="listItem.label"
                                        >


                                        </div>
                                        <div
                                                v-for="arrItem in listItem.arr"
                                                :key="arrItem.id"
                                                class="transition-swing"

                                        >
                                            <div
                                                    class="transition-swing  text-body-1 d-flex justify-start mb-6"
                                                    v-text="arrItem.name"
                                            >
                                                <!--                                    <p class="font-weight-medium"  v-text="arrItem.name">-->
                                                <!--                                        Medium weight text.-->
                                                <!--                                    </p>-->

                                            </div>
                                            <div
                                                    class="transition-swing  text-caption d-flex justify-start mb-6"
                                                    v-text="arrItem.value"
                                            >


                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>


                            </div>

                        </div>
                    </v-col>
                </v-row>
            </div>


        </v-container>

        <v-overlay
                :absolute="absolute"
                light
                :dark="false"
                :value="overlayVisible"
                @click="hideOverlay"
        >
            <zDropDown :items="allPhoneItems" @toggle="toggleDropDown" v-click-outside="hideOverlay"></zDropDown>

        </v-overlay>


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
                                                <li class="pc-phone-picker-active pc-phone-picker-disabled">iQOO
                                                    U3x标准版<br>已选
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


        <v-sheet
                v-if="false"
                height="400"
                class="overflow-hidden"
                style="position: relative;"
        >
            <v-container class="fill-height">
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-btn
                            color="pink"
                            dark
                            @click.stop="drawer = !drawer"
                    >
                        Toggle
                    </v-btn>
                </v-row>
            </v-container>

            <v-navigation-drawer
                    v-model="drawer"
                    absolute
                    temporary
                    floating
            >
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>John Leider</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list dense>
                    <v-list-item
                            v-for="item in items"
                            :key="item.title"
                            link
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-sheet>
        <v-item-group mandatory v-if="false">
            <v-sheet
                    class="overflow-y-auto"
                    max-height="600"
                    tile
            >
                <v-item
                        v-for="[
          c,
          text,

          margin
        ] in classes"
                        :key="c"
                >
                    <template v-slot:default="{ active, toggle }">
                        <v-sheet
                                :color="active ? $vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4' : undefined"
                                class="px-4 pt-4 pb-3"
                                tile
                                style="cursor: pointer;"
                        >
                            <div
                                    :class="[`text-${c}`, active && `mb-${margin}`]"
                                    class="transition-swing"
                                    v-text="text"
                            >
                            </div>


                        </v-sheet>
                    </template>
                </v-item>
            </v-sheet>
        </v-item-group>
    </div>
</template>

<script>

    import data from '@/assets/data/phone'
    import zDropDown from '@/components/z-drop-down'
    import zPhoneButton from '@/components/z-phone-button'
    // import ZContent from "./z-content";

    export default {
        name: "battle",
        components: {
            // ZContent,
            zDropDown,
            zPhoneButton
        },
        data() {
            return {
                classes: [
                    ['h1', 'Heading 1', '6rem', '300', '-.015625em', -1],
                    ['h2', 'Heading 2', '3.75rem', '300', '-.0083333333em', 0],
                    ['h3', 'Heading 3', '3rem', '400', 'normal', 1],
                    ['h4', 'Heading 4', '2.125rem', '400', '.0073529412em', 2],
                    ['h5', 'Heading 5', '1.5rem', '400', 'normal', 2],
                    ['h6', 'Heading 6', '1.25rem', '500', '.0125em', 3],
                    ['subtitle-1', 'Subtitle 1', '1rem', '400', '.009375em', 4],
                    ['subtitle-2', 'Subtitle 2', '0.875rem', '500', '.0071428571em', 4],
                    ['body-1', 'Body 1', '1rem', '400', '.03125em', 4],
                    ['body-2', 'Body 2', '0.875rem', '400', '.0178571429em', 4],
                    ['button', 'Button', '0.875rem', '500', '.0892857143em', 4],
                    ['caption', 'Caption', '0.75rem', '400', '.0333333333em', 4],
                    ['overline', 'Overline', '0.75rem', '500', '.1666666667em', 4],
                ],
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
                itemOne: {},
                itemTwo: {},
                absolute: true,
                opacity: 1,
                drawer: null,
                items: [
                    {title: 'Home', icon: 'mdi-view-dashboard'},
                    {title: 'About', icon: 'mdi-forum'},
                ],
                selectedItemOne: '',
                selectedItemTwo: '',
                svg: {}
            }
        },
        created() {


            // this.dropdown_one = data.allPhone.slice(0,1)
            // this.dropdown_two = data.allPhone.slice(1,2)
            this.svg = data.svg;

            this.allPhoneItems = data.allPhone;
            this.itemOne = JSON.parse(JSON.stringify(data.allPhone[0]));
            this.itemTwo = JSON.parse(JSON.stringify(data.allPhone[1]));
            // this.itemOne.dataMerge = JSON.parse(JSON.stringify(this.itemOne.datas));
           this.fnn()

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
            overlayVisible() {
                return this.showDropDownOne || this.showDropDownTwo
            }
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
            toggleDropDown(value) {

                if (!this.showDropDownOne) {
                    this.itemOne = value;
                }
                if (!this.showDropDownTwo) {
                    this.itemTwo = value;
                }

                this.showDropDownOne = false;
                this.showDropDownTwo = false;
                this.fnn()
            },
            hideOverlay() {

                this.showDropDownOne = false;
                this.showDropDownTwo = false;
            },
            fnn(){
                this.dropdown_one_label = this.itemOne.name;
                this.dropdown_two_label = this.itemTwo.name;
                this.itemOne.datas.forEach(data1 =>{
                    this.itemTwo.datas.forEach(data2 =>{
                        if(data1.title === data2.title ){
                            data1.listOne = data1.list;
                            data1.listTwo = data2.list;
                        }
                    })
                })
            }
        },
    }
</script>

<style lang='scss'>


    .ch-no-padding {
        padding: 0
    }

    .ch-no-padding .v-sheet.v-banner {
        width: 100%;
    }

    .ch-flex-column {
        display: flex;
        flex-direction: column;
    }

    .z-phone-button {
        max-height: 50px;
    }

    .ch-row-bar {
        position: fixed;
        top: 70px;
        width: 100%;
        z-index: 9;
    }

    .ch-row-content {

        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        overflow-y: auto;
        /* overflow-x: hidden; */
        top: 60px;
    }

    .ch-banner {
        width: 100%;
        margin: 30px;
    }
</style>

