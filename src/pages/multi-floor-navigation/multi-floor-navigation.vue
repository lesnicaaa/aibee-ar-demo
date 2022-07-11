<template>
<div>
  <div 
    class="video-wrapper"
    ref="videoWrapper"
    style="position: absolute;top:0"
    :style="{width:`${innerWidth}px`,height:`${innerHeight}px`}"
  >
    <canvas 
      id="sceneCanvas"
      :style="{width:`${innerWidth}px`,height:`${innerHeight}px`,top:`${top}px`,left:`${left}px`}"
      class="sceneCanvas"
      ref="sceneCanvas"
    ></canvas>
  </div>
  <div class="need" v-if="showNeed">
    <div class="btn" style="" @click="setNeed">
      开启AR导航
      <!-- <img  src="../../assets/navigation/nav/begin.png"> -->
    </div>
  </div>
</div>
</template>

<script>
import mixin from '../mixin.js';
export default {
  mixins: [mixin],
  data() {
    return {
      innerWidth: null,
      innerHeight: null,
      top: null,
      left: null,
      showNeed: true,
    }
  },
  methods: {
    // init() {
    //   const { place_id } = this;
    //   this.arController = new ArController(place_id, this.$refs.videoWrapper, {

    //   })
    //   this.arController.registerEvents({
    //       onLoadedData: (data) => {
    //           if(this.showNeed) {
    //               this.video = data;
    //               this.sceneCanvas = this.arController.getCanvas();
    //               debugger;
    //           }
    //       }
    //   })
    // },
    setNeed() {
      if(this.arController) {
        this.arController.startSensor();
      }
    },
    initWrapper() {
      this.innerWidth = window.innerWidth;
      this.innerHeight = window.innerHeight;
      this.init({ videoWrapper: this.$refs.videoWrapper });
      // const 
      // this.init();
    }
  },
  mounted() {
    this.initWrapper();
  }
}
</script>

<style>
</style>