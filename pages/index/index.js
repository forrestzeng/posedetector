const poseDetection = require('@tensorflow-models/pose-detection')
const tf = require('@tensorflow/tfjs-core')
//Register WebGL backend
const webgl = require('@tensorflow/tfjs-backend-webgl');
// const { conv2dTranspose } = require('@tensorflow/tfjs-core');
// index.js
// 获取应用实例
// const app = getApp()

Page({
    data: {
        result: "载入中...",
        // _modelUrl: 'http://127.0.0.1:8080//tfjs-model_blazepose_3d_detector_1//model.json',
        _detectorModelUrl: 'https://posedetector-5gp3m2e2405cf6b2-1259448409.tcloudbaseapp.com/tfjs-model_blazepose_3d_detector_1/model.json',
        _landmarkModelUrl: 'https://posedetector-5gp3m2e2405cf6b2-1259448409.tcloudbaseapp.com/tfjs-model_blazepose_3d_landmark_lite_2/model.json'
      },
    async onReady(){
        //构建CameraContext对象,每10帧一输出
        const camera = wx.createCameraContext()
        //构建Canvas对象
        const query = wx.createSelectorQuery()
        query.select('#poses')
            .fields({ node: true, size: true})
            .exec((res) => {
                //打印画布
                // console.log(res)
                this.canvas = res[0].node;
                this.ctx = this.canvas.getContext('2d')
                //画布大小根据屏幕分辨率进行缩放，防止模糊
                const dpr = wx.getSystemInfoSync().pixelRatio
                console.log(dpr)
                // canvas.width = res[0].width * dpr
                // canvas.height = res[0].height * dpr
                this.canvas.width = res[0].width
                this.canvas.height = res[0].height
                // console.log(this.canvas.width)
                // console.log(this.canvas.height)
                // this.ctx.scale(dpr, dpr)
                // this.ctx.fillRect(0, 0, 200, 100)
            })
        //加载BlazePose模型，构建detector对象
        this.loadBlazepose()
        console.log(this.detector)
        let count = 0
        const listener = camera.onCameraFrame((frame) => {
            count++
            if(count === 5){
                if(this.detector){
                    // this.ctx.clearRect(0, 0, 320, 504)    
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)              
                    this.drawPose(frame)
                }
                count = 0
            }            
        })
        listener.start()

    },
    async loadBlazepose(){
        // const LOCAL_STORAGE_KEY = 'blazepose_model';
        // const localStorageHandler = app.globalData.localStorageIO(LOCAL_STORAGE_KEY);
        const model = poseDetection.SupportedModels.BlazePose;
        const detectorConfig = {
            runtime: 'tfjs',
            enableSmoothing: true, 
            modelType: 'lite',
            // detectorModelUrl: 'http://127.0.0.1:8080//tfjs-model_blazepose_3d_detector_1//model.json',
            // landmarkModelUrl: 'http://127.0.0.1:8080//tfjs-model_blazepose_3d_landmark_full_2//model.json'
            detectorModelUrl: this.data._detectorModelUrl,
            landmarkModelUrl: this.data._landmarkModelUrl,
        };
        this.detector = await poseDetection.createDetector(model, detectorConfig); 
        console.log(this.detector)
        // this.setData({
        //     result:"模型加载成功"
        //   })
    },
    async detectPose(frame, detector){
        //打印frame
        console.log(frame)
        const imgData = {
            data: new Uint8Array(frame.data),
            width: frame.width,
            height: frame.height
        };
        console.log(imgData)
        const imgSlice = tf.tidy(() =>{
            const imgTensor = tf.browser.fromPixels(imgData, 4)
            console.log(imgTensor)
            const imgSlice = tf.slice(imgTensor, [0, 0, 0], [-1, -1, 3])
            console.log(imgSlice)
            return imgSlice
        })
        //打印imgData
        // console.log(imgData)
        const estimationConfig = {flipHorizontal: false};
        const poses = await detector.estimatePoses(imgSlice, estimationConfig)
        //打印poses
        console.log("dectectPose" + poses)
        imgSlice.dispose()
        return poses
    },
    async drawPose(frame){
        const poses = await this.detectPose(frame, this.detector)
        console.log("drawPose" + poses)
        // this.ctx.clearRect(0, 0, 320, 504) 
        // this.ctx.clearRect(0, 0, canvas.width, canvas.height)
        console.log(this.ctx)
        if (poses == null || this.ctx == null) return
        this.setData({
            result:"模型加载成功"
          })
        if (poses[0].score >=0.3){
            //将poses中的keypoints取出,keypoints是一张图里的33个坐标点
            const keypoints = poses[0].keypoints
            // console.log(keypoints[0])
            //Draw circle
            for(let i in keypoints){
            //     console.log(i)
                const point = keypoints[i]
                // console.log(point)
                if(point.score >=0.5){
                    const y = point.y
                    const x = point.x
                    // console.log(x)
                    this.drawCircle(this.ctx, x, y)
                }
            }
            //DrawLine
            // console.log(model)
            const adjacentKeyPoints = poseDetection.util.getAdjacentPairs(poseDetection.SupportedModels.BlazePose)
            // console.log(adjacentKeyPoints)
            for (let i in adjacentKeyPoints){
                const lines = adjacentKeyPoints[i]
                const line_start = lines[0]
                const line_end = lines[1]
                // const pos0 = keypoints[line_start]
                // const pos1 = keypoints[line_end]
                // console.log(pos0)
                // console.log(pos1)
                this.drawLine(this.ctx, keypoints[line_start], keypoints[line_end])
            }
        }
    },
    drawCircle(ctx, x, y){
        ctx.beginPath()
        ctx.arc(x , y, 3, 0, 2 * Math.PI)
        ctx.fillStyle = 'aqua'
        ctx.fill()
        // this.ctx.fillRect(x, y, 20, 10)  
    },
    drawLine(ctx, pos0, pos1){
        ctx.beginPath()
        ctx.moveTo(pos0.x, pos0.y)
        ctx.lineTo(pos1.x, pos1.y)
        ctx.lineWidth = 2
        ctx.strokeStyle = 'aqua'
        ctx.stroke()
    }
})
