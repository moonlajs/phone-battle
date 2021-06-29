<template>
    <div class="z-phone-button">
        <div class=" v-input--dense theme--light v-text-field v-text-field--is-booted
         v-text-field--enclosed v-text-field--outlined v-select v-autocomplete"
             :class="selected ? 'v-input--is-focused v-select--is-menu-active':'' "
        >


            <div class="v-input__control">
                <div role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-owns="list-351"
                     @click="toggle"
                     class="v-input__slot">
                    <fieldset aria-hidden="true" :class="selected?'focus':'nofocus'">
                        <legend style="width: 0px;"></legend>
                    </fieldset>
                    <div class="v-select__slot"><label class="v-label theme--light"
                                                       style="left: 0px; right: auto; position: absolute;">{{title}}</label>
                        <div class="v-input__append-inner">
                            <div class="v-input__icon v-input__icon--append">
                               <span aria-hidden="true" class="v-icon notranslate theme--light">
                                   <!-- <svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true"
                                    class="v-icon__svg"><path d="M7,10L12,15L17,10H7Z"></path>
                                </svg>-->


                                   <svg class="icon"
                                        style="width: .6em;height: .6em;vertical-align: middle;fill: currentColor;overflow: hidden;"
                                        viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        p-id="1862">
                                       <path d="M510.312056 377.269459 511.41825 378.37463 512.523421 377.269459 901.028782 765.746168 959.568037 707.207937 512.523421 260.190951 511.41825 261.296121 510.312056 260.190951 63.268464 707.207937 121.826138 765.726725Z"
                                             p-id="1863">

                                   </path></svg>

                                </span>
                                <!-- <span aria-hidden="true" class="v-icon  theme&#45;&#45;light">
 3
                                    <svg class="icon" style="width: .6em;height: .6em;vertical-align: middle;fill: currentColor;overflow: hidden;"
                                         viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1174">
                                        <path d="M0.006 284.4l56.597-56.598L512 683.2l455.396-455.397 56.598 56.597L512 796.395z" p-id="1175">

                                    </path></svg>

                                 </span>-->

                            </div>
                        </div>
                        <input type="hidden"></div>
                    <div class="v-menu"><!----></div>
                </div>
                <div class="v-text-field__details">
                    <div class="v-messages theme--light">
                        <div class="v-messages__wrapper"></div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "z-phone-button",
        props: ['title', 'focused'],
        data() {
            return {
                selected: false
            }
        },
        computed: {
            toggled() {
                return this.focused && this.selected
            },
        },
        watch: {
            focused(n) {
                if (n) {
                    this.selected = !n
                }
            },
        },
        methods: {
            toggle() {
                this.selected = !this.selected;

                //我这个选中了，通知另外一个不要选中
                this.$emit('toggle', this.selected)
                // this.$emit('toggle', this.selected)
            }
        }
    }
</script>

<style lang='scss'>

    .focus {
        background: #fff;
    }

    .nofocus {
        background: #f0f0f0;
    }


</style>
