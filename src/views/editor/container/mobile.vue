<template>
  <div class="mobile-container">
    <div class="header">
      <img src="./assets/img/状态栏.png" />
      <div style="position: relative; width: 100%;">
        <img src="./assets/img/标题栏-带返回按钮.png" />
        <div class="title">
          {{ thatData.currentOption.title || "页面标题" }}
        </div>
      </div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from "@vue/composition-api";

export default defineComponent({
  props: ["option", "data", "value"],
  setup(props, context) {
    const currentOption = computed(() => {
      const defaultOption = {
        title: "页面",
        elements: [],
      };
      let oo: {title:string,elements:[]} = Object.assign(defaultOption, props.option || {});
      return oo;
    });
    const thatData = reactive({
      currentOption,
    });

    return {
      thatData,
    };
  },
});
</script>
<style lang="scss">
.mobile-container {
  border: 1px solid rgba(220, 220, 220, 1);
  width: 375px;
  height: 667px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  .header {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    cursor: pointer;
    background: white;
    .title {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .content {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 1);
  }
}
</style>
