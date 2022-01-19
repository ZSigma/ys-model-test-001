<template>
  <div class="pages">
    <div>
      <van-button @click="handleChangeBtnColor">改变量</van-button>
      <van-button @click="handleChangeBodyColor">改链接</van-button>
      <van-button @click="handleReplaceClass">替换Class</van-button>
      <van-button @click="handleChangeImg">换图片</van-button>
    </div>
    <div :class="classObject">替换class</div>
    <van-tabbar
      v-model="activeTab"
      active-color="#1183E5"
      inactive-color="#4F4F4F"
      class="footer-tabbar"
      safe-area-inset-bottom
    >
      <van-tabbar-item icon="setting-o" replace to="/index">
        <span>首页</span>
        <img
          slot="icon"
          class="ys-home-tabbar-img"
          slot-scope="data"
          :src="data.active ? icon.active : icon.normal"
        />
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o" replace to="/information">
        <span>数据</span>
        <img
          slot="icon"
          class="ys-home-tabbar-img"
          slot-scope="data"
          :src="data.active ? search.actives : search.normals"
        />
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o" replace to="/my">
        <span>我的</span>
        <img
          slot="icon"
          class="ys-home-tabbar-img"
          slot-scope="data"
          :src="data.active ? user.actives : user.normals"
        />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      isActive: true,
      isSort: false,
      //首页
      icon: {
        normal: require("../../static/images/icon-home-def.png"),
        active: require("../../static/images/icon-home-sel.png"),
      },
      //数据
      search: {
        normals: require("../../static/images/icon-date-def.png"),
        actives: require("../../static/images/icon-date-sel.png"),
      },
      //我的
      user: {
        normals: require("../../static/images/icon-user-def.png"),
        actives: require("../../static/images/icon-user-sel.png"),
      },
    };
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive,
        sort: this.isSort,
      };
    },
    activeTab: {
      get() {
        return this.active;
      },
      set(newVal) {
        this.$emit("update:active", newVal);
      },
    },
  },

  methods: {
    handleChangeBtnColor() {
      document.body.style.setProperty("--btn-bg-color", "#1183E5");
    },
    handleChangeBodyColor() {
    //   document
        // .getElementById("style")
        // .setAttribute("href", "./static/css/grey.css");
        // import("../../static/css/grey.css")
    },
    handleReplaceClass() {
      this.isSort = true;
    },
    handleChangeImg() {
      this.icon.active = require("../../static/images/el-hg-icon-record.png");
    },
  },
};
</script>
<style lang="less" scoped>
.pages {
  height: 100vh;
  position: relative;
}
.active {
  margin: 16px 0 0 0;
  background-color: #333;
  color: #fff;
  width: 100px;
  padding: 14px;
}
.sort {
  margin: 16px 0 0 0;
  background-color: #fff;
  color: #333;
  width: 100px;
  padding: 14px;
}
// @import url('https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css');

</style>
