<template>
  <div class="box-echart-text">
    
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";
import merge from 'deepmerge';

export default defineComponent({
  name: "BoxEchartText",
  components: {},
  props: ["option", "data", "value"],
  setup(props, context) {
    const currentOption = computed(() => {
      let oo = {};
      return oo;
    });

    const currentData = computed(() => {
      let oo = {};
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
  .box-echart-text{
    width:100%;
    height:100%;
  }
</style>