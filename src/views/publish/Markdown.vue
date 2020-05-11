<template>
  <div>
    <div class="container">
      <mavon-editor
        v-model="content"
        ref="md"
        @imgAdd="$imgAdd"
        @change="change"
        @save="save"
        style="min-height: 600px"
        :toolbars="toolbars"
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
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        strikethrough: true, // 中划线
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        navigation: true, // 导航目录
        subfield: true, // 单双栏模式
        preview: true // 预览}
      }
    };
  },
  components: {
    mavonEditor
  },
  mounted() {
    // console.log(111,JSON.parse(localStorage.getItem('draft'))
    this.content = JSON.parse(localStorage.getItem("draft")).content;
    this.timeid=window.setInterval(()=>{
      let temp=this.content
      localStorage.setItem("draft", JSON.stringify({ content:temp}))
    }, 1000*60*5);
    
  },
  destroyed(){
    window.clearInterval(this.timeid)
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
    save(value, render) {
      // render 为 markdown 解析后的结果
      console.log(this.content)
      localStorage.setItem("draft", JSON.stringify({ content: this.content }));
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