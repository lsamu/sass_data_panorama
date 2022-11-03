<template>
  <div class="box-echart-funnel">
    <ve-funnel :data="currentData" :setting="currentOption" :height="currentOption.height" ref="echart"></ve-funnel>
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
  name: "Funnel",
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
        columns: ["status", "status1", "value"],
        rows: [
          { status: "display", status1: "display1", value: 900 },
          { status: "visit", status1: "visit1", value: 600 },
          { status: "click", status1: "click1", value: 300 },
          { status: "order", status1: "order1", value: 100 },
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
.box-echart-funnel {
  width: 100%;
  height: 100%;
}
</style>
