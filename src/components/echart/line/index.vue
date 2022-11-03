<template>
  <div class="box-echart-line">
    <ve-line
      :data="currentData"
      :settings="currentOption"
      height="100%"
      width="100%"
      :judge-width="true"
      ref="echart"
    ></ve-line>
    <!-- <ve-line :data="currentData" :settings="currentOption" :height="currentOption.height" ref="echart"></ve-line> -->
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
  name: "BoxEchartLine",
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
          {
            cost: 3123,
            date: "01/05",
            profit: 1523,
            growthRate: 0.12,
            people: 100,
          },
          {
            cost: 7123,
            date: "01/06",
            profit: 1523,
            growthRate: 0.65,
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
.box-echart-line {
  width: 100%;
  height: 100%;
}
</style>
