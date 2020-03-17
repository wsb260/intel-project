<template>
    <div>
        <compFun :render="render" :item="item"></compFun>
    </div>
</template>

<script>
import compFun from './componentsFun.js'
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        props: {
            item:{
                type:Object,
                default:{}
            },
            render:{
                type:Function
            }
        },
        components:{
            compFun
        },
        mounted() {
            // console.log(this.render)
            // console.log(this.item)
        }
    }
</script>

<style lang="" scoped>
    
</style>