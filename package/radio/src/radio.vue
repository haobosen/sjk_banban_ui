<template>
    <label class="sjk-bb-radio" :class="[
        {
            'is_disabled': radioDisabled,
            'is_checked': model === label
        }
    ]">
        <span class="sjk-bb-radio_input-container">
            <span class="sjk-bb-radio_inner" v-if="model == label"></span>
            <input 
                class="sjk-bb-radio_input" 
                type="radio" 
                v-model="model" 
                :value="label"
                :name="name"
                :disabled="radioDisabled"
                @change="handleChange"
            >
        </span>
        <span class="sjk-bb-radio_con">
            <slot></slot>
        </span>
    </label>
</template>
<script>
export default {
    name: 'sjk-bb-radio',
    data() {
        return {}
    },
    mounted() {

    },
    props: {
        value: {},
        label: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        disabled: Boolean
    },
    methods: {
        handleChange() {
            this.$nextTick(() => {
                this.$emit('change', this.model)
            })
            
        }
    },
    computed: {
        radioDisabled() {
            return this.disabled
        },
        model: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val);
            }
            
        }
    }
}
</script>
<style lang="scss">
.sjk-bb-radio {
    margin-right: 10px;
    cursor: pointer;
    .sjk-bb-radio_input-container {
        width: 12px;
        height: 12px;
        border: 2px solid $mainColor;
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle;
        margin-right: 11px;
        position: relative;
        .sjk-bb-radio_inner {
            width: 8px;
            height: 8px;
            background: $mainColor;
            border-radius: 50%;
            display: inline-block;
            vertical-align: middle;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            z-index: 1000;
        }
        .sjk-bb-radio_input {
            width: 8px;
            height: 8px;
            display: inline-block;
            vertical-align: middle;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            z-index: 1000;
            opacity: 0;
        }
    }
    .sjk-bb-radio_con {
        font-size: 16px;
        color: #33394C;
        text-align: left;
        line-height: 16px;
    }
}
.sjk-bb-radio.is_disabled {
    .sjk-bb-radio_input-container {
        border: 2px solid $disableColor;
    }
    .sjk-bb-radio_inner {
        background: $disableColor;
    }
}
</style>
