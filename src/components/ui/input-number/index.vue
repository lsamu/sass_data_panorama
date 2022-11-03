<template>
  <div class="box-input-number">
    <el-input-number
      v-model="formData"
      :controls-position="currentOption.controlsPosition"
      :min="currentOption.min"
      :max="currentOption.max"
    ></el-input-number>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  getCurrentInstance,
  computed,
  reactive,
  ref,
  watch
} from "@vue/composition-api";

export default defineComponent({
  name: "InputNumber",
  props: ["option", "data", "value"],
  setup(props, context) {
    let formData = reactive(props.value || 0);

    const currentOption = computed(() => {
      let oo = {
        min: -10000000,
        max: 10000000,
        controlsPosition: "right",
      };
      oo = Object.assign(oo, props.option || {});
      return oo;
    });

    watch(
      () => formData,
      (n, o) => {
        context.emit("input", n);
      }
    );

    watch(
      () => props.value,
      (n, o) => {
        formData = n || 0;
      }
    );

    return {
      currentOption,
      formData,
    };
  },
});
</script>
<style lang="scss">
.box-input-number {
  .el-input-number--mini {
    width: 100% !important;
  }
  .el-input-number--small {
    width: 100% !important;
  }
}
</style>
