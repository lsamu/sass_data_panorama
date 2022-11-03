<template>
  <div class="box-echart-iframe">
    <iframe
      class="frame"
      :src="currentOption"
      frameborder="0"
    ></iframe>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api";
import merge from 'deepmerge';

export default defineComponent({
  name: "Iframe",
  components: {},
  props: ["option", "data", "value"],
  setup(props, context) {
    const currentOption = computed(() => {
      let oo = props.option?.url || "http://www.qq.com";
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
.box-echart-iframe {
  width: 100%;
  height: 100%;
  .frame {
    width: 100%;
    height: 100%;
  }
}
</style>
