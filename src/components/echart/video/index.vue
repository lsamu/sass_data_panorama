<template>
  <div class="box-echart-video">
    <video
      controls=""
      autoplay=""
      loop=""
      :width="currentOption.width"
      :height="currentOption.height"
      style="object-fit: fill"
      class="video"
    >
      <source :src="currentData" />
    </video>
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  toRefs,
  watch
} from "@vue/composition-api";
import merge from 'deepmerge';

export default defineComponent({
  name: "Video",
  components: {},
  props: ["option", "data", "value"],
  setup(props, context) {
    const thatData = reactive({});

    const currentOption = computed(() => {
      let oo = {
        width: (props.option?.width || "200") + "px",
        height: (props.option?.height || "200") + "px",
      };
      return oo;
    });

    const currentData = computed(() => {
      let oo = props.data || "#";
      return oo;
    });

    return {
      ...toRefs(thatData),
      currentOption,
      currentData,
    };
  },
});
</script>
<style lang="scss">
.box-echart-video {
  width: 100%;
  height: 100%;
  .video {
    width: 100%;
    height: 100%;
  }
}
</style>
