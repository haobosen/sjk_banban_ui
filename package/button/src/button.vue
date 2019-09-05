<template>
    <button class="sjk-bb-button" :class="[
        type ? 'sjk-bb-button__' + type : 'sjk-bb-button__default',
        {
            'is_disabled': buttonDisabled
        }
    ]" @click="handleClick" :disabled="buttonDisabled">
        <i class="sjk-bb-btn_icon" :class="[icon !== '' ? icon : '']" v-if="icon !== ''"></i>
        <span class="sjk-bb-btn_con">
            <slot></slot>  
        </span>
    </button>
</template>
<script>
export default {
    name: 'sjk-bb-button',
    data() {
        return {}
    },
    mounted() {

    },
    props: {
        type: {
            type: String,
            default: 'default'
        },
        size: {
            type: String,
            default: 'md'
        },
        disabled: Boolean,
        icon:  {
            type: String,
            default: ''
        }
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt)
        }
    },
    computed: {
        buttonDisabled() {
            return this.disabled
        }
    }
}
</script>
<style lang="scss">
.sjk-bb-button {
    width: 150px;
    height: 40px;
    font-size: 14px;
    cursor: pointer;
    outline:none;
    margin-left: 10px;
    border-radius: 20px;
    .sjk-bb-btn_con {
        display: inline-block;
        vertical-align: middle;
    }
}
.sjk-bb-btn_icon {
    width: 15px;
    height: 15px;
    display: inline-block;
    margin-right: 7px;
    vertical-align: middle;
}
.sjk-bb-button__default {
    border-color: $mainColor;
    background: $mainColor;
    color: #fff;
}
.sjk-bb-button__default:hover {
    border-color: $defaultBtnHoverColor;
    background: $defaultBtnHoverColor;
}

.sjk-bb-button__default.is_disabled,
.sjk-bb-button__default.is_disabled:hover,
.sjk-bb-button__default.is_disabled:active {
    color: #fff;
    border-color: $defaultBtnDisabledColor;
    background: $defaultBtnDisabledColor;
}

.sjk-bb-button__main {
    border-color: $mainColor;
    background: #fff;
    color: $mainColor;
}   
.sjk-bb-button__main:hover {
    background: $mainBtnHoverColor;
}
.sjk-bb-button__main.is_disabled,
.sjk-bb-button__main.is_disabled:hover,
.sjk-bb-button__main.is_disabled:active {
    color: $mainBtnDisabledColor;
    border-color: $mainBtnDisabledColor;
    background: #fff;
}
</style>
