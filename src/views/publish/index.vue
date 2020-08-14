<template>
  <div>
    <div class="container">
      <div class="form-box">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="主题">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="介绍">
            <el-input v-model="form.description"></el-input>
          </el-form-item>
          <el-form-item label="文章归类">
            <el-radio-group v-model="form.category">
              <el-radio label="学习"></el-radio>
              <el-radio label="思考"></el-radio>
              <el-radio label="日常"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="文章源">
            <el-radio-group v-model="form.origin">
              <el-radio label="原创"></el-radio>
              <el-radio label="转载"></el-radio>
              <el-radio label="参考"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="是否公开">
            <el-radio-group v-model="form.privacy">
              <el-radio label="公开"></el-radio>
              <el-radio label="私人"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="文章标签">
            <el-checkbox-group v-model="form.tags">
              <el-checkbox
                v-for="(item,index) in taglist"
                :key="index"
                :label="item.name"
                name="tag"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <Markdown @submit="onSubmit" />
  </div>
</template>

<script>
import Markdown from "./Markdown";
import { publish, gettags } from "../../api";
export default {
  name: "Publish",
  components: {
    Markdown
  },
  data() {
    return {
      taglist: [],
      form: {
        title: "",
        description: "",
        category: "学习",
        origin: "原创",
        tags: [],
        privacy:"公开"
      }
    };
  },
  mounted() {
    this.togettags();
  },
  methods: {
    //网络请求
    async pubArticle(params) {
      let res = await publish(params);
      if (res.status === 0) {
        alert("提交成功！");
        this.form = {
          title: "",
          description: "",
          category: "学习",
          origin: "原创",
          tags: []
        };
      }
    },
    async togettags() {
      let res = await gettags();
      if (res.status === 0) {
        this.taglist = res.data;
      }
    },

    onSubmit(markvalue) {
      let param = this.form;
      param.markvalue = markvalue;
      this.pubArticle(param);
    }
  }
};
</script>

<style>
</style>