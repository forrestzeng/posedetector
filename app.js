// var poseDetection = require('@tensorflow-models/pose-detection')
var fetchWechat = require('fetch-wechat');
var tf = require('@tensorflow/tfjs-core');
var webgl = require('@tensorflow/tfjs-backend-webgl');
var plugin = requirePlugin('tfjsPlugin');
// app.js
App({
  globalData: {
    localStorageIO: plugin.localStorageIO,
    fileStorageIO: plugin.fileStorageIO,
  },
  onLaunch() {
    plugin.configPlugin({
        // polyfill fetch function
        fetchFunc: fetchWechat.fetchFunc(),
        // inject tfjs runtime
        tf,
        // inject webgl backend
        webgl,
        // provide webgl canvas
        canvas: wx.createOffscreenCanvas()
      })
    //   tf.tensor([1, 2, 3, 4]).print()  
  },
  globalData: {
    userInfo: null
  }
})
