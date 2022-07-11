import ArController from '@aibee/miniapp-ar-sdk';
export default {
    data() {
        return {
            video: null,
            sceneCanvas: null,
            place_id: 268,
            arController: null,
        }
    },
    methods: {
        // 初始化sdk
        init({ videoWrapper }) {
            if (window.navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // 最新标准API
            } else if (navigator.webkitGetUserMedia) {
            // webkit内核浏览器
            } else if (navigator.mozGetUserMedia) {
            // Firefox浏览器
            } else if (navigator.getUserMedia) {
            // 旧版API
            }else{
            // this.$emit('return',{name:'notSupport',data:{btnButtom:this.btnButtom}})
            return;
            }
            const { place_id } = this;
            this.arController = new ArController(place_id, videoWrapper, {

            })
            this.arController.registerEvents({
                onLoadedData: (data) => {
                    if(this.showNeed) {
                        this.video = data;
                        this.sceneCanvas = this.arController.getCanvas();
                    }


                }
            })
        }
    },
}