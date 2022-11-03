<template>
  <div
    class="box-echart-border"
    :style="{
      backgroundColor: currentOption.bgColor,
    }"
  >
    <div
      class="bordercontainer"
      :style="{ opacity: currentOption.opacity, borderImage: '' }"
    ></div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";
import merge from 'deepmerge';

export default defineComponent({
  name: "Border",
  components: {},
  props: ["option", "data", "value"],
  setup(props, context) {
    const currentOption = computed(() => {
      let oo = {
        bgColor: props.option?.bgColor || "",
        borderImage: props.option?.borderImage || "",
        opacity: props.option?.opacity || "",
      };
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
.box-echart-border {
  .bordercontainer {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 50px solid transparent;

    // &.border1 {
    //   border: 50px solid transparent;
    //   border-image: url('./../../assets/img/borders/1.png') 50;
    // }
    // &.border2 {
    //   border: 50px solid transparent;
    //   border-image: url('./../../assets/img/borders/2.png') 50;
    // }
    // &.border3 {
    //   border: 50px solid transparent;
    //   border-image: url('./../../assets/img/borders/3.png') 50;
    // }
  }
}
</style>
<style lang="scss">
.box-echart-border {
  width: 100%;
  height: 100%;
}
</style>
