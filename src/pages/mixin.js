import ArController from '@aibee/miniapp-ar-sdk';
export default {
    data() {
        return {
            video: null,
            sceneCanvas: null,
            place_id: 268,
            arController: null,
            showNeed: true,
            floors: null,
            dest: {
                id: "store6",
                floor: "10F",
                name: "",
            }
        }
    },
    methods: {
        // 初始化sdk
        async init({ videoWrapper }) {
            const { place_id } = this;
            this.arController = new ArController(place_id, videoWrapper, {
                isPC: true, // 电脑端调试需要
            })
            this.arController.registerEvents({
                onLoadedData: (data) => {
                    if(this.showNeed) {
                        this.video = data;
                        this.sceneCanvas = this.arController.getCanvas();
                        this.showNeed = false;
                    }
                },
                onSuccess: (version) => {
                    if(!version) return;
                },
                onStart: ()=> {
                    this.begining = false;
                    this.isEnd = false;
                    this.playAnimation = false;
                    this.isVertical = null;
                    this.arController.stopPositionChange = false;
                    this.arController.setMapVisible(false)
                    this.arController.setRepositionInterval(5000,5000);
                    this.arController.locator.setLocationInterval(5000);
                },
                changePosition: (x, y) => {
                    console.log(x, y);
                },
                onFailed: (res) => {
                    if (res.type === 'localFail') {
                        // 定位失败
                    }
                },
                onEnd: async (res) => {
                    if (res.type === 'none') {
                        return;
                    }
                },
                onWsBreak:()=>{
                    //
                },
                onReconnect:()=>{
                //this.$emit('return',{name:'reset'})
                },
                onMapShow: ()=>{

                },
                onNavMapSimple: () => {

                },
            })
            this.floors = await this.arController.getFloors(); // 获取楼层
            this.arController.setDest(this.dest);
            // await this.setFloor(this.floors[3]/);
            // this.start();
        },
        async setFloor(floor,notLoadMap){
            await this.arController.setFloor(floor,notLoadMap)
          },
        start(){
            this.findNearModeled = false;
            this.arController.stopPositionChange = false;
            // if(this.arController) this.arController.setMapVisible(false)
            if(this.arController) this.arController.start();
        },
    },
}