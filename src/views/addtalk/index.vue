<template>
  <div>
    <el-input v-model="content" placeholder="随便说点什么吧"></el-input>
    <el-button class="editor-btn" type="primary" @click="onSubmit">提交</el-button>
  </div>
</template>

<script>
import { addtalk } from '../../api';
export default {
  name: "Talk",
  data() {
    return {
      content: ""
    };
  },
  methods: {
    //网络请求
    async toAddtalk(params) {
      let res = await addtalk(params);
      if (res.status === 0) {
        alert("提交成功！");
      }else{
        alert("提交失败！")
      }
    },

    onSubmit() {
      this.toAddtalk(this.content)
    }
  }
};
</script>
<style scoped>
.editor-btn {
  margin-top: 20px;
}
</style>