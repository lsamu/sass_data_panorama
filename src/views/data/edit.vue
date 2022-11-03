<template>
  <box-form :option="option"></box-form>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  getCurrentInstance,
  computed,
  reactive,
  ref
} from "@vue/composition-api";


export default defineComponent({
  setup() {
    let root = getCurrentInstance();
    let that: any = root?.proxy;

    let option: any = reactive({
      title: "数据表单",
      footer: {
        visable: true,
        location: "center",
      },
      items: [
        {
          label: "标题",
          type: "input",
          prop: "title",
          rules: [
            { required: true, message: "请输入标题", trigger: "blur" },
            {
              min: 3,
              max: 20,
              message: "长度在 3 到 20 个字符",
              trigger: "blur",
            },
          ],
        },
        { label: "内容", type: "textarea", prop: "content" },
        { label: "颜色", type: "input-color", prop: "inputColor" },
        { label: "下拉", type: "select", prop: "select" },
        {
          span: 12,
          label: "数字1",
          type: "input-number",
          prop: "inputNumber1",
        },
        {
          span: 12,
          label: "数字2",
          type: "input-number",
          prop: "inputNumber2",
        },
        { label: "滑动", type: "slider", prop: "slider" },
        { label: "开关", type: "switch", prop: "switch" },
        {
          label: "编辑",
          text: "编辑",
          type: "button-dialog",
          prop: "button",
          dialog: {
            body: {
              type: "input",
            },
          },
        },
        {
          label: "图片选择",
          text: "图片选择",
          type: "button-dialog",
          prop: "buttonDialog",
          dialog: {
            body: {
              type: "datagrid",
            },
          },
        },
      ],
    });

    option.onSubmit = function (formData: any) {
      console.log(formData);
    };

    return {
      option,
    };
  },
});
</script>
