<template>
  <div class="bg-music-wrapper" style="display: block">
    <div
      class="bg-music-btn rotate"
      :style="btnStyle"
      @click="handleToggle"
      :disabled="currentOption.disabled"
    >
      <audio
        :src="currentOption.src"
        :autoplay="currentOption.autoplay"
        preload
        loop
        ref="bgAudio"
        @click="handleToggle"
      ></audio>
    </div>
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  reactive,
} from "@vue/composition-api";
import merge from "deepmerge";
import "./bg-music.scss";

export default defineComponent({
  name: "Music",
  props: ["option", "data", "value"],
  setup(props, context) {
    const root = getCurrentInstance();
    const that = root.proxy;

    const thatData = reactive({
      isPlaying: true,
    });

    const currentOption = computed(() => {
      const defaultOption = {
        src: "http://go.163.com/2018/0209/mengniu/audio/bgm.mp3",
        autoplay: true,
        disabled: true,
      };
      let oo = merge(defaultOption, props.option || {});
      return oo;
    });

    const btnStyle = {
      "animation-play-state": thatData.isPlaying ? "running" : "paused",
    };

    const handleToggle = function () {
      let bgAudio = that.$refs["bgAudio"] as any;
      if (!bgAudio) return;

      thatData.isPlaying ? bgAudio.pause() : bgAudio.play();
      thatData.isPlaying = !thatData.isPlaying;
    };

    return {
      btnStyle,
      currentOption,
      handleToggle,
    };
  },
});
</script>
