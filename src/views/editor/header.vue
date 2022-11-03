<template>
  <div class="header">
    <div class="filename">{{ project.thatData.chartData.title }}</div>
    <i
      class="btn iconfont icon-preview"
      @click="handleImportPSD"
      title="导入PSD"
    ></i>
    <i class="btn iconfont icon-preview" @click="project.undo" title="撤销"></i>
    <i class="btn iconfont icon-preview" @click="project.redo" title="重做"></i>
    <i
      class="btn iconfont icon-preview"
      @click="project.clearComponent"
      title="清空组件"
    ></i>
    <i
      class="btn iconfont icon-preview"
      @click="handleJSON"
      title="导出JSON"
    ></i>
    <i
      class="btn iconfont icon-preview"
      @click="handleUniApp"
      title="导出UniApp"
    ></i>
    <i class="btn iconfont icon-preview" @click="handlePDF" title="导出PDF"></i>
    <i class="btn iconfont icon-preview" @click="handleH5" title="生成H5"></i>
    <i
      class="btn iconfont icon-preview"
      @click="handleExport"
      title="导出图片"
    ></i>
    <i
      class="btn iconfont icon-preview"
      @click="handlePreview"
      title="预览"
    ></i>
    <div class="publish-btn" @click="saveChartData">发布</div>
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
  watch,
  toRefs,
} from "@vue/composition-api";
import { useInjector, useProvider } from "../utils/hook";
import { useProjectState } from "./state/useProjectState";
import { saveAs } from "file-saver";

export default defineComponent({
  setup() {
    const root = getCurrentInstance();
    const that: any = root.proxy;

    const project = useInjector(useProjectState);

    let thatData = reactive({});

    const saveChartData = function() {
      that.$parent.saveChartData();
    };

    const handlePreview = function() {
      project.thatData.preview = !project.thatData.preview;
    };

    const handleExport = function() {
      that.$parent.exportChartSnap();
    };

    const handleH5 = function() {
      that.$parent.exportH5();
    };

    const handleUniApp = function() {};

    const handlePDF = function() {
      that.$parent.exportPDF();
    };

    const handleJSON = function() {
      const finalJsonCode = JSON.stringify(project.exportProjectData());
      const htmlBolb = new Blob([finalJsonCode], { type: "text/json" });
      saveAs(htmlBolb, "project.json");
    };

    const handleImportPSD = function(){

    }

    return {
      ...toRefs(thatData),
      saveChartData,
      handlePreview,
      handleExport,
      handleH5,
      project,
      handleUniApp,
      handlePDF,
      handleJSON,
      handleImportPSD
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  display: flex;
  align-items: center;
  background: #333333ee;
  padding: 0 20px;
}

.filename {
  flex: 1;
  text-align: center;
  font-size: 16px;
  color: #ffffff;
}

.btn {
  width: 32px;
  height: 32px;
  line-height: 32px;
  margin-right: 8px;
  text-align: center;
  border-radius: 18px;
  transition: all 0.3s ease;
  color: #aaa;
  &:hover {
    cursor: pointer;
    background-color: #666666;
    color: #ffffff;
  }
  .iconfont {
    font-size: 32px;
  }
  &.active {
    background-color: rgba(255, 255, 255, 0.1);
    color: #409eff;
  }
}

.publish-btn {
  height: 36px;
  line-height: 36px;
  color: #ffffff;
  background: #353535;
  border-radius: 18px;
  padding: 0 18px;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background: #666666;
  }
}
</style>
