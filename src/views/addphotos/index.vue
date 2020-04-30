<template>
  <div>
    <div class="tags-input">选择相册</div>
    <el-radio
      v-for="item in album"
      :key="item.name"
      v-model="curAlbum"
      :label="item.name"
    >{{item.name}}</el-radio>
    <div class="tags-input">图片链接</div>
    <el-input v-model.trim="img" placeholder></el-input>
    <div class="tags-input"></div>
    <el-button class="editor-btn" type="primary" @click="onSubmit">提交</el-button>
  </div>
</template>

<script>
import { getAlbum,addPhoto } from "../../api";

export default {
  data() {
    return {
      curAlbum: "",
      img:"",
      album: []
    };
  },
  mounted() {
    this.togetAlbum();
  },
  methods: {
    async togetAlbum() {
      let res = await getAlbum();
      if (res.status === 0) {
        this.album = res.data;
      }
    },
    async onSubmit() {
      let result = await addPhoto(this.curAlbum, this.img);
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