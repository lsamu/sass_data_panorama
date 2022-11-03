<template>
  <el-input
    :placeholder="currentOption.placeholder"
    v-model="value"
    :show-password="currentOption.style=='password'"
    :type="currentOption.type"
  ></el-input>
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
  name: "Input",
  props: {
    option: Object,
    value: Object,
  },
  setup: (props: any, context: any) => {
    const { option, value } = reactive(props);
    const { emit } = reactive(context);

    let currentOption = computed(() => {
      const defaultOption = {
        type:"input",
        placeholder: "请输入内容",
        autosize:false
      };
      let oo = Object.assign(defaultOption, option || {});
      return oo;
    });

    let currentMethod = {

    };

    return {
      currentOption,
      currentMethod,
      value,
    };
  },
});
</script>
