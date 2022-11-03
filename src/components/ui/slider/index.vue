<template>
  <div class="box-slider">
    <el-slider
      v-model="formData"
      :min="currentOption.min"
      :max="currentOption.max"
    ></el-slider>
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
  name: "Slider",
  props: ["option", "value"],
  setup(props, context) {
    let formData = reactive(props.value || 0);

    const currentOption = function () {
      let oo = {
        min: 0,
        max: 100,
      };
      oo = Object.assign(oo, props.option || {});
      return oo;
    };

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
