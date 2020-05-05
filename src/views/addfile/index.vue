<template>
  <div>
    <div class="tags-input">文件类型:</div>
    <el-radio v-model="curcategory" label="学习资料">学习资料</el-radio>
    <el-radio v-model="curcategory" label="工具">工具</el-radio>
    <el-radio v-model="curcategory" label="电影">电影</el-radio>
    <el-radio v-model="curcategory" label="书籍">书籍</el-radio>
    <el-radio v-model="curcategory" label="动画">动画</el-radio>
    <el-radio v-model="curcategory" label="其他">其他</el-radio>
    <div class="tags-input">文件名:</div>
    <el-input v-model="name" placeholder></el-input>
    <div class="tags-input">文件链接:</div>
    <el-input v-model.trim="fileurl" placeholder></el-input>
    <div class="tags-input">提取码:</div>
    <el-input v-model.trim="pwd" placeholder></el-input>
    <div class="tags-input"></div>
    <el-button class="editor-btn" type="primary" @click="onSubmit"
      >提交</el-button
    >
  </div>
</template>

<script>
import { addFile } from '../../api';

export default {
  name: "AddFile",
  data() {
    return {
      name: "",
      curcategory: "",
      fileurl: "",
      pwd: "",
    };
  },
  methods: {
    async onSubmit() {
      let result = await addFile(
        this.name,
        this.curcategory,
        this.fileurl,
        this.pwd
      );
      if (result.status === 0) {
        alert("提交成功");
      }
    },
  },
};
</script>

<style>
.tags-input {
  margin: 10px 0 10px 0;
}
</style>
