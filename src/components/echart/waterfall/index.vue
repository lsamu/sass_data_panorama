<template>
  <div class="box-echart-waterfall">
    <ve-waterfall :data="currentData" :settings="currentOption"  height="100%" width="100%" :judge-width="true"  ref="echart"></ve-waterfall>
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
  name: "Waterfall",
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
        columns: ["action", "time"],
        rows: [
          { action: "eat", time: 4 },
          { action: "sleep", time: 10 },
          { action: "learn", time: 5 },
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
.box-echart-waterfall {
  width: 100%;
  height: 100%;
}
</style>
