<template>
  <div class="box-echart-histogram">
    <ve-histogram
      :settings="currentOption"
      :data="currentData"
      height="100%"
      width="100%"
      :judge-width="true"
      ref="echart"
    ></ve-histogram>
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
  name: "Histogram",
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
        columns: ["date", "cost", "profit", "growthRate", "people"],
        rows: [
          {
            cost: 1523,
            date: "01/01",
            profit: 1523,
            growthRate: 0.12,
            people: 100,
          },
          {
            cost: 1223,
            date: "01/02",
            profit: 1523,
            growthRate: 0.345,
            people: 100,
          },
          {
            cost: 2123,
            date: "01/03",
            profit: 1523,
            growthRate: 0.7,
            people: 100,
          },
          {
            cost: 4123,
            date: "01/04",
            profit: 1523,
            growthRate: 0.31,
            people: 100,
          },
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
.box-echart-histogram {
  width: 100%;
  height: 100%;
}
</style>
