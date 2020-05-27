<template>
    <div class="item-panel">
        <ul class="container" ref="itemPanel">
            <li>
                <i draggable="true" data-shape="rect" class="iconfont icon-tx-changfangxing"></i>
            </li>
            <li>
                <i draggable="true" data-shape="diamond" class="iconfont icon-tx-lingxing"></i>
            </li>
            <li>
                <i draggable="true" data-shape="triangle" class="iconfont icon-tx-sanjiaoxing"></i>
            </li>
            <li>
                <i draggable="true" data-shape="circle" class="iconfont icon-tx-yuanxing"></i>
            </li>
            <li>
                <i draggable="true" data-shape="ellipse" class="iconfont icon-tx-tuoyuanxing"></i>
            </li>
            <li>
                <i draggable="true" data-shape="modelRect" class="iconfont icon-tx-zhengfangxing"></i>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted() {
            const icons = [...this.$refs.itemPanel.querySelectorAll('.iconfont')]
            icons.forEach(icon => {
                icon.addEventListener('dragstart',e => {
                    e.dataTransfer.setData('shape',e.target.dataset.shape)
                })
            })
        }
    }
</script>

<style lang="less" scoped>
.item-panel {
    .iconfont{
        font-size: 50px;;
    }
    .container {
        overflow: hidden;
        padding: 10px 0;
        li {
            cursor: pointer;
            height: 54px;
            line-height: 54px;
        }
    }
}
</style>