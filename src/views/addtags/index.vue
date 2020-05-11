<template>
  <div>
    <div class="tags-input">标签名:</div>
    <el-input v-model.trim="name" placeholder></el-input>
    <div class="tags-input">图标名:</div>
    <el-input v-model.trim="icon" placeholder></el-input>
    <div class="tags-input">标签描述:</div>
    <el-input v-model.trim="description" placeholder></el-input>
    <div class="tags-input">背景图地址:</div>
    <el-input v-model.trim="img" placeholder></el-input>
    <div class="tags-input">阿里iconfont地址:</div>
    <el-input v-model.trim="iconfontUrl" placeholder></el-input>
    <div class="tags-input"></div>
    <el-button class="editor-btn" type="primary" @click="onSubmit">提交</el-button>
  </div>
</template>

<script>
import { addtag, addiconfontUrl } from "../../api";
export default {
  name: "AddTags",
  components: {},
  data() {
    return {
      name: "",
      icon: "tag-",
      img: "/static/images/tag/",
      description: "",
      iconfontUrl: ""
    };
  },
  methods: {
    onSubmit() {
      return Promise.all([
        addtag(this.name, this.icon, this.description, this.img),
        addiconfontUrl(this.iconfontUrl)
      ])
        .then(res => {
          alert("提交成功");
        })
        .catch(err => {
          alert("提交失败");
        });
    }
  }
};
</script>

<style>
.tags-input {
  margin: 10px 0 10px 0;
}
</style>