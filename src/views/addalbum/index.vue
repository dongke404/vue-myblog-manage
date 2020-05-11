<template>
  <div>
    <div class="tags-input">图集名:</div>
    <el-input v-model.trim="name" placeholder></el-input>
    <div class="tags-input">图集简介:</div>
    <el-input v-model.trim="description" placeholder></el-input>
    <div class="tags-input">背景图地址:</div>
    <el-input v-model.trim="img" placeholder></el-input>
    <div class="tags-input"></div>
    <el-button class="editor-btn" type="primary" @click="onSubmit">提交</el-button>
  </div>
</template>

<script>
import { addAlbum } from "../../api";
export default {
  name: "AddAlbum",
  components: {},
  data() {
    return {
      name: "",
      img: "/static/images/photo/album/",
      description: ""
    };
  },
  methods: {
    async onSubmit() {
      let result = await addAlbum(this.name, this.description, this.img);
      if (result.status === 0) {
        alert("提交成功");
      }
    }
  }
};
</script>

<style>
.tags-input {
  margin: 10px 0 10px 0;
}
</style>