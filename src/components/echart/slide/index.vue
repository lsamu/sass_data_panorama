<template>
  <div class="box-echart-slide"></div>
</template>
<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";
import merge from 'deepmerge';

export default defineComponent({
  name: "Slide",
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
  .box-echart-slide{
    width:100%;
    height:100%;
  }
</style>