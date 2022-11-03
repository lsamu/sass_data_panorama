<template>
  <el-switch
    v-model="text"
    @change="handleChange"
    :active-value="1"
    :inactive-value="0"
  ></el-switch>
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
  name: "Switch",
  props: ["option", "value"],
  setup(props, context) {
    let formData = reactive({
      text: props.value,
    });

    const handleChange = function (value: any) {
      context.emit("input", value);
      context.emit("change", value);
    };

    watch(
      () => formData.text,
      (n, o) => {
        handleChange(n);
      }
    );

    watch(
      () => props.value,
      (n, o) => {
        formData.text = n;
      }
    );

    return {
      ...formData,
      handleChange,
    };
  },
});
</script>
