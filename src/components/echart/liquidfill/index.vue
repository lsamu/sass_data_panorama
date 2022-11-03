<template>
  <div class="box-echart-liquidfill">
    <ve-liquidfill
      :data="currentData"
      :setting="currentOption"
      height="100%"
      width="100%"
      :judge-width="true"
      ref="echart"
    ></ve-liquidfill>
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
  name: "Liquidfill",
  components: {},
  props: ["option", "data", "value"],
  setup(props, context) {
    const root = getCurrentInstance();
    const that = root.proxy;

    const currentOption = computed(() => {
      let oo = {
        height: (props.option?.h || 200) + "px",
      };
      nextTick(() => {
        (that.$refs["echart"] as any).echarts.resize();
      });
      return oo;
    });

    const currentData = computed(() => {
      let oo = {
        columns: ["city", "percent"],
        rows: [
          {
            city: "ShangHai",
            percent: 0.6,
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
.box-echart-liquidfill {
  width: 100%;
  height: 100%;
}
</style>
