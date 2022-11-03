<template>
  <div class="panel">
    <div class="control-bar">
      <i class="btn el-icon-minus" @click="zoomOut"></i>
      <div class="scale-mount">{{ scale * 100 }}%</div>
      <i class="btn el-icon-plus" @click="zoomIn"></i>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  getCurrentInstance,
  computed,
  reactive,
  ref,
  toRefs,
  watch,
} from "@vue/composition-api";

import { useInjector, useProvider } from "../utils/hook";
import { useProjectState } from "./state/useProjectState";

export default defineComponent({
  setup() {
    const root = getCurrentInstance();
    const that: any = root.proxy;

    const project = useInjector(useProjectState);

    const thatData = reactive({
      scale: 1,
    });

    watch(
      () => thatData.scale,
      (n, o) => {
        project.thatData.scale = n;
      }
    );

    const zoomOut = function () {
      if (thatData.scale > 0.1) {
        thatData.scale = parseFloat((thatData.scale - 0.1).toFixed(1));
      }
    };
    const zoomIn = function () {
      if (this.scale < 1) {
        thatData.scale = parseFloat((thatData.scale + 0.1).toFixed(1));
      }
    };

    return {
      ...toRefs(thatData),
      zoomOut,
      zoomIn,
    };
  },
});
</script>

<style lang="scss" scoped>
.panel {
  width: 130px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  background: #ffffffe9;
  border: 1px solid #cccccc;
}

.control-bar {
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  height: 32px;
  color: #666666;
  padding: 0 6px;

  .btn {
    width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 14px;
    font-size: 12px;
    transition: all 0.3s ease;

    &:hover {
      cursor: pointer;
      background-color: #dddddd;
      color: #333333;
    }
  }

  .scale-mount {
    flex: 1;
    font-size: 14px;
  }
}

.canvas-view {
  position: relative;
  background: #1e1e1ee9;
  width: 144px;
  margin: 6px 8px;
  height: 120px;
}

.canvas-box {
  background: rgba(255, 255, 255, 0.08);
  transition: all 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }
}

.canvas-box-dragging,
.canvas-box-dragging:hover {
  background: rgba(255, 255, 255, 0.16);
}
</style>
