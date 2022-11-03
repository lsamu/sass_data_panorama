<template>
  <div class="box-echart-map">
    <ve-map
      :data="currentData"
      :setting="currentOption"
      height="100%"
      width="100%"
      :judge-width="true"
      ref="echart"
    ></ve-map>
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
  name: "Map",
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
        columns: ["location", "GDP"],
        rows: [
          { location: "吉林", GDP: 123, person: 123, area: 92134 },
          { location: "北京", GDP: 1223, person: 2123, area: 29234 },
          { location: "上海", GDP: 2123, person: 1243, area: 94234 },
          { location: "浙江", GDP: 4123, person: 5123, area: 29234 },
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
.box-echart-map {
  width: 100%;
  height: 100%;
}
</style>
