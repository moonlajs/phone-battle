<template>
    <div>
        <v-img
                :aspect-ratio="16/9"
                height="125"
                contain
                :src="item.img"
        ></v-img>


        <v-list flat>
            <v-list-item-group
                    v-model="selectedItem"
                    color="primary"
            >
                <v-list-item
                        class="ch-no-padding ch-flex-column"
                        v-for="data in item.data"
                        :key="data.title"
                >
                    <v-banner>
                         <span v-if="left">  {{data.title}}</span>
                    </v-banner>

                    <v-list>
                        <v-list-item
                                class="ch-flex"
                                v-for="listItem in data.list"
                                :key="listItem.label"
                        >

                            <v-list-item-content>
                                <v-list-item-title v-text="listItem.label"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>

                </v-list-item>
            </v-list-item-group>
        </v-list>
<!--        <v-list>-->

<!--            <template v-for="data in item.data">-->

<!--                <v-list-item :key="data.title">-->
<!--                    <v-banner>-->
<!--                         <span v-if="left">  {{data.title}}</span>-->
<!--                    </v-banner>-->
<!--                    <template v-for="listItem in data.list">-->
<!--                        <v-icon-->
<!--                                large-->
<!--                                color="green darken-2"-->
<!--                                :key="listItem.id"-->
<!--                        >-->
<!--                            {{listItem.icon}}-->
<!--                        </v-icon>-->

<!--                        <v-list-item-content :key="listItem.id">-->
<!--                            <v-list-item-title>{{ listItem.label }}</v-list-item-title>-->

<!--                        </v-list-item-content>-->
<!--                        <v-list-group-->
<!--                                :key="listItem.id"-->
<!--                                no-action-->
<!--                                sub-group-->
<!--                        >-->
<!--                            <template v-slot:activator>-->
<!--                                <v-list-item-content>-->
<!--                                    <v-list-item-title>Actions</v-list-item-title>-->
<!--                                </v-list-item-content>-->
<!--                            </template>-->

<!--                            <v-list-item-->
<!--                                    v-for="listItemItem  in listItem.arr"-->
<!--                                    :key="listItemItem.value"-->
<!--                                    link-->
<!--                            >-->
<!--                                <v-list-item-title v-text="listItemItem.name"></v-list-item-title>-->

<!--                                <v-list-item-title v-text="listItemItem.value"></v-list-item-title>-->
<!--                            </v-list-item>-->
<!--                        </v-list-group>-->
<!--                    </template>-->

<!--                </v-list-item>-->


<!--            </template>-->
<!--        </v-list>-->


    </div>
</template>

<script>
    export default {
        name: "z-content",
        components: {

        },
        props: ['item','left'],
        data() {
            return {
                selectedItem:''
            }
        },
        created() {

        }
    }
</script>

<style lang='scss'>

</style>
