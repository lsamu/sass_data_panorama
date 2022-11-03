<template>
  <div class="box-input-color">
    <el-input
      :placeholder="currentOption.placeholder"
      v-model="text"
      :readonly="true"
      @change="handleChange"
      :clearable="true"
    >
      <template #append>
        <el-color-picker
          size="mini"
          v-model="text"
          show-alpha
          @change="handleChange"
          :predefine="predefineColors"
        ></el-color-picker>
      </template>
    </el-input>
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
  name: "InputColor",
  props: ["option", "value"],
  setup(props, context) {
    let formData = reactive({
      text: props.value,
      predefineColors: [
        "#ff4500",
        "#ff8c00",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#c71585",
        "rgba(255, 69, 0, 0.68)",
        "rgb(255, 120, 0)",
        "hsv(51, 100, 98)",
        "hsva(120, 40, 94, 0.5)",
        "hsl(181, 100%, 37%)",
        "hsla(209, 100%, 56%, 0.73)",
        "#c7158577",
      ],
    });
    const currentOption = computed(() => {
      const defaultOption = {
        placeholder: "请选择颜色.",
      };
      let oo = Object.assign(defaultOption, props.option || {});
      return oo;
    });

    const handleChange = function (value: any) {
      let result = value;
      context.emit("input", result);
      context.emit("change", result);
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
      currentOption,
      handleChange,
    };
  },
});
</script>
