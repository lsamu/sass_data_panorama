<template>
  <div class="box-echart-bmap">
    <ve-bmap
      :settings="chartSettings"
      :series="chartSeries"
      :tooltip="chartTooltip"
      height="100%"
      width="100%"
      :judge-width="true"
      ref="echart"
    ></ve-bmap>
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
  reactive,
} from "@vue/composition-api";
import merge from 'deepmerge';

export default defineComponent({
  name: "Bmap",
  components: {},
  props: ["option", "data", "value"],
  setup(props, context) {
    const root = getCurrentInstance();
    const that = root.proxy;

    const thatData = reactive({
      chartSettings: {
        key: "oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK",
        bmap: {
          center: [120, 30],
          zoom: 14,
          roam: true,
          mapStyle: {},
        },
      },
      chartTooltip: { show: true },
      chartSeries: [
        {
          type: "scatter",
          coordinateSystem: "bmap",
          data: [
            [120, 30, 1], // lat，lng，value，...
          ],
        },
      ],
    });

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
        columns: ["date", "cost", "profit"],
        rows: [
          { date: "01/01", cost: 123, profit: 3 },
          { date: "01/02", cost: 1223, profit: 6 },
          { date: "01/03", cost: 2123, profit: 90 },
          { date: "01/04", cost: 4123, profit: 12 },
          { date: "01/05", cost: 3123, profit: 15 },
          { date: "01/06", cost: 7123, profit: 20 },
        ],
      };
    });
    return {
      ...thatData,
      currentOption,
      currentData,
    };
  },
});
</script>
<style lang="scss">
.box-echart-bmap {
  width: 100%;
  height: 100%;
}
</style>
