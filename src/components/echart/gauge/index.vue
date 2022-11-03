<template>
  <div class="box-echart-gauge">
    <ve-gauge
      :data="currentData"
      :setting="currentOption"
      height="100%"
      width="100%"
      :judge-width="true"
      ref="echart"
    ></ve-gauge>
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
} from "@vue/composition-api";
import merge from "deepmerge";

export default defineComponent({
  name: "Gauge",
  components: {},
  props: ["option", "data", "value"],
  setup(props, context) {
    const root = getCurrentInstance();
    const that = root.proxy;

    const currentOption = computed(() => {
      const defaultOption = {
        height: 200 + "px",
      };
      let oo = merge(defaultOption, props.option || {});
      nextTick(() => {
        (that.$refs["echart"] as any).echarts.resize();
      });
      return oo;
    });

    const currentData = computed(() => {
      let oo = {
        columns: ["type", "value"],
        rows: [{ type: "speed", value: 80, a: 1, b: 2 }],
      };
      return oo;
    });
    return {
      currentOption,
      currentData,
    };
  },
});
</script>
<style lang="scss">
.box-echart-gauge {
  width: 100%;
  height: 100%;
}
</style>
