<template>
  <div>
    <div class="container">
      <mavon-editor
        v-model="content"
        ref="md"
        @imgAdd="$imgAdd"
        @change="change"
        style="min-height: 600px"
      />
      <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { uploadImg } from "../../api";

export default {
  name: "markdown",
  data: function() {
    return {
      content: "",
      html: "",
      configs: {}
    };
  },
  components: {
    mavonEditor
  },
  methods: {
    // 将图片上传到服务器，返回地址替换到md中
    $imgAdd(pos, $file) {
      var formdata = new FormData();
      console.log(pos);
      formdata.append("file", $file);
      // 这里没有服务器供大家尝试，可将下面上传接口替换为你自己的服务器接口
      uploadImg(formdata)
        .then(res => {
          this.$refs.md.$img2Url(pos, res.data[0]);
        })
        .catch(err => {
          alert("上传失败");
        });
    },
    change(value, render) {
      // render 为 markdown 解析后的结果
      this.html = render;
    },
    submit() {
      this.$emit("submit", this.content);
    }
  }
};
</script>
<style scoped>
.editor-btn {
  margin-top: 20px;
}
</style>