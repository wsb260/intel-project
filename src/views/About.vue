<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="drag" @touchstart.stop = "start" @touchmove.stop = 'move' ref='drag'></div>
    <div style="width:100px;height:100px;background:yellow;position:absolute;top:100px;left:100px;"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      dom:null,
      disX: null,
      disY: null
    }
  },
  methods:{
    start(e) {
      this.dom = this.$refs['drag']
      let touch = e.targetTouches[0]
      this.disX = touch.clientX - this.dom.offsetLeft
      this.disY = touch.clientY - this.dom.offsetTop
      // document.addEventListener('touchmove',this.move,false)
    },
    move(e) {
      // this.defaultEvent(e)
      e = e || window.event
      let touch = e.targetTouches[0]

      let left = touch.clientX - this.disX
      let top = touch.clientY - this.disY
      this.dom.style.left = left + 'px'
      this.dom.style.top = top + 'px'
    },
    defaultEvent(e) {
      e = e || window.event
      e.preventDefault()
    }
  }
}
</script>

<style lang="less" scoped>
.about {
  position: relative;
}
.drag {
  width : 100px;
  height : 100px;
  background : red;
  position: absolute;
}
</style>