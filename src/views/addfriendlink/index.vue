<template>
  <div>
    <div class="tags-input">名字</div>
    <el-input v-model="name" placeholder></el-input>
    <div class="tags-input">链接:</div>
    <el-input v-model="link" placeholder></el-input>
    <div class="tags-input">描述</div>
    <el-input v-model="description" placeholder></el-input>
    <div class="tags-input"></div>
    <el-button class="editor-btn" type="primary" @click="onSubmit"
      >提交</el-button
    >
  </div>
</template>

<script>
import { addFriendlink } from '../../api';

export default {
  name: "AddFriendlink",
  data() {
    return {
      name: "",
      link: "",
      description: "",
    };
  },
  methods: {
    async onSubmit() {
      console.log(this.$data)
      let result = await addFriendlink(
        this.$data
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
