module.exports = {
  plugins: {
    'postcss-mobile-forever': {
      rootSelector: "#app", // 根元素选择器，用于居中
      viewportWidth: 750, // UI设计稿的宽度
      maxDisplayWidth: null, // 视口大为最大宽度
      unitPrecision: 5, // 转换后的精度，即小数点位数
      border: false, // 横屏和桌面端的边框
      propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      selectorBlackList: ['special'], // 指定不转换为视窗单位的类名，
      exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
      disableLandscape: false, // 关闭横屏适配
      disableDesktop: false, // 关闭桌面端适配
      mobileConfig: {
        replace: true, // 是否转换后直接更换属性值
        viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
        fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
      }
    },
  }
}
