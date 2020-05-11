<template>
  <div class="sidebar" style="background-color: #324157">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <el-menu-item :index="item.index" :key="item.index">
          <i :class="item.icon"></i>
          <span style="margin-left:20px" slot="title">{{ item.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from "../../utils/bus";
export default {
  data() {
    return {
      collapse: false,
      items: [
        {
          icon: "iconfont icon-addarticle",
          index: "publish",
          title: "发表文章"
        },
        {
          icon: "iconfont icon-addtalk",
          index: "addtalk",
          title: "随便说说"
        },
        {
          icon: "iconfont icon-addtag",
          index: "addtags",
          title: "添加标签"
        },
        {
          icon: "iconfont icon-addalbum",
          index: "addalbum",
          title: "添加图集"
        },
        {
          icon: "iconfont icon-addphoto",
          index: "addphotos",
          title: "添加图片"
        },
        {
          icon: "iconfont icon-addfile",
          index: "addfile",
          title: "添加文件"
        }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", msg => {
      this.collapse = msg;
      bus.$emit("collapse-content", msg);
    });
  }
};
</script>

<style >
.sidebar {
  /* display: block; */
  height: 100%;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
