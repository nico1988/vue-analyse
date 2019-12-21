<template>
<div>
<Child @select="selectHandler" @click.native.prevent="clickHandler"></Child>
</div>
</template>
<script>
    let Child = {
        template: '<button @click="clickHandler($event)">' +
            'click me' +
            '</button>',
        methods: {
            clickHandler(e) {
                console.log('Button clicked!', e)
                this.$emit('select')
            }
        }
    }
    export default {
        components: {
            Child
        },
        methods: {
            clickHandler() {
                console.log('Child clicked!')
            },
            selectHandler() {
                console.log('Child select!')
            }
        },
    }
</script>
