<template>
  <div class="box-button">
    <el-button @click="currentMethod.onClick" :type="currentOption.type">
      {{ currentOption.text }}
    </el-button>
  </div>
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
  name: "Button",
  props: {
    option: Object,
    value: Object,
  },
  setup: (props: any, context: any) => {
    const { option, value } = reactive(props);
    const { emit } = context;
    let currentOption = computed(() => {
      const defaultOption = {
        text: "按钮",
      };
      let oo = Object.assign(defaultOption, option || {});
      return oo;
    });

    let currentMethod = {
      onClick: () => {
        if (currentOption.value.onClick != null) {
          currentOption.value.onClick();
        }
        emit("onClick");
      },
    };
    return {
      currentOption,
      currentMethod,
    };
  },
});
</script>
<style lang="scss">
  .box-button{
    display: inline-block;
    padding:0 10px
  }
</style>
