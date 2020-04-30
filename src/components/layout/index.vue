<template>
  <div class="container">
    <Header></Header>
    <div class="center">
      <div class="sider">
      <Sidebar ></Sidebar>
      </div>
      <div class="content-box">
        <div class="crumbs">{{title}}</div>
        <div class="content">
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import Sidebar from "./Sidebar";
export default {
  name: "home",
  components: {
    Header,
    Sidebar
  },
  data() {
    return {
      title: this.$route.meta.title
    };
  },
  watch: {
    $route(to, from) {
      this.title = to.meta.title;
    }
  }
};
</script>

<style lang="less" scoped>
.center {
  display: flex;
  min-height: calc(100vh - 70px);
  .side{
    background-color: #324157;
  }
  
  .content-box {
    box-sizing: border-box;
    width: 100%;
    background: #eeeeee;
    padding: 30px;
    .crumbs {
      margin: 0 0 10px 0;
    }
    .content {
      padding: 30px;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 5px;
      
    }
  }
}
</style>