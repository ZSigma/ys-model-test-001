// 接口详细说明文档  https://www.yuque.com/docs/share/ded53dca-3ae6-4cfa-901a-d2ca8bfb758e?# 《小Y管家APP与H5交互》
const helper = {
    //native注册的iOS和安卓都使用的方法
    generalMethod: {
        //1、获取用户信息  入参： 无
        getUserInfo: 'getUserInfo',
        //2、获取设备信息  入参： 无
        getDeviceInfo: 'getDeviceInfo',
        //3、获取位置信息  入参： 无
        getLocationInfo: 'getLocationInfo',
        //4、获取发现页菜单数据 入参： 无
        getPermissionsMenuArray: 'getPermissionsMenuArray',
        //5、获取首页扫一扫和后端交互的数据  入参： 无
        getQRCodeData: 'getQRCodeData',
        //6、获取首页多商户数据  入参： 无
        getMerchantsListData: 'getMerchantsListData',
        //7、更新商户列表信息  入参： 无
        updateMerchantList: 'updateMerchantList',
        //8、网络请求入参 加密  入参如： {userId: "123456"}
        encode: 'encode',
        //9、网络请求响应结果 解密   入参：需要解密的json数据
        decode: 'decode',
        //10、post网络请求   
        requestDataWithPost: 'requestDataWithPost',
        //11、关闭并返回原生页面  入参： 无
        finish: 'finish',
        //12、打开原生页面  
        goToNativePage: 'goToNativePage',
        //13、关闭原生页面   入参 {num: 1 // num 表示要关闭的原生页面数量}
        closeNativePage: 'closeNativePage',
        //14、小Y打开h5页面  
        goToH5Page: 'goToH5Page',
        //15、分享图片 图片以url形式传递  
        shareImageUrl: 'shareImageUrl',
        //16、分享链接  
        shareUrl: 'shareUrl',
        //17、打开手机相机拍照 入参：无
        openNativeCamera: 'openNativeCamera',
        //18、打开手机相册
        openNativeAlbum: 'openNativeAlbum',
        //19、打开手机相册或相册（先弹出相册和相机选项，不能同时选中多张）  入参：无
        openNativeCameraOrAlbum: 'openNativeCameraOrAlbum',
        //20、保存图片到手机 通过base64数据保存  入参: {data:  ""// 图片base64字符串}
        savePicToLocal: 'savePicToLocal',
        //21、保存图片到手机 通过url保存 入参： {data:  ""// 图片远程地址}
        saveUrlPicToLocal: 'saveUrlPicToLocal',
        //22、扫描二维码 旧版需要配合设置二维码接口来把二维码信息回传给h5  需要修改  入参：{showAlbum: "",// 是否显示相册(Y/N)  必传}
        getQRCodeInfo: 'getQRCodeInfo',
        //23、识别银行卡 旧版需要调用h5setBankInfoWithImage 回传给h5  需要修改 入参：{showAlbum: "",// 是否显示相册(Y/N)  必传}
        getBankInfoWithImage: 'getBankInfoWithImage',
        //24、识别身份证 识别成功后原生调用h5注册setIDCardInfo方法,把数据传回h5,不是通过callback回调数据 需要修改 入参：{showAlbum: "",// 是否显示相册(Y/N)  必传  isFront: "" // 扫描身份证正反面(Y/N) 必传}
        getIDCardInfo: 'getIDCardInfo',
        //25、打开小程序  
        openApplet: 'openApplet',
        //26、打开企业微信  入参： 无
        openWeWork: 'openWeWork',
        //27、检查更新  入参： 无
        checkVersion: 'checkVersion',
        //28、设置导航栏标题（当前页面标题）  入参 {title: "",//标题 color: ""//标题颜色，格式为#333333}
        setNavigationBarTitle: 'setNavigationBarTitle',
        //29、设置导航栏背景颜色  入参： {color: "#333333" // #号加6个长度的颜色字符串  不能省略}
        setNavigationBarBackgroundColor: 'setNavigationBarBackgroundColor',
        //30、设置导航栏背景图片  入参： {imageData: "" //图片Base64字符串}
        setNavigationBarBackgroundImage: 'setNavigationBarBackgroundImage',
        //31、设置返回样式  {returnType:  "0" // 0：既有返回又关闭按钮：1：只有返回按钮2：只有返回按钮且所有事件交给h5处理（通过buttonClickAction方法告诉h5  tag为1000表示返回的事件）}
        setNavigationBarReturnType: 'setNavigationBarReturnType',
        //32、自定义导航栏左边的item 事件通过buttonClickAction发送给h5
        cutomNavigationBarLeftItem: 'cutomNavigationBarLeftItem',
        //33、自定义导航栏右边的item 事件通过buttonClickAction发送给h5
        cutomNavigationBarRightItem: 'cutomNavigationBarRightItem',
        //34、判断是否是运行在原生App  入参: 无
        checkIsRunInNative: 'checkIsRunInNative',
        //35、人脸识别 
        takeFaceRecognition: 'takeFaceRecognition',
        //36、切换商户  { mercId: '12312313' // 商户id}
        switchMerchant: 'switchMerchant',

    },
    // 仅 Android注册和使用的方法
    androidMethod: {
        //1、初始化nfc  入参： 无
        initNfc: 'initNfc',
        //2、读取nfc标签id  入参： 无
        getTagId: 'getTagId',
        //3、读取nfc数据  入参：无
        readNfcData: 'readNfcData',
        //4、写nfc数据  入参： {data: "" //需要写入nfc卡的数据}
        writeNfcData: 'writeNfcData',

    },
    // 仅 iOS注册和使用的方法  
    iOSMethod: {
        //是否可以做换返回 入参： {isCan: 'Y'} //Y 表示可以 N表示不可以
        canBackGestureRecognizer: 'canBackGestureRecognizer'
    },
    //h5注册的方法
    h5Method: {
        //1、设置二维码（和扫描二维码一起使用）
        setQRCodeInfo: 'setQRCodeInfo',
        //2、设置银行卡信息
        setBankInfoWithImage: 'setBankInfoWithImage',
        //3、设置身份证信息
        setIDCardInfo: 'setIDCardInfo',
        //4、按钮事件接收 (如h5调用原生自定义导航栏之后的item对应点击事件）
        buttonClick: 'buttonClickAction',
        //5、返回原生页面
        backToPage: 'backToPage'
    },


    ///返回值以 obj: {name: "methodName",data: {responseData}}的形式统一返回处理
    setupWebViewJavascriptBridge: function(callback) {
        var u = navigator.userAgent
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端

        // 注册jsbridge
        if (isAndroid) {
            if (window.WebViewJavascriptBridge) {
                callback(WebViewJavascriptBridge)
            } else {
                document.addEventListener(
                    'WebViewJavascriptBridgeReady',
                    function() {
                        callback(WebViewJavascriptBridge)
                    },
                    false
                )
            }

        } else if (isiOS) {
            if (window.WebViewJavascriptBridge) {
                return callback(WebViewJavascriptBridge)
            }
            if (window.WVJBCallbacks) {
                return window.WVJBCallbacks.push(callback)
            }
            window.WVJBCallbacks = [callback]
            var WVJBIframe = document.createElement('iframe')
            WVJBIframe.style.display = 'none'
            WVJBIframe.src = 'https://__bridge_loaded__'
            document.documentElement.appendChild(WVJBIframe)
            setTimeout(function() {
                document.documentElement.removeChild(WVJBIframe)
            }, 0)
        }
    },
    //h5注册 native调用 callback 的返回值是将方法名和数据构造成对象返回出去,用来给后续方法做区分
    // registMethodsForNative(callback) {
    //     var methodObj = this.h5Method
    //         // 只有在这里注册过的方法，在原生代码里才能用callHandler的方式调用
    //         //扫码返回
    //     this.setupWebViewJavascriptBridge(function(bridge) {
    //         bridge.registerHandler(methodObj.buttonClick, function(data, responseCallback) {
    //             let response = { name: methodObj.codeInfo, data: data }
    //             console.log("按钮点击事件返回", response);
    //             callback(response)
    //         })
    //     });
    // },
    //native 注册 h5调用
    //使用
    // this.setupWebViewJavascriptBridge(function(bridge) {
    //     bridge.callHandler("getPhoneSize", "获取屏幕尺寸", function(response) {
    //         console.log("原生返回数据: " + JSON.stringify(response));
    //     });
    // });

    //h5调用原生已注册方法
    handleNativeFunc: function(method, params, callback) {
        this.setupWebViewJavascriptBridge(function(bridge) {
            bridge.callHandler(method, params, function(response) {
                console.log('H5调用' + method + '方法入参: ' + JSON.stringify(params));
                console.log('Native响应' + method + '方法数据: ' + JSON.stringify(response));
                callback(response)
            })
        });
    },
    //注册方法给原生调用
    handleH5FuncForNative(method, callback) {
        this.setupWebViewJavascriptBridge(function(bridge) {
            bridge.registerHandler(method, function(data, responseCallback) {
                console.log('Native调用H5的' + method + '方法数据: ' + JSON.stringify(data));
                callback(data)
            })
        });
    },
}

export default helper