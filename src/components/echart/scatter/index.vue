<template>
  <div class="box-echart-scatter">
    <ve-scatter
      :data="currentData"
      :setting="currentOption"
      height="100%"
      width="100%"
      :judge-width="true"
      ref="echart"
    ></ve-scatter>
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
} from "@vue/composition-api";
import merge from 'deepmerge';

export default defineComponent({
  name: "Scatter",
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
        columns: ["date", "PV", "order", "age"],
        rows: [
          { date: "1/1", PV: 123, age: 3, order: 1244 },
          { date: "1/2", PV: 1223, age: 6, order: 2344 },
          { date: "1/3", PV: 7123, age: 9, order: 3245 },
          { date: "1/4", PV: 4123, age: 12, order: 4355 },
          { date: "1/5", PV: 3123, age: 15, order: 4564 },
          { date: "1/6", PV: 2323, age: 20, order: 6537 },
        ],
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
.box-echart-scatter {
  width: 100%;
  height: 100%;
}
</style>
