<template>
  <div class="box-select">
    <el-select
      v-model="formData"
      :placeholder="currentOption.placeholder"
      @focus="handleFocus"
      @blur="handleBlur"
      @click.native="handleClick"
      @change="handleChange"
      :clearable="currentOption.clearable"
    >
      <el-option
        :label="item.label"
        :value="item.value"
        v-for="(item, index) in dataSource"
        :key="index"
      ></el-option>
    </el-select>
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
  name: "Select",
  props: ["option", "data", "value"],
  setup(props, context) {
    const root = getCurrentInstance();
    const that: any = root?.proxy;

    const formData = reactive({
      formData: null,
      dataType: "array",
      dataSource: [],
    });

    const currentOption = computed(() => {
      const defaultOption = {};
      let oo = Object.assign(defaultOption, props.option || {});
      return oo;
    });

    onMounted(() => {
      formData.formData = props.value;
      initData();
    });

    const initData = async function () {
      let data = props.data || props.option.data;
      //判断data类型
      if (isArray(data)) {
        formData.dataType = "array";
        formData.dataSource = data;
      } else if (typeof data == "string") {
        formData.dataType = "json";
      } else if (typeof data == "function") {
        formData.dataType = "function";
        let ret = await data();
        formData.dataSource = ret;
      }
      //   else if (typeof data == "object") {
      //     formData.dataType = "object";
      //     if (data.methed == "post") {
      //       let ret = await Axios.post(this.data.url, this.data.data, {
      //         headers: this.data.headers,
      //       });
      //       this.dataSource = ret["data"];
      //     }
      //   }
      else {
        formData.dataType = "array";
        formData.dataSource = [];
      }
    };

    const isArray = function (object: any) {
      return (
        object &&
        typeof object === "object" &&
        typeof object.length === "number" &&
        typeof object.splice === "function" &&
        !object.propertyIsEnumerable("length")
      );
    };

    const handleFocus = function () {};
    const handleBlur = function () {};
    const handleClick = function () {};

    const handleChange = async function (value: any) {
      context.emit("input", value);
      context.emit("change", value);
      if (
        currentOption != null &&
        typeof currentOption.value.onChange == "function"
      ) {
        await currentOption.value.onChange(value);
      }
    };

    const setOption = function (name: any, val: any) {
      that.$set(currentOption.value, name, val);
      that.$forceUpdate();
    };

    watch(
      () => formData.formData,
      (n, o) => {
        handleChange(n);
      },
      { deep: true }
    );

    watch(
      () => props.value,
      (n, o) => {
        formData.formData = n;
        that.$forceUpdate();
      }
    );

    return {
      ...formData,
      currentOption,
      handleFocus,
      handleBlur,
      handleClick,
      handleChange,
      setOption,
    };
  },
});
</script>
