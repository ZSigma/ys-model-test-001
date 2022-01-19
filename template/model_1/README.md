## 换肤技术分享
方案：替换 css 链接(前端，后端)、替换 className、改变 css 原生变量值
 > 颜色

1.css变量
```
body{
    --themeColor:#000;
}
.main{
    color:var(--themeColor);
}

document.body.style.setProperty('--themeColor','#fff')
```
具体实现：变量+动态引入；替换class
注意：页面刷新

2.替换class
```
单个
:class="{'active':isActive==-1}"

绑定并判断多个
:class="{ 'active': isActive, 'sort': isSort }"

放入data
:class="classObject"
data(){
    classObject:{
        'active': true,
        'sort': false,
      },
}

放入computed
computed: {
    classObject: function () {
        return {
            active: this.isActive,
            sort:this.isSort
        }
    }
}

```
3.动态切换css文件（后台支持）
注意：开发环境更改assetsPublicPath='/'
```
import()
```

 > 图片



非常规：https://juejin.cn/post/6844903914198794254