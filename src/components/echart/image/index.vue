<template>
  <div class="box-echart-image">
    <img class="imagecontainer" :src="currentData" draggable="false" />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";
import merge from "deepmerge";

export default defineComponent({
  name: "BoxEchartImage",
  components: {},
  props: ["option", "data", "value"],
  setup(props, context) {
    const currentOption = computed(() => {
      let oo = merge({}, props.option);
      return oo;
    });

    const currentData = computed(() => {
      let oo = props.data || "#";
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
.box-echart-image {
  width: 100%;
  height: 100%;
  .imagecontainer {
    width: 100%;
    height: 100%;
    .placeholder {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
